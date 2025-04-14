"use client"

import { NavigationItens } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export default function NavigationMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [currentTitle, setCurrentTitle] = useState<number>(0)

    function handleMouseEnter(titleId: number) {
        setIsMenuOpen(true) // Alterado para definir sempre true
        setCurrentTitle(titleId)
    }

    function handleMouseLeave() {
        setIsMenuOpen(false)
        setCurrentTitle(0)
    }

    return (
        <ul
            className='w-full h-1/2 flex items-center justify-between relative'
            onMouseLeave={handleMouseLeave}
        >
            {NavigationItens.map((item, index) => (
                <li
                    key={item.id}
                    className='first:font-bold first:flex first:flex-row-reverse first:gap-2 first:items-center text-sm'
                    onMouseEnter={() => handleMouseEnter(item.id)}
                >
                    <p className={`${item.id === currentTitle ? 'text-blueavanti' : ''}`}>{item.title}</p>
                    {index === 0 && item.iconImg && (
                        <Image
                            src={item.iconImg}
                            alt="menu"
                            className="w-[14px] h-[10px]"
                        />
                    )}
                </li>
            ))}

            {isMenuOpen && (
                <div
                    className='w-full bg-whiteavanti h-[329px] absolute top-full shadow-lg'
                    onMouseLeave={handleMouseLeave}
                >
                    <div className='h-full w-[234px] bg-lightgray'>
                        {
                            NavigationItens.map((item,index) =>{

                                if (item.id === currentTitle) {

                                    return(
                                        
                                        <ul className='flex flex-col items-start justify-between text-sm  font-normal size-full px-2 py-4' key={item.id}>
                                        {item.subTitle!.map((subTitle) =>(
                                            <li key={subTitle.id} className='w-full  flex justify-between items-center hover:text-blueavanti hover:font-bold'>
                                                <span>{subTitle.title}</span>
                                                <IoIosArrowForward />
                                            </li>
                                        ))}
                                        </ul>
                                        
                                    )
                                }
                            }  )
                        }
                    </div>
                </div>
            )}
        </ul>
    )
}