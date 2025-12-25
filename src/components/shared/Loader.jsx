import React from "react";

const Loader = ({ size = "md", center = true }) => {
    const sizes = {
        sm: "h-5 w-5 border-2",
        md: "h-10 w-10 border-4",
        lg: "h-16 w-16 border-4",
    };

    return (
        <div className={center ? "flex justify-center items-center py-8" : ""}>
            <div
                className={`
          animate-spin rounded-full
          border-rosy-200 border-t-rosy-500
          ${sizes[size]}
        `}
            />
        </div>
    );
};

export default Loader;
