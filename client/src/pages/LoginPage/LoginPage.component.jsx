import React from "react";
import "./LoginPage.style.scss";
import NavigationSection from "../../components/NavigationSection/NavigationSection.component";
import SectionTitle from "../../components/SectionTitle/SectionTitle.component";
import Button from "../../components/Button/Button.component";
import { useState } from "react";

function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // await auth.signInWithEmailAndPassword(email, password);

      // clear form
      setUser({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="LoginPage">
      <NavigationSection />
      <div className="container">
        <SectionTitle title="會員登入" />
        <div className="loginMethodsContainer">
          <div className="methodContainer">
            <h5 className="mt-5">歡迎回來</h5>
            <div className="form-row mt-4">
              <Button title="  快速登入" className="Button-facebook" />
            </div>

            <hr size="8px" align="center" width="100%" />

            <div className="form-row mt-4">
              <label>電子郵件</label>
              <input
                autoComplete="off"
                type="email"
                placeholder="請輸入您的email"
                name="email"
                value={user.email}
                onChange={(event) => handleChange(event)}
              />
            </div>

            <div className="form-row mt-4">
              <label>密碼</label>
              <input
                autoComplete="off"
                type="password"
                placeholder="請輸入您的密碼"
                name="password"
                value={user.password}
                onChange={(event) => handleChange(event)}
              />
            </div>

            <div className="form-row mt-4 mb-4 ">
              <Button
                title="會員登入"
                onClick={(event) => handleSubmit(event)}
              />
              <div className="checkboxes">
                <input type="checkbox" />
                <label>保持登入</label>
              </div>
            </div>
          </div>

          <div className="others mt-4">
            <span>
              <i className="fas fa-key"></i> 忘記密碼嗎？
            </span>
            <span>
              <i className="fas fa-user"></i> 註冊新會員
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
