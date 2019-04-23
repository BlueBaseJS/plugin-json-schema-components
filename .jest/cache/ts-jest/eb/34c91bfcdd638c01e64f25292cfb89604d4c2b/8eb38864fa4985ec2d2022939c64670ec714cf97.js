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
const fieldProps = {
    label: 'Auto Login',
    name: 'auto-login',
    type: 'checkbox',
    value: false
};
const fieldProps2 = {
    label: 'Auto Login',
    name: 'auto-login',
    type: 'checkbox',
    value: false
};
describe('FormCheckboxInput', () => {
    it('should a checkbox with value true', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': true }, onSubmit: onSubmit },
                react_1.default.createElement(FormCheckboxInput_1.FormCheckboxInput, Object.assign({}, fieldProps)))));
        await enzyme_async_helpers_1.waitForElement(component, FormCheckboxInput_1.FormCheckboxInput);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('Checkbox').last().prop('name')).toBe('auto-login');
        expect(component.find('Checkbox').last().prop('checked')).toBe(true);
    });
    it('should a checkbox with value false', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': false }, onSubmit: onSubmit },
                react_1.default.createElement(FormCheckboxInput_1.FormCheckboxInput, Object.assign({}, fieldProps)))));
        await enzyme_async_helpers_1.waitForElement(component, FormCheckboxInput_1.FormCheckboxInput);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('Checkbox').last().prop('name')).toBe('auto-login');
        expect(component.find('Checkbox').last().prop('checked')).toBe(false);
    });
    it('should update checkbox value from onValueChange callback with value false', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': false }, onSubmit: onSubmit },
                react_1.default.createElement(FormCheckboxInput_1.FormCheckboxInput, Object.assign({}, fieldProps, { onValueChange: () => null })))));
        await enzyme_async_helpers_1.waitForElement(component, FormCheckboxInput_1.FormCheckboxInput);
        // Initial state should be false
        // Check fields
        // expect(component).toMatchSnapshot();
        expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
        expect(component.find('Checkbox').first().prop('checked')).toBe(false);
        // Update State
        const onValueChange = component.find('Checkbox').first().prop('onValueChange');
        onValueChange(false, false);
        component.update();
        // expect(component).toMatchSnapshot();
        // New state should be true
        expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
        expect(component.find('Checkbox').first().prop('checked')).toBe(false);
        expect(component.find('Checkbox').last().prop('value')).toBe(false);
    });
    it('should update checkbox value from onValueChange callback with value true ', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': true }, onSubmit: onSubmit },
                react_1.default.createElement(FormCheckboxInput_1.FormCheckboxInput, Object.assign({ onValueChange: () => null }, fieldProps2)))));
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
        expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
        expect(component.find('Checkbox').first().prop('checked')).toBe(true);
        expect(component.find('Checkbox').last().prop('value')).toBe(false);
    });
    // it(' should check with value = false , checked = true with onvaluechange ->value', async () => {
    // 	const onSubmit = jest.fn();
    // 	const component = mount(
    // 		<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
    // 			<Formik initialValues={{ 'auto-login': false }} onSubmit={onSubmit}>
    // 				<FormCheckboxInput  {...fieldProps2 as any} />
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
    // 	let onValueChange: any = component.find('Checkbox').first().prop('onValueChange');
    // 	onValueChange(null, true);
    // 	component.update();
    // 	// expect(component).toMatchSnapshot();
    // 	// New state should be true
    // 	//state of checked is revered now
    // 	expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
    // 	expect(component.find('Checkbox').first().prop('checked')).toBe(true);
    // 	expect(component.find('Checkbox').last().prop('value')).toBe(false);
    // });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1DaGVja2JveElucHV0LnRlc3QudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE2QztBQUM3Qyw0REFBeUQ7QUFDekQsbUNBQWdDO0FBQ2hDLG1FQUFvQztBQUNwQywwREFBMEI7QUFDMUIsNEVBQTRFO0FBQzVFLDhGQUE0RDtBQUM1RCxtQ0FBK0I7QUFDL0IsK0RBQXNEO0FBRXRELE1BQU0sVUFBVSxHQUFHO0lBQ2xCLEtBQUssRUFBRSxZQUFZO0lBQ25CLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSxVQUFVO0lBQ2hCLEtBQUssRUFBRyxLQUFLO0NBQ2IsQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUFHO0lBQ25CLEtBQUssRUFBRSxZQUFZO0lBQ25CLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSxVQUFVO0lBQ2hCLEtBQUssRUFBRyxLQUFLO0NBQ2IsQ0FBQztBQUVGLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFHbEMsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBRWxELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLFNBQVMsR0FBRyxjQUFLLENBQ3RCLDhCQUFDLGtCQUFXLElBQUMsT0FBTyxFQUFFLENBQUMsZUFBTSxFQUFFLDRCQUFnQixDQUFDO1lBQy9DLDhCQUFDLGVBQU0sSUFBQyxhQUFhLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBQ2hFLDhCQUFDLHFDQUFpQixvQkFBSyxVQUFpQixFQUFJLENBQ3BDLENBQ0ksQ0FDZCxDQUFDO1FBRUYsTUFBTSxxQ0FBYyxDQUFDLFNBQWdCLEVBQUUscUNBQWlCLENBQUMsQ0FBQztRQUUxRCx1Q0FBdUM7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M0MsK0VBQStFO0lBQy9FLDJFQUEyRTtJQUUzRSxtQkFBbUI7SUFDbkIsc0ZBQXNGO0lBR3RGLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsMkNBQTJDO0lBRTNDLCtCQUErQjtJQUMvQixxQ0FBcUM7SUFDckMsK0VBQStFO0lBQy9FLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFFeEUsTUFBTTtBQUVQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL19fdGVzdHNfXy9Gb3JtQ2hlY2tib3hJbnB1dC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbHVlQmFzZUFwcCB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCB7IEZvcm1DaGVja2JveElucHV0IH0gZnJvbSAnLi4vRm9ybUNoZWNrYm94SW5wdXQnO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vLi4vLi4vaW5kZXgnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBSZWFjdE5hdGl2ZVBhcGVyUGx1Z2luIGZyb20gJ0BibHVlYmFzZS9wbHVnaW4tcmVhY3QtbmF0aXZlLXBhcGVyJztcbmltcG9ydCBNYXRlcmlhbFVJUGx1Z2luIGZyb20gJ0BibHVlYmFzZS9wbHVnaW4tbWF0ZXJpYWwtdWknO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5cbmNvbnN0IGZpZWxkUHJvcHMgPSB7XG5cdGxhYmVsOiAnQXV0byBMb2dpbicsXG5cdG5hbWU6ICdhdXRvLWxvZ2luJyxcblx0dHlwZTogJ2NoZWNrYm94Jyxcblx0dmFsdWUgOiBmYWxzZVxufTtcblxuY29uc3QgZmllbGRQcm9wczIgPSB7XG5cdGxhYmVsOiAnQXV0byBMb2dpbicsXG5cdG5hbWU6ICdhdXRvLWxvZ2luJyxcblx0dHlwZTogJ2NoZWNrYm94Jyxcblx0dmFsdWUgOiBmYWxzZVxufTtcblxuZGVzY3JpYmUoJ0Zvcm1DaGVja2JveElucHV0JywgKCkgPT4ge1xuXG5cblx0aXQoJ3Nob3VsZCBhIGNoZWNrYm94IHdpdGggdmFsdWUgdHJ1ZScsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiB0cnVlIH19IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1DaGVja2JveElucHV0IHsuLi5maWVsZFByb3BzIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtQ2hlY2tib3hJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5sYXN0KCkucHJvcCgnbmFtZScpKS50b0JlKCdhdXRvLWxvZ2luJyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmxhc3QoKS5wcm9wKCdjaGVja2VkJykpLnRvQmUodHJ1ZSk7XG5cdH0pO1xuXG5cblx0aXQoJ3Nob3VsZCBhIGNoZWNrYm94IHdpdGggdmFsdWUgZmFsc2UnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW4sIE1hdGVyaWFsVUlQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXt7ICdhdXRvLWxvZ2luJzogZmFsc2UgfX0gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybUNoZWNrYm94SW5wdXQgey4uLmZpZWxkUHJvcHMgYXMgYW55fSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1DaGVja2JveElucHV0KTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmxhc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykubGFzdCgpLnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cdH0pO1xuXG5cblxuXHRpdCgnc2hvdWxkIHVwZGF0ZSBjaGVja2JveCB2YWx1ZSBmcm9tIG9uVmFsdWVDaGFuZ2UgY2FsbGJhY2sgd2l0aCB2YWx1ZSBmYWxzZScsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW4sIE1hdGVyaWFsVUlQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXt7ICdhdXRvLWxvZ2luJzogZmFsc2UgfX0gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybUNoZWNrYm94SW5wdXQgey4uLmZpZWxkUHJvcHMgYXMgYW55fSBvblZhbHVlQ2hhbmdlID17KCk9Pm51bGx9Lz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtQ2hlY2tib3hJbnB1dCk7XG5cblx0XHQvLyBJbml0aWFsIHN0YXRlIHNob3VsZCBiZSBmYWxzZVxuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmZpcnN0KCkucHJvcCgnbmFtZScpKS50b0JlKCdhdXRvLWxvZ2luJyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmZpcnN0KCkucHJvcCgnY2hlY2tlZCcpKS50b0JlKGZhbHNlKTtcblxuXHRcdC8vIFVwZGF0ZSBTdGF0ZVxuXHRcdGNvbnN0IG9uVmFsdWVDaGFuZ2U6IGFueSA9IGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmZpcnN0KCkucHJvcCgnb25WYWx1ZUNoYW5nZScpO1xuXG5cdFx0b25WYWx1ZUNoYW5nZShmYWxzZSwgZmFsc2UpO1xuXHRcdGNvbXBvbmVudC51cGRhdGUoKTtcblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIE5ldyBzdGF0ZSBzaG91bGQgYmUgdHJ1ZVxuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnYXV0by1sb2dpbicpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmxhc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlKGZhbHNlKTtcblxuXHR9KTtcblxuXG5cdGl0KCdzaG91bGQgdXBkYXRlIGNoZWNrYm94IHZhbHVlIGZyb20gb25WYWx1ZUNoYW5nZSBjYWxsYmFjayB3aXRoIHZhbHVlIHRydWUgJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiB0cnVlIH19IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1DaGVja2JveElucHV0IG9uVmFsdWVDaGFuZ2UgPSB7KCk9Pm51bGx9IHsuLi5maWVsZFByb3BzMiBhcyBhbnl9ICAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1DaGVja2JveElucHV0KTtcblxuXHRcdC8vIEluaXRpYWwgc3RhdGUgc2hvdWxkIGJlIGZhbHNlXG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCdjaGVja2VkJykpLnRvQmUodHJ1ZSk7XG5cblx0XHQvLyBVcGRhdGUgU3RhdGVcblx0XHRsZXQgb25WYWx1ZUNoYW5nZTogYW55ID0gY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCdvblZhbHVlQ2hhbmdlJyk7XG5cblx0XHRcblxuXHRcdG9uVmFsdWVDaGFuZ2UodHJ1ZSwgdHJ1ZSk7XG5cdFx0Y29tcG9uZW50LnVwZGF0ZSgpO1xuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gTmV3IHN0YXRlIHNob3VsZCBiZSB0cnVlXG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmZpcnN0KCkucHJvcCgnbmFtZScpKS50b0JlKCdhdXRvLWxvZ2luJyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmZpcnN0KCkucHJvcCgnY2hlY2tlZCcpKS50b0JlKHRydWUpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5sYXN0KCkucHJvcCgndmFsdWUnKSkudG9CZShmYWxzZSk7XG5cblx0fSk7XG5cblx0Ly8gaXQoJyBzaG91bGQgY2hlY2sgd2l0aCB2YWx1ZSA9IGZhbHNlICwgY2hlY2tlZCA9IHRydWUgd2l0aCBvbnZhbHVlY2hhbmdlIC0+dmFsdWUnLCBhc3luYyAoKSA9PiB7XG5cblx0Ly8gXHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblx0Ly8gXHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0Ly8gXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luLCBNYXRlcmlhbFVJUGx1Z2luXX0+XG5cdC8vIFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17eyAnYXV0by1sb2dpbic6IGZhbHNlIH19IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdC8vIFx0XHRcdFx0PEZvcm1DaGVja2JveElucHV0ICB7Li4uZmllbGRQcm9wczIgYXMgYW55fSAvPlxuXHQvLyBcdFx0XHQ8L0Zvcm1paz5cblx0Ly8gXHRcdDwvQmx1ZUJhc2VBcHA+XG5cdC8vIFx0KTtcblxuXHQvLyBcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1DaGVja2JveElucHV0KTtcblxuXHQvLyBcdC8vIEluaXRpYWwgc3RhdGUgc2hvdWxkIGJlIGZhbHNlXG5cblx0Ly8gXHQvLyBDaGVjayBmaWVsZHNcblx0Ly8gXHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCdjaGVja2VkJykpLnRvQmUoZmFsc2UpO1xuXG5cdC8vIFx0Ly8gVXBkYXRlIFN0YXRlXG5cdC8vIFx0bGV0IG9uVmFsdWVDaGFuZ2U6IGFueSA9IGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmZpcnN0KCkucHJvcCgnb25WYWx1ZUNoYW5nZScpO1xuXHRcdFxuXG5cdC8vIFx0b25WYWx1ZUNoYW5nZShudWxsLCB0cnVlKTtcblx0Ly8gXHRjb21wb25lbnQudXBkYXRlKCk7XG5cdC8vIFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0Ly8gXHQvLyBOZXcgc3RhdGUgc2hvdWxkIGJlIHRydWVcblx0Ly8gXHQvL3N0YXRlIG9mIGNoZWNrZWQgaXMgcmV2ZXJlZCBub3dcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCdjaGVja2VkJykpLnRvQmUodHJ1ZSk7XG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmxhc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlKGZhbHNlKTtcblxuXHQvLyB9KTtcblxufSk7XG4iXSwidmVyc2lvbiI6M30=