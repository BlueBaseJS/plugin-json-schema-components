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
    var password;
    // If field is required //tested
    if (required === true && !value) {
        error = 'This field is required';
    }
    else if (type === 'text' && /^[A-Za-z]+$/.test(value)) {
        error = 'Should only be alphabet';
    }
    else if (type === 'password') {
        //password == value;
        error = 'This field is required';
    }
    else if (type === 'date') {
        error = value;
    }
    //if number field is incorrect
    else if (type === 'number' && !/^(0|[1-9]\d*)(\.\d+)?$/.test(value)) {
        error = 'Please enter a valid number';
    }
    else if (type === 'password' && value != password) {
        error = 'Password not matched';
    }
    // If field 'email'
    else if (type === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Please enter a valid email address';
    }
    return error;
};
exports.FormTextInput = (props) => (react_1.default.createElement(formik_1.Field, Object.assign({}, props, { validate: props.validate || validate(props) }), ({ field, form }) => {
    const name = props.name;
    const inputProps = Object.assign({}, field, { onChange: undefined }, props, { error: (form.errors[name] && form.touched[name]) || props.error, helperText: form.errors[name] || props.helperText, onChangeText: (text) => {
            form.handleChange(name)(text);
            // props.onChangeText && props.onChangeText(text);
        } });
    return (react_1.default.createElement(BaseFormField, Object.assign({}, inputProps)));
}));
exports.FormTextInput.defaultProps = {
    MainComponent: TextInput
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVRleHRJbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQW9FO0FBSXBFLG1DQUErQjtBQUMvQiwwREFBMEI7QUFFMUIsTUFBTSxhQUFhLEdBQUcseUJBQVksQ0FBcUIsZUFBZSxDQUFDLENBQUM7QUFDeEUsTUFBTSxTQUFTLEdBQUcseUJBQVksQ0FBaUIsV0FBVyxDQUFDLENBQUM7QUFjNUQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUF5QixFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBQ2pFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBRWpDLElBQUksS0FBSyxDQUFDO0lBQ1YsSUFBSSxRQUFRLENBQUU7SUFFZCxnQ0FBZ0M7SUFDaEMsSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFHO1FBQ2pDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQztLQUNqQztTQUVJLElBQUcsSUFBSSxLQUFLLE1BQU0sSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDO1FBQ3BELEtBQUssR0FBRyx5QkFBeUIsQ0FBQztLQUNsQztTQUVJLElBQUcsSUFBSSxLQUFLLFVBQVUsRUFBQztRQUMzQixvQkFBb0I7UUFDcEIsS0FBSyxHQUFHLHdCQUF3QixDQUFDO0tBRWpDO1NBRUksSUFBRyxJQUFJLEtBQUssTUFBTSxFQUFHO1FBQ3pCLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDZDtJQUVELDhCQUE4QjtTQUN6QixJQUFJLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUM7UUFDbkUsS0FBSyxHQUFHLDZCQUE2QixDQUFBO0tBQ3JDO1NBRUksSUFBSSxJQUFJLEtBQUssVUFBVSxJQUFJLEtBQUssSUFBSSxRQUFRLEVBQUU7UUFDbEQsS0FBSyxHQUFHLHNCQUFzQixDQUFBO0tBQzlCO0lBRUQsbUJBQW1CO1NBQ2QsSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLENBQUMsMkNBQTJDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3RGLEtBQUssR0FBRyxvQ0FBb0MsQ0FBQztLQUM3QztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRVcsUUFBQSxhQUFhLEdBQUcsQ0FBQyxLQUF5QixFQUFFLEVBQUUsQ0FBQyxDQUMzRCw4QkFBQyxjQUFLLG9CQUFLLEtBQUssSUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQzNELENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFPLEVBQUUsRUFBRTtJQUN6QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBRXhCLE1BQU0sVUFBVSxxQkFDWixLQUFLLElBQ1IsUUFBUSxFQUFFLFNBQVMsSUFDaEIsS0FBSyxJQUNSLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQy9ELFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBRWpELFlBQVksRUFBRSxDQUFDLElBQVksRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsa0RBQWtEO1FBQ25ELENBQUMsR0FDRCxDQUFDO0lBQ0YsT0FBTyxDQUFDLDhCQUFDLGFBQWEsb0JBQUssVUFBVSxFQUFJLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQ00sQ0FDUixDQUFDO0FBRUYscUJBQWEsQ0FBQyxZQUFZLEdBQUc7SUFDNUIsYUFBYSxFQUFFLFNBQVM7Q0FDeEIsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9Gb3JtVGV4dElucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0SW5wdXRQcm9wcywgZ2V0Q29tcG9uZW50IH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgQmFzZUZvcm1GaWVsZFByb3BzIH0gZnJvbSAnLi4vQmFzZUZvcm1GaWVsZCc7XG5pbXBvcnQgeyBTdHlsZVByb3AsIFZpZXdTdHlsZSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEJhc2VGb3JtRmllbGQgPSBnZXRDb21wb25lbnQ8QmFzZUZvcm1GaWVsZFByb3BzPignQmFzZUZvcm1GaWVsZCcpO1xuY29uc3QgVGV4dElucHV0ID0gZ2V0Q29tcG9uZW50PFRleHRJbnB1dFByb3BzPignVGV4dElucHV0Jyk7XG5cbmV4cG9ydCB0eXBlIEZvcm1UZXh0SW5wdXRQcm9wczxUID0ge30+ID0gVGV4dElucHV0UHJvcHMgJiBCYXNlRm9ybUZpZWxkUHJvcHMgJiBUICYge1xuXHRjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcblx0dmFsaWRhdGU/OiAoKHZhbHVlOiBhbnkpID0+IHN0cmluZyB8IFByb21pc2U8dm9pZD4gfCB1bmRlZmluZWQpO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHR5cGU/OiBzdHJpbmc7XG5cdHZhbHVlPzogYW55O1xuXHRpbm5lclJlZj86IChpbnN0YW5jZTogYW55KSA9PiB2b2lkO1xuXHRzdHlsZT86IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHQvL1trZXk6IHN0cmluZ106IGFueVxuXHRtYXhMZW5ndGggPyA6IG51bWJlclxufTtcblxuY29uc3QgdmFsaWRhdGUgPSAocHJvcHM6IEZvcm1UZXh0SW5wdXRQcm9wcykgPT4gKHZhbHVlOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgeyByZXF1aXJlZCwgdHlwZSB9ID0gcHJvcHM7XG5cblx0bGV0IGVycm9yO1xuXHR2YXIgcGFzc3dvcmQgO1xuXG5cdC8vIElmIGZpZWxkIGlzIHJlcXVpcmVkIC8vdGVzdGVkXG5cdGlmIChyZXF1aXJlZCA9PT0gdHJ1ZSAmJiAhdmFsdWUgKSB7XG5cdFx0ZXJyb3IgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG5cdH1cblxuXHRlbHNlIGlmKHR5cGUgPT09ICd0ZXh0JyAmJiAvXltBLVphLXpdKyQvLnRlc3QodmFsdWUpKXtcblx0XHRlcnJvciA9ICdTaG91bGQgb25seSBiZSBhbHBoYWJldCc7XG5cdH1cblxuXHRlbHNlIGlmKHR5cGUgPT09ICdwYXNzd29yZCcpe1xuXHRcdC8vcGFzc3dvcmQgPT0gdmFsdWU7XG5cdFx0ZXJyb3IgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG5cblx0fVxuXG5cdGVsc2UgaWYodHlwZSA9PT0gJ2RhdGUnICApe1xuXHRcdGVycm9yID0gdmFsdWU7XG5cdH1cblxuXHQvL2lmIG51bWJlciBmaWVsZCBpcyBpbmNvcnJlY3Rcblx0ZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgIS9eKDB8WzEtOV1cXGQqKShcXC5cXGQrKT8kLy50ZXN0KHZhbHVlKSl7XG5cdFx0ZXJyb3IgPSAnUGxlYXNlIGVudGVyIGEgdmFsaWQgbnVtYmVyJ1xuXHR9XG5cblx0ZWxzZSBpZiAodHlwZSA9PT0gJ3Bhc3N3b3JkJyAmJiB2YWx1ZSAhPSBwYXNzd29yZCApe1xuXHRcdGVycm9yID0gJ1Bhc3N3b3JkIG5vdCBtYXRjaGVkJ1xuXHR9XG5cblx0Ly8gSWYgZmllbGQgJ2VtYWlsJ1xuXHRlbHNlIGlmICh0eXBlID09PSAnZW1haWwnICYmICEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbHVlKSkge1xuXHRcdGVycm9yID0gJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnO1xuXHR9XG5cblx0cmV0dXJuIGVycm9yO1xufTtcblxuZXhwb3J0IGNvbnN0IEZvcm1UZXh0SW5wdXQgPSAocHJvcHM6IEZvcm1UZXh0SW5wdXRQcm9wcykgPT4gKFxuXHQ8RmllbGQgey4uLnByb3BzfSB2YWxpZGF0ZT17cHJvcHMudmFsaWRhdGUgfHwgdmFsaWRhdGUocHJvcHMpfT5cblx0XHR7KHsgZmllbGQsIGZvcm0gfTogYW55KSA9PiB7XG5cdFx0XHRjb25zdCBuYW1lID0gcHJvcHMubmFtZTtcblxuXHRcdFx0Y29uc3QgaW5wdXRQcm9wcyA9IHtcblx0XHRcdFx0Li4uZmllbGQsXG5cdFx0XHRcdG9uQ2hhbmdlOiB1bmRlZmluZWQsXG5cdFx0XHRcdC4uLnByb3BzLFxuXHRcdFx0XHRlcnJvcjogKGZvcm0uZXJyb3JzW25hbWVdICYmIGZvcm0udG91Y2hlZFtuYW1lXSkgfHwgcHJvcHMuZXJyb3IsXG5cdFx0XHRcdGhlbHBlclRleHQ6IGZvcm0uZXJyb3JzW25hbWVdIHx8IHByb3BzLmhlbHBlclRleHQsXG5cdFx0XHRcdFxuXHRcdFx0XHRvbkNoYW5nZVRleHQ6ICh0ZXh0OiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRmb3JtLmhhbmRsZUNoYW5nZShuYW1lKSh0ZXh0KTtcblx0XHRcdFx0XHQvLyBwcm9wcy5vbkNoYW5nZVRleHQgJiYgcHJvcHMub25DaGFuZ2VUZXh0KHRleHQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHRcdHJldHVybiAoPEJhc2VGb3JtRmllbGQgey4uLmlucHV0UHJvcHN9IC8+KTtcblx0XHR9fVxuXHQ8L0ZpZWxkPlxuKTtcblxuRm9ybVRleHRJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG5cdE1haW5Db21wb25lbnQ6IFRleHRJbnB1dFxufTsiXSwidmVyc2lvbiI6M30=