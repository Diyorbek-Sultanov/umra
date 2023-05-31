import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Button from '@/components/ui/button/Button'

import { IOfferData } from '@/types/offer.types'

import styles from './Offers.module.scss'
import { formatCurrensy } from '@/utils/format-price'

const OfferItem: FC<{ item: IOfferData }> = ({ item }) => {
	const { push } = useRouter()

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
				{formatCurrensy(Number(item.price))} <span>/person</span>
			</h5>
			<p className={styles.durat}>Paket vaqti ({item.duration} kun)</p>
			<Button
				className={styles.btn}
				onClick={() => push(`offer-detail/${item.slug}`)}
			>
				Detail
			</Button>
		</div>
	)
}

export default OfferItem
