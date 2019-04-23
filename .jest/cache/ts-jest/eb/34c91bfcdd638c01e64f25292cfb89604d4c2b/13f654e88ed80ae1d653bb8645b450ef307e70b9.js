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
        console.log('valll', name);
        const value = formik_1.getIn(form.values, name);
        console.log('valll', value);
        const inputProps = Object.assign({ labelPlacement: 'start' }, props, { checked: Boolean(value), onValueChange: (_value, checked) => {
                form.setFieldValue(field.name, checked);
                value ?
                    props.onValueChange ?
                        props.onValueChange(value, checked) :
                        null :
                    (props.onValueChange ?
                        props.onValueChange(value, checked) :
                        null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVN3aXRjaElucHV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFDdEMscURBQXlFO0FBRXpFLDBEQUEwQjtBQU8xQixNQUFNLGFBQWEsR0FBRyx5QkFBWSxDQUFxQixlQUFlLENBQUMsQ0FBQztBQUUzRCxRQUFBLGVBQWUsR0FBRyxDQUFDLEVBQXdDLEVBQUUsRUFBRTtRQUE1QyxFQUFFLElBQUksT0FBa0MsRUFBaEMsb0NBQVE7SUFFL0MsT0FBTyxDQUNOLDhCQUFDLGNBQUssb0JBQUssS0FBSyxHQUNmLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFRLEVBQUUsRUFBRTtRQUUxQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxDQUFBO1FBRXZCLE1BQU0sS0FBSyxHQUFHLGNBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFBO1FBRTFCLE1BQU0sVUFBVSxtQkFDZixjQUFjLEVBQUUsT0FBTyxJQUNwQixLQUFLLElBQ1IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFDdkIsYUFBYSxFQUFFLENBQUMsTUFBVyxFQUFFLE9BQWdCLEVBQUUsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUV4QyxLQUFLLENBQUMsQ0FBQztvQkFDUCxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQ3BCLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7d0JBQ25DLElBQUksQ0FBQyxDQUFDO29CQUNOLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUNwQixLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxJQUFJLENBQUMsQ0FBQTtnQkFFUixjQUFjO2dCQUNkLDRCQUE0QjtnQkFDNUIsdUNBQXVDO2dCQUN2QyxLQUFLO2dCQUNMLElBQUk7Z0JBQ0osb0JBQW9CO2dCQUNwQiw0QkFBNEI7Z0JBQzVCLHVDQUF1QztnQkFDdkMsS0FBSztnQkFDTCxJQUFJO2dCQUNKLFlBQVk7Z0JBQ1osNEJBQTRCO2dCQUM1Qix1Q0FBdUM7Z0JBQ3ZDLEtBQUs7Z0JBQ0wsSUFBSTtZQUNMLENBQUMsR0FDRCxDQUFDO1FBRUYsT0FBTyxDQUFDLDhCQUFDLGFBQWEsa0JBQUMsYUFBYSxFQUFFLG1CQUFNLElBQU0sVUFBVSxFQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQ00sQ0FDUCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsdUJBQWUsQ0FBQyxZQUFZLEdBQUcsRUFDOUIsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9Gb3JtU3dpdGNoSW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkLCBnZXRJbiB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgeyBTd2l0Y2gsIFN3aXRjaFByb3BzLCBnZXRDb21wb25lbnQgfSBmcm9tICdAYmx1ZWJhc2UvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCYXNlRm9ybUZpZWxkUHJvcHMgfSBmcm9tICcuLi9CYXNlRm9ybUZpZWxkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybVN3aXRjaElucHV0UHJvcHMgZXh0ZW5kcyBTd2l0Y2hQcm9wcyB7XG5cdHR5cGU6ICdzd2l0Y2gnLFxuXHRuYW1lOiBzdHJpbmcsXG59XG5cbmNvbnN0IEJhc2VGb3JtRmllbGQgPSBnZXRDb21wb25lbnQ8QmFzZUZvcm1GaWVsZFByb3BzPignQmFzZUZvcm1GaWVsZCcpO1xuXG5leHBvcnQgY29uc3QgRm9ybVN3aXRjaElucHV0ID0gKHsgdHlwZSwgLi4ucHJvcHMgfTogRm9ybVN3aXRjaElucHV0UHJvcHMpID0+IHtcblxuXHRyZXR1cm4gKFxuXHRcdDxGaWVsZCB7Li4ucHJvcHN9PlxuXHRcdHsoeyBmaWVsZCwgZm9ybSAgfTogYW55KSA9PiB7XG5cblx0XHRcdGNvbnN0IG5hbWUgPSBwcm9wcy5uYW1lO1xuXHRcdFx0Y29uc29sZS5sb2coJ3ZhbGxsJyxuYW1lKVxuXG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSBnZXRJbihmb3JtLnZhbHVlcywgbmFtZSk7XG5cdFx0XHRjb25zb2xlLmxvZygndmFsbGwnLHZhbHVlKVxuXG5cdFx0XHRjb25zdCBpbnB1dFByb3BzOiBhbnkgPSB7XG5cdFx0XHRcdGxhYmVsUGxhY2VtZW50OiAnc3RhcnQnLFxuXHRcdFx0XHQuLi5wcm9wcyxcblx0XHRcdFx0Y2hlY2tlZDogQm9vbGVhbih2YWx1ZSksXG5cdFx0XHRcdG9uVmFsdWVDaGFuZ2U6IChfdmFsdWU6IGFueSwgY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHRcdGZvcm0uc2V0RmllbGRWYWx1ZShmaWVsZC5uYW1lLCBjaGVja2VkKTtcblx0XHRcdFx0XG5cdFx0XHRcdFx0dmFsdWUgPyBcblx0XHRcdFx0XHRwcm9wcy5vblZhbHVlQ2hhbmdlID9cblx0XHRcdFx0XHQgcHJvcHMub25WYWx1ZUNoYW5nZSh2YWx1ZSxjaGVja2VkKTpcblx0XHRcdFx0XHQgbnVsbCA6XG5cdFx0XHRcdFx0XHQocHJvcHMub25WYWx1ZUNoYW5nZSA/XG5cdFx0XHRcdFx0XHRcdCBwcm9wcy5vblZhbHVlQ2hhbmdlKHZhbHVlLGNoZWNrZWQpIDpcblx0XHRcdFx0XHRcdFx0IG51bGwpIFxuXG5cdFx0XHRcdFx0Ly8gaWYgKHZhbHVlKXtcblx0XHRcdFx0XHQvLyBcdGlmKHByb3BzLm9uVmFsdWVDaGFuZ2Upe1xuXHRcdFx0XHRcdC8vIFx0XHRwcm9wcy5vblZhbHVlQ2hhbmdlKHZhbHVlLGNoZWNrZWQpXG5cdFx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcdC8vIGVsc2UgaWYgKCF2YWx1ZSl7XG5cdFx0XHRcdFx0Ly8gXHRpZihwcm9wcy5vblZhbHVlQ2hhbmdlKXtcblx0XHRcdFx0XHQvLyBcdFx0cHJvcHMub25WYWx1ZUNoYW5nZSh2YWx1ZSxjaGVja2VkKVxuXHRcdFx0XHRcdC8vIFx0fVxuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHQvLyBpZiAodmFsKXtcblx0XHRcdFx0XHQvLyBcdGlmKHByb3BzLm9uVmFsdWVDaGFuZ2Upe1xuXHRcdFx0XHRcdC8vIFx0XHRwcm9wcy5vblZhbHVlQ2hhbmdlKHZhbHVlLGNoZWNrZWQpXG5cdFx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gKDxCYXNlRm9ybUZpZWxkIE1haW5Db21wb25lbnQ9e1N3aXRjaH0gey4uLmlucHV0UHJvcHN9IC8+KTtcblx0XHR9fVxuXHQ8L0ZpZWxkPlxuXHQpO1xufTtcblxuRm9ybVN3aXRjaElucHV0LmRlZmF1bHRQcm9wcyA9IHtcbn07XG4iXSwidmVyc2lvbiI6M30=