import { useState } from "react";
import "./AddProduct.style.css";
import { IProduct } from "../Product/Product.type";

type Props = {
    onBackBtnClickHnd: () => void;
    onSubmitClickHnd: (data: IProduct) => void
};

const AddProduct = (props: Props) => {

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productDescription, setProductDescription] = useState("");
    const [productSpecs, setProductSpecs] = useState("");

    const { onBackBtnClickHnd, onSubmitClickHnd } = props;

    const onProductNameChangeHnd = (e: any) => {
        setProductName(e.target.value);
    }
    const onProductPriceChangeHnd = (e: any) => {
        setProductPrice(e.target.value);
    }
    const onProductDescriptionChangeHnd = (e: any) => {
        setProductDescription(e.target.value);
    }
    const onProductSpecsChangeHnd = (e: any) => {
        setProductSpecs(e.target.value);
    }

    const onSubmitBtnClickHnd = (e: any) => {
        e.preventDefault();
        const data: IProduct = {
            id: new Date().toJSON().toString(),
            name: productName,
            price: productPrice,
            description: productDescription,
            tecnicalDetails: productSpecs
        }
        onSubmitClickHnd(data);
        onBackBtnClickHnd();
    }

    return ( <>

    <article className="article-header-product">Add Product</article>
        <div>
            <form onSubmit={onSubmitBtnClickHnd}>
                <div className="add-product-container">
                <div>
                    <label>
                        Product Name:&nbsp;
                        <input type="text" name="productName" required value={productName} onChange={onProductNameChangeHnd} />
                    </label>
                </div>
                <div>
                    <label>
                        Product Price:&nbsp;
                        <input type="number" name="productPrice" required value={productPrice} onChange={onProductPriceChangeHnd} />
                    </label>
                </div>
                <div>
                    <label>
                        Product Description:
                        <textarea name="productDescription" required value={productDescription} onChange={onProductDescriptionChangeHnd}></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        Technical Specifications:&nbsp;
                        <textarea name="productSpecs" required value={productSpecs} onChange={onProductSpecsChangeHnd}></textarea>
                    </label>
                </div>
                </div>
                <div className="add-product-btns">
                    <input type="button" value="Back" onClick={onBackBtnClickHnd} />
                    <input type="submit" value="Add"/>
                </div>
            </form>
        </div>
    </>
    );
};

export default AddProduct;