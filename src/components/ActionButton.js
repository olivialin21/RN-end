import React from 'react';
import { Center, Pressable, Actionsheet, useDisclose, Image } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionScreen from '../screens/ActionScreen';

const ActionButton = (props) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { zoomRatio, station, method } = props;
  return (
    <>
      <Pressable onPress={onOpen}>
        <Image
          alt="bikeIcon"
          source={station.ServiceType == 1 ? require("../images/btn_1.png") : require("../images/btn_2.png")}
          style={{ width: 36, height: 36 , marginBottom: 14 }}
          resizeMode="contain"
        />
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionScreen onClose={onClose} station={station} method={method}/>
      </Actionsheet>
    </>
  );
}

export default ActionButton;