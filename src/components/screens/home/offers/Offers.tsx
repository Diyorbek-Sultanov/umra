import { FC } from 'react'

import OfferItem from './OfferItem'
import styles from './Offers.module.scss'
import { offerData } from './offer.data'

const Offers: FC = () => {
	return (
		<div className={styles.offer}>
			<p className={styles.sub}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, ab?
			</p>
			<div className={styles.wrapper}>
				{offerData.map(item => (
					<OfferItem item={item} key={item.id} />
				))}
			</div>
		</div>
	)
}

export default Offers
