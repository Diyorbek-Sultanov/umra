import Link from 'next/link'
import { FC } from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { HiMapPin } from 'react-icons/hi2'

import styles from './Footer.module.scss'

const Contact: FC = () => {
	return (
		<div className={styles.contact}>
			<h2>Murojaat uchun telefon raqamlar</h2>
			<Link href={'tel:+998910755551'} className={styles.tel}>
				<BsTelephoneFill fontSize={20} fill='#f9b88e' />
				+998910755551
			</Link>
			<Link href={'tel:+998915856060'} className={styles.tel}>
				<BsTelephoneFill fontSize={20} fill='#f9b88e' />
				+998915856060
			</Link>
			<Link href={'tel:+998999886060'} className={styles.tel}>
				<BsTelephoneFill fontSize={20} fill='#f9b88e' />
				+998999886060
			</Link>
		</div>
	)
}

export default Contact
