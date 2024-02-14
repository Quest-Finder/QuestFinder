import React from 'react'
import Category from './category'

type RPGStyle = {
  id: string
  name: string
}
interface CardCategoryProps {
  rpgStyle: RPGStyle[]
}
export default function CardCategory({ rpgStyle }: CardCategoryProps) {
  return (
    <main>
      <section className='flex w-full shrink-0 flex-col'>
        <div />
        {Array.from({ length: 2 }, (_, i) => i + 1).map(i => (
          <div
            key={i}
            className='flex w-full items-center justify-start gap-4 p-4'
          >
            <h3 className="mr-auto min-w-[90px] font-['Roboto'] text-base font-normal leading-[48px] text-neutral-700">
              Categoria #{i}
            </h3>
            <div className='invisible-scrollbar flex w-full gap-1 overflow-auto'>
              {rpgStyle.map(({ id, name }) => (
                <Category
                  content={name}
                  key={id}
                />
              ))}
            </div>
            <button className='inline-flex h-8 w-10 items-start justify-start gap-2.5 rounded-[3px] bg-zinc-100 px-3 py-1.5'>
              <span className=" font-['Roboto'] text-sm font-medium leading-tight text-zinc-700">
                +2
              </span>
            </button>
          </div>
        ))}
      </section>
    </main>
  )
}