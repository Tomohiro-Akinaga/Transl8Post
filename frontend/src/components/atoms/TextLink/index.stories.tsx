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

/** 投稿 */
export const Action: Story = {
  args: {
    href: '/edit',
    icon: 'pen',
    children: '投稿',
  },
}
