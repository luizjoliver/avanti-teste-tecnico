"use client"

import { NavigationItens } from '@/constants'
import { useState } from 'react'
import OpenedMenu from './OpenedMenu'
import { CiMenuBurger } from 'react-icons/ci'

export default function NavigationMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [currentTitle, setCurrentTitle] = useState<number>(0)

    function handleMouseEnter(titleId: number) {
        setIsMenuOpen(true)
        setCurrentTitle(titleId)
    }

    function handleMouseLeave() {
        setIsMenuOpen(false)
        setCurrentTitle(0)
    }

    return (
        <ul
            className='w-full h-1/2 hidden items-center justify-between relative lg:flex px-4'
            onMouseLeave={handleMouseLeave}
        >
            {NavigationItens.map((item, index) => (
                <li
                    key={item.id}
                    className='first:font-bold first:flex first:flex-row-reverse first:gap-2 first:items-center text-xs lg:text-sm'
                    onMouseEnter={() => handleMouseEnter(item.id)}
                >
                    <p className={`${item.id === currentTitle ? 'text-blueavanti' : ''}`}>{item.title}</p>
                    {index === 0 && item.iconImg && (
                    
                         <CiMenuBurger className={`${item.id === currentTitle ? 'text-blueavanti' : ''} text-lg`} />
                    )}
                </li>
            ))}

            {isMenuOpen && (
                <div
                    className='w-full bg-whiteavanti h-[329px] absolute top-full shadow-lg'
                    onMouseLeave={handleMouseLeave}
                >
                    <div className='h-full w-full '>
                        {
                            NavigationItens.map((item, index) => {
                                if (item.id === currentTitle) {
                                    return (<OpenedMenu navigationItem={item} key={item.id} />)
                                }
                        })
                        }
                    </div>
                </div>
            )}
        </ul>
    )
}