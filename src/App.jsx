import React from "react";
import axios from "axios";
import { HashRouter, Routes } from "react-router-dom";
import HeaderDesktop from "./components/Header/HeaderDesktop";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "animate.css";
import DetailItemsComponent from "./components/Body/DetailItemsComponent";
import CartOffCanvas from "./components/offcanvas/CartOffCanvas";
import AnimatedRoutes from "./components/AnimatedRoutes";

const MySwal = withReactContent(Swal);
const api = "https://fakestoreapi.com/products";

const Toast = MySwal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  position: "bottom-end",
  showClass: {
    popup: "animate__animated animate__fadeInUp",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutDown",
  },
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
    this.onRemoveFromCartHandler = this.onRemoveFromCartHandler.bind(this);
    this.onRemoveAllFromCartHandler =
      this.onRemoveAllFromCartHandler.bind(this);
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
    const totalPrice = newItem.price;
    if (existingItem) {
      existingItem.quantity++;
      existingItem.totalPrice += totalPrice;
      this.state.subTotalPrice += totalPrice;
    } else {
      this.state.cart.push({
        id: newItem.id,
        title: newItem.title,
        price: totalPrice,
        category: newItem.category,
        description: newItem.description,
        image: newItem.image,
        quantity: 1,
        totalPrice: totalPrice,
      });
      this.state.subTotalPrice += totalPrice;
    }
    this.setState({
      quantity: (this.state.quantity += 1),
    });
  }
  onRemoveFromCartHandler(id) {
    const existingItem = this.state.cart.find((item) => item.id === id);
    if (existingItem.quantity === 1) {
      this.state.cart = this.state.cart.filter((list) => list.id !== id);
      this.setState({
        quantity: (this.state.quantity -= 1),
        subTotalPrice: (this.state.subTotalPrice -= existingItem.price),
      });
    } else {
      existingItem.quantity--;
      existingItem.totalPrice -= existingItem.price;
      this.state.subTotalPrice -= existingItem.price;
      this.setState({
        quantity: (this.state.quantity -= 1),
      });
    }
  }
  onRemoveAllFromCartHandler(id) {
    const cart = this.state.cart.filter((list) => list.id !== id);
    this.setState({ cart });
    this.setState({
      quantity: 0,
    });
  }
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
            cart={this.state.cart}
            onSearch={this.onSearchHandler}
          />

          <AnimatedRoutes
            lists={this.state.lists}
            AddToCart={this.onAddToCardHandler}
            cart={this.state.cart}
            subTotalPrice={this.state.subTotalPrice}
            RemoveFromCart={this.onRemoveFromCartHandler}
            RemoveAllFromCart={this.onRemoveAllFromCartHandler}
          />
        </HashRouter>
        {/* // OffCanvas // */}
        <CartOffCanvas
          cart={this.state.cart}
          subTotalPrice={this.state.subTotalPrice}
          AddToCart={this.onAddToCardHandler}
          RemoveFromCart={this.onRemoveFromCartHandler}
          RemoveAllFromCart={this.onRemoveAllFromCartHandler}
        />
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
