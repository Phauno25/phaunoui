import React from 'react'
import { FontSize } from '@phaunoui/foundation'


type TextProps = {
    size?: keyof typeof FontSize
    children: string
}

const Text = ({ size = 'base', children }: TextProps) => {
    const className = `phaunoui-text phaunoui-text-${size}`

    return <p className={className}>{children}</p>
}

export default Text