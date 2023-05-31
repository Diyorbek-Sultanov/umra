import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import FooterForm from '@/components/layout/footer/FooterForm'
import Heading from '@/components/ui/Heading/Heading'
import Button from '@/components/ui/button/Button'

import styles from './Home.module.scss'
import Hotel from './hotel/Hotel'
import Inclusive from './inclusive/Inclusive'
import Learn from './learn/Learn'
import Detail from './offer-detail/Detail'
import Offers from './offers/Offers'
import Reviews from './reviews/Reviews'

const Home: FC = () => {
	return (
		<Layout title='Home' description='the umra travel website home page'>
			<div className={styles.home}>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<div>
							<h1>Kam xarajatli Hajj va Umra safarlari</h1>
							<p>Biz bilan hoziroq Hajj va Umra safarlariga otlaning</p>
							<Button className={styles.btn}>Paket narxini bilish</Button>
						</div>
						<FooterForm />
					</div>
				</div>
				<div className={styles.container}>
					<Reviews />
					<Heading>Hajj and Umrah Spicial Offers</Heading>
					<Offers />
					<Detail />
					<Hotel />
					<Inclusive />
					<Learn />
				</div>
			</div>
		</Layout>
	)
}

export default Home
