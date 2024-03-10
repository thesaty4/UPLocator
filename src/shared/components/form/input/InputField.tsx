import React from 'react';
import {View, TextInput, Text, KeyboardTypeOptions} from 'react-native';
import {Controller, Control, FieldValues, FieldErrors} from 'react-hook-form';
import {getStyles} from '../../../utils/modifiers';
import {appColors} from '../../../../constants/app.color';

type InputFieldProps = {
  name: string;
  type: string;
  rule: any;
  control: Control<FieldValues, any>;
  keyboardType?: KeyboardTypeOptions;
  errors: any;
  placeholder?: string;
};

const InputField = ({
  name,
  type,
  rule,
  control,
  errors,
  keyboardType = 'default',
  placeholder = 'Enter',
}: InputFieldProps) => {
  return (
    <View>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            {...getStyles([errors[name] && 'borderRed500'], 'field', {
              backgroundColor: appColors.primary,
              opacity: 0.7,
              elevation: 1,
            })}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={appColors.white}
            keyboardType={keyboardType}
          />
        )}
        name={name}
        rules={rule}
        defaultValue=""
      />
      {errors.hasOwnProperty(name) && (
        <Text style={{color: 'red'}}>{errors[name].message}</Text>
      )}
    </View>
  );
};

export default InputField;
