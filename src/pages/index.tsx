import Image from "next/image";
import ContactUs from '../components/contact';
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


export default function Home() {
  return (<div>
            <div className="w-full overflow-hidden bg-primary">
              <div className={`${styles.paddingX} ${styles.flexCenter} relative`}>
                <div
                  className={`w-full z-50 bg-primary/0 backdrop-blur-xl fixed top-0 sm:px-32 px-12`}>
                  <Navbar />
                </div>
              </div>     
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
          {<Footer />}
            </div>
        </div>
    );
}
