"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const FormSubmitButton_1 = require("../FormSubmitButton");
const formik_1 = require("formik");
const plugin_material_ui_1 = tslib_1.__importDefault(require("@bluebase/plugin-material-ui"));
const index_1 = tslib_1.__importDefault(require("../../../index"));
const react_1 = tslib_1.__importDefault(require("react"));
const enzyme_1 = require("enzyme");
const enzyme_async_helpers_1 = require("enzyme-async-helpers");
const fieldProps = [{
        name: 'submit',
        title: 'Login',
        type: 'submit',
        loading: false,
        nested: true
    },
    {
        name: 'submit',
        title: 'Login',
        type: 'submit',
        loading: false,
        nested: false
    }];
const initialValues = {};
describe('FormSubmitButton', () => {
    it('should render all form fields in the schema nested true', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormSubmitButton_1.FormSubmitButton, Object.assign({}, fieldProps[0])))));
        await enzyme_async_helpers_1.waitForElement(component, FormSubmitButton_1.FormSubmitButton);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('Button').first().prop('loading')).toBe(false);
        expect(component.find('Button').first().prop('title')).toBe('Login');
        expect(component.find('Button').first().prop('type')).toBe('submit');
        // const onPress: any = component.find('Button').first().prop('onPress');
        // onPress();
        // component.update();
        // const formik: any = component.find('Button').first().prop('formik');
        // formik.handleSubmit();
        // component.update();
        setTimeout(() => {
            //expect(component).toMatchSnapshot();
            expect(onSubmit).toHaveBeenCalledTimes(0);
        });
    });
    it('should render all form fields in the schema nested false', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormSubmitButton_1.FormSubmitButton, Object.assign({}, fieldProps[1])))));
        await enzyme_async_helpers_1.waitForElement(component, FormSubmitButton_1.FormSubmitButton);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('Button').first().prop('loading')).toBe(false);
        expect(component.find('Button').first().prop('title')).toBe('Login');
        expect(component.find('Button').first().prop('type')).toBe('submit');
        // const onPress: any = component.find('Button').first().prop('onPress');
        // onPress();
        // component.update();
        // const formik: any = component.find('Button').first().prop('formik');
        // formik.handleSubmit();
        // component.update();
        setTimeout(() => {
            //expect(component).toMatchSnapshot();
            expect(onSubmit).toHaveBeenCalledTimes(0);
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1TdWJtaXRCdXR0b24udGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQTZDO0FBQzdDLDBEQUF1RDtBQUN2RCxtQ0FBZ0M7QUFDaEMsOEZBQTREO0FBQzVELG1FQUFvQztBQUNwQywwREFBMEI7QUFDMUIsbUNBQStCO0FBQy9CLCtEQUFzRDtBQUV0RCxNQUFNLFVBQVUsR0FBRyxDQUFDO1FBQ25CLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFFLE9BQU87UUFDWCxJQUFJLEVBQUUsUUFBUTtRQUNqQixPQUFPLEVBQUcsS0FBSztRQUNmLE1BQU0sRUFBRyxJQUFJO0tBQ2I7SUFDRDtRQUNDLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFFLE9BQU87UUFDWCxJQUFJLEVBQUUsUUFBUTtRQUNqQixPQUFPLEVBQUcsS0FBSztRQUNmLE1BQU0sRUFBRyxLQUFLO0tBQ2QsQ0FBQyxDQUFDO0FBRUgsTUFBTSxhQUFhLEdBQUcsRUFDckIsQ0FBQztBQUdGLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFFakMsRUFBRSxDQUFDLHlEQUF5RCxFQUFFLEtBQUssSUFBSSxFQUFFO1FBRXhFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLFNBQVMsR0FBRyxjQUFLLENBQ3RCLDhCQUFDLGtCQUFXLElBQUMsT0FBTyxFQUFFLENBQUMsZUFBTSxFQUFFLDRCQUFnQixDQUFDO1lBQy9DLDhCQUFDLGVBQU0sSUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxRQUFRO2dCQUN2RCw4QkFBQyxtQ0FBZ0Isb0JBQUssVUFBVSxDQUFDLENBQUMsQ0FBUSxFQUFJLENBQ3RDLENBQ0ksQ0FDZCxDQUFDO1FBRUYsTUFBTSxxQ0FBYyxDQUFDLFNBQWdCLEVBQUUsbUNBQWdCLENBQUMsQ0FBQztRQUV6RCx1Q0FBdUM7UUFFdkMsZUFBZTtRQUVmLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXJFLHlFQUF5RTtRQUN6RSxhQUFhO1FBQ2Isc0JBQXNCO1FBR3RCLHVFQUF1RTtRQUN2RSx5QkFBeUI7UUFDekIsc0JBQXNCO1FBRXRCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxzQ0FBc0M7WUFDdkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBRUosQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsMERBQTBELEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFekUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTNCLE1BQU0sU0FBUyxHQUFHLGNBQUssQ0FDdEIsOEJBQUMsa0JBQVcsSUFBQyxPQUFPLEVBQUUsQ0FBQyxlQUFNLEVBQUUsNEJBQWdCLENBQUM7WUFDL0MsOEJBQUMsZUFBTSxJQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBQ3ZELDhCQUFDLG1DQUFnQixvQkFBSyxVQUFVLENBQUMsQ0FBQyxDQUFRLEVBQUksQ0FDdEMsQ0FDSSxDQUNkLENBQUM7UUFFRixNQUFNLHFDQUFjLENBQUMsU0FBZ0IsRUFBRSxtQ0FBZ0IsQ0FBQyxDQUFDO1FBRXpELHVDQUF1QztRQUV2QyxlQUFlO1FBRWYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFckUseUVBQXlFO1FBQ3pFLGFBQWE7UUFDYixzQkFBc0I7UUFHdEIsdUVBQXVFO1FBQ3ZFLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFFdEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLHNDQUFzQztZQUN2QyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFFSixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL19fdGVzdHNfXy9Gb3JtU3VibWl0QnV0dG9uLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlQXBwIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IHsgRm9ybVN1Ym1pdEJ1dHRvbiB9IGZyb20gJy4uL0Zvcm1TdWJtaXRCdXR0b24nO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBNYXRlcmlhbFVJUGx1Z2luIGZyb20gJ0BibHVlYmFzZS9wbHVnaW4tbWF0ZXJpYWwtdWknO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi8uLi8uLi9pbmRleCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5cbmNvbnN0IGZpZWxkUHJvcHMgPSBbe1xuXHRuYW1lOiAnc3VibWl0Jyxcblx0dGl0bGU6ICdMb2dpbicsXG4gICAgdHlwZTogJ3N1Ym1pdCcsXG5cdGxvYWRpbmcgOiBmYWxzZSxcblx0bmVzdGVkIDogdHJ1ZVxufSxcbntcblx0bmFtZTogJ3N1Ym1pdCcsXG5cdHRpdGxlOiAnTG9naW4nLFxuICAgIHR5cGU6ICdzdWJtaXQnLFxuXHRsb2FkaW5nIDogZmFsc2UsXG5cdG5lc3RlZCA6IGZhbHNlXG59XTtcblxuY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcbn07XG5cblxuZGVzY3JpYmUoJ0Zvcm1TdWJtaXRCdXR0b24nLCAoKSA9PiB7XG5cdFxuXHRpdCgnc2hvdWxkIHJlbmRlciBhbGwgZm9ybSBmaWVsZHMgaW4gdGhlIHNjaGVtYSBuZXN0ZWQgdHJ1ZScsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1TdWJtaXRCdXR0b24gey4uLmZpZWxkUHJvcHNbMF0gYXMgYW55fSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1TdWJtaXRCdXR0b24pO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0J1dHRvbicpLmZpcnN0KCkucHJvcCgnbG9hZGluZycpKS50b0JlKGZhbHNlKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0J1dHRvbicpLmZpcnN0KCkucHJvcCgndGl0bGUnKSkudG9CZSgnTG9naW4nKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0J1dHRvbicpLmZpcnN0KCkucHJvcCgndHlwZScpKS50b0JlKCdzdWJtaXQnKTtcblxuXHRcdC8vIGNvbnN0IG9uUHJlc3M6IGFueSA9IGNvbXBvbmVudC5maW5kKCdCdXR0b24nKS5maXJzdCgpLnByb3AoJ29uUHJlc3MnKTtcblx0XHQvLyBvblByZXNzKCk7XG5cdFx0Ly8gY29tcG9uZW50LnVwZGF0ZSgpO1xuXG5cblx0XHQvLyBjb25zdCBmb3JtaWs6IGFueSA9IGNvbXBvbmVudC5maW5kKCdCdXR0b24nKS5maXJzdCgpLnByb3AoJ2Zvcm1paycpO1xuXHRcdC8vIGZvcm1pay5oYW5kbGVTdWJtaXQoKTtcblx0XHQvLyBjb21wb25lbnQudXBkYXRlKCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdCAvL2V4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXHRcdFx0ZXhwZWN0KG9uU3VibWl0KS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMCk7XG5cdFx0fSk7XG5cblx0fSk7XG5cdGl0KCdzaG91bGQgcmVuZGVyIGFsbCBmb3JtIGZpZWxkcyBpbiB0aGUgc2NoZW1hIG5lc3RlZCBmYWxzZScsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1TdWJtaXRCdXR0b24gey4uLmZpZWxkUHJvcHNbMV0gYXMgYW55fSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1TdWJtaXRCdXR0b24pO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0J1dHRvbicpLmZpcnN0KCkucHJvcCgnbG9hZGluZycpKS50b0JlKGZhbHNlKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0J1dHRvbicpLmZpcnN0KCkucHJvcCgndGl0bGUnKSkudG9CZSgnTG9naW4nKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0J1dHRvbicpLmZpcnN0KCkucHJvcCgndHlwZScpKS50b0JlKCdzdWJtaXQnKTtcblxuXHRcdC8vIGNvbnN0IG9uUHJlc3M6IGFueSA9IGNvbXBvbmVudC5maW5kKCdCdXR0b24nKS5maXJzdCgpLnByb3AoJ29uUHJlc3MnKTtcblx0XHQvLyBvblByZXNzKCk7XG5cdFx0Ly8gY29tcG9uZW50LnVwZGF0ZSgpO1xuXG5cblx0XHQvLyBjb25zdCBmb3JtaWs6IGFueSA9IGNvbXBvbmVudC5maW5kKCdCdXR0b24nKS5maXJzdCgpLnByb3AoJ2Zvcm1paycpO1xuXHRcdC8vIGZvcm1pay5oYW5kbGVTdWJtaXQoKTtcblx0XHQvLyBjb21wb25lbnQudXBkYXRlKCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdCAvL2V4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXHRcdFx0ZXhwZWN0KG9uU3VibWl0KS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMCk7XG5cdFx0fSk7XG5cblx0fSk7XG59KTtcblxuIl0sInZlcnNpb24iOjN9