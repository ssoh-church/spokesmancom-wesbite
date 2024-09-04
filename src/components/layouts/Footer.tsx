// components/Footer.tsx
import SocialIcons from './SocialIcons';
import data from '../../data/layouts.json';

const Footer: React.FC = () => {
    const {socialIcons, menuItems} = data
    return (
        <>
            <section className="widget-section padding">
                <div className="container">
                    <div className="widget-wrap row">
                        <div className="col-md-4 xs-padding">
                            <div className="widget-content">
                                <img src="/img/meta/scm_WHITE.png" width={100} height={100} alt="logo" />
                                <p>We are dealers in hope</p>
                                <SocialIcons ulClassName="social-icon" socialIcons={socialIcons} />
                            </div>
                        </div>
                        <div className="col-md-4 xs-padding">
                            <div className="widget-content">
                                <h3>Resources</h3>
                                <ul className="widget-link">
                                    {menuItems[3].subMenu?.map((item, index) => (
                                        <li key={index}><a href={item.link} target='_blank'>{item.label}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 xs-padding">
                            <div className="widget-content">
                                <h3>Spokesman Communication Ministries Location</h3>
                                <ul className="address">
                                    <li><i className="ti-email"></i> info@gregerhabor.com</li>
                                    {/* <li><i className="ti-mobile"></i> +(333) 052 39876</li> */}
                                    <li><i className="ti-world"></i> www.spokesmancom.org</li>
                                    <li><i className="ti-location-pin mx-1"></i> 60 Grand Avenue. Central New Road 0708, USA</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 sm-padding">
                            <div className="copyright">&copy; 2021 Spokesman Communication Ministries</div>
                        </div>
                        {/* <div className="col-md-6 sm-padding">
                            <ul className="footer-social">
                                <li><a href="#">Orders</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Report Problem</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </footer>
            <a data-scroll href="#header" id="scroll-to-top"><i className="arrow_up"></i></a>
        </>
    );
};

export default Footer;
