import Image from 'next/image'
import type { ControllerRenderProps } from 'react-hook-form'

import { Form } from '@/components/form'
import { CheckboxWrapper } from '@/components/ui/checkbox-wrapper'
import { useGameStylesForm } from '@/hooks/register/profile'
import { gameStyleOptions } from '@/utils/register/profile'

interface GameStylesOptionsProps {
  field: ControllerRenderProps<{ gameStyles: string[] }, 'gameStyles'>
}

export function GameStylesOptions({ field }: Readonly<GameStylesOptionsProps>) {
  const { toggleGameStyle, disableGameStyleOptions } = useGameStylesForm()
  const selectedGameStyles = field.value

  return (
    <div className='flex w-full max-w-5xl flex-wrap justify-center gap-4'>
      {gameStyleOptions.map(option => {
        const isGameStyleSelected = selectedGameStyles.includes(option.id)
        const isMaxGameStylesReached = disableGameStyleOptions(
          selectedGameStyles,
          option.id,
        )

        return (
          <Form.Item
            key={option.id}
            asChild
          >
            <CheckboxWrapper.Label
              aria-disabled={isMaxGameStylesReached}
              selected={isGameStyleSelected}
              className='group max-w-48 gap-0 rounded-lg border border-border transition-all hover:bg-background-soft hover:shadow-lg data-[selected=true]:border-primary data-[selected=true]:bg-primary-soft/10'
            >
              <CheckboxWrapper.Input
                title={option.title}
                disabled={isMaxGameStylesReached}
                checked={isGameStyleSelected}
                onCheckedChange={() =>
                  field.onChange(toggleGameStyle(selectedGameStyles, option.id))
                }
              />
              <div className='relative aspect-video overflow-hidden'>
                <Image
                  alt={option.title}
                  src={option.image}
                  className='absolute object-cover transition-all duration-300 group-hover:scale-105'
                />
              </div>

              <div className='space-y-1 p-4 text-center'>
                <h3 className='font-bold'>{option.title}</h3>
                <p className='text-sm'>{option.description}</p>
              </div>
            </CheckboxWrapper.Label>
          </Form.Item>
        )
      })}
    </div>
  )
}
