import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="col-sm-3">
      <div className="item">
        <div className="image">
          <Link to={{ pathname: `/product/${product.id}`, state: { product } }}>
            <img src={product.picture.url} alt="" />
          </Link>
        </div>
        <div className="info">
          <h3>
            <Link
              to={{ pathname: `/product/${product.id}`, state: { product } }}
            >
              {product.name}
            </Link>
          </h3>
          <div className="quick-cat">
            <Link to={`/category/${product.category.id}`}>
              {product.category.name}
            </Link>
          </div>
        </div>
        <div className="bottom">
          <div className="price">
            <label>{product.price}$</label>
            <p>{product.sales} Satış</p>
          </div>
          <div>
            <ul>
              <li>
                <Link
                  to={{
                    pathname: `/product/${product.id}`,
                    state: { product },
                  }}
                >
                  <i className="ion-android-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
