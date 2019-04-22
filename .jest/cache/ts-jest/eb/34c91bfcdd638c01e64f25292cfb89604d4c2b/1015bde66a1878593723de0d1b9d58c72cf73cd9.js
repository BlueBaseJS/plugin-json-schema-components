"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const formik_1 = require("formik");
const components_1 = require("@bluebase/components");
const react_1 = tslib_1.__importDefault(require("react"));
const BaseFormField = components_1.getComponent('BaseFormField');
exports.FormSwitchInput = (_a) => {
    var { type } = _a, props = tslib_1.__rest(_a, ["type"]);
    return (react_1.default.createElement(formik_1.Field, Object.assign({}, props), ({ field, form }) => {
        const name = props.name;
        // const val = props.value;
        const value = formik_1.getIn(form.values, name);
        const inputProps = Object.assign({ labelPlacement: 'start' }, props, { checked: Boolean(value), onValueChange: (_value, checked) => {
                form.setFieldValue(field.name, checked);
                console.log('moeez', value);
                console.log('moeez1props', props);
                console.log('moeez1props2checked', checked);
                value ? props.onValueChange ? props.onValueChange(value, checked) : null : (props.onValueChange ? props.onValueChange(value, checked) : null);
                // if (value){
                // 	if(props.onValueChange){
                // 		props.onValueChange(value,checked)
                // 	}
                // }
                // else if (!value){
                // 	if(props.onValueChange){
                // 		props.onValueChange(value,checked)
                // 	}
                // }
                // if (val){
                // 	if(props.onValueChange){
                // 		props.onValueChange(value,checked)
                // 	}
                // }
            } });
        return (react_1.default.createElement(BaseFormField, Object.assign({ MainComponent: components_1.Switch }, inputProps)));
    }));
};
exports.FormSwitchInput.defaultProps = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVN3aXRjaElucHV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFDdEMscURBQXlFO0FBRXpFLDBEQUEwQjtBQU8xQixNQUFNLGFBQWEsR0FBRyx5QkFBWSxDQUFxQixlQUFlLENBQUMsQ0FBQztBQUUzRCxRQUFBLGVBQWUsR0FBRyxDQUFDLEVBQXdDLEVBQUUsRUFBRTtRQUE1QyxFQUFFLElBQUksT0FBa0MsRUFBaEMsb0NBQVE7SUFFL0MsT0FBTyxDQUNOLDhCQUFDLGNBQUssb0JBQUssS0FBSyxHQUNmLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFRLEVBQUUsRUFBRTtRQUUxQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3hCLDJCQUEyQjtRQUMzQixNQUFNLEtBQUssR0FBRyxjQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUd2QyxNQUFNLFVBQVUsbUJBQ2YsY0FBYyxFQUFFLE9BQU8sSUFDcEIsS0FBSyxJQUNSLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQ3ZCLGFBQWEsRUFBRSxDQUFDLE1BQVcsRUFBRSxPQUFnQixFQUFFLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUMxQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUMsQ0FBQyxDQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBLElBQUksQ0FBQyxDQUFBO2dCQUUxSSxjQUFjO2dCQUNkLDRCQUE0QjtnQkFDNUIsdUNBQXVDO2dCQUN2QyxLQUFLO2dCQUNMLElBQUk7Z0JBQ0osb0JBQW9CO2dCQUNwQiw0QkFBNEI7Z0JBQzVCLHVDQUF1QztnQkFDdkMsS0FBSztnQkFDTCxJQUFJO2dCQUNKLFlBQVk7Z0JBQ1osNEJBQTRCO2dCQUM1Qix1Q0FBdUM7Z0JBQ3ZDLEtBQUs7Z0JBQ0wsSUFBSTtZQUlMLENBQUMsR0FDRCxDQUFDO1FBRUYsT0FBTyxDQUFDLDhCQUFDLGFBQWEsa0JBQUMsYUFBYSxFQUFFLG1CQUFNLElBQU0sVUFBVSxFQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQ00sQ0FDUCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsdUJBQWUsQ0FBQyxZQUFZLEdBQUcsRUFDOUIsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9Gb3JtU3dpdGNoSW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkLCBnZXRJbiB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgeyBTd2l0Y2gsIFN3aXRjaFByb3BzLCBnZXRDb21wb25lbnQgfSBmcm9tICdAYmx1ZWJhc2UvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCYXNlRm9ybUZpZWxkUHJvcHMgfSBmcm9tICcuLi9CYXNlRm9ybUZpZWxkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybVN3aXRjaElucHV0UHJvcHMgZXh0ZW5kcyBTd2l0Y2hQcm9wcyB7XG5cdHR5cGU6ICdzd2l0Y2gnLFxuXHRuYW1lOiBzdHJpbmcsXG59XG5cbmNvbnN0IEJhc2VGb3JtRmllbGQgPSBnZXRDb21wb25lbnQ8QmFzZUZvcm1GaWVsZFByb3BzPignQmFzZUZvcm1GaWVsZCcpO1xuXG5leHBvcnQgY29uc3QgRm9ybVN3aXRjaElucHV0ID0gKHsgdHlwZSwgLi4ucHJvcHMgfTogRm9ybVN3aXRjaElucHV0UHJvcHMpID0+IHtcblxuXHRyZXR1cm4gKFxuXHRcdDxGaWVsZCB7Li4ucHJvcHN9PlxuXHRcdHsoeyBmaWVsZCwgZm9ybSAgfTogYW55KSA9PiB7XG5cblx0XHRcdGNvbnN0IG5hbWUgPSBwcm9wcy5uYW1lO1xuXHRcdFx0Ly8gY29uc3QgdmFsID0gcHJvcHMudmFsdWU7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IGdldEluKGZvcm0udmFsdWVzLCBuYW1lKTtcblxuXG5cdFx0XHRjb25zdCBpbnB1dFByb3BzOiBhbnkgPSB7XG5cdFx0XHRcdGxhYmVsUGxhY2VtZW50OiAnc3RhcnQnLFxuXHRcdFx0XHQuLi5wcm9wcyxcblx0XHRcdFx0Y2hlY2tlZDogQm9vbGVhbih2YWx1ZSksXG5cdFx0XHRcdG9uVmFsdWVDaGFuZ2U6IChfdmFsdWU6IGFueSwgY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHRcdGZvcm0uc2V0RmllbGRWYWx1ZShmaWVsZC5uYW1lLCBjaGVja2VkKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnbW9lZXonLHZhbHVlKVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdtb2VlejFwcm9wcycscHJvcHMpXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ21vZWV6MXByb3BzMmNoZWNrZWQnLGNoZWNrZWQpXG5cdFx0XHRcdFx0dmFsdWUgPyBwcm9wcy5vblZhbHVlQ2hhbmdlID8gcHJvcHMub25WYWx1ZUNoYW5nZSh2YWx1ZSxjaGVja2VkKTpudWxsIDogICAocHJvcHMub25WYWx1ZUNoYW5nZSA/IHByb3BzLm9uVmFsdWVDaGFuZ2UodmFsdWUsY2hlY2tlZCkgOm51bGwpIFxuXG5cdFx0XHRcdFx0Ly8gaWYgKHZhbHVlKXtcblx0XHRcdFx0XHQvLyBcdGlmKHByb3BzLm9uVmFsdWVDaGFuZ2Upe1xuXHRcdFx0XHRcdC8vIFx0XHRwcm9wcy5vblZhbHVlQ2hhbmdlKHZhbHVlLGNoZWNrZWQpXG5cdFx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcdC8vIGVsc2UgaWYgKCF2YWx1ZSl7XG5cdFx0XHRcdFx0Ly8gXHRpZihwcm9wcy5vblZhbHVlQ2hhbmdlKXtcblx0XHRcdFx0XHQvLyBcdFx0cHJvcHMub25WYWx1ZUNoYW5nZSh2YWx1ZSxjaGVja2VkKVxuXHRcdFx0XHRcdC8vIFx0fVxuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHQvLyBpZiAodmFsKXtcblx0XHRcdFx0XHQvLyBcdGlmKHByb3BzLm9uVmFsdWVDaGFuZ2Upe1xuXHRcdFx0XHRcdC8vIFx0XHRwcm9wcy5vblZhbHVlQ2hhbmdlKHZhbHVlLGNoZWNrZWQpXG5cdFx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcblx0XHRcdFxuXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHJldHVybiAoPEJhc2VGb3JtRmllbGQgTWFpbkNvbXBvbmVudD17U3dpdGNofSB7Li4uaW5wdXRQcm9wc30gLz4pO1xuXHRcdH19XG5cdDwvRmllbGQ+XG5cdCk7XG59O1xuXG5Gb3JtU3dpdGNoSW5wdXQuZGVmYXVsdFByb3BzID0ge1xufTtcbiJdLCJ2ZXJzaW9uIjozfQ==