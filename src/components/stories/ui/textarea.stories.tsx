import { Meta, type StoryObj } from '@storybook/react'

import { Textarea, type TextareaProps } from '@/components/ui/textarea'

export default {
  title: 'UI / Textarea',
  component: Textarea,
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
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} as Meta<TextareaProps>

export const Default: StoryObj<TextareaProps> = {
  args: { placeholder: 'Placeholder example', disabled: false },
}
