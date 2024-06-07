import {
    footerLinksOne,
    footerLinksTwo,
    footerLinksThree,
    footerLinksFour
} from "../constants";
import { ButtonComponent, FooterMenuCard } from "../components";





const Footer = () => {
  return (
    <footer>
        <div>
            <form className="flex justify-between shadow-lg px-6 py-3">
                <input className="min-w-96" type="text" placeholder="search..." name="itemName" />
                {/* onChange={(e) => setItemName(e.target.value)} */}
                <ButtonComponent
                    btnType="submit" 
                    btnProps="capitalize rounded-lg py-4 px-8 w-48"
                    btnText="submit"sss
                />
            </form>


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
