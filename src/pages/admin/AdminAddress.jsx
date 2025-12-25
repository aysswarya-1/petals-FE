import { toast } from "react-toastify";
import { useProfileQuery } from "../../app/api/authApi";
import { useUpdateAddressMutation } from "../../app/api/userApi";
import AddressForm from "../../components/dashboard/utills/AdressForm";

const AdminAddress = () => {
    const { data: user } = useProfileQuery();
    const [updateAddress, { isLoading }] =
        useUpdateAddressMutation();

    const handleSubmit = async (form) => {
        try {
            await updateAddress(form).unwrap();
            toast.success("Address saved successfully")
        } catch (err) {
            toast.error(err?.data?.message || "Failed to save address")
        }
    };

    return (
        <AddressForm
            userData={user}
            onSubmit={handleSubmit}
            loading={isLoading}
            title="User Address"
        />
    );
};

export default AdminAddress;
