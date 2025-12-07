import Test1 from './images/test1.jpeg';
import Test2 from './images/test2.jpeg';
import Test3 from './images/test3.jpeg';
import Test4 from './images/test4.jpeg';

export default function Testimonials() {
    return(
        <>
        <section className='testimonials'>
          <div className='test'>
            <h2>Testimonials</h2>
          </div>
          <div className='cards-testimonial'>
            <div className='test-1'>
              <figcaption>Christine</figcaption>
              <img src={Test1} alt='user 1'/>
              <p>★★★★★</p>
              <h4><i>"Excellent food."</i></h4>
            </div>
            <div className='test-1'>
              <figcaption>Sara</figcaption>
              <img src={Test2} alt='user 2'/>
              <p>★★★★★</p>
              <h4><i>"Super service and food."</i></h4>
            </div>
            <div className='test-1'>
              <figcaption>Mathias</figcaption>
              <img src={Test3} alt='user 3'/>
              <p>★★★★★</p>
              <h4><i>"Amazing atmosphere"</i></h4>
            </div>
            <div className='test-1'>
              <figcaption>John</figcaption>
              <img src={Test4} alt='user 4'/>
              <p>★★★★★</p>
              <h4><i>"Perfect location"</i></h4>
            </div>
          </div>
        </section>
        <hr></hr>
        </>
    )
}