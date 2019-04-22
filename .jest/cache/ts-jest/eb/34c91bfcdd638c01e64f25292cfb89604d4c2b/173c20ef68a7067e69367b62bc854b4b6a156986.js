"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const formik_1 = require("formik");
const components_1 = require("@bluebase/components");
const react_1 = tslib_1.__importDefault(require("react"));
const BaseFormField = components_1.getComponent('BaseFormField');
exports.FormSwitchInput = (_a) => {
    var { type } = _a, props = tslib_1.__rest(_a, ["type"]);
    return (react_1.default.createElement(formik_1.Field, Object.assign({}, props), ({ field, form, mockvalue }) => {
        const name = props.name;
        const value = formik_1.getIn(form.values, name);
        const inputProps = Object.assign({ labelPlacement: 'start' }, props, { checked: Boolean(value), onValueChange: (_value, checked) => {
                form.setFieldValue(field.name, checked);
                // value ? props.onValueChange ? props.onValueChange(value,checked):null :   (props.onValueChange ? props.onValueChange(value,checked) :null) 
                if (value) {
                    if (props.onValueChange) {
                        props.onValueChange(value, checked);
                    }
                }
                else if (!value) {
                    if (props.onValueChange) {
                        props.onValueChange(value, checked);
                    }
                }
                else if (mockvalue) {
                    if (props.onValueChange) {
                        props.onValueChange(value, checked);
                    }
                }
            } });
        return (react_1.default.createElement(BaseFormField, Object.assign({ MainComponent: components_1.Switch }, inputProps)));
    }));
};
exports.FormSwitchInput.defaultProps = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVN3aXRjaElucHV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFDdEMscURBQXlFO0FBRXpFLDBEQUEwQjtBQU8xQixNQUFNLGFBQWEsR0FBRyx5QkFBWSxDQUFxQixlQUFlLENBQUMsQ0FBQztBQUUzRCxRQUFBLGVBQWUsR0FBRyxDQUFDLEVBQXdDLEVBQUUsRUFBRTtRQUE1QyxFQUFFLElBQUksT0FBa0MsRUFBaEMsb0NBQVE7SUFFL0MsT0FBTyxDQUNOLDhCQUFDLGNBQUssb0JBQUssS0FBSyxHQUNmLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDLFNBQVMsRUFBTyxFQUFFLEVBQUU7UUFFbkMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN4QixNQUFNLEtBQUssR0FBRyxjQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUd2QyxNQUFNLFVBQVUsbUJBQ2YsY0FBYyxFQUFFLE9BQU8sSUFDcEIsS0FBSyxJQUNSLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQ3ZCLGFBQWEsRUFBRSxDQUFDLE1BQVcsRUFBRSxPQUFnQixFQUFFLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFFeEMsOElBQThJO2dCQUM5SSxJQUFJLEtBQUssRUFBQztvQkFDVCxJQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUM7d0JBQ3RCLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxDQUFBO3FCQUNsQztpQkFDRDtxQkFDSSxJQUFJLENBQUMsS0FBSyxFQUFDO29CQUNmLElBQUcsS0FBSyxDQUFDLGFBQWEsRUFBQzt3QkFDdEIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDLENBQUE7cUJBQ2xDO2lCQUNEO3FCQUNJLElBQUksU0FBUyxFQUFDO29CQUNsQixJQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUM7d0JBQ3RCLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxDQUFBO3FCQUNsQztpQkFDRDtZQUdGLENBQUMsR0FDRCxDQUFDO1FBRUYsT0FBTyxDQUFDLDhCQUFDLGFBQWEsa0JBQUMsYUFBYSxFQUFFLG1CQUFNLElBQU0sVUFBVSxFQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQ00sQ0FDUCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsdUJBQWUsQ0FBQyxZQUFZLEdBQUcsRUFDOUIsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9Gb3JtU3dpdGNoSW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkLCBnZXRJbiB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgeyBTd2l0Y2gsIFN3aXRjaFByb3BzLCBnZXRDb21wb25lbnQgfSBmcm9tICdAYmx1ZWJhc2UvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCYXNlRm9ybUZpZWxkUHJvcHMgfSBmcm9tICcuLi9CYXNlRm9ybUZpZWxkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybVN3aXRjaElucHV0UHJvcHMgZXh0ZW5kcyBTd2l0Y2hQcm9wcyB7XG5cdHR5cGU6ICdzd2l0Y2gnLFxuXHRuYW1lOiBzdHJpbmcsXG59XG5cbmNvbnN0IEJhc2VGb3JtRmllbGQgPSBnZXRDb21wb25lbnQ8QmFzZUZvcm1GaWVsZFByb3BzPignQmFzZUZvcm1GaWVsZCcpO1xuXG5leHBvcnQgY29uc3QgRm9ybVN3aXRjaElucHV0ID0gKHsgdHlwZSwgLi4ucHJvcHMgfTogRm9ybVN3aXRjaElucHV0UHJvcHMpID0+IHtcblxuXHRyZXR1cm4gKFxuXHRcdDxGaWVsZCB7Li4ucHJvcHN9PlxuXHRcdHsoeyBmaWVsZCwgZm9ybSxtb2NrdmFsdWUgfTogYW55KSA9PiB7XG5cblx0XHRcdGNvbnN0IG5hbWUgPSBwcm9wcy5uYW1lO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBnZXRJbihmb3JtLnZhbHVlcywgbmFtZSk7XG5cblxuXHRcdFx0Y29uc3QgaW5wdXRQcm9wczogYW55ID0ge1xuXHRcdFx0XHRsYWJlbFBsYWNlbWVudDogJ3N0YXJ0Jyxcblx0XHRcdFx0Li4ucHJvcHMsXG5cdFx0XHRcdGNoZWNrZWQ6IEJvb2xlYW4odmFsdWUpLFxuXHRcdFx0XHRvblZhbHVlQ2hhbmdlOiAoX3ZhbHVlOiBhbnksIGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0XHRmb3JtLnNldEZpZWxkVmFsdWUoZmllbGQubmFtZSwgY2hlY2tlZCk7XG5cblx0XHRcdFx0XHQvLyB2YWx1ZSA/IHByb3BzLm9uVmFsdWVDaGFuZ2UgPyBwcm9wcy5vblZhbHVlQ2hhbmdlKHZhbHVlLGNoZWNrZWQpOm51bGwgOiAgIChwcm9wcy5vblZhbHVlQ2hhbmdlID8gcHJvcHMub25WYWx1ZUNoYW5nZSh2YWx1ZSxjaGVja2VkKSA6bnVsbCkgXG5cdFx0XHRcdFx0aWYgKHZhbHVlKXtcblx0XHRcdFx0XHRcdGlmKHByb3BzLm9uVmFsdWVDaGFuZ2Upe1xuXHRcdFx0XHRcdFx0XHRwcm9wcy5vblZhbHVlQ2hhbmdlKHZhbHVlLGNoZWNrZWQpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKCF2YWx1ZSl7XG5cdFx0XHRcdFx0XHRpZihwcm9wcy5vblZhbHVlQ2hhbmdlKXtcblx0XHRcdFx0XHRcdFx0cHJvcHMub25WYWx1ZUNoYW5nZSh2YWx1ZSxjaGVja2VkKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmIChtb2NrdmFsdWUpe1xuXHRcdFx0XHRcdFx0aWYocHJvcHMub25WYWx1ZUNoYW5nZSl7XG5cdFx0XHRcdFx0XHRcdHByb3BzLm9uVmFsdWVDaGFuZ2UodmFsdWUsY2hlY2tlZClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcblxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gKDxCYXNlRm9ybUZpZWxkIE1haW5Db21wb25lbnQ9e1N3aXRjaH0gey4uLmlucHV0UHJvcHN9IC8+KTtcblx0XHR9fVxuXHQ8L0ZpZWxkPlxuXHQpO1xufTtcblxuRm9ybVN3aXRjaElucHV0LmRlZmF1bHRQcm9wcyA9IHtcbn07XG4iXSwidmVyc2lvbiI6M30=