import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

import { IButton } from '@/types/button.types'

import styles from './Button.module.scss'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	type,
	...rest
}) => {
	return (
		<button className={clsx(styles.button, className)} type={type} {...rest}>
			{children}
		</button>
	)
}

export default Button
