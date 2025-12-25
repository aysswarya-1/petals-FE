import { useAdminGetAllQuery, useUpdateStatusMutation } from "../../app/api/inquiryApi";
import { useState } from "react";
import Pagination from "../../components/shared/Pagination";
import Loader from "../../components/shared/Loader";

const AdminInquiries = () => {
    const { data, isLoading } = useAdminGetAllQuery();
    const [updateStatus, { isLoading: updating }] = useUpdateStatusMutation();
    const inquiries = data?.inquiries || [];

    const [page, setPage] = useState(1);

    if (isLoading) return <Loader />;

    const inquiriesPerPage = 4;
    const totalPages = Math.ceil(inquiries.length / inquiriesPerPage);

    const paginatedInquiries = inquiries.slice(
        (page - 1) * inquiriesPerPage,
        page * inquiriesPerPage
    );

    return (
        <div className="space-y-4">
            <h1 className="text-lg text-center sm:text-left font-semibold">General Inquiries</h1>

            {inquiries.length === 0 && (
                <p className="text-sm text-gray-500">No inquiries yet</p>
            )}

            {paginatedInquiries.map((inq) => (
                <div
                    key={inq._id}
                    className="bg-white rounded-xl border border-browny-50/50 p-4"
                >
                    <div className="space-y-3">
                        {/* HEADER */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                            <div>
                                <p className="text-sm font-medium">
                                    {inq.fullName}
                                </p>
                                <p className="text-xs text-gray-500 break-all">
                                    {inq.user?.email || "Guest"}
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                                {/* STATUS */}
                                <select
                                    value={inq.status}
                                    disabled={updating}
                                    onChange={async (e) => {
                                        try {
                                            await updateStatus({
                                                id: inq._id,
                                                status: e.target.value,
                                            }).unwrap();
                                        } catch (err) {
                                            console.error("Status update failed", err);
                                        }
                                    }}
                                    className={`text-xs px-2 py-1 rounded-md border bg-white capitalize
                                        ${inq.status === "pending"
                                            ? "border-yellow-400 text-yellow-600"
                                            : inq.status === "in-progress"
                                                ? "border-blue-400 text-blue-600"
                                                : "border-green-400 text-green-600"
                                        }`}
                                >
                                    <option value="pending">Pending</option>
                                    <option value="in-progress">In Progress</option>
                                    <option value="resolved">Resolved</option>
                                </select>

                                {/* DATE */}
                                <span className="text-xs text-browny-50">
                                    {new Date(inq.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                        </div>

                        {/* META */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 text-sm text-gray-700">
                            <p>
                                <span className="font-medium">Type:</span>{" "}
                                {inq.type}
                            </p>
                            <p>
                                <span className="font-medium">Purpose:</span>{" "}
                                {inq.inquiryPurpose}
                            </p>
                        </div>

                        {/* MESSAGE */}
                        <div className="bg-rosy-700/15 border border-rosy-700 p-3 rounded-lg text-sm">
                            {inq.message}
                        </div>
                    </div>
                </div>
            ))}

            {totalPages > 1 && (
                <Pagination
                    page={page}
                    setPage={setPage}
                    total={totalPages}
                />
            )}
        </div>
    );
};

export default AdminInquiries;
