import { Send } from 'lucide-react'
import { useState } from 'react';
import { useInquiry } from '../../features/inquiryService';

const ContactForm = () => {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiryPurpose: "",
        preferredDate: "",
        message: "",
    });

    const { submitInquiry, isLoading } = useInquiry();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handlePurposeClick = (purpose) => {
        setForm({ ...form, inquiryPurpose: purpose });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convert preferredDate to ISO if set
        const preferredDate = form.preferredDate
            ? new Date(form.preferredDate)
            : null;

        const payload = {
            type: "contact",
            firstName: form.firstName,
            lastName: form.lastName,
            fullName: `${form.firstName} ${form.lastName}`.trim(),
            email: form.email,
            phone: form.phone,
            inquiryPurpose: form.inquiryPurpose,
            preferredDate,
            message: form.message,
        };

        try {
            const res = await submitInquiry(payload);

            if (res.success) {
                alert("Message sent successfully!");
                setForm({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    inquiryPurpose: "",
                    preferredDate: "",
                    message: "",
                });
            } else {
                throw res.error;
            }
        } catch (err) {
            console.error(err);
            alert("Failed to send message.");
        }

    };

    return (
        <form onSubmit={handleSubmit} className="bg-white border border-rosy-100 rounded-xl p-6">
            <h3 className="font-bold text-browny-100 mb-4 text-lg sm:text-xl">
                Send us a message
            </h3>

            <div className="grid grid-cols-2 gap-3">
                <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="auth-input"
                    placeholder="First name"
                    required
                />
                <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="auth-input"
                    placeholder="Last name"
                />
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="auth-input"
                    placeholder="Email address"
                    required
                />
                <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="auth-input"
                    placeholder="Phone number (optional)"
                />
            </div>

            <div className="mt-4">
                <p className="text-xs text-browny-50 mb-2">What can we help you with?</p>
                <div className="flex flex-wrap gap-2">
                    {[
                        "Everyday gift or bouquet",
                        "Wedding or event",
                        "Subscription flowers",
                        "Order question",
                        "Something else",
                    ].map((item) => (
                        <button
                            type="button"
                            key={item}
                            onClick={() => handlePurposeClick(item)}
                            className={`px-4 py-2 text-xs border rounded-xl cursor-pointer ${form.inquiryPurpose === item
                                ? "bg-rosy-500 text-white border-rosy-500"
                                : "bg-rosy-50 border-rosy-100"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-4">
                <input
                    type="date"
                    name="preferredDate"
                    value={form.preferredDate}
                    onChange={handleChange}
                    className="auth-input w-full"
                />
            </div>

            <div className="mt-4">
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    className="auth-input w-full"
                    placeholder="Share any colors, flowers, budget, or inspiration you have in mind."
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="mt-4 bg-rosy-500 text-white w-full py-2 rounded-md flex items-center justify-center gap-2 hover:bg-rosy-700"
            >
                <Send />
                {isLoading ? "Sending..." : "Send message"}
            </button>

            <p className="text-sm text-center text-browny-50 mt-3">
                You’ll receive a confirmation email with your message details.
            </p>
        </form>
    );
};

export default ContactForm
