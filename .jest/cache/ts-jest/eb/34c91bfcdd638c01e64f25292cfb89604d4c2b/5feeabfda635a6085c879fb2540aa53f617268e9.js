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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVN3aXRjaElucHV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFDdEMscURBQXlFO0FBRXpFLDBEQUEwQjtBQU8xQixNQUFNLGFBQWEsR0FBRyx5QkFBWSxDQUFxQixlQUFlLENBQUMsQ0FBQztBQUUzRCxRQUFBLGVBQWUsR0FBRyxDQUFDLEVBQXdDLEVBQUUsRUFBRTtRQUE1QyxFQUFFLElBQUksT0FBa0MsRUFBaEMsb0NBQVE7SUFFL0MsT0FBTyxDQUNOLDhCQUFDLGNBQUssb0JBQUssS0FBSyxHQUNmLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFRLEVBQUUsRUFBRTtRQUUxQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3hCLDJCQUEyQjtRQUMzQixNQUFNLEtBQUssR0FBRyxjQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUd2QyxNQUFNLFVBQVUsbUJBQ2YsY0FBYyxFQUFFLE9BQU8sSUFDcEIsS0FBSyxJQUNSLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQ3ZCLGFBQWEsRUFBRSxDQUFDLE1BQVcsRUFBRSxPQUFnQixFQUFFLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFFeEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUMsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFDLENBQUMsQ0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQSxJQUFJLENBQUMsQ0FBQTtnQkFFMUksY0FBYztnQkFDZCw0QkFBNEI7Z0JBQzVCLHVDQUF1QztnQkFDdkMsS0FBSztnQkFDTCxJQUFJO2dCQUNKLG9CQUFvQjtnQkFDcEIsNEJBQTRCO2dCQUM1Qix1Q0FBdUM7Z0JBQ3ZDLEtBQUs7Z0JBQ0wsSUFBSTtnQkFDSixZQUFZO2dCQUNaLDRCQUE0QjtnQkFDNUIsdUNBQXVDO2dCQUN2QyxLQUFLO2dCQUNMLElBQUk7WUFJTCxDQUFDLEdBQ0QsQ0FBQztRQUVGLE9BQU8sQ0FBQyw4QkFBQyxhQUFhLGtCQUFDLGFBQWEsRUFBRSxtQkFBTSxJQUFNLFVBQVUsRUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUNNLENBQ1AsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLHVCQUFlLENBQUMsWUFBWSxHQUFHLEVBQzlCLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVN3aXRjaElucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCwgZ2V0SW4gfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IHsgU3dpdGNoLCBTd2l0Y2hQcm9wcywgZ2V0Q29tcG9uZW50IH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgQmFzZUZvcm1GaWVsZFByb3BzIH0gZnJvbSAnLi4vQmFzZUZvcm1GaWVsZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1Td2l0Y2hJbnB1dFByb3BzIGV4dGVuZHMgU3dpdGNoUHJvcHMge1xuXHR0eXBlOiAnc3dpdGNoJyxcblx0bmFtZTogc3RyaW5nLFxufVxuXG5jb25zdCBCYXNlRm9ybUZpZWxkID0gZ2V0Q29tcG9uZW50PEJhc2VGb3JtRmllbGRQcm9wcz4oJ0Jhc2VGb3JtRmllbGQnKTtcblxuZXhwb3J0IGNvbnN0IEZvcm1Td2l0Y2hJbnB1dCA9ICh7IHR5cGUsIC4uLnByb3BzIH06IEZvcm1Td2l0Y2hJbnB1dFByb3BzKSA9PiB7XG5cblx0cmV0dXJuIChcblx0XHQ8RmllbGQgey4uLnByb3BzfT5cblx0XHR7KHsgZmllbGQsIGZvcm0gIH06IGFueSkgPT4ge1xuXG5cdFx0XHRjb25zdCBuYW1lID0gcHJvcHMubmFtZTtcblx0XHRcdC8vIGNvbnN0IHZhbCA9IHByb3BzLnZhbHVlO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBnZXRJbihmb3JtLnZhbHVlcywgbmFtZSk7XG5cblxuXHRcdFx0Y29uc3QgaW5wdXRQcm9wczogYW55ID0ge1xuXHRcdFx0XHRsYWJlbFBsYWNlbWVudDogJ3N0YXJ0Jyxcblx0XHRcdFx0Li4ucHJvcHMsXG5cdFx0XHRcdGNoZWNrZWQ6IEJvb2xlYW4odmFsdWUpLFxuXHRcdFx0XHRvblZhbHVlQ2hhbmdlOiAoX3ZhbHVlOiBhbnksIGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0XHRmb3JtLnNldEZpZWxkVmFsdWUoZmllbGQubmFtZSwgY2hlY2tlZCk7XG5cdFx0XHRcdFxuXHRcdFx0XHRcdHZhbHVlID8gcHJvcHMub25WYWx1ZUNoYW5nZSA/IHByb3BzLm9uVmFsdWVDaGFuZ2UodmFsdWUsY2hlY2tlZCk6bnVsbCA6ICAgKHByb3BzLm9uVmFsdWVDaGFuZ2UgPyBwcm9wcy5vblZhbHVlQ2hhbmdlKHZhbHVlLGNoZWNrZWQpIDpudWxsKSBcblxuXHRcdFx0XHRcdC8vIGlmICh2YWx1ZSl7XG5cdFx0XHRcdFx0Ly8gXHRpZihwcm9wcy5vblZhbHVlQ2hhbmdlKXtcblx0XHRcdFx0XHQvLyBcdFx0cHJvcHMub25WYWx1ZUNoYW5nZSh2YWx1ZSxjaGVja2VkKVxuXHRcdFx0XHRcdC8vIFx0fVxuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHQvLyBlbHNlIGlmICghdmFsdWUpe1xuXHRcdFx0XHRcdC8vIFx0aWYocHJvcHMub25WYWx1ZUNoYW5nZSl7XG5cdFx0XHRcdFx0Ly8gXHRcdHByb3BzLm9uVmFsdWVDaGFuZ2UodmFsdWUsY2hlY2tlZClcblx0XHRcdFx0XHQvLyBcdH1cblx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0Ly8gaWYgKHZhbCl7XG5cdFx0XHRcdFx0Ly8gXHRpZihwcm9wcy5vblZhbHVlQ2hhbmdlKXtcblx0XHRcdFx0XHQvLyBcdFx0cHJvcHMub25WYWx1ZUNoYW5nZSh2YWx1ZSxjaGVja2VkKVxuXHRcdFx0XHRcdC8vIFx0fVxuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XG5cdFx0XHRcblxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gKDxCYXNlRm9ybUZpZWxkIE1haW5Db21wb25lbnQ9e1N3aXRjaH0gey4uLmlucHV0UHJvcHN9IC8+KTtcblx0XHR9fVxuXHQ8L0ZpZWxkPlxuXHQpO1xufTtcblxuRm9ybVN3aXRjaElucHV0LmRlZmF1bHRQcm9wcyA9IHtcbn07XG4iXSwidmVyc2lvbiI6M30=