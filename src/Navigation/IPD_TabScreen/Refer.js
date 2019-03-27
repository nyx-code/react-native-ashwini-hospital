import React, { Suspense } from "react";
import List from "../../Compoents/List";
import Loading from "../../Compoents/Loading";

const Refer = () => {
  return (
    <Suspense fallback={<Loading />}>
      <List code="ipd" type={true} typeMode="REF" />
    </Suspense>
  );
};

export default Refer;
