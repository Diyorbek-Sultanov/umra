import Image from 'next/image'
import { FC } from 'react'

import { IDetailData } from '@/types/detail.data'

import styles from './Detail.module.scss'

const ListItem: FC<{ item: IDetailData }> = ({ item }) => {
	return (
		<li className={styles.li}>
			<Image src={item.img} width={30} height={30} alt={item.title} />
			<div>
				<h6>{item.title}</h6>
			</div>
		</li>
	)
}

export default ListItem
