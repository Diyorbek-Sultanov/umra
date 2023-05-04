import { FC } from 'react'

import Button from '@/components/ui/button/Button'

import styles from './Detail.module.scss'
import ListItem from './ListItem'
import { detailData } from './detail.data'

const Detail: FC = () => {
	return (
		<div className={styles.detail}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<h2 className={styles.title}>What Do We Offer</h2>
					<p className={styles.about}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum iusto
						magni repellendus at quam illum voluptates voluptate, recusandae
						fuga alias dolorum molestias dolore architecto nulla ipsum? Eaque
						dignissimos atque laborum!
					</p>
					<Button className={styles.btn}>Learn More</Button>
					<ul className={styles.list}>
						{detailData.map(item => (
							<ListItem item={item} key={item.id} />
						))}
					</ul>
				</div>
				<div className={styles.big}></div>
			</div>
		</div>
	)
}

export default Detail
