import { FC } from 'react'
import sliderConstsData from '@/consts/slider.consts'

import classes from './Sidebar.module.scss'

interface ISidebar {
	activeSlideIndex: number
	setActiveSlideIndex: (index: number) => void
}

const Sidebar: FC<ISidebar> = ({ activeSlideIndex, setActiveSlideIndex }) => {
	const onChangeSlideHandler = (index: number) => {
		setActiveSlideIndex(index)
	}

	return (
		<aside className={classes.Sidebar}>
			<ul>
				{sliderConstsData.map(({ value }, index) => (
					<li
						key={value}
						onClick={() => onChangeSlideHandler(index)}
						className={activeSlideIndex === index ? classes.active : ''}
					>
						{value}
					</li>
				))}
			</ul>
		</aside>
	)
}

export default Sidebar
