import React from 'react';
import { Spacing } from '@phaunoui/foundation';
type colorProps = {
    hexCode: string;
    width?: keyof typeof Spacing;
    heigth?: keyof typeof Spacing;
};
declare const Color: ({ hexCode, width, heigth }: colorProps) => React.JSX.Element;
export default Color;
