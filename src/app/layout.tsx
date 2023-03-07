import { ReactNode } from 'react'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'

import { Header, Footer } from '@/components'

import '@/styles/globals.scss'

const roboto = Roboto({
	weight: ['400'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--roboto-font'
})

const gilroy = localFont({
	src: [
		{
			path: '../../public/fonts/Gilroy-Light.otf',
			weight: '300',
			style: 'normal'
		},
		{
			path: '../../public/fonts/Gilroy-ExtraBold.otf',
			weight: '700',
			style: 'normal'
		}
	],
	variable: '--gilroy-font'
})

export const metadata = {
	title: 'MST',
	description: 'MST Template'
}

const RootLayout = ({ children }: { children: ReactNode }) => (
	<html lang='en'>
		<body className={`${roboto.variable} ${gilroy.variable}`}>
			<div className='wrapper'>
				<Header />
				{children}
				<Footer />
			</div>
		</body>
	</html>
)

export default RootLayout
