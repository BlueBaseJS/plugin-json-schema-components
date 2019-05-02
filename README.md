# 🎊 Json Schema Component

##### Whats its all about

Using this component we can make cross platform forms means you can make forms i.e login,signup etc easily using json objects. Thats really cool.
On the other side we can also make forms using component approach. Form validation handling is already done using formik libarary.

##### Purpose and feature here

User can make forms using just json objects with simple syntax and defined props. Also he can make his own custom components

##### Use

clone it and run `yarn install`

## TextInput Props

|   TextInput    | 🌏 Web | 📱 Android | IOS  |
| :------------: | :----: | :--------: | :--: |
|   multiline    |   ✔️   |     ✔️     |  ✔️  |
| underlineColor |   ?    |     ✔️     |  ✔️  |
|   maxLength    |   ✖️   |     ✔️     |  ✔️  |
|     error      |   ✔️   |     ?      |  ?   |
|  placeholder   |   ✔️   |     ✔️     | ️ ✔️ |
|     style      |   ✔️   |     ✔️     | ️ ✔️ |
|     label      |   ✔️   |     ✔️     | ️ ✔️ |
|    variant     |   ✔️   |     ✔️     | ️ ✔️ |
|    rowsMax     |   ✔️   |     ?      |  ?   |
|    editable    |   ✔️   |     ✔️     | ️ ✔️ |
|   autofocus    |   ✔️   |     ✔️     | ️ ✔️ |
|    required    |   ✔️   |     ✖️     | ️ ✖️ |
|   helperText   |   ✔️   |     ✖️     | ️ ✖️ |
|     style      |   ✔️   |     ✔️     | ️ ✔️ |
|    disabled    |   ✔️   |     ?      |  ?   |
|    onChange    |   ✔️   |     ✔️     |  ️ ✔️  |

## Picker Props

|         Picker         | 🌏 Web | 📱 Android | IOS |
| :--------------------: | :----: | :--------: | :-: |
|        disabled        |   ✔️   |     ✖️     | ✖️  |
|         error          |   ✔️   |     ✖️     | ✖️  |
|       helperText       |   ✔️   |     ✖️     | ✖️  |
|         label          |   ✔️   |     ✖️     | ✖️  |
|        variant         |   ✔️   |     ✖️     | ✖️  |
|          mode          |   ✔️   |     ✔️     |  ?  |
|      placeholder       |   ✔️   |     ✖️     | ✖️  |
|         style          |   ✔️   |     ✖️     | ✖️  |
|         style          |   ✖️   |     ✖️     | ✖️  |
|     selectedValue      |   ?    |     ?      |  ?  |
| items-array of objects |   ✔️   |     ✔️     |  ?  |
|     onValueChange      |   ✔️   |     ✔️     |  ?  |

###### Common Mistakes

- items - is the array of objects to be render in label-value form i.e


                items= {[
                          {label:"Male",value:"Female"  },
                          {label:"Node",value:"React"  }
                        ]}

## RadioGroup Props

|  RadioGroup   | 🌏 Web | 📱 Android | IOS |
| :-----------: | :----: | :--------: | :-: |
|   disabled    |   ✔️   |     ✖️     | ✖️  |
|     error     |   ✔️   |     ✖️     | ✖️  |
|  helperText   |   ✔️   |     ✔️     | ✔️  |
|     label     |   ✔️   |     ✔️     | ✔️  |
|     label     |   ✔️   |     ✖️     | ✖️  |
|    variant    |   ✔️   |     ✖️     | ✖️  |
|     mode      |   ✔️   |     ✔️     |  ?  |
|  placeholder  |   ✔️   |     ✖️     | ✖️  |
|     style     |   ✔️   |     ✖️     | ✖️  |
| onValueChange |   ✔️   |     ✔️     |  ?  |

## Switch Props

|     Switch     | 🌏 Web | 📱 Android | IOS |
| :------------: | :----: | :--------: | :-: |
|     label      |   ✔️   |     ✔️     | ✔️  |
|     color      |   ✔️   |     ✖️     | ✔️  |
| labelPlacement |   ✔️   |     ✔️     | ✔️  |
|    disabled    |   ✔️   |     ✔️     | ✔️  |
|     value      |   ?    |     ?      |  ?  |
|    variant     |   ✔️   |     ✖️     | ✖️  |
| onValueChange  |   ✔️   |     ?      |  ?  |

## Button Props

