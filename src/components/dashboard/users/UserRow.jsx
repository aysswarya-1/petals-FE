import UserActions from "./UserActions";

const UserRow = ({ user }) => {
    return (
        <tr className="block md:table-row odd:bg-white even:bg-rosy-100/50 border-b md:border-none p-4 md:p-0 rounded-lg md:rounded-none">
            {/* First Name */}
            <td className="block md:table-cell p-1 md:p-3">
                <span className="md:hidden font-semibold">First Name: </span>
                {user.firstName}
            </td>

            {/* Last Name */}
            <td className="block md:table-cell p-1 md:p-3">
                <span className="md:hidden font-semibold">Last Name: </span>
                {user.lastName}
            </td>

            {/* Email */}
            <td className="block md:table-cell p-1 md:p-3 break-all">
                <span className="md:hidden font-semibold">Email: </span>
                {user.email}
            </td>

            {/* Phone */}
            <td className="block md:table-cell p-1 md:p-3">
                <span className="md:hidden font-semibold">Phone: </span>
                {user.phone || "-"}
            </td>

            {/* Role */}
            <td className="block md:table-cell p-1 md:p-3">
                <span className="md:hidden font-semibold mr-2">Role:</span>
                <span
                    className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full capitalize
                        ${user.role === "admin"
                            ? "border border-yellow-500 text-yellow-700 bg-yellow-500/10"
                            : "border border-blue-500 text-blue-700 bg-blue-500/10"
                        }`}
                >
                    {user.role}
                </span>
            </td>

            {/* Actions */}
            <td className="block md:table-cell p-1 md:p-3">
                <span className="md:hidden font-semibold mr-2">Actions:</span>
                <UserActions user={user} />
            </td>
        </tr>
    );
};

export default UserRow;
