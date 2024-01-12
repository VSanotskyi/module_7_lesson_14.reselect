import {useState} from "react";
import {useDispatch} from "react-redux";

import {createProductsThunk} from "store/sliceProducts/operations";

const initState = {
    title: "",
    price: "",
};

const ProductsAddForm = () => {
    const [product, setProduct] = useState(initState);
    const dispatch = useDispatch();
    const handleChange = ({target: {value, name}}) => {
        setProduct(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createProductsThunk(product));
        setProduct(initState);
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>
                <input type="text"
                       name="title"
                       value={product.title}
                       onChange={handleChange}
                       required
                />
            </label>
            <br/>
            <label>
                <input type="text"
                       name="price"
                       value={product.price}
                       onChange={handleChange}
                       required
                />
            </label>
            <br/>
            <button type="submit">Add products</button>
        </form>
    );
};

export {ProductsAddForm};