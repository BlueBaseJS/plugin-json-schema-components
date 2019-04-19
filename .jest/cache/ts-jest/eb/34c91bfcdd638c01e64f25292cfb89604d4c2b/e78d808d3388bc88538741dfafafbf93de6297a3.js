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
    else if (type === 'text' && /!^[A-Za-z]+$/.test(value)) {
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
        } });
    return (react_1.default.createElement(BaseFormField, Object.assign({}, inputProps)));
}));
exports.FormTextInput.defaultProps = {
    MainComponent: TextInput
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVRleHRJbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQW9FO0FBSXBFLG1DQUErQjtBQUMvQiwwREFBMEI7QUFFMUIsTUFBTSxhQUFhLEdBQUcseUJBQVksQ0FBcUIsZUFBZSxDQUFDLENBQUM7QUFDeEUsTUFBTSxTQUFTLEdBQUcseUJBQVksQ0FBaUIsV0FBVyxDQUFDLENBQUM7QUFjNUQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUF5QixFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBQ2pFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBRWpDLElBQUksS0FBSyxDQUFDO0lBQ1YsSUFBSSxRQUFRLENBQUU7SUFFZCxnQ0FBZ0M7SUFDaEMsSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFHO1FBQ2pDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQztLQUNqQztTQUVJLElBQUcsSUFBSSxLQUFLLE1BQU0sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDO1FBQ3JELEtBQUssR0FBRyx5QkFBeUIsQ0FBQztLQUNsQztTQUVJLElBQUcsSUFBSSxLQUFLLFVBQVUsRUFBQztRQUMzQixvQkFBb0I7UUFDcEIsS0FBSyxHQUFHLHdCQUF3QixDQUFDO0tBRWpDO1NBRUksSUFBRyxJQUFJLEtBQUssTUFBTSxFQUFHO1FBQ3pCLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDZDtJQUVELDhCQUE4QjtTQUN6QixJQUFJLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUM7UUFDbkUsS0FBSyxHQUFHLDZCQUE2QixDQUFBO0tBQ3JDO1NBRUksSUFBSSxJQUFJLEtBQUssVUFBVSxJQUFJLEtBQUssSUFBSSxRQUFRLEVBQUU7UUFDbEQsS0FBSyxHQUFHLHNCQUFzQixDQUFBO0tBQzlCO0lBRUQsbUJBQW1CO1NBQ2QsSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLENBQUMsMkNBQTJDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3RGLEtBQUssR0FBRyxvQ0FBb0MsQ0FBQztLQUM3QztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRVcsUUFBQSxhQUFhLEdBQUcsQ0FBQyxLQUF5QixFQUFFLEVBQUUsQ0FBQyxDQUMzRCw4QkFBQyxjQUFLLG9CQUFLLEtBQUssSUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQzNELENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFPLEVBQUUsRUFBRTtJQUN6QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBRXhCLE1BQU0sVUFBVSxxQkFDWixLQUFLLElBQ1IsUUFBUSxFQUFFLFNBQVMsSUFDaEIsS0FBSyxJQUNSLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQy9ELFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBRWpELFlBQVksRUFBRSxDQUFDLElBQVksRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxHQUNELENBQUM7SUFDRixPQUFPLENBQUMsOEJBQUMsYUFBYSxvQkFBSyxVQUFVLEVBQUksQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FDTSxDQUNSLENBQUM7QUFFRixxQkFBYSxDQUFDLFlBQVksR0FBRztJQUM1QixhQUFhLEVBQUUsU0FBUztDQUN4QixDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL0Zvcm1UZXh0SW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRJbnB1dFByb3BzLCBnZXRDb21wb25lbnQgfSBmcm9tICdAYmx1ZWJhc2UvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCYXNlRm9ybUZpZWxkUHJvcHMgfSBmcm9tICcuLi9CYXNlRm9ybUZpZWxkJztcbmltcG9ydCB7IFN0eWxlUHJvcCwgVmlld1N0eWxlIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQmFzZUZvcm1GaWVsZCA9IGdldENvbXBvbmVudDxCYXNlRm9ybUZpZWxkUHJvcHM+KCdCYXNlRm9ybUZpZWxkJyk7XG5jb25zdCBUZXh0SW5wdXQgPSBnZXRDb21wb25lbnQ8VGV4dElucHV0UHJvcHM+KCdUZXh0SW5wdXQnKTtcblxuZXhwb3J0IHR5cGUgRm9ybVRleHRJbnB1dFByb3BzPFQgPSB7fT4gPSBUZXh0SW5wdXRQcm9wcyAmIEJhc2VGb3JtRmllbGRQcm9wcyAmIFQgJiB7XG5cdGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xuXHR2YWxpZGF0ZT86ICgodmFsdWU6IGFueSkgPT4gc3RyaW5nIHwgUHJvbWlzZTx2b2lkPiB8IHVuZGVmaW5lZCk7XG5cdG5hbWU6IHN0cmluZztcblx0dHlwZT86IHN0cmluZztcblx0dmFsdWU/OiBhbnk7XG5cdGlubmVyUmVmPzogKGluc3RhbmNlOiBhbnkpID0+IHZvaWQ7XG5cdHN0eWxlPzogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdC8vW2tleTogc3RyaW5nXTogYW55XG5cdG1heExlbmd0aCA/IDogbnVtYmVyXG59O1xuXG5jb25zdCB2YWxpZGF0ZSA9IChwcm9wczogRm9ybVRleHRJbnB1dFByb3BzKSA9PiAodmFsdWU6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7IHJlcXVpcmVkLCB0eXBlIH0gPSBwcm9wcztcblxuXHRsZXQgZXJyb3I7XG5cdHZhciBwYXNzd29yZCA7XG5cblx0Ly8gSWYgZmllbGQgaXMgcmVxdWlyZWQgLy90ZXN0ZWRcblx0aWYgKHJlcXVpcmVkID09PSB0cnVlICYmICF2YWx1ZSApIHtcblx0XHRlcnJvciA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJztcblx0fVxuXG5cdGVsc2UgaWYodHlwZSA9PT0gJ3RleHQnICYmIC8hXltBLVphLXpdKyQvLnRlc3QodmFsdWUpKXtcblx0XHRlcnJvciA9ICdTaG91bGQgb25seSBiZSBhbHBoYWJldCc7XG5cdH1cblxuXHRlbHNlIGlmKHR5cGUgPT09ICdwYXNzd29yZCcpe1xuXHRcdC8vcGFzc3dvcmQgPT0gdmFsdWU7XG5cdFx0ZXJyb3IgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG5cblx0fVxuXG5cdGVsc2UgaWYodHlwZSA9PT0gJ2RhdGUnICApe1xuXHRcdGVycm9yID0gdmFsdWU7XG5cdH1cblxuXHQvL2lmIG51bWJlciBmaWVsZCBpcyBpbmNvcnJlY3Rcblx0ZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgIS9eKDB8WzEtOV1cXGQqKShcXC5cXGQrKT8kLy50ZXN0KHZhbHVlKSl7XG5cdFx0ZXJyb3IgPSAnUGxlYXNlIGVudGVyIGEgdmFsaWQgbnVtYmVyJ1xuXHR9XG5cblx0ZWxzZSBpZiAodHlwZSA9PT0gJ3Bhc3N3b3JkJyAmJiB2YWx1ZSAhPSBwYXNzd29yZCApe1xuXHRcdGVycm9yID0gJ1Bhc3N3b3JkIG5vdCBtYXRjaGVkJ1xuXHR9XG5cblx0Ly8gSWYgZmllbGQgJ2VtYWlsJ1xuXHRlbHNlIGlmICh0eXBlID09PSAnZW1haWwnICYmICEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbHVlKSkge1xuXHRcdGVycm9yID0gJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnO1xuXHR9XG5cblx0cmV0dXJuIGVycm9yO1xufTtcblxuZXhwb3J0IGNvbnN0IEZvcm1UZXh0SW5wdXQgPSAocHJvcHM6IEZvcm1UZXh0SW5wdXRQcm9wcykgPT4gKFxuXHQ8RmllbGQgey4uLnByb3BzfSB2YWxpZGF0ZT17cHJvcHMudmFsaWRhdGUgfHwgdmFsaWRhdGUocHJvcHMpfT5cblx0XHR7KHsgZmllbGQsIGZvcm0gfTogYW55KSA9PiB7XG5cdFx0XHRjb25zdCBuYW1lID0gcHJvcHMubmFtZTtcblxuXHRcdFx0Y29uc3QgaW5wdXRQcm9wcyA9IHtcblx0XHRcdFx0Li4uZmllbGQsXG5cdFx0XHRcdG9uQ2hhbmdlOiB1bmRlZmluZWQsXG5cdFx0XHRcdC4uLnByb3BzLFxuXHRcdFx0XHRlcnJvcjogKGZvcm0uZXJyb3JzW25hbWVdICYmIGZvcm0udG91Y2hlZFtuYW1lXSkgfHwgcHJvcHMuZXJyb3IsXG5cdFx0XHRcdGhlbHBlclRleHQ6IGZvcm0uZXJyb3JzW25hbWVdIHx8IHByb3BzLmhlbHBlclRleHQsXG5cdFx0XHRcdFxuXHRcdFx0XHRvbkNoYW5nZVRleHQ6ICh0ZXh0OiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRmb3JtLmhhbmRsZUNoYW5nZShuYW1lKSh0ZXh0KTtcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gKDxCYXNlRm9ybUZpZWxkIHsuLi5pbnB1dFByb3BzfSAvPik7XG5cdFx0fX1cblx0PC9GaWVsZD5cbik7XG5cbkZvcm1UZXh0SW5wdXQuZGVmYXVsdFByb3BzID0ge1xuXHRNYWluQ29tcG9uZW50OiBUZXh0SW5wdXRcbn07Il0sInZlcnNpb24iOjN9