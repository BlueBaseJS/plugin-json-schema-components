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
    },
    {
        label: 'url',
        name: 'url',
        type: 'url',
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
        expect(validate(12)).toBe('Should only be alphabet');
    });
    it('should only be url', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormTextInput_1.FormTextInput, Object.assign({}, fieldProps[3])))));
        await enzyme_async_helpers_1.waitForElement(component, FormTextInput_1.FormTextInput);
        // expect(component).toMatchSnapshot();
        const validate = component.find('FieldInner[name="url"]').last().prop('validate');
        // Check fields
        expect(validate('asad')).toBe('Please enter a valid Url');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1UZXh0SW5wdXQudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQTZDO0FBQzdDLG9EQUFpRDtBQUNqRCxtQ0FBZ0M7QUFDaEMsbUVBQW9DO0FBQ3BDLDBEQUEwQjtBQUMxQixtQ0FBK0I7QUFDL0IsK0RBQXNEO0FBRXRELE1BQU0sVUFBVSxHQUFHLENBQUM7UUFDbkIsVUFBVSxFQUFFLHVCQUF1QjtRQUNuQyxLQUFLLEVBQUUsVUFBVTtRQUNqQixJQUFJLEVBQUUsVUFBVTtRQUNoQixRQUFRLEVBQUUsSUFBSTtRQUNkLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFHLEdBQUc7S0FDWixFQUFFO1FBQ0YsS0FBSyxFQUFFLE9BQU87UUFDZCxJQUFJLEVBQUUsT0FBTztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsSUFBSSxFQUFFLE9BQU87S0FDYixFQUFDO1FBQ0QsS0FBSyxFQUFFLFFBQVE7UUFDZixJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxRQUFRO0tBQ2Q7SUFDRDtRQUNDLEtBQUssRUFBRSxLQUFLO1FBQ1osSUFBSSxFQUFFLEtBQUs7UUFDWCxJQUFJLEVBQUUsS0FBSztLQUNYLENBQUMsQ0FBQztBQUVILE1BQU0sYUFBYSxHQUFHO0lBQ3JCLFFBQVEsRUFBRSxLQUFLO0NBQ2YsQ0FBQztBQUdGLFFBQVEsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO0lBRzlCLEVBQUUsQ0FBQyw2Q0FBNkMsRUFBRSxLQUFLLElBQUksRUFBRTtRQUU1RCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFM0IsTUFBTSxTQUFTLEdBQUcsY0FBSyxDQUN0Qiw4QkFBQyxrQkFBVyxJQUFDLE9BQU8sRUFBRSxDQUFDLGVBQU0sQ0FBQztZQUM3Qiw4QkFBQyxlQUFNLElBQUMs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QUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBRTVGLE1BQU0sTUFBTSxHQUFRLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hFLHVDQUF1QztRQUN2QyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV0QiwrQ0FBK0M7UUFDL0MsTUFBTSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFeEIsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRW5CLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDcEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDNUYsNkNBQTZDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9fX3Rlc3RzX18vRm9ybVRleHRJbnB1dC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbHVlQmFzZUFwcCB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCB7IEZvcm1UZXh0SW5wdXQgfSBmcm9tICcuLi9Gb3JtVGV4dElucHV0JztcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgUGx1Z2luIGZyb20gJy4uLy4uLy4uL2luZGV4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcblxuY29uc3QgZmllbGRQcm9wcyA9IFt7XG5cdGhlbHBlclRleHQ6ICdUaGlzIGlzIGEgaGVscGVyIHRleHQnLFxuXHRsYWJlbDogJ1VzZXJuYW1lJyxcblx0bmFtZTogJ3VzZXJuYW1lJyxcblx0cmVxdWlyZWQ6IHRydWUsXG5cdHR5cGU6ICd0ZXh0Jyxcblx0bnVtYmVyIDogMTIzXG59LCB7XG5cdGxhYmVsOiAnRW1haWwnLFxuXHRuYW1lOiAnZW1haWwnLFxuXHRyZXF1aXJlZDogdHJ1ZSxcblx0dHlwZTogJ2VtYWlsJyxcbn0se1xuXHRsYWJlbDogJ251bWJlcicsXG5cdG5hbWU6ICdudW1iZXInLFxuXHR0eXBlOiAnbnVtYmVyJyxcbn0sXG57XG5cdGxhYmVsOiAndXJsJyxcblx0bmFtZTogJ3VybCcsXG5cdHR5cGU6ICd1cmwnLFxufV07XG5cbmNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG5cdHVzZXJuYW1lOiAnZm9vJyxcbn07XG5cblxuZGVzY3JpYmUoJ0Zvcm1UZXh0SW5wdXQnLCAoKSA9PiB7XG5cblxuXHRpdCgnc2hvdWxkIHJlbmRlciBhbGwgZm9ybSBmaWVsZHMgaW4gdGhlIHNjaGVtYScsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1UZXh0SW5wdXQgey4uLmZpZWxkUHJvcHNbMF19IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVRleHRJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnVGV4dElucHV0JykubGFzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgndXNlcm5hbWUnKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1RleHRJbnB1dCcpLmxhc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlKCdmb28nKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1RleHRJbnB1dCcpLmxhc3QoKS5wcm9wKCd0eXBlJykpLnRvQmUoJ3RleHQnKTtcblx0fSk7XG5cblxuXHRpdCgnc2hvdWxkIHZhbGlkYXRlIHJlcXVpcmVkIGZpZWxkcycsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1UZXh0SW5wdXQgey4uLmZpZWxkUHJvcHNbMF19IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVRleHRJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdGNvbnN0IHZhbGlkYXRlOiBhbnkgPSBjb21wb25lbnQuZmluZCgnRmllbGRJbm5lcltuYW1lPVwidXNlcm5hbWVcIl0nKS5sYXN0KCkucHJvcCgndmFsaWRhdGUnKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdCh2YWxpZGF0ZSgnJykpLnRvQmUoJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnKTtcblx0XHRleHBlY3QodmFsaWRhdGUoJ2ZvbycpKS50b0JlVW5kZWZpbmVkKCk7XG5cdH0pO1xuXG5cblx0aXQoJ3Nob3VsZCB2YWxpZGF0ZSBlbWFpbCBmaWVsZHMnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtVGV4dElucHV0IHsuLi5maWVsZFByb3BzWzFdfSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1UZXh0SW5wdXQpO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHRjb25zdCB2YWxpZGF0ZTogYW55ID0gY29tcG9uZW50LmZpbmQoJ0ZpZWxkSW5uZXJbbmFtZT1cImVtYWlsXCJdJykubGFzdCgpLnByb3AoJ3ZhbGlkYXRlJyk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QodmFsaWRhdGUoJ2ZvbyBiYXInKSkudG9CZSgnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcycpO1xuXHRcdGV4cGVjdCh2YWxpZGF0ZSgnZm9vQGJhci5jb20nKSkudG9CZVVuZGVmaW5lZCgpO1xuXHR9KTtcblxuXHRpdCgnc2hvdWxkIHZhbGlkYXRlIG51bWJlciBmaWVsZCcsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1UZXh0SW5wdXQgey4uLmZpZWxkUHJvcHNbMl19IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVRleHRJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdGNvbnN0IHZhbGlkYXRlOiBhbnkgPSBjb21wb25lbnQuZmluZCgnRmllbGRJbm5lcltuYW1lPVwibnVtYmVyXCJdJykubGFzdCgpLnByb3AoJ3ZhbGlkYXRlJyk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QodmFsaWRhdGUoJ25hbWUnKSkudG9CZSgnUGxlYXNlIGVudGVyIGEgdmFsaWQgbnVtYmVyJyk7XG5cdH0pO1xuXHRpdCgnc2hvdWxkIG9ubHkgYmUgYWxwaGFiZXQnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtVGV4dElucHV0IHsuLi5maWVsZFByb3BzWzBdfSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1UZXh0SW5wdXQpO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHRjb25zdCB2YWxpZGF0ZTogYW55ID0gY29tcG9uZW50LmZpbmQoJ0ZpZWxkSW5uZXJbbmFtZT1cInVzZXJuYW1lXCJdJykubGFzdCgpLnByb3AoJ3ZhbGlkYXRlJyk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QodmFsaWRhdGUoMTIpKS50b0JlKCdTaG91bGQgb25seSBiZSBhbHBoYWJldCcpO1xuXHR9KTtcblx0aXQoJ3Nob3VsZCBvbmx5IGJlIHVybCcsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1UZXh0SW5wdXQgey4uLmZpZWxkUHJvcHNbM119IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVRleHRJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdGNvbnN0IHZhbGlkYXRlOiBhbnkgPSBjb21wb25lbnQuZmluZCgnRmllbGRJbm5lcltuYW1lPVwidXJsXCJdJykubGFzdCgpLnByb3AoJ3ZhbGlkYXRlJyk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QodmFsaWRhdGUoJ2FzYWQnKSkudG9CZSgnUGxlYXNlIGVudGVyIGEgdmFsaWQgVXJsJyk7XG5cdH0pO1xuXG5cblx0aXQoJ3Nob3VsZCB1cGRhdGUgZmllbGQgdmFsdWUgd2hlbiBvbkNoYW5nZVRleHQgY2FsbGJhY2sgaXMgaW52b2tlZCcsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3t9fSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtVGV4dElucHV0IHsuLi5maWVsZFByb3BzWzBdfSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1UZXh0SW5wdXQpO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1RleHRJbnB1dCcpLmxhc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ3VzZXJuYW1lJyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdUZXh0SW5wdXQnKS5sYXN0KCkucHJvcCgndmFsdWUnKSkudG9CZVVuZGVmaW5lZCgpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnVGV4dElucHV0JykubGFzdCgpLnByb3AoJ3R5cGUnKSkudG9CZSgndGV4dCcpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnVGV4dElucHV0JykubGFzdCgpLnByb3AoJ2hlbHBlclRleHQnKSkudG9CZSgnVGhpcyBpcyBhIGhlbHBlciB0ZXh0Jyk7XG5cblx0XHRjb25zdCBvbkNoYW5nZVRleHQ6IGFueSA9IGNvbXBvbmVudC5maW5kKCdUZXh0SW5wdXQnKS5maXJzdCgpLnByb3AoJ29uQ2hhbmdlVGV4dCcpO1xuXG5cdFx0b25DaGFuZ2VUZXh0KCdiYXInKTtcblx0XHRjb21wb25lbnQudXBkYXRlKCk7XG5cblx0XHQvLyBsZXQgYW55IHBlbmRpbmcgY2FsbGJhY2tzIGluIFByb21pc2VKb2JzIHJ1blxuXHRcdGF3YWl0IFByb21pc2UucmVzb2x2ZSgpO1xuXG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXHRcdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdUZXh0SW5wdXQnKS5sYXN0KCkucHJvcCgndmFsdWUnKSkudG9CZSgnYmFyJyk7XG5cdFx0XHQvLyBleHBlY3Qob25TdWJtaXQpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcblx0XHR9KTtcblx0fSk7XG5cblxuXHRpdCgnc2hvdWxkIHJlbmRlciBlcnJvciBzdGF0ZSBpZiB2YWxpZGF0aW9uIGZhaWxzJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17e319IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1UZXh0SW5wdXQgey4uLmZpZWxkUHJvcHNbMF19IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVRleHRJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnVGV4dElucHV0JykubGFzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgndXNlcm5hbWUnKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1RleHRJbnB1dCcpLmxhc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlVW5kZWZpbmVkKCk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdUZXh0SW5wdXQnKS5sYXN0KCkucHJvcCgndHlwZScpKS50b0JlKCd0ZXh0Jyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdUZXh0SW5wdXQnKS5sYXN0KCkucHJvcCgnaGVscGVyVGV4dCcpKS50b0JlKCdUaGlzIGlzIGEgaGVscGVyIHRleHQnKTtcblxuXHRcdGNvbnN0IGZvcm1pazogYW55ID0gY29tcG9uZW50LmZpbmQoJ0ZpZWxkSW5uZXInKS5maXJzdCgpLnByb3AoJ2Zvcm1paycpO1xuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXHRcdGZvcm1pay5zZXRGaWVsZFZhbHVlKCd1c2VybmFtZScsIG51bGwpO1xuXHRcdGZvcm1pay52YWxpZGF0ZUZpZWxkKCd1c2VybmFtZScpO1xuXHRcdGZvcm1pay5oYW5kbGVTdWJtaXQoKTtcblxuXHRcdC8vIGxldCBhbnkgcGVuZGluZyBjYWxsYmFja3MgaW4gUHJvbWlzZUpvYnMgcnVuXG5cdFx0YXdhaXQgUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0XHRjb21wb25lbnQudXBkYXRlKCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXHRcdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdUZXh0SW5wdXQnKS5sYXN0KCkucHJvcCgnaGVscGVyVGV4dCcpKS50b0JlKCdUaGlzIGlzIGEgaGVscGVyIHRleHQnKTtcblx0XHRcdC8vIGV4cGVjdChvblN1Ym1pdCkudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpO1xuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9