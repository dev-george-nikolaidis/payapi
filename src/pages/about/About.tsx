import Navigation from "../../components/Navigation";
import styles from "./about.module.scss";
import Circle from "../../assets/shared/desktop/bg-pattern-circle.svg";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

const About: React.FC = () => {
	return (
		<>
			<section className={styles.about}>
				<Navigation />
				<div className={styles.bg_about_header}></div>
				<div className={styles.about_hero}>
					<h2 className={styles.about_title}>We empower innovators by delivering access to the financial system</h2>
					<div className={styles.sub_text_container}>
						<p className={styles.sub_title}>Our Vision</p>
						<p className={styles.sub_text}>
							Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to
							create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.
						</p>
					</div>
					<div className={styles.sub_text_container}>
						<p className={styles.sub_title}>Our Business</p>
						<p className={styles.sub_text}>
							At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well
							as robust reporting for traditional financial institutions and developers.
						</p>
					</div>
				</div>
				<div className={styles.img_container_about}>
					<img src={Circle} alt="" className={styles.img_circle_bg} />
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

				<div className={styles.small_feature_container}>
					<div className={styles.small_text_container}>
						<p className={styles.small_title}>The Culture</p>
						<p className={styles.small_text}>
							We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker
							meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.
						</p>
					</div>
					<div className={styles.small_text_container}>
						<p className={styles.small_title}>The People</p>
						<p className={styles.small_text}>
							We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.
						</p>
					</div>
				</div>

				<div className={styles.wrapper_container}>
					<Newsletter />
				</div>
				<Footer />
			</section>
		</>
	);
};

export default About;
