import { InputHTMLAttributes } from 'react'

export interface IFieldProps {
	error?: string | undefined
}

type TypeFieldProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeFieldProps {}
