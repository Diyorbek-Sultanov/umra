import { InputHTMLAttributes, RefObject } from 'react'
import { FieldError } from 'react-hook-form'

export interface IFieldProps {
	error?: FieldError | undefined
	customRef?: RefObject<HTMLTextAreaElement> | null
}

type TypeFieldProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeFieldProps {}
