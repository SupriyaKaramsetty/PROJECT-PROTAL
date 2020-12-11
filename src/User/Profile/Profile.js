import  React, {Component} from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import styles from './Profile.css';
import wallpaper from '../../assets/wallpaper.jpg';
import dp from '../../assets/dp.jpg';
import dish1 from '../../assets/dish1.jpg';
import dish2 from '../../assets/dish2.jpg';
import dish3 from '../../assets/dish3.jpg';
import dish4 from '../../assets/dish4.jpg';
import dish5 from '../../assets/dish5.jpg';
import dish6 from '../../assets/dish6.jpg';
import dish7 from '../../assets/dish7.jpg';
import dish8 from '../../assets/dish8.jpg';
import dish9 from '../../assets/dish9.jpg';

const Profile = () => {
    return(
        <BrowserRouter>
        <div className={styles.profileContainer}>
            <div className={styles.accountOptions}>
                <div className={styles.profileDp}></div>
                <div className={styles.name}>
                <p>Becky Helen<br></br>
                 <small>Mexican Chef</small> 
                 </p>
                </div>
                <div className={styles.Icons}>
                    <Link to="/profile"><ion-icon name="person-outline"></ion-icon></Link>
                    <Link to="/profile"><ion-icon name="reload-circle-outline"></ion-icon></Link>
                    <Link to="/profile"><ion-icon name="briefcase-outline"></ion-icon></Link>                    
                    <Link to="/profile"><ion-icon name="calendar-outline"></ion-icon></Link>
                </div>
            </div>
            <div className={styles.profileAccount}>
                <img className={styles.wallpaper} src={wallpaper} alt=""></img>
                <div className={styles.likes}>
                     <p>100<br></br>Uploads<br></br><ion-icon name="heart-outline"></ion-icon></p>
                     <p>100<br></br> Buzzes<br></br><ion-icon name="heart-outline"></ion-icon></p>
                     <p>100<br></br>Followers<br></br><ion-icon name="heart-outline"></ion-icon></p>
                </div>
                <div className={styles.posts}>
                    
                    <img src={dish1} alt=""></img>
                    <img src={dish2} alt=""></img>
                    <img src={dish3} alt=""></img>
                    <img src={dish4} alt=""></img>
                    <img src={dish5} alt=""></img>
                    <img src={dish6} alt=""></img>
                    <img src={dish7} alt=""></img>
                    <img src={dish8} alt=""></img>
                    <img src={dish9} alt=""></img>
                    
                </div>
            </div>
            


























{/* 
            <div className="col-4">
            <div className={styles.circle}></div>
            <p>Becky Helen</p>
            <small>Mexican Chef</small>
            </div>
            <div className={styles.verticalline}></div>
            <div className="col-8">
                <div className="row">
                    <img  height="100%" width="100%" className={styles.wallpaper} src={Wallpapar}></img>
                </div>
                <div className="row">
                <div className="col-md-2">

                    </div>
                    <div className={`col-md-3 ${styles.uploads}`}>
                        <p>100<br></br>Uploads</p>
                       
                    </div>
                    <div className={`col-md-4 ${styles.buzzes}`}>
                        <p>100<br></br> Buzzes</p>
                        
                    </div>
                    <div className={`col-md-3 ${styles.followers}`}>
                        <p>100<br></br>Followers</p>
                    </div>
                    </div>
                
            
           
            <div className="row">
                <div className="col-md-4">
                    <img className={`${styles.imageresize} ${styles.imageresponsive}`} src={wallpaper} ></img>
                </div>
                <div className="col-md-4">
                    <img className={`${styles.imageresize} ${styles.imageresponsive}`} src={wallpaper} ></img>
                </div>
                <div className="col-md-4">
                    <img className={`${styles.imageresize} ${styles.imageresponsive}`} src={wallpaper} ></img>
                </div>
                <div className="col-md-4">
                    <img className={`${styles.imageresize} ${styles.imageresponsive}`} src={wallpaper} ></img>
                </div>
                <div className="col-md-4">
                    <img className={`${styles.imageresize} ${styles.imageresponsive}`} src={wallpaper} ></img>
                </div>
                <div className="col-md-4">
                    <img className={`${styles.imageresize} ${styles.imageresponsive}`} src={wallpaper} ></img>
                </div>
                

                </div>
            </div> */}

        </div>
        
        </BrowserRouter>
        
    );
}

export default Profile;