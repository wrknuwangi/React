import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../store/userSlice";

function UserForm() {
  const dispatch = useDispatch();
  const editingUser = useSelector(state => state.user.editingUser);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    if (editingUser) setFormData(editingUser);
  }, [editingUser]);

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    editingUser
      ? dispatch(updateUser(formData))
      : dispatch(addUser(formData));

    setFormData({ name: "", email: "", role: "" });
  };

  return (
    <form className="bg-white p-6 rounded shadow max-w-md mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold text-center mb-4">
        {editingUser ? "Edit User" : "Add User"}
      </h2>

      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border mb-3 rounded"
        required
      />

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border mb-3 rounded"
        required
      />

      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full p-2 border mb-4 rounded"
        required
      >
        <option value="">Select Role</option>
        <option>Admin</option>
        <option>User</option>
        <option>Moderator</option>
      </select>

      <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        {editingUser ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default UserForm;
