import styles from "./hero.module.scss";
import Phone_img from "../../../../assets/home/desktop/illustration-phone-mockup.svg";

const Hero: React.FC = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.text_context}>context</div>
			<div className={styles.image_wrapper}>{<img src={Phone_img} alt="" />}</div>
		</section>
	);
};

export default Hero;
