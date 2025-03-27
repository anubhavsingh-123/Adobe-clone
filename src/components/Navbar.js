// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-purple-900 text-white p-4 flex justify-between">
//       <h1 className="text-xl font-bold">Adobe XD Platform</h1>
//       <div>
//         <Link to="/" className="px-4">Home</Link>
//         <Link to="/plugin-apis" className="px-4">Plugin APIs</Link>
//         <Link to="/cloud-apis" className="px-4">Cloud APIs</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Adobe XD Platform</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/plugin-apis">Plugin APIs</Link></li>
        <li><Link to="/cloud-apis">Cloud Content APIs</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;