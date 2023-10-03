import React from 'react';

const Text = ({ size = 'base', children }) => {
    const className = `phaunoui-text phaunoui-text-${size}`;
    return React.createElement("p", { className: className }, children);
};

export { Text as default };
//# sourceMappingURL=Text.js.map
