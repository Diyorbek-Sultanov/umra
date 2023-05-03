import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'

import styles from './Inclusive.module.scss'
import InclusiveItem from './InclusiveItem'
import { inclusiveData } from './inclusive.data'

const Inclusive: FC = () => {
	return (
		<div className={styles.inclu}>
			<Heading>All Inclusive Packages</Heading>
			<p className={styles.sub}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, illum
				blanditiis voluptatem nemo deleniti fugiat voluptatibus, consequuntur
				quasi tempore repellat error, quod totam magni obcaecati.
			</p>
			<div className={styles.wrapper}>
				{inclusiveData.map(item => (
					<InclusiveItem item={item} key={item.id} />
				))}
			</div>
		</div>
	)
}

export default Inclusive
