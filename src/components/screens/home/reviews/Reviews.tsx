import Image from 'next/image'
import { FC } from 'react'

import styles from './Reviews.module.scss'

const Reviews: FC = () => {
	return (
		<div className={styles.review}>
			<div className={styles.wrapper}>
				<div className={styles.item}>
					<Image
						src={'/images/facebook.png'}
						width={120}
						height={120}
						alt='facebook'
					/>
					<div className={styles.star}>
						<Image src={'/images/star.png'} width={20} height={20} alt='star' />
						<p>5/5</p>
					</div>
					<span>3200 reviews</span>
				</div>
				<div className={styles.item}>
					<Image
						src={'/images/facebook.png'}
						width={120}
						height={120}
						alt='facebook'
					/>
					<div className={styles.star}>
						<Image src={'/images/star.png'} width={20} height={20} alt='star' />
						<p>5/5</p>
					</div>
					<span>3200 reviews</span>
				</div>
				<div className={styles.item}>
					<Image
						src={'/images/facebook.png'}
						width={120}
						height={120}
						alt='facebook'
					/>
					<div className={styles.star}>
						<Image src={'/images/star.png'} width={20} height={20} alt='star' />
						<p>5/5</p>
					</div>
					<span>3200 reviews</span>
				</div>
				<div className={styles.item}>
					<Image
						src={'/images/facebook.png'}
						width={120}
						height={120}
						alt='facebook'
					/>
					<div className={styles.star}>
						<Image src={'/images/star.png'} width={20} height={20} alt='star' />
						<p>5/5</p>
					</div>
					<span>3200 reviews</span>
				</div>
			</div>
		</div>
	)
}

export default Reviews
