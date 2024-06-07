import {
    footerLinksOne,
    footerLinksTwo,
    footerLinksThree,
    footerLinksFour
} from "../constants";
import { FooterMenuCard } from "../components";





const Footer = () => {
  return (
    <footer>
        <div>
            <div className="footer-menu">
                {
                    footerLinksOne.map((item) => {
                        return (
                            <FooterMenuCard key={item.label} {...item} />
                        );
                    })
                }
            </div>
            <div className="footer-menu">
                {
                    footerLinksTwo.map((item) => {
                        return (
                            <FooterMenuCard key={item.label} {...item} />
                        );
                    })
                }
            </div>
            <div className="footer-menu">
                {
                    footerLinksThree.map((item) => {
                        return (
                            <FooterMenuCard key={item.label} {...item} />
                        );
                    })
                }
            </div>
            <div className="footer-menu">
                {
                    footerLinksFour.map((item) => {
                        return (
                            <FooterMenuCard key={item.label} {...item} />
                        );
                    })
                }
            </div>
        </div>
    </footer>
  );
};

export default Footer;
