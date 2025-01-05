import RestaurantFood from './images/restauranfood.jpg';
import GreekSalad from './images/greekSalad.jpg';
import Bruschetta from './images/bruchetta.png';
import LemonDessert from './images/lemonDessert.jpg';
import Test1 from './images/test1.jpeg';
import Test2 from './images/test2.jpeg';
import Test3 from './images/test3.jpeg';
import Test4 from './images/test4.jpeg';


export default function Main() {
    return (
    <>
    <div className='banner'>
      <section className='description'>
        <h1 className='title'>Little Lemon</h1>
        <h2>Chicago</h2>
        <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</h3>
        <button>reserve a table</button>
      </section>
      <img className='b-img' src={RestaurantFood} alt='starter' />
    </div>
    <section className='weekSpecials'>
      <div className='firstPart'>
        <h2>This weeks specials!</h2>
        <button>online Menu</button>
      </div>
      <div className='cards'>
        <div className='card-1'>
          <img src={GreekSalad} alt='Greek Salad'/>
          <div className='dish'>
            <h3><b>Greek Salad <span>12,99 €</span></b></h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
            <h3><b>Order a delivery</b></h3>
          </div>
        </div>
        <div className='card-2'>
          <img src={Bruschetta} alt='Bruschetta'/>
          <div className='dish'>
            <h3><b>Bruschetta <span>12,99 €</span></b></h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
            <h3><b>Order a delivery</b></h3>
          </div>
        </div>
        <div className='card-3'>
          <img src={LemonDessert} alt='Lemon Dessert'/>
          <div className='dish'>
            <h3><b>Lemon Dessert <span>7,99 €</span></b></h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
            <h3><b>Order a delivery</b></h3>
          </div>
        </div>
      </div>
    </section>
    <section className='testimonials'>
      <h2>Testimonials</h2>
      <div className='cards-testimonial'>
        <div className='test1'>
          <h3>★★★★★</h3>
          <img src={Test1} alt='user 1'/>
          <figcaption>Christine</figcaption>
          <h4><i>"Excellent food."</i></h4>
        </div>
        <div className='test2'>
          <h3>★★★★★</h3>
          <img src={Test2} alt='user 2'/>
          <figcaption>Sara</figcaption>
          <h4><i>"Super service and food."</i></h4>
        </div>
        <div className='test3'>
          <h3>★★★★★</h3>
          <img src={Test3} alt='user 3'/>
          <figcaption>Mathias</figcaption>
          <h4><i>"Amazing atmosphere"</i></h4>
        </div>
        <div className='test4'>
          <h3>★★★★★</h3>
          <img src={Test4} alt='user 4'/>
          <figcaption>John</figcaption>
          <h4><i>"Perfect location"</i></h4>
        </div>
      </div>
    </section>
    <hr></hr>
    </>
    )
}