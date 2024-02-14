'use client'

import Link from 'next/link'
import { useSelectPage } from './useSelectPage'

export function SelectPage() {
  const { handleSetParams, params, linksWithPath } = useSelectPage()
  return (
    <ul className='mx-auto my-3 flex h-11 max-w-[450px] items-center justify-around gap-3 rounded-md bg-[#EFEFEF]'>
      {linksWithPath.map(({ path, text }) => {
        const bgBLink = params === text && 'bg-[#FFFFFF]'
        const bgText =
          params === text ? 'text-black font-extrabold' : 'text-[#989898] '
        return (
          <li
            key={text}
            className={` flex items-center rounded-md px-4 py-2 ${bgBLink} min-w-[100px] min-[430px]:min-w-[120px]`}
          >
            <Link
              href={path}
              className='flex w-full items-center justify-center'
              onClick={() => handleSetParams(text)}
            >
              <span className={`text-center text-xs capitalize  ${bgText}`}>
                {text}
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}