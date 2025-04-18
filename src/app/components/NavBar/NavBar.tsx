import DiscountSection from './DiscountSection';
import group from "../../../assets/navbar/Grupo.png";
import Image from 'next/image';
import market from "../../../assets/navbar/market.png";
import NavigationMenu from './NavigationMenu';
import { CiMenuBurger } from 'react-icons/ci';
import SearchNavBar from './SearchNavBar';
import logo from '../../../assets/navbar/logo.png';

export default function NavBar() {

  let itemsCount = 2
  
  return (
    <header className='fixed top-0 left-0 w-screen h-[148px] flex flex-col items-center gap-2 z-20 shadow-md bg-whiteavanti'>
      <DiscountSection />

      <nav className='w-full xl:w-3/4 h-[118px]'>
        <menu className='w-full h-1/2 flex flex-col lg:flex-row items-center justify-between px-4'>

          <div className='w-full lg:flex-1 flex flex-col lg:flex-row lg:items-center lg:gap-16'>

            <div className='lg:hidden w-full flex justify-between items-center'>
              <div className='flex items-center gap-4'>
                <CiMenuBurger className='text-2xl' />
                <Image src={logo} alt='Logo' className='w-[150px] h-[27px]' />
              </div>

              <div className='flex gap-4 items-center'>
                <div className='relative'>
                  <Image src={market} alt='Carrinho' className='size-6' />
                  <span className='absolute -top-2 -right-2 bg-blueavanti text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                    {itemsCount}
                  </span>
                </div>
              </div>
            </div>

            <SearchNavBar/>

          </div>

          <div className='hidden lg:flex gap-6 items-center ml-4'>
            <div className='flex items-center gap-2'>
              <Image src={group} alt='Perfil' className='w-5 h-6' />
              <p className='text-xs font-semibold'>
                Olá,<br />Nome cliente!
              </p>
            </div>
            <div className='relative'>
              <Image src={market} alt='Carrinho' className='size-6' />
              <span className='absolute -top-2 -right-2 bg-blueavanti text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                {itemsCount}
              </span>
            </div>
          </div>
        </menu>

        <NavigationMenu />
      </nav>
    </header>
  )
}