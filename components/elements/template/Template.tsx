import Image from "next/image";
import React from "react";
import imgLeaves from "@/assets/images/simple-leaves.png";
import imgKiwi from "@/assets/images/simple-kiwi.png";
import InputContainer from "../input/InputContainer";

const Template = () => {
    const inputRef = React.useRef(null);


    return (
        <div className="template">
            <section className="template__section template__section_first">
                <Image
                    src={imgLeaves}
                    alt="Picture"
                    className="template__image template__image_first"
                />
                <div className="template__content">
                    <h4 className="template__subtitle">ПЛАН ХАРЧУВАННЯ</h4>
                    <InputContainer>
                        <input
                            ref={inputRef}
                            className="template__input template__input_title"
                            type="text"
                            maxLength={14}
                            placeholder="Назва меню"
                        />
                    </InputContainer>
                </div>
                <Image
                    src={imgKiwi}
                    alt="Picture"
                    className="template__image template__image_second"
                />
            </section>
            <section className="template__section section section_first">
                <div className="section__header">
                    <h3 className="section__title">
                        <InputContainer>
                            <input
                                type="text"
                                maxLength={14}
                                placeholder="Період дня"
                            />
                        </InputContainer>
                    </h3>
                    <h4 className="section__subtitle">
                        <InputContainer>
                            <input
                                type="text"
                                maxLength={14}
                                placeholder="Назва страви"
                            />
                        </InputContainer>
                    </h4>
                </div>
                <div className="section__body">
                    <div className="section__ingredients"></div>
                    <div className="section__recipe"></div>
                </div>
            </section>
        </div>
    );
};

export default Template;
