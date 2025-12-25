import React, { useState } from "react";

const ImageGallery = ({ images }) => {
    const [active, setActive] = useState(images?.[0]?.url);

    if (!images?.length) return null;

    return (
        <div className="w-full">
            <img
                src={active}
                alt="product"
                className="
                    w-full
                    h-[200px]
                    sm:h-[300px]
                    md:h-[400px]
                    lg:h-[460px]
                    object-cover
                    rounded-xl
                "
            />

            <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                {images.map((img, i) => (
                    <img
                        key={img._id || i}
                        src={img?.url}
                        onClick={() => setActive(img.url)} // ✅ FIX
                        className={`
                            w-14 h-14
                            sm:w-20 sm:h-20
                            object-cover
                            rounded-lg
                            border
                            cursor-pointer
                            transition
                            ${active === img.url ? "ring-2 ring-rosy-400" : ""}
                        `}
                        alt="thumbnail"
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
