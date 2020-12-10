import styles from './Signup.css';
import React,{Component} from 'react';

const Signup = () => {
    return(
        <div className={`container-fluid  ${styles.bg}`}>
            <div className={styles.leftalign}>
                <h3><span><b className={styles.bold}>Pro</b></span>ducing<span><b className={`${styles.bold} ${styles.titlespace}`}>Tal</b></span>ents</h3>
            
            <div className={styles.tag}>Join the new talent community</div>
            <span>
            <button type="submit" className={`btn  btn-sm ${styles.login}`}>Login</button>
            <button type="submit" className={`btn  btn-sm ${styles.signup}`}>Sign Up</button>
            </span>
            <form>
                <input type="text"  name="name" className={styles.formalign}/><label className={styles.adjustment}>Name</label> <br></br>
                <input type="email" name="email" className={styles.formalign}/><label className={styles.adjustment1}>Email id</label> <br></br>
                <input type="password" name="password" className={styles.formalign}/><label>Password</label> <br></br>
                <button className={styles.submit}>Next</button>
            </form>
            </div>
        </div>
    );
};
export default Signup;
