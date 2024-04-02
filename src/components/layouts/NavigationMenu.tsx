// components/NavigationMenu.tsx

interface MenuItem {
    label: string;
    link: string;
    subMenu?: MenuItem[];
}

interface NavigationMenuProps {
    menuItems: MenuItem[];
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ menuItems }) => {
    return (
        <ul id="mainmenu" className="nav navbar-nav nav-menu">
            {menuItems.map((menuItem, index) => (
                <li key={index}>
                    <a href={menuItem.link}>{menuItem.label}</a>
                    {menuItem.subMenu && (
                        <ul>
                            {menuItem.subMenu.map((subMenuItem, subIndex) => (
                                <li key={subIndex}>
                                    <a href={subMenuItem.link}>{subMenuItem.label}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
            <li><a href="contact.html">Contact</a></li>
        </ul>
    );
};

export default NavigationMenu;
