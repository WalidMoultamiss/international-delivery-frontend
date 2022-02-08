import { useEffect } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import { Link, Navigate } from "react-router-dom";

export default function App() {


  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </div>
  );
}
