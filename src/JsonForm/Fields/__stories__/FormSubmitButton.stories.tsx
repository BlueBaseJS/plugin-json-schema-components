import {Text, getComponent } from '@bluebase/components';
import { FormSubmitButtonProps } from '../FormSubmitButton';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { BlueBaseApp } from '@bluebase/core';
import { Formik } from 'formik';
import {plugins} from './getPlugins'

const FormSubmitButton = getComponent<FormSubmitButtonProps>('FormSubmitButton');

function handleSubmit  (event :any) {
    console.log('Called ',event);
}

storiesOf('FormSubmitButton', module)

    .add('with title + FullWidth', () => (
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
    .add('with Disabled-true', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormSubmitButton
                    type='submit'
                    name='sample'
                    disabled = {true}
                    
                />
            </Formik>
        </BlueBaseApp>

    ))   
    .add('with Primary color', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormSubmitButton
                    type='submit'
                    name='sample'
                    color = "primary"
                    
                />
            </Formik>
        </BlueBaseApp>

    ))   
    .add('with Secondary color and size-small ', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormSubmitButton
                    type='submit'
                    name='sample'
                    color = "secondary"
                    size = 'small'

                    
                />
            </Formik>
        </BlueBaseApp>

    ))    
    .add('with Secondary color and size-medium ', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormSubmitButton
                    type='submit'
                    name='sample'
                    color = "secondary"
                    size = 'medium'

                    
                />
            </Formik>
        </BlueBaseApp>

    ))  
    .add('with Secondary color and size-large ', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormSubmitButton
                    type='submit'
                    name='sample'
                    color = "secondary"
                    size = 'large'
                />
            </Formik>
        </BlueBaseApp>

    ))   
  
 
 
    .add('with Child-ReactNode', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormSubmitButton
                    type='submit'
                    name='sample'
                    color = "secondary"
                    children = {<Text style = {{color:'white'}}>I am Child node</Text>}
                    
                />
            </Formik>
        </BlueBaseApp>

    ))   
    .add('with variant -outlined', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormSubmitButton
                    type='submit'
                    name='sample'
                    color = "secondary"
                    variant = "outlined"                    
                />
            </Formik>
        </BlueBaseApp>

    ))   
    .add('with variant -text', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormSubmitButton
                    type='submit'
                    name='sample'
                    color = "secondary"
                    variant = "text"                    
                />
            </Formik>
        </BlueBaseApp>

    )) 
    

    .add('with state loading-true', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormSubmitButton
                    type='submit'
                    name='sample'
                    color = "secondary"
                    loading = {true}
                    
                />
            </Formik>
        </BlueBaseApp>

    ))   
    .add('with on Press handler', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormSubmitButton
                    type='submit'
                    name='sample'
                    color = "primary"
                    size = 'large'
                    onPress = {handleSubmit}
                />
            </Formik>
        </BlueBaseApp>

    ))   
 

    ;