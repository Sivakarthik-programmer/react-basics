import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div className="navBar">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/about">About</Link>
      <Link className="link" to="/user">User</Link>
    </div>
  )
}

export default Navbar