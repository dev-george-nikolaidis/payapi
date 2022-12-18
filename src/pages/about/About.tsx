import Navigation from "../../components/Navigation";
import styles from "./about.module.scss";
import Circle from "../../assets/shared/desktop/bg-pattern-circle.svg";

const About: React.FC = () => {
	return (
		<>
			<section className={styles.about}>
				<Navigation />
				<div className={styles.about_hero}>
					<h2 className={styles.about_title}>We empower innovators by delivering access to the financial system</h2>
					<div className={styles.sub_text_container}>
						<p className={styles.sub_tile}>Our Vision</p>
						<p className={styles.sub_text}>
							Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to
							create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.
						</p>
					</div>
					<div className={styles.sub_text_container}>
						<p className={styles.sub_tile}>Our Business</p>
						<p className={styles.sub_text}>
							At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well
							as robust reporting for traditional financial institutions and developers.
						</p>
					</div>
				</div>
			</section>
			<div className={styles.img_container_about}>
				{/* <img src={Circle} alt="" className={styles.img_circle_bg} /> */}
				<div className={styles.about_image_bg}></div>
			</div>
			<div className={styles.features_container}>
				<div className={styles.feature_group}>
					<h4 className={styles.group_title}>Team Members</h4>
					<p className={styles.group_number}>300+</p>
				</div>
				<div className={styles.feature_group}>
					<h4 className={styles.group_title}>Offices in the US</h4>
					<p className={styles.group_number}>3</p>
				</div>
				<div className={styles.feature_group}>
					<h4 className={styles.group_title}>Transactions analyzed</h4>
					<p className={styles.group_number}>10M+</p>
				</div>
			</div>
		</>
	);
};

export default About;
