// components/Header.tsx

const Header: React.FC = () => {
    return (
        <header id="header" className="header-section">
            <div className="top-header">
                <div className="container">
                    <div className="top-content-wrap row">
                        <div className="col-sm-8">
                            <ul className="left-info">
                                <li><a href="#"><i className="ti-email"></i>info@gregerhabor.com</a></li>
                                <li><a href="#"><i className="ti-mobile"></i>+(333) 052 39876</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 d-none d-md-block">
                            <ul className="right-info">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-header">
                <div className="container">
                    <div className="bottom-content-wrap row">
                        <div className="col-sm-4">
                            <div className="site-branding">
                                <a href="index.html"><img src="/img/meta/spokesmanlogo.png" alt="Brand" /></a>
                            </div>
                        </div>
                        <div className="col-sm-8 text-right">
                            <ul id="mainmenu" className="nav navbar-nav nav-menu">
                                <li><a href="about.html">About</a></li>
                                <li><a href="#">Activities</a>
                                    <ul>
                                        <li><a href="causes.html">Events</a></li>
                                        <li><a href="causes.html">Projects</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Ministries</a>
                                    <ul>
                                        <li><a href="gallery.html">SSOH(Church)</a></li>
                                        <li><a href="gallery.html">GEPI</a></li>
                                        <li><a href="team.html">ACCF</a></li>
                                        <li><a href="404.html">GEMI</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Resources</a>
                                    <ul>
                                        <li><a href="blog-grid.html">Videos</a></li>
                                        <li><a href="blog-grid.html">Skits</a></li>
                                        <li><a href="blog-grid.html">MP3 Messages</a></li>
                                        <li><a href="blog-grid.html">Inspirational Messages</a></li>
                                        <li><a href="blog-grid.html">Books</a></li>
                                        <li><a href="blog-grid.html">iHope</a></li>
                                        <li><a href="blog-grid.html">Blog</a></li>
                                    </ul>
                                </li>
                                <li> <a href="contact.html">Contact</a></li>
                            </ul>
                            <a href="#" className="default-btn">Donate Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
