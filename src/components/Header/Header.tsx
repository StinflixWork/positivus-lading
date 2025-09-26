'use client'

import { useState } from 'react'
import { BurgerIcon } from '@/components/BurgerIcon/BurgerIcon'
import { Logo } from '@/components/Logo/Logo'
import { Menu } from '@/components/Menu/Menu'

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOpenBurger = () => {
		setIsOpen(wasOpen => !wasOpen)
	}

	return (
		<header className='h-header mt-4 flex items-center justify-between gap-x-10 md:mt-[60px]'>
			<Logo />
			<Menu />
			<BurgerIcon isOpen={isOpen} setIsOpen={handleOpenBurger} />
		</header>
	)
}
