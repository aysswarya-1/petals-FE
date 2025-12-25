import React from "react";

const colors = [
    { name: "Blush", value: "blush", hex: "#f4b4c4" },
    { name: "Pastel", value: "pastel", hex: "#f6d6ff" },
    { name: "Bright", value: "bright", hex: "#ff6b6b" },
    { name: "Greens", value: "greens", hex: "#4caf50" },
    { name: "Cream", value: "cream", hex: "#f5f5dc" },
];

const Filters = ({ setPrice, filters, setFilters }) => {
    const toggleFilter = (group, value) => {
        setFilters((prev) => {
            const exists = prev[group].includes(value);
            return {
                ...prev,
                [group]: exists
                    ? prev[group].filter((v) => v !== value)
                    : [...prev[group], value],
            };
        });
    };

    return (
        <aside className="bg-white p-4 border border-rosy-100 rounded-md space-y-6">
            <h4 className="font-semibold text-lg">Filter</h4>

            {/* PRICE */}
            <div>
                <p className="text-sm font-medium mb-2">Price</p>
                <div className="flex gap-2">
                    <input
                        type="number"
                        placeholder="Min $"
                        onChange={(e) =>
                            setPrice((p) => ({ ...p, min: e.target.value }))
                        }
                        className="w-1/2 p-2 border border-rosy-100 outline-rosy-200 rounded text-sm"
                    />
                    <input
                        type="number"
                        placeholder="Max $"
                        onChange={(e) =>
                            setPrice((p) => ({ ...p, max: e.target.value }))
                        }
                        className="w-1/2 p-2 border border-rosy-100 outline-rosy-200 rounded text-sm"
                    />
                </div>
            </div>

            {/* COLOR PALETTE */}
            <div>
                <p className="text-sm font-medium mb-3">Color Palette</p>
                <div className="flex flex-wrap gap-2">
                    {colors.map((c) => (
                        <button
                            key={c.value}
                            onClick={() => toggleFilter("colors", c.value)}
                            className={`w-6 h-6 rounded-full border-2 ${filters.colors.includes(c.value)
                                ? "border-gray-800"
                                : "border-gray-300"
                                }`}
                            style={{ backgroundColor: c.hex }}
                        />
                    ))}
                </div>
            </div>

            {/* SIZE */}
            <div>
                <p className="text-sm font-medium mb-2">Size</p>
                {["classic", "grand", "lux"].map((size) => (
                    <label
                        key={size}
                        className="flex items-center gap-2 text-sm mb-2 cursor-pointer"
                    >
                        <input
                            type="checkbox"
                            checked={filters.size.includes(size)}
                            onChange={() => toggleFilter("size", size)}
                        />
                        {size.charAt(0).toUpperCase() + size.slice(1)}
                    </label>
                ))}
            </div>

            {/* DELIVERY */}
            <div>
                <p className="text-sm font-medium mb-2">Delivery</p>
                {["pickup", "same-day"].map((d) => (
                    <label
                        key={d}
                        className="flex items-center gap-2 text-sm mb-2 cursor-pointer"
                    >
                        <input
                            type="checkbox"
                            checked={filters.delivery.includes(d)}
                            onChange={() => toggleFilter("delivery", d)}
                        />
                        {d === "pickup" ? "Pickup" : "Same Day"}
                    </label>
                ))}
            </div>
        </aside>
    );
};

export default Filters;
