import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav style={{ display: "flex", padding: "10px", background: "#333", color: "#fff" }}>
        <Link to="/" style={{ marginRight: "10px", color: "#fff" }}>SignUP</Link>
        <Link to="/home" style={{ marginRight: "10px", color: "#fff" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "10px", color: "#fff" }}>About</Link>
        <Link to="/shop" style={{ marginRight: "10px", color: "#fff" }}>Shop</Link>
        <Link to="/contact" style={{ color: "#fff" }}>Contact</Link>
        <Link to="/user" style={{ color: "#fff" }}>User Form</Link>
      </nav>
      <main style={{ padding: "40px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
