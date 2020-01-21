import React from 'react'

const HeadingCenter = ({ text, css }) => (
  <h2 css={{
    ...{
      textAlign: 'center'
    }, ...css
  }}>{text}</h2>
)

export default HeadingCenter;