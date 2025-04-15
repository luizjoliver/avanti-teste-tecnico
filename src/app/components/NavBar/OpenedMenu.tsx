import { NavigationItem } from '@/model/types'
import { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import OpenedMenuItem from './OpenedMenuItem'


type NavigationItemProps = {
    navigationItem: NavigationItem
}

export default function OpenedMenu({ navigationItem }: NavigationItemProps) {
    const [currentSubTitleId, setCurrentSubtitleId] = useState<number>(1)

    function handleSubTitleId(id: number) {
        setCurrentSubtitleId(id)
    }



    if (navigationItem.isFirst) {
        return (
            <OpenedMenuItem>
                <ul className='flex flex-col items-start text-sm font-normal w-[234px] px-2 py-4 bg-lightgray overflow-y-auto h-full'>
                    {navigationItem.subTitle!.map((subTitle) => (
                        <div
                            key={subTitle.id}
                            className='w-full flex justify-between items-center hover:text-blueavanti hover:font-bold cursor-pointer py-2'
                            onClick={() => handleSubTitleId(subTitle.id)}
                        >
                            <span className={`${currentSubTitleId === subTitle.id ? 'text-blueavanti' : ''}`}>
                                {subTitle.title}
                            </span>
                            <IoIosArrowForward />
                        </div>
                    ))}
                </ul>
                <div className='flex flex-col items-start justify-between text-sm font-normal h-full w-2/3 px-2 py-4'>
                    {navigationItem.subTitle!.map((subTitle) => (
                        <div key={subTitle.id} className='w-full flex items-center justify-around'>
                            {subTitle.items.map((item, index) => (
                                <p key={index} className={`${currentSubTitleId === subTitle.id ? 'text-blueavanti' : ''}`}>
                                    {item}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </OpenedMenuItem>
        )
    } else {
        return (
            <OpenedMenuItem>
                <div className='flex flex-col items-start justify-between text-sm font-normal h-full w-1/2 px-2 py-4'>
                    <p className='font-bold text-base'>{navigationItem.title}</p>
                    {navigationItem.subTitle!.map((subTitle) => (
                        <div
                            key={subTitle.id}
                            className='w-full flex justify-between items-center hover:text-blueavanti hover:font-bold'
                        >
                            {subTitle.items.map((item, index) => (
                                <button
                                    key={index}
                                    className={`cursor-pointer ${currentSubTitleId === subTitle.id ? 'text-blueavanti' : ''}`}
                                    onClick={() => handleSubTitleId(subTitle.id)}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </OpenedMenuItem>

        )
    }
}