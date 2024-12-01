import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export const hp = (percentage) => {
  const height = parseFloat(percentage);
  return (height * deviceHeight) / 100;
};

export const wp = (percentage) => {
  const width = parseFloat(percentage);
  return (width * deviceWidth) / 100;
};
