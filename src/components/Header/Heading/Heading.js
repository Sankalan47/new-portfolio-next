import reactStringReplace from "react-string-replace";

const Heading = () => {
  let keywords = ["Sankalan Dasgupta", "P360", "Angular", "React", "Nodejs"];
  const content =
    "Hi! I'm Sankalan Dasgupta, Software Engineer at P360. I focus on building our web applications for managing our IOT solutions. With tools like Angular,React and Nodejs.";

  let replacedText = "";

  keywords.forEach((key) => {
    return (replacedText = reactStringReplace(
      replacedText.length ? replacedText : content,
      key,
      (match) => (
        <span key={match} className="text-white">
          {match}
        </span>
      )
    ));
  });

  return (
    <p className="text-xl lg:text-2xl font-medium text-[#8f9ba8] text-left md:text-center">
      {replacedText}
    </p>
  );
};

export default Heading;
