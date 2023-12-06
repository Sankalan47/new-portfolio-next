import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import "./TweeterBtn.css";

const data = {
  socials: [
    {
      icon: <BsTwitter />,
      name: "Twitter",
      link: "https://www.twitter.com/Sankalan47",
      background: "#57caff",
      color: "#f0f0ff",
    },
    {
      icon: <BsGithub />,
      name: "Github",
      link: "https://www.github.com/Sankalan47",
      background: "#f0f0ff",
      color: "#1b1b1d",
    },
    {
      icon: <BsLinkedin />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/sankalan-dasgupta/",
      background: "#57caff",
      color: "#f0f0ff",
    },
  ],
};

const TweeterBtn = () => {
  return (
    <div className="flex gap-[12px]">
      {data.socials.map((social) => (
        // <Tooltip
        //   key={social.name}
        //   label={social.name}
        //   placement="bottom"
        //   hasArrow
        // >
        <motion.a
          key={social.name}
          className="twitter__btn"
          style={{
            background: social.background,
            color: social.color,
            userSelect: "none",
          }}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <p className="text-xl">{social.icon}</p>
        </motion.a>
        // </Tooltip>
      ))}
    </div>
  );
};

export default TweeterBtn;
