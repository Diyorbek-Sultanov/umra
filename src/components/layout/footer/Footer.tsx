import { FC } from 'react'

import Contact from './Contact'
import styles from './Footer.module.scss'
import FooterInfo from './FooterInfo'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<FooterInfo />
				<div className={styles.content}>
					<ul className={styles.list}>
						<h2>Bosh</h2>
						<li>Hajj & Umrah </li>
						<li>Hajj & Umrah </li>
					</ul>
					<ul className={styles.list}>
						<h2>Kompaniya haqida</h2>
						<li>Hajj & Umrah </li>
						<li>Hajj & Umrah </li>
					</ul>
					<Contact />
				</div>
			</div>

			<div className={styles.copy}>&copy; 2023 Bilol Travel</div>
		</footer>
	)
}

export default Footer
