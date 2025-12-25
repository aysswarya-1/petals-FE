import { useState } from "react";
import { toast } from "react-toastify";

const ProfileView = ({
    user,
    showPasswordForm = true,
    onChangePassword,
    loading = false,
}) => {
    const [form, setForm] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.newPassword !== form.confirmPassword) {
            return toast.error("Passwords do not match");
        }

        await onChangePassword({
            currentPassword: form.currentPassword,
            newPassword: form.newPassword,
        });

        setForm({
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        });
    };

    return (
        <div className="space-y-8">
            {/* TITLE */}
            <div>
                <h1 className="text-2xl font-semibold">Profile</h1>
                <p className="text-sm text-gray-500">
                    Account information and security
                </p>
            </div>

            {/* USER INFO */}
            <div className="bg-white rounded-2xl border border-browny-50/50 p-5 space-y-3">
                <h2 className="text-sm font-semibold text-gray-700">
                    Account Details
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-gray-500">Name</p>
                        <p className="font-medium">
                            {user?.firstName} {user?.lastName}
                        </p>
                    </div>

                    <div>
                        <p className="text-gray-500">Email</p>
                        <p className="font-medium">{user?.email}</p>
                    </div>

                    <div>
                        <p className="text-gray-500">Role</p>
                        <p className="font-medium capitalize">{user?.role}</p>
                    </div>
                </div>
            </div>

            {/* CHANGE PASSWORD (OPTIONAL) */}
            {showPasswordForm && (
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl border border-browny-50/50 p-5 space-y-5"
                >
                    <h2 className="text-sm font-semibold text-gray-700">
                        Change Password
                    </h2>

                    <div className="space-y-3">
                        <input
                            type="password"
                            name="currentPassword"
                            placeholder="Current password"
                            value={form.currentPassword}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-browny-50/50 px-3 py-2 text-sm focus:ring-1 focus:ring-rosy-500 outline-none"
                        />

                        <input
                            type="password"
                            name="newPassword"
                            placeholder="New password"
                            value={form.newPassword}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-browny-50/50 px-3 py-2 text-sm focus:ring-1 focus:ring-rosy-500 outline-none"
                        />

                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm new password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-browny-50/50 px-3 py-2 text-sm focus:ring-1 focus:ring-rosy-500 outline-none"
                        />
                    </div>

                    <button
                        disabled={loading}
                        className="w-full rounded-lg bg-rosy-700 text-white py-2 text-sm font-medium hover:bg-rosy-800 disabled:opacity-50"
                    >
                        {loading ? "Updating..." : "Update Password"}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ProfileView;
