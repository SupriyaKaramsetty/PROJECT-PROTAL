import React, { Component } from 'react'
import styles from './Home.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import wall from '../assets/wallpaper.jpg';

class Home extends Component {
    state = {  }
    render() { 
        const responsive1 = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 10
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 9
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 6
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 2
            }
          };
          const responsive2 = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 2.5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 2
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 0.5,
            }
          };
          
          

        return ( 
            // <div className={styles.homebody}>
            //     <div className={styles.homeroundcarousel}>
            //     <Carousel responsive={responsive1}
            //         autoPlay={this.props.deviceType !== "mobile" ? true : false}
            //         autoPlaySpeed={1000}
            //         infinite={true}                
            //     >
            //         <img src={wall} width="100px" height="100px" alt="" />
            //         <img src={wall} width="100px" height="100px" alt=""  />
            //         <img src={wall} width="100px" height="100px" alt=""  />
            //         <img src={wall} width="100px" height="100px" alt=""  />
            //         <img src={wall} width="100px" height="100px" alt=""  />
            //         <img src={wall} width="100px" height="100px" alt=""  />
            //         <img src={wall} width="100px" height="100px" alt=""  />
            //         <img src={wall} width="100px" height="100px" alt=""  />
            //         <img src={wall} width="100px" height="100px" alt=""  />
            //         <img src={wall} width="100px" height="100px" alt=""  />
            //         <img src={wall} width="100px" height="100px" alt=""  />
            //         <img src={wall} width="100px" height="100px" alt=""  />            
            //     </Carousel>
            //     </div>
            <div>
                hi

                {/* <div className={styles.homeelements}>
                    <p className={styles.homeheadings}>Dance</p>
                    <Carousel responsive={responsive2}
                    swipeable={true}                 
                    infinite={true} 
                    partialVisbile={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}               
                    >
                        <div className={styles.homegrid}>
                            <img className={styles.homeimg1} src={wall} alt=""   />
                            <img className={styles.homeimg2} src={wall} alt=""  />
                            <div className={styles.homeimg34}>
                                <img className={styles.homeimg3} src={wall} alt=""   />
                                <img className={styles.homeimg4} src={wall} alt=""   />
                            </div>
                        </div>
                        <div className={styles.homegrid}>
                            <img className={styles.homeimg1} src={wall} alt=""   />
                            <img className={styles.homeimg2} src={wall} alt=""  />
                            <div className={styles.homeimg34}>
                                <img className={styles.homeimg3} src={wall} alt=""   />
                                <img className={styles.homeimg4} src={wall} alt=""   />
                            </div>
                        </div>
                        <div className={styles.homegrid}>
                            <img className={styles.homeimg1} src={wall} alt=""   />
                            <img className={styles.homeimg2} src={wall} alt=""  />
                            <div className={styles.homeimg34}>
                                <img className={styles.homeimg3} src={wall} alt=""   />
                                <img className={styles.homeimg4} src={wall} alt=""   />
                            </div>
                        </div>
                                               
                    
                    </Carousel>
                </div>
                <div className={styles.homeelements}>
                    <p className={styles.homeheadings}>Music</p>
                    <Carousel responsive={responsive2}
                    swipeable={true}                 
                    infinite={true} 
                    partialVisbile={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}               
                    >
                        <div className={styles.homegrid}>
                            <img className={styles.homeimg1} src={wall} alt=""   />
                            <img className={styles.homeimg2} src={wall} alt=""  />
                            <div className={styles.homeimg34}>
                                <img className={styles.homeimg3} src={wall} alt=""   />
                                <img className={styles.homeimg4} src={wall} alt=""   />
                            </div>
                        </div>
                        <div className={styles.homegrid}>
                            <img className={styles.homeimg1} src={wall} alt=""   />
                            <img className={styles.homeimg2} src={wall} alt=""  />
                            <div className={styles.homeimg34}>
                                <img className={styles.homeimg3} src={wall} alt=""   />
                                <img className={styles.homeimg4} src={wall} alt=""   />
                            </div>
                        </div>
                        <div className={styles.homegrid}>
                            <img className={styles.homeimg1} src={wall} alt=""   />
                            <img className={styles.homeimg2} src={wall} alt=""  />
                            <div className={styles.homeimg34}>
                                <img className={styles.homeimg3} src={wall} alt=""   />
                                <img className={styles.homeimg4} src={wall} alt=""   />
                            </div>
                        </div>
                                               
                    
                    </Carousel>
                </div>
                <div className={styles.homeelements}>
                    <p className={styles.homeheadings}>Photography</p>
                    <Carousel responsive={responsive2}
                    swipeable={true}                 
                    infinite={true} 
                    partialVisbile={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}               
                    >
                        <div className={styles.homegrid}>
                            <img className={styles.homeimg1} src={wall} alt=""   />
                            <img className={styles.homeimg2} src={wall} alt=""  />
                            <div className={styles.homeimg34}>
                                <img className={styles.homeimg3} src={wall} alt=""   />
                                <img className={styles.homeimg4} src={wall} alt=""   />
                            </div>
                        </div>
                        <div className={styles.homegrid}>
                            <img className={styles.homeimg1} src={wall} alt=""   />
                            <img className={styles.homeimg2} src={wall} alt=""  />
                            <div className={styles.homeimg34}>
                                <img className={styles.homeimg3} src={wall} alt=""   />
                                <img className={styles.homeimg4} src={wall} alt=""   />
                            </div>
                        </div>
                        <div className={styles.homegrid}>
                            <img className={styles.homeimg1} src={wall} alt=""   />
                            <img className={styles.homeimg2} src={wall} alt=""  />
                            <div className={styles.homeimg34}>
                                <img className={styles.homeimg3} src={wall} alt=""   />
                                <img className={styles.homeimg4} src={wall} alt=""   />
                            </div>
                        </div>

                    </Carousel>
                </div> */}
            </div>
         );
    }
}
export default Home;
 
