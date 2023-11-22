import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Card from '../../../src/components/Card'
import { defaultTheme } from '../../../src/styles/theme'

describe('Index', () => {
  it('renders a text', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Card>Hello World!</Card>
      </ThemeProvider>
    )
    const card = screen.getByTestId('card-wrapper')

    expect(card).toBeInTheDocument()
    expect(card).toHaveTextContent('Hello World!')
  })
})
