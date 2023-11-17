
import { AddToCartIcon } from "./Icons";
import './Products.css'

export function Products({Arrayproduct}) {
  return (
    <main className="products">
      <ul>
        {
        Arrayproduct.map((product) => (
          <li className="product" key={product.id}>
            <img src={product.thumbnail} 
            alt={product.title} />
            <p>{product.title} - {product.price}€</p>
            <div>
            <button><AddToCartIcon/></button>
            </div>
          </li>
        ))
        }
      </ul>
    </main>
  );
}
