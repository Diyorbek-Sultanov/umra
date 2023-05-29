import { FC } from 'react'

import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/input/Field'

import styles from '../../screens/home/Home.module.scss'

const FooterForm: FC = () => {
	return (
		<form className={styles.form}>
			<div className={styles.field}>
				<span>Ism</span>
				<Field />
			</div>
			<div className={styles.field}>
				<span>Familiya</span>
				<Field />
			</div>
			<div className={styles.field}>
				<span>Telefon raqam</span>
				<Field />
			</div>
			<Button className={styles.btn} type='submit'>
				Ro'yhatdan o'tish
			</Button>
		</form>
	)
}

export default FooterForm
