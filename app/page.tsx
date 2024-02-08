import Image from "next/image";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Widget from "./component/main/trading-widget/widget";
import SectionA from "./component/main/section/SectionA";
import SectionB from "./component/main/section/SectionB";
import SectionC from "./component/main/section/SectionC";
import SectionD from "./component/main/section/SectionD";
import SectionE from "./component/main/section/SectionE";
import SectionF from "./component/main/section/SectionF";
import SectionG from "./component/main/section/SectionG";
import SectionH from "./component/main/section/SectionH";
export default function Home() {
  return (
    <>
      <Header />
      <Widget />
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
      <SectionF />
      <SectionG />
      <SectionH />
      <Footer />
    </>
  );
}
