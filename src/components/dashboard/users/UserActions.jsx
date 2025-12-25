import {
    useUpdateUserRoleMutation,
    useDeleteUserMutation,
} from "../../../app/api/userApi";
import { Trash2 } from "lucide-react"

const UserActions = ({ user }) => {
    const [updateRole] = useUpdateUserRoleMutation();
    const [deleteUser] = useDeleteUserMutation();

    return (
        <div className="flex gap-3 text-xs">
            <button
                onClick={() =>
                    updateRole({
                        id: user._id,
                        role: user.role === "admin" ? "user" : "admin",
                    })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
            ${user.role === "admin" ? "bg-green-500" : "bg-gray-300"}
        `}
            >
                <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                ${user.role === "admin" ? "translate-x-6" : "translate-x-1"}
            `}
                />
            </button>

            <button
                onClick={() => deleteUser(user._id)}
                className="text-red-500/50"
            >
                <Trash2 size={18} />
            </button>
        </div>
    );
};

export default UserActions;
