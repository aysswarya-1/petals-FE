import React from 'react'
import Container from '../../components/layout/Container'
import Banner from '../../components/account/Banner'
import InfoPanel from '../../components/account/InfoPanel'
import AuthPanel from '../../components/account/AuthPanel'

const Account = () => {
    return (
        <div className="min-h-screen bg-rose-50 mt-5">
            <Banner />

            <div className="mt-8 flex flex-col-reverse md:flex-row  gap-6">
                <div>
                    <InfoPanel />
                </div>

                <div>
                    <AuthPanel />
                </div>
            </div>
        </div>
    )
}

export default Account
