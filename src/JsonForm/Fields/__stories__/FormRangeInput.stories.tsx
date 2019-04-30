import {   getComponent } from '@bluebase/components';
 import { FormRangeInputProps } from '../FormRangeInput';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { BlueBaseApp } from '@bluebase/core';
import { Formik } from 'formik';
import {plugins} from './getPlugins'
const FormRangeInput = getComponent<FormRangeInputProps>('FormRangeInput');

function handle (value:any) {
    console.log(value)
}

storiesOf('Form Range Input', module)

    .add('With min-16 max-32 props', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormRangeInput
                    type='range'
                    name='range'
                    min = {16}
                    max = {32}
                    step = {1}
                >
                </FormRangeInput>
            </Formik>
        </BlueBaseApp>
    ))

    .add('With no min max given', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormRangeInput
                    type='range'
                    name='range'
                >
                </FormRangeInput>
            </Formik>
        </BlueBaseApp>
    ))

        //error makes the label red colored
    .add('With label and error props', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormRangeInput
                    type='range'
                    name='range'
                    min = {16}
                    max = {32}
                    step = {1}
                    label = 'Select Range'
                    error = {true}
                >
                </FormRangeInput>
               
            </Formik>
        </BlueBaseApp>
    ))

    .add('With Helpertext', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormRangeInput
                    type='range'
                    name='range'
                    min = {16}
                    max = {32}
                    step = {1}
                   helperText = 'Please Select between 24 to 28'
                >
                </FormRangeInput>
            </Formik>
        </BlueBaseApp>
    ))

    .add('With Disbaled prop', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormRangeInput
                    type='range'
                    name='range'
                    min = {16}
                    max = {32}
                    step = {1}
                   disabled = {true}
                >
                </FormRangeInput>
            </Formik>
        </BlueBaseApp>
    ))

    .add('With onValueChange', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormRangeInput
                    type='range'
                    name='range'
                    onValueChange= {handle}
                >
                </FormRangeInput>
            </Formik>
        </BlueBaseApp>
    ))

  


    ;