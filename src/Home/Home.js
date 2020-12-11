import  React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './Home.css';
import Carousel from 'react-grid-carousel'


const Home = () => {
    return(
        <BrowserRouter>
         <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
        </BrowserRouter>
    );
}

export default Home;
