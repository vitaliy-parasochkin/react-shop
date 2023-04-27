import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import { fetchItems } from "../redux/slices/dataSlice";

type categoriyType = {
    label: string;
    value: string;
};

const categories: categoriyType[] = [
    { label: "All", value: "all" },
    { label: "Smartphones", value: "smartphones" },
    { label: "Fragrances", value: "fragrances" },
    { label: "Laptops", value: "laptops" },
    { label: "Skincare", value: "skincare" },
    { label: "Home decoration", value: "home-decoration" },
];

const Filter: React.FC = () => {
    const [category, setCategory] = useState({ label: "All", value: "all" });
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (category.value === "all") {
            dispatch(fetchItems("https://dummyjson.com/products"));
        } else {
            dispatch(
                fetchItems(
                    `https://dummyjson.com/products/category/${category.value}`
                )
            );
        }
    }, [category, dispatch]);

    return (
        <div className="categories">
            <ul>
                {categories.map((el, i) => (
                    <li
                        onClick={() => setCategory(el)}
                        className={el.value === category.value ? "active" : ""}
                        key={`${el}_${i}`}
                    >
                        {el.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Filter;
