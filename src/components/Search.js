import React from "react";
import { HStack, Box, Input } from 'native-base';
import { useTheme } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
  const { colors } = useTheme();

  return (
    <Box px={3}>
      <FontAwesomeIcon name="search" color={colors.gray1} size={20}/>    
      <Input placeholder="Input" w="100%" pl={6}/>
    </Box>
  );  
}

export default Search;

