import { FC } from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { HiMapPin } from 'react-icons/hi2'

import styles from './Footer.module.scss'

const Contact: FC = () => {
	return (
		<div className={styles.contact}>
			<h2>Contact Us</h2>
			<div className={styles.address}>
				<HiMapPin fontSize={20} fill='#f9b88e' />
				4517 Toshkent Chilonzor <br /> St.ko'rg'on
			</div>
			<div className={styles.tel}>
				<BsTelephoneFill fontSize={20} fill='#f9b88e' />
				+998907775533
			</div>
		</div>
	)
}

export default Contact
