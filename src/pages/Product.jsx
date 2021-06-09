import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import NotFound from "../components/NotFound/NotFound";
import { useProduct } from "../graphql/actions/product.action";

export default function Product({ ...props }) {
  const { id } = useParams();
  let product = props.location?.state?.product;
  const { data, loading } = useProduct({ variables: { id }, skip: product });
  if (data?.product) product = data.product;
  console.log(product);
  if (loading) return <Loader />;
  if (!product) return <NotFound />;
  return (
    <div>
      <div className="page-head">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link to={"/"}>Ana Səhifə</Link>
            </li>
            <li>
              <Link to={`/category/${product.category.id}`}>Şablonlar</Link>
            </li>
          </ul>
          <h3>{product.name}</h3>
        </div>
      </div>
      <section className="product-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div className="product-detail">
                <div className="preview">
                  <div className="image">
                    <img src={product.picture.url} alt="" />
                  </div>
                  <div className="actions">
                    <ul>
                      <li>
                        <a href={product.demoUrl} target="_blank">
                          <i className="ion-images mr10"></i>Preview
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="inner">
                  <h4>{product.name}</h4>
                  <h4>{product.description}</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="panel price-panel">
                <ul className="price">
                  <li>Regular License</li>
                  <li>
                    <label>
                      <em>$</em>
                      {product.price}
                    </label>
                  </li>
                </ul>
                <div className="panel-body">
                  <ul className="list">
                    <li>Quality checked by Disbody</li>
                    <li>Future updates</li>
                    <li>6 months support</li>
                    <li>Price is in US dollars.</li>
                  </ul>
                </div>
                <div className="panel-foot">
                  <ul>
                    <li>
                      <button className="btn btn-primary">
                        Karta əlavə et
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-success">İndi Al</button>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="info-list">
                <li>
                  <i className="ion-android-cart"></i>
                  <label>{product.sales}</label> Satış
                </li>
              </ul>
              <div className="panel">
                <div className="panel-body">
                  <table cellSpacing="0" cellPadding="0" border="0">
                    <tbody>
                      {product.features.map((feature, index) => (
                        <tr key={index}>
                          <td className="meta-attributes__attr-name">
                            {feature.name}
                          </td>
                          <td className="meta-attributes__attr-detail">
                            <a href="#">{feature.value}</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
