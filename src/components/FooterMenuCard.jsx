import { Link } from "react-router-dom";



const FooterMenuCard = ({ linkURI, label }) => {
    return (
        <Link to={linkURI}>
            {label}
        </Link>
    );
};

export default FooterMenuCard;
