import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HomeLink.module.css";

const HomeLink = () => {
    const login = false;
    return ( <div>


        { login ? 
            <div className={styles.menugrid}>
            {/** 로그인 했을때 보이는 화면, 단 관리자 페이지는 홈페이지 주인에게만 보이기  */}
            <Link> 포스트 </Link>
            <Link> 방명록 </Link>
            <Link> 마이페이지 </Link>
            <Link> 로그아웃 </Link>
            <Link> 관리자페이지 </Link>
            </div>
            :
            <div className={styles.menugrid}>
            {/** 로그인이 되지 않을 경우 보여줄 링크 */}
            <Link> 포스트 </Link>
            <Link> 방명록 </Link>
            <Link to ="/login"> 로그인 </Link>
            </div>
        }


        </div>
     );
}
 
export default HomeLink;