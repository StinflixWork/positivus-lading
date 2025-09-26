import { clsx } from 'clsx'

interface BurgerIconProps {
	isOpen: boolean
	setIsOpen: () => void
}

export const BurgerIcon = ({ isOpen, setIsOpen }: BurgerIconProps) => {
	return (
		<button
			onClick={setIsOpen}
			className='relative z-50 flex h-6 w-6 cursor-pointer flex-col items-center justify-center lg:hidden'
		>
			<span
				className={clsx(
					'bg-dark absolute block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out',
					isOpen ? 'rotate-45' : '-translate-y-2'
				)}
			/>
			<span
				className={clsx(
					'bg-dark absolute block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out',
					isOpen ? 'opacity-0' : 'opacity-100'
				)}
			/>
			<span
				className={clsx(
					'bg-dark absolute block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out',
					isOpen ? '-rotate-45' : 'translate-y-2'
				)}
			/>
		</button>
	)
}
