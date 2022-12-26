import Footer from "../../components/Footer";
import Google from "../../components/icons/Google";
import Hp from "../../components/icons/Hp";
import Microsoft from "../../components/icons/Microsoft";
import Nvidia from "../../components/icons/Nvidia";
import Oracle from "../../components/icons/Oracle";
import Tesla from "../../components/icons/Tesla";
import Navigation from "../../components/Navigation";
import Newsletter from "../../components/Newsletter";
import styles from "./contact.module.scss";

const Contact: React.FC = () => {
	return (
		<section className={styles.contact}>
			<Navigation />
			<div className={styles.bg_about_header}></div>
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
				<div className={styles.sponsors_container}>
					<div className={styles.sponsors_wrapper}>
						<h3 className={styles.sponsors_title}>Join the thousands of innovators that are already building with us</h3>
						<div className={styles.sponsors_icons_container}>
							<Tesla fill="#36536B" />
							<Microsoft fill="#36536B" />
							<Hp fill="#36536B" />
							<Oracle fill="#36536B" />
							<Google fill="#36536B" />
							<Nvidia fill="#36536B" />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.wrapper_container}>
				<Newsletter />
			</div>
			<Footer />
		</section>
	);
};

export default Contact;
