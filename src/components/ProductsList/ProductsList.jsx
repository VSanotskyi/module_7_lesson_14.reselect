import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getProductsThunk} from "store/sliceProducts/operations";
import {
    selectError,
    selectFilter,
    selectIsLoading,
    selectProductsForFender,
} from "store/sliceProducts/selectors";

import {ProductItem} from "components/ProductItem/ProductItem";
import {ProductsAddForm} from "components/ProductsAddForm/ProductsAddForm";

import {
    ProductsFilterForm,
} from "components/ProductsFilterForm/ProductsFilterForm";

const ProductsList = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectProductsForFender);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const filter = useSelector(selectFilter);

    useEffect(() => {
        dispatch(getProductsThunk());
    }, [dispatch]);

    return (
        <div>
            <ProductsAddForm/>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {!error && !isLoading && <ProductsFilterForm/>}
            {filter && items.length === 0 && <p>not defined</p>}
            {items.length > 0 && (
                <ul>
                    {
                        items.map(item => <ProductItem key={item.id}
                                                       item={item}
                        />)
                    }
                </ul>
            )}
        </div>
    );
};

export {ProductsList};