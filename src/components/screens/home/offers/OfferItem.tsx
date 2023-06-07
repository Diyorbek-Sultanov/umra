import Image from 'next/image'
import { FC } from 'react'

import { IOfferData } from '@/types/offer.types'

import styles from './Offers.module.scss'
import { formatCurrensy } from '@/utils/format-price'

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
				{formatCurrensy(Number(item.price))}
				<span>/1 kishiga</span>
			</h5>
			<p className={styles.durat}>Paket vaqti ({item.duration} kun)</p>

			{item.hajjType === 'ekonom' && (
				<div className={styles.hajjType}>
					<p>Ekonom paket 3 4 kishilik joylashuv shinam mexmon xona</p>
					<p>Va quyidagilar kiradi:</p>
					<ul>
						<li>Mehmonxona Makka va Madinada 4 ta</li>
						<li>Makka shahrida ziyoratlar</li>
						<li>Madina shahrida ziyoratlar</li>
						<li>Uch mahal issiq ovqat</li>
						<li>7-24 soatlik Tez tibbiy yordam</li>
						<li>
							Umra qo'llanmasi, nimcha, beydjik, zam-zam suv bilan ta'minlash
						</li>
					</ul>
				</div>
			)}
			{item.hajjType === 'standart' && (
				<div className={styles.hajjType}>
					<p>
						Standart kaket 3 kishilik joylashuv bitta exrom padarkamiz bor va
					</p>
					<p>Quyidagilar kiradi:</p>
					<ul>
						<li>Mehmonxona Makka va Madinada 4 ta</li>
						<li>Makka shahrida ziyoratlar</li>
						<li>Madina shahrida ziyoratlar</li>
						<li>Uch mahal issiq ovqat</li>
						<li>7-24 soatlik Tez tibbiy yordam</li>
						<li>
							Umra qo'llanmasi, nimcha, beydjik, zam-zam suv bilan ta'minlash
						</li>
					</ul>
				</div>
			)}
			{item.hajjType === 'kamfort' && (
				<div className={styles.hajjType}>
					<p>
						Kamford paket xonada ikki kishilik joylashuv yaniy oylaviy va exrom
						xoji kiyim padarka va
					</p>
					<p>Quyidagilar kiradi:</p>
					<ul>
						<li>Mehmonxona Makka va Madinada 4 ta</li>
						<li>Makka shahrida ziyoratlar</li>
						<li>Madina shahrida ziyoratlar</li>
						<li>Uch mahal issiq ovqat</li>
						<li>7-24 soatlik Tez tibbiy yordam</li>
						<li>
							Umra qo'llanmasi, nimcha, beydjik, zam-zam suv bilan ta'minlash
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default OfferItem
