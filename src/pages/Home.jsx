import Calendar from "../componemts/Calendar";
import Slick from "../componemts/Slick";
import Words from "../componemts/Words";
import styles from "./Home.module.css";

const Home = () => {
    // 글귀에 명언 삽입 
   
    return ( 
    <div className={styles.homebox}>
        <Calendar /> <hr />
        <Words />
       <div className="slicktable"> <Slick /> </div>


    </div> );
}
 
export default Home;