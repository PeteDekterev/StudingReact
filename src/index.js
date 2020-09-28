import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Clock from './components/Clock';
// import Toggle from './components/Toggle';
// import LoginControl from './components/LoginControl';
// import Page from './components/Page';
// import Arrays from './components/Arrays';
// import NameForm from './components/NameForm';
// import FlavorForm from './components/FlavorForm';
// import Reservation from "./components/Reservation";
// import Calculator from "./components/Calculator/Calculator";
// import WelcomeDialog from "./components/Dialog/WelcomeDialog";
// import SignUpDialog from "./components/Dialog/SignUpDialog";
// import FilterableProductTable from "./components/FilterableProductTable";
// import Table from "./advancedComponents/Fragments/Table";
import App from "./advancedComponents/CodeSplitting/App";
import * as serviceWorker from './serviceWorker';

// const numbers = [1, 2, 3, 4, 5];

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <div>
    {/*<Clock/>*/}
    {/*<Toggle/>*/}
    {/*<LoginControl/>*/}
    {/*<Page/>*/}
    {/*<Arrays numbers={numbers}/>*/}
    {/*<NameForm/>*/}
    {/*<FlavorForm/>*/}
    {/*<Reservation/>*/}
    {/*<Calculator/>*/}
    {/*<WelcomeDialog/>*/}
    {/*<SignUpDialog/>*/}
    {/*<FilterableProductTable products={PRODUCTS} />*/}
    {/*<Table/>*/}
    <App/>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// comment from fork
