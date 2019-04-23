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
        console.log('abc', name);
        const value = formik_1.getIn(form.values, name);
        const inputProps = Object.assign({}, props, { checked: Boolean(value), onValueChange: (_value, checked) => {
                form.setFieldValue(field.name, checked);
                console.log('func', props.onValueChange);
                console.log('value', value);
                if (value === true || value === false) {
                    if (props.onValueChange) {
                        props.onValueChange(value, checked);
                    }
                }
                else {
                    null;
                }
            } });
        return (react_1.default.createElement(BaseFormField, Object.assign({ MainComponent: components_1.Checkbox }, inputProps)));
    }));
};
exports.FormCheckboxInput.defaultProps = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUNoZWNrYm94SW5wdXQudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUE2RTtBQUM3RSxtQ0FBc0M7QUFFdEMsMERBQTBCO0FBTzFCLE1BQU0sYUFBYSxHQUFHLHlCQUFZLENBQXFCLGVBQWUsQ0FBQyxDQUFDO0FBRTNELFFBQUEsaUJBQWlCLEdBQUcsQ0FBQyxLQUE2QixFQUFFLEVBQUU7SUFFbEUsT0FBTyxDQUNOLDhCQUFDLGNBQUssb0JBQUssS0FBSyxHQUNmLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFPLEVBQUUsRUFBRTtRQUV6QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sS0FBSyxHQUFHLGNBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXZDLE1BQU0sVUFBVSxxQkFDWixLQUFLLElBQ1IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFFdkIsYUFBYSxFQUFFLENBQUMsTUFBVyxFQUFFLE9BQWdCLEVBQUUsRUFBRTtnQkFFaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUUzQixJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssRUFDckM7b0JBQ0MsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUN2Qjt3QkFDQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUMsQ0FBQTtxQkFDbEM7aUJBQ0Q7cUJBQ0k7b0JBQ0gsSUFBSSxDQUFBO2lCQUNMO1lBQ0YsQ0FBQyxHQUNELENBQUM7UUFFRixPQUFPLENBQUMsOEJBQUMsYUFBYSxrQkFBQyxhQUFhLEVBQUUscUJBQVEsSUFBTSxVQUFVLEVBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUMsQ0FDTSxDQUNQLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRix5QkFBaUIsQ0FBQyxZQUFZLEdBQUcsRUFDaEMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9Gb3JtQ2hlY2tib3hJbnB1dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hlY2tib3gsIENoZWNrYm94UHJvcHMsIGdldENvbXBvbmVudCB9IGZyb20gJ0BibHVlYmFzZS9jb21wb25lbnRzJztcbmltcG9ydCB7IEZpZWxkLCBnZXRJbiB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgeyBCYXNlRm9ybUZpZWxkUHJvcHMgfSBmcm9tICcuLi9CYXNlRm9ybUZpZWxkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUNoZWNrYm94SW5wdXRQcm9wcyBleHRlbmRzIENoZWNrYm94UHJvcHMge1xuXHR0eXBlOiAnY2hlY2tib3gnLFxuXHRuYW1lOiBzdHJpbmcsXG59XG5cbmNvbnN0IEJhc2VGb3JtRmllbGQgPSBnZXRDb21wb25lbnQ8QmFzZUZvcm1GaWVsZFByb3BzPignQmFzZUZvcm1GaWVsZCcpO1xuXG5leHBvcnQgY29uc3QgRm9ybUNoZWNrYm94SW5wdXQgPSAocHJvcHM6IEZvcm1DaGVja2JveElucHV0UHJvcHMpID0+IHtcblxuXHRyZXR1cm4gKFxuXHRcdDxGaWVsZCB7Li4ucHJvcHN9PlxuXHRcdHsoeyBmaWVsZCwgZm9ybSB9OiBhbnkpID0+IHtcblxuXHRcdFx0Y29uc3QgbmFtZSA9IHByb3BzLm5hbWU7XG5cdFx0XHRjb25zb2xlLmxvZygnYWJjJyxuYW1lKTtcblx0XHRcdGNvbnN0IHZhbHVlID0gZ2V0SW4oZm9ybS52YWx1ZXMsIG5hbWUpO1xuXG5cdFx0XHRjb25zdCBpbnB1dFByb3BzID0ge1xuXHRcdFx0XHQuLi5wcm9wcyxcblx0XHRcdFx0Y2hlY2tlZDogQm9vbGVhbih2YWx1ZSksXG5cblx0XHRcdFx0b25WYWx1ZUNoYW5nZTogKF92YWx1ZTogYW55LCBjaGVja2VkOiBib29sZWFuKSA9PiBcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGZvcm0uc2V0RmllbGRWYWx1ZShmaWVsZC5uYW1lLCBjaGVja2VkKVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmdW5jJywgcHJvcHMub25WYWx1ZUNoYW5nZSlcblx0XHRcdFx0XHRjb25zb2xlLmxvZygndmFsdWUnLCB2YWx1ZSlcblxuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gZmFsc2UpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aWYgKHByb3BzLm9uVmFsdWVDaGFuZ2UpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHByb3BzLm9uVmFsdWVDaGFuZ2UodmFsdWUsY2hlY2tlZClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IFxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0IG51bGxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHJldHVybiAoPEJhc2VGb3JtRmllbGQgTWFpbkNvbXBvbmVudD17Q2hlY2tib3h9IHsuLi5pbnB1dFByb3BzfSAvPik7XG5cdFx0fX1cblx0PC9GaWVsZD5cblx0KTtcbn07XG5cbkZvcm1DaGVja2JveElucHV0LmRlZmF1bHRQcm9wcyA9IHtcbn07XG4iXSwidmVyc2lvbiI6M30=