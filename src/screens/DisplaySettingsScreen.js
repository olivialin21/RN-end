import React, { useState } from "react";
import { useTheme } from '@react-navigation/native';
import { Box, HStack, Text, Switch, useColorMode } from "native-base";
import { useDispatch } from "react-redux";
import { setColorMode, setLanguage, setSearchFilter } from '../redux/actions/settingsActions';

const SettingsScreen = ({ navigation }) => {
  const { colors, fontSizes } = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();
  const [ language, toggleLanguage ] = useState(false);
  const [ filter1, toggleFilter1 ] = useState(true);
  const [ filter2, toggleFilter2 ] = useState(true);
  const [ filterCantUse, toggleFilterCantUse ] = useState(true);
  const dispatch = useDispatch();
  
  const onToggleColorMode = () => {
    if(colorMode == 'light') dispatch(setColorMode("dark"))
    else dispatch(setColorMode("light"))
    toggleColorMode();
  }
  const onToggleLanguage = async () => {
    dispatch(setLanguage(!language))
    toggleLanguage(!language);
  }
  const onToggleYoubike1 = () => {
    dispatch(setSearchFilter("youbike 1.0",!filter1))
    toggleFilter1(!filter1);
  }
  const onToggleYoubike2 = () => {
    dispatch(setSearchFilter("youbike 2.0",!filter2))
    toggleFilter2(!filter2);
  }
  const onToggleCantUse = () => {
    dispatch(setSearchFilter("can't use",!filterCantUse))
    toggleFilterCantUse(!filterCantUse);
  }

  return (
    <Box
      flex={1}
      paddingTop={2}
      _dark={{ bg: colors.black1 }}
      _light={{ bg: "white" }}
    >
      <HStack
        height={50}
        px="4"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize={fontSizes.body1}>夜間模式</Text>
        <Switch
            name="light Mode"
            isChecked={colorMode === "dark"}
            trackColor={{ false: colors.gray1 , true: colors.yellow2 }}
            onToggle={onToggleColorMode}
            accessibilityLabel="display-mode"
            accessibilityHint="light or dark mode"
        />
      </HStack>
      <HStack
        height={50}
        px="4"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize={fontSizes.body1}>{language == true ? "中文" : "English"}</Text>
        <Switch
            name="language"
            isChecked={language === true}
            trackColor={{ false: colors.gray1 , true: colors.yellow2 }}
            onToggle={onToggleLanguage}
            accessibilityLabel="display-mode"
            accessibilityHint="light or dark mode"
        />
      </HStack>
      <Box
        borderTopWidth={1}
        borderTopColor={colors.gray1}
        mx="4"
        paddingTop={2}
        marginTop={2}
      >
        <Text fontSize={14} color={colors.yellow2}>搜尋篩選</Text>
      </Box>
      <HStack
        height={50}
        marginTop={2}
        px="4"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize={fontSizes.body1}>Youbike 1.0</Text>
        <Switch
            name="Youbike 1.0"
            isChecked={filter1 === true}
            trackColor={{ false: colors.gray1 , true: colors.yellow2 }}
            onToggle={onToggleYoubike1}
            accessibilityLabel="search-filter"
            accessibilityHint="see 1.0 or not"
        />
      </HStack>
      <HStack
        height={50}
        px="4"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize={fontSizes.body1}>Youbike 2.0</Text>
        <Switch
            name="light Mode"
            isChecked={filter2 === true}
            trackColor={{ false: colors.gray1 , true: colors.yellow2 }}
            onToggle={onToggleYoubike2}
            accessibilityLabel="search-filter"
            accessibilityHint="see 2.0 or not"
        />
      </HStack>
      <HStack
        height={50}
        px="4"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize={fontSizes.body1}>無法租借</Text>
        <Switch
            name="light Mode"
            isChecked={filterCantUse === true}
            trackColor={{ false: colors.gray1 , true: colors.yellow2 }}
            onToggle={onToggleCantUse}
            accessibilityLabel="search-filter"
            accessibilityHint="see bikes which can't use or not"
        />
      </HStack>
    </Box>
  );
};

export default SettingsScreen;
