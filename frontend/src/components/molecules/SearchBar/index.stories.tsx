import type { Meta, StoryObj } from '@storybook/react'
import SearchBar from './index'

const meta: Meta = {
  title: 'SearchBar',
  component: SearchBar,
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * デフォルトカラーのボタン
 */
export const Default: Story = {
  args: {
    label: 'DefaultButton',
    onClick: () => {},
  },
}
