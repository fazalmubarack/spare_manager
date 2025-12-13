// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";
// import { useState, useEffect } from "react";
// export default function Navbar({ user, cartCount, logoutUser }) {
//   const nav = useNavigate();
//   const [theme, setTheme] = useState("light");
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light";
//     setTheme(savedTheme);
//     document.documentElement.setAttribute("data-theme", savedTheme);
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme);
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="logo" onClick={() => nav("/")}>
//           Spare Market
//         </div>

//         <div className="nav-right">
//           <button 
//             className="theme-toggle" 
//             onClick={toggleTheme}
//             aria-label="Toggle theme"
//           >
//             {theme === "light" ? (
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
//               </svg>
//             )}
//           </button>

//           <button 
//             className={`hamburger ${menuOpen ? 'active' : ''}`}
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//         </div>

//         <div className={`links ${menuOpen ? 'active' : ''}`}>
//           <Link to="/cart" onClick={closeMenu}>Cart ({cartCount})</Link>
//           {user ? (
//             <>
//               <Link to="/orders" onClick={closeMenu}>My Orders</Link>
//               {/* <button onClick={() => { logoutUser(); closeMenu(); }}>
//                 Logout ({user.username})
//               </button> */}
//               <Link to="/profile">Profile</Link>
//             </>
//           ) : (
//             <>
//               <Link to="/login" onClick={closeMenu}>Login</Link>
//             </>
//           )}
          

//         </div>
//       </div>
//     </nav>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";

export default function Navbar({ user, cartCount, logoutUser }) {
  const nav = useNavigate();
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo" onClick={() => nav("/")}>
          Spare Market
        </div>

        {/* Right Side */}
        <div className="nav-right">
          {/* Links */}
          <div className={`links ${menuOpen ? "active" : ""}`}>
            <Link to="/cart" onClick={closeMenu}>
              Cart ({cartCount})
            </Link>

            {user ? (
              <>
                <Link to="/orders" onClick={closeMenu}>
                  My Orders
                </Link>
                <Link to="/profile" onClick={closeMenu}>
                  Profile
                </Link>
              </>
            ) : (
              <Link to="/login" onClick={closeMenu}>
                Login
              </Link>
            )}

            {/* Theme Toggle */}
            <button
              className="theme-toggle inside"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
