import { Link } from "react-router-dom";
import { logo } from "../assets/icons";
import { navMenus } from "../constants";
import { ButtonComponent, NavMenuCard } from "../components";




const Nav = () => {
  return (
    <header>
        <nav className="flex justify-between items-center nav-menu px-12 py-6 shadow-lg">
            <Link to="/" className="brand">
                <img src={logo} alt="brand logo" />
            </Link>


            <ul className="flex justify-center items-center gap-20 w-full">
                {
                    navMenus.map((item) => {
                        return (
                            <NavMenuCard key={item.label} {...item} />
                        );
                    })
                }
            </ul>


            <div className="w-64 min-w-max">
                <ButtonComponent 
                    btnURI="https://travelbeta.com/auth/signup"
                    btnText="sign up"
                    btnProps="flex justify-center text-2xl capitalize bg-blue-600 text-white font-semibold px-6 py-5 rounded-xl"
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav
