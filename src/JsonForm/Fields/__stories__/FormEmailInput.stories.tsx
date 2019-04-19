import {  getComponent } from '@bluebase/components';
import { FormEmailInputProps } from '../FormEmailInput';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { BlueBaseApp } from '@bluebase/core';
import { Formik } from 'formik';
import Plugin from '../../../'
import MuiPlugin from '@bluebase/plugin-material-ui'


const FormEmailInput = getComponent<FormEmailInputProps>('FormEmailInput');

storiesOf('FormEmailInput', module)

    .add('With MaxLength', () => (
        <BlueBaseApp plugins={[Plugin,MuiPlugin]}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormEmailInput
                    type='email'
                    name='sample'
                    label="Email"
                    placeholder = "Enter Email"

                />
            </Formik>
        </BlueBaseApp>
    ));