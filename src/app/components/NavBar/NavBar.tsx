import DiscountSection from './DiscountSection';
import logo from '../../../assets/navbar/logo.png';
import search from "../../../assets/navbar/Caminho.png";
import group from "../../../assets/navbar/Grupo.png";
import Image from 'next/image';
import market from "../../../assets/navbar/market.png";
import NavigationMenu from './NavigationMenu';
import { CiMenuBurger } from 'react-icons/ci';

export default function NavBar() {
  return (
    <header className='fixed top-0 left-0 w-screen h-[148px] flex flex-col items-center gap-2 z-20 shadow-md bg-whiteavanti'>
      <DiscountSection/>
      
      <nav className='w-full xl:w-3/4 h-[118px]'>
        <menu className='w-full h-1/2 flex flex-col lg:flex-row items-center justify-between px-4'>

          <div className='w-full lg:flex-1 flex flex-col lg:flex-row lg:items-center lg:gap-16'>
            
          
            <div className='lg:hidden w-full flex justify-between items-center'>
              <div className='flex items-center gap-4'>
                <CiMenuBurger className='text-2xl' />
                <Image src={logo} alt='Logo' className='w-[150px] h-[27px]' />
              </div>

              <div className='flex gap-4 items-center'>
                <Image src={market} alt='Carrinho' className='size-6' />
              </div>
            </div>

         
            <div className='lg:hidden w-full h-[40px] mt-2 bg-whiteavanti border border-grayavanti-600 rounded-md flex items-center justify-between px-3'>
              <input 
                type="text" 
                className='outline-none placeholder:text-sm placeholder:text-blackavanti placeholder:font-semibold w-full' 
                placeholder='Digite aqui o que você procura' 
              />
              <Image src={search} alt='Ícone de busca' />
            </div>

            <Image 
              src={logo} 
              alt='Logo' 
              className='hidden lg:block w-[150px] h-[27px] min-w-[150px]' 
            />

            <div className='hidden lg:flex flex-1 max-w-[594px] h-[40px] bg-whiteavanti border border-grayavanti-600 rounded-md items-center justify-between px-3'>
              <input 
                type="text" 
                className='outline-none placeholder:text-sm placeholder:text-blackavanti placeholder:font-semibold w-full' 
                placeholder='Digite aqui o que você procura' 
              />
              <Image src={search} alt='Ícone de busca' />
            </div>
          </div>

          <div className='hidden lg:flex gap-6 items-center ml-4'>
            <div className='flex items-center gap-2'>
              <Image src={group} alt='Perfil' className='w-5 h-6' />
              <p className='text-xs font-semibold'>
                Olá,<br/>Nome cliente!
              </p>
            </div>
            <Image src={market} alt='Carrinho' className='size-6' />
          </div>
        </menu>

        <NavigationMenu/>
      </nav>
    </header>
  )
}