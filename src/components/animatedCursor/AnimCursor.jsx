import AnimatedCursor from "react-animated-cursor";

const AnimCursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={18}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: "var(--cursor-color)" ,
      }}
      outerStyle={{
        border: "3px solid var(--cursor-color)",
      }}
    />
  );
};

export default AnimCursor;
