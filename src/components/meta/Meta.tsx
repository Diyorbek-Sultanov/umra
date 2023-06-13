import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import { IMeta } from '@/types/meta.types'

import { getTitle } from './meta.helper'

const Meta: FC<PropsWithChildren<IMeta>> = ({
	title,
	description,
	children
}) => {
	return (
		<>
			<Head>
				<title>{getTitle(title)}</title>
				<meta name='description' content={description} />
				<meta name='og:title' content={getTitle(title)} />
				<meta name='og:description' content={description} />
				<link rel='canonical' href={process.env.NEXT_SITE_URL} />
			</Head>
			{children}
		</>
	)
}

export default Meta
