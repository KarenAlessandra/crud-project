import React, { useState } from "react";
import { IProduct } from "./Product.type";
import "./Product.style.css";

    type Props = {
        list: IProduct[];
        onDeleteClickHnd: (data: IProduct) => void;
        onEdit: (data: IProduct) => void;
    };

    const ProductList = (props: Props) => {
    const { list, onDeleteClickHnd, onEdit } = props;
    //const [dataToShow, setDataToShow] = useState(null as IProduct | null);

            return (
                <><article className="table-title">Product List</article><table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Technical Details</th>
                        <th>Actions</th>
                    </tr>

                    {list.map((product) => {
                        console.log(product);
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>BRL {product.price.toFixed(2)}</td>
                                <td>{product.tecnicalDetails}</td>
                                <td>
                                    <input type="button" value="Edit"
                                        onClick={() => onEdit(product)} />
                                    <input type="button" value="Delete"
                                        onClick={() => onDeleteClickHnd(product)} />
                                </td>
                            </tr>
                        );
                    })}
                </table></>      
        );
    }

export default ProductList;
