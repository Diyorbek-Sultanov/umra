import Image from 'next/image'
import { FC } from 'react'
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa'

import styles from './Footer.module.scss'

const FooterInfo: FC = () => {
	return (
		<div className={styles.info}>
			<Image
				src={'/images/header-logo.png'}
				width={50}
				height={50}
				alt='Logo'
				className={styles.logo}
			/>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
				laboriosam eaque, rerum aperiam at tenetur.
			</p>
			<div className={styles.social}>
				<div>
					<FaFacebookF />
				</div>
				<div>
					<FaInstagram />
				</div>
				<div>
					<FaTelegramPlane />
				</div>
			</div>
		</div>
	)
}

export default FooterInfo
