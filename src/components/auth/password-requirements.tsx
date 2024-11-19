import { Check, Dot } from 'lucide-react'

import type { PasswordRequirementType } from '@/@types'
import { COMPONENT_TEXTS } from '@/locales'

interface PasswordRequirementsProps {
  requirements: PasswordRequirementType[]
}

export function PasswordRequirements({
  requirements,
}: Readonly<PasswordRequirementsProps>) {
  const requirementTexts = COMPONENT_TEXTS.PasswordRequirements

  return (
    <ul className='space-y-0.5'>
      {requirements.map(item => (
        <li
          key={item.type}
          data-valid={item.isValid}
          className='flex items-center gap-1 data-[valid=true]:text-success [&>svg]:size-3'
        >
          {item.isValid ? <Check /> : <Dot />}
          {requirementTexts[item.type]}
        </li>
      ))}
    </ul>
  )
}
