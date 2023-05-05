import clsx from 'clsx'
import { FC, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoCloseSharp } from 'react-icons/io5'

import styles from './Header.module.scss'
import { navData } from './nav.data'

const Header: FC = () => {
	const [open, setOpen] = useState<boolean>(false)

	return (
		<header className={styles.header}>
			<h2>Logo</h2>
			<div className={styles.menu} onClick={() => setOpen(prev => !prev)}>
				{open ? (
					<IoCloseSharp fontSize={25} fill='white' />
				) : (
					<BiMenuAltRight fontSize={25} fill='white' />
				)}
			</div>
			<ul
				className={clsx(styles.list, {
					[styles.active]: open === true
				})}
			>
				{navData.map((nav, index) => (
					<li className={styles.link} key={index}>
						{nav.label}
					</li>
				))}
			</ul>
			<p className={styles.tel}>
				<BsFillTelephoneFill />
				+998907774433
			</p>
		</header>
	)
}

export default Header
