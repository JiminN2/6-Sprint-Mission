import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/style_signup.module.css";

const SignupPage = () => {
  return (
    <div>
      <Head>
        <title>로그인 판다마켓</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href={normalize} />
        <link rel="stylesheet" href={styles} />
      </Head>
      <div className={styles.header}>
        <img id="logo" src="Image/판다 얼굴@3x.png" />
        <a href="/">
          <div className={styles.name}>판다마켓</div>
        </a>
      </div>
      <div className={styles.container}>
        <div className={styles.input}>
          <label htmlFor="email_input">이메일</label>
          <input
            type="text"
            id="email_input"
            name="email_input"
            placeholder="이메일을 입력해 주세요"
            required
          />
          <p id="emailErrorMessage" className={styles.error_message}>
            잘못된 이메일 형식입니다
          </p>
        </div>
        <div className={styles.input}>
          <label htmlFor="nickname_input">닉네임</label>
          <input
            type="text"
            id="nickname"
            name="nickname_input"
            placeholder="닉네임을 입력해 주세요"
            required
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="pw_input">비밀번호</label>
          <div className={styles.input_wrapper}>
            <input
              type="password"
              id="pw_input"
              className={styles.pw_input}
              placeholder="비밀번호를 입력하세요"
              required
            />
            <img
              src="Image/btn_visibility_off.png"
              alt="비밀번호 숨김"
              className={styles.toggle_password}
            />
          </div>
          <p id="passwordErrorMessage" className={styles.error_message}>
            비밀번호를 8자 이상 입력해주세요
          </p>
        </div>
        <div className={styles.input}>
          <label htmlFor="pw_input2">비밀번호 확인</label>
          <input
            type="password"
            id="pw_input2"
            name="pw_input_verify"
            placeholder="비밀번호를 다시 한 번 입력해 주세요"
            required
          />
          <p id="passwordMismatchError" className={styles.error_message}>
            비밀번호가 일치하지 않습니다
          </p>
        </div>
        <div className={styles.signupButton}>회원가입</div>
        <div className={styles.easyloginbox}>
          <div className={styles.easylogin}>간편 로그인하기</div>
          <div className={styles.image}>
            <a href="https://www.google.com/">
              <img src="Image/google.png" />
            </a>
            <a href="https://www.kakaocorp.com/page/">
              <img src="Image/kakao.png" />
            </a>
          </div>
        </div>
        <div className={styles.auth_switch}>
          <span className={styles.p}>이미 회원이신가요?</span>
          <a href="login.html">로그인</a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

// 로그인 성공 시 실행되는 함수
function handleLogin(accessToken) {
  localStorage.setItem("accessToken", accessToken);
}
