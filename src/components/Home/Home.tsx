import React, { useState } from "react";

import { IProduct, PageEnum, dummyProductList } from "../Product/Product.type";
import "./Home.style.css";
import ProductList from "../Product/ProductList";
import AddProduct from "../AddProduct/AddProduct";
import EditProduct from "../EditProduct/EditProduct";

const Home = () => {
    const [productList, setProductList] = useState(
        dummyProductList as IProduct[]
    );

    const [shownPage, setShownPage] = useState(PageEnum.list);
    const [dataToEdit, setDataToEdit] = useState({} as IProduct);

    const onAddProductClickHnd = () => {
        setShownPage(PageEnum.add);
    };

    const showListPage = () => {
        setShownPage(PageEnum.list);
    };

    const addProduct = (data: IProduct) => {
        setProductList([...productList, data]);
    };

    const onDeleteProduct = (data: IProduct) => {

        const indexToDelete = productList.indexOf(data);
        const tempList = [...productList];

        tempList.splice(indexToDelete, 1);
        setProductList(tempList);
    }

    const editProductData = (data: IProduct) => {
        setShownPage(PageEnum.edit);
        setDataToEdit(data);
    }

    const updateData = (data: IProduct) => {
        // Find the index of the product to update, the id is unique
        const filteredData = productList.filter((x) => x.id === data.id)[0];
        const indexOfRecord = productList.indexOf(filteredData);
        const tempData = [...productList];
        // Update product at the found index
        tempData[indexOfRecord] = data;
        setProductList(tempData);
    }

    return (
    <>
        <div className="home-container">
            <article className="article-header">
                <img src="./box.png" alt="Logo"/>
                <div className="header-text">
                    <h1 className="navbar-title">C R U D</h1>
                    <p>Create, Read, Update and Delete</p>
                </div>
            </article>

            <section className="section-content">
                {shownPage === PageEnum.list && (
                    <>
                        <input type="button" value="Add Product" onClick={onAddProductClickHnd} className="add-product-btn"/>
                        <ProductList list={productList} onDeleteClickHnd={onDeleteProduct} onEdit={editProductData} />
                    </>
                )}

                {shownPage === PageEnum.add && <AddProduct onBackBtnClickHnd={showListPage} onSubmitClickHnd={addProduct} /> }
                {shownPage === PageEnum.edit && <EditProduct data={dataToEdit} onBackBtnCLickHnd={showListPage} onUpdateClickHnd={updateData} />}
            </section>
        </div>
    </>
    );
}

export default Home;