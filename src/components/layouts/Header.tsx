// components/Header.tsx
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';

const Header: React.FC = () => {
    return (
        <header id="header" className="header-section">
            <TopHeader />
            <BottomHeader />
        </header>
    );
};

export default Header;
