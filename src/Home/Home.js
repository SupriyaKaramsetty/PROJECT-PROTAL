import  React, {UseState, Component} from 'react';
import styles from './Home.css';
import Carousel from "react-elastic-carousel";
import wall from '../assets/wallpaper.jpg';

const breakPoints = [
    {
        width:1,
        itemsToShow:2
    },
    {
        width:500,
        itemsToShow:6
    },
    {
        width:768,
        itemsToShow:8.5
    },
    {
        width:1200,
        itemsToShow:12
    }

];

const breakPoints2 = [
    {
        width:1,
        itemsToShow:1
    },
    {
        width:500,
        itemsToShow:1.25
    },
    {
        width:768,
        itemsToShow:1.75
    },
    {
        width:1200,
        itemsToShow:2.25
    }

];

const Home = () => {
    return(
       <div className="container">

           <Carousel breakPoints={breakPoints}
            >
            <img className={styles.status} src={wall} alt=""></img>
            <img className={styles.status} src={wall} alt=""></img>
            <img className={styles.status} src={wall} alt=""></img>
            <img className={styles.status} src={wall} alt=""></img>
            <img className={styles.status} src={wall} alt=""></img>
            <img className={styles.status} src={wall} alt=""></img>
            <img className={styles.status} src={wall} alt=""></img>
            <img className={styles.status} src={wall} alt=""></img>
            <img className={styles.status} src={wall} alt=""></img>
            <img className={styles.status} src={wall} alt=""></img>
            <img className={styles.status} src={wall} alt=""></img>
            <img className={styles.status} src={wall} alt=""></img>
           </Carousel>

           <div className={styles.talents}>
               
               <div className={styles.talents}>
                   <span className={styles.talentName}>Dance</span>
                   <Carousel breakPoints={breakPoints2}
                   infinite={true}>
                       <div className={styles.block}>
                            <img className={`${styles.photo1} ${styles.subblock}`} src={wall} alt=""></img>
                            <img className={styles.photo2} src={wall} alt=""></img>
                            <div className={styles.combined34}>
                                <img className={styles.photo3} src={wall} alt=""></img>
                                <img className={styles.photo4} src={wall} alt=""></img>
                            </div>
                       </div>
                       <div className={styles.block}>
                            <img className={`${styles.photo1} ${styles.subblock}`} src={wall} alt=""></img>
                            <img className={styles.photo2} src={wall} alt=""></img>
                            <div className={styles.combined34}>
                                <img className={styles.photo3} src={wall} alt=""></img>
                                <img className={styles.photo4} src={wall} alt=""></img>
                            </div>
                       </div>
                       <div className={styles.block}>
                            <img className={`${styles.photo1} ${styles.subblock}`} src={wall} alt=""></img>
                            <img className={styles.photo2} src={wall} alt=""></img>
                            <div className={styles.combined34}>
                                <img className={styles.photo3} src={wall} alt=""></img>
                                <img className={styles.photo4} src={wall} alt=""></img>
                            </div>
                       </div>
                   </Carousel>
                   
               </div>
               <div className={styles.talents}>
                    <span className={styles.talentName}>Music</span>
                    <Carousel breakPoints={breakPoints2}
                   infinite={true}>
                       <div className={styles.block}>
                            <img className={`${styles.photo1} ${styles.subblock}`} src={wall} alt=""></img>
                            <img className={styles.photo2} src={wall} alt=""></img>
                            <div className={styles.combined34}>
                                <img className={styles.photo3} src={wall} alt=""></img>
                                <img className={styles.photo4} src={wall} alt=""></img>
                            </div>
                       </div>
                       <div className={styles.block}>
                            <img className={`${styles.photo1} ${styles.subblock}`} src={wall} alt=""></img>
                            <img className={styles.photo2} src={wall} alt=""></img>
                            <div className={styles.combined34}>
                                <img className={styles.photo3} src={wall} alt=""></img>
                                <img className={styles.photo4} src={wall} alt=""></img>
                            </div>
                       </div>
                       <div className={styles.block}>
                            <img className={`${styles.photo1} ${styles.subblock}`} src={wall} alt=""></img>
                            <img className={styles.photo2} src={wall} alt=""></img>
                            <div className={styles.combined34}>
                                <img className={styles.photo3} src={wall} alt=""></img>
                                <img className={styles.photo4} src={wall} alt=""></img>
                            </div>
                       </div>
                   </Carousel>
               </div>
               <div className={styles.talents}>
                    <span className={styles.talentName}>Photography</span>
                    <Carousel breakPoints={breakPoints2}
                   infinite={true}>
                       <div className={styles.block}>
                            <img className={`${styles.photo1} ${styles.subblock}`} src={wall} alt=""></img>
                            <img className={styles.photo2} src={wall} alt=""></img>
                            <div className={styles.combined34}>
                                <img className={styles.photo3} src={wall} alt=""></img>
                                <img className={styles.photo4} src={wall} alt=""></img>
                            </div>
                       </div>
                       <div className={styles.block}>
                            <img className={`${styles.photo1} ${styles.subblock}`} src={wall} alt=""></img>
                            <img className={styles.photo2} src={wall} alt=""></img>
                            <div className={styles.combined34}>
                                <img className={styles.photo3} src={wall} alt=""></img>
                                <img className={styles.photo4} src={wall} alt=""></img>
                            </div>
                       </div>
                       <div className={styles.block}>
                            <img className={`${styles.photo1} ${styles.subblock}`} src={wall} alt=""></img>
                            <img className={styles.photo2} src={wall} alt=""></img>
                            <div className={styles.combined34}>
                                <img className={styles.photo3} src={wall} alt=""></img>
                                <img className={styles.photo4} src={wall} alt=""></img>
                            </div>
                       </div>
                   </Carousel>
               </div>


           </div>
      </div>
        
    );
}

export default Home;


