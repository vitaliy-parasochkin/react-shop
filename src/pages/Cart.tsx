import CartProductItem from "../components/CartProductItem";

export default function Cart() {
    return (
        <div className="cart-wrapper">
            <div className="cart-products">
                <CartProductItem />
                <CartProductItem />
                <CartProductItem />
                <div className="total-sum">
                    Total:
                    <span>
                        1000
                        <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 325 435"
                        >
                            <g>
                                <path
                                    d="M226.8,197.6l-49.1,39.7h144.2v43.9h-187c-12.5,9.4-19.9,20.9-19.9,35.5c0,25.1,19.9,38.7,55.4,38.7
c30.3,0,56.4-14.6,77.3-44.9l57.5,38.7c-31.3,48.1-87.8,72.1-141.1,72.1c-70,0-122.2-33.4-122.2-88.8c0-17.8,6.3-36.6,18.8-51.2
H3.2v-43.9h91.9l50.2-39.7H3.2v-43.9h186c13.6-12.5,19.9-24,19.9-37.6c0-21.9-19.9-37.6-50.2-37.6c-29.3,0-54.3,16.7-72.1,44.9
L31.4,85.8c30.3-48.1,79.4-72.1,132.7-72.1c72.1,0,119.1,37.6,119.1,88.8c0,18.8-6.3,37.6-16.7,51.2h55.4v43.9H226.8z"
                                />
                            </g>
                        </svg>
                    </span>
                </div>
            </div>
            <div className="cart-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Surname</label>
                        <input
                            type="text"
                            name="surname"
                            id="surname"
                            placeholder="Enter surname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Enter address"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="phone"
                            name="phone"
                            id="phone"
                            placeholder="Enter phone"
                        />
                    </div>
                    <button type="submit">Order</button>
                </form>
            </div>
        </div>
    );
}
