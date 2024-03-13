import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  KeyboardTypeOptions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Controller,
  Control,
  FieldValues,
  FieldErrors,
  Path,
} from 'react-hook-form';
import {getStyles} from '../../../utils/modifiers';
import {appColors} from '../../../../constants/app.color';
import {Icons} from '../../../../assets/icons/all-icons';

type InputFieldProps<CType extends FieldValues> = {
  name: Path<CType>;
  type: string;
  rule: any;
  control: Control<CType, any>;
  keyboardType?: KeyboardTypeOptions;
  errors: FieldErrors<CType>;
  placeholder?: string;
};

const InputField = <CType extends FieldValues>({
  name,
  type,
  rule,
  control,
  errors,
  keyboardType = 'default',
  placeholder = 'Enter',
}: InputFieldProps<CType>) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  return (
    <View>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <TextInput
              {...getStyles([errors && 'borderRed500'], 'field', {
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
        {...control}
      />
      {errors.hasOwnProperty(name) && (
        <Text
          style={{
            color: 'yellow',
            fontSize: 10,
            marginLeft: 20,
            marginBottom: 10,
          }}>
          {errors[name]?.type == 'required' && errorTypes['required']}
          {errors[name]?.type == 'pattern' && errorTypes['pattern']}
        </Text>
      )}
    </View>
  );
};

export default InputField;

const errorTypes = {
  required: 'This field is required *',
  pattern: 'Invalid Pattern *',
};
