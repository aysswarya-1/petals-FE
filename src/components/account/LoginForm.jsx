import { LogIn } from "lucide-react";
import React, { useState } from "react";
import { useLoginMutation } from "../../app/api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../app/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = ({ setMode }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await login(form).unwrap();

            // Save user + access token
            dispatch(setCredentials(res));

            //Navigate based on role
            if (res.user?.role === "admin") {
                navigate("/admin");
            } else if (res.user?.role === "user") {
                navigate("/dashboard")
            } else {
                navigate("/");
            }
            toast.success("Logged In as: " + res.user.email)
        } catch (err) {
            console.log("Login error:", err);
            toast.error(err?.data?.message || "Login failed");
        }
    };

    return (
        <form className="space-y-3" onSubmit={handleSubmit}>
            <h2 className="font-semibold text-lg mb-2">Sign in</h2>

            <input
                name="email"
                className="auth-input"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                required
            />

            <input
                name="password"
                className="auth-input"
                placeholder="Password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
            />

            <button
                disabled={isLoading}
                className="w-full mt-3 py-2 bg-rosy-400 hover:bg-rosy-500 text-white rounded-md 
                text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-50"
            >
                <LogIn className="w-5 h-5" />
                {isLoading ? "Signing in..." : "Sign in"}
            </button>

            <p className="text-xs text-center text-gray-400 mt-3">
                Don't have an account?{" "}
                <span
                    onClick={() => setMode("signup")}
                    className="text-rosy-400 cursor-pointer underline"
                >
                    Create one
                </span>
            </p>
        </form>
    );
};

export default LoginForm;
