"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const components_1 = require("@bluebase/components");
const formik_1 = require("formik");
const react_1 = tslib_1.__importDefault(require("react"));
const BaseFormField = components_1.getComponent('BaseFormField');
exports.FormCheckboxInput = (props) => {
    return (react_1.default.createElement(formik_1.Field, Object.assign({}, props), ({ field, form }) => {
        const name = props.name;
        const value = formik_1.getIn(form.values, name);
        console.log('abc', name);
        const inputProps = Object.assign({}, props, { checked: Boolean(value), onValueChange: (_value, checked) => {
                form.setFieldValue(field.name, checked);
                console.log('Funjdkjnk', props.onValueChange);
                console.log('value', value);
                // if (value === true && value === false){
                // 	if (props.onValueChange)
                // 	{
                // 		props.onValueChange(value,checked)
                // 	}
                // } 
                //  :value === false ?
                // 	props.onValueChange ?
                // 	   props.onValueChange(value,checked) :
                // 		  https://github.com/Muzzamil75/Bill-manager-Exponull:null
            } });
        return (react_1.default.createElement(BaseFormField, Object.assign({ MainComponent: components_1.Checkbox }, inputProps)));
    }));
};
exports.FormCheckboxInput.defaultProps = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUNoZWNrYm94SW5wdXQudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUE2RTtBQUM3RSxtQ0FBc0M7QUFFdEMsMERBQTBCO0FBTzFCLE1BQU0sYUFBYSxHQUFHLHlCQUFZLENBQXFCLGVBQWUsQ0FBQyxDQUFDO0FBRTNELFFBQUEsaUJBQWlCLEdBQUcsQ0FBQyxLQUE2QixFQUFFLEVBQUU7SUFFbEUsT0FBTyxDQUNOLDhCQUFDLGNBQUssb0JBQUssS0FBSyxHQUNmLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFPLEVBQUUsRUFBRTtRQUV6QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE1BQU0sS0FBSyxHQUFHLGNBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sVUFBVSxxQkFDWixLQUFLLElBQ1IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFDdkIsYUFBYSxFQUFFLENBQUMsTUFBVyxFQUFFLE9BQWdCLEVBQUUsRUFBRTtnQkFFaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7Z0JBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUU1QiwwQ0FBMEM7Z0JBQzFDLDRCQUE0QjtnQkFDNUIsS0FBSztnQkFDTCx1Q0FBdUM7Z0JBQ3ZDLEtBQUs7Z0JBQ0wsS0FBSztnQkFDTCxzQkFBc0I7Z0JBQ3RCLHlCQUF5QjtnQkFDekIsMkNBQTJDO2dCQUMzQywrREFBK0Q7WUFDL0QsQ0FBQyxHQUNELENBQUM7UUFFRixPQUFPLENBQUMsOEJBQUMsYUFBYSxrQkFBQyxhQUFhLEVBQUUscUJBQVEsSUFBTSxVQUFVLEVBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUMsQ0FDTSxDQUNQLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRix5QkFBaUIsQ0FBQyxZQUFZLEdBQUcsRUFDaEMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9Gb3JtQ2hlY2tib3hJbnB1dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hlY2tib3gsIENoZWNrYm94UHJvcHMsIGdldENvbXBvbmVudCB9IGZyb20gJ0BibHVlYmFzZS9jb21wb25lbnRzJztcbmltcG9ydCB7IEZpZWxkLCBnZXRJbiB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgeyBCYXNlRm9ybUZpZWxkUHJvcHMgfSBmcm9tICcuLi9CYXNlRm9ybUZpZWxkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUNoZWNrYm94SW5wdXRQcm9wcyBleHRlbmRzIENoZWNrYm94UHJvcHMge1xuXHR0eXBlOiAnY2hlY2tib3gnLFxuXHRuYW1lOiBzdHJpbmcsXG59XG5cbmNvbnN0IEJhc2VGb3JtRmllbGQgPSBnZXRDb21wb25lbnQ8QmFzZUZvcm1GaWVsZFByb3BzPignQmFzZUZvcm1GaWVsZCcpO1xuXG5leHBvcnQgY29uc3QgRm9ybUNoZWNrYm94SW5wdXQgPSAocHJvcHM6IEZvcm1DaGVja2JveElucHV0UHJvcHMpID0+IHtcblxuXHRyZXR1cm4gKFxuXHRcdDxGaWVsZCB7Li4ucHJvcHN9PlxuXHRcdHsoeyBmaWVsZCwgZm9ybSB9OiBhbnkpID0+IHtcblxuXHRcdFx0Y29uc3QgbmFtZSA9IHByb3BzLm5hbWU7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IGdldEluKGZvcm0udmFsdWVzLCBuYW1lKTtcblx0XHRcdGNvbnNvbGUubG9nKCdhYmMnLG5hbWUpO1xuXHRcdFx0Y29uc3QgaW5wdXRQcm9wcyA9IHtcblx0XHRcdFx0Li4ucHJvcHMsXG5cdFx0XHRcdGNoZWNrZWQ6IEJvb2xlYW4odmFsdWUpLFxuXHRcdFx0XHRvblZhbHVlQ2hhbmdlOiAoX3ZhbHVlOiBhbnksIGNoZWNrZWQ6IGJvb2xlYW4pID0+IFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Zm9ybS5zZXRGaWVsZFZhbHVlKGZpZWxkLm5hbWUsIGNoZWNrZWQpXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Z1bmpka2puaycsIHByb3BzLm9uVmFsdWVDaGFuZ2UpXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3ZhbHVlJywgdmFsdWUpXG5cblx0XHRcdFx0Ly8gaWYgKHZhbHVlID09PSB0cnVlICYmIHZhbHVlID09PSBmYWxzZSl7XG5cdFx0XHRcdC8vIFx0aWYgKHByb3BzLm9uVmFsdWVDaGFuZ2UpXG5cdFx0XHRcdC8vIFx0e1xuXHRcdFx0XHQvLyBcdFx0cHJvcHMub25WYWx1ZUNoYW5nZSh2YWx1ZSxjaGVja2VkKVxuXHRcdFx0XHQvLyBcdH1cblx0XHRcdFx0Ly8gfSBcblx0XHRcdFx0Ly8gIDp2YWx1ZSA9PT0gZmFsc2UgP1xuXHRcdFx0XHQvLyBcdHByb3BzLm9uVmFsdWVDaGFuZ2UgP1xuXHRcdFx0XHQvLyBcdCAgIHByb3BzLm9uVmFsdWVDaGFuZ2UodmFsdWUsY2hlY2tlZCkgOlxuXHRcdFx0XHQvLyBcdFx0ICBodHRwczovL2dpdGh1Yi5jb20vTXV6emFtaWw3NS9CaWxsLW1hbmFnZXItRXhwb251bGw6bnVsbFxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gKDxCYXNlRm9ybUZpZWxkIE1haW5Db21wb25lbnQ9e0NoZWNrYm94fSB7Li4uaW5wdXRQcm9wc30gLz4pO1xuXHRcdH19XG5cdDwvRmllbGQ+XG5cdCk7XG59O1xuXG5Gb3JtQ2hlY2tib3hJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG59O1xuIl0sInZlcnNpb24iOjN9