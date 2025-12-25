import { toast } from "react-toastify";
import { useProfileQuery } from "../../app/api/authApi";
import { useUpdateAddressMutation } from "../../app/api/userApi";
import AddressForm from "../../components/dashboard/utills/AdressForm";

const UserAddress = () => {
    const { data: user } = useProfileQuery();
    const [updateAddress, { isLoading }] = useUpdateAddressMutation();

    const handleSubmit = async (form) => {
        await updateAddress(form).unwrap();
        toast.success("Address saved Successfully");
    };

    return (
        <AddressForm
            userData={user}
            onSubmit={handleSubmit}
            loading={isLoading}
        />
    );
};

export default UserAddress;
