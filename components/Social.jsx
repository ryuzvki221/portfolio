const SocialShare = [
  {
    iconName: "fa-brands fa-github",
    link: "https://github.com/ryuzvki221/",
  },
  {
    iconName: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/ryuzvki/",
  },
  { 
    iconName: "fa-brands fa-twitter", 
    link: "https://twitter.com/ryuzvki_sn/" },
  {
    iconName: "fa-brands fa-twitch",
    link: "https://www.twitch.tv/ryuzvki_sn/",
  },
  {
    iconName: "fa-brands fa-instagram",
    link: "https://www.instagram.com/ryuzvki/",
  },
  { iconName: "fa-brands fa-paypal", link: "https://paypal.me/ryuzaki221/" },
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
