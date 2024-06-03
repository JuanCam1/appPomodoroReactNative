import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
  AntDesign,
  Entypo
} from "@expo/vector-icons";


const IconCustom = (props: {
  name: React.ComponentProps<
    typeof Ionicons & typeof FontAwesome5 & typeof MaterialCommunityIcons & typeof SimpleLineIcons & typeof AntDesign & typeof Entypo
  >["name"];
  size: number;
  color: string;
  type: "ionicons" | "fontAwesome5" | "materialCommunityIcons" | "materialIcons" | "simpleLineIcons" | "antDesign" | "entypo";

}) => {
  switch (props.type) {
    case "ionicons":
      return <Ionicons {...props} />;
    case "fontAwesome5":
      return <FontAwesome5 {...props} />;
    case "materialCommunityIcons":
      return <MaterialCommunityIcons {...props} />;
    case "materialIcons":
      return <MaterialIcons {...props} />;
    case "simpleLineIcons":
      return <SimpleLineIcons {...props} />;
    case "antDesign":
      return <AntDesign {...props} />;
    case "entypo":
      return <Entypo {...props} />;
  }
};

export default IconCustom;
