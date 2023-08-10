import Navigation from "../components/Navigation/Navigation"
import Container from '../components/Common/Container'
import RoadMap from "../components/Common/RoadMap"
import Footer from "../components/Footer/Footer"
import Cart from "../components/Cart/Cart"
function CartPage() {
  return (
    <>
      <Navigation />
      <Container>
        <RoadMap />
        <Cart />
      </Container>
      <Footer />
    </>)
}

export default CartPage