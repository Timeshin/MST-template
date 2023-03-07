import { FC } from 'react'

import SliderInfo from './SliderInfo/SliderInfo'
import SliderImage from './SliderImage/SliderImage'

import classes from './Slider.module.scss'

interface ISlider {
	activeSlideIndex: number
}

const Slider: FC<ISlider> = ({ activeSlideIndex }) => (
	<div className={classes.slider}>
		<SliderInfo activeSlideIndex={activeSlideIndex} />
		<SliderImage activeSlideIndex={activeSlideIndex} />
	</div>
)

export default Slider
