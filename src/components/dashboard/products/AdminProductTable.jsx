import { useNavigate } from "react-router-dom";
import ProductActions from "./ProductsActions";

const AdminProductList = ({ products, onDelete, onEdit }) => {
    const navigate = useNavigate();

    return (
        <div className="space-y-3">
            {products.map((p) => (
                <div
                    key={p._id}
                    className="flex flex-col sm:flex-row sm:items-center gap-4
                               border border-browny-50/50 rounded-xl bg-white p-3
                               hover:bg-rose-50 transition"
                >
                    {/* IMAGE */}
                    <img
                        src={p.images?.[0]?.url}
                        alt={p.title}
                        className="h-40 w-full sm:h-16 sm:w-16 rounded-lg object-cover shrink-0"
                    />

                    {/* CONTENT */}
                    <div className="flex-1">
                        <h3
                            onClick={() => navigate(`/admin/products/edit/${p._id}`)}
                            className="font-semibold text-gray-800 cursor-pointer hover:underline line-clamp-2"
                        >
                            {p.title}
                        </h3>

                        <p className="text-sm text-gray-600 mt-1">
                            ₹{p.price}
                        </p>
                    </div>

                    {/* ACTIONS */}
                    <div className="self-start sm:self-auto">
                        <ProductActions
                            onDelete={() => onDelete(p._id)}
                            productId={p._id}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminProductList;
