import ProductAgriculture from "./components/(website)/agriculture-product/page";
import AllProduct from "./components/(website)/all-product/page";
import Banner from "./components/(website)/banner/page";
import LandscapeProducts from "./components/(website)/Landscape-products/page";
import OurBranch from "./components/(website)/our-branch/page";
import Trusted from "./components/(website)/trusted/page";
import WhyCustomer from "./components/(website)/why-customer/page";
import WhyUsSection from "./components/(website)/why-us/page";


export default function Home() {
  return (
    <div className="">
     <Banner/>
     <ProductAgriculture/>
     <LandscapeProducts/>
     <Trusted/>
     <WhyUsSection/>
      <AllProduct/>
     <WhyCustomer/>
     <OurBranch/>
 
    </div>
  );
}
