import { FC } from 'react'

import styles from './Header.module.scss'
import { navData } from './nav.data'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<h2>Logo</h2>
			<ul className={styles.list}>
				{navData.map((nav, index) => (
					<li className={styles.link} key={index}>
						{nav.label}
					</li>
				))}
			</ul>
			<p className={styles.tel}>+998907774433</p>
		</header>
	)
}

export default Header
