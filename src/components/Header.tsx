import { Link } from "react-router-dom";
import Logo from "../../public/logo.png";
import { useAppDispatch, useAppSelector } from "../hooks";
import { logOut } from "../redux/slices/loginSlice";

const Header: React.FC = () => {
    const { totalPrice, items } = useAppSelector((state) => state.cart);
    const countItemsCart = items.reduce((sum, obj) => obj.count + sum, 0);
    const dispatch = useAppDispatch();

    return (
        <header>
            <div className="container">
                <div className="header-body">
                    <Link to="/products">
                        <img src={Logo} alt="logo" />
                    </Link>
                    <div className="header-cart">
                        <Link to="/cart">
                            <span className="total-price"> {totalPrice}</span>
                            <svg
                                height="800px"
                                width="800px"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 235.517 235.517"
                            >
                                <g>
                                    <path
                                        d="M118.1,235.517c7.898,0,14.31-6.032,14.31-13.483c0-7.441,0-13.473,0-13.473
		c39.069-3.579,64.932-24.215,64.932-57.785v-0.549c0-34.119-22.012-49.8-65.758-59.977V58.334c6.298,1.539,12.82,3.72,19.194,6.549
		c10.258,4.547,22.724,1.697,28.952-8.485c6.233-10.176,2.866-24.47-8.681-29.654c-11.498-5.156-24.117-8.708-38.095-10.236V8.251
		c0-4.552-6.402-8.251-14.305-8.251c-7.903,0-14.31,3.514-14.31,7.832c0,4.335,0,7.843,0,7.843
		c-42.104,3.03-65.764,25.591-65.764,58.057v0.555c0,34.114,22.561,49.256,66.862,59.427v33.021
		c-10.628-1.713-21.033-5.243-31.623-10.65c-11.281-5.755-25.101-3.72-31.938,6.385c-6.842,10.1-4.079,24.449,7.294,30.029
		c16.709,8.208,35.593,13.57,54.614,15.518v13.755C103.79,229.36,110.197,235.517,118.1,235.517z M131.301,138.12
		c14.316,4.123,18.438,8.257,18.438,15.681v0.555c0,7.979-5.776,12.651-18.438,14.033V138.12z M86.999,70.153v-0.549
		c0-7.152,5.232-12.657,18.71-13.755v29.719C90.856,81.439,86.999,77.305,86.999,70.153z"
                                    />
                                </g>
                            </svg>
                            <div className="cart-delimiter"></div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                            >
                                <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" />
                            </svg>
                            <span className="count">{countItemsCart}</span>
                        </Link>
                        <button
                            className="outline"
                            onClick={() => dispatch(logOut())}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
