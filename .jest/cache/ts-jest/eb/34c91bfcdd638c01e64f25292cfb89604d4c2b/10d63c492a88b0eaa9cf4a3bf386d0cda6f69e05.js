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
        nested: true
    },
    {
        name: 'submit',
        title: 'Login',
        type: 'submit',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1TdWJtaXRCdXR0b24udGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQTZDO0FBQzdDLDBEQUF1RDtBQUN2RCxtQ0FBZ0M7QUFDaEMsOEZBQTREO0FBQzVELG1FQUFvQztBQUNwQywwREFBMEI7QUFDMUIsbUNBQStCO0FBQy9CLCtEQUFzRDtBQUV0RCxNQUFNLFVBQVUsR0FBRyxDQUFDO1FBQ25CLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFFLE9BQU87UUFDWCxJQUFJLEVBQUUsUUFBUTtRQUNqQixNQUFNLEVBQUcsSUFBSTtLQUNiO0lBQ0Q7UUFDQyxJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxPQUFPO1FBQ1gsSUFBSSxFQUFFLFFBQVE7UUFDakIsTUFBTSxFQUFHLEtBQUs7S0FDZCxDQUFDLENBQUM7QUFFSCxNQUFNLGFBQWEsR0FBRyxFQUNyQixDQUFDO0FBR0YsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUVqQyxFQUFFLENBQUMseURBQXlELEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFeEUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTNCLE1BQU0sU0FBUyxHQUFHLGNBQUssQ0FDdEIsOEJBQUMsa0JBQVcsSUFBQyxPQUFPLEVBQUUsQ0FBQyxlQUFNLEVBQUUsNEJBQWdCLENBQUM7WUFDL0MsOEJBQUMsZUFBTSxJQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBQ3ZELDhCQUFDLG1DQUFnQixvQkFBSyxVQUFVLENBQUMsQ0FBQyxDQUFRLEVBQUksQ0FDdEMsQ0FDSSxDQUNkLENBQUM7UUFFRixNQUFNLHFDQUFjLENBQUMsU0FBZ0IsRUFBRSxtQ0FBZ0IsQ0FBQyxDQUFDO1FBRXpELHVDQUF1QztRQUV2QyxlQUFlO1FBRWYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyRSx5RUFBeUU7UUFDekUsYUFBYTtRQUNiLHNCQUFzQjtRQUd0Qix1RUFBdUU7UUFDdkUseUJBQXlCO1FBQ3pCLHNCQUFzQjtRQUV0QixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2Qsc0NBQXNDO1lBQ3ZDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUVKLENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLDBEQUEwRCxFQUFFLEtBQUssSUFBSSxFQUFFO1FBRXpFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLFNBQVMsR0FBRyxjQUFLLENBQ3RCLDhCQUFDLGtCQUFXLElBQUMsT0FBTyxFQUFFLENBQUMsZUFBTSxFQUFFLDRCQUFnQixDQUFDO1lBQy9DLDhCQUFDLGVBQU0sSUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxRQUFRO2dCQUN2RCw4QkFBQyxtQ0FBZ0Isb0JBQUssVUFBVSxDQUFDLENBQUMsQ0FBUSxFQUFJLENBQ3RDLENBQ0ksQ0FDZCxDQUFDO1FBRUYsTUFBTSxxQ0FBYyxDQUFDLFNBQWdCLEVBQUUsbUNBQWdCLENBQUMsQ0FBQztRQUV6RCx1Q0FBdUM7UUFFdkMsZUFBZTtRQUVmLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFckUseUVBQXlFO1FBQ3pFLGFBQWE7UUFDYixzQkFBc0I7UUFHdEIsdUVBQXVFO1FBQ3ZFLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFFdEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLHNDQUFzQztZQUN2QyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFFSixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL19fdGVzdHNfXy9Gb3JtU3VibWl0QnV0dG9uLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlQXBwIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IHsgRm9ybVN1Ym1pdEJ1dHRvbiB9IGZyb20gJy4uL0Zvcm1TdWJtaXRCdXR0b24nO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBNYXRlcmlhbFVJUGx1Z2luIGZyb20gJ0BibHVlYmFzZS9wbHVnaW4tbWF0ZXJpYWwtdWknO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi8uLi8uLi9pbmRleCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5cbmNvbnN0IGZpZWxkUHJvcHMgPSBbe1xuXHRuYW1lOiAnc3VibWl0Jyxcblx0dGl0bGU6ICdMb2dpbicsXG4gICAgdHlwZTogJ3N1Ym1pdCcsXG5cdG5lc3RlZCA6IHRydWVcbn0sXG57XG5cdG5hbWU6ICdzdWJtaXQnLFxuXHR0aXRsZTogJ0xvZ2luJyxcbiAgICB0eXBlOiAnc3VibWl0Jyxcblx0bmVzdGVkIDogZmFsc2Vcbn1dO1xuXG5jb25zdCBpbml0aWFsVmFsdWVzID0ge1xufTtcblxuXG5kZXNjcmliZSgnRm9ybVN1Ym1pdEJ1dHRvbicsICgpID0+IHtcblx0XG5cdGl0KCdzaG91bGQgcmVuZGVyIGFsbCBmb3JtIGZpZWxkcyBpbiB0aGUgc2NoZW1hIG5lc3RlZCB0cnVlJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luLCBNYXRlcmlhbFVJUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybVN1Ym1pdEJ1dHRvbiB7Li4uZmllbGRQcm9wc1swXSBhcyBhbnl9IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVN1Ym1pdEJ1dHRvbik7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdFxuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQnV0dG9uJykuZmlyc3QoKS5wcm9wKCd0aXRsZScpKS50b0JlKCdMb2dpbicpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQnV0dG9uJykuZmlyc3QoKS5wcm9wKCd0eXBlJykpLnRvQmUoJ3N1Ym1pdCcpO1xuXG5cdFx0Ly8gY29uc3Qgb25QcmVzczogYW55ID0gY29tcG9uZW50LmZpbmQoJ0J1dHRvbicpLmZpcnN0KCkucHJvcCgnb25QcmVzcycpO1xuXHRcdC8vIG9uUHJlc3MoKTtcblx0XHQvLyBjb21wb25lbnQudXBkYXRlKCk7XG5cblxuXHRcdC8vIGNvbnN0IGZvcm1pazogYW55ID0gY29tcG9uZW50LmZpbmQoJ0J1dHRvbicpLmZpcnN0KCkucHJvcCgnZm9ybWlrJyk7XG5cdFx0Ly8gZm9ybWlrLmhhbmRsZVN1Ym1pdCgpO1xuXHRcdC8vIGNvbXBvbmVudC51cGRhdGUoKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0IC8vZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cdFx0XHRleHBlY3Qob25TdWJtaXQpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygwKTtcblx0XHR9KTtcblxuXHR9KTtcblx0aXQoJ3Nob3VsZCByZW5kZXIgYWxsIGZvcm0gZmllbGRzIGluIHRoZSBzY2hlbWEgbmVzdGVkIGZhbHNlJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luLCBNYXRlcmlhbFVJUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybVN1Ym1pdEJ1dHRvbiB7Li4uZmllbGRQcm9wc1sxXSBhcyBhbnl9IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVN1Ym1pdEJ1dHRvbik7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdFxuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQnV0dG9uJykuZmlyc3QoKS5wcm9wKCd0aXRsZScpKS50b0JlKCdMb2dpbicpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQnV0dG9uJykuZmlyc3QoKS5wcm9wKCd0eXBlJykpLnRvQmUoJ3N1Ym1pdCcpO1xuXG5cdFx0Ly8gY29uc3Qgb25QcmVzczogYW55ID0gY29tcG9uZW50LmZpbmQoJ0J1dHRvbicpLmZpcnN0KCkucHJvcCgnb25QcmVzcycpO1xuXHRcdC8vIG9uUHJlc3MoKTtcblx0XHQvLyBjb21wb25lbnQudXBkYXRlKCk7XG5cblxuXHRcdC8vIGNvbnN0IGZvcm1pazogYW55ID0gY29tcG9uZW50LmZpbmQoJ0J1dHRvbicpLmZpcnN0KCkucHJvcCgnZm9ybWlrJyk7XG5cdFx0Ly8gZm9ybWlrLmhhbmRsZVN1Ym1pdCgpO1xuXHRcdC8vIGNvbXBvbmVudC51cGRhdGUoKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0IC8vZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cdFx0XHRleHBlY3Qob25TdWJtaXQpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygwKTtcblx0XHR9KTtcblxuXHR9KTtcbn0pO1xuXG4iXSwidmVyc2lvbiI6M30=