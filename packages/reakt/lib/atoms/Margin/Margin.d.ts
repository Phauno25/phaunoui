import React from 'react';
import { Spacing } from '@phaunoui/foundation';
type MarginProps = {
    space?: keyof typeof Spacing;
    children: any;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
};
declare const Margin: ({ top, left, right, bottom, space, children }: MarginProps) => React.JSX.Element;
export default Margin;
