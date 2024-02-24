import "./card.css";
import deskImg from "/images/image-product-desktop.jpg";
import MobImg from "/images/image-product-mobile.jpg";
import iconImg from "/images/icon-cart.svg";

export default function Card() {
  return (
    <>
      <div className="main_container">
        <div className="cont">
          <div className="left">
            <img className="desk" src={deskImg} alt="Product Image" />
            <img className="mob" src={MobImg} alt="Product Image" />
          </div>
          <div className="right">
            <h2>PERFUME</h2>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="price">
              <p>$149.99</p>
              <span>$169.99</span>
            </div>
            <div className="btn">
              <div className="add">
                <img src={iconImg} alt="icon" />
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
