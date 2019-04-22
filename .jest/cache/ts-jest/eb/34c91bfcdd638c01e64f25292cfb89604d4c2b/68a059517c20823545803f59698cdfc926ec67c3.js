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
        const value = formik_1.getIn(form.values, name);
        const inputProps = Object.assign({ labelPlacement: 'start' }, props, { checked: Boolean(value), onValueChange: (_value, checked) => {
                form.setFieldValue(field.name, checked);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVN3aXRjaElucHV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFDdEMscURBQXlFO0FBRXpFLDBEQUEwQjtBQU8xQixNQUFNLGFBQWEsR0FBRyx5QkFBWSxDQUFxQixlQUFlLENBQUMsQ0FBQztBQUUzRCxRQUFBLGVBQWUsR0FBRyxDQUFDLEVBQXdDLEVBQUUsRUFBRTtRQUE1QyxFQUFFLElBQUksT0FBa0MsRUFBaEMsb0NBQVE7SUFFL0MsT0FBTyxDQUNOLDhCQUFDLGNBQUssb0JBQUssS0FBSyxHQUNmLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFRLEVBQUUsRUFBRTtRQUUxQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE1BQU0sS0FBSyxHQUFHLGNBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXZDLE1BQU0sVUFBVSxtQkFDZixjQUFjLEVBQUUsT0FBTyxJQUNwQixLQUFLLElBQ1IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFDdkIsYUFBYSxFQUFFLENBQUMsTUFBVyxFQUFFLE9BQWdCLEVBQUUsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUV4QyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUMsQ0FBQyxDQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBLElBQUksQ0FBQyxDQUFBO2dCQUUxSSxjQUFjO2dCQUNkLDRCQUE0QjtnQkFDNUIsdUNBQXVDO2dCQUN2QyxLQUFLO2dCQUNMLElBQUk7Z0JBQ0osb0JBQW9CO2dCQUNwQiw0QkFBNEI7Z0JBQzVCLHVDQUF1QztnQkFDdkMsS0FBSztnQkFDTCxJQUFJO2dCQUNKLFlBQVk7Z0JBQ1osNEJBQTRCO2dCQUM1Qix1Q0FBdUM7Z0JBQ3ZDLEtBQUs7Z0JBQ0wsSUFBSTtZQUNMLENBQUMsR0FDRCxDQUFDO1FBRUYsT0FBTyxDQUFDLDhCQUFDLGFBQWEsa0JBQUMsYUFBYSxFQUFFLG1CQUFNLElBQU0sVUFBVSxFQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQ00sQ0FDUCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsdUJBQWUsQ0FBQyxZQUFZLEdBQUcsRUFDOUIsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9Gb3JtU3dpdGNoSW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkLCBnZXRJbiB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgeyBTd2l0Y2gsIFN3aXRjaFByb3BzLCBnZXRDb21wb25lbnQgfSBmcm9tICdAYmx1ZWJhc2UvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCYXNlRm9ybUZpZWxkUHJvcHMgfSBmcm9tICcuLi9CYXNlRm9ybUZpZWxkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybVN3aXRjaElucHV0UHJvcHMgZXh0ZW5kcyBTd2l0Y2hQcm9wcyB7XG5cdHR5cGU6ICdzd2l0Y2gnLFxuXHRuYW1lOiBzdHJpbmcsXG59XG5cbmNvbnN0IEJhc2VGb3JtRmllbGQgPSBnZXRDb21wb25lbnQ8QmFzZUZvcm1GaWVsZFByb3BzPignQmFzZUZvcm1GaWVsZCcpO1xuXG5leHBvcnQgY29uc3QgRm9ybVN3aXRjaElucHV0ID0gKHsgdHlwZSwgLi4ucHJvcHMgfTogRm9ybVN3aXRjaElucHV0UHJvcHMpID0+IHtcblxuXHRyZXR1cm4gKFxuXHRcdDxGaWVsZCB7Li4ucHJvcHN9PlxuXHRcdHsoeyBmaWVsZCwgZm9ybSAgfTogYW55KSA9PiB7XG5cblx0XHRcdGNvbnN0IG5hbWUgPSBwcm9wcy5uYW1lO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBnZXRJbihmb3JtLnZhbHVlcywgbmFtZSk7XG5cblx0XHRcdGNvbnN0IGlucHV0UHJvcHM6IGFueSA9IHtcblx0XHRcdFx0bGFiZWxQbGFjZW1lbnQ6ICdzdGFydCcsXG5cdFx0XHRcdC4uLnByb3BzLFxuXHRcdFx0XHRjaGVja2VkOiBCb29sZWFuKHZhbHVlKSxcblx0XHRcdFx0b25WYWx1ZUNoYW5nZTogKF92YWx1ZTogYW55LCBjaGVja2VkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdFx0Zm9ybS5zZXRGaWVsZFZhbHVlKGZpZWxkLm5hbWUsIGNoZWNrZWQpO1xuXHRcdFx0XHRcblx0XHRcdFx0XHR2YWx1ZSA/IHByb3BzLm9uVmFsdWVDaGFuZ2UgPyBwcm9wcy5vblZhbHVlQ2hhbmdlKHZhbHVlLGNoZWNrZWQpOm51bGwgOiAgIChwcm9wcy5vblZhbHVlQ2hhbmdlID8gcHJvcHMub25WYWx1ZUNoYW5nZSh2YWx1ZSxjaGVja2VkKSA6bnVsbCkgXG5cblx0XHRcdFx0XHQvLyBpZiAodmFsdWUpe1xuXHRcdFx0XHRcdC8vIFx0aWYocHJvcHMub25WYWx1ZUNoYW5nZSl7XG5cdFx0XHRcdFx0Ly8gXHRcdHByb3BzLm9uVmFsdWVDaGFuZ2UodmFsdWUsY2hlY2tlZClcblx0XHRcdFx0XHQvLyBcdH1cblx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0Ly8gZWxzZSBpZiAoIXZhbHVlKXtcblx0XHRcdFx0XHQvLyBcdGlmKHByb3BzLm9uVmFsdWVDaGFuZ2Upe1xuXHRcdFx0XHRcdC8vIFx0XHRwcm9wcy5vblZhbHVlQ2hhbmdlKHZhbHVlLGNoZWNrZWQpXG5cdFx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcdC8vIGlmICh2YWwpe1xuXHRcdFx0XHRcdC8vIFx0aWYocHJvcHMub25WYWx1ZUNoYW5nZSl7XG5cdFx0XHRcdFx0Ly8gXHRcdHByb3BzLm9uVmFsdWVDaGFuZ2UodmFsdWUsY2hlY2tlZClcblx0XHRcdFx0XHQvLyBcdH1cblx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHJldHVybiAoPEJhc2VGb3JtRmllbGQgTWFpbkNvbXBvbmVudD17U3dpdGNofSB7Li4uaW5wdXRQcm9wc30gLz4pO1xuXHRcdH19XG5cdDwvRmllbGQ+XG5cdCk7XG59O1xuXG5Gb3JtU3dpdGNoSW5wdXQuZGVmYXVsdFByb3BzID0ge1xufTtcbiJdLCJ2ZXJzaW9uIjozfQ==