import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  KeyboardTypeOptions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Controller,
  Control,
  FieldValues,
  FieldErrors,
  Path,
} from 'react-hook-form';
import {getStyles, tStyleProps} from '../../../utils/modifiers';
import {appColors} from '../../../../constants/app.color';
import {Icons} from '../../../../assets/icons/all-icons';

type InputFieldProps<CType extends FieldValues> = {
  name: Path<CType>;
  type: 'text' | 'number' | 'date' | 'password' | 'email';
  rule: any;
  control: Control<CType, any>;
  keyboardType?: KeyboardTypeOptions;
  errors: FieldErrors<CType>;
  placeholder?: string;
  styleClass?: tStyleProps[];
  searchable?: boolean;
  variant?: 'primary' | 'secondary' | 'normal';
  onSearch?: (data: string) => void;
};

const InputField = <CType extends FieldValues>({
  name,
  type,
  rule,
  control,
  errors,
  keyboardType = 'default',
  placeholder = 'Enter',
  styleClass,
  searchable = false,
  variant = 'primary',
  onSearch,
}: InputFieldProps<CType>) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  return (
    <View>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <TextInput
              {...getStyles(
                [errors && 'borderRed500', ...(styleClass ?? [])],
                'field',
                {
                  backgroundColor:
                    variant == 'primary'
                      ? appColors.primary
                      : variant == 'secondary'
                      ? appColors.secondary
                      : appColors.white,
                  opacity: 0.7,
                  elevation: 1,
                  ...(searchable && {paddingVertical: 5}),
                  ...(variant == 'normal' && {
                    color: appColors.black,
                    borderWidth: 0.6,
                    borderColor: appColors.primary,
                  }),
                },
              )}
              secureTextEntry={type === 'password' ? !isPasswordVisible : false}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={
                variant == 'normal' ? appColors.black : appColors.white
              }
              keyboardType={keyboardType}
            />
            {searchable && (
              <TouchableOpacity
                style={[styles.iconButton, {top: 20, right: 30}]}
                onPress={() =>
                  onSearch &&
                  control._formValues[name]?.length &&
                  onSearch(control._formValues[name])
                }>
                <Image style={styles.icon} source={Icons.search} />
              </TouchableOpacity>
            )}
            {type == 'password' && (
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => setPasswordVisibility(!isPasswordVisible)}>
                <Image
                  source={isPasswordVisible ? Icons.eye : Icons.hideEye}
                  style={styles.icon}
                />
              </TouchableOpacity>
            )}
          </>
        )}
        name={name}
        rules={rule}
        {...control}
      />
      {errors.hasOwnProperty(name) && (
        <Text
          style={[
            styles.error,
            variant == 'normal' && {color: appColors.primary},
          ]}>
          {errors[name]?.message?.toString()}
        </Text>
      )}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  iconButton: {
    position: 'absolute',
    right: 40,
    top: 23,
  },
  icon: {
    width: 15,
    height: 15,
    tintColor: appColors.white,
    opacity: 0.7,
  },
  error: {
    color: 'yellow',
    fontSize: 10,
    marginLeft: 20,
    marginBottom: 10,
  },
});
