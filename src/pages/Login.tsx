import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../hooks";
import { postDataLogin } from "../redux/slices/loginSlice";
import { useNavigate } from "react-router-dom";

const schema = yup
    .object({
        username: yup.string().required().max(15),
        password: yup.string().max(15).required(),
    })
    .required();

type FormData = yup.InferType<typeof schema>;

const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isAuth, error } = useAppSelector((state) => state.login);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        dispatch(postDataLogin(data));
    };

    useEffect(() => {
        if (isAuth) {
            navigate("/products");
        }
    }, [isAuth, navigate]);

    return (
        <div className="login-wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="login">Username</label>
                    <input {...register("username")} />
                    <p className="error-message">{errors.username?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" {...register("password")} />
                    <p className="error-message">{errors.password?.message}</p>
                </div>
                <p className="error-message">{error}</p>
                <div className="submit-button-wrapper">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
