import Image from 'next/image'
import { FC } from 'react'

import { IDetailData } from '@/types/detail.data'

import styles from './Detail.module.scss'

const ListItem: FC<{ item: IDetailData }> = ({ item }) => {
	return (
		<li className={styles.li}>
			<Image src={item.img} width={30} height={30} alt={item.title} />
			<div>
				<h6>Hotel Booking</h6>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
		</li>
	)
}

export default ListItem
