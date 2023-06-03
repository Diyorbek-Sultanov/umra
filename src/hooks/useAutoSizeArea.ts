import { useEffect } from 'react'

export const useAutoSizeArea = (
	textAreaRef: HTMLTextAreaElement | null,
	value: string
) => {
	useEffect(() => {
		if (textAreaRef) {
			textAreaRef.style.height = '0px'

			const textAreaScrollHeight = textAreaRef.scrollHeight

			textAreaRef.style.height = textAreaScrollHeight + 'px'
		}
	}, [value, textAreaRef])
}
