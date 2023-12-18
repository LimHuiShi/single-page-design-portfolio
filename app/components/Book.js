import PortfolioButton from "./PortfolioButton";

export default function Book() {
    return (
        <section className="flex flex-col lg:flex-row justify-around bg-black items-center mt-12 mx-auto rounded-lg py-[48px] px-[24px]" >
            <div className="text-white text-center lg:text-start">
                <h2 className="text-4xl	font-bold">Book a call with me</h2>
                <p className="text-lg font-medium mt-[25px] lg:max-w-[540px]">I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
            </div>
            <div className="mt-[25px] lg:mt-[0px]">
                <PortfolioButton 
                bgColorClassName={"bg-red-400"}
                hoverBgColorClassName={"hover:bg-amber-500"}
                />
            </div>
        </section>
    );
}