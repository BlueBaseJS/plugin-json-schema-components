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
                value === true && value === false ?
                    props.onValueChange ?
                        props.onValueChange(value, checked) : null : null;
                //  :value === false ?
                // 	props.onValueChange ?
                // 	   props.onValueChange(value,checked) :
                // 		  https://github.com/Muzzamil75/Bill-manager-Exponull:null
            } });
        return (react_1.default.createElement(BaseFormField, Object.assign({ MainComponent: components_1.Checkbox }, inputProps)));
    }));
};
exports.FormCheckboxInput.defaultProps = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUNoZWNrYm94SW5wdXQudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUE2RTtBQUM3RSxtQ0FBc0M7QUFFdEMsMERBQTBCO0FBTzFCLE1BQU0sYUFBYSxHQUFHLHlCQUFZLENBQXFCLGVBQWUsQ0FBQyxDQUFDO0FBRTNELFFBQUEsaUJBQWlCLEdBQUcsQ0FBQyxLQUE2QixFQUFFLEVBQUU7SUFFbEUsT0FBTyxDQUNOLDhCQUFDLGNBQUssb0JBQUssS0FBSyxHQUNmLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFPLEVBQUUsRUFBRTtRQUV6QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE1BQU0sS0FBSyxHQUFHLGNBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sVUFBVSxxQkFDWixLQUFLLElBQ1IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFDdkIsYUFBYSxFQUFFLENBQUMsTUFBVyxFQUFFLE9BQWdCLEVBQUUsRUFBRTtnQkFFaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7Z0JBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUU1QixLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQztvQkFDbEMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUNuQixLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUMsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUE7Z0JBRS9DLHNCQUFzQjtnQkFDdEIseUJBQXlCO2dCQUN6QiwyQ0FBMkM7Z0JBQzNDLCtEQUErRDtZQUMvRCxDQUFDLEdBQ0QsQ0FBQztRQUVGLE9BQU8sQ0FBQyw4QkFBQyxhQUFhLGtCQUFDLGFBQWEsRUFBRSxxQkFBUSxJQUFNLFVBQVUsRUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQyxDQUNNLENBQ1AsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLHlCQUFpQixDQUFDLFlBQVksR0FBRyxFQUNoQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL0Zvcm1DaGVja2JveElucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGVja2JveCwgQ2hlY2tib3hQcm9wcywgZ2V0Q29tcG9uZW50IH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRmllbGQsIGdldEluIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCB7IEJhc2VGb3JtRmllbGRQcm9wcyB9IGZyb20gJy4uL0Jhc2VGb3JtRmllbGQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtQ2hlY2tib3hJbnB1dFByb3BzIGV4dGVuZHMgQ2hlY2tib3hQcm9wcyB7XG5cdHR5cGU6ICdjaGVja2JveCcsXG5cdG5hbWU6IHN0cmluZyxcbn1cblxuY29uc3QgQmFzZUZvcm1GaWVsZCA9IGdldENvbXBvbmVudDxCYXNlRm9ybUZpZWxkUHJvcHM+KCdCYXNlRm9ybUZpZWxkJyk7XG5cbmV4cG9ydCBjb25zdCBGb3JtQ2hlY2tib3hJbnB1dCA9IChwcm9wczogRm9ybUNoZWNrYm94SW5wdXRQcm9wcykgPT4ge1xuXG5cdHJldHVybiAoXG5cdFx0PEZpZWxkIHsuLi5wcm9wc30+XG5cdFx0eyh7IGZpZWxkLCBmb3JtIH06IGFueSkgPT4ge1xuXG5cdFx0XHRjb25zdCBuYW1lID0gcHJvcHMubmFtZTtcblx0XHRcdGNvbnN0IHZhbHVlID0gZ2V0SW4oZm9ybS52YWx1ZXMsIG5hbWUpO1xuXHRcdFx0Y29uc29sZS5sb2coJ2FiYycsbmFtZSk7XG5cdFx0XHRjb25zdCBpbnB1dFByb3BzID0ge1xuXHRcdFx0XHQuLi5wcm9wcyxcblx0XHRcdFx0Y2hlY2tlZDogQm9vbGVhbih2YWx1ZSksXG5cdFx0XHRcdG9uVmFsdWVDaGFuZ2U6IChfdmFsdWU6IGFueSwgY2hlY2tlZDogYm9vbGVhbikgPT4gXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRmb3JtLnNldEZpZWxkVmFsdWUoZmllbGQubmFtZSwgY2hlY2tlZClcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnRnVuamRram5rJywgcHJvcHMub25WYWx1ZUNoYW5nZSlcblx0XHRcdFx0XHRjb25zb2xlLmxvZygndmFsdWUnLCB2YWx1ZSlcblxuXHRcdFx0XHR2YWx1ZSA9PT0gdHJ1ZSAmJiB2YWx1ZSA9PT0gZmFsc2UgPyBcblx0XHRcdFx0XHRwcm9wcy5vblZhbHVlQ2hhbmdlID9cblx0XHRcdFx0XHQgIHByb3BzLm9uVmFsdWVDaGFuZ2UodmFsdWUsY2hlY2tlZCk6bnVsbDpudWxsXG5cdFx0XHRcdFx0ICBcblx0XHRcdFx0Ly8gIDp2YWx1ZSA9PT0gZmFsc2UgP1xuXHRcdFx0XHQvLyBcdHByb3BzLm9uVmFsdWVDaGFuZ2UgP1xuXHRcdFx0XHQvLyBcdCAgIHByb3BzLm9uVmFsdWVDaGFuZ2UodmFsdWUsY2hlY2tlZCkgOlxuXHRcdFx0XHQvLyBcdFx0ICBodHRwczovL2dpdGh1Yi5jb20vTXV6emFtaWw3NS9CaWxsLW1hbmFnZXItRXhwb251bGw6bnVsbFxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gKDxCYXNlRm9ybUZpZWxkIE1haW5Db21wb25lbnQ9e0NoZWNrYm94fSB7Li4uaW5wdXRQcm9wc30gLz4pO1xuXHRcdH19XG5cdDwvRmllbGQ+XG5cdCk7XG59O1xuXG5Gb3JtQ2hlY2tib3hJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG59O1xuIl0sInZlcnNpb24iOjN9