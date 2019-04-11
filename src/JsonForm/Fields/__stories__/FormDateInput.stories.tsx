import { getComponent } from '@bluebase/components';
import { FormDateInputProps } from '../FormDateInput';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { BlueBaseApp } from '@bluebase/core';
import { Formik } from 'formik';
import Plugin from '../../..'
import MuiPlugin from '@bluebase/plugin-material-ui'
import ReactNativePaperPlugin from '@bluebase/plugin-react-native-paper';


 const FormDateInput = getComponent<FormDateInputProps>('FormDateInput');

storiesOf('FormDateInput', module)

    .add('With one Selected Date', () => (
        <BlueBaseApp plugins={[Plugin,ReactNativePaperPlugin]}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
                <FormDateInput
                    type='date'
                    name='sample'
                    min = "2019-01-01"
                    label=""
                     variant = 'outlined'

                />
            </Formik>
        </BlueBaseApp>


    ))
    .add('With Two Selected Date', () => (
        <BlueBaseApp plugins={[Plugin,MuiPlugin]}>
            <Formik initialValues={{ sample : ''}} onSubmit={console.log}>
            <>
                <FormDateInput
                    type='date'
                    name='sample'
                    min = "2019-01-01"
                    autoWidth = {true}
                    variant = 'outlined'

                />

                 <FormDateInput
                    type='date'
                    name='sample'
                    min = "2019-01-01"
                    label=""
                    autoWidth = {true}
                    variant = 'outlined'

                />
                </>
            </Formik>
        </BlueBaseApp>


    ))




    ;