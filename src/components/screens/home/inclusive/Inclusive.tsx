import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'

import styles from './Inclusive.module.scss'
import InclusiveItem from './InclusiveItem'
import { inclusiveData } from './inclusive.data'

const Inclusive: FC = () => {
	return (
		<div className={styles.inclu}>
			<Heading>Paketlarimizga quyidagilar kiradi</Heading>
			<p className={styles.sub}>Bir nima yozuvlar...</p>
			<div className={styles.wrapper}>
				{inclusiveData.map(item => (
					<InclusiveItem item={item} key={item.id} />
				))}
			</div>
		</div>
	)
}

export default Inclusive
