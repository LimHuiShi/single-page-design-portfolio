export default function PortfolioButton({bgColorClassName, hoverBgColorClassName}) {
    return (
      <button
      className={`text-base text-white font-bold rounded-full py-3.5 px-10 ${bgColorClassName} ${hoverBgColorClassName}`}
      >
      Free Consultation
      </button>
    );
}