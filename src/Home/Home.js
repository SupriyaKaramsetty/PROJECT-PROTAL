import  React, {UseState, Component} from 'react';
import styles from './Home.css';
import Carousel from "react-elastic-carousel";
import status from '../assets/status.jpg';
import dancephoto1 from '../assets/dance-photo1.jpg';
import dancephoto2 from '../assets/dance-photo2.jpg';
import dancephoto3 from '../assets/dance-photo3.jpg';
import dancephoto4 from '../assets/dance-photo4.jpg';
import musicphoto from '../assets/music-photo.jpg';
import musicphoto1 from '../assets/music-photo1.jpg';
import musicphoto2 from '../assets/music-photo2.jpg';
import musicphoto3 from '../assets/music-photo3.jpg';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
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
            <img className={styles.status} src={status} alt=""></img>
            <img className={styles.status} src={status} alt=""></img>
            <img className={styles.status} src={status} alt=""></img>
            <img className={styles.status} src={status} alt=""></img>
            <img className={styles.status} src={status} alt=""></img>
            <img className={styles.status} src={status} alt=""></img>
            <img className={styles.status} src={status} alt=""></img>
            <img className={styles.status} src={status} alt=""></img>
            <img className={styles.status} src={status} alt=""></img>
            <img className={styles.status} src={status} alt=""></img>
            <img className={styles.status} src={status} alt=""></img>
            <img className={styles.status} src={status} alt=""></img>
           </Carousel>

           <div className={styles.talents}>
               
               <div className={styles.talents}>
                   <span className={styles.talentName}>Dance</span>
                   <Carousel breakPoints={breakPoints2}
                   infinite={true}>
                       <div className={styles.block}>
                            <img className={`${styles.photo1} ${styles.subblock}`} src={dancephoto1} alt=""></img>
                            <img className={styles.photo2} src={dancephoto2} alt=""></img>
                            <div className={styles.combined34}>
                                <img className={styles.photo3} src={dancephoto3} alt=""></img>
                                <img className={styles.photo4} src={dancephoto4} alt=""></img>
                            </div>
                       </div>
                       <div className={styles.block}>
                            <img className={`${styles.photo1} ${styles.subblock}`} src={dancephoto1} alt=""></img>
                            <img className={styles.photo2} src={dancephoto2} alt=""></img>
                            <div className={styles.combined34}>
                                <img className={styles.photo3} src={dancephoto3} alt=""></img>
                                <img className={styles.photo4} src={dancephoto4} alt=""></img>
                            </div>
                       </div>
                       <div className={styles.block}>
                            <img className={`${styles.photo1} ${styles.subblock}`} src={dancephoto1} alt=""></img>
                            <img className={styles.photo2} src={dancephoto2} alt=""></img>
                            <div className={styles.combined34}>
                                <img className={styles.photo3} src={dancephoto3} alt=""></img>
                                <img className={styles.photo4} src={dancephoto4} alt=""></img>
                            </div>
                       </div>
                   </Carousel>
                   
               </div>
               <div className={styles.talents}>
                    <span className={styles.talentName}>Music</span>
                    <Carousel breakPoints={breakPoints2}
                   infinite={true}>
                       <div className={styles.block}>
                            <img className={`${styles.photo1} ${styles.subblock}`} src={musicphoto} alt=""></img>
                            <img className={styles.photo2} src={musicphoto1} alt=""></img>
                            <div className={styles.combined34}>
                                <img className={styles.photo3} src={musicphoto2} alt=""></img>
                                <img className={styles.photo4} src={musicphoto3} alt=""></img>
                            </div>
                       </div>
                       <div className={styles.block}>
                            <img className={`${styles.photo1} ${styles.subblock}`} src={musicphoto} alt=""></img>
                            <img className={styles.photo2} src={musicphoto1} alt=""></img>
                            <div className={styles.combined34}>
                                <img className={styles.photo3} src={musicphoto2} alt=""></img>
                                <img className={styles.photo4} src={musicphoto3} alt=""></img>
                            </div>
                       </div>
                       <div className={styles.block}>
                            <img className={`${styles.photo1} ${styles.subblock}`} src={musicphoto} alt=""></img>
                            <img className={styles.photo2} src={musicphoto1} alt=""></img>
                            <div className={styles.combined34}>
                                <img className={styles.photo3} src={musicphoto2} alt=""></img>
                                <img className={styles.photo4} src={musicphoto3} alt=""></img>
                            </div>
                       </div>
                   </Carousel>
               </div>
               <div className={styles.talents}>
                    <span className={styles.talentName}>Photography</span>
                    <Carousel breakPoints={breakPoints2}
                   infinite={true}>
                       <div className={styles.block}>
                            <img className={`${styles.photo1} ${styles.subblock}`} src={photo1} alt=""></img>
                            <img className={styles.photo2} src={photo2} alt=""></img>
                            <div className={styles.combined34}>
                                <img className={styles.photo3} src={photo3} alt=""></img>
                                <img className={styles.photo4} src={photo4} alt=""></img>
                            </div>
                       </div>
                       <div className={styles.block}>
                            <img className={`${styles.photo1} ${styles.subblock}`} src={photo1} alt=""></img>
                            <img className={styles.photo2} src={photo2} alt=""></img>
                            <div className={styles.combined34}>
                                <img className={styles.photo3} src={photo3} alt=""></img>
                                <img className={styles.photo4} src={photo4} alt=""></img>
                            </div>
                       </div>
                       <div className={styles.block}>
                            <img className={`${styles.photo1} ${styles.subblock}`} src={photo1} alt=""></img>
                            <img className={styles.photo2} src={photo2} alt=""></img>
                            <div className={styles.combined34}>
                                <img className={styles.photo3} src={photo3} alt=""></img>
                                <img className={styles.photo4} src={photo4} alt=""></img>
                            </div>
                       </div>
                   </Carousel>
               </div>


           </div>
      </div>
        
    );
}

export default Home;


