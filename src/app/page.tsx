import { carouselItems, productMock } from "@/constants";
import NavBar from "./components/NavBar/NavBar";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import SaleSection from "./components/SaleSection/SaleSection";
import ProductDescriptionSection from "./components/ProductDescriptionSection/ProductDescriptionSection";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Carousel from "./components/Carousel/Carousel";
import AvantiContactSection from "./components/AvantiContact/AvantiContact";
import Footer from "./components/Footer/Footer";
import avantiBanner from "../assets/avantiBanner.png"

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <NavBar />

      <SaleSection />


        <ProductsSection>

          <Carousel CarouselItems={carouselItems} />
          <SingleProduct SingleProductMock={productMock} />

        </ProductsSection> 

      <ProductDescriptionSection />

        <ProductsSection reverse>

          <Carousel CarouselItems={carouselItems} />
          <SingleProduct SingleProductMock={productMock} />

        </ProductsSection> 

         <AvantiContactSection title="Entre em contato conosco e verifique a disponibilidade para sua região!" imgSrc={avantiBanner}/> 

         <Footer/> 
    </main>
  );
}