import { getComponent } from '@bluebase/components';
import { FormSubmitButtonProps } from '../FormSubmitButton';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { BlueBaseApp } from '@bluebase/core';
import { Formik } from 'formik';
import {plugins} from './getPlugins'

const FormSubmitButton = getComponent<FormSubmitButtonProps>('FormSubmitButton');

function handle() {
    console.log('Clicked ');
}

storiesOf('FormSubmitButton', module)

    .add('with title ,FullWidth', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormSubmitButton
                    name = "name"
                    type='submit'
                    title = "Button"
                    color = "primary"
                    fullWidth = {true}
                    
                />
            </Formik>
        </BlueBaseApp>

    ))   
    .add('with scondary color', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormSubmitButton
                    type='submit'
                    name='sample'
                    label= "Muzamil"
                    diasbled = {true}
                    color = "secondary"
                    onClick={() => { console.log('I was pressed')}} 
                    
                />
            </Formik>
        </BlueBaseApp>

    ))   

    .add('With label , value and label placement as prop', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormSubmitButton
                    type='submit'
                    name='sample'
                    label="With some props"
                    value = "I am Value"
                    labelPlacement = "start"
                />
            </Formik>
        </BlueBaseApp>

    ))   
    .add('On value Change', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormSubmitButton
                    type='submit'
                    name='sample'
                    onValueChange={handle}
                />
            </Formik>
        </BlueBaseApp>

    ))   


    
    
    
    
    ;