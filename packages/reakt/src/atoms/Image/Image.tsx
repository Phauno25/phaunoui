import React from 'react'

const imageSizes = { xs: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl", full: "full" }

type imageProps = {
    width: keyof typeof imageSizes,
    heigth: keyof typeof imageSizes,
    src: string,
    alt: string,
}

const Image = ({ width, heigth, src, alt }: imageProps) => {

    const className = `phauno-image-width-${width} phano-image-heigth-${heigth}`
    return (
        <img src={src} alt={alt} className={className} style={{ objectFit: 'cover' }}/>
    )
}

export default Image