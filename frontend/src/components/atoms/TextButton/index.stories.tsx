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
    onClick: () => {},
    children: '会員登録',
  },
}

/** 決定や翻訳などの処理ボタン */
export const Process: Story = {
  args: {
    category: 'accept',
    onClick: () => {},
    children: '決定',
  },
}

/**　キャンセルボタン */
export const Cancel: Story = {
  args: {
    category: 'cancel',
    onClick: () => {},
    children: 'キャンセル',
  },
}
