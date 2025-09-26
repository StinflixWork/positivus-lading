'use client'

import { MENU } from '@/config/menu.data'
import { usePathname } from 'next/navigation'
import { MenuItem } from './MenuItem/MenuItem'

export const Menu = () => {
	const pathname = usePathname()

	return (
		<nav className='hidden h-full flex-auto items-center justify-end gap-x-10 lg:flex'>
			<ul className='w-header flex items-center gap-x-10 gap-y-3'>
				{MENU.map(menuItem => (
					<MenuItem key={menuItem.id} menu={menuItem} isActive={pathname === menuItem.href} />
				))}
			</ul>
			<button className='border-dark h-full rounded-xl border border-solid px-[35px] text-xl'>
				Request a quote
			</button>
		</nav>
	)
}
