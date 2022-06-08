import React, { useEffect } from "react";
import { useTheme } from '@react-navigation/native';
import { Box } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import StarList from '../components/StarList';
import { setStarScreen } from '../redux/actions/starActions'

const StarScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const data = useSelector((state) => (state.star.starList));
  useEffect (() => {
    dispatch(setStarScreen())
  },[data])

  return (
    <Box
      flex={1}
      _dark={{ bg: colors.black1 }}
      _light={{ bg: "white" }}
    >
      <StarList
        list={data}
        navigation={navigation}
      />
    </Box>
  );
};

export default StarScreen;