import { useSelector } from "react-redux";
import "./index.css";

export default function Basket() {
    const products = useSelector((store) => store.items);
    const price = products
        .filter((product) => !!product.count)
}