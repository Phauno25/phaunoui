import React, { ReactNode } from 'react';
type SelectOption = {
    label: string;
    value: string;
};
type renderOptionProps = {
    isSelected: boolean;
    option: SelectOption;
    getOptionRecommendedProps: (overrideProps?: Object) => Object;
};
type SelectProps = {
    onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
    options: SelectOption[];
    label: string;
    renderOptions?: (props: renderOptionProps) => ReactNode;
};
declare const Select: ({ label, options, onOptionSelected: handler, renderOptions }: SelectProps) => React.JSX.Element;
export default Select;
