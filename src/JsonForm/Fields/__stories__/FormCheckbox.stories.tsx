import { getComponent } from '@bluebase/components';
import { FormCheckboxInputProps } from '../FormCheckboxInput';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { BlueBaseApp } from '@bluebase/core';
import { Formik } from 'formik';
import {plugins} from './getPlugins'

const FormCheckboxInput = getComponent<FormCheckboxInputProps>('FormCheckboxInput');

function handleChecked(value: any) {
    console.log('Checked ', value.target.value);
}

storiesOf('FormCheckboxInput', module)

    .add('with label checked prop and color', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormCheckboxInput
                    type='checkbox'
                    name='sample'
                    label= "Muzamil"
                    checked = {true}
                    color = "primary"
                    
                />
            </Formik>
        </BlueBaseApp>

    ))   

    .add('With label , value and label placement as prop', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormCheckboxInput
                    type='checkbox'
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
                <FormCheckboxInput
                    type='checkbox'
                    name='sample'
                    onValueChange={handleChecked}
                    
                />
            </Formik>
        </BlueBaseApp>

    ))   


    
    
    
    
    ;