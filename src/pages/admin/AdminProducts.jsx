import { Flower } from "lucide-react";
import {
    useGetProductsQuery,
    useDeleteProductMutation,
} from "../../app/api/productsApi";
import AdminProductTable from "../../components/dashboard/products/AdminProductTable";
import Loader from "../../components/shared/Loader";
import Button from "../../components/shared/Button";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/shared/Pagination";
import { useState } from "react";

const AdminProducts = () => {
    const { data: products, isLoading } = useGetProductsQuery();
    const [deleteProduct] = useDeleteProductMutation();
    const navigate = useNavigate();

    const [page, setPage] = useState(1); // <-- move here, always called

    if (isLoading) return <Loader />;

    const productsPerPage = 6;
    const totalPages = Math.ceil(products.length / productsPerPage);

    const paginatedProducts = products.slice(
        (page - 1) * productsPerPage,
        page * productsPerPage
    );

    return (
        <div>
            <div className="flex justify-between mb-2">
                <h1 className="text-xl font-semibold mb-4">Products</h1>
                <Button onClick={() => navigate(`/admin/products/add/`)} variant="secondary">
                    <Flower size={18} /> Add
                </Button>
            </div>

            <AdminProductTable products={paginatedProducts} onDelete={deleteProduct} />

            <Pagination page={page} setPage={setPage} total={totalPages} />
        </div>
    );
};

export default AdminProducts;
