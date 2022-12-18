import Navigation from "../../components/Navigation";
import styles from "./pricing.module.scss";
import Check_mark from "../../assets/shared/desktop/icon-check.svg";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

const Pricing: React.FC = () => {
	return (
		<section className={styles.pricing}>
			<div className={styles.bg_image}></div>
			<Navigation />
			<div className={styles.pricing_container}>
				<h2 className={styles.title}>Pricing</h2>
				<div className={styles.cards_container}>
					{/* Free plan */}
					<div className={styles.single_card}>
						<h5 className={styles.single_title}>Free Plan</h5>
						<p className={styles.single_text}>Build and test using our core set of products with up to 100 API requests </p>
						<p className={styles.single_price}>$0.00</p>
						<div className={styles.groups_container}>
							<div className={styles.group_card}>
								<img src={Check_mark} alt="" className={styles.img_check} />
								<p className={styles.group_include}>Transactions</p>
							</div>
							<div className={styles.group_card}>
								<img src={Check_mark} alt="" />
								<p className={styles.group_include}>Auth</p>
							</div>
							<div className={styles.group_card}>
								<img src={Check_mark} alt="" />
								<p className={styles.group_include}>Identity</p>
							</div>
							<div className={styles.group_card}>
								<p className={styles.group_not_include}>Investments</p>
							</div>
							<div className={styles.group_card}>
								<p className={styles.group_not_include}>Assets</p>
							</div>
							<div className={styles.group_card}>
								<p className={styles.group_not_include}>Liabilities</p>
							</div>

							<div className={styles.group_card}>
								<p className={styles.group_not_include}>Income</p>
							</div>
						</div>
						<button className={`${styles.btn_cta} btn`}>Request Access</button>
					</div>
					{/* Basic plan */}
					<div className={styles.single_card}>
						<h5 className={styles.single_title}>Basic Plan</h5>
						<p className={styles.single_text}>Launch your project with unlimited requests and no contractual minimums </p>
						<p className={styles.single_price}>$249.00</p>
						<div className={styles.groups_container}>
							<div className={styles.group_card}>
								<img src={Check_mark} alt="" />
								<p className={styles.group_include}>Transactions</p>
							</div>
							<div className={styles.group_card}>
								<img src={Check_mark} alt="" />
								<p className={styles.group_include}>Auth</p>
							</div>
							<div className={styles.group_card}>
								<img src={Check_mark} alt="" />
								<p className={styles.group_include}>Identity</p>
							</div>
							<div className={styles.group_card}>
								<img src={Check_mark} alt="" />
								<p className={styles.group_include}>Investments</p>
							</div>
							<div className={styles.group_card}>
								<img src={Check_mark} alt="" />
								<p className={styles.group_include}>Assets</p>
							</div>
							<div className={styles.group_card}>
								<p className={styles.group_not_include}>Liabilities</p>
							</div>

							<div className={styles.group_card}>
								<p className={styles.group_not_include}>Income</p>
							</div>
						</div>
						<button className={`${styles.btn_cta} btn`}>Request Access</button>
					</div>
					{/* Premium Plan*/}
					<div className={styles.single_card}>
						<h5 className={styles.single_title}>Premium Plan</h5>
						<p className={styles.single_text}>Get tailored solutions, volume pricing, and dedicated support for your team </p>
						<p className={styles.single_price}>$499.00</p>
						<div className={styles.groups_container}>
							<div className={styles.group_card}>
								<img src={Check_mark} alt="" />
								<p className={styles.group_include}>Transactions</p>
							</div>
							<div className={styles.group_card}>
								<img src={Check_mark} alt="" />
								<p className={styles.group_include}>Auth</p>
							</div>
							<div className={styles.group_card}>
								<img src={Check_mark} alt="" />
								<p className={styles.group_include}>Identity</p>
							</div>
							<div className={styles.group_card}>
								<img src={Check_mark} alt="" />
								<p className={styles.group_include}>Investments</p>
							</div>
							<div className={styles.group_card}>
								<img src={Check_mark} alt="" />
								<p className={styles.group_include}>Assets</p>
							</div>
							<div className={styles.group_card}>
								<img src={Check_mark} alt="" />
								<p className={styles.group_include}>Liabilities</p>
							</div>

							<div className={styles.group_card}>
								<img src={Check_mark} alt="" />
								<p className={styles.group_include}>Income</p>
							</div>
						</div>
						<button className={`${styles.btn_cta} btn`}>Request Access</button>
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

export default Pricing;
