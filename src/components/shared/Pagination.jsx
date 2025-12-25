import React from 'react'

const Pagination = ({ page, setPage, total }) => {
    return (
        <div className="flex justify-center gap-3 mt-10">
            <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className={`px-3 py-2 border border-rosy-400 rounded ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                Prev
            </button>

            {[...Array(total)].map((_, i) => (
                <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`px-3 py-2 border border-rosy-400 rounded ${page === i + 1 ? 'bg-rosy-600 hover:bg-rosy-700 text-white' : ''}`}
                >
                    {i + 1}
                </button>
            ))}

            <button
                disabled={page === total}
                onClick={() => setPage(page + 1)}
                className={`px-3 py-2 border border-rosy-400 rounded ${page === total ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination
