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
        const k = props.label;
        console.log('before', k);
        const k2 = formik_1.getIn(form.values, k);
        console.log('after', k2);
        const value = formik_1.getIn(form.values, name);
        console.log('valll', value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVN3aXRjaElucHV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFDdEMscURBQXlFO0FBRXpFLDBEQUEwQjtBQU8xQixNQUFNLGFBQWEsR0FBRyx5QkFBWSxDQUFxQixlQUFlLENBQUMsQ0FBQztBQUUzRCxRQUFBLGVBQWUsR0FBRyxDQUFDLEVBQXdDLEVBQUUsRUFBRTtRQUE1QyxFQUFFLElBQUksT0FBa0MsRUFBaEMsb0NBQVE7SUFFL0MsT0FBTyxDQUNOLDhCQUFDLGNBQUssb0JBQUssS0FBSyxHQUNmLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFRLEVBQUUsRUFBRTtRQUUxQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxHQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFFMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdkIsTUFBTSxFQUFFLEdBQUUsY0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsRUFBRSxDQUFDLENBQUE7UUFJdkIsTUFBTSxLQUFLLEdBQUcsY0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUE7UUFDMUIsTUFBTSxVQUFVLG1CQUNmLGNBQWMsRUFBRSxPQUFPLElBQ3BCLEtBQUssSUFDUixPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUN2QixhQUFhLEVBQUUsQ0FBQyxNQUFXLEVBQUUsT0FBZ0IsRUFBRSxFQUFFO2dCQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRXhDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQyxDQUFDLENBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUEsSUFBSSxDQUFDLENBQUE7Z0JBRTFJLGNBQWM7Z0JBQ2QsNEJBQTRCO2dCQUM1Qix1Q0FBdUM7Z0JBQ3ZDLEtBQUs7Z0JBQ0wsSUFBSTtnQkFDSixvQkFBb0I7Z0JBQ3BCLDRCQUE0QjtnQkFDNUIsdUNBQXVDO2dCQUN2QyxLQUFLO2dCQUNMLElBQUk7Z0JBQ0osWUFBWTtnQkFDWiw0QkFBNEI7Z0JBQzVCLHVDQUF1QztnQkFDdkMsS0FBSztnQkFDTCxJQUFJO1lBQ0wsQ0FBQyxHQUNELENBQUM7UUFFRixPQUFPLENBQUMsOEJBQUMsYUFBYSxrQkFBQyxhQUFhLEVBQUUsbUJBQU0sSUFBTSxVQUFVLEVBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FDTSxDQUNQLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRix1QkFBZSxDQUFDLFlBQVksR0FBRyxFQUM5QixDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL0Zvcm1Td2l0Y2hJbnB1dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQsIGdldEluIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCB7IFN3aXRjaCwgU3dpdGNoUHJvcHMsIGdldENvbXBvbmVudCB9IGZyb20gJ0BibHVlYmFzZS9jb21wb25lbnRzJztcbmltcG9ydCB7IEJhc2VGb3JtRmllbGRQcm9wcyB9IGZyb20gJy4uL0Jhc2VGb3JtRmllbGQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtU3dpdGNoSW5wdXRQcm9wcyBleHRlbmRzIFN3aXRjaFByb3BzIHtcblx0dHlwZTogJ3N3aXRjaCcsXG5cdG5hbWU6IHN0cmluZyxcbn1cblxuY29uc3QgQmFzZUZvcm1GaWVsZCA9IGdldENvbXBvbmVudDxCYXNlRm9ybUZpZWxkUHJvcHM+KCdCYXNlRm9ybUZpZWxkJyk7XG5cbmV4cG9ydCBjb25zdCBGb3JtU3dpdGNoSW5wdXQgPSAoeyB0eXBlLCAuLi5wcm9wcyB9OiBGb3JtU3dpdGNoSW5wdXRQcm9wcykgPT4ge1xuXG5cdHJldHVybiAoXG5cdFx0PEZpZWxkIHsuLi5wcm9wc30+XG5cdFx0eyh7IGZpZWxkLCBmb3JtICB9OiBhbnkpID0+IHtcblxuXHRcdFx0Y29uc3QgbmFtZSA9IHByb3BzLm5hbWU7XG5cdFx0XHRjb25zdCBrOmFueSA9IHByb3BzLmxhYmVsO1xuXG5cdFx0XHRjb25zb2xlLmxvZygnYmVmb3JlJyxrKVxuXHRcdFx0Y29uc3QgazI9IGdldEluKGZvcm0udmFsdWVzLCBrKTtcblx0XHRcdGNvbnNvbGUubG9nKCdhZnRlcicsazIpXG5cblxuXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGdldEluKGZvcm0udmFsdWVzLCBuYW1lKTtcblx0XHRcdGNvbnNvbGUubG9nKCd2YWxsbCcsdmFsdWUpXG5cdFx0XHRjb25zdCBpbnB1dFByb3BzOiBhbnkgPSB7XG5cdFx0XHRcdGxhYmVsUGxhY2VtZW50OiAnc3RhcnQnLFxuXHRcdFx0XHQuLi5wcm9wcyxcblx0XHRcdFx0Y2hlY2tlZDogQm9vbGVhbih2YWx1ZSksXG5cdFx0XHRcdG9uVmFsdWVDaGFuZ2U6IChfdmFsdWU6IGFueSwgY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHRcdGZvcm0uc2V0RmllbGRWYWx1ZShmaWVsZC5uYW1lLCBjaGVja2VkKTtcblx0XHRcdFx0XG5cdFx0XHRcdFx0dmFsdWUgPyBwcm9wcy5vblZhbHVlQ2hhbmdlID8gcHJvcHMub25WYWx1ZUNoYW5nZSh2YWx1ZSxjaGVja2VkKTpudWxsIDogICAocHJvcHMub25WYWx1ZUNoYW5nZSA/IHByb3BzLm9uVmFsdWVDaGFuZ2UodmFsdWUsY2hlY2tlZCkgOm51bGwpIFxuXG5cdFx0XHRcdFx0Ly8gaWYgKHZhbHVlKXtcblx0XHRcdFx0XHQvLyBcdGlmKHByb3BzLm9uVmFsdWVDaGFuZ2Upe1xuXHRcdFx0XHRcdC8vIFx0XHRwcm9wcy5vblZhbHVlQ2hhbmdlKHZhbHVlLGNoZWNrZWQpXG5cdFx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcdC8vIGVsc2UgaWYgKCF2YWx1ZSl7XG5cdFx0XHRcdFx0Ly8gXHRpZihwcm9wcy5vblZhbHVlQ2hhbmdlKXtcblx0XHRcdFx0XHQvLyBcdFx0cHJvcHMub25WYWx1ZUNoYW5nZSh2YWx1ZSxjaGVja2VkKVxuXHRcdFx0XHRcdC8vIFx0fVxuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHQvLyBpZiAodmFsKXtcblx0XHRcdFx0XHQvLyBcdGlmKHByb3BzLm9uVmFsdWVDaGFuZ2Upe1xuXHRcdFx0XHRcdC8vIFx0XHRwcm9wcy5vblZhbHVlQ2hhbmdlKHZhbHVlLGNoZWNrZWQpXG5cdFx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gKDxCYXNlRm9ybUZpZWxkIE1haW5Db21wb25lbnQ9e1N3aXRjaH0gey4uLmlucHV0UHJvcHN9IC8+KTtcblx0XHR9fVxuXHQ8L0ZpZWxkPlxuXHQpO1xufTtcblxuRm9ybVN3aXRjaElucHV0LmRlZmF1bHRQcm9wcyA9IHtcbn07XG4iXSwidmVyc2lvbiI6M30=