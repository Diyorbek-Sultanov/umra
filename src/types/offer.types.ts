export interface IOfferData {
	id: number
	img: string
	type: string
	title: string
	price: string | number
	duration: string
	slug: string
	hajjType: 'ekonom' | 'standart' | 'kamfort'
}
