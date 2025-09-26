import { pageConfig } from '@/config/pagesConfig'

export type MenuType = {
	id: number
	name: string
	href: string
}

export const MENU: MenuType[] = [
	{ id: 1, name: 'About us', href: pageConfig.ABOUT },
	{ id: 2, name: 'Services', href: pageConfig.SERVICES },
	{ id: 3, name: 'Use Cases', href: pageConfig.CASES },
	{ id: 4, name: 'Pricing', href: pageConfig.PRICING },
	{ id: 5, name: 'Blog', href: pageConfig.BLOG }
]
