import { JsonFormProps } from '..';
import React from 'react';
import { ScrollView } from 'react-native';
import { Text, getComponent ,DynamicIcon} from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const JsonForm = getComponent<JsonFormProps>('JsonForm');

storiesOf('Add sites', module)

  .add('With default props', () => (
    <ScrollView>
      <JsonForm
        schema={{
          fields: [

            {
              label: 'Site Name',
              name: 'username',
              type: 'text',
              required: false,
              left: <DynamicIcon type="image" size={40} source={{ uri: 'https://picsum.photos/200' }} />

            },

            {
              label: 'Site Type',
              name: 'lang',
              type: 'picker',
              left: <Text>Icon</Text>,



              items: [{
                label: 'Office',
                value: 'js'
              }, {
                label: 'Work',
                value: 'java'
              }, {
                label: 'Home',
                value: 'java'
              }]
            },
            {
              direction: 'left',
              name: 'form-actions',
              type: 'actions',

              fields: [
                {
                  schema: {
                    component: 'Image',

                    props: {
                      source: { uri: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }
                      , style: { width: 70, height: 70 }
                    }

                  },
                  type: 'component',
                },
                ,
                {
                  name: 'Save',
                  title: 'Choose File',
                  type: 'file',
                }]

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
                nested :true
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
  ));