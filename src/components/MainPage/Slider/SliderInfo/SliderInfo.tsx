'use client'

import { FC, useEffect, useMemo, useRef, useState } from 'react'
import sliderConstsData, { ISliderConstsData } from '@/consts/slider.consts'
import Link from 'next/link'

import classes from './SliderInfo.module.scss'

interface ISliderInfo {
	activeSlideIndex: number
}

const SliderInfo: FC<ISliderInfo> = ({ activeSlideIndex }) => {
	const descriptionRef = useRef<HTMLParagraphElement>(null)
	const [cutDescription, setCutDescription] = useState(false)
	const { description, value } = useMemo(
		() =>
			sliderConstsData.find(
				(_, index) => index === activeSlideIndex
			) as ISliderConstsData,
		[activeSlideIndex]
	)

	useEffect(() => {
		if (!descriptionRef.current) return

		setCutDescription(descriptionRef.current.offsetHeight > 90)
	}, [activeSlideIndex])

	return (
		<div className={classes.infoBlock}>
			<div className={classes.content}>
				<h2 className={classes.title}>{value}</h2>
				<p
					ref={descriptionRef}
					style={cutDescription ? { maxHeight: '90px' } : { maxHeight: '100%' }}
					className={classes.description}
				>
					{description}{' '}
					{cutDescription && (
						<Link href={'/'} className={classes.showTextButton}>
							•••
						</Link>
					)}
				</p>
				<p className={classes.slideCounter}>
					{activeSlideIndex + 1}/{sliderConstsData.length}
				</p>
			</div>
		</div>
	)
}

export default SliderInfo
