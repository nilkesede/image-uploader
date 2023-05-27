import '@testing-library/jest-dom'

import React from 'react'
import { render, screen } from '@testing-library/react'

import Index from '../../pages/index'

describe('Index', () => {
  it('renders a text', () => {
    render(<Index />)
    const label = screen.getByTestId('input-label')

    expect(label).toBeInTheDocument()
    expect(label).toHaveTextContent('Upload a .png or .jpg image (max 1MB).')
  })
})
