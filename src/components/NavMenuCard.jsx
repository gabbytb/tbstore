import { Link } from "react-router-dom";



const NavMenuCard = ({ linkURI, label }) => {
  return (
    <li className="menu-item">
      <Link to={linkURI}>
          {label}
      </Link>
    </li>
  )
}

export default NavMenuCard
