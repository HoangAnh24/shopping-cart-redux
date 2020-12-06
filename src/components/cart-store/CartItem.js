import React, { Component } from "react";
import * as Message from './../../constants/Message';
class CartItem extends Component {
  render() {
    let { item } = this.props;
    let { quantity } = item;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light"
              onClick={ () => this.onUpdateQuantity(item.product, item.quantity - 1) }
            >
              <a href="#/">—</a>
            </label>
            <label
              className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light"
                                        onClick={ () => this.onUpdateQuantity(item.product, item.quantity + 1) }
            >
              <a href="#/">+</a>
            </label>
          </div>
        </td>
        <td>{ this.showSubTotals(item.product.price, item.quantity) }$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={ () => this.onDeleteItem(item.product) }
          >
            X
          </button>
        </td>
      </tr>
    );
  }

  onUpdateQuantity = (product, quantity) => {
    if (quantity > 0) {
      let { onUpdateProductInCart, onChangeMessage } = this.props;
      onUpdateProductInCart(product, quantity);
      onChangeMessage(Message.MSG_UPDATE_TO_CART_SUCCSES);
    }
  }

  showSubTotals = (price, quantity) => {
    return (price * quantity);
  }

  onDeleteItem = (product) => {
    let { onDeleteProductInCart, onChangeMessage } = this.props;
    onDeleteProductInCart(product);
    onChangeMessage(Message.MSG_DELLETE_TO_CART_SUCCSES);
  }
}

export default CartItem;
