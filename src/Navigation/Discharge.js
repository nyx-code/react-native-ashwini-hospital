import React, { Suspense } from "react";
import List from "../Compoents/List";
import Loading from "../Compoents/Loading";

const Discharge = () => {
  return (
    <Suspense fallback={<Loading />}>
      <List code="discharge" />
    </Suspense>
  );
};

export default Discharge;
