import {useDispatch, useSelector} from "react-redux";

import {selectFilter, selectSort} from "store/sliceProducts/selectors";
import {setFilter, setSorted} from "store/sliceProducts/sliceProducts";

const ProductsFilterForm = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const sort = useSelector(selectSort);

    const handleChange = ({target: {value}}) => {
        dispatch(setFilter(value));
    };

    const handleChangeSorted = ({target}) => {
        console.log(target.value);
        dispatch(setSorted(target.value));
    };

    return (
        <div>


            <form>
                <label htmlFor="sortBy">Sort by: </label>
                <select name="sortBy:"
                        onChange={handleChangeSorted}
                >
                    <option value=""
                    >sort by {sort}
                    </option>
                    <option value="name"
                    >name
                    </option>
                    <option value="price"
                    >price
                    </option>
                </select>
                <br/>
                <label htmlFor="filter">Filter: </label>
                <input type="text"
                       name="filter"
                       value={filter}
                       onChange={handleChange}
                />
            </form>
        </div>
    );
};

export {ProductsFilterForm};