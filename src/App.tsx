import React, {useState} from 'react';
import { useQuery } from 'react-query';

import Item from './components/Item/Item';
import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import {Wrapper} from './App.styles';

export interface ICartItem {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number,
}

const getProducts = async (): Promise<ICartItem[]> => 
    await (await fetch('https://fakestoreapi.com/products')).json();


const App = () => {
  const {data, isLoading, error} = useQuery<ICartItem[]>('products', getProducts)
  

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: ICartItem) => null;

  const handleRemoveFromCart = () => null;

  if(isLoading) return <LinearProgress/>

  if(error) return <div>Something went wrong...</div>
  
  return (
    <Wrapper>
        <Grid container spacing={3}>
          {data?.map(item => (
              <Grid item key={item.id} xs={12} sm={4}>
                  <Item item={item} handleAddToCart={handleAddToCart}/>
              </Grid>
            ))}
        </Grid>
    </Wrapper>
  );
}

export default App;
