import type { Meta, StoryObj } from '@storybook/react'
import Card from '.'

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
  render: () => (
    <Card>
      <h1>Hello World!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore
        consequatur, modi et ad doloremque fugiat at qui molestiae earum!
        Laborum possimus, minima pariatur magni accusantium a tenetur autem
        voluptas?
      </p>
    </Card>
  )
}

type Story = StoryObj<typeof Card>

export const Default: Story = {}

export default meta
