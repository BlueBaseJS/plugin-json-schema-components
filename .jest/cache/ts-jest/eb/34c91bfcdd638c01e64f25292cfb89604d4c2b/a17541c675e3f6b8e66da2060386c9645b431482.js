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
    value: true
};
// const initialValues = {
// 	'auto-login': true,
// };
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
    // it('should a get value i.e true', async () => {
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
    // 	expect(component.find('Checkbox').last().prop('value')).toBe(true);
    // });\
    // it('should a get value i.e false', async () => {
    // 	const onSubmit = jest.fn();
    // 	const component = mount(
    // 		<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
    // 			<Formik initialValues={{ 'auto-login': false }} onSubmit={onSubmit}>
    // 				<FormCheckboxInput {...fieldProps as any} value = {false} />
    // 			</Formik>
    // 		</BlueBaseApp>
    // 	);
    // 	await waitForElement(component as any, FormCheckboxInput);
    // 	// expect(component).toMatchSnapshot();
    // 	// Check fields
    // 	expect(component.find('Checkbox').last().prop('name')).toBe('auto-login');
    // 	expect(component.find('Checkbox').last().prop('value')).toBe(false);
    // });
    // it('should update checkbox value from onValueChange callback', async () => {
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
    // 	onValueChange(true, true);
    // 	component.update();
    // 	// expect(component).toMatchSnapshot();
    // 	// New state should be true
    // 	expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
    // 	expect(component.find('Checkbox').first().prop('checked')).toBe(true);
    // 	expect(component.find('Checkbox').last().prop('value')).toBe(true);
    // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1DaGVja2JveElucHV0LnRlc3QudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE2QztBQUM3Qyw0REFBeUQ7QUFDekQsbUNBQWdDO0FBQ2hDLG1FQUFvQztBQUNwQywwREFBMEI7QUFDMUIsNEVBQTRFO0FBQzVFLDhGQUE0RDtBQUM1RCxtQ0FBK0I7QUFDL0IsK0RBQXNEO0FBRXRELE1BQU0sVUFBVSxHQUFHO0lBQ2xCLEtBQUssRUFBRSxZQUFZO0lBQ25CLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSxVQUFVO0lBQ2hCLEtBQUssRUFBRyxJQUFJO0NBQ1osQ0FBQztBQUVGLDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDdkIsS0FBSztBQUdMLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFHbEMsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBRWxELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLFNBQVMsR0FBRyxjQUFLLENBQ3RCLDhCQUFDLGtCQUFXLElBQUMsT0FBTyxFQUFFLENBQUMsZUFBTSxFQUFFLDRCQUFnQixDQUFDO1lBQy9DLDhCQUFDLGVBQU0sSUFBQyxhQUFhLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBQ2hFLDhCQUFDLHFDQUFpQixvQkFBSyxVQUFpQixFQUFJLENBQ3BDLENBQ0ksQ0FDZCxDQUFDO1FBRUYsTUFBTSxxQ0FBYyxDQUFDLFNBQWdCLEVBQUUscUNBQWlCLENBQUMsQ0FBQztRQUUxRCx1Q0FBdUM7UUFFdkMsZUFBZTtRQUNmLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElB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RUFBK0U7SUFDL0UsMkVBQTJFO0lBQzNFLHVFQUF1RTtJQUV2RSxNQUFNO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1DaGVja2JveElucHV0LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlQXBwIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNoZWNrYm94SW5wdXQgfSBmcm9tICcuLi9Gb3JtQ2hlY2tib3hJbnB1dCc7XG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi8uLi8uLi9pbmRleCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFJlYWN0TmF0aXZlUGFwZXJQbHVnaW4gZnJvbSAnQGJsdWViYXNlL3BsdWdpbi1yZWFjdC1uYXRpdmUtcGFwZXInO1xuaW1wb3J0IE1hdGVyaWFsVUlQbHVnaW4gZnJvbSAnQGJsdWViYXNlL3BsdWdpbi1tYXRlcmlhbC11aSc7XG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcblxuY29uc3QgZmllbGRQcm9wcyA9IHtcblx0bGFiZWw6ICdBdXRvIExvZ2luJyxcblx0bmFtZTogJ2F1dG8tbG9naW4nLFxuXHR0eXBlOiAnY2hlY2tib3gnLFxuXHR2YWx1ZSA6IHRydWVcbn07XG5cbi8vIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG4vLyBcdCdhdXRvLWxvZ2luJzogdHJ1ZSxcbi8vIH07XG5cblxuZGVzY3JpYmUoJ0Zvcm1DaGVja2JveElucHV0JywgKCkgPT4ge1xuXG5cblx0aXQoJ3Nob3VsZCBhIGNoZWNrYm94IHdpdGggdmFsdWUgdHJ1ZScsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiB0cnVlIH19IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1DaGVja2JveElucHV0IHsuLi5maWVsZFByb3BzIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtQ2hlY2tib3hJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5sYXN0KCkucHJvcCgnbmFtZScpKS50b0JlKCdhdXRvLWxvZ2luJyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmxhc3QoKS5wcm9wKCdjaGVja2VkJykpLnRvQmUodHJ1ZSk7XG5cdH0pO1xuXG5cblx0aXQoJ3Nob3VsZCBhIGNoZWNrYm94IHdpdGggdmFsdWUgZmFsc2UnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW4sIE1hdGVyaWFsVUlQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXt7ICdhdXRvLWxvZ2luJzogZmFsc2UgfX0gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybUNoZWNrYm94SW5wdXQgey4uLmZpZWxkUHJvcHMgYXMgYW55fSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1DaGVja2JveElucHV0KTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmxhc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykubGFzdCgpLnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cdH0pO1xuXG5cdC8vIGl0KCdzaG91bGQgYSBnZXQgdmFsdWUgaS5lIHRydWUnLCBhc3luYyAoKSA9PiB7XG5cblx0Ly8gXHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHQvLyBcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHQvLyBcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW4sIE1hdGVyaWFsVUlQbHVnaW5dfT5cblx0Ly8gXHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXt7ICdhdXRvLWxvZ2luJzogZmFsc2UgfX0gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0Ly8gXHRcdFx0XHQ8Rm9ybUNoZWNrYm94SW5wdXQgey4uLmZpZWxkUHJvcHMgYXMgYW55fSAvPlxuXHQvLyBcdFx0XHQ8L0Zvcm1paz5cblx0Ly8gXHRcdDwvQmx1ZUJhc2VBcHA+XG5cdC8vIFx0KTtcblxuXHQvLyBcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1DaGVja2JveElucHV0KTtcblxuXHQvLyBcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdC8vIFx0Ly8gQ2hlY2sgZmllbGRzXG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmxhc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykubGFzdCgpLnByb3AoJ3ZhbHVlJykpLnRvQmUodHJ1ZSk7XG5cdC8vIH0pO1xcXG5cblxuXHQvLyBpdCgnc2hvdWxkIGEgZ2V0IHZhbHVlIGkuZSBmYWxzZScsIGFzeW5jICgpID0+IHtcblxuXHQvLyBcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdC8vIFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdC8vIFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHQvLyBcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiBmYWxzZSB9fSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHQvLyBcdFx0XHRcdDxGb3JtQ2hlY2tib3hJbnB1dCB7Li4uZmllbGRQcm9wcyBhcyBhbnl9IHZhbHVlID0ge2ZhbHNlfSAvPlxuXHQvLyBcdFx0XHQ8L0Zvcm1paz5cblx0Ly8gXHRcdDwvQmx1ZUJhc2VBcHA+XG5cdC8vIFx0KTtcblxuXHQvLyBcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1DaGVja2JveElucHV0KTtcblxuXHQvLyBcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdC8vIFx0Ly8gQ2hlY2sgZmllbGRzXG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmxhc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykubGFzdCgpLnByb3AoJ3ZhbHVlJykpLnRvQmUoZmFsc2UpO1xuXHQvLyB9KTtcblxuXG5cdC8vIGl0KCdzaG91bGQgdXBkYXRlIGNoZWNrYm94IHZhbHVlIGZyb20gb25WYWx1ZUNoYW5nZSBjYWxsYmFjaycsIGFzeW5jICgpID0+IHtcblxuXHQvLyBcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdC8vIFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdC8vIFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHQvLyBcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiBmYWxzZSB9fSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHQvLyBcdFx0XHRcdDxGb3JtQ2hlY2tib3hJbnB1dCB7Li4uZmllbGRQcm9wcyBhcyBhbnl9IC8+XG5cdC8vIFx0XHRcdDwvRm9ybWlrPlxuXHQvLyBcdFx0PC9CbHVlQmFzZUFwcD5cblx0Ly8gXHQpO1xuXG5cdC8vIFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybUNoZWNrYm94SW5wdXQpO1xuXG5cdC8vIFx0Ly8gSW5pdGlhbCBzdGF0ZSBzaG91bGQgYmUgZmFsc2VcblxuXHQvLyBcdC8vIENoZWNrIGZpZWxkc1xuXHQvLyBcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXHQvLyBcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnYXV0by1sb2dpbicpO1xuXHQvLyBcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cblx0Ly8gXHQvLyBVcGRhdGUgU3RhdGVcblx0Ly8gXHRjb25zdCBvblZhbHVlQ2hhbmdlOiBhbnkgPSBjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ29uVmFsdWVDaGFuZ2UnKTtcblxuXHQvLyBcdG9uVmFsdWVDaGFuZ2UodHJ1ZSwgdHJ1ZSk7XG5cdC8vIFx0Y29tcG9uZW50LnVwZGF0ZSgpO1xuXHQvLyBcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdC8vIFx0Ly8gTmV3IHN0YXRlIHNob3VsZCBiZSB0cnVlXG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmZpcnN0KCkucHJvcCgnbmFtZScpKS50b0JlKCdhdXRvLWxvZ2luJyk7XG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmZpcnN0KCkucHJvcCgnY2hlY2tlZCcpKS50b0JlKHRydWUpO1xuXHQvLyBcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5sYXN0KCkucHJvcCgndmFsdWUnKSkudG9CZSh0cnVlKTtcblxuXHQvLyB9KTtcblxuXG5cdC8vIGl0KCdzaG91bGQgdXBkYXRlIGNoZWNrYm94IHZhbHVlIGZyb20gb25WYWx1ZUNoYW5nZSBjYWxsYmFjayB3aXRoIG51bGwnLCBhc3luYyAoKSA9PiB7XG5cblx0Ly8gXHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHQvLyBcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHQvLyBcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW4sIE1hdGVyaWFsVUlQbHVnaW5dfT5cblx0Ly8gXHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXt7ICdhdXRvLWxvZ2luJzogZmFsc2UgfX0gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0Ly8gXHRcdFx0XHQ8Rm9ybUNoZWNrYm94SW5wdXQgey4uLmZpZWxkUHJvcHMgYXMgYW55fSAvPlxuXHQvLyBcdFx0XHQ8L0Zvcm1paz5cblx0Ly8gXHRcdDwvQmx1ZUJhc2VBcHA+XG5cdC8vIFx0KTtcblxuXHQvLyBcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1DaGVja2JveElucHV0KTtcblxuXHQvLyBcdC8vIEluaXRpYWwgc3RhdGUgc2hvdWxkIGJlIGZhbHNlXG5cblx0Ly8gXHQvLyBDaGVjayBmaWVsZHNcblx0Ly8gXHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCdjaGVja2VkJykpLnRvQmUoZmFsc2UpO1xuXG5cdC8vIFx0Ly8gVXBkYXRlIFN0YXRlXG5cdC8vIFx0Y29uc3Qgb25WYWx1ZUNoYW5nZTogYW55ID0gY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCdvblZhbHVlQ2hhbmdlJyk7XG5cblx0Ly8gXHRvblZhbHVlQ2hhbmdlKGZhbHNlLCBmYWxzZSk7XG5cdC8vIFx0Y29tcG9uZW50LnVwZGF0ZSgpO1xuXHQvLyBcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdC8vIFx0Ly8gTmV3IHN0YXRlIHNob3VsZCBiZSB0cnVlXG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmZpcnN0KCkucHJvcCgnbmFtZScpKS50b0JlKCdhdXRvLWxvZ2luJyk7XG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmZpcnN0KCkucHJvcCgnY2hlY2tlZCcpKS50b0JlKGZhbHNlKTtcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykubGFzdCgpLnByb3AoJ3ZhbHVlJykpLnRvQmUodHJ1ZSk7XG5cblx0Ly8gfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==