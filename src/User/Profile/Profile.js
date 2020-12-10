import  React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './Profile.css';
import wallpaper from '../../assets/wallpaper.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Wallpapar from '../../assets/profile.jpg';

const Profile = () => {
    return(
        <BrowserRouter>
        <div className="container row">
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
                        {/* <FontAwesomeIcon icon={faCoffee} />
                        <FontAwesomeIcon icon={faHeart} />
                        <span className="fa-stack fa-lg">
                        <i className="fa fa-rectangle-o fa-stack-2x"></i>
                        <i className="fa fa-heart-o fa-stack-1x" style={{fontSize:"30px"}}></i>
                        </span> */}
                    </div>
                    <div className={`col-md-4 ${styles.buzzes}`}>
                        <p>100<br></br> Buzzes</p>
                        {/* <span className="fa-stack fa-lg">
                            <i className="fa fa-square-thin fa-stack-2x"></i>
                            <i className="fa fa-twitter fa-stack-1x"></i>
                        </span> */}
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
            </div>

        </div>
        
        </BrowserRouter>
        
    );
}

export default Profile;