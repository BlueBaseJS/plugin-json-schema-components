"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const FormResetButton_1 = require("../FormResetButton");
const formik_1 = require("formik");
const plugin_material_ui_1 = tslib_1.__importDefault(require("@bluebase/plugin-material-ui"));
const index_1 = tslib_1.__importDefault(require("../../../index"));
const react_1 = tslib_1.__importDefault(require("react"));
const enzyme_1 = require("enzyme");
const enzyme_async_helpers_1 = require("enzyme-async-helpers");
const fieldProps = [{
        name: 'reset',
        type: 'reset',
        nested: true
    },
    {
        name: 'reset',
        type: 'reset',
        nested: false
    },
];
const initialValues = {};
describe('FormResetButton', () => {
    // it('should render all form fields in the schema with nested true', async () => {
    // 	const onSubmit = jest.fn();
    // 	const component = mount(
    // 		<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
    // 			<Formik initialValues={initialValues} onSubmit={onSubmit}>
    // 				<FormResetButton {...fieldProps[0] as any} />
    // 			</Formik>
    // 		</BlueBaseApp>
    // 	);
    // 	await waitForElement(component as any, FormResetButton);
    // 	// expect(component).toMatchSnapshot();
    // 	// Check fields
    // 	expect(component.find('Button').first().prop('title')).toBe('Reset');
    // 	expect(component.find('Button').first().prop('type')).toBe('reset');
    // });
    it('should render all form fields in the schema with nested false', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormResetButton_1.FormResetButton, Object.assign({}, fieldProps[1])))));
        await enzyme_async_helpers_1.waitForElement(component, FormResetButton_1.FormResetButton);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('Button').first().prop('title')).toBe('Reset');
        expect(component.find('Button').first().prop('type')).toBe('reset');
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1SZXNldEJ1dHRvbi50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBNkM7QUFDN0Msd0RBQXFEO0FBQ3JELG1DQUFnQztBQUNoQyw4RkFBNEQ7QUFDNUQsbUVBQW9DO0FBQ3BDLDBEQUEwQjtBQUMxQixtQ0FBK0I7QUFDL0IsK0RBQXNEO0FBRXRELE1BQU0sVUFBVSxHQUFHLENBQUM7UUFDbkIsSUFBSSxFQUFFLE9BQU87UUFDYixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRyxJQUFJO0tBQ2I7SUFDRDtRQUNDLElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUcsS0FBSztLQUNkO0NBRUEsQ0FBQTtBQUVELE1BQU0sYUFBYSxHQUFHLEVBQ3JCLENBQUM7QUFHRixRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBR2hDLG1GQUFtRjtJQUVuRiwrQkFBK0I7SUFFL0IsNEJBQTRCO0lBQzVCLHVEQUF1RDtJQUN2RCxnRUFBZ0U7SUFDaEUsb0RBQW9EO0lBQ3BELGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsTUFBTTtJQUNOLDREQUE0RDtJQUU1RCwyQ0FBMkM7SUFFM0MsbUJBQW1CO0lBQ25CLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsTUFBTTtJQUVOLEVBQUUsQ0FBQywrREFBK0QsRUFBRSxLQUFLLElBQUksRUFBRTtRQUU5RSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFM0IsTUFBTSxTQUFTLEdBQUcsY0FBSyxDQUN0Qiw4QkFBQyxrQkFBVyxJQUFDLE9BQU8sRUFBRSxDQUFDLGVBQU0sRUFBRSw0QkFBZ0IsQ0FBQztZQUMvQyw4QkFBQyxlQUFNLElBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsUUFBUTtnQkFDdkQsOEJBQUMsaUNBQWUsb0JBQUssVUFBVSxDQUFDLENBQUMsQ0FBUSxFQUFJLENBQ3JDLENBQ0ksQ0FDZCxDQUFDO1FBQ0YsTUFBTSxxQ0FBYyxDQUFDLFNBQWdCLEVBQUUsaUNBQWUsQ0FBQyxDQUFDO1FBRXhELHVDQUF1QztRQUV2QyxlQUFlO1FBQ2YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyRSxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL19fdGVzdHNfXy9Gb3JtUmVzZXRCdXR0b24udGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2VBcHAgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBGb3JtUmVzZXRCdXR0b24gfSBmcm9tICcuLi9Gb3JtUmVzZXRCdXR0b24nO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBNYXRlcmlhbFVJUGx1Z2luIGZyb20gJ0BibHVlYmFzZS9wbHVnaW4tbWF0ZXJpYWwtdWknO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi8uLi8uLi9pbmRleCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5cbmNvbnN0IGZpZWxkUHJvcHMgPSBbe1xuXHRuYW1lOiAncmVzZXQnLFxuXHR0eXBlOiAncmVzZXQnLFxuXHRuZXN0ZWQgOiB0cnVlXG59LFxue1xuXHRuYW1lOiAncmVzZXQnLFxuXHR0eXBlOiAncmVzZXQnLFxuXHRuZXN0ZWQgOiBmYWxzZVxufSxcblxuXVxuXG5jb25zdCBpbml0aWFsVmFsdWVzID0ge1xufTtcblxuXG5kZXNjcmliZSgnRm9ybVJlc2V0QnV0dG9uJywgKCkgPT4ge1xuXG5cblx0Ly8gaXQoJ3Nob3VsZCByZW5kZXIgYWxsIGZvcm0gZmllbGRzIGluIHRoZSBzY2hlbWEgd2l0aCBuZXN0ZWQgdHJ1ZScsIGFzeW5jICgpID0+IHtcblxuXHQvLyBcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXHRcdFxuXHQvLyBcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHQvLyBcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW4sIE1hdGVyaWFsVUlQbHVnaW5dfT5cblx0Ly8gXHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHQvLyBcdFx0XHRcdDxGb3JtUmVzZXRCdXR0b24gey4uLmZpZWxkUHJvcHNbMF0gYXMgYW55fSAvPlxuXHQvLyBcdFx0XHQ8L0Zvcm1paz5cblx0Ly8gXHRcdDwvQmx1ZUJhc2VBcHA+XG5cdC8vIFx0KTtcblx0Ly8gXHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtUmVzZXRCdXR0b24pO1xuXG5cdC8vIFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0Ly8gXHQvLyBDaGVjayBmaWVsZHNcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0J1dHRvbicpLmZpcnN0KCkucHJvcCgndGl0bGUnKSkudG9CZSgnUmVzZXQnKTtcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0J1dHRvbicpLmZpcnN0KCkucHJvcCgndHlwZScpKS50b0JlKCdyZXNldCcpO1xuXHQvLyB9KTtcblxuXHRpdCgnc2hvdWxkIHJlbmRlciBhbGwgZm9ybSBmaWVsZHMgaW4gdGhlIHNjaGVtYSB3aXRoIG5lc3RlZCBmYWxzZScsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXHRcdFxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW4sIE1hdGVyaWFsVUlQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtUmVzZXRCdXR0b24gey4uLmZpZWxkUHJvcHNbMV0gYXMgYW55fSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtUmVzZXRCdXR0b24pO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0J1dHRvbicpLmZpcnN0KCkucHJvcCgndGl0bGUnKSkudG9CZSgnUmVzZXQnKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0J1dHRvbicpLmZpcnN0KCkucHJvcCgndHlwZScpKS50b0JlKCdyZXNldCcpO1xuXHR9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9