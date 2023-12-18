import PortfolioLogo from "./PortfolioLogo";
import PortfolioButton from "./PortfolioButton";

export default function Header() {
    return (
        <nav className="flex justify-between">
            <PortfolioLogo />
            <PortfolioButton
                bgColorClassName={"bg-black"}
                hoverBgColorClassName={"hover:bg-violet-500"}
            />
        </nav>
    );
}