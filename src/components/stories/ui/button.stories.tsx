import { Meta, type StoryObj } from '@storybook/react'
import { PlusCircle } from 'lucide-react'

import { Button, type ButtonProps } from '@/components/ui/button'

export default {
  title: 'UI / Button',
  component: Button,
  tags: ['UI', 'Design System', 'autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'primary-outline',
        'secondary',
        'secondary-outline',
        'outline',
        'ghost',
        'destructive',
        'destructive-outline',
        'input',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean (optional)' },
        defaultValue: { summary: 'false' },
      },
    },
    asChild: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean (optional)' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: { type: 'object' },
      table: {
        type: { summary: 'string | react node' },
      },
    },
  },
} as Meta<ButtonProps>

export const DefaultButton: StoryObj<ButtonProps> = {
  args: { children: 'Default button', disabled: false, asChild: false },
}

export const IconButton: StoryObj<ButtonProps> = {
  args: {
    children: <PlusCircle />,
    size: 'icon',
    disabled: false,
    asChild: false,
  },
}
