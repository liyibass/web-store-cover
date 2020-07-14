import React from "react";
import "./Footer.style.scss";

function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="logo-section footer-section">
          <div className="logoSection">
            <a href="/">
              <i className="far fa-eye "></i>
            </a>
          </div>
        </div>
        <div className="aboutUs-section footer-section">
          <h5>關於我們</h5>
          <hr size="8px" align="center" width="100%" />
          <ul>
            <li>
              <i className="fas fa-phone"></i>(02)0000-0000
            </li>
            <li>
              <i className="fas fa-envelope"></i>xmage211120@gmail.com
            </li>
            <li>
              <i className="fas fa-clock"></i>每日 09:30~18:00
              台北市信義區光復南路133號
            </li>
          </ul>
        </div>
        <div className="link-section footer-section">
          {" "}
          <h5>相關連結</h5>
          <hr size="8px" align="center" width="100%" />
          <ul>
            <li>會員辦法</li>
            <li>購物須知及退換貨政策</li>
            <li>港澳購物及運送費用</li>
            <li>隱私政策</li>
            <li>松菸口</li>
          </ul>
        </div>
        <div className="empty-section footer-section"></div>
        <div className="facebook-section footer-section">
          <div
            className="fb-page"
            data-href="https://www.facebook.com/react/"
            data-tabs=""
            data-width=""
            data-height=""
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/react/"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/react/">React</a>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
