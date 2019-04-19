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
        } });
    return (react_1.default.createElement(BaseFormField, Object.assign({}, inputProps)));
}));
exports.FormTextInput.defaultProps = {
    MainComponent: TextInput
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVRleHRJbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQW9FO0FBSXBFLG1DQUErQjtBQUMvQiwwREFBMEI7QUFFMUIsTUFBTSxhQUFhLEdBQUcseUJBQVksQ0FBcUIsZUFBZSxDQUFDLENBQUM7QUFDeEUsTUFBTSxTQUFTLEdBQUcseUJBQVksQ0FBaUIsV0FBVyxDQUFDLENBQUM7QUFjNUQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUF5QixFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBQ2pFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBRWpDLElBQUksS0FBSyxDQUFDO0lBQ1YsSUFBSSxRQUFRLENBQUU7SUFFZCxnQ0FBZ0M7SUFDaEMsSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFHO1FBQ2pDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQztLQUNqQztTQUVJLElBQUcsSUFBSSxLQUFLLE1BQU0sSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDO1FBQ3BELEtBQUssR0FBRyx5QkFBeUIsQ0FBQztLQUNsQztTQUVJLElBQUcsSUFBSSxLQUFLLFVBQVUsRUFBQztRQUMzQixvQkFBb0I7UUFDcEIsS0FBSyxHQUFHLHdCQUF3QixDQUFDO0tBRWpDO1NBRUksSUFBRyxJQUFJLEtBQUssTUFBTSxFQUFHO1FBQ3pCLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDZDtJQUVELDhCQUE4QjtTQUN6QixJQUFJLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUM7UUFDbkUsS0FBSyxHQUFHLDZCQUE2QixDQUFBO0tBQ3JDO1NBRUksSUFBSSxJQUFJLEtBQUssVUFBVSxJQUFJLEtBQUssSUFBSSxRQUFRLEVBQUU7UUFDbEQsS0FBSyxHQUFHLHNCQUFzQixDQUFBO0tBQzlCO0lBRUQsbUJBQW1CO1NBQ2QsSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLENBQUMsMkNBQTJDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3RGLEtBQUssR0FBRyxvQ0FBb0MsQ0FBQztLQUM3QztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRVcsUUFBQSxhQUFhLEdBQUcsQ0FBQyxLQUF5QixFQUFFLEVBQUUsQ0FBQyxDQUMzRCw4QkFBQyxjQUFLLG9CQUFLLEtBQUssSUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQzNELENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFPLEVBQUUsRUFBRTtJQUN6QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBRXhCLE1BQU0sVUFBVSxxQkFDWixLQUFLLElBQ1IsUUFBUSxFQUFFLFNBQVMsSUFDaEIsS0FBSyxJQUNSLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQy9ELFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBRWpELFlBQVksRUFBRSxDQUFDLElBQVksRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxHQUNELENBQUM7SUFDRixPQUFPLENBQUMsOEJBQUMsYUFBYSxvQkFBSyxVQUFVLEVBQUksQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FDTSxDQUNSLENBQUM7QUFFRixxQkFBYSxDQUFDLFlBQVksR0FBRztJQUM1QixhQUFhLEVBQUUsU0FBUztDQUN4QixDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL0Zvcm1UZXh0SW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRJbnB1dFByb3BzLCBnZXRDb21wb25lbnQgfSBmcm9tICdAYmx1ZWJhc2UvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCYXNlRm9ybUZpZWxkUHJvcHMgfSBmcm9tICcuLi9CYXNlRm9ybUZpZWxkJztcbmltcG9ydCB7IFN0eWxlUHJvcCwgVmlld1N0eWxlIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQmFzZUZvcm1GaWVsZCA9IGdldENvbXBvbmVudDxCYXNlRm9ybUZpZWxkUHJvcHM+KCdCYXNlRm9ybUZpZWxkJyk7XG5jb25zdCBUZXh0SW5wdXQgPSBnZXRDb21wb25lbnQ8VGV4dElucHV0UHJvcHM+KCdUZXh0SW5wdXQnKTtcblxuZXhwb3J0IHR5cGUgRm9ybVRleHRJbnB1dFByb3BzPFQgPSB7fT4gPSBUZXh0SW5wdXRQcm9wcyAmIEJhc2VGb3JtRmllbGRQcm9wcyAmIFQgJiB7XG5cdGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xuXHR2YWxpZGF0ZT86ICgodmFsdWU6IGFueSkgPT4gc3RyaW5nIHwgUHJvbWlzZTx2b2lkPiB8IHVuZGVmaW5lZCk7XG5cdG5hbWU6IHN0cmluZztcblx0dHlwZT86IHN0cmluZztcblx0dmFsdWU/OiBhbnk7XG5cdGlubmVyUmVmPzogKGluc3RhbmNlOiBhbnkpID0+IHZvaWQ7XG5cdHN0eWxlPzogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdC8vW2tleTogc3RyaW5nXTogYW55XG5cdG1heExlbmd0aCA/IDogbnVtYmVyXG59O1xuXG5jb25zdCB2YWxpZGF0ZSA9IChwcm9wczogRm9ybVRleHRJbnB1dFByb3BzKSA9PiAodmFsdWU6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7IHJlcXVpcmVkLCB0eXBlIH0gPSBwcm9wcztcblxuXHRsZXQgZXJyb3I7XG5cdHZhciBwYXNzd29yZCA7XG5cblx0Ly8gSWYgZmllbGQgaXMgcmVxdWlyZWQgLy90ZXN0ZWRcblx0aWYgKHJlcXVpcmVkID09PSB0cnVlICYmICF2YWx1ZSApIHtcblx0XHRlcnJvciA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJztcblx0fVxuXG5cdGVsc2UgaWYodHlwZSA9PT0gJ3RleHQnICYmIC9eW0EtWmEtel0rJC8udGVzdCh2YWx1ZSkpe1xuXHRcdGVycm9yID0gJ1Nob3VsZCBvbmx5IGJlIGFscGhhYmV0Jztcblx0fVxuXG5cdGVsc2UgaWYodHlwZSA9PT0gJ3Bhc3N3b3JkJyl7XG5cdFx0Ly9wYXNzd29yZCA9PSB2YWx1ZTtcblx0XHRlcnJvciA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJztcblxuXHR9XG5cblx0ZWxzZSBpZih0eXBlID09PSAnZGF0ZScgICl7XG5cdFx0ZXJyb3IgPSB2YWx1ZTtcblx0fVxuXG5cdC8vaWYgbnVtYmVyIGZpZWxkIGlzIGluY29ycmVjdFxuXHRlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiAhL14oMHxbMS05XVxcZCopKFxcLlxcZCspPyQvLnRlc3QodmFsdWUpKXtcblx0XHRlcnJvciA9ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBudW1iZXInXG5cdH1cblxuXHRlbHNlIGlmICh0eXBlID09PSAncGFzc3dvcmQnICYmIHZhbHVlICE9IHBhc3N3b3JkICl7XG5cdFx0ZXJyb3IgPSAnUGFzc3dvcmQgbm90IG1hdGNoZWQnXG5cdH1cblxuXHQvLyBJZiBmaWVsZCAnZW1haWwnXG5cdGVsc2UgaWYgKHR5cGUgPT09ICdlbWFpbCcgJiYgIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLnRlc3QodmFsdWUpKSB7XG5cdFx0ZXJyb3IgPSAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcyc7XG5cdH1cblxuXHRyZXR1cm4gZXJyb3I7XG59O1xuXG5leHBvcnQgY29uc3QgRm9ybVRleHRJbnB1dCA9IChwcm9wczogRm9ybVRleHRJbnB1dFByb3BzKSA9PiAoXG5cdDxGaWVsZCB7Li4ucHJvcHN9IHZhbGlkYXRlPXtwcm9wcy52YWxpZGF0ZSB8fCB2YWxpZGF0ZShwcm9wcyl9PlxuXHRcdHsoeyBmaWVsZCwgZm9ybSB9OiBhbnkpID0+IHtcblx0XHRcdGNvbnN0IG5hbWUgPSBwcm9wcy5uYW1lO1xuXG5cdFx0XHRjb25zdCBpbnB1dFByb3BzID0ge1xuXHRcdFx0XHQuLi5maWVsZCxcblx0XHRcdFx0b25DaGFuZ2U6IHVuZGVmaW5lZCxcblx0XHRcdFx0Li4ucHJvcHMsXG5cdFx0XHRcdGVycm9yOiAoZm9ybS5lcnJvcnNbbmFtZV0gJiYgZm9ybS50b3VjaGVkW25hbWVdKSB8fCBwcm9wcy5lcnJvcixcblx0XHRcdFx0aGVscGVyVGV4dDogZm9ybS5lcnJvcnNbbmFtZV0gfHwgcHJvcHMuaGVscGVyVGV4dCxcblx0XHRcdFx0XG5cdFx0XHRcdG9uQ2hhbmdlVGV4dDogKHRleHQ6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdGZvcm0uaGFuZGxlQ2hhbmdlKG5hbWUpKHRleHQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHRcdHJldHVybiAoPEJhc2VGb3JtRmllbGQgey4uLmlucHV0UHJvcHN9IC8+KTtcblx0XHR9fVxuXHQ8L0ZpZWxkPlxuKTtcblxuRm9ybVRleHRJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG5cdE1haW5Db21wb25lbnQ6IFRleHRJbnB1dFxufTsiXSwidmVyc2lvbiI6M30=