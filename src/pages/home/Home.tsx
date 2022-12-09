import Navigation from "../../components/Navigation";
import Hero from "./components/hero/Hero";
import styles from "./home.module.scss";

const Home: React.FC = () => {
	return (
		<section className={styles.home}>
			<Navigation />
			<Hero />
		</section>
	);
};

export default Home;
