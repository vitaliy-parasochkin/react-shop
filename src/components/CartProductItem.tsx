import { useAppDispatch } from "../hooks";
import { addCartItem, removeCartItem } from "../redux/slices/cartSlice";

type CartProductItemProps = {
    id: string;
    title: string;
    description: string;
    price: number;
    images: string[];
    count: number;
};

const CartProductItem: React.FC<CartProductItemProps> = ({
    id,
    title,
    description,
    price,
    images,
    count,
}) => {
    const dispatch = useAppDispatch();

    const onClickAddItem = () => {
        const item = {
            id,
            images,
            price,
            description,
            title,
            count,
        };

        dispatch(addCartItem(item));
    };

    const onClickRemoveItem = () => {
        const item = {
            id,
            images,
            price,
            description,
            title,
            count,
        };

        dispatch(removeCartItem(item));
    };
    return (
        <div className="cart-product">
            <div className="cart-product-image">
                <img src={images[0]} alt="product image" />
            </div>
            <div className="cart-product-info">
                <div>
                    <div className="cart-product-title">{title}</div>
                    <div className="cart-product-description">
                        {description}
                    </div>
                </div>
                <div className="cart-product-price">
                    {price}
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
                </div>
            </div>
            <div className="cart-product-count">
                <button onClick={() => onClickRemoveItem()}>-</button>
                <span className="count">{count}</span>
                <button onClick={() => onClickAddItem()}>+</button>
            </div>
        </div>
    );
};
export default CartProductItem;
