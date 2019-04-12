import { getComponent } from '@bluebase/components';
import { FormPasswordInputProps } from '../FormPasswordInput';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { BlueBaseApp } from '@bluebase/core';
import { Formik } from 'formik';
import Plugin from '../../../index'
import MuiPlugin from '@bluebase/plugin-material-ui'

const FormPasswordInput = getComponent<FormPasswordInputProps>('FormPasswordInput');

storiesOf('FormPasswordInput', module)

    .add('With Placeholder', () => (
        <BlueBaseApp plugins={[Plugin,MuiPlugin]}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormPasswordInput
                    type='password'
                    name='sample'
                    label="Password"
                    placeholder={"Here is placeholder"}
                    //disabled = {true}
                />
            </Formik>
        </BlueBaseApp>

    ))   
    .add('With MaxLength', () => (
        <BlueBaseApp plugins={[Plugin]}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormPasswordInput
                    type='password'
                    name='sample'
                    label="Password"
                />
            </Formik>
        </BlueBaseApp>

    ))
    
    
    
    
    
    
    ;