import ImageSlider from "../components/ImageSlider";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";

export default function Home() {
  return (
    <div className="Body bg-black w-full min-h-screen flex flex-wrap">
      <div>
        <ImageSlider/>
      </div>

      <div className="Sectionone">
        <SectionOne />
      </div>
      <div className="Sectiontwo">
        <SectionTwo />
      </div>
    </div>
  );
}
