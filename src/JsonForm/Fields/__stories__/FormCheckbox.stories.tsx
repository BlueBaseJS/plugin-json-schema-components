import { getComponent } from '@bluebase/components';
import { FormCheckboxInputProps } from '../FormCheckboxInput';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { BlueBaseApp } from '@bluebase/core';
import { Formik } from 'formik';
import {plugins} from './getPlugins'

const FormCheckboxInput = getComponent<FormCheckboxInputProps>('FormCheckboxInput');

function handleChecked(event: any,selected:any) {
    console.log('Previous state', event);
    console.log('slected ', selected);
};

storiesOf('FormCheckboxInput', module)

    .add('with label', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormCheckboxInput
                    type='checkbox'
                    name='sample'
                    label= "Muzamil"
                />
            </Formik>
        </BlueBaseApp>

    ))   
    .add('with checked-true and color green', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormCheckboxInput
                    type='checkbox'
                    name='sample'
                    label= "Muzamil"
                    checked = {true}
                    color = "green"
                />
            </Formik>
        </BlueBaseApp>

    ))   
    .add('with color secondary', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormCheckboxInput
                    type='checkbox'
                    name='sample'
                    label= "Muzamil"
                    checked = {true}
                    color = "secondary"
                />
            </Formik>
        </BlueBaseApp>

    ))   

    .add('With label , and labelPlacement-start', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormCheckboxInput
                    type='checkbox'
                    name='sample'
                    label="Label"
                    value = "I am Value"
                    labelPlacement = "start"
                />
            </Formik>
        </BlueBaseApp>

    ))   
    .add('With labelPlacement-top', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormCheckboxInput
                    type='checkbox'
                    name='sample'
                    label="Label"
                    value = "I am Value"
                    labelPlacement = "top"
                />
            </Formik>
        </BlueBaseApp>

    ))   
    .add('With labelPlacement-end', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormCheckboxInput
                    type='checkbox'
                    name='sample'
                    label="Label"
                    value = "I am Value"
                    labelPlacement = "end"
                />
            </Formik>
        </BlueBaseApp>

    ))   
 
    .add('with disbaled', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormCheckboxInput
                    type='checkbox'
                    name='sample'
                    disabled ={true}
                    />
            </Formik>
        </BlueBaseApp>

    ))   
    .add('with interminate ', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
            <>
                <FormCheckboxInput
                    type='checkbox'
                    name='sample'
                    indeterminate ={true}
                    label = 'Male'
                />
                 <FormCheckboxInput
                    type='checkbox'
                    name='sample'
                    indeterminate ={true}
                    label = 'Female'

                />
                </>
            </Formik>
        </BlueBaseApp>

    ))   

    .add('On value Change', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormCheckboxInput
                    type='checkbox'
                    name='sample'
                    label = 'check me'
                    onValueChange={handleChecked}
                />
            </Formik>
        </BlueBaseApp>

    ))  

    
    
    
    
    ;