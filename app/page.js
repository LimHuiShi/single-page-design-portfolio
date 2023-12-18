import Header from "./components/Header";
import Services from "./components/Services";
import Amy from "./components/Amy";
import MyWork from "./components/MyWork";
import Book from "./components/Book";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#FFF7F0]">
      <div className="max-w-screen-xl mx-auto p-6 lg:p-10">
        <Header />
      </div>
      <h1 className="text-center text-5xl font-bold my-10">Design solutions made easy</h1>
      <p className="text-center text-zinc-600 text-lg	font-medium">With over five years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
      <div className="max-w-screen-xl mx-auto p-6 lg:p-10">
        <Services />
      </div>
      <div className="max-w-screen-xl mx-auto p-6 lg:p-10">
        <Amy />
      </div>
      <MyWork />
      <div className="max-w-screen-xl mx-auto p-6 lg:p-10">
        <Book />
      </div>
      <div className="max-w-screen-xl mx-auto p-6 lg:p-10">
        <Footer />
      </div>
    </div>
  );
}