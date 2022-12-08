import React from "react";
import axios from "axios";
import HeaderDesktop from "./components/Header/HeaderDesktop";
import ShopItemComponents from "./components/Body/ShopItemComponents";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "animate.css";
import DetailItemsComponent from "./components/Body/DetailItemsComponent";

const MySwal = withReactContent(Swal);
const api = "https://fakestoreapi.com/products";

const Toast = MySwal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  showClass: {
    popup: "animate__animated animate__fadeInDown",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
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
      cart: [],
      quantity: 0,
      showCart: false,
    };
    this.onAddToCardHandler = this.onAddToCardHandler.bind(this);
  }

  componentDidMount() {
    axios.get(api).then((item) => {
      this.setState({
        lists: item.data,
      });
    });
  }

  onAddToCardHandler(list) {
    const newItem = list;
    const existingItem = this.state.cart.find((item) => item.id === newItem.id);

    if (existingItem) {
      existingItem.quantity++;
      existingItem.totalPrice += newItem.price;
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
  render() {
    return (
      <div className="App">
        <HeaderDesktop quantity={this.state.quantity} />
        <ShopItemComponents
          lists={this.state.lists}
          AddToCart={this.onAddToCardHandler}
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
