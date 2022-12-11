import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../state-management/actions/productActions';
import GroupFooter from '../components/atoms/GroupFooter';
import CategoryCard from '../components/organisms/CategoryCard';
import { Link } from 'react-router-dom';
import Spinner from '../components/atoms/Spinner';

const Product = () => {
  const [state, setState] = useState({
    isLoading: true
  });
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Err: ', err);
      });
    setState({
      ...state,
      isLoading: false
    });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (state.isLoading) {
    return <Spinner />;
  }

  console.log('Products :', products);
  return (
    <>
      <div className='lg:container mx-auto'>
        <div className='mb-10'>
          <div>
            <h1 className='font-bold text-xl mt-4 mx-4'>Products</h1>
            <h3 className='font-bold mt-2 ml-4'>Categories</h3>
          </div>
          <div className='grid place-items-center xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-2 grid-cols-2 mt-4 px-4 w-full'>
            <CategoryCard />
            {products
              ? products.map((product) => {
                  return (
                    <Link to={`/product/${product.id}`} key={product.id}>
                      <div className='h-60 '>
                        <img
                          src={product.image}
                          alt={product.description}
                          className='h-full'
                        />
                      </div>
                    </Link>
                  );
                })
              : ''}
          </div>
        </div>
      </div>
      <GroupFooter />
    </>
  );
};

export default Product;
