import React from "react";
import { Box, Input } from 'native-base';
import { useTheme } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
  const { colors } = useTheme();

  return (
    <Box alignItems="center" px={3}>
      <FontAwesomeIcon name="search" color={colors.gray1} size={20} position="absolute" left={2}/>    
      <Input placeholder="Input" w="100%" pl={6}/>
    </Box>
  );  
}

export default Search;

