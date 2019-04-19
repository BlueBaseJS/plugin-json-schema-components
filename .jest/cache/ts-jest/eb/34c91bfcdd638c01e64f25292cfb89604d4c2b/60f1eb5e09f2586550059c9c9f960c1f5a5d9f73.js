"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const components_1 = require("@bluebase/components");
const formik_1 = require("formik");
const react_1 = tslib_1.__importDefault(require("react"));
const BaseFormField = components_1.getComponent('BaseFormField');
const TextInput = components_1.getComponent('TextInput');
const validate = (props) => (value) => {
    const { required, type } = props;
    let error;
    // If field is required //tested
    if (required === true && !value) {
        error = 'This field is required';
    }
    else if (type === 'text' && /^(0|[1-9]\d*)(\.\d+)?$/.test(value)) {
        error = 'Should only be alphabet';
    }
    else if (type === 'date') {
        error = value;
    }
    //if number field is incorrect
    else if (type === 'number' && !/^(0|[1-9]\d*)(\.\d+)?$/.test(value)) {
        error = 'Please enter a valid number';
    }
    // else if (type === 'password' && value != password ){
    // 	error = 'Password not matched'
    // }
    // If field 'email'
    else if (type === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Please enter a valid email address';
    }
    else if (type === 'url' && !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(value)) {
        error = 'Please enter a valid Url';
    }
    return error;
};
exports.FormTextInput = (props) => (react_1.default.createElement(formik_1.Field, Object.assign({}, props, { validate: props.validate || validate(props) }), ({ field, form }) => {
    const name = props.name;
    const inputProps = Object.assign({}, field, { onChange: undefined }, props, { error: (form.errors[name] && form.touched[name]) || props.error, helperText: form.errors[name] || props.helperText, onChangeText: (text) => {
            form.handleChange(name)(text);
        } });
    return (react_1.default.createElement(BaseFormField, Object.assign({}, inputProps)));
}));
exports.FormTextInput.defaultProps = {
    MainComponent: TextInput
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVRleHRJbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQW9FO0FBSXBFLG1DQUErQjtBQUMvQiwwREFBMEI7QUFFMUIsTUFBTSxhQUFhLEdBQUcseUJBQVksQ0FBcUIsZUFBZSxDQUFDLENBQUM7QUFDeEUsTUFBTSxTQUFTLEdBQUcseUJBQVksQ0FBaUIsV0FBVyxDQUFDLENBQUM7QUFjNUQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUF5QixFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBQ2pFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBRWpDLElBQUksS0FBSyxDQUFDO0lBRVYsZ0NBQWdDO0lBQ2hDLElBQUksUUFBUSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRztRQUNqQyxLQUFLLEdBQUcsd0JBQXdCLENBQUM7S0FDakM7U0FFSSxJQUFHLElBQUksS0FBSyxNQUFNLElBQUksd0JBQXdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDO1FBQy9ELEtBQUssR0FBRyx5QkFBeUIsQ0FBQztLQUNsQztTQUVJLElBQUcsSUFBSSxLQUFLLE1BQU0sRUFBRztRQUN6QixLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ2Q7SUFFRCw4QkFBOEI7U0FDekIsSUFBSSxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDO1FBQ25FLEtBQUssR0FBRyw2QkFBNkIsQ0FBQTtLQUNyQztJQUVELHVEQUF1RDtJQUN2RCxrQ0FBa0M7SUFDbEMsSUFBSTtJQUVKLG1CQUFtQjtTQUNkLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLDJDQUEyQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN0RixLQUFLLEdBQUcsb0NBQW9DLENBQUM7S0FDN0M7U0FFSSxJQUFJLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyx5SEFBeUgsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUM7UUFDakssS0FBSyxHQUFHLDBCQUEwQixDQUFDO0tBRW5DO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFVyxRQUFBLGFBQWEsR0FBRyxDQUFDLEtBQXlCLEVBQUUsRUFBRSxDQUFDLENBQzNELDhCQUFDLGNBQUssb0JBQUssS0FBSyxJQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FDM0QsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQU8sRUFBRSxFQUFFO0lBQ3pCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFFeEIsTUFBTSxVQUFVLHFCQUNaLEtBQUssSUFDUixRQUFRLEVBQUUsU0FBUyxJQUNoQixLQUFLLElBQ1IsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssRUFDL0QsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLFVBQVUsRUFFakQsWUFBWSxFQUFFLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLEdBQ0QsQ0FBQztJQUNGLE9BQU8sQ0FBQyw4QkFBQyxhQUFhLG9CQUFLLFVBQVUsRUFBSSxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUNNLENBQ1IsQ0FBQztBQUVGLHFCQUFhLENBQUMsWUFBWSxHQUFHO0lBQzVCLGFBQWEsRUFBRSxTQUFTO0NBQ3hCLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVRleHRJbnB1dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dElucHV0UHJvcHMsIGdldENvbXBvbmVudCB9IGZyb20gJ0BibHVlYmFzZS9jb21wb25lbnRzJztcbmltcG9ydCB7IEJhc2VGb3JtRmllbGRQcm9wcyB9IGZyb20gJy4uL0Jhc2VGb3JtRmllbGQnO1xuaW1wb3J0IHsgU3R5bGVQcm9wLCBWaWV3U3R5bGUgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBCYXNlRm9ybUZpZWxkID0gZ2V0Q29tcG9uZW50PEJhc2VGb3JtRmllbGRQcm9wcz4oJ0Jhc2VGb3JtRmllbGQnKTtcbmNvbnN0IFRleHRJbnB1dCA9IGdldENvbXBvbmVudDxUZXh0SW5wdXRQcm9wcz4oJ1RleHRJbnB1dCcpO1xuXG5leHBvcnQgdHlwZSBGb3JtVGV4dElucHV0UHJvcHM8VCA9IHt9PiA9IFRleHRJbnB1dFByb3BzICYgQmFzZUZvcm1GaWVsZFByb3BzICYgVCAmIHtcblx0Y2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG5cdHZhbGlkYXRlPzogKCh2YWx1ZTogYW55KSA9PiBzdHJpbmcgfCBQcm9taXNlPHZvaWQ+IHwgdW5kZWZpbmVkKTtcblx0bmFtZTogc3RyaW5nO1xuXHR0eXBlPzogc3RyaW5nO1xuXHR2YWx1ZT86IGFueTtcblx0aW5uZXJSZWY/OiAoaW5zdGFuY2U6IGFueSkgPT4gdm9pZDtcblx0c3R5bGU/OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0Ly9ba2V5OiBzdHJpbmddOiBhbnlcblx0bWF4TGVuZ3RoID8gOiBudW1iZXJcbn07XG5cbmNvbnN0IHZhbGlkYXRlID0gKHByb3BzOiBGb3JtVGV4dElucHV0UHJvcHMpID0+ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHsgcmVxdWlyZWQsIHR5cGUgfSA9IHByb3BzO1xuXG5cdGxldCBlcnJvcjtcblxuXHQvLyBJZiBmaWVsZCBpcyByZXF1aXJlZCAvL3Rlc3RlZFxuXHRpZiAocmVxdWlyZWQgPT09IHRydWUgJiYgIXZhbHVlICkge1xuXHRcdGVycm9yID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnO1xuXHR9XG5cblx0ZWxzZSBpZih0eXBlID09PSAndGV4dCcgJiYgL14oMHxbMS05XVxcZCopKFxcLlxcZCspPyQvLnRlc3QodmFsdWUpKXtcblx0XHRlcnJvciA9ICdTaG91bGQgb25seSBiZSBhbHBoYWJldCc7XG5cdH1cblxuXHRlbHNlIGlmKHR5cGUgPT09ICdkYXRlJyAgKXtcblx0XHRlcnJvciA9IHZhbHVlO1xuXHR9XG5cblx0Ly9pZiBudW1iZXIgZmllbGQgaXMgaW5jb3JyZWN0XG5cdGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmICEvXigwfFsxLTldXFxkKikoXFwuXFxkKyk/JC8udGVzdCh2YWx1ZSkpe1xuXHRcdGVycm9yID0gJ1BsZWFzZSBlbnRlciBhIHZhbGlkIG51bWJlcidcblx0fVxuXG5cdC8vIGVsc2UgaWYgKHR5cGUgPT09ICdwYXNzd29yZCcgJiYgdmFsdWUgIT0gcGFzc3dvcmQgKXtcblx0Ly8gXHRlcnJvciA9ICdQYXNzd29yZCBub3QgbWF0Y2hlZCdcblx0Ly8gfVxuXG5cdC8vIElmIGZpZWxkICdlbWFpbCdcblx0ZWxzZSBpZiAodHlwZSA9PT0gJ2VtYWlsJyAmJiAhL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWx1ZSkpIHtcblx0XHRlcnJvciA9ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJztcblx0fVxuXG5cdGVsc2UgaWYgKHR5cGUgPT09ICd1cmwnICYmICEvXihodHRwOlxcL1xcL3d3d1xcLnxodHRwczpcXC9cXC93d3dcXC58aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvKT9bYS16MC05XSsoW1xcLVxcLl17MX1bYS16MC05XSspKlxcLlthLXpdezIsNX0oOlswLTldezEsNX0pPyhcXC8uKik/JC8udGVzdCh2YWx1ZSkpe1xuXHRcdGVycm9yID0gJ1BsZWFzZSBlbnRlciBhIHZhbGlkIFVybCc7XG5cdFx0XG5cdH1cblxuXHRyZXR1cm4gZXJyb3I7XG59O1xuXG5leHBvcnQgY29uc3QgRm9ybVRleHRJbnB1dCA9IChwcm9wczogRm9ybVRleHRJbnB1dFByb3BzKSA9PiAoXG5cdDxGaWVsZCB7Li4ucHJvcHN9IHZhbGlkYXRlPXtwcm9wcy52YWxpZGF0ZSB8fCB2YWxpZGF0ZShwcm9wcyl9PlxuXHRcdHsoeyBmaWVsZCwgZm9ybSB9OiBhbnkpID0+IHtcblx0XHRcdGNvbnN0IG5hbWUgPSBwcm9wcy5uYW1lO1xuXG5cdFx0XHRjb25zdCBpbnB1dFByb3BzID0ge1xuXHRcdFx0XHQuLi5maWVsZCxcblx0XHRcdFx0b25DaGFuZ2U6IHVuZGVmaW5lZCxcblx0XHRcdFx0Li4ucHJvcHMsXG5cdFx0XHRcdGVycm9yOiAoZm9ybS5lcnJvcnNbbmFtZV0gJiYgZm9ybS50b3VjaGVkW25hbWVdKSB8fCBwcm9wcy5lcnJvcixcblx0XHRcdFx0aGVscGVyVGV4dDogZm9ybS5lcnJvcnNbbmFtZV0gfHwgcHJvcHMuaGVscGVyVGV4dCxcblx0XHRcdFx0XG5cdFx0XHRcdG9uQ2hhbmdlVGV4dDogKHRleHQ6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdGZvcm0uaGFuZGxlQ2hhbmdlKG5hbWUpKHRleHQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHRcdHJldHVybiAoPEJhc2VGb3JtRmllbGQgey4uLmlucHV0UHJvcHN9IC8+KTtcblx0XHR9fVxuXHQ8L0ZpZWxkPlxuKTtcblxuRm9ybVRleHRJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG5cdE1haW5Db21wb25lbnQ6IFRleHRJbnB1dFxufTsiXSwidmVyc2lvbiI6M30=