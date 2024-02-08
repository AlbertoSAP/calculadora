import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface IButtonText {
  text: string;
  color?: string;
  funtions: (numberText:string) => void;
  sizeButton?: boolean;
}

export const ButtonCalc: React.FC<IButtonText> = ({
  text,
  color = '#2D2D2D',
  sizeButton = false,
  funtions
}) => {
  return (

    <TouchableOpacity onPress={()=> funtions(text)}>
      
    <View
      style={{
        ...styles.buttonView,
        backgroundColor: `${color}`,
        width: sizeButton ? 180 : 80,
      }}>
      <Text
        style={{
          ...styles.buttonText,
          color: color === '#9B9B9B' ? 'black' : 'white',
        }}>
        {text}
      </Text>
    </View>
    </TouchableOpacity>
  );
};
