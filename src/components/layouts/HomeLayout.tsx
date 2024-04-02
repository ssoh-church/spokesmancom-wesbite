import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="author" content="DynamicLayers" />
        <title>Spokesman Communication Ministries || NGO/Charity/Fundraising Template</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <div className="site-preloader-wrap">
            <div className="spinner"></div>
        </div>
          <Header />
          <div className="header-height"></div>
          {children}
          <Footer />

      <a data-scroll href="#header" id="scroll-to-top"><i className="arrow_up"></i></a>

      <script src="/js/vendor/jquery-1.12.4.min.js"></script>
      <script src="/js/vendor/bootstrap.min.js"></script>
      <script src="/js/vendor/tether.min.js"></script>
      <script src="/js/vendor/imagesloaded.pkgd.min.js"></script>
      <script src="/js/vendor/owl.carousel.min.js"></script>
      <script src="/js/vendor/jquery.isotope.v3.0.2.js"></script>
      <script src="/js/vendor/smooth-scroll.min.js"></script>
      <script src="/js/vendor/venobox.min.js"></script>
      <script src="/js/vendor/jquery.ajaxchimp.min.js"></script>
      <script src="/js/vendor/jquery.counterup.min.js"></script>
      <script src="/js/vendor/jquery.waypoints.v2.0.3.min.js"></script>
      <script src="/js/vendor/jquery.slicknav.min.js"></script>
      <script src="/js/vendor/jquery.nivo.slider.pack.js"></script>
      <script src="/js/vendor/letteranimation.min.js"></script>
      <script src="/js/vendor/wow.min.js"></script>
      <script src="/js/contact.js"></script>
      <script src="/js/main.js"></script>
    </div>
  );
};

export default HomeLayout;
