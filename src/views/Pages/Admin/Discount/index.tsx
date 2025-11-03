import { Breadcrumb } from "@/views/Components/breadcrumb";

const Discount = () => {
    return (
            <div className="p-4 md:p-6 space-y-6 bg-gray-50 min-h-screen">
                <Breadcrumb
                    title='Discount'
                    desc='Halaman untuk mengelola diskon produk'
                />
            </div>
    );
}
export default Discount;