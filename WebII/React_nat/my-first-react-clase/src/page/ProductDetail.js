import "../styles/product_details.css";
import Verification from "../components/Verification";

const ProductDetails = () => {
  
  Verification()

  return (
    <div className="page-container">
      <div className="product-details-page-container">
        <div className="product-image-container">
          <img src="https://imgs.search.brave.com/ti7F41pW3oNrqH6FqBXQEqUEzFDnl1Wf-F8YtVViYTU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1hZ2Vz/L2luZGV4L3Byb2R1/Y3QtaW1hZ2Utb25l/LndlYnA"></img>
        </div>

        <div className="product-details-container">
          <div className="toast-bar">
            <p>
              Home -  Products  -  Sneakers
            </p>
          </div>
          <div className="product-info">
            <h4>Nike Air Zoom Pegasus 38 for Running Men</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="product-highlights">
            <h5>Highlights:</h5>
            <ul>
              <li>Lightweight and Responsive Midsole.</li>
              <li>Full-Lenght Zoom Air Unit.</li>
              <li>Breathable Mesh Uppe.</li>
            </ul>
          </div>
          <div className="product-specifications">
            <table>
              <tr>
                <th>Color</th>
                <th>Size</th>
              </tr>
              <tr>
                <td><b>Black</b></td>
                <td><b>42</b></td>
              </tr>
            </table>
            <h5>$59.00</h5>
          </div>
          <div className="product-buttons">
            <button id="add-to-cart-button">Add to cart</button>
            <button id="add-to-wishlist-button">💖 Add to wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;