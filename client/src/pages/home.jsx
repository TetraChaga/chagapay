import styles from "../styles"
import {
	Navbar,
	Billing,
	CardDeal,
	Business,
	Clients,
	CTA,
	Stats,
	Footer,
	Testimonials,
	Hero,
} from "../components"
import DownloadNow from "../components/DownloadNow"
import ContactUs from "./contact"

const App = () => {
	return (
		<div className="w-full overflow-hidden bg-primary">

			<div className={`${styles.flexStart} sm:mt-10 mt-20 bg-primary`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>

			<div
				className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
				<div className={`${styles.boxWidth}`}>
					<Stats />
					<Business />
					<Billing />
					<DownloadNow />
					<CardDeal />
					<ContactUs />
					<Testimonials />
					<Clients />
					<CTA />
				</div>
			</div>
		</div>
	)
}

export default App
