import React, { Suspense } from "react";
import List from "../../Compoents/List";
import Loading from "../../Compoents/Loading";

const Sharing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <List code="ipd" type={true} typeMode="SHR" />
    </Suspense>
  );
};

export default Sharing;
