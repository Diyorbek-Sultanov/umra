import Image from 'next/image'
import { FC } from 'react'

import Button from '@/components/ui/button/Button'

import { IOfferData } from '@/types/offer.types'

import styles from './Offers.module.scss'

const OfferItem: FC<{ item: IOfferData }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				className={styles.img}
				src={item.img}
				width={300}
				height={300}
				priority
				alt={item.title}
			/>
			<span className={styles.type}>{item.type}</span>
			<h4 className={styles.title}>{item.title}</h4>
			<h5 className={styles.price}>
				${item.price} <span>/person</span>
			</h5>
			<p className={styles.durat}>Package Duration ({item.duration} Days)</p>
			<Button className={styles.btn}>Detail</Button>
		</div>
	)
}

export default OfferItem
