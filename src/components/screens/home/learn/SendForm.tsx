import clsx from 'clsx'
import { FC, useRef, useState } from 'react'
import { Controller, SubmitHandler } from 'react-hook-form'

import Heading from '@/components/ui/Heading/Heading'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/input/Field'

import { ISendForm } from '@/types/sendForm.types'

import styles from './Learn.module.scss'
import { useAutoSizeArea } from '@/hooks/useAutoSizeArea'
import { useCustomForm } from '@/hooks/useCustomForm'
import { validEmail } from '@/utils/valid-email'

const SendForm: FC = () => {
	const { register, reset, handleSubmit, errors, control, watch } =
		useCustomForm()

	const textAreaRef = useRef<HTMLTextAreaElement>(null)

	const value = watch('comment')

	useAutoSizeArea(textAreaRef.current, value)

	const onSubmitHandler: SubmitHandler<ISendForm> = data => {
		console.log(data)
		reset()
	}

	return (
		<div className={styles.send}>
			<Heading>Ariza qoldiring</Heading>
			<form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
				<label className={styles.label}>
					<span>Ism</span>
					<Field
						className={styles.field}
						type={'text'}
						placeholder='Ismingiz'
						{...register('name', {
							required: "Bu joyni to'ldiring"
						})}
						error={errors.name}
					/>
				</label>
				<label className={styles.label}>
					<span>Telefon raqam</span>
					<Field
						className={styles.field}
						type={'tel'}
						placeholder='Telefon raqamingiz'
						{...register('phoneNumber', {
							required: "Bu joyni to'ldiring"
						})}
						error={errors.phoneNumber}
					/>
				</label>
				<label className={styles.label}>
					<span>Elektron pochta</span>
					<Field
						type={'email'}
						className={styles.field}
						placeholder='Elektron pochtangiz'
						{...register('email', {
							required: "Bu joyni to'ldiring",
							pattern: {
								message: "To'g'ri email kiritng",
								value: validEmail
							}
						})}
						error={errors.email}
					/>
				</label>
				<label className={styles.label}>
					<span>Izoh</span>
					<Controller
						name='comment'
						control={control}
						rules={{ required: "Bu joyni to'ldiring" }}
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<>
								<textarea
									className={clsx(styles.textarea, styles.field, {
										[styles.textareaErr]: !!error
									})}
									rows={1}
									ref={textAreaRef}
									value={value}
									onChange={onChange}
									placeholder='Izoh qoldiring'
								/>

								{error && (
									<div className={styles.textAreaErrMess}>{error?.message}</div>
								)}
							</>
						)}
					/>
				</label>
				<Button className={styles.btn} type={'submit'}>
					Jo'natish
				</Button>
			</form>
		</div>
	)
}

export default SendForm
