import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('Location', module)

    .add('With default props', () => (
        <ScrollView>
            <JsonForm
                schema={{
                    fields: [

                        {
                            direction: 'left',
                            name: 'form-actions',
                            type: 'actions',
                            fields: [
                                {
                                    schema: {
                                        component: 'Image',

                                        props: {
                                            source: { uri: 'https://png.pngtree.com/svg/20160805/a47afb7f9c.png' }
                                            , style: { width: 20, height: 20 ,}
                                        }
                                    },
                                    type: 'component',
                                },
                                {
                                    schema: {
                                        component: 'Text', text: 'Location',
                                        props: {
                                            style: { marginLeft: 10 ,marginTop :2}
                                        },
                                    },
                                    type: 'component'
                                }

                            ]
                        },

                        ////map here////////////////////////////////////////////////
                    
                        {
                            direction: 'left',
                            name: 'form-actions',
                            type: 'actions',
                            fields: [
                                {
                                    schema: {
                                        component: 'Checkbox',
                                        props : {
                                            style : {padding :0}
                                        }
                                    },
                                    type: 'component',
                                },
                                {
                                    schema: {
                                        component: 'Text', text: 'Set Manually',
                                        props: {
                                            style: { marginLeft: 5,marginTop :4 }
                                        },
                                    },
                                    type: 'component'
                                }

                            ]
                        },
                        {
                            direction: 'left',
                            name: 'form-actions',
                            type: 'actions',
                            fields: [
                                {
                                    schema: {
                                        component: 'Text' ,text:'Latitude : 30.238261',
                                        props : {
                                            style : {fontWeight :'bold'}
                                        }
                                    },
                                    type: 'component',
                                },
                                {
                                    schema: {
                                        component: 'Text' ,text:'Longitude : 70.56261',
                                        props : {
                                            style : {fontWeight :'bold'}
                                        }
                                    },
                                    type: 'component',
                                },

                            ]
                        },
                        {
                            schema: { component: 'Divider' },
                            type: 'component',
                        },

                        {
                            direction: 'right',
                            name: 'form-actions',
                            type: 'actions',
                            

                            fields: [{
                                name: 'Save',
                                title: 'Save',
                                type: 'submit',
                                nested : true
                            }]
                        }



                    ],
                    initialValues: {
                    },
                    onSubmit: (values, form) => {
                        // tslint:disable-next-line: no-console
                        console.log('Email sent', values);

                        setTimeout(() => {
                            form.setSubmitting(false);
                        }, 2000);
                    },
                }}
            />
        </ScrollView>
    ))
    
    ;