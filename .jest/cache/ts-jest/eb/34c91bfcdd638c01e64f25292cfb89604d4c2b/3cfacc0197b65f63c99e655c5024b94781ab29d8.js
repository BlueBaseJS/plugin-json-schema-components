"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const FormCheckboxInput_1 = require("../FormCheckboxInput");
const formik_1 = require("formik");
const index_1 = tslib_1.__importDefault(require("../../../index"));
const react_1 = tslib_1.__importDefault(require("react"));
// import ReactNativePaperPlugin from '@bluebase/plugin-react-native-paper';
const plugin_material_ui_1 = tslib_1.__importDefault(require("@bluebase/plugin-material-ui"));
const enzyme_1 = require("enzyme");
const enzyme_async_helpers_1 = require("enzyme-async-helpers");
// const fieldProps = {
// 	label: 'Auto Login',
// 	name: 'auto-login',
// 	type: 'checkbox',
// 	value : false
// };
const fieldProps2 = {
    label: 'Auto Login',
    name: 'auto-login',
    type: 'checkbox',
    value: true
};
describe('FormCheckboxInput', () => {
    // it('should a checkbox with value true', async () => {
    // 	const onSubmit = jest.fn();
    // 	const component = mount(
    // 		<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
    // 			<Formik initialValues={{ 'auto-login': true }} onSubmit={onSubmit}>
    // 				<FormCheckboxInput {...fieldProps as any} />
    // 			</Formik>
    // 		</BlueBaseApp>
    // 	);
    // 	await waitForElement(component as any, FormCheckboxInput);
    // 	// expect(component).toMatchSnapshot();
    // 	// Check fields
    // 	expect(component.find('Checkbox').last().prop('name')).toBe('auto-login');
    // 	expect(component.find('Checkbox').last().prop('checked')).toBe(true);
    // });
    // it('should a checkbox with value false', async () => {
    // 	const onSubmit = jest.fn();
    // 	const component = mount(
    // 		<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
    // 			<Formik initialValues={{ 'auto-login': false }} onSubmit={onSubmit}>
    // 				<FormCheckboxInput {...fieldProps as any} />
    // 			</Formik>
    // 		</BlueBaseApp>
    // 	);
    // 	await waitForElement(component as any, FormCheckboxInput);
    // 	// expect(component).toMatchSnapshot();
    // 	// Check fields
    // 	expect(component.find('Checkbox').last().prop('name')).toBe('auto-login');
    // 	expect(component.find('Checkbox').last().prop('checked')).toBe(false);
    // });
    // it('should a get value i.e false', async () => {
    // 	const onSubmit = jest.fn();
    // 	const component = mount(
    // 		<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
    // 			<Formik initialValues={{ 'auto-login': false }} onSubmit={onSubmit}>
    // 				<FormCheckboxInput {...fieldProps as any} />
    // 			</Formik>
    // 		</BlueBaseApp>
    // 	);
    // 	await waitForElement(component as any, FormCheckboxInput);
    // 	// expect(component).toMatchSnapshot();
    // 	// Check fields
    // 	expect(component.find('Checkbox').last().prop('name')).toBe('auto-login');
    // 	expect(component.find('Checkbox').last().prop('value')).toBe(false);
    // });
    // it('should a get value i.e sednig value as prop and checking', async () => {
    // 	const onSubmit = jest.fn();
    // 	const component = mount(
    // 		<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
    // 			<Formik initialValues={{ 'auto-login': false }} onSubmit={onSubmit}>
    // 				<FormCheckboxInput {...fieldProps as any} value = {true} />
    // 			</Formik>
    // 		</BlueBaseApp>
    // 	);
    // 	await waitForElement(component as any, FormCheckboxInput);
    // 	// expect(component).toMatchSnapshot();
    // 	// Check fields
    // 	expect(component.find('Checkbox').last().prop('name')).toBe('auto-login');
    // 	expect(component.find('Checkbox').last().prop('value')).toBe(true);
    // });
    // it('should update checkbox value from onValueChange callback', async () => {
    // 	const onSubmit = jest.fn();
    // 	const component = mount(
    // 		<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
    // 			<Formik initialValues={{ 'auto-login': false }} onSubmit={onSubmit}>
    // 				<FormCheckboxInput {...fieldProps as any} onValueChange ={0}/>
    // 			</Formik>
    // 		</BlueBaseApp>
    // 	);
    // 	await waitForElement(component as any, FormCheckboxInput);
    // 	// Initial state should be false
    // 	// Check fields
    // 	// expect(component).toMatchSnapshot();
    // 	expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
    // 	expect(component.find('Checkbox').first().prop('checked')).toBe(false);
    // 	// Update State
    // 	const onValueChange: any = component.find('Checkbox').first().prop('onValueChange');
    // 	onValueChange(false, false);
    // 	component.update();
    // 	// expect(component).toMatchSnapshot();
    // 	// New state should be true
    // 	expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
    // 	expect(component.find('Checkbox').first().prop('checked')).toBe(false);
    // 	expect(component.find('Checkbox').last().prop('value')).toBe(false);
    // });
    it('should check with value = true , checked = false ', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': true }, onSubmit: onSubmit },
                react_1.default.createElement(FormCheckboxInput_1.FormCheckboxInput, Object.assign({}, fieldProps2, { onValueChange: 0 })))));
        await enzyme_async_helpers_1.waitForElement(component, FormCheckboxInput_1.FormCheckboxInput);
        // Initial state should be false
        // Check fields
        // expect(component).toMatchSnapshot();
        expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
        expect(component.find('Checkbox').first().prop('checked')).toBe(true);
        // Update State
        let onValueChange = component.find('Checkbox').first().prop('onValueChange');
        onValueChange(false, true);
        component.update();
        // expect(component).toMatchSnapshot();
        // New state should be true
        expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
        expect(component.find('Checkbox').first().prop('checked')).toBe(true);
        expect(component.find('Checkbox').last().prop('value')).toBe(false);
    });
    it(' should check with value = false , checked = true ', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': true }, onSubmit: onSubmit },
                react_1.default.createElement(FormCheckboxInput_1.FormCheckboxInput, Object.assign({}, fieldProps2, { onValueChange: 0 })))));
        await enzyme_async_helpers_1.waitForElement(component, FormCheckboxInput_1.FormCheckboxInput);
        // Initial state should be false
        // Check fields
        // expect(component).toMatchSnapshot();
        expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
        expect(component.find('Checkbox').first().prop('checked')).toBe(true);
        // Update State
        let onValueChange = component.find('Checkbox').first().prop('onValueChange');
        onValueChange(true, true);
        component.update();
        // expect(component).toMatchSnapshot();
        // New state should be true
        //state of checked is revered now
        expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
        expect(component.find('Checkbox').first().prop('checked')).toBe(true);
        expect(component.find('Checkbox').last().prop('value')).toBe(true);
    });
    // it('should update checkbox value from onValueChange callback with null', async () => {
    // 	const onSubmit = jest.fn();
    // 	const component = mount(
    // 		<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
    // 			<Formik initialValues={{ 'auto-login': false }} onSubmit={onSubmit}>
    // 				<FormCheckboxInput {...fieldProps as any} />
    // 			</Formik>
    // 		</BlueBaseApp>
    // 	);
    // 	await waitForElement(component as any, FormCheckboxInput);
    // 	// Initial state should be false
    // 	// Check fields
    // 	// expect(component).toMatchSnapshot();
    // 	expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
    // 	expect(component.find('Checkbox').first().prop('checked')).toBe(false);
    // 	// Update State
    // 	const onValueChange: any = component.find('Checkbox').first().prop('onValueChange');
    // 	onValueChange(false, false);
    // 	component.update();
    // 	// expect(component).toMatchSnapshot();
    // 	// New state should be true
    // 	expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
    // 	expect(component.find('Checkbox').first().prop('checked')).toBe(false);
    // 	expect(component.find('Checkbox').last().prop('value')).toBe(true);
    // });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1DaGVja2JveElucHV0LnRlc3QudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE2QztBQUM3Qyw0REFBeUQ7QUFDekQsbUNBQWdDO0FBQ2hDLG1FQUFvQztBQUNwQywwREFBMEI7QUFDMUIsNEVBQTRFO0FBQzVFLDhGQUE0RDtBQUM1RCxtQ0FBK0I7QUFDL0IsK0RBQXNEO0FBRXRELHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEIsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsS0FBSztBQUVMLE1BQU0sV0FBVyxHQUFHO0lBQ25CLEtBQUssRUFBRSxZQUFZO0lBQ25CLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSxVQUFVO0lBQ2hCLEtBQUssRUFBRyxJQUFJO0NBQ1osQ0FBQztBQUVGLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFHbEMsd0RBQXdEO0lBRXhELCtCQUErQjtJQUUvQiw0QkFBNEI7SUFDNUIsdURBQXVEO0lBQ3ZELHlFQUF5RTtJQUN6RSxtREFBbUQ7SUFDbkQsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixNQUFNO0lBRU4sOERBQThEO0lBRTlELDJDQUEyQztJQUUzQyxtQkFBbUI7SUFDbkIsOEVBQThFO0lBQzlFLHlFQUF5RTtJQUN6RSxNQUFNO0lBR04seURBQXlEO0lBRXpELCtCQUErQjtJQUUvQiw0QkFBNEI7SUFDNUIsdURBQXVEO0lBQ3ZELDBFQUEwRTtJQUMxRSxtREFBbUQ7SUFDbkQsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixNQUFNO0lBRU4sOERBQThEO0lBRTlELDJDQUEyQztJQUUzQyxtQkFBbUI7SUFDbkIsOEVBQThFO0lBQzlFLDBFQUEwRTtJQUMxRSxNQUFNO0lBRU4sbURBQW1EO0lBRW5ELCtCQUErQjtJQUUvQiw0QkFBNEI7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MUIsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLHVDQUF1QztRQUV2QywyQkFBMkI7UUFDM0IsaUNBQWlDO1FBQ2pDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzRSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBFLENBQUMsQ0FBQyxDQUFDO0lBRUgseUZBQXlGO0lBRXpGLCtCQUErQjtJQUUvQiw0QkFBNEI7SUFDNUIsdURBQXVEO0lBQ3ZELDBFQUEwRTtJQUMxRSxtREFBbUQ7SUFDbkQsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixNQUFNO0lBRU4sOERBQThEO0lBRTlELG9DQUFvQztJQUVwQyxtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLCtFQUErRTtJQUMvRSwyRUFBMkU7SUFFM0UsbUJBQW1CO0lBQ25CLHdGQUF3RjtJQUV4RixnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLDJDQUEyQztJQUUzQywrQkFBK0I7SUFDL0IsK0VBQStFO0lBQy9FLDJFQUEyRTtJQUMzRSx1RUFBdUU7SUFFdkUsTUFBTTtBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL19fdGVzdHNfXy9Gb3JtQ2hlY2tib3hJbnB1dC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbHVlQmFzZUFwcCB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCB7IEZvcm1DaGVja2JveElucHV0IH0gZnJvbSAnLi4vRm9ybUNoZWNrYm94SW5wdXQnO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vLi4vLi4vaW5kZXgnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBSZWFjdE5hdGl2ZVBhcGVyUGx1Z2luIGZyb20gJ0BibHVlYmFzZS9wbHVnaW4tcmVhY3QtbmF0aXZlLXBhcGVyJztcbmltcG9ydCBNYXRlcmlhbFVJUGx1Z2luIGZyb20gJ0BibHVlYmFzZS9wbHVnaW4tbWF0ZXJpYWwtdWknO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5cbi8vIGNvbnN0IGZpZWxkUHJvcHMgPSB7XG4vLyBcdGxhYmVsOiAnQXV0byBMb2dpbicsXG4vLyBcdG5hbWU6ICdhdXRvLWxvZ2luJyxcbi8vIFx0dHlwZTogJ2NoZWNrYm94Jyxcbi8vIFx0dmFsdWUgOiBmYWxzZVxuLy8gfTtcblxuY29uc3QgZmllbGRQcm9wczIgPSB7XG5cdGxhYmVsOiAnQXV0byBMb2dpbicsXG5cdG5hbWU6ICdhdXRvLWxvZ2luJyxcblx0dHlwZTogJ2NoZWNrYm94Jyxcblx0dmFsdWUgOiB0cnVlXG59O1xuXG5kZXNjcmliZSgnRm9ybUNoZWNrYm94SW5wdXQnLCAoKSA9PiB7XG5cblxuXHQvLyBpdCgnc2hvdWxkIGEgY2hlY2tib3ggd2l0aCB2YWx1ZSB0cnVlJywgYXN5bmMgKCkgPT4ge1xuXG5cdC8vIFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0Ly8gXHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0Ly8gXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luLCBNYXRlcmlhbFVJUGx1Z2luXX0+XG5cdC8vIFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17eyAnYXV0by1sb2dpbic6IHRydWUgfX0gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0Ly8gXHRcdFx0XHQ8Rm9ybUNoZWNrYm94SW5wdXQgey4uLmZpZWxkUHJvcHMgYXMgYW55fSAvPlxuXHQvLyBcdFx0XHQ8L0Zvcm1paz5cblx0Ly8gXHRcdDwvQmx1ZUJhc2VBcHA+XG5cdC8vIFx0KTtcblxuXHQvLyBcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1DaGVja2JveElucHV0KTtcblxuXHQvLyBcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdC8vIFx0Ly8gQ2hlY2sgZmllbGRzXG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmxhc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykubGFzdCgpLnByb3AoJ2NoZWNrZWQnKSkudG9CZSh0cnVlKTtcblx0Ly8gfSk7XG5cblxuXHQvLyBpdCgnc2hvdWxkIGEgY2hlY2tib3ggd2l0aCB2YWx1ZSBmYWxzZScsIGFzeW5jICgpID0+IHtcblxuXHQvLyBcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdC8vIFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdC8vIFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHQvLyBcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiBmYWxzZSB9fSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHQvLyBcdFx0XHRcdDxGb3JtQ2hlY2tib3hJbnB1dCB7Li4uZmllbGRQcm9wcyBhcyBhbnl9IC8+XG5cdC8vIFx0XHRcdDwvRm9ybWlrPlxuXHQvLyBcdFx0PC9CbHVlQmFzZUFwcD5cblx0Ly8gXHQpO1xuXG5cdC8vIFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybUNoZWNrYm94SW5wdXQpO1xuXG5cdC8vIFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0Ly8gXHQvLyBDaGVjayBmaWVsZHNcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykubGFzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnYXV0by1sb2dpbicpO1xuXHQvLyBcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5sYXN0KCkucHJvcCgnY2hlY2tlZCcpKS50b0JlKGZhbHNlKTtcblx0Ly8gfSk7XG5cblx0Ly8gaXQoJ3Nob3VsZCBhIGdldCB2YWx1ZSBpLmUgZmFsc2UnLCBhc3luYyAoKSA9PiB7XG5cblx0Ly8gXHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHQvLyBcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHQvLyBcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW4sIE1hdGVyaWFsVUlQbHVnaW5dfT5cblx0Ly8gXHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXt7ICdhdXRvLWxvZ2luJzogZmFsc2UgfX0gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0Ly8gXHRcdFx0XHQ8Rm9ybUNoZWNrYm94SW5wdXQgey4uLmZpZWxkUHJvcHMgYXMgYW55fSAvPlxuXHQvLyBcdFx0XHQ8L0Zvcm1paz5cblx0Ly8gXHRcdDwvQmx1ZUJhc2VBcHA+XG5cdC8vIFx0KTtcblxuXHQvLyBcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1DaGVja2JveElucHV0KTtcblxuXHQvLyBcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdC8vIFx0Ly8gQ2hlY2sgZmllbGRzXG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmxhc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykubGFzdCgpLnByb3AoJ3ZhbHVlJykpLnRvQmUoZmFsc2UpO1xuXHQvLyB9KTtcblxuXG5cdC8vIGl0KCdzaG91bGQgYSBnZXQgdmFsdWUgaS5lIHNlZG5pZyB2YWx1ZSBhcyBwcm9wIGFuZCBjaGVja2luZycsIGFzeW5jICgpID0+IHtcblxuXHQvLyBcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdC8vIFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdC8vIFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHQvLyBcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiBmYWxzZSB9fSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHQvLyBcdFx0XHRcdDxGb3JtQ2hlY2tib3hJbnB1dCB7Li4uZmllbGRQcm9wcyBhcyBhbnl9IHZhbHVlID0ge3RydWV9IC8+XG5cdC8vIFx0XHRcdDwvRm9ybWlrPlxuXHQvLyBcdFx0PC9CbHVlQmFzZUFwcD5cblx0Ly8gXHQpO1xuXG5cdC8vIFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybUNoZWNrYm94SW5wdXQpO1xuXG5cdC8vIFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0Ly8gXHQvLyBDaGVjayBmaWVsZHNcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykubGFzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnYXV0by1sb2dpbicpO1xuXHQvLyBcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5sYXN0KCkucHJvcCgndmFsdWUnKSkudG9CZSh0cnVlKTtcblx0Ly8gfSk7XG5cblxuXHQvLyBpdCgnc2hvdWxkIHVwZGF0ZSBjaGVja2JveCB2YWx1ZSBmcm9tIG9uVmFsdWVDaGFuZ2UgY2FsbGJhY2snLCBhc3luYyAoKSA9PiB7XG5cblx0Ly8gXHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblx0Ly8gXHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0Ly8gXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luLCBNYXRlcmlhbFVJUGx1Z2luXX0+XG5cdC8vIFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17eyAnYXV0by1sb2dpbic6IGZhbHNlIH19IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdC8vIFx0XHRcdFx0PEZvcm1DaGVja2JveElucHV0IHsuLi5maWVsZFByb3BzIGFzIGFueX0gb25WYWx1ZUNoYW5nZSA9ezB9Lz5cblx0Ly8gXHRcdFx0PC9Gb3JtaWs+XG5cdC8vIFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHQvLyBcdCk7XG5cblx0Ly8gXHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtQ2hlY2tib3hJbnB1dCk7XG5cblx0Ly8gXHQvLyBJbml0aWFsIHN0YXRlIHNob3VsZCBiZSBmYWxzZVxuXG5cdC8vIFx0Ly8gQ2hlY2sgZmllbGRzXG5cdC8vIFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmZpcnN0KCkucHJvcCgnbmFtZScpKS50b0JlKCdhdXRvLWxvZ2luJyk7XG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmZpcnN0KCkucHJvcCgnY2hlY2tlZCcpKS50b0JlKGZhbHNlKTtcblxuXHQvLyBcdC8vIFVwZGF0ZSBTdGF0ZVxuXHQvLyBcdGNvbnN0IG9uVmFsdWVDaGFuZ2U6IGFueSA9IGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmZpcnN0KCkucHJvcCgnb25WYWx1ZUNoYW5nZScpO1xuXG5cdC8vIFx0b25WYWx1ZUNoYW5nZShmYWxzZSwgZmFsc2UpO1xuXHQvLyBcdGNvbXBvbmVudC51cGRhdGUoKTtcblx0Ly8gXHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHQvLyBcdC8vIE5ldyBzdGF0ZSBzaG91bGQgYmUgdHJ1ZVxuXHQvLyBcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnYXV0by1sb2dpbicpO1xuXHQvLyBcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmxhc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlKGZhbHNlKTtcblxuXHQvLyB9KTtcblxuXG5cdGl0KCdzaG91bGQgY2hlY2sgd2l0aCB2YWx1ZSA9IHRydWUgLCBjaGVja2VkID0gZmFsc2UgJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiB0cnVlIH19IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1DaGVja2JveElucHV0IHsuLi5maWVsZFByb3BzMiBhcyBhbnl9IG9uVmFsdWVDaGFuZ2UgPXswfSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1DaGVja2JveElucHV0KTtcblxuXHRcdC8vIEluaXRpYWwgc3RhdGUgc2hvdWxkIGJlIGZhbHNlXG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCdjaGVja2VkJykpLnRvQmUodHJ1ZSk7XG5cblx0XHQvLyBVcGRhdGUgU3RhdGVcblx0XHRsZXQgb25WYWx1ZUNoYW5nZTogYW55ID0gY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCdvblZhbHVlQ2hhbmdlJyk7XG5cdFx0XG5cblx0XHRvblZhbHVlQ2hhbmdlKGZhbHNlLCB0cnVlKTtcblx0XHRjb21wb25lbnQudXBkYXRlKCk7XG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHQvLyBOZXcgc3RhdGUgc2hvdWxkIGJlIHRydWVcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCdjaGVja2VkJykpLnRvQmUodHJ1ZSk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmxhc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlKGZhbHNlKTtcblxuXHR9KTtcblxuXHRpdCgnIHNob3VsZCBjaGVjayB3aXRoIHZhbHVlID0gZmFsc2UgLCBjaGVja2VkID0gdHJ1ZSAnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luLCBNYXRlcmlhbFVJUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17eyAnYXV0by1sb2dpbic6IHRydWUgfX0gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybUNoZWNrYm94SW5wdXQgey4uLmZpZWxkUHJvcHMyIGFzIGFueX0gb25WYWx1ZUNoYW5nZT17MH0vPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1DaGVja2JveElucHV0KTtcblxuXHRcdC8vIEluaXRpYWwgc3RhdGUgc2hvdWxkIGJlIGZhbHNlXG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCdjaGVja2VkJykpLnRvQmUodHJ1ZSk7XG5cblx0XHQvLyBVcGRhdGUgU3RhdGVcblx0XHRsZXQgb25WYWx1ZUNoYW5nZTogYW55ID0gY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCdvblZhbHVlQ2hhbmdlJyk7XG5cdFx0XG5cblx0XHRvblZhbHVlQ2hhbmdlKHRydWUsIHRydWUpO1xuXHRcdGNvbXBvbmVudC51cGRhdGUoKTtcblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIE5ldyBzdGF0ZSBzaG91bGQgYmUgdHJ1ZVxuXHRcdC8vc3RhdGUgb2YgY2hlY2tlZCBpcyByZXZlcmVkIG5vd1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnYXV0by1sb2dpbicpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ2NoZWNrZWQnKSkudG9CZSh0cnVlKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykubGFzdCgpLnByb3AoJ3ZhbHVlJykpLnRvQmUodHJ1ZSk7XG5cblx0fSk7XG5cblx0Ly8gaXQoJ3Nob3VsZCB1cGRhdGUgY2hlY2tib3ggdmFsdWUgZnJvbSBvblZhbHVlQ2hhbmdlIGNhbGxiYWNrIHdpdGggbnVsbCcsIGFzeW5jICgpID0+IHtcblxuXHQvLyBcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdC8vIFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdC8vIFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHQvLyBcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiBmYWxzZSB9fSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHQvLyBcdFx0XHRcdDxGb3JtQ2hlY2tib3hJbnB1dCB7Li4uZmllbGRQcm9wcyBhcyBhbnl9IC8+XG5cdC8vIFx0XHRcdDwvRm9ybWlrPlxuXHQvLyBcdFx0PC9CbHVlQmFzZUFwcD5cblx0Ly8gXHQpO1xuXG5cdC8vIFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybUNoZWNrYm94SW5wdXQpO1xuXG5cdC8vIFx0Ly8gSW5pdGlhbCBzdGF0ZSBzaG91bGQgYmUgZmFsc2VcblxuXHQvLyBcdC8vIENoZWNrIGZpZWxkc1xuXHQvLyBcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXHQvLyBcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnYXV0by1sb2dpbicpO1xuXHQvLyBcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cblx0Ly8gXHQvLyBVcGRhdGUgU3RhdGVcblx0Ly8gXHRjb25zdCBvblZhbHVlQ2hhbmdlOiBhbnkgPSBjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ29uVmFsdWVDaGFuZ2UnKTtcblxuXHQvLyBcdG9uVmFsdWVDaGFuZ2UoZmFsc2UsIGZhbHNlKTtcblx0Ly8gXHRjb21wb25lbnQudXBkYXRlKCk7XG5cdC8vIFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0Ly8gXHQvLyBOZXcgc3RhdGUgc2hvdWxkIGJlIHRydWVcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCdjaGVja2VkJykpLnRvQmUoZmFsc2UpO1xuXHQvLyBcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5sYXN0KCkucHJvcCgndmFsdWUnKSkudG9CZSh0cnVlKTtcblxuXHQvLyB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9