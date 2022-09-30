const heroContent = {
  title: "",
  heroBg: "img/bg-1.jpg",
};

export default function Hero() {
  return (
    <>
      <div
        className="site-header top-section image-bg parallax-section top-section-single top-section-home"
        style={{
          backgroundImage: `url(${heroContent.heroBg})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay-section">
          {/* If title */}
          {heroContent.title && (
            <div className="container">
              <div class="row">
                <div class="col s12">
                  <div class="site-header-title">{heroContent.title}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
