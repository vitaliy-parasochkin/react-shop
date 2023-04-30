import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import CartProductItem from "../components/CartProductItem";
import { useAppDispatch, useAppSelector } from "../hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { setCartItems } from "../redux/slices/cartSlice";
import * as yup from "yup";

const schema = yup
    .object({
        name: yup.string().required().max(15),
        surname: yup.string().max(15),
        address: yup.string().max(20),
        phone: yup
            .string()
            .required()
            .max(13)
            .matches(
                /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/,
                "Phone number is not validm use +380 of the beginning number"
            ),
    })
    .required();

type FormData = yup.InferType<typeof schema>;

const Cart: React.FC = () => {
    const { totalPrice, items } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        if (totalPrice) {
            let listCartItems = "";
            items.map(
                (item) =>
                    (listCartItems += `${item.title} in quantity ${item.count} \n`)
            );
            console.log(listCartItems, "listCartItems");
            const showMessage = `${data.name} you bought ${listCartItems} \n The amount of your order is ${totalPrice}$ \n We will call you on the number ${data.phone}`;
            alert(showMessage);
            dispatch(setCartItems([]));
        } else {
            alert("You need to add products to the cart");
        }
    };

    useEffect(() => {
        console.log(errors, "errors");
    }, [errors]);

    return (
        <div className="cart-wrapper">
            <div className="cart-products">
                {items.length > 0
                    ? items.map((product) => (
                          <CartProductItem {...product} key={product.id} />
                      ))
                    : "cart is empty"}
                <div className="total-sum">
                    Total:
                    <span>
                        {totalPrice}
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
                    </span>
                </div>
            </div>
            <div className="cart-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input {...register("name")} />
                        <p className="error-message">{errors.name?.message}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Surname</label>
                        <input {...register("surname")} />
                        <p className="error-message">
                            {errors.surname?.message}
                        </p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input {...register("address")} />
                        <p className="error-message">
                            {errors.address?.message}
                        </p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input {...register("phone")} />
                        <p className="error-message">{errors.phone?.message}</p>
                    </div>
                    <div className="submit-button-wrapper">
                        <button type="submit">Order</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Cart;
