import Image from 'next/image'
import { FC } from 'react'

import Button from '@/components/ui/button/Button'

import { IInclusiveData } from '@/types/inclusive.interface'

import styles from './Inclusive.module.scss'

const InclusiveItem: FC<{ item: IInclusiveData }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				className={styles.img}
				src={item.img}
				width={340}
				height={340}
				alt={item.title}
			/>
			<h4>{item.title}</h4>
			<p>{item.descr}</p>
			<Button className={styles.btn}>Read more</Button>
		</div>
	)
}

export default InclusiveItem
