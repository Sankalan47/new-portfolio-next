// import reactStringReplace from "react-string-replace";

const Heading = () => {
  const content =
    "Hi! I'm Sankalan Dasgupta, Software Engineer at P360. I focus on building our web applications for managing our IOT solutions. With tools like Angular,React and Nodejs.";
  // let keywords = ["Sankalan Dasgupta", "P360", "Angular", "React", "Nodejs"];

  // let replacedText = "";

  // keywords.forEach((key) => {
  //   return (replacedText = reactStringReplace(
  //     replacedText.length ? replacedText : content,
  //     key,
  //     (match) => (
  //       <span key={match} className="text-white">
  //         {match}
  //       </span>
  //     )
  //   ));
  // });

  return (
    <p className="text-xl font-medium text-left text-gray-300 lg:text-2xl md:text-center">
      {content}
    </p>
  );
};

export default Heading;
