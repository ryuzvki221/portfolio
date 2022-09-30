const SocialShare = [
  {
    iconName: "fa-brands fa-facebook",
    link: "https://www.facebook.com/",
  },
  { iconName: "fa-brands fa-twitter", link: "https://twitter.com/" },
  {
    iconName: "fa-brands fa-youtube",
    link: "https://www.youtube.com/",
  },
  { iconName: "fa-brands fa-dribbble", link: "https://dribbble.com/" },
];

const Social = () => {
  return (
    <div className="about-social">
      {SocialShare.map((val, i) => {
        return (
          <a key={i} href={`${val.link}`} className="waves-effect  waves-light">
            <span className={`${val.iconName}`}></span>
          </a>
        );
      })}
    </div>
  );
};

export default Social;
