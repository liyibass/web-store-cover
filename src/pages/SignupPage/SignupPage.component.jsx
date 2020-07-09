import React from "react";
import "./SignupPage.style.scss";
import NavigationSection from "../../components/NavigationSection/NavigationSection.component";
import SectionTitle from "../../components/SectionTitle/SectionTitle.component";
import Button from "../../components/Button/Button.component";
import { useState } from "react";

function SignupPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    birthday: "",
    password: "",
    passwordVerify: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // await auth.signInWithEmailAndPassword(email, password);

      // clear form
      setUser({
        username: "",
        email: "",
        phone: "",
        birthday: "",
        password: "",
        passwordVerify: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="SignupPage">
      <NavigationSection />
      <div className="container">
        <SectionTitle title="註冊新帳號" />
        <div className="loginMethodsContainer">
          <div className="methodContainer">
            <h5 className="mt-5">歡迎加入會員</h5>
            <div className="form-row mt-4">
              <Button title="  快速註冊" className="Button-facebook" />
            </div>

            <hr size="8px" align="center" width="100%" />
            <h5 className="mt-5">電子郵件註冊</h5>

            <div className="form-row mt-4">
              <label>姓名*</label>
              <input
                autoComplete="off"
                type="text"
                placeholder="請輸入您的姓名"
                name="username"
                value={user.username}
                onChange={(event) => handleChange(event)}
              />
            </div>

            <div className="form-row mt-4">
              <label>電子郵件*</label>
              <input
                autoComplete="off"
                type="text"
                placeholder="請輸入您的email"
                name="email"
                value={user.email}
                onChange={(event) => handleChange(event)}
              />
            </div>

            <div className="form-row mt-4">
              <label>手機*</label>
              <input
                autoComplete="off"
                type="text"
                placeholder="請輸入您的手機"
                name="phone"
                value={user.phone}
                onChange={(event) => handleChange(event)}
              />
            </div>

            <div className="form-row mt-4">
              <label>生日</label>
              <input
                autoComplete="off"
                type="date"
                placeholder="請輸入您的生日"
                name="phone"
                value={user.birthday}
                onChange={(event) => handleChange(event)}
              />
            </div>

            <div className="form-row mt-4">
              <label>密碼*</label>
              <input
                autoComplete="off"
                type="password"
                placeholder="請輸入您的密碼"
                name="password"
                value={user.password}
                onChange={(event) => handleChange(event)}
              />
            </div>

            <div className="form-row mt-4">
              <label>密碼確認*</label>
              <input
                autoComplete="off"
                type="password"
                placeholder="再輸入一次密碼"
                name="passwordVerify"
                value={user.passwordVerify}
                onChange={(event) => handleChange(event)}
              />
            </div>

            <div className="form-row mt-4 mb-4 ">
              <Button
                title="加入會員"
                onClick={(event) => handleSubmit(event)}
              />
              <div className="checkboxes">
                <input type="checkbox" />
                <label>不訂閱電子報</label>
              </div>
            </div>
          </div>

          <div className="others mt-4">
            <span>
              <i className="fas fa-key"></i> 我已經有會員帳號了？回登入頁面
            </span>
            <span>
              了解 會員服務 註冊表示同意 隱私政策 與 會員責任規範及個資聲明
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
