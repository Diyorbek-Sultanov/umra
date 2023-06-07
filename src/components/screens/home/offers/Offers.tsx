import { FC } from 'react'

import OfferItem from './OfferItem'
import styles from './Offers.module.scss'
import { offerData } from './offer.data'

const Offers: FC = () => {
	return (
		<div className={styles.offer} id='hajj'>
			<p className={styles.sub}>
				Agar mijoz juda aqlli bo'lsa, u kerakli natijaga erisha oladi. Va biz
				qo'llab quvvatlab bor ilmimizni ishga solib barcha amallarni to'liq
				to'kis bajarishda yordam beramiz
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
