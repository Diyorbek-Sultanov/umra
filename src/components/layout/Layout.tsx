import clsx from 'clsx'
import { Poppins } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'

import { IMeta } from '@/types/meta.types'

import Meta from '../meta/Meta'

import Footer from './footer/Footer'
import Header from './header/Header'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	display: 'swap',
	style: 'normal'
})

const Layout: FC<PropsWithChildren<IMeta>> = ({
	title,
	description,
	children
}) => {
	return (
		<Meta title={title} description={description}>
			<div
				className={clsx(
					'flex flex-col min-h-screen overflow-hidden',
					poppins.className
				)}
			>
				<Header />
				<main className='flex-grow'>{children}</main>
				<Footer />
			</div>
		</Meta>
	)
}

export default Layout
