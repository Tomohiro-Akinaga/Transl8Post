import type { Meta, StoryObj } from '@storybook/react'
import { TextButton } from './index'

const meta = {
  title: 'TextButton',
  component: TextButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof TextButton>

export default meta
type Story = StoryObj<typeof meta>

/** 会員登録やログイン */
export const Auth: Story = {
  args: {
    category: 'auth',
    icon: '',
    onClick: () => {},
    children: '会員登録',
  },
}

export const Tab: Story = {
  args: {
    category: 'tab',
    icon: 'pen',
    onClick: () => {},
    children: '投稿',
  },
}
