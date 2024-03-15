import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ImageSourcePropType,
  TouchableOpacity,
  View,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Button from '../../shared/components/form/button/Button';
import {appColors} from '../../constants/app.color';
import {getStyles} from '../../shared/utils/modifiers';
// import {commonStyles} from '../../constants/commonStyles';

export interface NavbarItems<idType extends string = string> {
  id?: idType;
  icon?: ImageSourcePropType;
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
            // style={[
            //   bottomNavbarStyles.button,
            //   bottomNavbarStyles.actionWrapper,
            //   item?.buttonLabel
            //     ? {
            //         width: 'auto',
            //         height: 'auto',
            //         padding: 0,
            //         gap: 0,
            //         borderRadius: 0,
            //       }
            //     : {},
            // ]}
            onPress={() => {
              handleClick(item, index);
              item?.redirectTo && navigator.navigate(item.redirectTo);
            }}>
            {!item?.buttonLabel && item?.icon && (
              <Image
                source={item.icon}
                style={[
                  bottomNavbarStyles.icon,
                  active === index && {
                    tintColor: appColors.primary,
                  },
                ]}
              />
            )}

            {item?.buttonLabel && (
              <Button
                label={item.buttonLabel}
                // title={item.buttonLabel}
                // outline={active == index}
                // buttonStyle={{
                //   marginVertical: 0,
                //   width: 100,
                //   height: 30,
                //   paddingVertical: 0,
                // }}
                // textStyle={{fontSize: 12}}
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
