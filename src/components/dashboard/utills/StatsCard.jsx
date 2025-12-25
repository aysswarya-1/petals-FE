const StatsCard = ({ label, value, Icon, footer }) => {
    return (
        <div className="bg-white p-5 rounded-2xl border border-browny-50/40 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xs uppercase tracking-wide text-browny-50">
                        {label}
                    </p>
                    <h3 className="text-2xl font-bold mt-1">
                        {value}
                    </h3>
                </div>

                {Icon && (
                    <div className="bg-rosy-100 text-rosy-700 p-2 rounded-xl">
                        <Icon size={20} />
                    </div>
                )}
            </div>

            {footer && (
                <p className="text-xs text-gray-500 mt-3">
                    {footer}
                </p>
            )}
        </div>
    );
};

export default StatsCard;
