import {StyleProp, ViewStyle} from 'react-native';
import {TailwindStyles, tw} from 'react-native-tailwindcss';

type tStyleProps = keyof TailwindStyles;

export function getStyles(
  styles: tStyleProps[],
  commonStyle?: StyleType,
  extraStyle?: StyleProp<ViewStyle>,
): Record<'style', StyleProp<ViewStyle>> {
  const style = styleMap[commonStyle ?? 'default'];
  const extra = extraStyle
    ? [extraStyle, commonStyle == 'field' && {fontSize: 12}]
    : [];
  return {
    style: [...style.map(s => tw[s]), styles.map(style => tw[style]), ...extra],
  };
}

const styleMap = {
  field: [
    'textWhite',
    'mX5',
    'mY2',
    'pX3',
    'pY2',
    'rounded',
    'shadow',
    'shadowOutline',
  ],
  errorInput: ['border', 'borderRed500', 'rounded'],
  label: ['textLg', 'fontBold', 'textBlack'],
  header: [
    'textCenter',
    'wFull',
    'fontBold',
    'text3xl',
    'mY5',
    'textWhite',
    'opacity50',
  ],
  default: [],
} satisfies Record<string, tStyleProps[]>;

export type StyleType = keyof typeof styleMap;
