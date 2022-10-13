import React from "react";

export default function Blog() {
  return (
    <>
      <section id={"blog-section"} className="section blog-section ">
        <div className="container">
          <div className="row">
            <div className="col s12 section-title">
              <h2>{"Blog"}</h2>
            </div>
            <div className="col s12 masonry pd-50 al-center">
                {"Coming Soon".toUpperCase()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
