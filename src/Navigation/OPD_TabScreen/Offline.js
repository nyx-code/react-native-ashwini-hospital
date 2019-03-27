import React, { Suspense } from "react";
import List from "../../Compoents/List";
import Loading from "../../Compoents/Loading";
import { Text, View } from "react-native";
const Offline = () => {
  return (
    // <Suspense fallback={<Loading />}>
    //   <List url="http://wwacoman.com/oss/opd/SMR" />
    // </Suspense>
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default Offline;
