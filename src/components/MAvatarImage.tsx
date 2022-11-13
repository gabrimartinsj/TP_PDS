
import { Avatar } from 'react-native-paper';

type MAvatarImageProps = {
  imageUrl: string,
  imageSize: number
};

export default function MAvatarImage(props: MAvatarImageProps) {
  return (
    <Avatar.Image size={props.imageSize} source={{uri: props.imageUrl}}/>
  );
}
