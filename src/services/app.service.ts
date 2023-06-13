import { IResponseData, ISendForm } from '@/types/sendForm.types'

import { axiosClassic } from '@/config/api.config'

export const AppService = {
	async application(body: ISendForm) {
		const { data } = await axiosClassic<IResponseData>({
			url: '/application/',
			method: 'POST',
			data: body,
			headers: {
				'Content-Type': 'application/json'
			}
		})

		return data
	}
}
