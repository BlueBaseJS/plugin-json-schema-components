"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const __1 = require("..");
const formik_1 = require("formik");
const index_1 = tslib_1.__importDefault(require("../../index"));
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_1 = require("react-native");
const enzyme_1 = require("enzyme");
const enzyme_async_helpers_1 = require("enzyme-async-helpers");
const fields = [{
        label: 'Username',
        name: 'username',
        required: true,
        type: 'text',
    }, {
        schema: { component: 'Text', text: 'Text Component' },
        type: 'component',
    }, {
        label: 'Temp',
        max: 32,
        min: 16,
        name: 'temp',
        step: 1,
        type: 'range',
    }];
const initialValues = {
    // 'auto-login': true,
    // lang: 'js',
    // password: '',
    // remember: true,
    temp: 26,
    username: '',
};
const FieldWrapper = (props) => (react_1.default.createElement(react_native_1.Text, null, props.field.type));
describe('FormFields', () => {
    it('should render all form fields in the schema', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(__1.FormFields, { fields: fields }))));
        await enzyme_async_helpers_1.waitForElement(component, __1.FormFields);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('FormTextInput_TextInput_Noop').last().prop('name')).toBe('username');
        expect(component.find('FormRangeInput_FormTextInput_TextInput_Noop').last().prop('name')).toBe('temp');
        expect(component.find('JsonLayout_Noop Text').last().text()).toBe('Text Component');
        expect(component.find('FormFields').children()).toHaveLength(3);
        expect(component.find('FormFields').childAt(0).prop('name')).toBe('username');
        expect(component.find('FormFields').childAt(1).prop('name')).toBe('1-component');
        expect(component.find('FormFields').childAt(2).prop('name')).toBe('temp');
    });
    it('should not render any field if fields property is undefined', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(__1.FormFields, { fields: undefined }))));
        await enzyme_async_helpers_1.waitForElement(component, __1.FormFields);
        // expect(component).toMatchSnapshot();
        expect(component.find('FormFields').last().children()).toHaveLength(0);
    });
    it('should render custom children, if children prop is provided', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(__1.FormFields, { fields: fields }, (renderField) => fields.map((f, i) => renderField(f, i, {}))))));
        await enzyme_async_helpers_1.waitForElement(component, __1.FormFields);
        // expect(component).toMatchSnapshot();
        expect(component.find('FormTextInput_TextInput_Noop').last().prop('name')).toBe('username');
        expect(component.find('FormRangeInput_FormTextInput_TextInput_Noop').last().prop('name')).toBe('temp');
        // expect(component.find('JsonLayout_Noop').last().prop('name')).toBe('1-component');
        expect(component.find('JsonLayout_Noop Text').last().text()).toBe('Text Component');
    });
    it('should wrap fields in FieldWrapper component', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(__1.FormFields, { fields: fields, FieldWrapper: FieldWrapper }))));
        await enzyme_async_helpers_1.waitForElement(component, __1.FormFields);
        // expect(component).toMatchSnapshot();
        expect(component.find('FieldWrapper').at(0).text()).toBe('text');
        expect(component.find('FieldWrapper').at(1).text()).toBe('component');
        expect(component.find('FieldWrapper').at(2).text()).toBe('range');
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9fX3Rlc3RzX18vRm9ybUZpZWxkcy50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBNkM7QUFHN0MsMEJBQWdDO0FBQ2hDLG1DQUFnQztBQUNoQyxnRUFBaUM7QUFDakMsMERBQTBCO0FBQzFCLCtDQUFvQztBQUNwQyxtQ0FBK0I7QUFDL0IsK0RBQXNEO0FBRXRELE1BQU0sTUFBTSxHQUFxQixDQUFDO1FBQ2pDLEtBQUssRUFBRSxVQUFVO1FBQ2pCLElBQUksRUFBRSxVQUFVO1FBQ2hCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsSUFBSSxFQUFFLE1BQU07S0FDWixFQUFFO1FBQ0YsTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7UUFDckQsSUFBSSxFQUFFLFdBQVc7S0FDakIsRUFBRTtRQUNGLEtBQUssRUFBRSxNQUFNO1FBQ2IsR0FBRyxFQUFFLEVBQUU7UUFDUCxHQUFHLEVBQUUsRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLENBQUM7UUFDUCxJQUFJLEVBQUUsT0FBTztLQUNiLENBQUMsQ0FBQztBQUVILE1BQU0sYUFBYSxHQUFHO0lBQ3JCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixJQUFJLEVBQUUsRUFBRTtJQUNSLFFBQVEsRUFBRSxFQUFFO0NBQ1osQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFHLENBQUMsS0FBd0IsRUFBRSxFQUFFLENBQUMsQ0FDbEQsOEJBQUMsbUJBQUksUUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBUSxDQUMvQixDQUFDO0FBR0YsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7SUFHM0IsRUFBRSxDQUFDLDZDQUE2QyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBRTVELE1B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QUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsUUFBUTtnQkFDdkQsOEJBQUMsY0FBVSxJQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksR0FBSSxDQUNsRCxDQUNJLENBQ2QsQ0FBQztRQUVGLE1BQU0scUNBQWMsQ0FBQyxTQUFnQixFQUFFLGNBQVUsQ0FBQyxDQUFDO1FBRW5ELHVDQUF1QztRQUV2QyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUMsQ0FBQztBQUlKLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vX190ZXN0c19fL0Zvcm1GaWVsZHMudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2VBcHAgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBGaWVsZFdyYXBwZXJQcm9wcyB9IGZyb20gJy4uL0Zvcm1GaWVsZHMnO1xuaW1wb3J0IHsgRm9ybUZpZWxkUHJvcHMgfSBmcm9tICcuLi9GaWVsZHMnO1xuaW1wb3J0IHsgRm9ybUZpZWxkcyB9IGZyb20gJy4uJztcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgUGx1Z2luIGZyb20gJy4uLy4uL2luZGV4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcbmltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuXG5jb25zdCBmaWVsZHM6IEZvcm1GaWVsZFByb3BzW10gPSBbe1xuXHRsYWJlbDogJ1VzZXJuYW1lJyxcblx0bmFtZTogJ3VzZXJuYW1lJyxcblx0cmVxdWlyZWQ6IHRydWUsXG5cdHR5cGU6ICd0ZXh0Jyxcbn0sIHtcblx0c2NoZW1hOiB7IGNvbXBvbmVudDogJ1RleHQnLCB0ZXh0OiAnVGV4dCBDb21wb25lbnQnIH0sXG5cdHR5cGU6ICdjb21wb25lbnQnLFxufSwge1xuXHRsYWJlbDogJ1RlbXAnLFxuXHRtYXg6IDMyLFxuXHRtaW46IDE2LFxuXHRuYW1lOiAndGVtcCcsXG5cdHN0ZXA6IDEsXG5cdHR5cGU6ICdyYW5nZScsXG59XTtcblxuY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcblx0Ly8gJ2F1dG8tbG9naW4nOiB0cnVlLFxuXHQvLyBsYW5nOiAnanMnLFxuXHQvLyBwYXNzd29yZDogJycsXG5cdC8vIHJlbWVtYmVyOiB0cnVlLFxuXHR0ZW1wOiAyNixcblx0dXNlcm5hbWU6ICcnLFxufTtcblxuY29uc3QgRmllbGRXcmFwcGVyID0gKHByb3BzOiBGaWVsZFdyYXBwZXJQcm9wcykgPT4gKFxuXHQ8VGV4dD57cHJvcHMuZmllbGQudHlwZX08L1RleHQ+XG4pO1xuXG5cbmRlc2NyaWJlKCdGb3JtRmllbGRzJywgKCkgPT4ge1xuXG5cblx0aXQoJ3Nob3VsZCByZW5kZXIgYWxsIGZvcm0gZmllbGRzIGluIHRoZSBzY2hlbWEnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtRmllbGRzIGZpZWxkcz17ZmllbGRzfSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1GaWVsZHMpO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0Zvcm1UZXh0SW5wdXRfVGV4dElucHV0X05vb3AnKS5sYXN0KCkucHJvcCgnbmFtZScpKS50b0JlKCd1c2VybmFtZScpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnRm9ybVJhbmdlSW5wdXRfRm9ybVRleHRJbnB1dF9UZXh0SW5wdXRfTm9vcCcpLmxhc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ3RlbXAnKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0pzb25MYXlvdXRfTm9vcCBUZXh0JykubGFzdCgpLnRleHQoKSkudG9CZSgnVGV4dCBDb21wb25lbnQnKTtcblxuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnRm9ybUZpZWxkcycpLmNoaWxkcmVuKCkpLnRvSGF2ZUxlbmd0aCgzKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0Zvcm1GaWVsZHMnKS5jaGlsZEF0KDApLnByb3AoJ25hbWUnKSkudG9CZSgndXNlcm5hbWUnKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0Zvcm1GaWVsZHMnKS5jaGlsZEF0KDEpLnByb3AoJ25hbWUnKSkudG9CZSgnMS1jb21wb25lbnQnKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0Zvcm1GaWVsZHMnKS5jaGlsZEF0KDIpLnByb3AoJ25hbWUnKSkudG9CZSgndGVtcCcpO1xuXHR9KTtcblxuXHRpdCgnc2hvdWxkIG5vdCByZW5kZXIgYW55IGZpZWxkIGlmIGZpZWxkcyBwcm9wZXJ0eSBpcyB1bmRlZmluZWQnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtRmllbGRzIGZpZWxkcz17dW5kZWZpbmVkIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtRmllbGRzKTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdGb3JtRmllbGRzJykubGFzdCgpLmNoaWxkcmVuKCkpLnRvSGF2ZUxlbmd0aCgwKTtcblx0fSk7XG5cblx0aXQoJ3Nob3VsZCByZW5kZXIgY3VzdG9tIGNoaWxkcmVuLCBpZiBjaGlsZHJlbiBwcm9wIGlzIHByb3ZpZGVkJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybUZpZWxkcyBmaWVsZHM9e2ZpZWxkc30+XG5cdFx0XHRcdFx0eyhyZW5kZXJGaWVsZCkgPT4gZmllbGRzLm1hcCgoZiwgaSkgPT4gcmVuZGVyRmllbGQoZiwgaSwge30gYXMgYW55KSl9XG5cdFx0XHRcdFx0PC9Gb3JtRmllbGRzPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1GaWVsZHMpO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0Zvcm1UZXh0SW5wdXRfVGV4dElucHV0X05vb3AnKS5sYXN0KCkucHJvcCgnbmFtZScpKS50b0JlKCd1c2VybmFtZScpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnRm9ybVJhbmdlSW5wdXRfRm9ybVRleHRJbnB1dF9UZXh0SW5wdXRfTm9vcCcpLmxhc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ3RlbXAnKTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQuZmluZCgnSnNvbkxheW91dF9Ob29wJykubGFzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnMS1jb21wb25lbnQnKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0pzb25MYXlvdXRfTm9vcCBUZXh0JykubGFzdCgpLnRleHQoKSkudG9CZSgnVGV4dCBDb21wb25lbnQnKTtcblx0fSk7XG5cblxuXHRpdCgnc2hvdWxkIHdyYXAgZmllbGRzIGluIEZpZWxkV3JhcHBlciBjb21wb25lbnQnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtRmllbGRzIGZpZWxkcz17ZmllbGRzfSBGaWVsZFdyYXBwZXI9e0ZpZWxkV3JhcHBlcn0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtRmllbGRzKTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdGaWVsZFdyYXBwZXInKS5hdCgwKS50ZXh0KCkpLnRvQmUoJ3RleHQnKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0ZpZWxkV3JhcHBlcicpLmF0KDEpLnRleHQoKSkudG9CZSgnY29tcG9uZW50Jyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdGaWVsZFdyYXBwZXInKS5hdCgyKS50ZXh0KCkpLnRvQmUoJ3JhbmdlJyk7XG5cdH0pO1xuXG5cblxufSk7XG4iXSwidmVyc2lvbiI6M30=