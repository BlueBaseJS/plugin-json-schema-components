import {  Picker, getComponent } from '@bluebase/components';
// import { FormPickerInputProps } from '../FormPickerInput';
import React from 'react';
import { BaseFormFieldProps } from '../../BaseFormField';
import storiesOf from '@bluebase/storybook-addon';
// import { FormPickerInput } from '../FormPickerInput';
// import { BlueBaseApp } from '@bluebase/core';
// import { Formik } from 'formik';
// import {plugins} from './getPlugins'
const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');

// const FormPickerInput = getComponent<FormPickerInputProps>('FormPickerInput');

// function handleChecked(value: any) {
//     console.log('Checked ', value.target.value);
// }

storiesOf('FormPickerInput', module)
    .add('With Picker', () => (
        <BaseFormField
            MainComponent={Picker}
            label="Picker"
            value={100}
        >
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Java" value="java" />
        </BaseFormField>
    ))
    ;