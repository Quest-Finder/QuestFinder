import { Meta, type StoryObj } from '@storybook/react'

import {
  TextareaWithCounter,
  type TextareaWithCounterProps,
} from '../textarea-with-counter'

export default {
  title: 'Compound / Textarea with counter',
  component: TextareaWithCounter,
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
    maxLength: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number (optional)' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
} as Meta<TextareaWithCounterProps>

export const Default: StoryObj<TextareaWithCounterProps> = {
  args: {
    placeholder: 'Placeholder example',
    disabled: false,
  },
}

export const WithValue: StoryObj<TextareaWithCounterProps> = {
  args: {
    placeholder: 'Placeholder example',
    disabled: false,
  },
}

export const WithValueAndMaxLength: StoryObj<TextareaWithCounterProps> = {
  args: {
    value: 'Example value to show the counter number.',
    maxLength: 200,
    disabled: false,
  },
}
