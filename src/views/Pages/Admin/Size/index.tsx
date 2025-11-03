import { useState } from "react";
import { Edit, Trash2, Search, Filter, Plus } from "lucide-react";
import { Breadcrumb } from "@/views/Components/breadcrumb";
import sizeData from "@/core/dummy/sizeData";
import AddSizeModal from "@/views/Components/Modal/Size/AddSizeModal";
import EditSizeModal from "@/views/Components/Modal/Size/EditSizeModal";
import FilterModal from "@/views/Components/Modal/Size/FilterModal";

const itemsPerPage = 8;

const Size = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const filtered = sizeData.filter((size) =>
    size.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  const startItem = (page - 1) * itemsPerPage + 1;
  const endItem = Math.min(page * itemsPerPage, filtered.length);

  return (
    <div className="p-3">
      <Breadcrumb
        title="Size"
        desc="Kelola size produk Anda di sini"
      />
      <div className="p-4 mt-4 bg-white">
        <div className="rounded-lg mb-6">
          <div className="flex items-center gap-3">
            <div className="flex-1 flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
              <div className="pl-3 pr-2">
                <Search className="w-4 h-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Cari sesuatu..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="px-2 py-3 w-full text-sm focus:outline-none"
              />
              <button
                onClick={() => setIsFilterOpen(true)}
                className="px-4 border-l border-gray-300 hover:bg-gray-50 flex items-center justify-center h-full"
              >
                <Filter className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <button
              onClick={() => setIsAddOpen(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-[#0050E0] to-purple-600 hover:bg-gradient-to-tr hover:from-[#0050E0] hover:to-purple-600 text-white px-4 py-3 rounded-lg text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Tambah Size
            </button>
          </div>
        </div>

        <div className="rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  No
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Item Terkait
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Tanggal Dibuat
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginated.map((size, index) => (
                <tr key={size.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3 text-sm text-gray-900">
                    {(page - 1) * itemsPerPage + index + 1}.
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-900 font-medium">
                    {size.name}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-600">
                    {size.productCount} item
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-600">
                    {size.createdAt}
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedSize(size);
                          setIsEditOpen(true);
                        }}
                        className="w-8 h-8 bg-orange-500 hover:bg-orange-600 text-white rounded flex items-center justify-center"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded flex items-center justify-center">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-b-lg px-6 py-4 flex items-center justify-between text-sm text-gray-600 border-t border-gray-200">
          <div>
            Menampilkan {startItem} - {endItem} dari {filtered.length} data
          </div>
          <div className="flex items-center gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className={`px-3 py-1 border rounded ${
                page === 1
                  ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx + 1}
                onClick={() => setPage(idx + 1)}
                className={`w-8 h-8 border rounded ${
                  page === idx + 1
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {idx + 1}
              </button>
            ))}

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className={`px-3 py-1 border rounded ${
                page === totalPages
                  ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <AddSizeModal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} />
      <EditSizeModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        defaultValue={selectedSize?.name}
      />
      <FilterModal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </div>
  );
};

export default Size;