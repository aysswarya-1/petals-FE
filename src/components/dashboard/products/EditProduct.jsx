import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetProductByIdQuery, useUpdateProductMutation } from "../../../app/api/productsApi";
import ProductForm from "./ProductForm";

const categories = ["bouquets", "arrangements", "occasions", "decor", "hampers", "plants", "custom"];
const sizes = ["classic", "deluxe", "lux", "grand"];
const availableColors = ["blush", "pastel", "bright", "greens", "cream"];
const deliveryOptionsList = ["same-day", "next-day", "scheduled", "pickup"];

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: product } = useGetProductByIdQuery(id);
    const [editProduct] = useUpdateProductMutation();

    const handleEdit = async (formData) => {
        await editProduct({ id, data: formData }).unwrap();
        navigate(-1);
    };

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-xl font-semibold mb-4">Edit Product</h1>
            {product && (
                <ProductForm
                    initialData={product}
                    onSubmit={handleEdit}
                    categories={categories}
                    sizes={sizes}
                    colorsList={availableColors}
                    deliveryOptionsList={deliveryOptionsList}
                />
            )}
        </div>
    );
};

export default EditProduct;
