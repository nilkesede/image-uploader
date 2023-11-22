import type { Meta, StoryObj } from '@storybook/react'
import Button from '.'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs']
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    label: 'Button'
  }
}

export default meta
