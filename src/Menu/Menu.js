import  React, {Component} from 'react';
import { withRouter,Link } from 'react-router-dom';
import styles from './Menu.css';


const activeLink = (history,path) =>{
    if(history.location.pathname==path){
        return {
            backgroundColor:"#808080"
        };
    }       
        else{
            return{
               backgroundColor:"#000000"
            }; 
    }
};

const Menu = (props) => {
    return(
        <div className={styles.navContainer}>
            <div className={styles.navlogo}>PROTAL</div>
            <div className={styles.navSearch}>
                <input type="text" value="Search"></input><ion-icon name="search-outline"></ion-icon>
            </div>
            <div className={styles.navIcons}>
                <Link to="/"><ion-icon style={activeLink(props.history,'/')} name="home-outline"></ion-icon></Link>
                <Link to="/home"><ion-icon style={activeLink(props.history,'/home')} name="trending-up-outline"></ion-icon></Link>
                <Link to="/profile"><ion-icon style={activeLink(props.history,'/profile')} name="person-outline"></ion-icon></Link>
                <Link to="/signup"><ion-icon style={activeLink(props.history,'/signup')}  name="settings-outline"></ion-icon></Link>
            </div>
        </div>  
    );
}

export default withRouter(Menu);