"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const formik_1 = require("formik");
const components_1 = require("@bluebase/components");
const react_1 = tslib_1.__importDefault(require("react"));
const BaseFormField = components_1.getComponent('BaseFormField');
exports.FormSwitchInput = (_a) => {
    var { type } = _a, props = tslib_1.__rest(_a, ["type"]);
    return (react_1.default.createElement(formik_1.Field, Object.assign({}, props), ({ field, form, }) => {
        const name = props.name;
        const val = props.value;
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
                if (val) {
                    if (props.onValueChange) {
                        props.onValueChange(value, checked);
                    }
                }
            } });
        return (react_1.default.createElement(BaseFormField, Object.assign({ MainComponent: components_1.Switch }, inputProps)));
    }));
};
exports.FormSwitchInput.defaultProps = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVN3aXRjaElucHV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFDdEMscURBQXlFO0FBRXpFLDBEQUEwQjtBQU8xQixNQUFNLGFBQWEsR0FBRyx5QkFBWSxDQUFxQixlQUFlLENBQUMsQ0FBQztBQUUzRCxRQUFBLGVBQWUsR0FBRyxDQUFDLEVBQXdDLEVBQUUsRUFBRTtRQUE1QyxFQUFFLElBQUksT0FBa0MsRUFBaEMsb0NBQVE7SUFFL0MsT0FBTyxDQUNOLDhCQUFDLGNBQUssb0JBQUssS0FBSyxHQUNmLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxHQUFRLEVBQUUsRUFBRTtRQUUxQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDeEIsTUFBTSxLQUFLLEdBQUcsY0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFHdkMsTUFBTSxVQUFVLG1CQUNmLGNBQWMsRUFBRSxPQUFPLElBQ3BCLEtBQUssSUFDUixPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUN2QixhQUFhLEVBQUUsQ0FBQyxNQUFXLEVBQUUsT0FBZ0IsRUFBRSxFQUFFO2dCQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRXhDLDhJQUE4STtnQkFFOUksSUFBSSxLQUFLLEVBQUM7b0JBQ1QsSUFBRyxLQUFLLENBQUMsYUFBYSxFQUFDO3dCQUN0QixLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUMsQ0FBQTtxQkFDbEM7aUJBQ0Q7cUJBQ0ksSUFBSSxDQUFDLEtBQUssRUFBQztvQkFDZixJQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUM7d0JBQ3RCLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxDQUFBO3FCQUNsQztpQkFDRDtnQkFDRCxJQUFJLEdBQUcsRUFBQztvQkFDUCxJQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUM7d0JBQ3RCLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxDQUFBO3FCQUNsQztpQkFDRDtZQUlGLENBQUMsR0FDRCxDQUFDO1FBRUYsT0FBTyxDQUFDLDhCQUFDLGFBQWEsa0JBQUMsYUFBYSxFQUFFLG1CQUFNLElBQU0sVUFBVSxFQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQ00sQ0FDUCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsdUJBQWUsQ0FBQyxZQUFZLEdBQUcsRUFDOUIsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9Gb3JtU3dpdGNoSW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkLCBnZXRJbiB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgeyBTd2l0Y2gsIFN3aXRjaFByb3BzLCBnZXRDb21wb25lbnQgfSBmcm9tICdAYmx1ZWJhc2UvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCYXNlRm9ybUZpZWxkUHJvcHMgfSBmcm9tICcuLi9CYXNlRm9ybUZpZWxkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybVN3aXRjaElucHV0UHJvcHMgZXh0ZW5kcyBTd2l0Y2hQcm9wcyB7XG5cdHR5cGU6ICdzd2l0Y2gnLFxuXHRuYW1lOiBzdHJpbmcsXG59XG5cbmNvbnN0IEJhc2VGb3JtRmllbGQgPSBnZXRDb21wb25lbnQ8QmFzZUZvcm1GaWVsZFByb3BzPignQmFzZUZvcm1GaWVsZCcpO1xuXG5leHBvcnQgY29uc3QgRm9ybVN3aXRjaElucHV0ID0gKHsgdHlwZSwgLi4ucHJvcHMgfTogRm9ybVN3aXRjaElucHV0UHJvcHMpID0+IHtcblxuXHRyZXR1cm4gKFxuXHRcdDxGaWVsZCB7Li4ucHJvcHN9PlxuXHRcdHsoeyBmaWVsZCwgZm9ybSwgfTogYW55KSA9PiB7XG5cblx0XHRcdGNvbnN0IG5hbWUgPSBwcm9wcy5uYW1lO1xuXHRcdFx0Y29uc3QgdmFsID0gcHJvcHMudmFsdWU7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IGdldEluKGZvcm0udmFsdWVzLCBuYW1lKTtcblxuXG5cdFx0XHRjb25zdCBpbnB1dFByb3BzOiBhbnkgPSB7XG5cdFx0XHRcdGxhYmVsUGxhY2VtZW50OiAnc3RhcnQnLFxuXHRcdFx0XHQuLi5wcm9wcyxcblx0XHRcdFx0Y2hlY2tlZDogQm9vbGVhbih2YWx1ZSksXG5cdFx0XHRcdG9uVmFsdWVDaGFuZ2U6IChfdmFsdWU6IGFueSwgY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHRcdGZvcm0uc2V0RmllbGRWYWx1ZShmaWVsZC5uYW1lLCBjaGVja2VkKTtcblxuXHRcdFx0XHRcdC8vIHZhbHVlID8gcHJvcHMub25WYWx1ZUNoYW5nZSA/IHByb3BzLm9uVmFsdWVDaGFuZ2UodmFsdWUsY2hlY2tlZCk6bnVsbCA6ICAgKHByb3BzLm9uVmFsdWVDaGFuZ2UgPyBwcm9wcy5vblZhbHVlQ2hhbmdlKHZhbHVlLGNoZWNrZWQpIDpudWxsKSBcblxuXHRcdFx0XHRcdGlmICh2YWx1ZSl7XG5cdFx0XHRcdFx0XHRpZihwcm9wcy5vblZhbHVlQ2hhbmdlKXtcblx0XHRcdFx0XHRcdFx0cHJvcHMub25WYWx1ZUNoYW5nZSh2YWx1ZSxjaGVja2VkKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICghdmFsdWUpe1xuXHRcdFx0XHRcdFx0aWYocHJvcHMub25WYWx1ZUNoYW5nZSl7XG5cdFx0XHRcdFx0XHRcdHByb3BzLm9uVmFsdWVDaGFuZ2UodmFsdWUsY2hlY2tlZClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHZhbCl7XG5cdFx0XHRcdFx0XHRpZihwcm9wcy5vblZhbHVlQ2hhbmdlKXtcblx0XHRcdFx0XHRcdFx0cHJvcHMub25WYWx1ZUNoYW5nZSh2YWx1ZSxjaGVja2VkKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcblxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gKDxCYXNlRm9ybUZpZWxkIE1haW5Db21wb25lbnQ9e1N3aXRjaH0gey4uLmlucHV0UHJvcHN9IC8+KTtcblx0XHR9fVxuXHQ8L0ZpZWxkPlxuXHQpO1xufTtcblxuRm9ybVN3aXRjaElucHV0LmRlZmF1bHRQcm9wcyA9IHtcbn07XG4iXSwidmVyc2lvbiI6M30=