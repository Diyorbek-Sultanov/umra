import Image from 'next/image'
import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'

import styles from './Hotel.module.scss'

const Hotel: FC = () => {
	return (
		<div className={styles.hotel}>
			<Heading>Our Hotels</Heading>
			<div className={styles.wrapper}>
				<Image
					src={'/images/hilton-logo.png'}
					width={250}
					height={250}
					alt='hotel'
				/>
				<Image
					src={'/images/hilton-logo.png'}
					width={250}
					height={250}
					alt='hotel'
				/>
				<Image
					src={'/images/hilton-logo.png'}
					width={250}
					height={250}
					alt='hotel'
				/>
				<Image
					src={'/images/hilton-logo.png'}
					width={250}
					height={250}
					alt='hotel'
				/>
			</div>
		</div>
	)
}

export default Hotel
