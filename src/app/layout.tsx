import { ReactNode } from 'react'
import { Container } from '@/components/Container/Container'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'Positivus',
	description:
		'This project is the layout of an educational/portfolio website based on a ready-made template from Figma Community.',
	authors: { name: 'Vlad Podparinov', url: 'https://github.com/StinflixWork' },
	publisher: 'Vercel'
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang='en'>
			<body className={spaceGrotesk.className}>
				<Container className='flex min-h-dvh flex-col'>
					<Header />
					<main className='flex-auto'>{children}</main>
					<Footer />
				</Container>
			</body>
		</html>
	)
}
