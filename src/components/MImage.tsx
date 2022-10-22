
import { useState } from "react";
import { Image } from "react-native";


type MImageProps = {
  image: string,
  width?: number,
  height?: number,
  style?: object
};

type ImageDimensions = {
  width: number,
  height: number
};

export default function MImage(props: MImageProps) {
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions>({width: -1, height: -1});

  function getImageDimensions() {
    let dimensions;
    if(imageDimensions.width != -1)
      return;
    Image.getSize(props.image, (width, height) => {
      setImageDimensions({width: width, height: height});
    });
  }

  getImageDimensions();

  if(imageDimensions.width == -1)
    return (<></>);
    
  function getComponentDimensions(): ImageDimensions {
    if(props.width === undefined && props.height === undefined)
      return imageDimensions;
    else if(props.width === undefined)
      return {width: imageDimensions.width / (imageDimensions.height / (props.height as number)), height: props.height as number};
    else if(props.height === undefined)
      return {width: props.width as number, height: imageDimensions.height / (imageDimensions.width / (props.width as number))};
    else
      return {width: props.width as number, height: props.height as number};
  }

  const componentDimensions = getComponentDimensions();


  return (
    <Image source={{uri: props.image}} style={[props.style, {width: componentDimensions.width, height: componentDimensions.height}]}></Image>
  );
}
