import { useEffect, useState } from "react";

const ProductForm = ({
    initialData = null,
    onSubmit,
    categories,
    sizes,
    colorsList,
    deliveryOptionsList,
    maxImages = 4,
}) => {
    const [form, setForm] = useState(initialData);
    const [newImages, setNewImages] = useState([]);

    useEffect(() => {
        if (initialData) {
            setForm({
                ...initialData,
                colors: initialData.colors || [],
                deliveryOptions: initialData.deliveryOptions || [],
            });
        }
    }, [initialData]);

    if (!form) return null;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleArrayToggle = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: prev[field].includes(value)
                ? prev[field].filter((v) => v !== value)
                : [...prev[field], value],
        }));
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setNewImages((prev) => {
            if (prev.length + files.length > maxImages) {
                alert(`Max ${maxImages} images allowed`);
                return prev;
            }
            return [
                ...prev,
                ...files.map((file) => ({ file, preview: URL.createObjectURL(file) })),
            ];
        });
        e.target.value = null;
    };

    const removeExistingImage = (index) => {
        setForm((prev) => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
        }));
    };

    const removeNewImage = (index) => {
        setNewImages((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSave = async () => {
        if (!form.title.trim()) return alert("Title required");
        if (!form.description.trim()) return alert("Description required");
        if (!form.price || form.price <= 0) return alert("Invalid price");

        const formData = new FormData();

        formData.append("title", form.title);
        formData.append("description", form.description);
        formData.append("price", form.price);
        formData.append("salePrice", form.salePrice || 0);
        formData.append("category", form.category);
        formData.append("size", form.size);
        formData.append("colors", JSON.stringify(form.colors));
        formData.append("deliveryOptions", JSON.stringify(form.deliveryOptions));
        formData.append("isFeatured", String(form.isFeatured));
        formData.append("isNewArrival", String(form.isNewArrival));

        // ✅ send existing images urls
        form.images.forEach(img => {
            formData.append("existingImages[]", img.url);
        });

        // ✅ images
        newImages.forEach(img => {
            formData.append("images", img.file);
        });

        await onSubmit(formData);
    };

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            {/* Images Section */}
            <div className="border border-browny-50/50 rounded-xl p-4 bg-white">
                <h3 className="font-medium mb-3">Images</h3>
                <p className="text-xs text-gray-500 mb-2">
                    {form.images.length + newImages.length} images selected
                </p>
                <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {form.images?.map((img, idx) => (
                        <div key={idx} className="relative group">
                            <img src={img.url} alt="" className="h-32 w-full object-cover rounded-lg" />
                            <button
                                type="button"
                                onClick={() => removeExistingImage(idx)}
                                className="absolute top-1 right-1 bg-black/60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                    {newImages.map((img, idx) => (
                        <div key={idx} className="relative group">
                            <img src={img.preview} alt="" className="h-32 w-full object-cover rounded-lg" />
                            <button
                                type="button"
                                onClick={() => removeNewImage(idx)}
                                className="absolute top-1 right-1 bg-black/60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                    {(form.images.length + newImages.length) < maxImages && (
                        <label className="h-32 border-2 border-dashed rounded-lg flex items-center justify-center text-sm text-gray-500 cursor-pointer hover:border-rose-400 hover:text-rose-500 transition">
                            + Add Images
                            <input type="file" multiple accept="image/*" hidden onChange={handleImageUpload} />
                        </label>
                    )}
                </div>
            </div>

            {/* Basic Info Section */}
            <div className="border border-browny-50/50 rounded-xl p-4 bg-white space-y-4">
                <h3 className="font-medium mb-4">Basic Info</h3>
                <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full border border-browny-50/50 rounded-md px-3 py-2 text-sm"
                    placeholder="Product title"
                />
                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-browny-50/50 rounded-md px-3 py-2 text-sm"
                    placeholder="Description"
                />
            </div>

            {/* Pricing */}
            <div className="border border-browny-50/50 rounded-xl p-4 bg-white grid grid-cols-2 gap-4">
                <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    className="border border-browny-50/50 rounded-md px-3 py-2 text-sm"
                    placeholder="Price"
                />
                <input
                    type="number"
                    name="salePrice"
                    value={form.salePrice || ""}
                    onChange={handleChange}
                    className="border border-browny-50/50 rounded-md px-3 py-2 text-sm"
                    placeholder="Sale Price"
                />
            </div>

            {/* Meta */}
            <div className="border border-browny-50/50 rounded-xl p-4 bg-white space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <select name="category" value={form.category} onChange={handleChange} className="border border-browny-50/50 rounded-md px-3 py-2 text-sm">
                        {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <select name="size" value={form.size} onChange={handleChange} className="border border-browny-50/50 rounded-md px-3 py-2 text-sm">
                        {sizes.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>

                {/* Colors */}
                <div>
                    <p className="text-sm font-medium mb-2">Colors</p>
                    <div className="flex flex-wrap gap-2">
                        {colorsList.map((color) => (
                            <button
                                key={color}
                                type="button"
                                onClick={() => handleArrayToggle("colors", color)}
                                className={`px-3 py-1 text-xs rounded-full border capitalize ${form.colors.includes(color)
                                    ? "bg-rosy-500/10 border border-browny-50/50-rose-500 text-rose-700"
                                    : "border border-browny-50/50-gray-300 text-gray-600"
                                    }`}
                            >
                                {color}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Delivery Options */}
                <div>
                    <p className="text-sm font-medium mb-2">Delivery Options</p>
                    <div className="grid grid-cols-2 gap-2">
                        {deliveryOptionsList.map((opt) => (
                            <label key={opt} className="flex items-center gap-2 text-sm">
                                <input
                                    type="checkbox"
                                    checked={form.deliveryOptions.includes(opt)}
                                    onChange={() => handleArrayToggle("deliveryOptions", opt)}
                                />
                                {opt}
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Flags */}
            <div className="border border-browny-50/50 rounded-xl p-4 bg-white flex gap-6">
                <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" name="isFeatured" checked={form.isFeatured} onChange={handleChange} />
                    Featured
                </label>
                <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" name="isNewArrival" checked={form.isNewArrival} onChange={handleChange} />
                    New Arrival
                </label>
            </div>

            <div className="flex items-center justify-end mb-6">
                <div className="flex gap-2">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-4 py-2 border border-browny-50/50 rounded-md text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-rose-400 text-white rounded-md text-sm">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;
