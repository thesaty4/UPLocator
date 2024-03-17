import React from 'react';
import {Control, FieldErrors, FieldValues, Path} from 'react-hook-form';
import {Image, TouchableOpacity, View} from 'react-native';
import InputField from '../../components/form/input/InputField';
import {getStyles} from '../../utils/modifiers';
import {Icons} from '../../../assets/icons/all-icons';
import {appColors} from '../../../constants/app.color';

type LocatorProps<CType extends FieldValues> = {
  names: {
    latitude: Path<CType>;
    longitude: Path<CType>;
  };
  control: Control<CType, any>;
  errors: FieldErrors<CType>;
  required?: boolean;
};

const Locator = <CType extends FieldValues>({
  names,
  control,
  errors,
  required = true,
}: LocatorProps<CType>) => {
  const getLocation = () => {};

  return (
    <View
      {...getStyles(['flexRow', 'wFull'], 'default', {
        gap: 20,
      })}>
      <InputField
        name={names.latitude}
        placeholder="Latitude"
        rule={{
          required: {
            value: required,
            message: 'This field is required',
          },
        }}
        control={control}
        errors={errors}
        type="text"
        variant="normal"
        styleClass={['wFull', 'minW100']}
      />
      <InputField
        name={names.longitude}
        placeholder="Longitude"
        rule={{
          required: {
            value: required,
            message: 'This field is required',
          },
        }}
        control={control}
        errors={errors}
        type="text"
        variant="normal"
        styleClass={['wFull']}
      />
      <TouchableOpacity
        {...getStyles(['justifyCenter', 'pX5'])}
        onPress={getLocation}>
        <Image
          source={Icons.myLocation}
          style={{height: 30, width: 30, tintColor: appColors.primary}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Locator;
