import PortfolioButton from "./PortfolioButton";
import PortfolioLogo from "./PortfolioLogo";

export default function Footer() {
    return (
        <section>
            <nav className="flex justify-between">
                <PortfolioLogo />
                <PortfolioButton
                bgColorClassName={"bg-black"}
                hoverBgColorClassName={"hover:bg-violet-500"}
                />
            </nav>
        </section>
    );
}