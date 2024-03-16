import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ImageSourcePropType,
  TouchableOpacity,
  View,
  Image,
  StyleProp,
  ViewStyle,
  Text,
} from 'react-native';
import Button from '../../shared/components/form/button/Button';
import {appColors} from '../../constants/app.color';
import {getStyles} from '../../shared/utils/modifiers';
import {PAGES} from '../../types/pages.type';

export interface NavbarItems<idType extends PAGES = PAGES> {
  id: idType;
  icon?: ImageSourcePropType;
  label?: string;
  buttonLabel?: string;
  redirectTo?: never;
}

export interface BottomNavbarProps {
  items: NavbarItems[];
  activeIndex?: number;
  onClick?: (item: NavbarItems) => void;
}

const BottomNavbar: React.FC<BottomNavbarProps> = ({
  items,
  activeIndex,
  onClick,
}) => {
  const [active, setActive] = useState<number>(activeIndex ?? 0);
  const navigator = useNavigation();

  const handleClick = (item: NavbarItems, index: number) => {
    onClick && onClick(item);
    setActive(index);
  };

  return (
    <View
      {...getStyles(
        ['absolute', 'bottom0', 'flexRow', 'justifyBetween', 'wFull', 'p11'],
        'default',
        bottomNavbarStyles.mainAction,
      )}>
      {items.map((item, index) => {
        return (
          <TouchableOpacity
            id={(item?.id || index)?.toString()}
            onPress={() => {
              handleClick(item, index);
              item?.redirectTo && navigator.navigate(item.redirectTo);
            }}>
            {!item?.buttonLabel && item?.icon && (
              <View {...getStyles(['itemsCenter'])}>
                <Image
                  source={item.icon}
                  style={[
                    bottomNavbarStyles.icon,
                    {
                      tintColor: active === index ? appColors.primary : 'gray',
                    },
                  ]}
                />
                <Text
                  style={{
                    color: active === index ? appColors.primary : 'gray',
                    fontSize: 10,
                    fontWeight: active === index ? '800' : '500',
                  }}>
                  {item?.label}
                </Text>
              </View>
            )}

            {item?.buttonLabel && (
              <Button
                label={item.buttonLabel}
                onPress={() => handleClick(item, index)}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavbar;

export const bottomNavbarStyles = {
  mainAction: {
    backgroundColor: 'white',
    padding: 15,
    paddingHorizontal: 20,
    elevation: 10,
  },

  actionWrapper: {
    width: 20,
    height: 20,
    // borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
    // elevation: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
  button: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 50,
    // elevation: 10,
  },
} satisfies Record<string, StyleProp<ViewStyle>>;
