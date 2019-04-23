import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { getComponent } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('Filter form', module)

    .add('With default props', () => (
        <ScrollView>
            <JsonForm
                schema={{
                    fields: [
                        {
							name: 'form-actions',
							type: 'actions',
							direction : 'left',
							
							fields: [{
								direction: 'left',
							   name: 'form-actions',
							   type: 'actions',
							   fields: [
								   {
									   schema: {
										   component: 'Text',
										   text : 'Brands',
										   
										   props : {
											   style : {fontWeight:'bold', fontSize : 18}
										   }
									   },
									   type: 'component',
								   },
							   ]
						   },
						  
                    
                    ]},
                    
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
                                        component: 'Text', text: 'Orient',
                                        props: {
                                            style: { marginLeft: 5,marginTop :4 }
                                        },
                                    },
                                    type: 'component'
                                }

                            ],
                         
                        },

                        {
							name: 'form-actions',
							type: 'actions',
							direction : 'left',
							
							fields: [{
								direction: 'left',
							   name: 'form-actions',
							   type: 'actions',
							   fields: [
								   {
									   schema: {
										   component: 'Text',
										   text : 'Category',
										   
										   props : {
											   style : {fontWeight:'bold', fontSize : 18}
										   }
									   },
									   type: 'component',
								   },
							   ]
						   },
						  
                    
                    ]},
						
                       
                    
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
                                        component: 'Text', text: 'Air conditioner',
                                        props: {
                                            style: { marginLeft: 5,marginTop :4 }
                                        },
                                    },
                                    type: 'component'
                                }

                            ],
                         
                        },

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
                                        component: 'Text', text: 'Water Dispensor',
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
                                        component: 'Checkbox',
                                        props : {
                                            style : {padding :0}
                                        }
                                    },
                                    type: 'component',
                                },
                                {
                                    schema: {
                                        component: 'Text', text: 'Refrigerator',
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
                                        component: 'Checkbox',
                                        props : {
                                            style : {padding :0}
                                        }
                                    },
                                    type: 'component',
                                },
                                {
                                    schema: {
                                        component: 'Text', text: 'Socket',
                                        props: {
                                            style: { marginLeft: 5,marginTop :4 }
                                        },
                                    },
                                    type: 'component'
                                }

                            ]
                        },
                       
                        {
                            schema: { component: 'Divider' },
                            type: 'component',
                        },

                        



                    ],
                    initialValues: {
                    },
                    onSubmit: (values, form) => {
                        // tslint:disable-next-line: no-console
                        console.log('Filters', values);

                        setTimeout(() => {
                            form.setSubmitting(false);
                        }, 2000);
                    },
                }}
            />
        </ScrollView>
    ))
    
    ;