import React, { useState, useEffect } from "react";

const Social = () => {
  const request = "/api/v1/social/";
  const [social, fetchSocial] = useState([]);

  useEffect(() => {
    const getSocial = async () => {
      await fetch(request)
        .then((response) => response.json())
        .then((social) => {
          fetchSocial(social);
          // console.log(social);
        });
    };
    getSocial();
  }, [request]);
  return (
    <>
      {social.map((val, i) => {
        return (
          <a key={i} href={`${val.link}`} className="waves-effect  waves-light">
            <span className={`${val.iconName}`}></span>
          </a>
        );
      })}
    </>
  );
};

export default Social;
