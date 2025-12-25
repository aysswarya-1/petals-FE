import { useChangePasswordMutation, useProfileQuery } from "../../app/api/authApi";
import ProfileView from "../../components/dashboard/profile/ProfileView";
const AdminProfile = () => {
    const { data: user } = useProfileQuery();
    const [changePassword, { isLoading }] =
        useChangePasswordMutation();

    const handleChangePassword = async (data) => {
        try {
            await changePassword(data).unwrap();
            alert("Password updated successfully");
        } catch (err) {
            alert(err?.data?.message || "Password update failed");
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

export default AdminProfile;
