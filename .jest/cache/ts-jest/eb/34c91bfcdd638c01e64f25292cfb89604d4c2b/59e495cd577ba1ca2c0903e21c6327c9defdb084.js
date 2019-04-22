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
                react_1.default.createElement(FormTextInput_1.FormTextInput, Object.assign({}, fieldProps[1])))));
        await enzyme_async_helpers_1.waitForElement(component, FormTextInput_1.FormTextInput);
        // expect(component).toMatchSnapshot();
        const validate = component.find('FieldInner[name="number"]').last().prop('validate');
        // Check fields
        expect(validate('')).toBe(123);
        expect(validate('foo@bar.com')).toBeUndefined();
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
            expect(component.find('TextInput').last().prop('helperText')).toBe('This field is required');
            // expect(onSubmit).toHaveBeenCalledTimes(1);
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1UZXh0SW5wdXQudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQTZDO0FBQzdDLG9EQUFpRDtBQUNqRCxtQ0FBZ0M7QUFDaEMsbUVBQW9DO0FBQ3BDLDBEQUEwQjtBQUMxQixtQ0FBK0I7QUFDL0IsK0RBQXNEO0FBRXRELE1BQU0sVUFBVSxHQUFHLENBQUM7UUFDbkIsVUFBVSxFQUFFLHVCQUF1QjtRQUNuQyxLQUFLLEVBQUUsVUFBVTtRQUNqQixJQUFJLEVBQUUsVUFBVTtRQUNoQixRQUFRLEVBQUUsSUFBSTtRQUNkLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFHLEdBQUc7S0FDWixFQUFFO1FBQ0YsS0FBSyxFQUFFLE9BQU87UUFDZCxJQUFJLEVBQUUsT0FBTztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsSUFBSSxFQUFFLE9BQU87S0FDYixDQUFDLENBQUM7QUFFSCxNQUFNLGFBQWEsR0FBRztJQUNyQixRQUFRLEVBQUUsS0FBSztDQUNmLENBQUM7QUFHRixRQUFRLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtJQUc5QixFQUFFLENBQUMsNkNBQTZDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFNUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTNCLE1BQU0sU0FBUyxHQUFHLGNBQUssQ0FDdEIsOEJBQUMsa0JBQVcsSUFBQyxPQUFPLEVBQUUsQ0FBQyxlQUFNLENBQUM7WUFDN0IsOEJBQUMsZUFBTSxJQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBQ3ZELDhCQUFDLDZCQUFhLG9CQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBSSxDQUM1QixDQUNJLENBQ2QsQ0FBQztRQUVGLE1BQU0scUNBQWMsQ0FBQyxTQUFnQixFQUFFLDZC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SUFBSSxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdEIsK0NBQStDO1FBQy9DLE1BQU0sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXhCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVuQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQzdGLDZDQUE2QztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1UZXh0SW5wdXQudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2VBcHAgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBGb3JtVGV4dElucHV0IH0gZnJvbSAnLi4vRm9ybVRleHRJbnB1dCc7XG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi8uLi8uLi9pbmRleCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5cbmNvbnN0IGZpZWxkUHJvcHMgPSBbe1xuXHRoZWxwZXJUZXh0OiAnVGhpcyBpcyBhIGhlbHBlciB0ZXh0Jyxcblx0bGFiZWw6ICdVc2VybmFtZScsXG5cdG5hbWU6ICd1c2VybmFtZScsXG5cdHJlcXVpcmVkOiB0cnVlLFxuXHR0eXBlOiAndGV4dCcsXG5cdG51bWJlciA6IDEyM1xufSwge1xuXHRsYWJlbDogJ0VtYWlsJyxcblx0bmFtZTogJ2VtYWlsJyxcblx0cmVxdWlyZWQ6IHRydWUsXG5cdHR5cGU6ICdlbWFpbCcsXG59XTtcblxuY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcblx0dXNlcm5hbWU6ICdmb28nLFxufTtcblxuXG5kZXNjcmliZSgnRm9ybVRleHRJbnB1dCcsICgpID0+IHtcblxuXG5cdGl0KCdzaG91bGQgcmVuZGVyIGFsbCBmb3JtIGZpZWxkcyBpbiB0aGUgc2NoZW1hJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybVRleHRJbnB1dCB7Li4uZmllbGRQcm9wc1swXX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtVGV4dElucHV0KTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdUZXh0SW5wdXQnKS5sYXN0KCkucHJvcCgnbmFtZScpKS50b0JlKCd1c2VybmFtZScpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnVGV4dElucHV0JykubGFzdCgpLnByb3AoJ3ZhbHVlJykpLnRvQmUoJ2ZvbycpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnVGV4dElucHV0JykubGFzdCgpLnByb3AoJ3R5cGUnKSkudG9CZSgndGV4dCcpO1xuXHR9KTtcblxuXG5cdGl0KCdzaG91bGQgdmFsaWRhdGUgcmVxdWlyZWQgZmllbGRzJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybVRleHRJbnB1dCB7Li4uZmllbGRQcm9wc1swXX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtVGV4dElucHV0KTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Y29uc3QgdmFsaWRhdGU6IGFueSA9IGNvbXBvbmVudC5maW5kKCdGaWVsZElubmVyW25hbWU9XCJ1c2VybmFtZVwiXScpLmxhc3QoKS5wcm9wKCd2YWxpZGF0ZScpO1xuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0ZXhwZWN0KHZhbGlkYXRlKCcnKSkudG9CZSgnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcpO1xuXHRcdGV4cGVjdCh2YWxpZGF0ZSgnZm9vJykpLnRvQmVVbmRlZmluZWQoKTtcblx0fSk7XG5cblxuXHRpdCgnc2hvdWxkIHZhbGlkYXRlIGVtYWlsIGZpZWxkcycsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1UZXh0SW5wdXQgey4uLmZpZWxkUHJvcHNbMV19IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVRleHRJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdGNvbnN0IHZhbGlkYXRlOiBhbnkgPSBjb21wb25lbnQuZmluZCgnRmllbGRJbm5lcltuYW1lPVwiZW1haWxcIl0nKS5sYXN0KCkucHJvcCgndmFsaWRhdGUnKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdCh2YWxpZGF0ZSgnZm9vIGJhcicpKS50b0JlKCdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJyk7XG5cdFx0ZXhwZWN0KHZhbGlkYXRlKCdmb29AYmFyLmNvbScpKS50b0JlVW5kZWZpbmVkKCk7XG5cdH0pO1xuXG5cdGl0KCdzaG91bGQgdmFsaWRhdGUgbnVtYmVyIGZpZWxkJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybVRleHRJbnB1dCB7Li4uZmllbGRQcm9wc1sxXX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtVGV4dElucHV0KTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Y29uc3QgdmFsaWRhdGU6IGFueSA9IGNvbXBvbmVudC5maW5kKCdGaWVsZElubmVyW25hbWU9XCJudW1iZXJcIl0nKS5sYXN0KCkucHJvcCgndmFsaWRhdGUnKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdCh2YWxpZGF0ZSgnJykpLnRvQmUoMTIzKTtcblx0XHRleHBlY3QodmFsaWRhdGUoJ2Zvb0BiYXIuY29tJykpLnRvQmVVbmRlZmluZWQoKTtcblx0fSk7XG5cblxuXHRpdCgnc2hvdWxkIHVwZGF0ZSBmaWVsZCB2YWx1ZSB3aGVuIG9uQ2hhbmdlVGV4dCBjYWxsYmFjayBpcyBpbnZva2VkJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17e319IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1UZXh0SW5wdXQgey4uLmZpZWxkUHJvcHNbMF19IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVRleHRJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnVGV4dElucHV0JykubGFzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgndXNlcm5hbWUnKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1RleHRJbnB1dCcpLmxhc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlVW5kZWZpbmVkKCk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdUZXh0SW5wdXQnKS5sYXN0KCkucHJvcCgndHlwZScpKS50b0JlKCd0ZXh0Jyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdUZXh0SW5wdXQnKS5sYXN0KCkucHJvcCgnaGVscGVyVGV4dCcpKS50b0JlKCdUaGlzIGlzIGEgaGVscGVyIHRleHQnKTtcblxuXHRcdGNvbnN0IG9uQ2hhbmdlVGV4dDogYW55ID0gY29tcG9uZW50LmZpbmQoJ1RleHRJbnB1dCcpLmZpcnN0KCkucHJvcCgnb25DaGFuZ2VUZXh0Jyk7XG5cblx0XHRvbkNoYW5nZVRleHQoJ2JhcicpO1xuXHRcdGNvbXBvbmVudC51cGRhdGUoKTtcblxuXHRcdC8vIGxldCBhbnkgcGVuZGluZyBjYWxsYmFja3MgaW4gUHJvbWlzZUpvYnMgcnVuXG5cdFx0YXdhaXQgUHJvbWlzZS5yZXNvbHZlKCk7XG5cblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cdFx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1RleHRJbnB1dCcpLmxhc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlKCdiYXInKTtcblx0XHRcdC8vIGV4cGVjdChvblN1Ym1pdCkudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpO1xuXHRcdH0pO1xuXHR9KTtcblxuXG5cdGl0KCdzaG91bGQgcmVuZGVyIGVycm9yIHN0YXRlIGlmIHZhbGlkYXRpb24gZmFpbHMnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXt7fX0gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybVRleHRJbnB1dCB7Li4uZmllbGRQcm9wc1swXX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtVGV4dElucHV0KTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdUZXh0SW5wdXQnKS5sYXN0KCkucHJvcCgnbmFtZScpKS50b0JlKCd1c2VybmFtZScpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnVGV4dElucHV0JykubGFzdCgpLnByb3AoJ3ZhbHVlJykpLnRvQmVVbmRlZmluZWQoKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1RleHRJbnB1dCcpLmxhc3QoKS5wcm9wKCd0eXBlJykpLnRvQmUoJ3RleHQnKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1RleHRJbnB1dCcpLmxhc3QoKS5wcm9wKCdoZWxwZXJUZXh0JykpLnRvQmUoJ1RoaXMgaXMgYSBoZWxwZXIgdGV4dCcpO1xuXG5cdFx0Y29uc3QgZm9ybWlrOiBhbnkgPSBjb21wb25lbnQuZmluZCgnRmllbGRJbm5lcicpLmZpcnN0KCkucHJvcCgnZm9ybWlrJyk7XG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cdFx0Zm9ybWlrLnNldEZpZWxkVmFsdWUoJ3VzZXJuYW1lJywgbnVsbCk7XG5cdFx0Zm9ybWlrLnZhbGlkYXRlRmllbGQoJ3VzZXJuYW1lJyk7XG5cdFx0Zm9ybWlrLmhhbmRsZVN1Ym1pdCgpO1xuXG5cdFx0Ly8gbGV0IGFueSBwZW5kaW5nIGNhbGxiYWNrcyBpbiBQcm9taXNlSm9icyBydW5cblx0XHRhd2FpdCBQcm9taXNlLnJlc29sdmUoKTtcblxuXHRcdGNvbXBvbmVudC51cGRhdGUoKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0ZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cdFx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1RleHRJbnB1dCcpLmxhc3QoKS5wcm9wKCdoZWxwZXJUZXh0JykpLnRvQmUoJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKTtcblx0XHRcdC8vIGV4cGVjdChvblN1Ym1pdCkudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpO1xuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9