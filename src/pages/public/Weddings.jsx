import React from 'react'
import WeddingsHeader from '../../components/weddings/WeddingsHeader'
import WeddingEvents from '../../components/home/WeddingEvents'
import PortfolioGrid from '../../components/weddings/PortfolioGrid'
import PlanningSteps from '../../components/weddings/PlanningSteps'
import PackagesServices from '../../components/weddings/PackagesServices'
import ConsultationForm from '../../components/shared/ConsultationForm'

const Weddings = () => {
    return (
        <div className="space-y-10">
            <WeddingsHeader />
            <WeddingEvents />
            <PortfolioGrid />
            <PlanningSteps />

            <div className="grid md:grid-cols-2 gap-6">
                <ConsultationForm />
                <PackagesServices />
            </div>
        </div>
    )
}

export default Weddings
