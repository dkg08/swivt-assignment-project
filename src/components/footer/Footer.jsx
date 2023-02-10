import "./footer.scss";
import esewa from "../../assets/epay/esewa 1.svg";
import khalti from "../../assets/epay/unnamed (2) 1.svg";
import ime from "../../assets/epay/unnamed (3) 1.svg";
import facebook from "../../assets/socials/entypo-social_facebook-with-circle.png";
import twitter from "../../assets/socials/entypo-social_twitter-with-circle.png";
import insta from "../../assets/socials/entypo-social_instagram-with-circle.png";
import linkedin from "../../assets/socials/entypo-social_linkedin-with-circle.png";

export const Footer = () => {
  const leftCategories = [
    "Breakfast Menu",
    "Soup",
    "Organic Salad",
    "Signature Pizza (12 inch)",
    "Half & Half Pizza",
    "Pizza",
    "Extra Toppings For Pizza",
    "Antipasti",
    "Spaghetti Or Penne",
    "Risotto",
  ];

  const rightCategories = [
    "Dessert",
    "Oven Baked Dishes",
    "Bottle Pickle Chilly",
    "Extra",
    "Signature Pizza (12 inch)",
    "Half & Half Pizza",
    "Pizza",
    "Extra Toppings For Pizza",
    "Antipasti",
    "Spaghetti Or Penne",
    "Risotto",
  ];

  const leftLinks = ["About", "Careers", "Blog", "Press", "Lead", "Value"];
  const middleLinks = [
    "Privacy",
    "Terms",
    "FAQs",
    "Security",
    "Mobile",
    "Contact",
  ];
  const rightLinks = [
    "Deliver",
    "Partner",
    "Express",
    "Local",
    "Spotlight",
    "Warehouse",
  ];
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="footerLeft">
          <h2 className="footerLeftHeader">Categories</h2>
          <div className="categories">
            <ul className="leftCategories">
              {leftCategories.map((item) => (
                <li className="leftCategoryItem">{item}</li>
              ))}
            </ul>
            <ul className="rightCategories">
              {rightCategories.map((item) => (
                <li className="rightCategoryItem">{item}</li>
              ))}
            </ul>
          </div>
          <div className="paymentOption">
            <h2 className="paymentHeader">Payment Partners</h2>
            <div className="paymentPartners">
              <div className="singlePaymentPartner">
                <img src={esewa} alt="esewa" />
                <div className="paymentPartnerDetail">
                  <h3 className="paymentGatewayName">eSewa</h3>
                  <h4 className="paymentDetail">
                    Pay using eSewa digital wallet
                  </h4>
                </div>
              </div>
              <div className="singlePaymentPartner">
                <img src={khalti} alt="esewa" />
                <div className="paymentPartnerDetail">
                  <h3 className="paymentGatewayName">Khalti</h3>
                  <h4 className="paymentDetail">
                    Pay using khalti digital wallet
                  </h4>
                </div>
              </div>
              <div className="singlePaymentPartner">
                <img src={ime} alt="esewa" />
                <div className="paymentPartnerDetail">
                  <h3 className="paymentGatewayName">IME Pay</h3>
                  <h4 className="paymentDetail">
                    Pay using eSewa digital wallet
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerRight">
          <h2 className="rightHeader">Useful Links</h2>
          <div className="linkLists">
            <ul className="links">
              {leftLinks.map((link) => (
                <li>
                  <a href="/">{link}</a>
                </li>
              ))}
            </ul>
            <ul className="links">
              {middleLinks.map((link) => (
                <li>
                  <a href="/">{link}</a>
                </li>
              ))}
            </ul>
            <ul className="links">
              {rightLinks.map((link) => (
                <li>
                  <a href="/">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <hr className="line" />
        <div className="endFooter">
          <span className="copyright">© test Private Limited 2022</span>
          <div className="endFooterRight">
            <div className="linkers">
              <span className="termsAndCondition">
                <a href="/">Terms & conditions</a>
              </span>|
              <span className="privacy">
                <a href="/">Privacy Policy</a>
              </span>
            </div>
            <div className="socialLinks">
              <a href="/">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="/">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="/">
                <img src={insta} alt="insta" />
              </a>
              <a href="/">
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
