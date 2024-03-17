import React from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../../../shared/view/header/Header';
import {Icons} from '../../../assets/icons/all-icons';
import {getStyles} from '../../../shared/utils/modifiers';
import {useForm} from 'react-hook-form';
import InputField from '../../../shared/components/form/input/InputField';
import Button from '../../../shared/components/form/button/Button';
import Locator from '../../../shared/view/Locator/Locator';

type EditPoleForm = {
  zonal: string;
  routeLine: string;
  line: string;
  poleNumber: string;
  location: {
    latitude: number;
    longitude: number;
  };
  description: string;
  status: boolean;
};

const EditPole = () => {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<EditPoleForm>();

  const onUpdate = (data: EditPoleForm) => {
    console.log('data goes here...', data);
  };

  return (
    <View {...getStyles(['mB10'])}>
      <Header
        heading="Edit Pole Information"
        icon={Icons.history}
        isBack
        isGradient
      />
      <ScrollView {...getStyles(['mY2'])}>
        <InputField
          name="zonal"
          placeholder="Select Zonal"
          rule={{
            required: {
              value: true,
              message: 'This field is required',
            },
          }}
          control={control}
          errors={errors}
          variant="normal"
        />
        <InputField
          name="routeLine"
          placeholder="Route Line"
          rule={{
            required: {
              value: true,
              message: 'This field is required',
            },
          }}
          control={control}
          errors={errors}
          variant="normal"
        />
        <InputField
          name="line"
          placeholder="Enter Line"
          rule={{
            required: {
              value: true,
              message: 'This field is required',
            },
          }}
          control={control}
          errors={errors}
          variant="normal"
        />
        <InputField
          name="poleNumber"
          placeholder="Enter Pole No."
          rule={{
            required: {
              value: true,
              message: 'This field is required',
            },
          }}
          control={control}
          errors={errors}
          variant="normal"
        />
        <Locator
          names={{
            latitude: 'location.latitude',
            longitude: 'location.longitude',
          }}
          control={control}
          errors={errors}
          required={true}
        />
        <InputField
          name="description"
          placeholder="Write description..."
          rule={{
            required: {
              value: true,
              message: 'This field is required',
            },
          }}
          control={control}
          errors={errors}
          variant="normal"
        />

        <Button
          label="Update"
          onPress={handleSubmit(onUpdate)}
          buttonType="primary"
        />
      </ScrollView>
    </View>
  );
};

export default EditPole;
