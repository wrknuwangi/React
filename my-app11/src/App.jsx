import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <UserForm />
      <UserTable />
    </div>
  );
}

export default App;
