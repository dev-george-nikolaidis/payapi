import styles from "./sponsors.module.scss";

// TODO IMPORT ALL SVGS AND MAKE  CUSTOM FILL WHITE PROPERTY , CLIP THE CIRCLE TO THE TOP LET CORNER ;
const Sponsors: React.FC = () => {
	return (
		<section className={styles.sponsors}>
			<div className={styles.wrapper}>
				<div className={styles.text_container}>
					<h4 className={styles.sponsors_title}> Who we work with</h4>
					<p className={styles.text_pitch}>
						Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to
						create easy and accessible experiences for their users.{" "}
					</p>
					<button className={`${styles.btn_about_us} btn`}>About Us</button>
				</div>
				<div className={styles.logos_container}>
					<div className={`${styles.tesla} ${styles.bg_image}`}></div>
					<div className={`${styles.microsoft} ${styles.bg_image}`}></div>
					<div className={`${styles.hp} ${styles.bg_image}`}></div>
					<div className={`${styles.oracle} ${styles.bg_image}`}></div>
					<div className={`${styles.google} ${styles.bg_image}`}></div>
					<div className={`${styles.nvidia} ${styles.bg_image}`}></div>
				</div>
			</div>
		</section>
	);
};

export default Sponsors;
