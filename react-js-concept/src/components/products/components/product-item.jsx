import styles from './product-item.module.css';

const ButtonComponent = () => {
    return (
        <>
            <button className={styles.buttonStyle}>Click</button>
        </>
    )
}

// we can give inline styles also.
const ProductItem = ({ singleProductItem, key }) => {
    return (
        <div key={key}>
            <p className={styles.productTitle}>{singleProductItem}</p>
            <ButtonComponent />
        </div>
    )
}

export default ProductItem;
