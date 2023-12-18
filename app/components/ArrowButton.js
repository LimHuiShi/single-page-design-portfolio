import Image from "next/image";

export default function ArrowButton({ arrowBgColorClassName, arrowHoverBgColorClassName, ArrowIcon, ArrowIconAlt, onClick }) {
    return (
        <>
            <button onClick={onClick} className={`rounded-full w-14 h-14 inline-flex items-center justify-center ${arrowBgColorClassName} ${arrowHoverBgColorClassName}`}>
                <Image src={ArrowIcon} alt={ArrowIconAlt} />
            </button>
        </>
    );
}