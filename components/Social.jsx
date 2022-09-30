const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/",
  },
  { iconName: "fa fa-twitter", link: "https://twitter.com/" },
  {
    iconName: "fa fa-youtube",
    link: "https://www.youtube.com/",
  },
  { iconName: "fa fa-dribbble", link: "https://dribbble.com/" },
];

const Social = () => {
  return (
    <div className="about-social">
      {SocialShare.map((val, i) => {
        return (
          <a key={i} href={`${val.link}`}>
            <i className={`${val.iconName}`}></i>
          </a>
        );
      })}
    </div>
  );
};

export default Social;
