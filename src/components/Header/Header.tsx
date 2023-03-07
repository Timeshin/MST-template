'use client'
import { useState } from 'react'
import Logo from './Logo/Logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import headerNavData from './Header.meta'

import classes from './Header.module.scss'

const Header = () => {
	const pathName = usePathname()
	const [activeLink, setActiveLink] = useState(pathName)

	const onChangeActiveLinkHandler = (href: string) => {
		setActiveLink(href)
	}

	return (
		<header className={classes.header}>
			<div className={classes.side}>
				<span>
					<Logo />
				</span>
				<p>Первомайская</p>
			</div>
			<nav className={classes.nav}>
				{headerNavData.map(({ href, value }) => (
					<Link
						className={activeLink === href ? classes.active : ''}
						key={value}
						href={href}
						onClick={() => onChangeActiveLinkHandler(href)}
					>
						{value}
					</Link>
				))}
				<div className={classes.bottomLine} />
			</nav>
			<div className={classes.side}>
				<p>8 888 888 88 88</p>
				<span>
					<Logo hasBurger />
				</span>
			</div>
		</header>
	)
}

export default Header
