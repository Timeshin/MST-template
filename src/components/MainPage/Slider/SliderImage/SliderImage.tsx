'use client'
import { FC, useMemo } from 'react'
import sliderConstsData, { ISliderConstsData } from '@/consts/slider.consts'
import Image from 'next/image'

import classes from './SliderImage.module.scss'

interface ISliderImage {
	activeSlideIndex: number
}

const SliderImage: FC<ISliderImage> = ({ activeSlideIndex }) => {
	const { img } = useMemo(
		() =>
			sliderConstsData.find(
				(_, index) => index === activeSlideIndex
			) as ISliderConstsData,
		[activeSlideIndex]
	)

	return (
		<div className={classes.image}>
			<Image
				src={`/images/${img}.png`}
				placeholder='blur'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNU+M9QDwAEBgGgdUv8ogAAAABJRU5ErkJggg=='
				sizes='50%'
				priority
				fill
				alt='sliderImage'
			/>
		</div>
	)
}

export default SliderImage
