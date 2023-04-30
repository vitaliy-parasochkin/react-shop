import ProductItem from "../components/ProductItem";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchItems } from "../redux/slices/dataSlice";
import Filter from "../components/Filter";
import SkeletonProductItem from "../components/SkeletonProductItem";

export default function Products() {
    const dispatch = useAppDispatch();
    const { items, loading } = useAppSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchItems("/products"));
    }, [dispatch]);

    return (
        <div className="product-items-wrapper">
            <Filter />
            <div className="product-item-list">
                {loading
                    ? [...new Array(10)].map((_, i) => (
                          <SkeletonProductItem key={i} />
                      ))
                    : items.map((product, i) => (
                          <ProductItem {...product} key={i} />
                      ))}
            </div>
        </div>
    );
}
