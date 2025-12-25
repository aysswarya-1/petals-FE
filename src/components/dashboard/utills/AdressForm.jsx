import { useEffect, useState } from "react";

const AddressForm = ({
  userData,
  onSubmit,
  loading = false,
  title = "Delivery Address",
}) => {
  const [form, setForm] = useState({
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  useEffect(() => {
    if (userData) {
      setForm((p) => ({
        ...p,
        phone: userData.phone || "",
        street: userData.address?.street || "",
        city: userData.address?.city || "",
        state: userData.address?.state || "",
        postalCode: userData.address?.postalCode || "",
        country: userData.address?.country || "",
      }));
    }
  }, [userData]);

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(form);
    console.log("🚀 ~ handleSubmit ~ form:", form)
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-6">
        <h2 className="text-sm text-center sm:text-left font-semibold">
          {title}
        </h2>

        {/* NAME + PHONE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            value={`${userData?.firstName || ""} ${userData?.lastName || ""}`}
            disabled
            className="border border-browny-50/50 px-3 py-2 rounded bg-gray-50 text-gray-600"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border border-browny-50/50 outline-rosy-400 px-3 py-2 rounded bg-white"
          />
        </div>

        {/* STREET */}
        <textarea
          name="street"
          value={form.street}
          onChange={handleChange}
          rows={3}
          placeholder="Street Address"
          className="w-full border border-browny-50/50 px-3 py-2 rounded bg-white outline-rosy-400"
        />

        {/* CITY + STATE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className="border border-browny-50/50 px-3 py-2 rounded bg-white outline-rosy-400"
          />
          <input
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="State"
            className="border border-browny-50/50 px-3 py-2 rounded bg-white outline-rosy-400"
          />
        </div>

        {/* POSTAL + COUNTRY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
            className="border border-browny-50/50 px-3 py-2 rounded bg-white outline-rosy-400"
          />
          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Country"
            className="border border-browny-50/50 px-3 py-2 rounded bg-white outline-rosy-400"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto bg-rosy-600 hover:bg-rosy-700 text-white px-6 py-2 rounded transition disabled:opacity-60"
        >
          {loading ? "Saving..." : "Save Address"}
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
