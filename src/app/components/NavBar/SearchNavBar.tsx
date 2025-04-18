"use client"

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import search from "../../../assets/navbar/Caminho.png";
import logo from '../../../assets/navbar/logo.png';
import { IoCloseOutline } from 'react-icons/io5';

export default function SearchNavBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowMessage(!!searchTerm.trim());
    };

    useEffect(() => {
        if (!searchTerm.trim()) setShowMessage(false);
    }, [searchTerm]);

    return (
        <>
            {/* Mobile Version */}
            <form onSubmit={handleSubmit} className='lg:hidden w-full h-[40px] mt-2 bg-whiteavanti border border-grayavanti-600 rounded-md flex items-center justify-between px-3 relative'>
                <input
                    type="text"
                    className='outline-none placeholder:text-sm placeholder:text-blackavanti placeholder:font-semibold w-full'
                    placeholder='Digite aqui o que você procura'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">
                    <Image 
                        src={search} 
                        alt='Ícone de busca'
                        className="cursor-pointer"
                    />
                </button>
                
                {showMessage && (
                    <div className="absolute top-full left-0 w-full mt-1 text-sm bg-whiteavanti p-2 border border-grayavanti-600 rounded-md shadow-md z-20 flex justify-between items-center">
                        <span>
                            Você buscou por: {' '}
                            <span className="text-blueavanti font-semibold">{searchTerm}</span>
                        </span>
                        <button 
                            onClick={() => setShowMessage(false)}
                            className="text-gray-500 hover:text-blackavanti ml-2 text-lg cursor-pointer"
                        >
                            <IoCloseOutline />
                        </button>
                    </div>
                )}
            </form>

            <Image
                src={logo}
                alt='Logo'
                className='hidden lg:block w-[150px] h-[27px] min-w-[150px]'
            />

            {/* Desktop Version */}
            <form onSubmit={handleSubmit} className='hidden lg:flex flex-1 max-w-[594px] h-[40px] bg-whiteavanti border border-grayavanti-600 rounded-md items-center justify-between px-3 relative'>
                <input
                    type="text"
                    className='outline-none placeholder:text-sm placeholder:text-blackavanti placeholder:font-semibold w-full'
                    placeholder='Digite aqui o que você procura'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">
                    <Image 
                        src={search} 
                        alt='Ícone de busca'
                        className="cursor-pointer"
                    />
                </button>
                
                {showMessage && (
                    <div className="absolute top-full left-0 w-full mt-1 text-sm bg-whiteavanti p-2 border border-grayavanti-600 rounded-md shadow-md z-20 flex justify-between items-center">
                        <span>
                            Você buscou por: {' '}
                            <span className="text-blueavanti font-semibold">{searchTerm}</span>
                        </span>
                        <button 
                            onClick={() => setShowMessage(false)}
                            className="text-gray-500 hover:text-blackavanti ml-2 text-lg cursor-pointer"
                        >
                           <IoCloseOutline />
                        </button>
                    </div>
                )}
            </form>
        </>
    )
}