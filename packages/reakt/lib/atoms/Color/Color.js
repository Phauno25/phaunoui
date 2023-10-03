import React from 'react';

const Color = ({ hexCode, width = 'sm', heigth = 'sm' }) => {
    const className = `phauno-width-${width} phauno-heigth-${heigth}`;
    return (React.createElement("div", { className: className, style: { backgroundColor: hexCode } }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
