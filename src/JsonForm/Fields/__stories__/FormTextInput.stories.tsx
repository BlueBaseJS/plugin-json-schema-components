import { getComponent } from '@bluebase/components';
import { FormTextInputProps } from '../FormTextInput';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { BlueBaseApp } from '@bluebase/core';
import { Formik } from 'formik';
import Plugin from '../../../'
import MuiPlugin from '@bluebase/plugin-material-ui'
import {plugins} from './getPlugins'

const FormTextInput = getComponent<FormTextInputProps>('FormTextInput');

function handleTextInputChange(value: any) {
    console.log('text input value', value.target.value);
}
const textFieldClasses = {marginLeft:50}; 


storiesOf('FormTextInput', module)

    .add('With Placeholder ,label and autofocus', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    label="haris"
                     placeholder="hello" 
                    autoComplete="Hello World !!"
                     autoFocus={true}
                    maxLength = {2}
                />
            </Formik>
        </BlueBaseApp>

    ))   



    .add('With onChangeText', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    onChange={handleTextInputChange} 
                    maxLength = {2}
                />
            </Formik>
        </BlueBaseApp>

    ))   


    .add('With Style object', () => (
        <BlueBaseApp plugins={[Plugin,MuiPlugin]}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    label="Username"
                    style = {textFieldClasses}
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
    
    .add('With Multiline', () => (
        <BlueBaseApp plugins={[Plugin]}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    id="multiline-flexible"
                    label="Multiline"
                    multiline={true} 
                    rowsMax="3"

                />
            </Formik>
        </BlueBaseApp>

    ))

        
    .add('With Type Date', () => (
        <BlueBaseApp plugins={[Plugin]}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='date'
                    name='sample'
                    editable={true}
                    label=""
                    underlineColor ="blue"

                />
            </Formik>
        </BlueBaseApp>

    ))
    
    
    
    
    
    ;