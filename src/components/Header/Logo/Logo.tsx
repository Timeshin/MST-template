import React, { FC } from 'react'

import classes from './Logo.module.scss'

interface ILogo {
	hasBurger?: boolean
}

const Logo: FC<ILogo> = ({ hasBurger }) => (
	<div className={classes.logo}>
		{hasBurger && <span className={classes.burgerMenu} />}
	</div>
)

export default Logo
