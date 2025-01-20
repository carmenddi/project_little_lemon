import GreekSalad from './images/greekSalad.jpg';
import Bruschetta from './images/bruchetta.png';
import LemonDessert from './images/lemonDessert.jpg';

export default function Special() {
    return (
        <>
          <section className='weekSpecials'>
            <div className='specials'>
              <h2>This weeks specials!</h2>
              <button><a href='./Order'>online Menu</a></button>
            </div>
            <div className='cards'>
              <div className='card-1'>
                <img src={GreekSalad} alt='Greek Salad'/>
                <div className='dish'>
                  <h3><b>Greek Salad <span>12,99 €</span></b></h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                  <a href='./Order'><h3><b>Order a delivery</b></h3></a>
                </div>
              </div>
              <div className='card-2'>
                <img src={Bruschetta} alt='Bruschetta'/>
                <div className='dish'>
                  <h3><b>Bruschetta <span>12,99 €</span></b></h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                  <a href='./Order'><h3><b>Order a delivery</b></h3></a>
                </div>
              </div>
              <div className='card-3'>
                <img src={LemonDessert} alt='Lemon Dessert'/>
                <div className='dish'>
                  <h3><b>Lemon Dessert <span>7,99 €</span></b></h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                  <a href='./Order'><h3><b>Order a delivery</b></h3></a>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}