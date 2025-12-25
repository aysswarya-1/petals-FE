import { useNavigate } from "react-router-dom";
import { useCreateProductMutation } from "../../../app/api/productsApi";
import ProductForm from "./ProductForm";

const categories = ["bouquets", "arrangements", "occasions", "decor", "hampers", "plants", "custom"];
const sizes = ["classic", "deluxe", "lux", "grand"];
const availableColors = ["blush", "pastel", "bright", "greens", "cream"];
const deliveryOptionsList = ["same-day", "next-day", "scheduled", "pickup"];

const AddProduct = () => {
    const navigate = useNavigate();
    const [addProduct] = useCreateProductMutation();

    const handleAdd = async (formData) => {
        await addProduct(formData).unwrap();
        navigate(-1);
    };

    // Default empty product
    const emptyProduct = {
        title: "",
        description: "",
        price: 0,
        salePrice: 0,
        category: categories[0],
        size: sizes[0],
        colors: [],
        deliveryOptions: [],
        isFeatured: false,
        isNewArrival: false,
        images: [],
    };

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-xl font-semibold mb-4">Add Product</h1>
            <ProductForm
                initialData={emptyProduct}
                onSubmit={handleAdd}
                categories={categories}
                sizes={sizes}
                colorsList={availableColors}
                deliveryOptionsList={deliveryOptionsList}
            />
        </div>
    );
};

export default AddProduct;
