import { FC } from 'react'

import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/input/Field'

import styles from './Footer.module.scss'

const FooterForm: FC = () => {
	return (
		<form className={styles.form}>
			<div>
				<span>Ism</span>
				<Field />
			</div>
			<div>
				<span>Familiya</span>
				<Field />
			</div>
			<div>
				<span>Telefon raqam</span>
				<Field />
			</div>
			<Button className={styles.btn} type='submit'>
				Send
			</Button>
		</form>
	)
}

export default FooterForm
