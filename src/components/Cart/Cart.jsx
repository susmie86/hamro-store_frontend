import { useAppContext } from '../../Context/AppContext'
import ProductCard from '../Common/ProductCard';
function Cart() {
    const { state } = useAppContext();
    return (
        <div className="carts">
            <h1>Cart here:</h1>
            {state.cart.map((product) => {
                return <ProductCard key={product.id} {...product} showDiscount={false} />
            })}
        </div>
    )
}

// {
//     // "id": "442db455-35aa-4fc4-a5b8-0003c47424e9",
//     //     "imgPath": "/static/media/gamingMonitor.1d3cc4d415786e90ceee653a8497d4d1.svg",
//     //         "productName": "IPS LCD gaming monitor"
//     //             , "marketPrice": 400,
//     //                 "discountPercent": 30,
//     //                     "showDiscount": true
// }

export default Cart