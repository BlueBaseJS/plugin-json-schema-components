import { getComponent } from '@bluebase/components';
import { FormTextInputProps } from '../FormTextInput';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { BlueBaseApp } from '@bluebase/core';
import { Formik } from 'formik';
import {plugins} from './getPlugins'

const FormTextInput = getComponent<FormTextInputProps>('FormTextInput');

function handleTextInputChange(event: any) {
    console.log('text input value', event.target.value);
}
const textFieldClasses = {marginTop:50}; 


storiesOf('FormTextInput', module)

    .add('With Placeholder ,label and autofocus', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    label="Muzamil"
                     placeholder="Enter Name" 
                     autoFocus={true}
                />
            </Formik>
        </BlueBaseApp>

    ))   

    .add('With required -true', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    label=""
                    required = {true}
                />
            </Formik>
        </BlueBaseApp>

    ))
    .add('With required-true and error-true', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    label=""
                    required = {true}
                    error = {true}
                />
            </Formik>
        </BlueBaseApp>

    ))


    .add('With Helper Text', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    label=""
                    helperText = {"Helper Text - Please Enter Text"}
                />
            </Formik>
        </BlueBaseApp>

    ))



    .add('With Style object', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    label="Username with style"
                    style = {textFieldClasses}
                />
            </Formik>
        </BlueBaseApp>

    ))   

    .add('With MaxLength-2', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    label="Username with max length 2"
                    maxLength = {2}
                />
            </Formik>
        </BlueBaseApp>

    ))
    
    .add('With Multiline and rows max 3', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    //id="multiline-flexible"
                    label="Multiline with rows max 3"
                    multiline={true} 
                    rowsMax = "3"
                />
            </Formik>
        </BlueBaseApp>

    ))

        
    .add('With Type Date', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='date'
                    name='sample'
                    label=""
                />
            </Formik>
        </BlueBaseApp>

    ))
    .add('With underLine Color-green and editable-true', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    editable={true}
                    label=""
                    underlineColor ="green"
                />
            </Formik>
        </BlueBaseApp>

    ))
    .add('With Editable-false', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    editable={false}
                />
            </Formik>
        </BlueBaseApp>

    ))
    .add('With variant filled', () => (
        <BlueBaseApp  plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    label=""
                    variant = "filled"
                />
            </Formik>
        </BlueBaseApp>

    ))

    .add('With variant outlined', () => (
        <BlueBaseApp  plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    label=""
                    variant = "outlined"
                />
            </Formik>
        </BlueBaseApp>

    ))

    .add('With disbaled-true ', () => (
        <BlueBaseApp  plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormTextInput
                    type='text'
                    name='sample'
                    label=""
                    disabled = {true}
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
                />
            </Formik>
        </BlueBaseApp>

    ))   

    
    
    
    
    
    ;