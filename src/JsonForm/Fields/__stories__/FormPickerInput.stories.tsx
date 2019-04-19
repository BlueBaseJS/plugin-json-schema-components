import {   getComponent } from '@bluebase/components';
 import { FormPickerInputProps } from '../FormPickerInput';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { BlueBaseApp } from '@bluebase/core';
import { Formik } from 'formik';
import {plugins} from './getPlugins'

const FormPickerInput = getComponent<FormPickerInputProps>('FormPickerInput');

function onChange(name: any,selected:any) {
    console.log('Checked ', name);
    console.log('Selected ', selected);
};


storiesOf('FormPickerInput', module)
    .add('With Picker', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormPickerInput
                    type='picker'
                    name='sample'
                    items= {[{label:"Male",value:"Female"  },
                    {label:"Node",value:"React"  }]}
                >
                </FormPickerInput>
            </Formik>
        </BlueBaseApp>
    ))

    .add('With disabled', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormPickerInput
                    type='picker'
                    name='sample'
                    items= {[{label:"Male",value:"Female"  },
                    {label:"Node",value:"React"  }]}
                     disabled = {true}
                >
                </FormPickerInput>
            </Formik>
        </BlueBaseApp>
    ))

    .add('With label and helper text', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormPickerInput
                    type='picker'
                    name='sample'
                    items= {[{label:"Male",value:"Female"  },
                    {label:"Node",value:"React"  }]}
                   helperText = "Helper Text - Please Select one item"
                   label = {"Slect one item"}
                >
                </FormPickerInput>
            </Formik>
        </BlueBaseApp>
    ))

    .add('With variant outlined and mode-dialogue', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormPickerInput
                    type='picker'
                    name='sample'
                    items= {[{label:"Male",value:"Female"  },
                    {label:"Node",value:"React"  }]}
                   variant = "filled"
                   mode = "dialog"
                >
                </FormPickerInput>
            </Formik>
        </BlueBaseApp>
    ))

    .add('With placeholder', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormPickerInput
                    type='picker'
                    name='sample'
                    items= {[{label:"Male",value:"Female"  },
                    {label:"Node",value:"React"  }]}
                    placeholder = "I am placeholder"
                >
                </FormPickerInput>
            </Formik>
        </BlueBaseApp>
    ))

    .add('With style ', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormPickerInput
                    type='picker'
                    name='sample'
                    items= {[{label:"Male",value:"Female"  },
                    {label:"Node",value:"React"  }]}
                    error = {true}
                    
                  
                >
                </FormPickerInput>
            </Formik>
        </BlueBaseApp>
    ))

    .add('With selected value', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormPickerInput
                    type='picker'
                    name='sample'
                    items= {[{label:"Male",value:"Female"  },
                    {label:"Node",value:"React"  }]}
                   // selectedValue = {values}
                >
                </FormPickerInput>
            </Formik>
        </BlueBaseApp>
    ))

    .add('With onValueChange', () => (
        <BlueBaseApp plugins={plugins}>
            <Formik initialValues={{ sample: '' }} onSubmit={console.log}>
                <FormPickerInput
                    type='picker'
                    name=''
                    items= {[{label:"Male",value:"Male"  },
                    {label:"Node",value:"Node"  },
                     {label:"Java",value:"Java"  }]}
                    onValueChange =  {onChange}                  
                  
                >
                </FormPickerInput>
            </Formik>
        </BlueBaseApp>
    ))


    ;