import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
	return (
		<Link href='/'>
			<Image src='/Logo.svg' alt='Logo' width={220} height={36} priority />
		</Link>
	)
}
