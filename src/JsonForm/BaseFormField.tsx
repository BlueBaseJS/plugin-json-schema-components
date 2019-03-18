import { StyleProp, ViewStyle } from 'react-native';
import { View, getComponent } from '@bluebase/components';
import React from 'react';
// import { TextInput } from 'react-native';
import { FormikContext, connect, getIn } from 'formik';
import { Theme } from '@bluebase/core';

export interface BaseFormFieldStyles {
	leftContainer: StyleProp<ViewStyle>;
	mainContainer: StyleProp<ViewStyle>;
	rightContainer: StyleProp<ViewStyle>;
	root: StyleProp<ViewStyle>;
}

export interface BaseFormFieldProps {
	left?: React.ReactNode;
	right?: React.ReactNode;
	MainComponent?: React.ComponentType<any>;
	styles?: Partial<BaseFormFieldStyles>;

	[key: string]: any;
}


// TODO: Add better typing, consider filter this map
const fieldResolutionMap: any = {
	default: ['TextInput', 'Noop'],
	email: ['EmailInput', 'TextInput', 'Noop'],
	password: ['PasswordInput', 'TextInput', 'Noop'],
	submit: ['SubmitInput', 'Button', 'Noop'],
};

class BaseFormFieldInner<Values = {}> extends React.Component<BaseFormFieldProps> {

	static defaultProps: Partial<BaseFormFieldProps> = {};

	private MainComponent?: React.ComponentType<any>;

	static defaultStyles = (theme: Theme): BaseFormFieldStyles => ({
		leftContainer: {},
		mainContainer: {
			flex: 1,
		},
		rightContainer: {},
		root: {
			paddingVertical: theme.spacing.unit
		}
	})

	componentWillMount() {
		// Resolve MainComponent
		const type = this.props.type;
		if (!this.MainComponent) {
			this.MainComponent = (type && fieldResolutionMap[type])
			? getComponent(...fieldResolutionMap[type])
			: getComponent(...fieldResolutionMap.default);
		}
	}

	componentDidMount() {
    // Register the Field with the parent Formik. Parent will cycle through
    // registered Field's validate fns right prior to submit
		this.props.formik.registerField(this.props.name, this);
	}

	componentDidUpdate(
    prevProps: BaseFormFieldProps & { formik: FormikContext<Values> }
  ) {
		if (this.props.name !== prevProps.name) {
			this.props.formik.unregisterField(prevProps.name);
			this.props.formik.registerField(this.props.name, this);
		}

		if (this.props.validate !== prevProps.validate) {
			this.props.formik.registerField(this.props.name, this);
		}
	}

	componentWillUnmount() {
		this.props.formik.unregisterField(this.props.name);
	}

	render() {

		// const type = this.props.type;

		const {
      validate,
      name,
      render,
      children,
			formik,
			// type,
			left, right, styles = {},
      ...props
    } = (this.props as BaseFormFieldProps & { formik: FormikContext<Values>; }) as any;

		const {
      validate: _validate,
      validationSchema: _validationSchema,
      ...form
		} = formik;

		const field = {
			name,
			onBlur: formik.handleBlur,
			onChange: formik.handleChange,
			value:
        props.type === 'radio' || props.type === 'checkbox'
          ? props.value // React uses checked={} for these inputs
          : getIn(formik.values, name),
		};

		// const bag = { field, form: restOfFormik };

		const MainComponent = this.MainComponent;
		const mainComponentProps = {
			form,
			...field,
			...props,
		};

		return (
			<View style={styles.root}>
				{left && <View style={styles.leftContainer}>{left}</View>}
				{MainComponent &&
					<View style={styles.mainContainer}>
						<MainComponent {...mainComponentProps}>
							{children}
						</MainComponent>
					</View>
				}
				{right && <View style={styles.rightContainer}>{right}</View>}
			</View>
		);
	}
}

export const BaseFormField = connect(BaseFormFieldInner as any);