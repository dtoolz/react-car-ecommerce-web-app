import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data';


// to grabs products using the context api
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state ={
        products:[],
        detailProduct:detailProduct,
    };

    componentDidMount() {
        this.setProducts();
      };

      //getting modified values of the datajs objects, so that initial values of storeProducts will be untouched for easy reference.
    setProducts= () => {
        let tempProducts= [];
        storeProducts.forEach(item => {
          const singleItem = {...item};
          tempProducts = [...tempProducts, singleItem];
        });
        this.setState (() =>{
          return {products: tempProducts};
        });
      };
    //creating methods to control products gotten from datajs 
    handleDetail = () => {

    }

    addToCart = () => {
        
    }

    render() {
        return (

            <ProductContext.Provider 
            value= {{
               ...this.state,
               handleDetail: this.handleDetail,
               addToCart: this.addToCart}}>
                 {this.props.children}
            </ProductContext.Provider>
        );
    }
};


const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};