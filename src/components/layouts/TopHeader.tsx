import SocialIcons from './SocialIcons';
import data from '../../data/layouts.json';

const TopHeader: React.FC = () => {
    const { socialIcons } = data
    return (
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
                        <SocialIcons ulClassName="right-info" socialIcons={socialIcons} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
