import React, { Component } from "react";

class Product extends Component {
  render() {
    let {product} = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img
              src={product.image}
              className="img-fluid"
              alt={product.image}
            />
            <a href="#/">
              <div className="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a href="#/">{product.name}</a>
              </strong>
            </h4>

            <ul className="rating">
                {this.showRating(product.rating)}
            </ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <a
                  href="#/"
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                  onClick={() => this.onAddToCart(product)}
                >
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  showRating(rating) {
    let result = [];
    for(let i = 1; i <= rating;i++) {
      result.push(
        <li>
          <i className="fa fa-star"></i>
        </li>
      );
    }
    for(let j = 1; j <= (5 - rating);j++) {
      result.push(
        <li>
          <i className="fa fa-star-o"></i>
        </li>
      );
    }
    return (result);
  }

  onAddToCart = (product) => {
    this.props.onAddToCart(product);
  }
}

export default Product;
