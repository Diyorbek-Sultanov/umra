import { FC } from 'react'

import Button from '@/components/ui/button/Button'

import Contact from './Contact'
import styles from './Footer.module.scss'
import FooterInfo from './FooterInfo'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<h1 className={styles.title}>Subscirbe for Newsletter</h1>
			<p className={styles.sub}>Lorem ipsum dolor sit amet.</p>
			<form className={styles.form}>
				<input
					className={styles.input}
					type='email'
					placeholder='Enter email'
				/>
				<Button className={styles.btn} type='submit'>
					Subscribe
				</Button>
			</form>
			<div className={styles.wrapper}>
				<FooterInfo />
				<div className={styles.content}>
					<ul className={styles.list}>
						<h2>Links</h2>
						<li>Hajj & Umrah </li>
						<li>Hajj & Umrah </li>
						<li>Hajj & Umrah </li>
						<li>Hajj & Umrah </li>
					</ul>
					<ul className={styles.list}>
						<h2>Links</h2>
						<li>Hajj & Umrah </li>
						<li>Hajj & Umrah </li>
						<li>Hajj & Umrah </li>
						<li>Hajj & Umrah </li>
					</ul>
					<Contact />
				</div>
			</div>
		</footer>
	)
}

export default Footer
