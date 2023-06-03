import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { IoCloseSharp } from 'react-icons/io5'
import { Link as ScrollLink } from 'react-scroll'

import styles from './Header.module.scss'
import { navData } from './nav.data'

const Header: FC = () => {
	const [open, setOpen] = useState<boolean>(false)

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<ScrollLink to={'/'} spy smooth offset={-220} duration={800}>
					<Image
						src={'/images/header-logo.png'}
						width={50}
						height={50}
						alt='Logo'
					/>
				</ScrollLink>
				<div className={styles.menu} onClick={() => setOpen(prev => !prev)}>
					{open ? (
						<IoCloseSharp fontSize={25} fill='white' />
					) : (
						<BiMenuAltRight fontSize={25} fill='white' />
					)}
				</div>
				<ul
					className={clsx(styles.list, {
						[styles.listActive]: open === true
					})}
				>
					{navData.map((nav, index) => (
						<li className={styles.link} key={index}>
							<ScrollLink
								to={nav.route}
								spy
								smooth
								offset={-220}
								duration={1000}
								onClick={() => setOpen(prev => !prev)}
							>
								{nav.label}
							</ScrollLink>
						</li>
					))}
				</ul>
			</div>
		</header>
	)
}

export default Header
