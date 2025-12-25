import { toast } from "react-toastify";
import { useChangePasswordMutation, useProfileQuery } from "../../app/api/authApi";
import ProfileView from "../../components/dashboard/profile/ProfileView";
const UserProfile = () => {
    const { data: user } = useProfileQuery();
    console.log("UserRoute user:", user);
    const [changePassword, { isLoading }] =
        useChangePasswordMutation();
    const handleChangePassword = async (data) => {
        try {
            await changePassword(data).unwrap();
            toast.success("Password updated successfully");
        } catch (err) {
            toast.error(err?.data?.message || "Password update failed");
        }
    };

    return (
        <ProfileView
            user={user}
            onChangePassword={handleChangePassword}
            loading={isLoading}
        />
    );
};

export default UserProfile;
