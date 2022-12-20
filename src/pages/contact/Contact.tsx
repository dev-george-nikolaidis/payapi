import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Newsletter from "../../components/Newsletter";
import styles from "./contact.module.scss";

const Contact: React.FC = () => {
	return (
		<section className={styles.contact}>
			<Navigation />
			<h2 className={styles.contact_title}>Submit a help request and we’ll get in touch shortly.</h2>
			<div className={styles.context_container}>
				<div className={styles.form_container}>
					<div className={styles.form_group}>
						<input type="text" placeholder="Name" className={styles.input_el} />
					</div>
					<div className={styles.form_group}>
						<input type="email" placeholder="Email Address" className={styles.input_el} />
					</div>
					<div className={styles.form_group}>
						<input type="text" placeholder="Company Name" className={styles.input_el} />
					</div>
					<div className={styles.form_group}>
						<input type="text" placeholder="Title" className={styles.input_el} />
					</div>
					<textarea placeholder="Message" className={styles.textarea_el}></textarea>
					<div className={styles.agreement_container}>
						<input type="checkbox" className={styles.checkbox_el} />
						<p className={styles.agreement_text}>Stay up-to-date with company announcements and updates to our API</p>
					</div>
					<button className={`${styles.btn_sub} btn`}>Submit</button>
				</div>
				<div className={styles.sponsors_container}>Sponsors</div>
			</div>
			<div className={styles.wrapper_container}>
				<Newsletter />
			</div>
			<Footer />
		</section>
	);
};

export default Contact;
