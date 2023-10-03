import React from 'react'
import {Spacing} from '@phaunoui/foundation'

type colorProps = {
    hexCode: string,
    width?: keyof typeof Spacing,
    heigth?: keyof typeof Spacing,
}

const Color = ({ hexCode, width = 'sm', heigth = 'sm' }: colorProps) => {
    const className = `phauno-width-${width} phauno-heigth-${heigth}`;

    return (
        <div className={className} style={{ backgroundColor: hexCode }}></div>
    )
}

export default Color