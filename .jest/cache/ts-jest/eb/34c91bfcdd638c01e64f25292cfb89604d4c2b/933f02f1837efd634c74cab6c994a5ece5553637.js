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
                }
            } });
        return (react_1.default.createElement(BaseFormField, Object.assign({ MainComponent: components_1.Checkbox }, inputProps)));
    }));
};
exports.FormCheckboxInput.defaultProps = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUNoZWNrYm94SW5wdXQudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUE2RTtBQUM3RSxtQ0FBc0M7QUFFdEMsMERBQTBCO0FBTzFCLE1BQU0sYUFBYSxHQUFHLHlCQUFZLENBQXFCLGVBQWUsQ0FBQyxDQUFDO0FBRTNELFFBQUEsaUJBQWlCLEdBQUcsQ0FBQyxLQUE2QixFQUFFLEVBQUU7SUFFbEUsT0FBTyxDQUNOLDhCQUFDLGNBQUssb0JBQUssS0FBSyxHQUNmLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFPLEVBQUUsRUFBRTtRQUV6QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sS0FBSyxHQUFHLGNBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXZDLE1BQU0sVUFBVSxxQkFDWixLQUFLLElBQ1IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFFdkIsYUFBYSxFQUFFLENBQUMsTUFBVyxFQUFFLE9BQWdCLEVBQUUsRUFBRTtnQkFFaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUUzQixJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssRUFDckM7b0JBQ0MsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUN2Qjt3QkFDQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUMsQ0FBQTtxQkFDbEM7aUJBQ0Q7cUJBQ0k7aUJBRUo7WUFDRixDQUFDLEdBQ0QsQ0FBQztRQUVGLE9BQU8sQ0FBQyw4QkFBQyxhQUFhLGtCQUFDLGFBQWEsRUFBRSxxQkFBUSxJQUFNLFVBQVUsRUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQyxDQUNNLENBQ1AsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLHlCQUFpQixDQUFDLFlBQVksR0FBRyxFQUNoQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL0Zvcm1DaGVja2JveElucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGVja2JveCwgQ2hlY2tib3hQcm9wcywgZ2V0Q29tcG9uZW50IH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRmllbGQsIGdldEluIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCB7IEJhc2VGb3JtRmllbGRQcm9wcyB9IGZyb20gJy4uL0Jhc2VGb3JtRmllbGQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtQ2hlY2tib3hJbnB1dFByb3BzIGV4dGVuZHMgQ2hlY2tib3hQcm9wcyB7XG5cdHR5cGU6ICdjaGVja2JveCcsXG5cdG5hbWU6IHN0cmluZyxcbn1cblxuY29uc3QgQmFzZUZvcm1GaWVsZCA9IGdldENvbXBvbmVudDxCYXNlRm9ybUZpZWxkUHJvcHM+KCdCYXNlRm9ybUZpZWxkJyk7XG5cbmV4cG9ydCBjb25zdCBGb3JtQ2hlY2tib3hJbnB1dCA9IChwcm9wczogRm9ybUNoZWNrYm94SW5wdXRQcm9wcykgPT4ge1xuXG5cdHJldHVybiAoXG5cdFx0PEZpZWxkIHsuLi5wcm9wc30+XG5cdFx0eyh7IGZpZWxkLCBmb3JtIH06IGFueSkgPT4ge1xuXG5cdFx0XHRjb25zdCBuYW1lID0gcHJvcHMubmFtZTtcblx0XHRcdGNvbnNvbGUubG9nKCdhYmMnLG5hbWUpO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBnZXRJbihmb3JtLnZhbHVlcywgbmFtZSk7XG5cblx0XHRcdGNvbnN0IGlucHV0UHJvcHMgPSB7XG5cdFx0XHRcdC4uLnByb3BzLFxuXHRcdFx0XHRjaGVja2VkOiBCb29sZWFuKHZhbHVlKSxcblxuXHRcdFx0XHRvblZhbHVlQ2hhbmdlOiAoX3ZhbHVlOiBhbnksIGNoZWNrZWQ6IGJvb2xlYW4pID0+IFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Zm9ybS5zZXRGaWVsZFZhbHVlKGZpZWxkLm5hbWUsIGNoZWNrZWQpXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2Z1bmMnLCBwcm9wcy5vblZhbHVlQ2hhbmdlKVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCd2YWx1ZScsIHZhbHVlKVxuXG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSBmYWxzZSlcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpZiAocHJvcHMub25WYWx1ZUNoYW5nZSlcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0cHJvcHMub25WYWx1ZUNoYW5nZSh2YWx1ZSxjaGVja2VkKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHQgXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gKDxCYXNlRm9ybUZpZWxkIE1haW5Db21wb25lbnQ9e0NoZWNrYm94fSB7Li4uaW5wdXRQcm9wc30gLz4pO1xuXHRcdH19XG5cdDwvRmllbGQ+XG5cdCk7XG59O1xuXG5Gb3JtQ2hlY2tib3hJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG59O1xuIl0sInZlcnNpb24iOjN9