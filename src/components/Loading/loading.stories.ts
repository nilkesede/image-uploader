import type { Meta, StoryObj } from '@storybook/react'
import Loading from '.'

const meta: Meta<typeof Loading> = {
  title: 'Loading',
  component: Loading,
  tags: ['autodocs']
}

type Story = StoryObj<typeof Loading>

export const Default: Story = {
  args: {
    label: 'Loading'
  }
}

export default meta
