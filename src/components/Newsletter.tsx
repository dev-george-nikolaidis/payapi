import styles from "./newsletter.module.scss";

const Newsletter: React.FC = () => {
	return (
		<div className={styles.newsletter}>
			<p className={styles.newsletter_text}>Ready to start?</p>
			<div className={styles.newsletter_input_container}>
				<input type="text" placeholder="Enter email address" className={styles.newsletter_input} />
				<button className={`${styles.btn_newsletter} btn`}>Schedule a Demo</button>
			</div>
		</div>
	);
};

export default Newsletter;
