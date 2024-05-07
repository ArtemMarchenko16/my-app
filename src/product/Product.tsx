import React, {FC} from 'react';


export interface IProductsProps {
    id?: number,
    title: string,
    description?:  string,
    price?: number,
    discountPercentage?: number,
    rating?: number,
    stock?: number,
    brand?: string,
    category?: string,
    thumbnail?: string,
    images?: string[]
}

export type IProductsTypeProps = IProductsProps & {children?: React.ReactNode}
const Product:FC<IProductsTypeProps> = ({id, title,description,price,rating, images}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <p>Rating: {rating}</p>
            <p>ID: {id}</p>
            <hr></hr>
        </div>
    );
};

export default Product;