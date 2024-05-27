import React from "react";
import "./Menu.css";
import lemondessert from "../../assets/images/lemondessert.jpg";
import greeksalad from "../../assets/images/greeksalad.jpg";
import bruchetta from "../../assets/images/bruchetta.svg";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-heading">
        <h1>This weeks Specials</h1>
        <button>Online Menu</button>
      </div>

      <section>
        <article>
          <img src={greeksalad} alt="" />

          <div className="menu-name">
            <h4>Greek Salad</h4>
            <h6>$2</h6>
          </div>
          <p>
            Imagine a tall glass goblet overflowing with scoops of your favorite
            ice cream flavors. Rich chocolate, swirls of strawberry, and flecks
            of vanilla bean peek out from beneath a mountain of whipped cream.
          </p>
        </article>
        <article>
          <img src={bruchetta} alt="" />
          <div className="menu-name">
            <h4>Bruchetta</h4>
            <h6>$3.14</h6>
          </div>

          <p>
            Imagine a tall glass goblet overflowing with scoops of your favorite
            ice cream flavors. Rich chocolate, swirls of strawberry, and flecks
            of vanilla bean peek out from beneath a mountain of whipped cream.=
          </p>
        </article>
        <article>
          <img src={lemondessert} alt="" />

          <div className="menu-name">
            <h4>Lemon Dessert</h4>
            <h6>$2.44</h6>
          </div>
          <p>
            Imagine a tall glass goblet overflowing with scoops of your favorite
            ice cream flavors. Rich chocolate, swirls of strawberry, and flecks
            of vanilla bean peek out from beneath a mountain of whipped cream.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Menu;
