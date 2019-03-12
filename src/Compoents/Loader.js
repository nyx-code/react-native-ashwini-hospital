import React, { Timeout } from "react";

const Loader = props => {
  return (
    <Timeout ms={props.ms}>
      {didTimeout => {
        console.log(
          new Date().getTime(),
          "in Loader > Timeout, did timeout: ",
          didTimeout
        );
        return didTimeout ? props.fallback : props.children;
      }}
    </Timeout>
  );
};

export default Loader;
