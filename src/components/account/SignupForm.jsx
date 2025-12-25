import { UserRoundPlus } from 'lucide-react'
import { useDispatch } from "react-redux";
import { useRegisterMutation } from '../../app/api/authApi';
import { useState } from 'react';
import { setCredentials } from '../../app/authSlice';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

const SignupForm = ({ setMode }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [register, { isLoading, error }] = useRegisterMutation();
    const [form, setForm] = useState({
        firstName: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        event: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            const { confirmPassword, ...payload } = form; // remove confirmPassword before sending
            const res = await register(payload).unwrap();

            dispatch(setCredentials({
                user: res.user,
                accessToken: res.accessToken,
            }));

            setMode("login");

            //Navigate based on role
            if (res.user?.role === "admin") {
                navigate("/admin");
            } else if (res.user?.role === "user") {
                navigate("/dashboard")
            } else {
                navigate("/");
            }
            toast.success("Registered In as: " + res.user.email)
        } catch (err) {
            console.error("Signup error:", err);
        }
    };


    return (
        <form className="space-y-3" onSubmit={handleSubmit}>
            <h2 className="font-semibold text-lg mb-2">Sign up</h2>

            <div className="grid grid-cols-2 gap-3">
                <input
                    className="auth-input"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                />
                <input
                    className="auth-input"
                    name="lastname"
                    value={form.lastname}
                    onChange={handleChange}
                    placeholder="Last name"
                />
            </div>

            <input
                className="auth-input"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
            />
            <input
                className="auth-input"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                type="password"
            />

            <div className="grid grid-cols-2 gap-3">
                <input
                    className="auth-input"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    type="password"
                />
                <input
                    className="auth-input"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone (optional)"
                />
            </div>

            <input
                className="auth-input"
                name="event"
                value={form.event}
                onChange={handleChange}
                placeholder="Event or occasion (optional)"
            />

            <button
                disabled={isLoading}
                className="w-full mt-3 py-2 bg-rosy-400 hover:bg-rosy-500 text-white rounded-md text-sm font-medium flex items-center justify-center gap-2"
            >
                <UserRoundPlus className="w-5 h-5" />
                {isLoading ? "Create account..." : "Create account"}
            </button>

            {error && (
                <p className="text-xs text-red-500 text-center">
                    {error?.data?.message || "Something went wrong"}
                </p>
            )}

            <p className="text-xs text-center text-gray-400 mt-3">
                Already have an account?{" "}
                <span onClick={() => setMode("login")} className="text-rosy-400 cursor-pointer underline">
                    Sign in
                </span>
            </p>

            <p className="text-[11px] text-gray-400 mt-3 text-center">
                By creating an account, you agree to our
                <span className="underline"> Terms</span> and{" "}
                <span className="underline">Privacy Policy</span>.
            </p>
        </form>
    );
};


export default SignupForm
