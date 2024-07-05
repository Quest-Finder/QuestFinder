import { useFormContext } from 'react-hook-form'
import GetCityByEstate from '../service/get-city-by-estate'
import { addressRegistrationValidationT } from '../types/address-registration'
import { removeAccents } from '../utils/remove-accents'

export interface ICidade {
  nome: string
  codigo_ibge: string
}

interface OptionsCityProps {
  uf: string
  cityValue: string
}
export default function OptionsCity({ uf, cityValue }: OptionsCityProps) {
  const { data } = GetCityByEstate({ uf })
  const form = useFormContext<addressRegistrationValidationT>()
  const fieldCityIsEmpty = cityValue.length !== 0
  const handleSelectCity = (city: string) => {
    form.setValue('city', city)
  }

  return (
    <ul className='m z-1 h-[40px]  w-full max-w-[320px] overflow-hidden rounded-md  border border-gray-200 bg-white'>
      {data
        .filter(city =>
          removeAccents(city.nome.toLowerCase()).includes(
            cityValue.toLowerCase(),
          ),
        )
        .slice(0, 1)
        .map(city => (
          <ul
            key={city.id}
            className='relative flex min-h-[40px] w-full cursor-pointer items-center px-4 py-2  '
          >
            <button
              type='button'
              className='w-full cursor-pointer px-4  text-left font-serif text-[0.625rem] font-medium  '
              onClick={() => handleSelectCity(city.nome)}
            >
              <p className='font-notoSans text-base font-normal leading-6 text-[#737373]'>
                {fieldCityIsEmpty && city.nome}
              </p>
            </button>
          </ul>
        ))}
    </ul>
  )
}
