"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const FormSwitchInput_1 = require("../FormSwitchInput");
const formik_1 = require("formik");
const index_1 = tslib_1.__importDefault(require("../../../index"));
const react_1 = tslib_1.__importDefault(require("react"));
const enzyme_1 = require("enzyme");
const enzyme_async_helpers_1 = require("enzyme-async-helpers");
const fieldProps = [{
        label: 'Auto Login',
        name: 'muzamil',
        type: 'switch',
        value: true,
        checked: true,
    },
    {
        label: 'Auto Login',
        name: 'auto-login',
        type: 'switch',
        value: false,
        checked: false
    },
];
// const initialValues = {
// 	'auto-login': true,
// };
describe('FormSwitchInput', () => {
    it('should a switch with value true', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': true }, onSubmit: onSubmit },
                react_1.default.createElement(FormSwitchInput_1.FormSwitchInput, Object.assign({}, fieldProps[0])))));
        await enzyme_async_helpers_1.waitForElement(component, FormSwitchInput_1.FormSwitchInput);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('Switch').last().prop('name')).toBe('auto-login');
        expect(component.find('Switch').last().prop('checked')).toBe(true);
        expect(component.find('Switch').last().prop('value')).toBe(true);
    });
    // it('should a switch with value false', async () => {
    // 	const onSubmit = jest.fn();
    // 	const component = mount(
    // 		<BlueBaseApp plugins={[Plugin]}>
    // 			<Formik initialValues={{ 'auto-login': false }} onSubmit={onSubmit}>
    // 				<FormSwitchInput {...fieldProps[1] as any} />
    // 			</Formik>
    // 		</BlueBaseApp>
    // 	);
    // 	await waitForElement(component as any, FormSwitchInput);
    // 	// expect(component).toMatchSnapshot();
    // 	// Check fields
    // 	expect(component.find('Switch').last().prop('name')).toBe('auto-login');
    // 	expect(component.find('Switch').last().prop('checked')).toBe(false);
    // 	expect(component.find('Switch').last().prop('value')).toBe(false);
    // });
    // it('should update switch value from onValueChange callback', async () => {
    // 	const onSubmit = jest.fn();
    // 	const component = mount(
    // 		<BlueBaseApp plugins={[Plugin]}>
    // 			<Formik initialValues={{ 'auto-login': false }} onSubmit={onSubmit}>
    // 				<FormSwitchInput {...fieldProps as any} />
    // 			</Formik>
    // 		</BlueBaseApp>
    // 	);
    // 	await waitForElement(component as any, FormSwitchInput);
    // 	// Initial state should be false
    // 	let SwitchComponent = component.find('Switch').last();
    // 	// Check fields
    // 	expect(SwitchComponent.prop('name')).toBe('auto-login');
    // 	expect(SwitchComponent.prop('checked')).toBe(false);
    // 	// Update State
    // 	const onValueChange: any = SwitchComponent.prop('onValueChange');
    // 	onValueChange(null, true);
    // 	component.update();
    // 	// expect(component).toMatchSnapshot();
    // 	// New state should be true
    // 	SwitchComponent = component.find('Switch').first();
    // 	expect(SwitchComponent.prop('name')).toBe('auto-login');
    // 	expect(SwitchComponent.prop('checked')).toBe(true);
    // });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1Td2l0Y2hJbnB1dC50ZXN0c3MudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE2QztBQUM3Qyx3REFBcUQ7QUFDckQsbUNBQWdDO0FBQ2hDLG1FQUFvQztBQUNwQywwREFBMEI7QUFDMUIsbUNBQStCO0FBQy9CLCtEQUFzRDtBQUV0RCxNQUFNLFVBQVUsR0FBRyxDQUFDO1FBQ25CLEtBQUssRUFBRSxZQUFZO1FBQ25CLElBQUksRUFBRSxTQUFTO1FBQ2YsSUFBSSxFQUFFLFFBQVE7UUFDZCxLQUFLLEVBQUcsSUFBSTtRQUNaLE9BQU8sRUFBRyxJQUFJO0tBR2Q7SUFDRDtRQUNDLEtBQUssRUFBRSxZQUFZO1FBQ25CLElBQUksRUFBRSxZQUFZO1FBQ2xCLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFHLEtBQUs7UUFDYixPQUFPLEVBQUcsS0FBSztLQUVmO0NBRUEsQ0FBQztBQUVGLDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDdkIsS0FBSztBQUdMLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFHaEMsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBRWhELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLFNBQVMsR0FBRyxjQUFLLENBQ3RCLDhCQUFDLGtCQUFXLElBQUMsT0FBTyxFQUFFLENBQUMsZUFBTSxDQUFDO1lBQzdCLDhCQUFDLGVBQU0sSUFBQyxhQUFhLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBRWhFLDhCQUFDLGlDQUFlLG9CQUFLLFVBQVUsQ0FBQyxDQUFDLENBQVEsRUFBSyxDQUN0QyxDQUNJLENBQ2QsQ0FBQztRQUVGLE1BQU0scUNBQWMsQ0FBQyxTQUFnQixFQUFFLGlDQUFlLENBQUMsQ0FBQztRQUV4RCx1Q0FBdUM7UUFFdkMsZUFBZTtRQUNmLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4RSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUMsQ0FBQyxDQUFDO0lBR0gsdURBQXVEO0lBRXZELCtCQUErQjtJQUUvQiw0QkFBNEI7SUFDNUIscUNBQXFDO0lBQ3JDLDBFQUEwRTtJQUMxRSxvREFBb0Q7SUFDcEQsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixNQUFNO0lBRU4sNERBQTREO0lBRTVELDJDQUEyQztJQUUzQyxtQkFBbUI7SUFDbkIsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSxzRUFBc0U7SUFFdEUsTUFBTTtJQUdOLDZFQUE2RTtJQUU3RSwrQkFBK0I7SUFFL0IsNEJBQTRCO0lBQzVCLHFDQUFxQztJQUNyQywwRUFBMEU7SUFDMUUsaURBQWlEO0lBQ2pELGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsTUFBTTtJQUVOLDREQUE0RDtJQUU1RCxvQ0FBb0M7SUFDcEMsMERBQTBEO0lBRTFELG1CQUFtQjtJQUNuQiw0REFBNEQ7SUFDNUQsd0RBQXdEO0lBRXhELG1CQUFtQjtJQUNuQixxRUFBcUU7SUFFckUsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QiwyQ0FBMkM7SUFFM0MsK0JBQStCO0lBQy9CLHVEQUF1RDtJQUN2RCw0REFBNEQ7SUFDNUQsdURBQXVEO0lBQ3ZELE1BQU07QUFDUCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9fX3Rlc3RzX18vRm9ybVN3aXRjaElucHV0LnRlc3Rzcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2VBcHAgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBGb3JtU3dpdGNoSW5wdXQgfSBmcm9tICcuLi9Gb3JtU3dpdGNoSW5wdXQnO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vLi4vLi4vaW5kZXgnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcbmltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuXG5jb25zdCBmaWVsZFByb3BzID0gW3tcblx0bGFiZWw6ICdBdXRvIExvZ2luJyxcblx0bmFtZTogJ211emFtaWwnLFxuXHR0eXBlOiAnc3dpdGNoJyxcblx0dmFsdWUgOiB0cnVlLFxuXHRjaGVja2VkIDogdHJ1ZSxcblx0XG5cbn0sXG57XG5cdGxhYmVsOiAnQXV0byBMb2dpbicsXG5cdG5hbWU6ICdhdXRvLWxvZ2luJyxcblx0dHlwZTogJ3N3aXRjaCcsXG5cdHZhbHVlIDogZmFsc2UsXG5cdGNoZWNrZWQgOiBmYWxzZVxuXG59LFxuXG5dO1xuXG4vLyBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xuLy8gXHQnYXV0by1sb2dpbic6IHRydWUsXG4vLyB9O1xuXG5cbmRlc2NyaWJlKCdGb3JtU3dpdGNoSW5wdXQnLCAoKSA9PiB7XG5cblxuXHRpdCgnc2hvdWxkIGEgc3dpdGNoIHdpdGggdmFsdWUgdHJ1ZScsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiB0cnVlIH19IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cblx0XHRcdFx0XHQ8Rm9ybVN3aXRjaElucHV0IHsuLi5maWVsZFByb3BzWzBdIGFzIGFueX0gIC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVN3aXRjaElucHV0KTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCkucHJvcCgnbmFtZScpKS50b0JlKCdhdXRvLWxvZ2luJyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCkucHJvcCgnY2hlY2tlZCcpKS50b0JlKHRydWUpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnU3dpdGNoJykubGFzdCgpLnByb3AoJ3ZhbHVlJykpLnRvQmUodHJ1ZSk7XG5cdH0pO1xuXG5cblx0Ly8gaXQoJ3Nob3VsZCBhIHN3aXRjaCB3aXRoIHZhbHVlIGZhbHNlJywgYXN5bmMgKCkgPT4ge1xuXG5cdC8vIFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0Ly8gXHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0Ly8gXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdC8vIFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17eyAnYXV0by1sb2dpbic6IGZhbHNlIH19IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdC8vIFx0XHRcdFx0PEZvcm1Td2l0Y2hJbnB1dCB7Li4uZmllbGRQcm9wc1sxXSBhcyBhbnl9IC8+XG5cdC8vIFx0XHRcdDwvRm9ybWlrPlxuXHQvLyBcdFx0PC9CbHVlQmFzZUFwcD5cblx0Ly8gXHQpO1xuXG5cdC8vIFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVN3aXRjaElucHV0KTtcblxuXHQvLyBcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdC8vIFx0Ly8gQ2hlY2sgZmllbGRzXG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCkucHJvcCgnbmFtZScpKS50b0JlKCdhdXRvLWxvZ2luJyk7XG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCkucHJvcCgnY2hlY2tlZCcpKS50b0JlKGZhbHNlKTtcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1N3aXRjaCcpLmxhc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlKGZhbHNlKTtcblxuXHQvLyB9KTtcblxuXG5cdC8vIGl0KCdzaG91bGQgdXBkYXRlIHN3aXRjaCB2YWx1ZSBmcm9tIG9uVmFsdWVDaGFuZ2UgY2FsbGJhY2snLCBhc3luYyAoKSA9PiB7XG5cblx0Ly8gXHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHQvLyBcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHQvLyBcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5cblx0Ly8gXHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXt7ICdhdXRvLWxvZ2luJzogZmFsc2UgfX0gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0Ly8gXHRcdFx0XHQ8Rm9ybVN3aXRjaElucHV0IHsuLi5maWVsZFByb3BzIGFzIGFueX0gLz5cblx0Ly8gXHRcdFx0PC9Gb3JtaWs+XG5cdC8vIFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHQvLyBcdCk7XG5cblx0Ly8gXHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtU3dpdGNoSW5wdXQpO1xuXG5cdC8vIFx0Ly8gSW5pdGlhbCBzdGF0ZSBzaG91bGQgYmUgZmFsc2Vcblx0Ly8gXHRsZXQgU3dpdGNoQ29tcG9uZW50ID0gY29tcG9uZW50LmZpbmQoJ1N3aXRjaCcpLmxhc3QoKTtcblxuXHQvLyBcdC8vIENoZWNrIGZpZWxkc1xuXHQvLyBcdGV4cGVjdChTd2l0Y2hDb21wb25lbnQucHJvcCgnbmFtZScpKS50b0JlKCdhdXRvLWxvZ2luJyk7XG5cdC8vIFx0ZXhwZWN0KFN3aXRjaENvbXBvbmVudC5wcm9wKCdjaGVja2VkJykpLnRvQmUoZmFsc2UpO1xuXG5cdC8vIFx0Ly8gVXBkYXRlIFN0YXRlXG5cdC8vIFx0Y29uc3Qgb25WYWx1ZUNoYW5nZTogYW55ID0gU3dpdGNoQ29tcG9uZW50LnByb3AoJ29uVmFsdWVDaGFuZ2UnKTtcblxuXHQvLyBcdG9uVmFsdWVDaGFuZ2UobnVsbCwgdHJ1ZSk7XG5cdC8vIFx0Y29tcG9uZW50LnVwZGF0ZSgpO1xuXHQvLyBcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdC8vIFx0Ly8gTmV3IHN0YXRlIHNob3VsZCBiZSB0cnVlXG5cdC8vIFx0U3dpdGNoQ29tcG9uZW50ID0gY29tcG9uZW50LmZpbmQoJ1N3aXRjaCcpLmZpcnN0KCk7XG5cdC8vIFx0ZXhwZWN0KFN3aXRjaENvbXBvbmVudC5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0Ly8gXHRleHBlY3QoU3dpdGNoQ29tcG9uZW50LnByb3AoJ2NoZWNrZWQnKSkudG9CZSh0cnVlKTtcblx0Ly8gfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==