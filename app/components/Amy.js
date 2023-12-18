import PortfolioButton from "./PortfolioButton";
import Image from "next/image";
import AmyImage from "../../public/assets/image-amy.webp"

export default function Amy() {
    return (
        <section className="flex flex-col sm:flex-row justify-between items-center my-16">
            <div>
                <Image
                src={AmyImage}
                alt="A picture of Amy"
                className="w-80	h-70 rounded-3xl"
                />
            </div>
            <div className="mt-[40px] sm:mt-[0px] sm:w-1/2 text-center sm:text-start">
                <h2 className="text-4xl font-bold pb-6">I’m Amy, and I’d love to work on your next project</h2>
                <p className="text-zinc-600 text-lg font-medium pb-6">I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
                <PortfolioButton 
                bgColorClassName={"bg-red-400"}
                hoverBgColorClassName={"hover:bg-amber-500"}
                />
            </div>
        </section>
    );
}