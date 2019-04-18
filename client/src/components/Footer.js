import React from "react";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="page-footer footerContainer">

            <div className="footer-copyright">
                <div className="container">
                    <div id="footerText">
                        <p>
                            © 2019 Google Books Search
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;