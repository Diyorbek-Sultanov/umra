import { FC, forwardRef } from 'react'

import { IField } from '@/types/input.types'

import styles from './Input.module.scss'

const Field: FC = forwardRef<HTMLInputElement, IField>(
	({ type = 'text', ...rest }, ref) => {
		return (
			<div className={styles.wrap}>
				<input
					className={styles.input}
					type={type}
					ref={ref}
					required={true}
					{...rest}
				/>
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
