import React from 'react'

const Layout = ({ children }) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {children}
        </section>
    )
}

export default Layout
