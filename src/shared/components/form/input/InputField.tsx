import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  KeyboardTypeOptions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Controller, Control, FieldValues, FieldErrors} from 'react-hook-form';
import {getStyles} from '../../../utils/modifiers';
import {appColors} from '../../../../constants/app.color';
import {Icons} from '../../../../assets/icons/all-icons';

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
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  return (
    <View>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <TextInput
              {...getStyles([errors[name] && 'borderRed500'], 'field', {
                backgroundColor: appColors.primary,
                opacity: 0.7,
                elevation: 1,
              })}
              secureTextEntry={type === 'password' ? !isPasswordVisible : false}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={appColors.white}
              keyboardType={keyboardType}
            />
            {type == 'password' && (
              <TouchableOpacity
                style={{position: 'absolute', right: 40, top: 23}}
                onPress={() => setPasswordVisibility(!isPasswordVisible)}>
                <Image
                  source={isPasswordVisible ? Icons.eye : Icons.hideEye}
                  style={{
                    width: 15,
                    height: 15,
                    tintColor: appColors.white,
                    opacity: 0.7,
                  }}
                />
              </TouchableOpacity>
            )}
          </>
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
