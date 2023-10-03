import React from 'react';
import { FontSize } from '@phaunoui/foundation';
type TextProps = {
    size?: keyof typeof FontSize;
    children: string;
};
declare const Text: ({ size, children }: TextProps) => React.JSX.Element;
export default Text;
