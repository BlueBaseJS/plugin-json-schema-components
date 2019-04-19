import { getComponent } from '@bluebase/components';
import { FormNumberInputProps } from '../FormNumberInput';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { BlueBaseApp } from '@bluebase/core';
import { Formik } from 'formik';
import Plugin from '../../../index'
import MuiPlugin from '@bluebase/plugin-material-ui'

const FormNumberInput = getComponent<FormNumberInputProps>('FormNumberInput');

storiesOf('FormNumberInput', module)

    .add('With Placeholder', () => (
        <BlueBaseApp plugins={[Plugin,MuiPlugin]}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormNumberInput
                    type='number'
                    name='sample'
                    label="Only enter number"
                    placeholder="Here is placeholder"
                />
            </Formik>
        </BlueBaseApp>

    
    ))
    
    
    
    
    ;