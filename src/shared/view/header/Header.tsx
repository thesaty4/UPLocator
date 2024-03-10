import React, {ReactNode} from 'react';
import {View, Text, Image, ImageURISource} from 'react-native';
import {getStyles} from '../../utils/modifiers';

interface HeaderProps {
  heading?: string;
  image?: ImageURISource;
}

const Header: React.FC<HeaderProps> = ({heading = 'Heading', image}) => {
  return (
    <View>
      {image && <Image source={image} />}
      <Text {...getStyles([], 'header')}>{heading}</Text>
    </View>
  );
};

export default Header;