|           Button            | 🌏 Web | 📱Android | IOS |
| :-------------------------: | :----: | :-------: | :-: |
|         children-RN         |   ✔️   |    ✔️     | ✔️  |
|            color            |   ✔️   |    ✔️     | ✔️  |
|            title            |   ✔️   |    ✔️     | ✔️  |
| variant i.e (text,outlined) |   ✔️   |    ✔️     | ✔️  |
|          fullWidth          |   ✖️   |    already fullWidth       |  ?  |
|            value            |   ?    |     ?     |  ?  |
|            size             |   ✔️   |    ✖️     | ✖️  |
|          disabled           |   ✔️   |    ✔️     | ✔️  |
|           loading           |   ✖️   |    ✔️     | ✔️  |
|           onPress           |   ✔️   |    ✖️     |  ?  |

## Checkbox Props

|    checkbox    | 🌏 Web | 📱 Android | IOS |
| :------------: | :----: | :--------: | :-: |
|    checked     |   ✖️   |     ✖️     | ✖️  |
|     color      |   ✔️   |     ?      |  ?  |
|    disabled    |   ✔️   |     ✔️     | ✔️  |
|     value      |   ✖️   |     ?      |  ?  |
| labelPlacement |   ✔️   |     ?      |  ?  |
|     label      |   ✔️   |     ✔️     | ✔️  |
|  interminate   |   ✔️   |     ✔️     | ✔️  |
| onValueChange  |   ✔️   |     ?      |  ?  |

###### Issues

Icon not showing on natives

## Range Props

| Range/slider  | 🌏 Web | 📱 Android | IOS |
| :-----------: | :----: | :--------: | :-: |
|    checked    |   ✖️   |     ✖️     | ✖️  |
|     color     |   ✔️   |     ?      |  ?  |
|      min      |   ✔️   |     ✔️     | ✔️  |
|      max      |   ✔️   |     ✔️     | ✔️  |
|     step      |   ✔️   |     ✔️     | ✔️  |
|     label     |   ✔️   |     ✖️     | ✖️  |
|     error     |   ✔️   |     ✖️     | ✖️  |
|  helperText   |   ✔️   |     ✖️     | ✖️  |
|   disabled    |   ✔️   |     ✔️     | ✔️  |
| onValueChange |   ✔️   |     ✔️     |  ?  |

##### Default values

web : 0-100
native : 0-1

### File paths

Json form examples located in **src/JsonForms/stories**

Components are located in **src/JsonForms/Fields**
-Here you will find _tests_ and _stories_ of all running components

Parent component **src/JsonForms/BaseFormField**

Json form component **src/JsonForms/JsonForm** by which all json objects(forms) being able to render

## Parent component

All forms fields goes towrds `src/JsonForms/BaseFormField` component . It has left,right and main component props. Main component renders the fields . It means **we can also specify** icon, text , image and anything on the left or right side with these props.

## How to make form in Json? Json Form Code example

Forms using json format are being made using this code snippet !

`import the {JsonForm} from the './JsonForms'`
and use it

                <JsonForm
    			schema = {{
    			        fields: [{

    					label: 'Email',
    					name: 'email',
    					type: 'email',
    					required: true,
                            	 }],

                             	  initialValues: {},
    			          onSubmit: (values, form) => {
    					setTimeout(() => {
    						form.setSubmitting(false);
    					}, 2000);}

                     		}}
                  />

All the forms are submitted with the input values when we press the button !

## Json form fields - type based flow

All of objects which have type 'actions' goes towards this file `src/JsonForm/Fields/FormActions` . Styling properties are predetermined and applied already, we have only make forms in objects formats with type defined i.e actions, text , number etc

    						{
    							direction: 'right',
    							name: 'form-actions',
    							type: 'actions',

    							fields: [{
    								name: 'submit',
    								title: 'Signup',
    								type: 'submit',
    								nested: true
    							}]
    						}

Direction has predetermined props left ,right ,space-between to place our nested childs according to that . It means if direction is right then the submit button is placed on right of the form. Property applies on the child , in our case it applies on submit button. We can render more nested childs.

##### Common mistakes

- When making 'submit' or 'reset' type form **WITHIN** (nested in) the 'actions' type form **MUST** use property 'nested = true' for that. (only applies for button type forms) (As exmple defined above)
- You can also apply style to the 'action' type form
- **Don't** use nested property for texts
- Initialvalues and onSubmit object is **must** .

###### Hint : This component basicaly allows us to render things in a row

Here down is the path for the more examples of json forms

## TextInputs controls- type based

All **flow** of text Inputs i.e email,password,text,number,url with type defined as **text, number, email, number** etc are going towards the `FormTextInput` along with some must given Formik values .
Validation of formik is handling on the upper level ,we have just wrap our component in the formik wrapper with some default values as prop to formik. For example

                         		                {
    							label: 'Email',
    							name: 'email',
    							type: 'email',
    							required: true,
    						},

Now flow goes towrds 'FormTextInput' with type 'email' and there further logic applies based upon the type !!

### Running Example of a Picker component

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

Documentation of the Json schema lasts here.
