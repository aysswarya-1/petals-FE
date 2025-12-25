import UserRow from "./UserRow";

const UserTable = ({ users }) => {
    return (
        <div className="bg-white rounded border border-rose-200 overflow-hidden">
            <table className="w-full text-sm">
                {/* Table header – hidden on small screens */}
                <thead className="bg-rose-300/50 border-b border-browny-50/50 hidden md:table-header-group">
                    <tr>
                        <th className="p-3 text-left">First Name</th>
                        <th className="p-3 text-left">Last Name</th>
                        <th className="p-3 text-left">Email</th>
                        <th className="p-3 text-left">Phone</th>
                        <th className="p-3 text-left">Role</th>
                        <th className="p-3 text-left">Actions</th>
                    </tr>
                </thead>

                <tbody className="divide-y md:divide-none">
                    {users.map((u) => (
                        <UserRow key={u._id} user={u} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
