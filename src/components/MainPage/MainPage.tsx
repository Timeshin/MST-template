'use client'
import { useState } from 'react'

import Sidebar from './Sidebar/Sidebar'
import Slider from './Slider/Slider'

import classes from './MainPage.module.scss'

const MainPage = () => {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0)

	return (
		<main className={classes.mainBlock}>
			<Sidebar
				activeSlideIndex={activeSlideIndex}
				setActiveSlideIndex={setActiveSlideIndex}
			/>
			<Slider activeSlideIndex={activeSlideIndex} />
		</main>
	)
}

export default MainPage
