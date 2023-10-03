import React, { KeyboardEventHandler, ReactNode, RefObject, createRef, useEffect, useRef, useState } from 'react'
import { Text } from '../../atoms/Text'

type SelectOption = {
    label: string,
    value: string,
}

type renderOptionProps = {
    isSelected: boolean,
    option: SelectOption,
    getOptionRecommendedProps: (overrideProps?: Object) => Object;
}
type SelectProps = {
    onOptionSelected?: (option: SelectOption, optionIndex: number) => void,
    options: SelectOption[],
    label: string,
    renderOptions?: (props: renderOptionProps) => ReactNode
}

const Select = ({ label, options, onOptionSelected: handler, renderOptions }: SelectProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const labelRef = useRef<HTMLButtonElement>(null);
    const [overlayTop, setOverlayTop] = useState<number>(0);
    const [optionRefs, setOptionRefs] = useState<RefObject<HTMLLIElement>[]>([])
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    const [highlightedIndex, setHighlightedIndex] = useState<number | null>(0);

    const onLabelClick = () => { setIsOpen(!isOpen) }

    const onOptionSelected = (option: SelectOption, optionIndex: number) => {
        if (handler) {
            handler(option, optionIndex);
        }
        if (optionIndex === selectedIndex) {
            setSelectedIndex(-1)
        }
        else {
            setSelectedIndex(optionIndex)
            console.log(optionIndex)
        }
        setIsOpen(!isOpen)
    }
    const onButtonKeyDown: KeyboardEventHandler = (ev) => {
        ev.preventDefault();
        if (["enter", " ", "arrowdown"].includes(ev.key.toLocaleLowerCase() || ev.code)) {
            setIsOpen(true);

            highlightItem(0);
        }

    }

    const highlightItem = (optionIndex: number | null) => {
        setHighlightedIndex(optionIndex)
    }


    useEffect(() => {
        setOptionRefs(options.map(_ => createRef<HTMLLIElement>()))
    }, [options.length])

    useEffect(() => {
        setOverlayTop(labelRef.current?.offsetHeight || 0 + 10)
    }, [labelRef.current?.offsetHeight])

    console.log(optionRefs)

    useEffect(() => {
        if (highlightedIndex !== null && isOpen) {
            const ref = optionRefs[highlightedIndex]

            if (ref && ref.current) {
                ref.current.focus();
            }
        }
    }, [isOpen])


    return (
        <div className='phaunoui-select'>
            <button onKeyDown={onButtonKeyDown} ref={labelRef} className='phaunoui-select__label' onClick={onLabelClick}>
                <Text>{selectedIndex >= 0 ? options[selectedIndex].label : label}</Text>
                <svg
                    width="1rem"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`phaunoui-select__icon ${isOpen ? 'phaunoui-select__icon--open' : 'phaunoui-select__icon--closed'}`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </button>
            {isOpen ? (<ul style={{ top: overlayTop }} className='phaunoui-select__overlay'>
                {options.map((option, optionIndex) => {
                    const isSelected = selectedIndex === optionIndex;
                    const isHighlighted = highlightedIndex == optionIndex;
                    const ref = optionRefs[optionIndex]
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
                            }
                        }
                    }

                    if (renderOptions) {
                        return renderOptions(renderOptionProps)
                    }

                    return (
                        <li
                            {...renderOptionProps.getOptionRecommendedProps()}>
                            <Text>{option.label}</Text>

                            {isSelected ? (<svg
                                width="1rem"
                                height="1rem"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>
                            ) : ""}
                        </li>
                    )
                })}
            </ul>) : null
            }
        </div >
    )
}

export default Select