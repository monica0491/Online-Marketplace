import React, { useEffect } from 'react';
// import data from '../data'
// import API from '../utils/API'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props){
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [])


    return(
        loading? <div>Loading...</div> : 
        error? <div>{error}</div> :
        <ul className="products">
        {
          products.map(product => 
            <li key={product.id}>
            <div className="product">
                <Link to={"/products/" + product.id}><img className="product-image" src={product.image} alt="products"></img></Link>
                    <div className="product-name">
                        <Link to={"/products/" + product.id}>{product.name}</Link>
                    </div> 
                    <div className="product-brand">{product.brand}</div>
                    <div className="price">{product.price}</div>
            </div>
            </li>)
        }
        </ul>
    )
}

export default HomeScreen