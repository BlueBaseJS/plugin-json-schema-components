import {   getComponent } from '@bluebase/components';
 import { FormSwitchInputProps } from '../FormSwitchInput';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { BlueBaseApp } from '@bluebase/core';
import { Formik } from 'formik';
import {plugins} from './getPlugins'
const FormSwitchInput = getComponent<FormSwitchInputProps>('FormSwitchInput');


const onChange = (event:any,selected:any) => {
    console.log('Previous state', event);

    console.log("Selected" ,selected)
  };

storiesOf('Form Switch Input', module)

    .add('With default props and color-green', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormSwitchInput
                    type='switch'
                    name='sample'
                    color = 'green'
                >
                </FormSwitchInput>
            </Formik>
        </BlueBaseApp>
    ))

    .add('With color secondary prop ', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormSwitchInput
                    type='switch'
                    name='sample'
                    color = 'secondary'
                >
                </FormSwitchInput>
            </Formik>
        </BlueBaseApp>
    ))
        
    .add('With label and label placement-start ', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
           
                <FormSwitchInput
                    type='switch'
                    name='sample'
                    label = 'Select Switch'
                    labelPlacement = 'start'
                >
                </FormSwitchInput>
                
            </Formik>
        </BlueBaseApp>
    ))

    .add('With label and label placement-end ', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
           
                <FormSwitchInput
                    type='switch'
                    name='sample'
                    label = 'Select Switch'
                    labelPlacement = 'end'
                >
                </FormSwitchInput>
                
            </Formik>
        </BlueBaseApp>
    ))
    .add('With label and label placement-top ', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
           
                <FormSwitchInput
                    type='switch'
                    name='sample'
                    label = 'Select Switch'
                    labelPlacement = 'top'
                >
                </FormSwitchInput>
                
            </Formik>
        </BlueBaseApp>
    ))

    .add('With disabled prop ', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormSwitchInput
                    type='switch'
                    name='sample'
                    disabled  = {true}
                >
                </FormSwitchInput>
            </Formik>
        </BlueBaseApp>
    ))

    .add('With thumbcolor ios ', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormSwitchInput
                    type='switch'
                    name='sample'
                    thumbColor = 'red'
                    value = {false}
                >
                </FormSwitchInput>
            </Formik>
        </BlueBaseApp>
    ))

    .add('With onValueChange', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormSwitchInput
                    type='switch'
                    name='sample'
                    onValueChange = {onChange}
                >
                </FormSwitchInput>
            </Formik>
        </BlueBaseApp>
    ))

    ;