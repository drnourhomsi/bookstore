"use client"

import Image from "next/image"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

const MobileImages = [
    {src: '/assets/images/iphone_01.png', title: 'Audio Book 01', speed: 10},
    {src: '/assets/images/iphone_02.png', title: 'Audio Book 02', speed: 20},
    {src: '/assets/images/iphone_03.png', title: 'Audio Book 03', speed: 10},
    {src: '/assets/images/iphone_04.png', title: 'Audio Book 04', speed: 20},
    {src: '/assets/images/iphone_05.png', title: 'Audio Book 05', speed: 10},
]

export const MobileGallery = () => {
    return (
        <ParallaxProvider>
            <div className='flex gap-10 h-48 md:h-[38rem] max-w-[1600px] mx-auto mt-16 justify-center align-middle overflow-hidden dark:bg-gray-900'>
                {MobileImages.map(({ src, title, speed }, index) => (
                    <Parallax key={ index } speed={speed}><Image src={src} alt={title} width={279} height={576}/></Parallax>
                ))}
            </div>
        </ParallaxProvider>
    )
}
