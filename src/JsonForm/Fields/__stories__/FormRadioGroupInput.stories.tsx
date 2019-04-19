import {  getComponent } from '@bluebase/components';
 import { FormRadioGroupInputProps } from '../FormRadioGroupInput';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { BlueBaseApp } from '@bluebase/core';
import { Formik } from 'formik';
import {plugins} from './getPlugins'

const onChange = (event:any) => {
    console.log ("selected - ", event);
   
  };

const FormRadioGroupInput = getComponent<FormRadioGroupInputProps>('FormRadioGroupInput');

storiesOf('FormRadioGroupInput', module)
    .add('With Radio', () => (

        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormRadioGroupInput
                    type='radio-group'
                    name='sample'
                    items= {[{label:"Male",value:"male"  },{label:"Female",value:"female"  }]}
                >
                </FormRadioGroupInput>
            </Formik>
        </BlueBaseApp>
    ))

    .add('With helper Text', () => (

        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormRadioGroupInput
                    type='radio-group'
                    name='sample'
                    items= {[{label:"Male",value:"male"  },{label:"Female",value:"female"  }]}
                    helperText ="Select One"
                    value = {'male'}
                >
                </FormRadioGroupInput>
            </Formik>
        </BlueBaseApp>
    ))

    .add('With Label', () => (

        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormRadioGroupInput
                    type='radio-group'
                    name='sample'
                    items= {[{label:"Male",value:"male"  },{label:"Female",value:"female"  }]}
                    label = "Label"
                    
                >
                </FormRadioGroupInput>
            </Formik>
        </BlueBaseApp>
    ))

    .add('With error', () => (

        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormRadioGroupInput
                    type='radio-group'
                    name='sample'
                    items= {[{label:"Male",value:"male"  },{label:"Female",value:"female"  }]}
                    error = {true}
                >
                </FormRadioGroupInput>
            </Formik>
        </BlueBaseApp>
    ))

    .add('With onValueChange', () => (

        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormRadioGroupInput
                    type='radio-group'
                    name='sample'
                    items= {[{label:"Male",value:"male"  },{label:"Female",value:"female"  }]}
                    onValueChange = {onChange}
                >
                </FormRadioGroupInput>
            </Formik>
        </BlueBaseApp>
    ))

    ;