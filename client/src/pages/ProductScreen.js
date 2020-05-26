import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props){
 
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
        };
    }, [])

    return(
    <div>
       <div className="back">
            <Link to="/">Back to results</Link>
        </div>
        {loading? <div>Loading...</div> :
        error? <div>{error}</div> :
        (
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info"></div>
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        <b>{product.price}</b>
                    </li>
                    <li>
                        Description:
                        <div>
                            {product.brand}
                        </div>
                    </li>
                </ul>
            <div className="details-action">
                <ul>
                    <li>
                        Price: {product.price}
                    </li>
                    <li>
                        Status: {product.status}
                    </li>
                    <li>
                        Quantity: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                    <br></br>
                    <li>
                        <button className="button">
                            Add to Cart
                        </button>
                    </li>
                </ul>
            </div>
         </div>
        )}
    </div>
  ) 
}

export default ProductScreen;