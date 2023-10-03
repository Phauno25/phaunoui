import React from 'react';
declare const imageSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
};
type imageProps = {
    width: keyof typeof imageSizes;
    heigth: keyof typeof imageSizes;
    src: string;
    alt: string;
};
declare const Image: ({ width, heigth, src, alt }: imageProps) => React.JSX.Element;
export default Image;
