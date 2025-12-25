import { Plus } from "lucide-react";
import { useGetUsersQuery } from "../../app/api/userApi";
import UserTable from "../../components/dashboard/users/UserTable";
import Button from "../../components/shared/Button";
import Loader from "../../components/shared/Loader";

const AdminUsers = () => {
    const { data: users, isLoading } = useGetUsersQuery();

    if (isLoading) return <Loader />;

    return (
        <div>
            <h1 className="text-center sm:text-left text-xl font-semibold mb-4">Users</h1>
            <UserTable users={users} />
        </div>
    );
};

export default AdminUsers;
