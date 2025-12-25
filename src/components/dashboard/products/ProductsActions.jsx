import { useNavigate } from "react-router-dom";
import EditProduct from "./EditProduct";

const ProductActions = ({ onDelete, productId }) => {
    const navigate = useNavigate();
    return (
        <div className="flex gap-2 sm:gap-6 text-sm">
            <button
                onClick={() => navigate(`/admin/products/edit/${productId}`)}
                className="text-indigo-500 hover:underline"
            >
                Edit</button>
            <button
                onClick={onDelete}
                className="text-red-500">
                Delete</button>
        </div>
    );
};

export default ProductActions;
