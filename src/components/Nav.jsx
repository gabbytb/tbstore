import { Link } from "react-router-dom";
import { logo } from "../assets/icons";
import { navMenus } from "../constants";
import { ButtonLinkComponent, NavMenuCard } from "../components";




const Nav = () => {
    return (
        <header className="flex z-50 bg-white fixed top-0 w-full">
            <nav className="flex justify-between items-center nav-menu w-full px-12 py-6 bg-white shadow-lg z-50">
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


                <div className="w-96 text-center flex">
                    <ButtonLinkComponent 
                        btnURI="https://travelbeta.com/auth/signup"
                        btnText="sign up"
                        btnProps="w-full text-2xl capitalize bg-skin-dark-blue text-white font-semibold px-6 py-5 rounded-xl"
                    />
                </div>
            </nav>
        </header>
    );
};
export default Nav;
