import React from 'react'

const Button = ({ children, variant = 'primary', ...props }) => {
    const base = 'px-4 py-2 rounded-md text-sm font-medium inline-flex items-center gap-2 hover:cursor-pointer'
    const styles = variant === 'primary'
        ? `${base} bg-rosy-500 text-white hover:bg-rosy-700`
        : `${base} bg-white border text-rosy-700`
    return (
        <button className={styles} {...props}>
            {children}
        </button>
    )
}

export default Button
