import { NavLink } from "react-router-dom";
import styles from "./footer.module.scss";
import FacebookSocial from "./icons/FacebookSocial";
import Linkedin from "./icons/Linkedin";
import Logo from "./icons/Logo";
import TwitterSocial from "./icons/TwitterSocial";

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.logo_wrapper}>
				<Logo fill="#fff" />
			</div>
			<div className={styles.links_container}>
				<li>
					<NavLink to="/pricing" end className={({ isActive }) => (isActive ? ` ${styles.active}  ${styles.link}` : `${styles.inactive}  ${styles.link}`)}>
						Pricing
					</NavLink>
				</li>
				<li>
					<NavLink to="/about" end className={({ isActive }) => (isActive ? ` ${styles.active}  ${styles.link} ` : `${styles.inactive}  ${styles.link}`)}>
						About
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" end className={({ isActive }) => (isActive ? ` ${styles.active}  ${styles.link}` : `${styles.inactive}  ${styles.link}`)}>
						Contact
					</NavLink>
				</li>
			</div>
			<div className={styles.social_container}>
				<FacebookSocial fill="#fff" />
				<TwitterSocial fill="#fff" />
				<Linkedin fill="#fff" />
			</div>
		</footer>
	);
};

export default Footer;
