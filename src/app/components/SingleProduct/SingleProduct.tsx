import SingleProductInfo from "./SingleProductInfo";
import type { SingleProductInfoType } from "@/model/types";

export default function SingleProduct({SingleProductMock}:{SingleProductMock:SingleProductInfoType}) {
    return (

        <div className='flex gap-4 flex-col lg:flex-row w-full max-w-[1177px] h-auto lg:h-[747px] mx-4 md:mx-8 lg:mx-auto'>
            <SingleProductInfo ProductInfo={SingleProductMock} />
        </div>
    )
}
