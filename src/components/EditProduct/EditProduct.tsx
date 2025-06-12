import { useState } from "react";
import { IProduct } from "../Product/Product.type";
import "../AddProduct/AddProduct.style.css";

type Props = {
    data: IProduct;
    onBackBtnCLickHnd: () => void;
    onUpdateClickHnd: (data: IProduct) => void;
};

const EditProduct = (props: Props) => {
  const { data, onBackBtnCLickHnd, onUpdateClickHnd } = props;

    const [productName, setProductName] = useState(data.name);
    const [productPrice, setProductPrice] = useState(data.price);
    const [productDescription, setProductDescription] = useState(data.description);
    const [productSpecs, setProductSpecs] = useState(data.tecnicalDetails);
  
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
    const updatedData: IProduct = {
        id: data.id, // ID remains the same for edit
        name: productName,
        price: productPrice,
        description: productDescription,
        tecnicalDetails: productSpecs
    }
    onUpdateClickHnd(updatedData);
    onBackBtnCLickHnd();
    }

    return (
        <><article className="article-header-product">Edit Product</article><div>
            <form onSubmit={onSubmitBtnClickHnd}>

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
                        Product Description:&nbsp;
                        <textarea name="productDescription" required value={productDescription} onChange={onProductDescriptionChangeHnd}></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        Technical Specifications:&nbsp;
                        <textarea name="productSpecs" required value={productSpecs} onChange={onProductSpecsChangeHnd}></textarea>
                    </label>
                </div>
                <div className="add-product-btns">
                    <input type="button" value="Back" onClick={onBackBtnCLickHnd} />
                    <input type="submit" value="Edit" />
                </div>
            </form>
        </div></>
  );
}

export default EditProduct;