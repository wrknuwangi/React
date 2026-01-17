import { useDispatch, useSelector } from "react-redux";
import { deleteUser, setEditUser } from "../store/userSlice";

function UserTable() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);

  if (!users.length)
    return <p className="text-center mt-4">No users yet</p>;

  return (
    <table className="w-full max-w-4xl mx-auto mt-6 bg-white border shadow">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="p-2">Name</th>
          <th className="p-2">Email</th>
          <th className="p-2">Role</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id} className="border-t text-center">
            <td className="p-2">{user.name}</td>
            <td className="p-2">{user.email}</td>
            <td className="p-2">{user.role}</td>
            <td className="p-2 space-x-2">
              <button
                onClick={() => dispatch(setEditUser(user))}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteUser(user.id))}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
