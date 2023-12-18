export default function ImageSlide({GraphicDesignImage}) {
    return (
        <img 
        src={GraphicDesignImage}
        alt="Image of Graphic Design"
        className="w-6/10 lg:w-1/3 inline object-cover m-4 rounded-3xl"
        />
    );
}