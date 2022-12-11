import Navigation from "../../components/Navigation";
import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";
import Sponsors from "./components/sponsors/Sponsors";
import styles from "./home.module.scss";

const Home: React.FC = () => {
	return (
		<section className={styles.home}>
			<div className={styles.bg_hero_image}></div>
			<Navigation />
			<Hero />
			<Sponsors />
			<Features />
		</section>
	);
};

export default Home;
