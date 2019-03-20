import React, { Component } from "react";
import { View } from "react-native";
import Placeholder from "rn-placeholder";

class Loading extends Component {
  render() {
    const data = new Array(10, 20, 30, 40, 50, 60, 70, 80);
    return (
      <View style={{ flex: 1 }}>
        {data.map(data => (
          <View
            key={data}
            style={{
              padding: 20,
              marginVertical: 2,
              marginHorizontal: 4,
              elevation: 3,
              backgroundColor: "#fff"
            }}
          >
            <Placeholder.ImageContent
              size={60}
              animate="fade"
              lineNumber={3}
              lineSpacing={10}
              lastLineWidth="30%"
              hasRadius
              firstLineWidth="60%"
            />
          </View>
        ))}
      </View>
    );
  }
}

export default Loading;
