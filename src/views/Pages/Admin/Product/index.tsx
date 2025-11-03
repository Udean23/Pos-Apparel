import { Breadcrumb } from "@/views/Components/breadcrumb";

const Product = () => {
    return (
            <div className="p-4 md:p-6 space-y-6 bg-gray-50 min-h-screen">
                <Breadcrumb
                    title='Product'
                    desc='Halaman untuk mengelola produk'
                />
            </div>
    );
}  
export default Product;