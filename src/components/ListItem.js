import React from "react";
import { useTheme } from '@react-navigation/native';
import { Text, HStack, Pressable } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";

const ListItem = ({ title, navigation, destination }) => {
  const { colors, fontSizes } = useTheme();

  return (
    <Pressable
      onPress={() => {
        destination ? navigation.navigate(destination) : null;
      }}
    >
      <HStack
        borderButtomWidth={1}
        height={50}
        mx="4"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize={fontSizes.body1}>{title}</Text>
        <AntDesign name="right" color="gray" size={20} />
      </HStack>
    </Pressable>
  );
};

export default ListItem;
