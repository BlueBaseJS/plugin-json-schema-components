"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const FormTextInput_1 = require("../FormTextInput");
const formik_1 = require("formik");
const index_1 = tslib_1.__importDefault(require("../../../index"));
const react_1 = tslib_1.__importDefault(require("react"));
const enzyme_1 = require("enzyme");
const enzyme_async_helpers_1 = require("enzyme-async-helpers");
const fieldProps = [{
        helperText: 'This is a helper text',
        label: 'Username',
        name: 'username',
        required: true,
        type: 'text',
        number: 123
    }, {
        label: 'Email',
        name: 'email',
        required: true,
        type: 'email',
    }, {
        label: 'number',
        name: 'number',
        type: 'number',
    }];
const initialValues = {
    username: 'foo',
};
describe('FormTextInput', () => {
    it('should render all form fields in the schema', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormTextInput_1.FormTextInput, Object.assign({}, fieldProps[0])))));
        await enzyme_async_helpers_1.waitForElement(component, FormTextInput_1.FormTextInput);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('TextInput').last().prop('name')).toBe('username');
        expect(component.find('TextInput').last().prop('value')).toBe('foo');
        expect(component.find('TextInput').last().prop('type')).toBe('text');
    });
    it('should validate required fields', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormTextInput_1.FormTextInput, Object.assign({}, fieldProps[0])))));
        await enzyme_async_helpers_1.waitForElement(component, FormTextInput_1.FormTextInput);
        // expect(component).toMatchSnapshot();
        const validate = component.find('FieldInner[name="username"]').last().prop('validate');
        // Check fields
        expect(validate('')).toBe('This field is required');
        expect(validate('foo')).toBeUndefined();
    });
    it('should validate email fields', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormTextInput_1.FormTextInput, Object.assign({}, fieldProps[1])))));
        await enzyme_async_helpers_1.waitForElement(component, FormTextInput_1.FormTextInput);
        // expect(component).toMatchSnapshot();
        const validate = component.find('FieldInner[name="email"]').last().prop('validate');
        // Check fields
        expect(validate('foo bar')).toBe('Please enter a valid email address');
        expect(validate('foo@bar.com')).toBeUndefined();
    });
    it('should validate number field', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormTextInput_1.FormTextInput, Object.assign({}, fieldProps[2])))));
        await enzyme_async_helpers_1.waitForElement(component, FormTextInput_1.FormTextInput);
        // expect(component).toMatchSnapshot();
        const validate = component.find('FieldInner[name="number"]').last().prop('validate');
        // Check fields
        expect(validate('name')).toBe('Please enter a valid number');
    });
    it('should only be alphabet', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormTextInput_1.FormTextInput, Object.assign({}, fieldProps[0])))));
        await enzyme_async_helpers_1.waitForElement(component, FormTextInput_1.FormTextInput);
        // expect(component).toMatchSnapshot();
        const validate = component.find('FieldInner[name="username"]').last().prop('validate');
        // Check fields
        expect(validate('name')).toBe('Should only be alphabet');
    });
    it('should update field value when onChangeText callback is invoked', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: {}, onSubmit: onSubmit },
                react_1.default.createElement(FormTextInput_1.FormTextInput, Object.assign({}, fieldProps[0])))));
        await enzyme_async_helpers_1.waitForElement(component, FormTextInput_1.FormTextInput);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('TextInput').last().prop('name')).toBe('username');
        expect(component.find('TextInput').last().prop('value')).toBeUndefined();
        expect(component.find('TextInput').last().prop('type')).toBe('text');
        expect(component.find('TextInput').last().prop('helperText')).toBe('This is a helper text');
        const onChangeText = component.find('TextInput').first().prop('onChangeText');
        onChangeText('bar');
        component.update();
        // let any pending callbacks in PromiseJobs run
        await Promise.resolve();
        setTimeout(() => {
            // expect(component).toMatchSnapshot();
            expect(component.find('TextInput').last().prop('value')).toBe('bar');
            // expect(onSubmit).toHaveBeenCalledTimes(1);
        });
    });
    it('should render error state if validation fails', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: {}, onSubmit: onSubmit },
                react_1.default.createElement(FormTextInput_1.FormTextInput, Object.assign({}, fieldProps[0])))));
        await enzyme_async_helpers_1.waitForElement(component, FormTextInput_1.FormTextInput);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('TextInput').last().prop('name')).toBe('username');
        expect(component.find('TextInput').last().prop('value')).toBeUndefined();
        expect(component.find('TextInput').last().prop('type')).toBe('text');
        expect(component.find('TextInput').last().prop('helperText')).toBe('This is a helper text');
        const formik = component.find('FieldInner').first().prop('formik');
        // expect(component).toMatchSnapshot();
        formik.setFieldValue('username', null);
        formik.validateField('username');
        formik.handleSubmit();
        // let any pending callbacks in PromiseJobs run
        await Promise.resolve();
        component.update();
        setTimeout(() => {
            expect(component).toMatchSnapshot();
            expect(component.find('TextInput').last().prop('helperText')).toBe('This is a helper text');
            // expect(onSubmit).toHaveBeenCalledTimes(1);
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1UZXh0SW5wdXQudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQTZDO0FBQzdDLG9EQUFpRDtBQUNqRCxtQ0FBZ0M7QUFDaEMsbUVBQW9DO0FBQ3BDLDBEQUEwQjtBQUMxQixtQ0FBK0I7QUFDL0IsK0RBQXNEO0FBRXRELE1BQU0sVUFBVSxHQUFHLENBQUM7UUFDbkIsVUFBVSxFQUFFLHVCQUF1QjtRQUNuQyxLQUFLLEVBQUUsVUFBVTtRQUNqQixJQUFJLEVBQUUsVUFBVTtRQUNoQixRQUFRLEVBQUUsSUFBSTtRQUNkLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFHLEdBQUc7S0FDWixFQUFFO1FBQ0YsS0FBSyxFQUFFLE9BQU87UUFDZCxJQUFJLEVBQUUsT0FBTztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsSUFBSSxFQUFFLE9BQU87S0FDYixFQUFDO1FBQ0QsS0FBSyxFQUFFLFFBQVE7UUFDZixJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxRQUFRO0tBQ2QsQ0FBQyxDQUFDO0FBRUgsTUFBTSxhQUFhLEdBQUc7SUFDckIsUUFBUSxFQUFFLEtBQUs7Q0FDZixDQUFDO0FBR0YsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7SUFHOUIsRUFBRSxDQUFDLDZDQUE2QyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBRTVELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLFNBQVMsR0FBRyxjQUFLLENBQ3RCLDhCQUFDLGtCQUFXLElBQUMsT0FBTyxFQUFFLENBQUMsZUFBTSxDQUFDO1lBQzdCLDhCQUFDLGVBQU0sSUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxRQUFRO2dCQUN2RCw4QkFBQyw2QkFBYSxvQkFBSyxVQUFVLENBQUMs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QUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQzVGLDZDQUE2QztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1UZXh0SW5wdXQudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2VBcHAgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBGb3JtVGV4dElucHV0IH0gZnJvbSAnLi4vRm9ybVRleHRJbnB1dCc7XG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi8uLi8uLi9pbmRleCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5cbmNvbnN0IGZpZWxkUHJvcHMgPSBbe1xuXHRoZWxwZXJUZXh0OiAnVGhpcyBpcyBhIGhlbHBlciB0ZXh0Jyxcblx0bGFiZWw6ICdVc2VybmFtZScsXG5cdG5hbWU6ICd1c2VybmFtZScsXG5cdHJlcXVpcmVkOiB0cnVlLFxuXHR0eXBlOiAndGV4dCcsXG5cdG51bWJlciA6IDEyM1xufSwge1xuXHRsYWJlbDogJ0VtYWlsJyxcblx0bmFtZTogJ2VtYWlsJyxcblx0cmVxdWlyZWQ6IHRydWUsXG5cdHR5cGU6ICdlbWFpbCcsXG59LHtcblx0bGFiZWw6ICdudW1iZXInLFxuXHRuYW1lOiAnbnVtYmVyJyxcblx0dHlwZTogJ251bWJlcicsXG59XTtcblxuY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcblx0dXNlcm5hbWU6ICdmb28nLFxufTtcblxuXG5kZXNjcmliZSgnRm9ybVRleHRJbnB1dCcsICgpID0+IHtcblxuXG5cdGl0KCdzaG91bGQgcmVuZGVyIGFsbCBmb3JtIGZpZWxkcyBpbiB0aGUgc2NoZW1hJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybVRleHRJbnB1dCB7Li4uZmllbGRQcm9wc1swXX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtVGV4dElucHV0KTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdUZXh0SW5wdXQnKS5sYXN0KCkucHJvcCgnbmFtZScpKS50b0JlKCd1c2VybmFtZScpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnVGV4dElucHV0JykubGFzdCgpLnByb3AoJ3ZhbHVlJykpLnRvQmUoJ2ZvbycpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnVGV4dElucHV0JykubGFzdCgpLnByb3AoJ3R5cGUnKSkudG9CZSgndGV4dCcpO1xuXHR9KTtcblxuXG5cdGl0KCdzaG91bGQgdmFsaWRhdGUgcmVxdWlyZWQgZmllbGRzJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybVRleHRJbnB1dCB7Li4uZmllbGRQcm9wc1swXX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtVGV4dElucHV0KTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Y29uc3QgdmFsaWRhdGU6IGFueSA9IGNvbXBvbmVudC5maW5kKCdGaWVsZElubmVyW25hbWU9XCJ1c2VybmFtZVwiXScpLmxhc3QoKS5wcm9wKCd2YWxpZGF0ZScpO1xuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0ZXhwZWN0KHZhbGlkYXRlKCcnKSkudG9CZSgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpO1xuXHRcdGV4cGVjdCh2YWxpZGF0ZSgnZm9vJykpLnRvQmVVbmRlZmluZWQoKTtcblx0fSk7XG5cblxuXHRpdCgnc2hvdWxkIHZhbGlkYXRlIGVtYWlsIGZpZWxkcycsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1UZXh0SW5wdXQgey4uLmZpZWxkUHJvcHNbMV19IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVRleHRJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdGNvbnN0IHZhbGlkYXRlOiBhbnkgPSBjb21wb25lbnQuZmluZCgnRmllbGRJbm5lcltuYW1lPVwiZW1haWxcIl0nKS5sYXN0KCkucHJvcCgndmFsaWRhdGUnKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdCh2YWxpZGF0ZSgnZm9vIGJhcicpKS50b0JlKCdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJyk7XG5cdFx0ZXhwZWN0KHZhbGlkYXRlKCdmb29AYmFyLmNvbScpKS50b0JlVW5kZWZpbmVkKCk7XG5cdH0pO1xuXG5cdGl0KCdzaG91bGQgdmFsaWRhdGUgbnVtYmVyIGZpZWxkJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybVRleHRJbnB1dCB7Li4uZmllbGRQcm9wc1syXX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtVGV4dElucHV0KTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Y29uc3QgdmFsaWRhdGU6IGFueSA9IGNvbXBvbmVudC5maW5kKCdGaWVsZElubmVyW25hbWU9XCJudW1iZXJcIl0nKS5sYXN0KCkucHJvcCgndmFsaWRhdGUnKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdCh2YWxpZGF0ZSgnbmFtZScpKS50b0JlKCdQbGVhc2UgZW50ZXIgYSB2YWxpZCBudW1iZXInKTtcblx0fSk7XG5cdGl0KCdzaG91bGQgb25seSBiZSBhbHBoYWJldCcsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1UZXh0SW5wdXQgey4uLmZpZWxkUHJvcHNbMF19IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVRleHRJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdGNvbnN0IHZhbGlkYXRlOiBhbnkgPSBjb21wb25lbnQuZmluZCgnRmllbGRJbm5lcltuYW1lPVwidXNlcm5hbWVcIl0nKS5sYXN0KCkucHJvcCgndmFsaWRhdGUnKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdCh2YWxpZGF0ZSgnbmFtZScpKS50b0JlKCdTaG91bGQgb25seSBiZSBhbHBoYWJldCcpO1xuXHR9KTtcblxuXG5cdGl0KCdzaG91bGQgdXBkYXRlIGZpZWxkIHZhbHVlIHdoZW4gb25DaGFuZ2VUZXh0IGNhbGxiYWNrIGlzIGludm9rZWQnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXt7fX0gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybVRleHRJbnB1dCB7Li4uZmllbGRQcm9wc1swXX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtVGV4dElucHV0KTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdUZXh0SW5wdXQnKS5sYXN0KCkucHJvcCgnbmFtZScpKS50b0JlKCd1c2VybmFtZScpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnVGV4dElucHV0JykubGFzdCgpLnByb3AoJ3ZhbHVlJykpLnRvQmVVbmRlZmluZWQoKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1RleHRJbnB1dCcpLmxhc3QoKS5wcm9wKCd0eXBlJykpLnRvQmUoJ3RleHQnKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1RleHRJbnB1dCcpLmxhc3QoKS5wcm9wKCdoZWxwZXJUZXh0JykpLnRvQmUoJ1RoaXMgaXMgYSBoZWxwZXIgdGV4dCcpO1xuXG5cdFx0Y29uc3Qgb25DaGFuZ2VUZXh0OiBhbnkgPSBjb21wb25lbnQuZmluZCgnVGV4dElucHV0JykuZmlyc3QoKS5wcm9wKCdvbkNoYW5nZVRleHQnKTtcblxuXHRcdG9uQ2hhbmdlVGV4dCgnYmFyJyk7XG5cdFx0Y29tcG9uZW50LnVwZGF0ZSgpO1xuXG5cdFx0Ly8gbGV0IGFueSBwZW5kaW5nIGNhbGxiYWNrcyBpbiBQcm9taXNlSm9icyBydW5cblx0XHRhd2FpdCBQcm9taXNlLnJlc29sdmUoKTtcblxuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblx0XHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnVGV4dElucHV0JykubGFzdCgpLnByb3AoJ3ZhbHVlJykpLnRvQmUoJ2JhcicpO1xuXHRcdFx0Ly8gZXhwZWN0KG9uU3VibWl0KS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XG5cdFx0fSk7XG5cdH0pO1xuXG5cblx0aXQoJ3Nob3VsZCByZW5kZXIgZXJyb3Igc3RhdGUgaWYgdmFsaWRhdGlvbiBmYWlscycsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3t9fSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtVGV4dElucHV0IHsuLi5maWVsZFByb3BzWzBdfSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1UZXh0SW5wdXQpO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1RleHRJbnB1dCcpLmxhc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ3VzZXJuYW1lJyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdUZXh0SW5wdXQnKS5sYXN0KCkucHJvcCgndmFsdWUnKSkudG9CZVVuZGVmaW5lZCgpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnVGV4dElucHV0JykubGFzdCgpLnByb3AoJ3R5cGUnKSkudG9CZSgndGV4dCcpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnVGV4dElucHV0JykubGFzdCgpLnByb3AoJ2hlbHBlclRleHQnKSkudG9CZSgnVGhpcyBpcyBhIGhlbHBlciB0ZXh0Jyk7XG5cblx0XHRjb25zdCBmb3JtaWs6IGFueSA9IGNvbXBvbmVudC5maW5kKCdGaWVsZElubmVyJykuZmlyc3QoKS5wcm9wKCdmb3JtaWsnKTtcblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblx0XHRmb3JtaWsuc2V0RmllbGRWYWx1ZSgndXNlcm5hbWUnLCBudWxsKTtcblx0XHRmb3JtaWsudmFsaWRhdGVGaWVsZCgndXNlcm5hbWUnKTtcblx0XHRmb3JtaWsuaGFuZGxlU3VibWl0KCk7XG5cblx0XHQvLyBsZXQgYW55IHBlbmRpbmcgY2FsbGJhY2tzIGluIFByb21pc2VKb2JzIHJ1blxuXHRcdGF3YWl0IFByb21pc2UucmVzb2x2ZSgpO1xuXG5cdFx0Y29tcG9uZW50LnVwZGF0ZSgpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblx0XHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnVGV4dElucHV0JykubGFzdCgpLnByb3AoJ2hlbHBlclRleHQnKSkudG9CZSgnVGhpcyBpcyBhIGhlbHBlciB0ZXh0Jyk7XG5cdFx0XHQvLyBleHBlY3Qob25TdWJtaXQpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcblx0XHR9KTtcblx0fSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==