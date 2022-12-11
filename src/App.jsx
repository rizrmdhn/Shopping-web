import React from "react";
import axios from "axios";
import { BrowserRouter, HashRouter, Routes } from "react-router-dom";
import HeaderDesktop from "./components/Header/HeaderDesktop";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "animate.css";
import DetailItemsComponent from "./components/Body/DetailItemsComponent";
import CartOffCanvas from "./components/offcanvas/CartOffCanvas";
import AnimatedRoutes from "./components/AnimatedRoutes";
import LoadingComponent from "./components/Loading/LoadData/LoadingCardComponent";
import FooterComponent from "./components/Body/FooterComponent";
import AboutPage from "./views/AboutPage";

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
      isLoading: true,
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

  async componentDidMount() {
    setTimeout(async () => {
      await axios.get(api).then((item) => {
        this.setState({
          lists: item.data,
          searchList: item.data,
        });
      });
    }, 3500);
    this.state.isLoading = false;
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
    const existingItem = this.state.cart.find((item) => item.id === id);

    if (existingItem.quantity >= 1) {
      this.state.cart = this.state.cart.filter((list) => list.id !== id);
      this.setState({
        quantity: (this.state.quantity -= existingItem.quantity),
        subTotalPrice: (this.state.subTotalPrice -= existingItem.totalPrice),
      });
    } else {
      this.state.cart = this.state.cart.filter((list) => list.id !== id);
      this.setState({
        quantity: 0,
        subTotalPrice: 0,
      });
    }
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
        <BrowserRouter>
          <HeaderDesktop
            quantity={this.state.quantity}
            lists={this.state.searchList}
            cart={this.state.cart}
            onSearch={this.onSearchHandler}
            isLoading={this.state.isLoading}
          />

          <AnimatedRoutes
            isLoading={this.state.isLoading}
            lists={this.state.lists}
            AddToCart={this.onAddToCardHandler}
            cart={this.state.cart}
            subTotalPrice={parseFloat(this.state.subTotalPrice.toFixed(2))}
            RemoveFromCart={this.onRemoveFromCartHandler}
            RemoveAllFromCart={this.onRemoveAllFromCartHandler}
          />
          <FooterComponent />
          {/* // OffCanvas // */}
          <CartOffCanvas
            cart={this.state.cart}
            subTotalPrice={parseFloat(this.state.subTotalPrice.toFixed(2))}
            AddToCart={this.onAddToCardHandler}
            RemoveFromCart={this.onRemoveFromCartHandler}
            RemoveAllFromCart={this.onRemoveAllFromCartHandler}
          />
          {/* // Modal Item // */}
          <DetailItemsComponent
            lists={this.state.lists}
            AddToCart={this.onAddToCardHandler}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
