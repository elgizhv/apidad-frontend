import React from "react";
import { useParams } from "react-router";
import Empty from "../components/Empty/Empty";
import Loader from "../components/Loader/Loader";
import NotFound from "../components/NotFound/NotFound";
import Product from "../components/Product/Product";
import { useCategoryProducts } from "../graphql/actions/product.action";
import { useStore } from "../store/RootStore";

export default function Category() {
  const { id } = useParams();
  const { categoryStore } = useStore();
  const { categories } = categoryStore;

  const category = categories?.find((category) => category.id === id);

  const { data: { products } = {} } = useCategoryProducts({
    variables: { id },
    skip: !id,
  });

  function ProductsLoading() {
    return Array(20)
      .fill()
      .map((item, index) => (
        <div key={index} className="col-sm-3">
          <div className="item">
            <Loader />
          </div>
        </div>
      ));
  }
  function Products() {
    return products?.map?.((product) => (
      <Product key={product.id} product={product} />
    ));
  }

  if (!category) return <NotFound />;

  return (
    <section className="products">
      <div className="container">
        <div className="paragraph">
          <span>
            <em></em>
          </span>
          <h2>{category.name}</h2>
          {products?.length > 0 && (
            <p>Check out our '{category.name}' products</p>
          )}
        </div>

        <div className="row">
          {!products ? <ProductsLoading /> : <Products />}
        </div>
        {products?.length === 0 && (
          <Empty title="Məhsul tapılmadı">
            <p>Bu kateqoriyada məhsul tapılmadı.</p>
          </Empty>
        )}
      </div>
    </section>
  );
}
