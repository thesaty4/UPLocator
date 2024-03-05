import {StyleProp, ViewStyle} from 'react-native';
import {TailwindStyles, tw} from 'react-native-tailwindcss';

type tStyleProps = keyof TailwindStyles;

export function getStyles(
  styles: tStyleProps[],
  commonStyle?: StyleType,
  extraStyle?: StyleProp<ViewStyle>,
): Record<'style', StyleProp<ViewStyle>> {
  const style = styleMap[commonStyle ?? 'default'];
  return {
    style: [
      ...style.map(s => tw[s]),
      styles.map(style => tw[style]),
      extraStyle,
    ],
  };
}

const styleMap = {
  field: ['border', 'borderGray300', 'rounded'],
  errorInput: ['border', 'borderRed500', 'rounded'],
  label: ['textLg', 'fontBold', 'textBlack'],
  default: [],
} satisfies Record<string, tStyleProps[]>;

export type StyleType = keyof typeof styleMap;
