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
    value: true
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
    it('should a get value i.e false', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': false }, onSubmit: onSubmit },
                react_1.default.createElement(FormCheckboxInput_1.FormCheckboxInput, Object.assign({}, fieldProps)))));
        await enzyme_async_helpers_1.waitForElement(component, FormCheckboxInput_1.FormCheckboxInput);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('Checkbox').last().prop('name')).toBe('auto-login');
        expect(component.find('Checkbox').last().prop('value')).toBe(false);
    });
    it('should a get value i.e false', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': false }, onSubmit: onSubmit },
                react_1.default.createElement(FormCheckboxInput_1.FormCheckboxInput, Object.assign({}, fieldProps, { value: true })))));
        await enzyme_async_helpers_1.waitForElement(component, FormCheckboxInput_1.FormCheckboxInput);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('Checkbox').last().prop('name')).toBe('auto-login');
        expect(component.find('Checkbox').last().prop('value')).toBe(true);
    });
    it('should update checkbox value from onValueChange callback', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': false }, onSubmit: onSubmit },
                react_1.default.createElement(FormCheckboxInput_1.FormCheckboxInput, Object.assign({}, fieldProps)))));
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
    it('should update checkbox value from onValueChange callback', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': true }, onSubmit: onSubmit },
                react_1.default.createElement(FormCheckboxInput_1.FormCheckboxInput, Object.assign({}, fieldProps2)))));
        await enzyme_async_helpers_1.waitForElement(component, FormCheckboxInput_1.FormCheckboxInput);
        // Initial state should be false
        // Check fields
        // expect(component).toMatchSnapshot();
        expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
        expect(component.find('Checkbox').first().prop('checked')).toBe(true);
        // Update State
        let onValueChange = component.find('Checkbox').first().prop('onValueChange');
        onValueChange(false, false);
        component.update();
        onValueChange = 0;
        component.update();
        // expect(component).toMatchSnapshot();
        // New state should be true
        expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
        // expect(component.find('Checkbox').first().prop('checked')).toBe(false);
        // expect(component.find('Checkbox').last().prop('value')).toBe(false);
    });
    it('should update checkbox value from onValueChange callback', async () => {
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
        onValueChange(false, false);
        component.update();
        // expect(component).toMatchSnapshot();
        // New state should be true
        //state of checked is revered now
        expect(component.find('Checkbox').first().prop('name')).toBe('auto-login');
        expect(component.find('Checkbox').first().prop('checked')).toBe(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1DaGVja2JveElucHV0LnRlc3QudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE2QztBQUM3Qyw0REFBeUQ7QUFDekQsbUNBQWdDO0FBQ2hDLG1FQUFvQztBQUNwQywwREFBMEI7QUFDMUIsNEVBQTRFO0FBQzVFLDhGQUE0RDtBQUM1RCxtQ0FBK0I7QUFDL0IsK0RBQXNEO0FBRXRELE1BQU0sVUFBVSxHQUFHO0lBQ2xCLEtBQUssRUFBRSxZQUFZO0lBQ25CLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSxVQUFVO0lBQ2hCLEtBQUssRUFBRyxLQUFLO0NBQ2IsQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUFHO0lBQ25CLEtBQUssRUFBRSxZQUFZO0lBQ25CLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSxVQUFVO0lBQ2hCLEtBQUssRUFBRyxJQUFJO0NBQ1osQ0FBQztBQUVGLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFHbEMsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBRWxELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLFNBQVMsR0FBRyxjQUFLLENBQ3RCLDhCQUFDLGtCQUFXLElBQUMsT0FBTyxFQUFFLENBQUMsZUFBTSxFQUFFLDRCQUFnQixDQUFDO1lBQy9DLDhCQUFDLGVBQU0sSUFBQyxhQUFhLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBQ2hFLDhCQUFDLHFDQUFpQixvQkFBSyxVQUFpQixFQUFJLENBQ3BDLENBQ0ksQ0FDZCxDQUFDO1FBRUYsTUFBTSxxQ0FBYyxDQUFDLFNBQWdCLEVBQUUscUNBQWlCLENBQUMsQ0FBQztRQUUxRCx1Q0FBdUM7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QUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0UsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZFLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwRSxDQUFDLENBQUMsQ0FBQztJQUVILHlGQUF5RjtJQUV6RiwrQkFBK0I7SUFFL0IsNEJBQTRCO0lBQzVCLHVEQUF1RDtJQUN2RCwwRUFBMEU7SUFDMUUsbURBQW1EO0lBQ25ELGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsTUFBTTtJQUVOLDhEQUE4RDtJQUU5RCxvQ0FBb0M7SUFFcEMsbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQywrRUFBK0U7SUFDL0UsMkVBQTJFO0lBRTNFLG1CQUFtQjtJQUNuQix3RkFBd0Y7SUFFeEYsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QiwyQ0FBMkM7SUFFM0MsK0JBQStCO0lBQy9CLCtFQUErRTtJQUMvRSwyRUFBMkU7SUFDM0UsdUVBQXVFO0lBRXZFLE1BQU07QUFDUCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9fX3Rlc3RzX18vRm9ybUNoZWNrYm94SW5wdXQudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2VBcHAgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ2hlY2tib3hJbnB1dCB9IGZyb20gJy4uL0Zvcm1DaGVja2JveElucHV0JztcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgUGx1Z2luIGZyb20gJy4uLy4uLy4uL2luZGV4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgUmVhY3ROYXRpdmVQYXBlclBsdWdpbiBmcm9tICdAYmx1ZWJhc2UvcGx1Z2luLXJlYWN0LW5hdGl2ZS1wYXBlcic7XG5pbXBvcnQgTWF0ZXJpYWxVSVBsdWdpbiBmcm9tICdAYmx1ZWJhc2UvcGx1Z2luLW1hdGVyaWFsLXVpJztcbmltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcbmltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuXG5jb25zdCBmaWVsZFByb3BzID0ge1xuXHRsYWJlbDogJ0F1dG8gTG9naW4nLFxuXHRuYW1lOiAnYXV0by1sb2dpbicsXG5cdHR5cGU6ICdjaGVja2JveCcsXG5cdHZhbHVlIDogZmFsc2Vcbn07XG5cbmNvbnN0IGZpZWxkUHJvcHMyID0ge1xuXHRsYWJlbDogJ0F1dG8gTG9naW4nLFxuXHRuYW1lOiAnYXV0by1sb2dpbicsXG5cdHR5cGU6ICdjaGVja2JveCcsXG5cdHZhbHVlIDogdHJ1ZVxufTtcblxuZGVzY3JpYmUoJ0Zvcm1DaGVja2JveElucHV0JywgKCkgPT4ge1xuXG5cblx0aXQoJ3Nob3VsZCBhIGNoZWNrYm94IHdpdGggdmFsdWUgdHJ1ZScsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiB0cnVlIH19IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1DaGVja2JveElucHV0IHsuLi5maWVsZFByb3BzIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtQ2hlY2tib3hJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5sYXN0KCkucHJvcCgnbmFtZScpKS50b0JlKCdhdXRvLWxvZ2luJyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmxhc3QoKS5wcm9wKCdjaGVja2VkJykpLnRvQmUodHJ1ZSk7XG5cdH0pO1xuXG5cblx0aXQoJ3Nob3VsZCBhIGNoZWNrYm94IHdpdGggdmFsdWUgZmFsc2UnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW4sIE1hdGVyaWFsVUlQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXt7ICdhdXRvLWxvZ2luJzogZmFsc2UgfX0gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybUNoZWNrYm94SW5wdXQgey4uLmZpZWxkUHJvcHMgYXMgYW55fSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1DaGVja2JveElucHV0KTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmxhc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykubGFzdCgpLnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cdH0pO1xuXG5cdGl0KCdzaG91bGQgYSBnZXQgdmFsdWUgaS5lIGZhbHNlJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luLCBNYXRlcmlhbFVJUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17eyAnYXV0by1sb2dpbic6IGZhbHNlIH19IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1DaGVja2JveElucHV0IHsuLi5maWVsZFByb3BzIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtQ2hlY2tib3hJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5sYXN0KCkucHJvcCgnbmFtZScpKS50b0JlKCdhdXRvLWxvZ2luJyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmxhc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlKGZhbHNlKTtcblx0fSk7XG5cblxuXHRpdCgnc2hvdWxkIGEgZ2V0IHZhbHVlIGkuZSBmYWxzZScsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiBmYWxzZSB9fSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtQ2hlY2tib3hJbnB1dCB7Li4uZmllbGRQcm9wcyBhcyBhbnl9IHZhbHVlID0ge3RydWV9IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybUNoZWNrYm94SW5wdXQpO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykubGFzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnYXV0by1sb2dpbicpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5sYXN0KCkucHJvcCgndmFsdWUnKSkudG9CZSh0cnVlKTtcblx0fSk7XG5cblxuXHRpdCgnc2hvdWxkIHVwZGF0ZSBjaGVja2JveCB2YWx1ZSBmcm9tIG9uVmFsdWVDaGFuZ2UgY2FsbGJhY2snLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luLCBNYXRlcmlhbFVJUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17eyAnYXV0by1sb2dpbic6IGZhbHNlIH19IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1DaGVja2JveElucHV0IHsuLi5maWVsZFByb3BzIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtQ2hlY2tib3hJbnB1dCk7XG5cblx0XHQvLyBJbml0aWFsIHN0YXRlIHNob3VsZCBiZSBmYWxzZVxuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmZpcnN0KCkucHJvcCgnbmFtZScpKS50b0JlKCdhdXRvLWxvZ2luJyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmZpcnN0KCkucHJvcCgnY2hlY2tlZCcpKS50b0JlKGZhbHNlKTtcblxuXHRcdC8vIFVwZGF0ZSBTdGF0ZVxuXHRcdGNvbnN0IG9uVmFsdWVDaGFuZ2U6IGFueSA9IGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmZpcnN0KCkucHJvcCgnb25WYWx1ZUNoYW5nZScpO1xuXG5cdFx0b25WYWx1ZUNoYW5nZShmYWxzZSwgZmFsc2UpO1xuXHRcdGNvbXBvbmVudC51cGRhdGUoKTtcblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIE5ldyBzdGF0ZSBzaG91bGQgYmUgdHJ1ZVxuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnYXV0by1sb2dpbicpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmxhc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlKGZhbHNlKTtcblxuXHR9KTtcblxuXG5cdGl0KCdzaG91bGQgdXBkYXRlIGNoZWNrYm94IHZhbHVlIGZyb20gb25WYWx1ZUNoYW5nZSBjYWxsYmFjaycsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW4sIE1hdGVyaWFsVUlQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXt7ICdhdXRvLWxvZ2luJzogdHJ1ZSB9fSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtQ2hlY2tib3hJbnB1dCB7Li4uZmllbGRQcm9wczIgYXMgYW55fSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1DaGVja2JveElucHV0KTtcblxuXHRcdC8vIEluaXRpYWwgc3RhdGUgc2hvdWxkIGJlIGZhbHNlXG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCdjaGVja2VkJykpLnRvQmUodHJ1ZSk7XG5cblx0XHQvLyBVcGRhdGUgU3RhdGVcblx0XHRsZXQgb25WYWx1ZUNoYW5nZTogYW55ID0gY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCdvblZhbHVlQ2hhbmdlJyk7XG5cdFx0XG5cblx0XHRvblZhbHVlQ2hhbmdlKGZhbHNlLCBmYWxzZSk7XG5cdFx0Y29tcG9uZW50LnVwZGF0ZSgpO1xuXHRcdG9uVmFsdWVDaGFuZ2UgPSAwO1xuXHRcdGNvbXBvbmVudC51cGRhdGUoKTtcblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIE5ldyBzdGF0ZSBzaG91bGQgYmUgdHJ1ZVxuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnYXV0by1sb2dpbicpO1xuXHRcdC8vIGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmxhc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlKGZhbHNlKTtcblxuXHR9KTtcblxuXHRpdCgnc2hvdWxkIHVwZGF0ZSBjaGVja2JveCB2YWx1ZSBmcm9tIG9uVmFsdWVDaGFuZ2UgY2FsbGJhY2snLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luLCBNYXRlcmlhbFVJUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17eyAnYXV0by1sb2dpbic6IHRydWUgfX0gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybUNoZWNrYm94SW5wdXQgey4uLmZpZWxkUHJvcHMyIGFzIGFueX0gb25WYWx1ZUNoYW5nZT17MH0vPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1DaGVja2JveElucHV0KTtcblxuXHRcdC8vIEluaXRpYWwgc3RhdGUgc2hvdWxkIGJlIGZhbHNlXG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCdjaGVja2VkJykpLnRvQmUodHJ1ZSk7XG5cblx0XHQvLyBVcGRhdGUgU3RhdGVcblx0XHRsZXQgb25WYWx1ZUNoYW5nZTogYW55ID0gY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCdvblZhbHVlQ2hhbmdlJyk7XG5cdFx0XG5cblx0XHRvblZhbHVlQ2hhbmdlKGZhbHNlLCBmYWxzZSk7XG5cdFx0Y29tcG9uZW50LnVwZGF0ZSgpO1xuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gTmV3IHN0YXRlIHNob3VsZCBiZSB0cnVlXG5cdFx0Ly9zdGF0ZSBvZiBjaGVja2VkIGlzIHJldmVyZWQgbm93XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmZpcnN0KCkucHJvcCgnbmFtZScpKS50b0JlKCdhdXRvLWxvZ2luJyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdDaGVja2JveCcpLmZpcnN0KCkucHJvcCgnY2hlY2tlZCcpKS50b0JlKGZhbHNlKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykubGFzdCgpLnByb3AoJ3ZhbHVlJykpLnRvQmUodHJ1ZSk7XG5cblx0fSk7XG5cblx0Ly8gaXQoJ3Nob3VsZCB1cGRhdGUgY2hlY2tib3ggdmFsdWUgZnJvbSBvblZhbHVlQ2hhbmdlIGNhbGxiYWNrIHdpdGggbnVsbCcsIGFzeW5jICgpID0+IHtcblxuXHQvLyBcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdC8vIFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdC8vIFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHQvLyBcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiBmYWxzZSB9fSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHQvLyBcdFx0XHRcdDxGb3JtQ2hlY2tib3hJbnB1dCB7Li4uZmllbGRQcm9wcyBhcyBhbnl9IC8+XG5cdC8vIFx0XHRcdDwvRm9ybWlrPlxuXHQvLyBcdFx0PC9CbHVlQmFzZUFwcD5cblx0Ly8gXHQpO1xuXG5cdC8vIFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybUNoZWNrYm94SW5wdXQpO1xuXG5cdC8vIFx0Ly8gSW5pdGlhbCBzdGF0ZSBzaG91bGQgYmUgZmFsc2VcblxuXHQvLyBcdC8vIENoZWNrIGZpZWxkc1xuXHQvLyBcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXHQvLyBcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnYXV0by1sb2dpbicpO1xuXHQvLyBcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cblx0Ly8gXHQvLyBVcGRhdGUgU3RhdGVcblx0Ly8gXHRjb25zdCBvblZhbHVlQ2hhbmdlOiBhbnkgPSBjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5maXJzdCgpLnByb3AoJ29uVmFsdWVDaGFuZ2UnKTtcblxuXHQvLyBcdG9uVmFsdWVDaGFuZ2UoZmFsc2UsIGZhbHNlKTtcblx0Ly8gXHRjb21wb25lbnQudXBkYXRlKCk7XG5cdC8vIFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0Ly8gXHQvLyBOZXcgc3RhdGUgc2hvdWxkIGJlIHRydWVcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0NoZWNrYm94JykuZmlyc3QoKS5wcm9wKCdjaGVja2VkJykpLnRvQmUoZmFsc2UpO1xuXHQvLyBcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQ2hlY2tib3gnKS5sYXN0KCkucHJvcCgndmFsdWUnKSkudG9CZSh0cnVlKTtcblxuXHQvLyB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9