import {useDispatch} from "react-redux";

import {deleteProductsThunk} from "store/sliceProducts/operations";

const ProductItem = ({item}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteProductsThunk(item.id));
    };
    return (
        <li>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <button onClick={handleClick}>Delete products</button>
        </li>
    );
};

export {ProductItem};