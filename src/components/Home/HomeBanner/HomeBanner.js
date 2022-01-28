import React from 'react';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div id='myCarousel' className='carousel slide' data-ride ="carousel">

        <ol className='carousel-indicators'>
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1" 
            aria-label="Slide 2"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></li>
        </ol>

    <div className='carousel-inner'>
   <div className='carousel-item active'>
        <div className='ovelay-img'>
        <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-slide1-bckg.jpg" class="d-block w-100" alt="..."></img>
        </div>
       <div className='carousel-text'>
           <h1>Travel The World</h1>
           <p>Visit our site, know about the world and explore the world</p>
       </div>
   </div>
   <div className='carousel-item'>
   <div className='ovelay-img'>
        <img src="https://demo.sociolib.com/track/wp-content/uploads/sites/4/2021/09/snrsbk.jpg" class="d-block w-100" alt="..."></img>
        </div>
       <div className='carousel-text'>
       <h1>Travel The World</h1>
           <p>Visit our site, know about the world and explore the world</p>
       </div>
   </div>
   <div className='carousel-item'>
   <div className='ovelay-img'>
        <img src="https://templatekit.jegtheme.com/travenu/wp-content/uploads/sites/22/2020/12/Image-527SAYS.jpg" class="d-block w-100" alt="..."></img>
        </div>
       <div className='carousel-text'>
        <h1>Travel The World</h1>
           <p>Visit our site, know about the world and explore the world</p>
       </div>
   </div>
   </div>

   <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
    </div>
    );
};

export default HomeBanner;