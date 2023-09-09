import React from 'react'
import "./UserPage.css"
import UserNavigation from '../../components/User/UserNavigation'
import Navigation from '../../components/Navigation/Navigation'
import Container from '../../components/Common/Container'
import RoadMap from '../../components/Common/RoadMap'
import Footer from '../../components/Footer/Footer'

function UserPageLayout({ component, children }) {
    return (
        <>
            <Navigation />
            <Container>
                <RoadMap />
                <section className="section user-section">
                    <UserNavigation />
                    {children}
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default UserPageLayout