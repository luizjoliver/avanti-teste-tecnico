import Image from 'next/image'
import logo from "../../../assets/navbar/logo.png"
import { companiesItems, footerItems, paymentImages, socialMediaImages } from '@/constants'

export default function Footer() {
  return (
    <footer className='w-full flex flex-col items-center gap-3 '>

      <div className='w-full bg-lightgray flex flex-col items-center py-8 space-y-20'>
        <div className='w-full max-w-[1163px] flex flex-col md:flex-row gap-8 px-4'>


          <div className='flex flex-col items-center sm:items-start gap-6 md:w-[194px]'>
            <Image
              src={logo}
              alt='Logo'
              className='w-[150px] h-auto object-contain'
            />
            <div className='flex gap-4'>
              {socialMediaImages.map((socialMediaItem) => (
                <Image
                  key={socialMediaItem.id}
                  src={socialMediaItem.imgSrc}
                  alt='Social media logo'
                  className='w-6 h-6 object-contain hover:opacity-75 transition-opacity'
                />
              ))}
            </div>
          </div>


          <div className='flex-1 grid grid-cols-1 md:flex md:justify-between gap-4'>
            {footerItems.map((footerItem, index) => (
              <div
                key={footerItem.id}
                className={`pb-6 ${index === 0 ? 'pt-6' : 'pt-0'} md:py-0 border-b md:border-0 border-grayavanti-100`}
              >
                <div className='flex flex-col gap-2 pl-2'>
                  <h5 className='font-bold capitalize text-lg'>{footerItem.category}</h5>
                  <div className='hidden md:flex flex-col gap-1'>
                    {footerItem.subCategory.map((subCategory, idx) => (
                      <span key={idx} className='text-sm hover:underline cursor-pointer'>
                        {subCategory}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}


            <div className='pt-6 pb-6 md:py-0 border-b md:border-0 border-grayavanti-100'>
              <div className='flex flex-col gap-2 pl-2'>
                <h5 className='font-bold text-lg'>Atendimento</h5>
                <div className='hidden md:flex flex-col gap-1 text-sm'>
                  <p><span className='font-bold'>Telefone:</span> (00) 1234-5678</p>
                  <p className='text-xs'><span className='font-bold'>E-mail:</span> exemplo@exemplo.com.br</p>
                  <p className='text-xs'>
                    <span className='font-bold '>Horários de atendimento:</span><br />
                    Seg-Sáb: 07h às 23h<br />
                    Dom/Fer: 07h às 21h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='w-full max-w-[800px] px-4'>
          <div className='flex flex-wrap lg:flex-nowrap justify-center gap-2 lg:gap-4'>
            {paymentImages.map((paymentItem) => (
              <Image
                key={paymentItem.id}
                src={paymentItem.imgSrc}
                alt='Payment logo'
                className='w-14 h-9 md:w-16 md:h-11 object-contain min-w-[56px]'
                width={23}
                height={10}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='w-full max-w-[1000px] h-[211px] flex flex-col gap-4 py-12 px-4 lg:px-0'>
        <p className="text-sm md:text-sm font-light px-4 md:px-0 line-clamp-3 md:line-clamp-none">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
        <div className='flex gap-4 items-center justify-center'>
          {companiesItems.map((company) => (
            <Image src={company.imgSrc} alt='company img' key={company.id} />
          ))}
        </div>
      </div>

    </footer>
  )
}
