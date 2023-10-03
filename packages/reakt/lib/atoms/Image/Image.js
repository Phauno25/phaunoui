import React from 'react';

const Image = ({ width, heigth, src, alt }) => {
    const className = `phauno-image-width-${width} phano-image-heigth-${heigth}`;
    return (React.createElement("img", { src: src, alt: alt, className: className, style: { objectFit: 'cover' } }));
};

export { Image as default };
//# sourceMappingURL=Image.js.map
