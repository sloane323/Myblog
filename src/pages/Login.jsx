import styles from "./Login.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword , GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router";


const Login = () => {
    // 페이지를 이동하기 위한 Navigate();
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    //submit 
    const onsubmit = (e) => {
        e.preventDefault();
                emailLogin();
    }


    // 회원가입을 위한 함수 
    const emailCreateUser = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          alert("가입되었습니다")
        })
        .catch((error) => {
            if (error == "auth/email-already-in-use") {
                alert("이미 사용하고 있는 이메일 입니다.")
            }
            else if (error == "auth/weak-password") {
                alert("비밀번호를 6자리 이상으로 만드세요 ") }
        });
    }

    // 이메일과 비밀번호로 로그인하기 
    const emailLogin =() => {
        const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
          navigate('/')
  })
  .catch((error) => {
        console.log("오류")
  }); }

  const googleLogin = (e) => {
    const Provider = new  GoogleAuthProvider();
    e.preventDefault();
    const auth = getAuth();
    signInWithPopup(auth, Provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("가입완료")
    console.log(user);
    navigate('/')
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("가입실패")
  });
  }

    return ( <div  className={styles.loginwrap}>
        <h3> 로그인 </h3>
<div>
        <Form onSubmit={onsubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이메일</Form.Label>
        <Form.Control
        onClick={(e)=>{setEmail(e.target.value)}}
        type="email" placeholder="가입한 이메일을 입력해주세요" />
        <Form.Text className="text-muted">
         이메일과 비빌번호는 다른 사람에게 공유하지 마세요 
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control
         onClick={(e)=>{setPassword(e.target.value)}}
        type="password" placeholder="본인의 비밀번호를 입력해주세요" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        로그인 
      </Button>   
    </Form>
    <Button onClick={emailCreateUser} variant="primary" type="button">
      위 이메일과 비밀번호로 회원가입
      </Button>
      <br />
      <Button variant="primary" type="button" onClick={googleLogin}>
      구글로 로그인
      </Button>
    </div>

    </div> );
}
 
export default Login;