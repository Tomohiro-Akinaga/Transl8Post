import type { Meta, StoryObj } from '@storybook/react'
import TextLink from './index'

const meta = {
  title: 'TextLink',
  component: TextLink,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof TextLink>

export default meta
type Story = StoryObj<typeof meta>

/** 会員登録やログイン */
export const Auth: Story = {
  args: {
    href: '/',
    icon: 'post',
    children: '投稿',
  },
}
