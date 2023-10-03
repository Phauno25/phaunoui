import React, { useState, useRef, useEffect, createRef } from 'react';
import Text from '../../atoms/Text/Text.js';

const Select = ({ label, options, onOptionSelected: handler, renderOptions }) => {
    const [isOpen, setIsOpen] = useState(false);
    const labelRef = useRef(null);
    const [overlayTop, setOverlayTop] = useState(0);
    const [optionRefs, setOptionRefs] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const onLabelClick = () => { setIsOpen(!isOpen); };
    const onOptionSelected = (option, optionIndex) => {
        if (handler) {
            handler(option, optionIndex);
        }
        if (optionIndex === selectedIndex) {
            setSelectedIndex(-1);
        }
        else {
            setSelectedIndex(optionIndex);
            console.log(optionIndex);
        }
        setIsOpen(!isOpen);
    };
    const onButtonKeyDown = (ev) => {
        ev.preventDefault();
        if (["enter", " ", "arrowdown"].includes(ev.key.toLocaleLowerCase() || ev.code)) {
            setIsOpen(true);
            highlightItem(0);
        }
    };
    const highlightItem = (optionIndex) => {
        setHighlightedIndex(optionIndex);
    };
    useEffect(() => {
        setOptionRefs(options.map(_ => createRef()));
    }, [options.length]);
    useEffect(() => {
        setOverlayTop(labelRef.current?.offsetHeight || 0 + 10);
    }, [labelRef.current?.offsetHeight]);
    console.log(optionRefs);
    useEffect(() => {
        if (highlightedIndex !== null && isOpen) {
            const ref = optionRefs[highlightedIndex];
            if (ref && ref.current) {
                ref.current.focus();
            }
        }
    }, [isOpen]);
    return (React.createElement("div", { className: 'phaunoui-select' },
        React.createElement("button", { onKeyDown: onButtonKeyDown, ref: labelRef, className: 'phaunoui-select__label', onClick: onLabelClick },
            React.createElement(Text, null, selectedIndex >= 0 ? options[selectedIndex].label : label),
            React.createElement("svg", { width: "1rem", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: `phaunoui-select__icon ${isOpen ? 'phaunoui-select__icon--open' : 'phaunoui-select__icon--closed'}` },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))),
        isOpen ? (React.createElement("ul", { style: { top: overlayTop }, className: 'phaunoui-select__overlay' }, options.map((option, optionIndex) => {
            const isSelected = selectedIndex === optionIndex;
            const isHighlighted = highlightedIndex == optionIndex;
            const ref = optionRefs[optionIndex];
            const renderOptionProps = {
                option,
                isSelected,
                getOptionRecommendedProps: (overrideProps = {}) => {
                    return {
                        ref,
                        tabIndex: isHighlighted ? -1 : 0,
                        onMouseEnter: () => highlightItem(optionIndex),
                        onMouseLeave: () => highlightItem(null),
                        className: `phaunoui-select__option 
                                ${isSelected ? "phaunoui-select__option--selected" : ""}
                                ${isHighlighted ? "phaunoui-select__option--highlighted" : ""}`,
                        key: option.value,
                        onClick: () => onOptionSelected(option, optionIndex),
                        ...overrideProps
                    };
                }
            };
            if (renderOptions) {
                return renderOptions(renderOptionProps);
            }
            return (React.createElement("li", { ...renderOptionProps.getOptionRecommendedProps() },
                React.createElement(Text, null, option.label),
                isSelected ? (React.createElement("svg", { width: "1rem", height: "1rem", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }))) : ""));
        }))) : null));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
