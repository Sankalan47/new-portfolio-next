import reactStringReplace from "react-string-replace";

const Description = ({ desc }) => {
  let keywords = [
    "Azure frontdoor",
    "Implemented Cookie based authentication",
    "increased Lighthouse score upto 20%",
    "reduced bundle size by 50%",
    "Nodejs",
    "Developed re-usable components",
    "Websockets",
  ];
  let replacedText = "";

  keywords.forEach((key) => {
    return (replacedText = reactStringReplace(
      replacedText.length ? replacedText : desc,
      key,
      (match) => (
        <span key={match} className="text-white">
          {match}
        </span>
      )
    ));
  });
  return (
    <p className="text-[0.8em] md:text-[1em] font-normal text-[#8f9ba8] mb-[0.7em] tracking-[1.5] leading-[2]">
      {replacedText}
    </p>
  );
};

export default Description;
