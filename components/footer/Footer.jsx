import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const menuItems = document.querySelectorAll(".icon-box");
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    return false;
  };
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col s12 back-to-top-wrapper">
              <a
                className="btn-circle waves-effect back-to-top tooltipped animatescroll-link animated"
                data-aos={"zoom-in"}
                data-position="top"
                data-delay="50"
                data-tooltip="Go To Top"
                href="#"
                onClick={scrollToTop}
              >
                <span className="fa fa-angle-up"></span>
              </a>
              <div className="copyright-text">© All rights Reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
