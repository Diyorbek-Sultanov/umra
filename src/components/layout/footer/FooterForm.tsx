import { FC } from 'react'

import Button from '@/components/ui/button/Button'
import Input from '@/components/ui/input/Input'

import styles from './Footer.module.scss'

const FooterForm: FC = () => {
	return (
		<form className={styles.form}>
			<div>
				<span>Email</span>
				<Input />
			</div>
			<div>
				<span>Name</span>
				<Input />
			</div>
			<div>
				<span>Message</span>
				<Input />
			</div>
			<Button className={styles.btn} type='submit'>
				Send
			</Button>
		</form>
	)
}

export default FooterForm
