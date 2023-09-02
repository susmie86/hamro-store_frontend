import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import RoadMap from '../components/Common/RoadMap'
import User from '../components/User/User'
import Footer from '../components/Footer/Footer'
import Container from '../components/Common/Container'

function UserPage() {
    return (
        <>
            <Navigation />
            <Container>
                <RoadMap />
                <section className="section user-section">
                    <User />
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default UserPage