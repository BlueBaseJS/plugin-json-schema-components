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
                console.log('Funjdkjnk', props.onValueChange);
                console.log('value', value);
                if (value === true || value === false) {
                    if (props.onValueChange) {
                        props.onValueChange(value, checked);
                    }
                }
                //  :value === false ?
                // 	props.onValueChange ?
                // 	   props.onValueChange(value,checked) :
                // 		  https://github.com/Muzzamil75/Bill-manager-Exponull:null
            } });
        return (react_1.default.createElement(BaseFormField, Object.assign({ MainComponent: components_1.Checkbox }, inputProps)));
    }));
};
exports.FormCheckboxInput.defaultProps = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUNoZWNrYm94SW5wdXQudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUE2RTtBQUM3RSxtQ0FBc0M7QUFFdEMsMERBQTBCO0FBTzFCLE1BQU0sYUFBYSxHQUFHLHlCQUFZLENBQXFCLGVBQWUsQ0FBQyxDQUFDO0FBRTNELFFBQUEsaUJBQWlCLEdBQUcsQ0FBQyxLQUE2QixFQUFFLEVBQUU7SUFFbEUsT0FBTyxDQUNOLDhCQUFDLGNBQUssb0JBQUssS0FBSyxHQUNmLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFPLEVBQUUsRUFBRTtRQUV6QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sS0FBSyxHQUFHLGNBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sVUFBVSxxQkFDWixLQUFLLElBQ1IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFDdkIsYUFBYSxFQUFFLENBQUMsTUFBVyxFQUFFLE9BQWdCLEVBQUUsRUFBRTtnQkFFaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7Z0JBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUU1QixJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssRUFDckM7b0JBQ0MsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUN2Qjt3QkFDQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUMsQ0FBQTtxQkFDbEM7aUJBQ0Q7Z0JBQ0Qsc0JBQXNCO2dCQUN0Qix5QkFBeUI7Z0JBQ3pCLDJDQUEyQztnQkFDM0MsK0RBQStEO1lBQy9ELENBQUMsR0FDRCxDQUFDO1FBRUYsT0FBTyxDQUFDLDhCQUFDLGFBQWEsa0JBQUMsYUFBYSxFQUFFLHFCQUFRLElBQU0sVUFBVSxFQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDLENBQ00sQ0FDUCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYseUJBQWlCLENBQUMsWUFBWSxHQUFHLEVBQ2hDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUNoZWNrYm94SW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoZWNrYm94LCBDaGVja2JveFByb3BzLCBnZXRDb21wb25lbnQgfSBmcm9tICdAYmx1ZWJhc2UvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGaWVsZCwgZ2V0SW4gfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IHsgQmFzZUZvcm1GaWVsZFByb3BzIH0gZnJvbSAnLi4vQmFzZUZvcm1GaWVsZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1DaGVja2JveElucHV0UHJvcHMgZXh0ZW5kcyBDaGVja2JveFByb3BzIHtcblx0dHlwZTogJ2NoZWNrYm94Jyxcblx0bmFtZTogc3RyaW5nLFxufVxuXG5jb25zdCBCYXNlRm9ybUZpZWxkID0gZ2V0Q29tcG9uZW50PEJhc2VGb3JtRmllbGRQcm9wcz4oJ0Jhc2VGb3JtRmllbGQnKTtcblxuZXhwb3J0IGNvbnN0IEZvcm1DaGVja2JveElucHV0ID0gKHByb3BzOiBGb3JtQ2hlY2tib3hJbnB1dFByb3BzKSA9PiB7XG5cblx0cmV0dXJuIChcblx0XHQ8RmllbGQgey4uLnByb3BzfT5cblx0XHR7KHsgZmllbGQsIGZvcm0gfTogYW55KSA9PiB7XG5cblx0XHRcdGNvbnN0IG5hbWUgPSBwcm9wcy5uYW1lO1xuXHRcdFx0Y29uc29sZS5sb2coJ2FiYycsbmFtZSk7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IGdldEluKGZvcm0udmFsdWVzLCBuYW1lKTtcblx0XHRcdGNvbnN0IGlucHV0UHJvcHMgPSB7XG5cdFx0XHRcdC4uLnByb3BzLFxuXHRcdFx0XHRjaGVja2VkOiBCb29sZWFuKHZhbHVlKSxcblx0XHRcdFx0b25WYWx1ZUNoYW5nZTogKF92YWx1ZTogYW55LCBjaGVja2VkOiBib29sZWFuKSA9PiBcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGZvcm0uc2V0RmllbGRWYWx1ZShmaWVsZC5uYW1lLCBjaGVja2VkKVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdGdW5qZGtqbmsnLCBwcm9wcy5vblZhbHVlQ2hhbmdlKVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCd2YWx1ZScsIHZhbHVlKVxuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gZmFsc2UpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAocHJvcHMub25WYWx1ZUNoYW5nZSlcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRwcm9wcy5vblZhbHVlQ2hhbmdlKHZhbHVlLGNoZWNrZWQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IFxuXHRcdFx0XHQvLyAgOnZhbHVlID09PSBmYWxzZSA/XG5cdFx0XHRcdC8vIFx0cHJvcHMub25WYWx1ZUNoYW5nZSA/XG5cdFx0XHRcdC8vIFx0ICAgcHJvcHMub25WYWx1ZUNoYW5nZSh2YWx1ZSxjaGVja2VkKSA6XG5cdFx0XHRcdC8vIFx0XHQgIGh0dHBzOi8vZ2l0aHViLmNvbS9NdXp6YW1pbDc1L0JpbGwtbWFuYWdlci1FeHBvbnVsbDpudWxsXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHJldHVybiAoPEJhc2VGb3JtRmllbGQgTWFpbkNvbXBvbmVudD17Q2hlY2tib3h9IHsuLi5pbnB1dFByb3BzfSAvPik7XG5cdFx0fX1cblx0PC9GaWVsZD5cblx0KTtcbn07XG5cbkZvcm1DaGVja2JveElucHV0LmRlZmF1bHRQcm9wcyA9IHtcbn07XG4iXSwidmVyc2lvbiI6M30=