import Image from "next/image"
import React from "react"
import imgLeaves from "@/assets/images/simple-leaves.png"
import imgKiwi from "@/assets/images/simple-kiwi.png"
import InputContainer from "../input/InputContainer"

const Template = () => {
    const inputRef = React.useRef(null)

    const handleInputChange = () => {
        const inputElement: any = inputRef.current
        if (inputElement) {
            const textWidth = inputElement
            console.log("Text width:", textWidth, "pixels")
        }
    }

    return (
        <div className='template'>
            <section className='template__section template__section_first'>
                <Image
                    src={imgLeaves}
                    alt='Picture'
                    className='template__image template__image_first'
                />
                <div className='template__content'>
                    <h4 className='template__subtitle'>ПЛАН ХАРЧУВАННЯ</h4>
                    <InputContainer>
                        <input
                            ref={inputRef}
                            onChange={handleInputChange}
                            className='template__input template__input_title'
                            type='text'
                            maxLength={14}
                            placeholder='Назва меню'
                        />
                    </InputContainer>
                </div>
                <Image
                    src={imgKiwi}
                    alt='Picture'
                    className='template__image template__image_second'
                />
            </section>
            <section className='relative bg-[var(--light-green)] h-[390px] flex items-center justify-center'>
                {/* <Image src={imgFirst} alt='Picture' className="absolute top-0 left-0 w-[800px]" /> */}

                <h3></h3>
            </section>
        </div>
    )
}

export default Template
