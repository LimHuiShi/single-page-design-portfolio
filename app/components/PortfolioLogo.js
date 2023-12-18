import Image from "next/image";
import LogoSVG from "../../public/assets/logo.svg"

export default function PortfolioLogo() {
    return (
        <Image
        src={LogoSVG}
        alt="Logo"
        className="w-16 h-16"
        />
    );
}