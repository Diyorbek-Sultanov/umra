import { useForm } from 'react-hook-form'

import { ISendForm } from '@/types/sendForm.types'

export const useCustomForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		control,
		watch,
		formState: { errors }
	} = useForm<ISendForm>({
		defaultValues: {
			name: '',
			message: '',
			email: '',
			phone_number: ''
		},
		mode: 'onChange'
	})

	return { register, reset, handleSubmit, errors, control, watch }
}
