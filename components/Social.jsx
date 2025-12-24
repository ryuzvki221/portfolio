"use client";

import  { useState, useEffect } from "react";
import socialData from "../data/fr/social.json";

const Social = () => {
  const [social, fetchSocial] = useState([]);

  useEffect(() => {
    fetchSocial(socialData);
  }, []);
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
