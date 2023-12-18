import ServicesHeadline from "./ServicesHeadline";
import Image from "next/image";
import GraphicImage from "../../public/assets/pattern-graphic-design.svg";
import UiUxImage from "../../public/assets/pattern-ui-ux.svg";
import AppsImage from "../../public/assets/pattern-apps.svg";
import PhotographyImage from "../../public/assets/pattern-photography.svg";
import IllustrationsImage from "../../public/assets/pattern-illustrations.svg";
import MotionGraphicsImage from "../../public/assets/pattern-motion-graphics.svg";


export default function Services() {
    return (
        <section className="grid gap-2 grid-cols-2 grid-rows-[repeat(6,182px)] sm:grid-cols-4 sm:grid-rows-[repeat(3,182px)] lg:grid-cols-6 lg:grid-rows-[repeat(2,182px)]">
            <div className="relative row-span-2 col-span-2 p-4 rounded-lg bg-indigo-500">
                <Image 
                src={GraphicImage}
                className="block ml-auto w-32 h-48"
                />
                <ServicesHeadline 
                name={"Graphic Design"}
                />
            </div>
            <div className="relative p-4 rounded-lg bg-orange-400">
                <Image
                    src={UiUxImage}
                    className="block ml-auto w-16 h-16"
                />
                <ServicesHeadline
                    name={"UI/UX"}
                />
            </div>
            <div className="relative p-4 rounded-lg bg-red-300">
                    <Image
                    src={AppsImage}
                    className="block ml-auto w-16 h-16"
                    />
                    <ServicesHeadline 
                    name={"Apps"}
                    />
            </div>
            <div className="relative col-span-2 p-4 rounded-lg bg-teal-400">
                <Image
                src={PhotographyImage}
                className="block ml-auto w-40 h-16"
                />
                <ServicesHeadline 
                name={"Photography"}
                />
            </div>
            <div className="relative col-span-2 p-4 rounded-lg bg-red-400">
                <Image
                src={IllustrationsImage}
                className="block ml-auto w-40 h-16"
                />
                <ServicesHeadline
                name={"Illustrations"}
                />
            </div>
            <div className="relative col-span-2 p-4 rounded-lg bg-fuchsia-950">
                <Image
                src={MotionGraphicsImage}
                className="block ml-auto w-40 h-16"
                />
                <ServicesHeadline
                name={"Motion Graphics"}
                />
            </div>
        </section>
    );
}