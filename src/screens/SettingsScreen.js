import React from "react";
import { useTheme } from '@react-navigation/native';
import { Box } from "native-base";
import ListItem from "../components/ListItem"

const SettingsScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <Box
      flex={1}
      paddingTop={2}
      _dark={{ bg: colors.black1 }}
      _light={{ bg: "white" }}
    >
      <Box>
        <ListItem title="顯示設定" navigation={navigation} destination="DisplaySetting"/>
        <ListItem title="帳號設定" navigation={navigation} destination="AccountSetting"/>
      </Box>            
    </Box>  
  );
};

export default SettingsScreen;
