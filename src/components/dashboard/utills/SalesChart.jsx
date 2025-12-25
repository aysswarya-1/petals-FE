import { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const SalesChart = ({
    data = [],
    title = "Overview",
    showOrders = true,
    showRevenue = true,
}) => {
    const [activeKey, setActiveKey] = useState(null);

    if (!data.length) {
        return (
            <div className="bg-white p-4 rounded-xl border text-sm text-gray-500">
                No data available
            </div>
        );
    }

    return (
        <div className="bg-white p-4 rounded-xl border border-browny-50/40">
            <h3 className="font-medium mb-4">{title}</h3>

            <ResponsiveContainer width="100%" height={320}>
                <LineChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />

                    {/* ORDERS */}
                    {showOrders && (
                        <Line
                            type="monotone"
                            dataKey="orders"
                            name="Orders"
                            stroke="#9D9190"
                            strokeWidth={activeKey === "orders" ? 3 : 2}
                            strokeOpacity={
                                activeKey && activeKey !== "orders" ? 0.3 : 1
                            }
                            dot={{ r: 3 }}
                            onMouseEnter={() => setActiveKey("orders")}
                            onMouseLeave={() => setActiveKey(null)}
                        />
                    )}

                    {/* REVENUE */}
                    {showRevenue && (
                        <Line
                            type="monotone"
                            dataKey="revenue"
                            name="Revenue (₹)"
                            stroke="#A65563"
                            strokeWidth={activeKey === "revenue" ? 3 : 2}
                            strokeOpacity={
                                activeKey && activeKey !== "revenue" ? 0.3 : 1
                            }
                            activeDot={{ r: 7 }}
                            dot={{ r: 3 }}
                            onMouseEnter={() => setActiveKey("revenue")}
                            onMouseLeave={() => setActiveKey(null)}
                        />
                    )}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SalesChart;
