// components/BottomHeader.tsx

import NavigationMenu from './NavigationMenu';
import data from '../../data/layouts.json';


const BottomHeader: React.FC = () => {

    const {menuItems} = data
    
    return (
        <div className="bottom-header">
            <div className="container">
                <div className="bottom-content-wrap row">
                    <div className="col-sm-4">
                        <div className="site-branding">
                            <a href="index.html"><img src="/img/meta/spokesmanlogo.png" alt="Brand" /></a>
                        </div>
                    </div>
                    <div className="col-sm-8 text-right">
                        <NavigationMenu menuItems={menuItems} /> {/* Pass the menu items as props */}
                        <a href="#" className="default-btn">Donate Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomHeader;
