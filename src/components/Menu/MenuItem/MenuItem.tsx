import { MenuType } from '@/config/menu.data'
import { clsx } from 'clsx'
import Link from 'next/link'

interface MenuItemProps {
	menu: MenuType
	isActive: boolean
}

export const MenuItem = ({ menu, isActive }: MenuItemProps) => {
	return (
		<li className={clsx(isActive ? 'underline underline-offset-4' : '')}>
			<Link href={menu.href}>{menu.name}</Link>
		</li>
	)
}
