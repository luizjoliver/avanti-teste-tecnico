import { carouselItems } from "@/constants";
import NavBar from "./components/NavBar/NavBar";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import SaleSection from "./components/SaleSection/SaleSection";


export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <NavBar />

      <SaleSection />

      <ProductsSection CarouselItems={carouselItems}/>
    </main>
  );
}