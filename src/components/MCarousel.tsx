import * as React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";

function MCarousel() {
  const width = Dimensions.get("window").width;
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        autoPlayInterval={2500}
        loop={true}
        width={width * 0.9}
        height={width / 2.5}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={500}
        onSnapToItem={(index) => null}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        renderItem={({ index, item }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Image
              style={{ flex: 1 }}
              resizeMode="cover"
              source={{
                uri:
                  "https://picsum.photos/200/330?random=" + `${Math.random()}`,
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

export default MCarousel;
