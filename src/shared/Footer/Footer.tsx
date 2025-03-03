import React from "react";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img
          src="https://www.svgrepo.com/show/424923/protonmail-logo-privacy.svg"
          alt="Логотип"
          className="footer-logo"
        />
        <div className="footer-text">
          <p>© 2024. Все права защищены</p>
          <ul className="footer-links">
            <li>
              <a href="/terms">Условия использования</a>
            </li>
            <li>
              <a href="/privacy">Политика конфиденциальности</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
