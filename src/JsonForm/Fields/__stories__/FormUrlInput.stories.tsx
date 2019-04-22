import { getComponent } from '@bluebase/components';
import { FormUrlInputProps } from '../FormUrlInput';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { BlueBaseApp } from '@bluebase/core';
import { Formik } from 'formik';
import {plugins} from './getPlugins'

const FormUrlInput = getComponent<FormUrlInputProps>('FormUrlInput');

storiesOf('FormUrlInput', module)

    .add('With Placeholder ,label and autofocus', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormUrlInput
                    type='url'
                    name='sample'
                     placeholder="Enter Name" 
                     autoFocus={true}
                     required = {true}
                />
            </Formik>
        </BlueBaseApp>

    ))   

    ;