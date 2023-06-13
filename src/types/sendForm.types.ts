export interface ISendForm {
	name: string
	phone_number: string | number
	email: string
	message: string
}

export interface IResponseData extends ISendForm {}
