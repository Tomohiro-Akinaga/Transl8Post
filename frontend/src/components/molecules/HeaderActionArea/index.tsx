import React from 'react'
import TextLink from '@/components/atoms/TextLink'

const HeaderActionArea = () => {
  return (
    <div>
      <TextLink href='/edit' icon={'pen'}>
        投稿
      </TextLink>
    </div>
  )
}

export default HeaderActionArea
