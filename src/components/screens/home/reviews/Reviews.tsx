import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Reviews.module.scss'

const Reviews: FC = () => {
	return (
		<div className={styles.review}>
			<div className={styles.wrapper}>
				<div className={styles.item}>
					<Link href={''}>
						<Image
							src={'/images/facebook.png'}
							width={180}
							height={180}
							alt='facebook'
						/>
					</Link>
				</div>
				<div className={styles.item}>
					<Link href={''}>
						<Image
							src={'/images/instagram.png'}
							width={180}
							height={180}
							alt='instagram'
						/>
					</Link>
				</div>
				<div className={styles.item}>
					<Link href={''}>
						<Image
							src={'/images/telegram.png'}
							width={180}
							height={180}
							alt='telegram'
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Reviews
