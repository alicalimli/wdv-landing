import React from "react";

const socialsArr = [
  { name: "Twitter", link: "https://twitter.com/alicalimli_dev" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/alicalimli/" },
  { name: "Github", link: "https://github.com/alicalimli" },
  { name: "Blog", link: "https://alicalimli.hashnode.dev/" },
];

const Footer = () => {
  const socials = socialsArr.map((social) => (
    <li key={social.name}>
      <a
        className="text-sm text-white"
        href={social.link}
        rel="noopener noreferrer"
        target="_blank"
      >
        {social.name}
      </a>
    </li>
  ));

  return (
    <footer
      className="
        mt-8 
        flex 
        flex-col 
        flex-wrap 
        items-center 
        justify-center 
        gap-2 
        p-4 px-8 
        sm:flex-row"
    >
      <p
        className="
          text-center 
          text-sm text-white
        "
      >
        Designed & Developed by{" "}
        <a
          className="text-sm text-white"
          href="https://bio.link/alicalimli"
          rel="noopener noreferrer"
          target="_blank"
        >
          Ali Calimli
        </a>
      </p>
      <ul
        className="
          ml-0  
          flex 
          flex-wrap
          justify-center 
          gap-x-4 
          sm:ml-auto
        "
      >
        {socials}
      </ul>
    </footer>
  );
};

export default Footer;
