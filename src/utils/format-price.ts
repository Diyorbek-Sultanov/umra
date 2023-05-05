export const formatCurrensy = (currensy: number) => {
	const curFormat = new Intl.NumberFormat('en-US', {
		currency: 'USD',
		style: 'currency'
	})

	return curFormat.format(currensy)
}
