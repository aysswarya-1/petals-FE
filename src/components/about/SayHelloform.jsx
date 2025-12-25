import { useState } from "react";
import { useInquiry } from "../../features/inquiryService";

const SayHelloForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const { submitInquiry, isLoading } = useInquiry();

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async () => {
        const payload = {
            type: "contact",
            fullName: form.name,
            email: form.email,
            inquiryPurpose: form.subject,
            message: form.message,
        };

        const res = await submitInquiry(payload);

        if (res.success) {
            alert("Message sent!");
            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } else {
            alert("Failed to send message");
        }
    };

    return (
        <div className="bg-white rounded-xl p-6">
            <h3 className="font-semibold mb-4">Say hello</h3>

            <div className="space-y-3">
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-rosy-100 p-2 rounded"
                    placeholder="Your name"
                />

                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-rosy-100 p-2 rounded"
                    placeholder="Email"
                />

                <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-rosy-100 p-2 rounded"
                    placeholder="How can we help?"
                />

                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-rosy-100 p-2 rounded h-24"
                    placeholder="Share details..."
                />

                <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="bg-rosy-500 text-white px-4 py-2 rounded-md text-sm"
                >
                    {isLoading ? "Sending..." : "Send Message"}
                </button>
            </div>
        </div>
    );
};

export default SayHelloForm;
