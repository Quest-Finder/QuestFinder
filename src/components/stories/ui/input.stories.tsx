import { Meta, type StoryObj } from '@storybook/react'
import { CircleCheck } from 'lucide-react'

import { Input, InputProps } from '@/components/ui/input'

export default {
  title: 'UI / Input',
  component: Input,
  tags: ['UI', 'Design System', 'autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'info', 'warning', 'error', 'success'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    statusIcon: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean | icon' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} as Meta<InputProps>

export const Default: StoryObj<InputProps> = {
  args: { placeholder: 'Placeholder example' },
}

export const InfoInput: StoryObj<InputProps> = {
  args: { variant: 'info', placeholder: 'Placeholder example' },
}

export const InfoInputWithStatusIcon: StoryObj<InputProps> = {
  args: { variant: 'info', value: 'Info value example', statusIcon: true },
}

export const WarningInput: StoryObj<InputProps> = {
  args: { variant: 'warning', placeholder: 'Placeholder example' },
}

export const WarningInputWithStatusIcon: StoryObj<InputProps> = {
  args: {
    variant: 'warning',
    value: 'Warning value example',
    statusIcon: true,
  },
}

export const ErrorInput: StoryObj<InputProps> = {
  args: { variant: 'error', placeholder: 'Placeholder example' },
}

export const ErrorInputWithStatusIcon: StoryObj<InputProps> = {
  args: { variant: 'error', value: 'Error value example', statusIcon: true },
}

export const SuccessInput: StoryObj<InputProps> = {
  args: { variant: 'success', placeholder: 'Placeholder example' },
}

export const SuccessInputWithCustomStatusIcon: StoryObj<InputProps> = {
  args: {
    variant: 'success',
    value: 'Success value example',
    statusIcon: CircleCheck,
  },
}
