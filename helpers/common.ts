import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const hp = (percentage: string) => {
  const height = parseFloat(percentage as string);
  return (height * deviceHeight) / 100;
};

const wp = (percentage: string) => {
  const width = parseFloat(percentage as string);
  return (width * deviceWidth) / 100;
};
