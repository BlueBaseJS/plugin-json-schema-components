import { Radio,getComponent } from '@bluebase/components';
// import { FormRadioGroupInputProps } from '../FormRadioGroupInput';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
// import { BlueBaseApp } from '@bluebase/core';
// import { Formik } from 'formik';
// import Plugin from '../../../index'
// import MuiPlugin from '@bluebase/plugin-material-ui'
import { BaseFormFieldProps } from '../../BaseFormField';
const BaseFormField = getComponent<BaseFormFieldProps>('BaseFormField');


// const FormRadioGroupInput = getComponent<FormRadioGroupInputProps>('FormRadioGroupInput');

storiesOf('FormRadioGroupInput', module)

    .add('With Radio', () => (
        <BaseFormField
            MainComponent={Radio}
            label="Radio"
            value={100}
        >
            <Radio label="JavaScript" value="js" />
            <Radio label="Java" value="java" />
        </BaseFormField>
    ))
    ;





;