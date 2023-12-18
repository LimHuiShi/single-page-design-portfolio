'use client';

import ArrowButton from "./ArrowButton";
import ImageSlide from "./ImageSlide";
import ArrowIconLeft from "../../public/assets/icon-arrow-left.svg"
import ArrowIconRight from "../../public/assets/icon-arrow-right.svg"
import { useRef } from "react";

export default function MyWork() {
    const carouselRef = useRef(null)
    
    function scroll(scrollOffset) {
        carouselRef.current.scrollLeft += scrollOffset;
    }

    return (
        <section className="text-center">
            <h2 className="text-4xl	font-bold">My Work</h2>
            <div ref={carouselRef} className="cursor-pointer overflow-hidden whitespace-nowrap scroll-smooth mt-12 mr-0 mb-5 object-cover">
                <ImageSlide GraphicDesignImage="/assets/image-slide-1.jpg" />
                <ImageSlide GraphicDesignImage="/assets/image-slide-2.jpg" />
                <ImageSlide GraphicDesignImage="/assets/image-slide-3.jpg" />
                <ImageSlide GraphicDesignImage="/assets/image-slide-4.jpg" />
                <ImageSlide GraphicDesignImage="/assets/image-slide-5.jpg" />
            </div>
            <ArrowButton
                ArrowIcon={ArrowIconLeft}
                ArrowIconAlt={"Icon of Arrow Left"}
                arrowBgColorClassName={"bg-black"}
                arrowHoverBgColorClassName={"hover:bg-violet-500"}
                onClick={() => scroll(-300)}
            />
            <span className="w-3 inline-block"></span>
            <ArrowButton
                ArrowIcon={ArrowIconRight}
                ArrowIconAlt={"Icon of Arrow Right"}
                arrowBgColorClassName={"bg-black"}
                arrowHoverBgColorClassName={"hover:bg-violet-500"}
                onClick={() => scroll(300)}
            />
        </section>
    );
}