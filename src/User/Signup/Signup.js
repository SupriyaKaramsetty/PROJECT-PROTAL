import styles from './Signup.css';
import React from 'react';

const Signup = () => {
    return(
        <div className={`container-fluid  ${styles.bg}`}>
            <div className={styles.signupContainer}>
                <h3><b>Pro</b>ducing <b>Tal</b>ents</h3>
            
            <div className={styles.tag}>Join the new talent community</div>
            <span>
            <button type="submit" className={`btn  btn-sm ${styles.login}`}>Login</button>
            <button type="submit" className={`btn  btn-sm ${styles.signup}`}>Sign Up</button>
            </span>
            <form>
               <div className={styles.signupData}>
                   <input type="text"  name="name" className={styles.inputfield}/>
                   <label className={styles.inputname}>Name</label><br></br>
                  
                   <input type="email" name="email" className={styles.inputfield}/>
                   <label className={styles.inputname}>Email id</label><br></br>
                   
               <input type="password" name="password" className={styles.inputfield}/>
               <label className={styles.inputname}>Password</label><br></br> 
               </div>
                <button className={styles.next}>Next</button>
            </form>
            </div>
        </div>
    );
};
export default Signup;
