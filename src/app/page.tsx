import { carouselItems, productMock } from "@/constants";
import NavBar from "./components/NavBar/NavBar";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import SaleSection from "./components/SaleSection/SaleSection";
import AvantiContact from "./components/AvantiContact/AvantiContact";
import ProductDescriptionSection from "./components/ProductDescriptionSection/ProductDescriptionSection";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Carousel from "./components/Carousel/Carousel";


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

      <AvantiContact />

    </main>
  );
}