import React from 'react'

const CommnetItem = ({content,writer}) => {
  return (
    <p>
        <strong>{content}</strong> | 작성자 : {writer}
    </p>
  )
}

export default CommnetItem