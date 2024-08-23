import { faker } from "@faker-js/faker";
import "./styles.css";
import withToggles from "./HOC";
import ProductList from "./render-props-pattern/ProductList";
import List from "./render-props-pattern/List";
import CompanyItem from "./render-props-pattern/CompanyItem";
import ProductItem from "./render-props-pattern/ProductItem";
import Counter from "./compound-component-pattern/Counter";

const products = Array.from({ length: 5 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
});

const companies = Array.from({ length: 5 }, () => {
  return {
    companyName: faker.company.name(),
    phrase: faker.company.catchPhrase(),
  };
});

// LATER: Let's say we got this component from a 3rd-party library, and can't change it. But we still want to add the 2 toggle functionalities to it

const ProductListWithToggles = withToggles(ProductList);

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      <div>
        {/* <Counter
          iconIncrease="+"
          iconDecrease="-"
          label="My NOT so flexible counter"
          hideLabel={false}
          hideIncrease={false}
          hideDecrease={false}
        /> */}

        <Counter>
          <Counter.Label>Compound component counter</Counter.Label>
          <Counter.Decrease icon="-" />
          <Counter.Count />
          <Counter.Increase icon="+" />
        </Counter>
      </div>

      <h1>Render Props Pattern</h1>
      <div className="col-2">
        <List
          title="Products"
          items={products}
          render={(product) => (
            <ProductItem key={product.productName} product={product} />
          )}
        />
        <List
          title="Companies"
          items={companies}
          defaultVisibility={false}
          render={(company) => (
            <CompanyItem key={company.companyName} company={company} />
          )}
        />
      </div>
      <h1>HOC Pattern</h1>
      <div className="col-2">
        <ProductList title="Product HOC" items={products} />
        <ProductListWithToggles title="Product with HOC" items={products} />
      </div>
    </div>
  );
}
