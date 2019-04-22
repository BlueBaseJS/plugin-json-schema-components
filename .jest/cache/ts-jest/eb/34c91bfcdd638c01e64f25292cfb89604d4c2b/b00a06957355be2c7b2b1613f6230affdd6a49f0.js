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
    //if number field is incorrect
    else if (type === 'number' && !/^(0|[1-9]\d*)(\.\d+)?$/.test(value)) {
        error = 'Please enter a valid number';
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVRleHRJbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQW9FO0FBSXBFLG1DQUErQjtBQUMvQiwwREFBMEI7QUFFMUIsTUFBTSxhQUFhLEdBQUcseUJBQVksQ0FBcUIsZUFBZSxDQUFDLENBQUM7QUFDeEUsTUFBTSxTQUFTLEdBQUcseUJBQVksQ0FBaUIsV0FBVyxDQUFDLENBQUM7QUFjNUQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUF5QixFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBQ2pFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBRWpDLElBQUksS0FBSyxDQUFDO0lBRVYsZ0NBQWdDO0lBQ2hDLElBQUksUUFBUSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRztRQUNqQyxLQUFLLEdBQUcsd0JBQXdCLENBQUM7S0FDakM7U0FFSSxJQUFHLElBQUksS0FBSyxNQUFNLElBQUksd0JBQXdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDO1FBQy9ELEtBQUssR0FBRyx5QkFBeUIsQ0FBQztLQUNsQztJQUVELDhCQUE4QjtTQUN6QixJQUFJLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUM7UUFDbkUsS0FBSyxHQUFHLDZCQUE2QixDQUFBO0tBQ3JDO0lBRUQsbUJBQW1CO1NBQ2QsSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLENBQUMsMkNBQTJDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3RGLEtBQUssR0FBRyxvQ0FBb0MsQ0FBQztLQUM3QztTQUVJLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLHlIQUF5SCxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQztRQUVqSyxLQUFLLEdBQUcsMEJBQTBCLENBQUM7S0FDbkM7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVXLFFBQUEsYUFBYSxHQUFHLENBQUMsS0FBeUIsRUFBRSxFQUFFLENBQUMsQ0FDM0QsOEJBQUMsY0FBSyxvQkFBSyxLQUFLLElBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUMzRCxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBTyxFQUFFLEVBQUU7SUFDekIsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUV4QixNQUFNLFVBQVUscUJBQ1osS0FBSyxJQUNSLFFBQVEsRUFBRSxTQUFTLElBQ2hCLEtBQUssSUFDUixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUMvRCxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUVqRCxZQUFZLEVBQUUsQ0FBQyxJQUFZLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsR0FDRCxDQUFDO0lBQ0YsT0FBTyxDQUFDLDhCQUFDLGFBQWEsb0JBQUssVUFBVSxFQUFJLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQ00sQ0FDUixDQUFDO0FBRUYscUJBQWEsQ0FBQyxZQUFZLEdBQUc7SUFDNUIsYUFBYSxFQUFFLFNBQVM7Q0FDeEIsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9Gb3JtVGV4dElucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0SW5wdXRQcm9wcywgZ2V0Q29tcG9uZW50IH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgQmFzZUZvcm1GaWVsZFByb3BzIH0gZnJvbSAnLi4vQmFzZUZvcm1GaWVsZCc7XG5pbXBvcnQgeyBTdHlsZVByb3AsIFZpZXdTdHlsZSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEJhc2VGb3JtRmllbGQgPSBnZXRDb21wb25lbnQ8QmFzZUZvcm1GaWVsZFByb3BzPignQmFzZUZvcm1GaWVsZCcpO1xuY29uc3QgVGV4dElucHV0ID0gZ2V0Q29tcG9uZW50PFRleHRJbnB1dFByb3BzPignVGV4dElucHV0Jyk7XG5cbmV4cG9ydCB0eXBlIEZvcm1UZXh0SW5wdXRQcm9wczxUID0ge30+ID0gVGV4dElucHV0UHJvcHMgJiBCYXNlRm9ybUZpZWxkUHJvcHMgJiBUICYge1xuXHRjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcblx0dmFsaWRhdGU/OiAoKHZhbHVlOiBhbnkpID0+IHN0cmluZyB8IFByb21pc2U8dm9pZD4gfCB1bmRlZmluZWQpO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHR5cGU/OiBzdHJpbmc7XG5cdHZhbHVlPzogYW55O1xuXHRpbm5lclJlZj86IChpbnN0YW5jZTogYW55KSA9PiB2b2lkO1xuXHRzdHlsZT86IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHQvL1trZXk6IHN0cmluZ106IGFueVxuXHRtYXhMZW5ndGggPyA6IG51bWJlclxufTtcblxuY29uc3QgdmFsaWRhdGUgPSAocHJvcHM6IEZvcm1UZXh0SW5wdXRQcm9wcykgPT4gKHZhbHVlOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgeyByZXF1aXJlZCwgdHlwZSB9ID0gcHJvcHM7XG5cblx0bGV0IGVycm9yO1xuXG5cdC8vIElmIGZpZWxkIGlzIHJlcXVpcmVkIC8vdGVzdGVkXG5cdGlmIChyZXF1aXJlZCA9PT0gdHJ1ZSAmJiAhdmFsdWUgKSB7XG5cdFx0ZXJyb3IgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG5cdH1cblxuXHRlbHNlIGlmKHR5cGUgPT09ICd0ZXh0JyAmJiAvXigwfFsxLTldXFxkKikoXFwuXFxkKyk/JC8udGVzdCh2YWx1ZSkpe1xuXHRcdGVycm9yID0gJ1Nob3VsZCBvbmx5IGJlIGFscGhhYmV0Jztcblx0fVxuXG5cdC8vaWYgbnVtYmVyIGZpZWxkIGlzIGluY29ycmVjdFxuXHRlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiAhL14oMHxbMS05XVxcZCopKFxcLlxcZCspPyQvLnRlc3QodmFsdWUpKXtcblx0XHRlcnJvciA9ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBudW1iZXInXG5cdH1cblxuXHQvLyBJZiBmaWVsZCAnZW1haWwnXG5cdGVsc2UgaWYgKHR5cGUgPT09ICdlbWFpbCcgJiYgIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLnRlc3QodmFsdWUpKSB7XG5cdFx0ZXJyb3IgPSAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcyc7XG5cdH1cblxuXHRlbHNlIGlmICh0eXBlID09PSAndXJsJyAmJiAhL14oaHR0cDpcXC9cXC93d3dcXC58aHR0cHM6XFwvXFwvd3d3XFwufGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcLyk/W2EtejAtOV0rKFtcXC1cXC5dezF9W2EtejAtOV0rKSpcXC5bYS16XXsyLDV9KDpbMC05XXsxLDV9KT8oXFwvLiopPyQvLnRlc3QodmFsdWUpKXtcblxuXHRcdGVycm9yID0gJ1BsZWFzZSBlbnRlciBhIHZhbGlkIFVybCc7XG5cdH1cblxuXHRyZXR1cm4gZXJyb3I7XG59O1xuXG5leHBvcnQgY29uc3QgRm9ybVRleHRJbnB1dCA9IChwcm9wczogRm9ybVRleHRJbnB1dFByb3BzKSA9PiAoXG5cdDxGaWVsZCB7Li4ucHJvcHN9IHZhbGlkYXRlPXtwcm9wcy52YWxpZGF0ZSB8fCB2YWxpZGF0ZShwcm9wcyl9PlxuXHRcdHsoeyBmaWVsZCwgZm9ybSB9OiBhbnkpID0+IHtcblx0XHRcdGNvbnN0IG5hbWUgPSBwcm9wcy5uYW1lO1xuXG5cdFx0XHRjb25zdCBpbnB1dFByb3BzID0ge1xuXHRcdFx0XHQuLi5maWVsZCxcblx0XHRcdFx0b25DaGFuZ2U6IHVuZGVmaW5lZCxcblx0XHRcdFx0Li4ucHJvcHMsXG5cdFx0XHRcdGVycm9yOiAoZm9ybS5lcnJvcnNbbmFtZV0gJiYgZm9ybS50b3VjaGVkW25hbWVdKSB8fCBwcm9wcy5lcnJvcixcblx0XHRcdFx0aGVscGVyVGV4dDogZm9ybS5lcnJvcnNbbmFtZV0gfHwgcHJvcHMuaGVscGVyVGV4dCxcblx0XHRcdFx0XG5cdFx0XHRcdG9uQ2hhbmdlVGV4dDogKHRleHQ6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdGZvcm0uaGFuZGxlQ2hhbmdlKG5hbWUpKHRleHQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHRcdHJldHVybiAoPEJhc2VGb3JtRmllbGQgey4uLmlucHV0UHJvcHN9IC8+KTtcblx0XHR9fVxuXHQ8L0ZpZWxkPlxuKTtcblxuRm9ybVRleHRJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG5cdE1haW5Db21wb25lbnQ6IFRleHRJbnB1dFxufTsiXSwidmVyc2lvbiI6M30=