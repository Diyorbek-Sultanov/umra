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
					<h2 className={styles.title}>Biz nimani taklik etamiz</h2>
					<p className={styles.about}>Bir nima takliflar</p>
					<Button className={styles.btn}>Ko'proq ko'rish</Button>
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
