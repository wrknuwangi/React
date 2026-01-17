import DataTable from "./DataTable";

const users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
  { id: 3, name: "Charlie Lee", email: "charlie@example.com", role: "Moderator" },
];

function Shop() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <DataTable data={users} />
    </div>
  );
}

export default Shop;
