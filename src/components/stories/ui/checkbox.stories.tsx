import { Meta, type StoryObj } from '@storybook/react'

import { Checkbox, CheckboxCheckProps } from '@/components/ui/checkbox'

export default {
  title: 'UI / Checkbox',
  component: Checkbox.Check,
  tags: ['UI', 'Design System', 'autodocs'],
  args: {
    checked: false,
    disabled: false,
    title: 'Checkbox title',
  },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onCheckedChange: {
      table: { type: { summary: 'function' } },
    },
  },
} as Meta<CheckboxCheckProps>

export const Default: StoryObj<CheckboxCheckProps> = {
  render: props => (
    <Checkbox.Wrapper>
      <Checkbox.Check
        id='example-one'
        {...props}
      />
      <Checkbox.Label htmlFor='example-one'>
        Checkbox label example
      </Checkbox.Label>
    </Checkbox.Wrapper>
  ),
}
