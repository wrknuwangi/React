import React from 'react'

function Navbar() {
    <nav style="{styles.nav}">
        <h1>First React Web Page</h1>
        <div>
            <Link to="/" style="{styles.link}">Home</Link>
            <Link to="/about" style="{styles.link}">About US</Link>
            <Link to="/contact" style="{styles.link}">Contact US</Link>
        </div>
    </nav>
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        background: "#333",
        color: "#fff",
    },
    link: {
        margin: "0 10px",
        color: "#fff",
        textDecoration: "none",
    },
};

export default Navbar;
