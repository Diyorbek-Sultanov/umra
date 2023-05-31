import clsx from 'clsx'
import { forwardRef } from 'react'

import { IField } from '@/types/input.types'

import styles from './Input.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ type = 'text', placeholder, error, className, ...rest }, ref) => {
		return (
			<div className={styles.wrap}>
				<input
					className={clsx(styles.input, className, {
						[styles.inputErr]: !!error
					})}
					type={type}
					ref={ref}
					placeholder={placeholder}
					{...rest}
				/>
				{error && <div className={styles.errorMess}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
