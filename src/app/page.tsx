import ProductAgriculture from "./components/(website)/agriculture-product/page";
import Banner from "./components/(website)/banner/page";
import LandscapeProducts from "./components/(website)/Landscape-products/page";
import Trusted from "./components/(website)/trusted/page";

export default function Home() {
  return (
    <div>
     <Banner/>
     <ProductAgriculture/>
     <LandscapeProducts/>
     <Trusted/>
    </div>
  );
}
