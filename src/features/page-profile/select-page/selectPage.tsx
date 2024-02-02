'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const linksWithPath = [
  { text: 'perfil', path: `/user/profile?show=profile` },
  { text: 'imagens', path: `/user/profile?show=images` },
  { text: 'datas disponiveis', path: `/user/profile?show=dates` },
]
export function SelectPage() {
  type LinkTexts = (typeof linksWithPath)[number]['text']

  const [params, setParams] = useState<LinkTexts>('perfil')
  const searchParams = useSearchParams()

  const handleSetParams = (state: LinkTexts) => {
    setParams(() => state)
  }

  let showElement = searchParams.get('show')
  useEffect(() => {
    if (showElement === 'images') {
      return handleSetParams('imagens')
    }
    if (showElement === 'dates') {
      return handleSetParams('datas disponiveis')
    }
  }, [])

  return (
    <>
      <ul className='flex items-center justify-around gap-3 h-11 my-3 bg-[#EFEFEF] rounded-md max-w-[450px] mx-auto'>
        {linksWithPath.map(({ path, text }) => {
          const bgBLink = params === text && 'bg-[#FFFFFF]'
          const bgText =
            params === text ? 'text-black font-extrabold' : 'text-[#989898] '
          return (
            <>
              <li
                key={text}
                className={` flex items-center rounded-md px-4 py-2 ${bgBLink} min-[430px]:min-w-[120px] min-w-[100px]`}
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
            </>
          )
        })}
      </ul>
    </>
  )
}
