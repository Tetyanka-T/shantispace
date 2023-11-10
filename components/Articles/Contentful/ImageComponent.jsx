'use client'

import Image from 'next/image'

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const ImageComponent = props => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image loader={contentfulLoader} {...props} />
}

export default ImageComponent
