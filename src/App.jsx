import React from "react";
import axios from "axios";
import { HashRouter, Route, Routes } from "react-router-dom";
import HeaderDesktop from "./components/Header/HeaderDesktop";
import ShopItemComponents from "./components/Body/ShopItemComponents";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "animate.css";
import DetailItemsComponent from "./components/Body/DetailItemsComponent";
import CartListComponent from "./components/Body/CartListComponent";
import FaqComponent from "./components/Body/FaqComponent";
import ContactComponent from "./components/Body/ContactComponent";
import CartOffCanvas from "./components/offcanvas/CartOffCanvas";

const MySwal = withReactContent(Swal);
const api = "https://fakestoreapi.com/products";

const Toast = MySwal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  showClass: {
    popup: "animate__animated animate__fadeInUp",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutDown",
  },
  position: "bottom-right",
  didOpen: (toast) => {
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      searchList: [],
      cart: [],
      quantity: 0,
      subTotalPrice: 0,
      showCart: false,
    };
    this.onAddToCardHandler = this.onAddToCardHandler.bind(this);
    this.onRemoveFromCardHandler = this.onRemoveFromCardHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  componentDidMount() {
    axios.get(api).then((item) => {
      this.setState({
        lists: item.data,
        searchList: item.data,
      });
    });
  }

  onAddToCardHandler(list) {
    const newItem = list;
    const existingItem = this.state.cart.find((item) => item.id === newItem.id);

    if (existingItem) {
      existingItem.quantity++;
      existingItem.totalPrice += newItem.price;
      this.state.subTotalPrice += newItem.price;
    } else {
      this.state.cart.push({
        id: newItem.id,
        title: newItem.title,
        price: newItem.price,
        category: newItem.category,
        description: newItem.description,
        image: newItem.image,
        quantity: 1,
        totalPrice: newItem.price,
      });
      this.state.subTotalPrice += newItem.price;
    }
    this.setState({
      quantity: (this.state.quantity += 1),
    });
    Toast.fire({
      icon: "success",
      title: "Added to cart",
    });
    console.log(this.state.cart);
  }
  onRemoveFromCardHandler(id) {}
  onSearchHandler(text) {
    if (text.length !== 0 && text.trim() !== "") {
      this.setState({
        searchList: this.state.searchList.filter((lists) =>
          lists.title.toLowerCase().includes(text.toLowerCase())
        ),
      });
    } else {
      this.setState({
        searchList: this.state.lists,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <HeaderDesktop
            quantity={this.state.quantity}
            lists={this.state.searchList}
            onSearch={this.onSearchHandler}
          />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <ShopItemComponents
                  lists={this.state.lists}
                  AddToCart={this.onAddToCardHandler}
                />
              }
            />
            <Route exact path="/FAQ" element={<FaqComponent />} />
            <Route exact path="/Contact" element={<ContactComponent />} />
            <Route
              exact
              path="/Cart"
              element={
                <CartListComponent
                  cart={this.state.cart}
                  subTotalPrice={this.state.subTotalPrice}
                  AddToCart={this.onAddToCardHandler}
                />
              }
            />
          </Routes>
        </HashRouter>
        {/* // OffCanvas // */}
        <CartOffCanvas />
        {/* // Modal Item // */}
        <DetailItemsComponent
          lists={this.state.lists}
          AddToCart={this.onAddToCardHandler}
        />
      </div>
    );
  }
}

export default App;
