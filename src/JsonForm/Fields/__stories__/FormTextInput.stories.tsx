import { getComponent } from '@bluebase/components';
import { FormTextInputProps } from '../FormTextInput';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { BlueBaseApp } from '@bluebase/core';
import { Formik } from 'formik';
import Plugin from '../../../index'
import MuiPlugin from '@bluebase/plugin-material-ui'
import {plugins} from './getPlugins'

const FormTextInput = getComponent<FormTextInputProps>('FormTextInput');

storiesOf('FormTextInput', module)

    .add('With Placeholder', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    label="Username"
                    placeholder={"Here is placeholder"}
                    //disabled = {true}
                    maxLength = {2}
                />
            </Formik>
        </BlueBaseApp>

    ))   


    .add('With Left Icon', () => (
        <BlueBaseApp plugins={[Plugin,MuiPlugin]}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    label="Username"
                    left = {"Icon"}
                />
            </Formik>
        </BlueBaseApp>

    ))   

    .add('With MaxLength', () => (
        <BlueBaseApp plugins={[Plugin]}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    label="Username"
                    maxLength = {2}
                />
            </Formik>
        </BlueBaseApp>

    ))
    
    
    
    
    
    
    ;