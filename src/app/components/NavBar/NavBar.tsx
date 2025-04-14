import DiscountSection from './DiscountSection';
import logo from '../../../assets/navbar/logo.png';
import search from "../../../assets/navbar/Caminho.png";
import group from "../../../assets/navbar/Grupo.png";
import Image from 'next/image';
import market from "../../../assets/navbar/market.png";
import NavigationMenu from './NavigationMenu';

export default function NavBar() {

 

  return (
    <header className='fixed top-0 left-0 w-screen h-[148px] flex flex-col items-center gap-2 z-20 shadow-md bg-whiteavanti'>
        <DiscountSection/>

        <nav className=' w-3/4 h-[118px]'>
            <menu className=' w-full h-1/2 flex items-center justify-between'>
                <div className='flex w-auto h-full  items-center gap-16'>
                    <Image src={logo} alt='teste' className='w-[150px] h-[27px]'/>
                     <div className=' h-[40px] w-[594px] bg-whiteavanti border border-grayavanti-600 rounded-md flex items-center justify-between px-3'>
                        <input type="text" className='outline-none placeholder:text-sm placeholder:text-blackavanti placeholder:font-semibold size-full ' placeholder='Digite aqui o que você procura' />
                        <Image src={search} alt='search logo'/>
                     </div>
                </div>

                <div className='flex gap-4 items-center'>
                    <div className='flex items-center gap-2'>
                        <Image src={group} alt='group' className='w-[20px] h-[24px]'/>
                        <p className='text-xs font-semibold'>Olá,<br/>Nome cliente!</p>
                    </div>
                    <Image src={market} alt='market' className='size-[24px]'/>
                </div>

            </menu>
            <NavigationMenu/>
        </nav>
    </header>
  )
}
