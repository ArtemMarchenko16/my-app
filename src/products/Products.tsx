import React, {FC, useEffect, useState} from 'react';
import Product, {IProductsProps} from "../product/Product";


const Products: FC = () => {


    const [products, setProducts] = useState<IProductsProps[]>([]);


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products}) => {
                setProducts(products);
            });
    }, []);

    return (
        <div>
            {
                products.map((value: IProductsProps) => <Product title={value.title} price={value.price} description={value.description} rating={value.rating} id={value.id}/>)
            }

        </div>
    );
};

export default Products;