import { useEffect, useRef, useState } from "react";
import styles from "./Calendar.module.css";


const Clendar = () => {
    const [time, setTime] = useState(new Date());
    // 시계 내용을 출력하는 함수 : return 값으로 돌려줌 - 문자열 
    const printTime = ()=> {
        const hour = String(time.getHours()).padStart(2,"0");
        const min = String(time.getMinutes()).padStart(2,"0");
        const second = String(time.getSeconds()).padStart(2,"0");
        return  `${hour} : ${min} : ${second}` ;
      // 숫자를 문자로 바꿔서 문자 객체에 있는 0을 채우는 메소드 
    } 
    // 시간 출력을 위한 useEffect 
    useEffect(
        ()=>{
            setInterval(()=>{setTime(new Date())}, 1000)
        },[]);


    return ( <div>

     <div className={styles.nametitle}> <h2> Minji Kim </h2> </div>  
     <div>
         {time.getMonth()} / {time.getDate()} / {time.getFullYear()} <br />
        <p> 현재 시간 : {printTime()} </p>
    </div>

        <div>  {time.getFullYear()} </div>
        
    
   
    </div> );
}
 
export default Clendar;