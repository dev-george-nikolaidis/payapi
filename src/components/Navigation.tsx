import { NavLink } from "react-router-dom";
import styles from "./navigation.module.scss";
import Logo from "../assets/shared/desktop/logo.svg";
import { FaAlignJustify } from "react-icons/fa";

const Navigation: React.FC = () => {
	return (
		<nav className={styles.navigation}>
			<div className={styles.logo_wrapper}>
				<NavLink to="/" end>
					<img src={Logo} alt="" className={styles.logo} />
				</NavLink>
			</div>
			<div className={styles.link_container}>
				<li>
					<NavLink to="/pricing" end className={({ isActive }) => (isActive ? ` ${styles.active}  ${styles.link}` : `${styles.inactive}  ${styles.link}`)}>
						Pricing
					</NavLink>
				</li>
				<li>
					<NavLink to="/about" end className={({ isActive }) => (isActive ? ` ${styles.active}    ${styles.link}` : `${styles.inactive}  ${styles.link}`)}>
						About
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" end className={({ isActive }) => (isActive ? ` ${styles.active}    ${styles.link}` : `${styles.inactive}  ${styles.link}`)}>
						Contact
					</NavLink>
				</li>
			</div>
			<button className={`${styles.btn_cta} btn`}>Schedule a Demo</button>
			<FaAlignJustify className={styles.hamburger_icon} />
		</nav>
	);
};

export default Navigation;
