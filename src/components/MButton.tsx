import React from "react";
import { Button } from "react-native-paper";

export type MButtonProps = {
  title: string;
  mode?: "text" | "outlined" | "contained";
  onPress: () => void;
  style?: object;
  icon?: string;
  disabled?: boolean;
};

const CustomButton: React.FC<MButtonProps> = ({
  title,
  onPress,
  mode = "contained",
  style,
  icon,
  disabled = false,
}) => {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      style={[style, { borderRadius: 16 }]}
      icon={icon && icon}
      disabled={disabled}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
