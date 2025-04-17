import { carouselItems, productMock } from "@/constants";
import NavBar from "./components/NavBar/NavBar";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import SaleSection from "./components/SaleSection/SaleSection";
import AvantiContact from "./components/AvantiContact/AvantiContact";
import ProductDescriptionSection from "./components/ProductDescriptionSection/ProductDescriptionSection";


export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <NavBar />

      <SaleSection />

      <ProductsSection CarouselItems={carouselItems} SingleProductMock={productMock}/>

      <ProductDescriptionSection/>

      <ProductsSection CarouselItems={carouselItems} reverse SingleProductMock={productMock}/>

      <AvantiContact/>

    </main>
  );
}