
import { FC } from 'react';

interface SocialIcon {
    iconClass: string;
    link: string;
}

interface SocialIconsProps {
    ulClassName: string;
    socialIcons: SocialIcon[];
}

const SocialIcons: FC<SocialIconsProps> = ({ ulClassName, socialIcons }) => {
    return (
        <ul className={ulClassName}>
            {socialIcons.map((icon, index) => (
                <li key={index}>
                    <a href={icon.link}><i className={icon.iconClass}></i></a>
                </li>
            ))}
        </ul>
    );
};

export default SocialIcons;
