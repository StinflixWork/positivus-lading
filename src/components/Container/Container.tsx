import { PropsWithChildren } from 'react'
import { clsx } from 'clsx'

interface ContainerProps extends PropsWithChildren {
	className?: string
}

export const Container = ({ className, children }: ContainerProps) => {
	return (
		<div className={clsx('max-w-container mx-auto overflow-clip px-4', className)}>{children}</div>
	)
}
