import React, { Suspense } from "react";
import List from "../../Compoents/List";
import Loading from "../../Compoents/Loading";

const All = () => {
  return (
    <Suspense fallback={<Loading />}>
      <List code="ipd" />
    </Suspense>
  );
};

export default All;
