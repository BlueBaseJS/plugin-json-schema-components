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
        name: 'auto-login',
        type: 'switch',
        value: true,
        checked: true
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
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': true, 'name': 'muzamil' }, onSubmit: onSubmit },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1Td2l0Y2hJbnB1dC50ZXN0c3MudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE2QztBQUM3Qyx3REFBcUQ7QUFDckQsbUNBQWdDO0FBQ2hDLG1FQUFvQztBQUNwQywwREFBMEI7QUFDMUIsbUNBQStCO0FBQy9CLCtEQUFzRDtBQUV0RCxNQUFNLFVBQVUsR0FBRyxDQUFDO1FBQ25CLEtBQUssRUFBRSxZQUFZO1FBQ25CLElBQUksRUFBRSxZQUFZO1FBQ2xCLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFHLElBQUk7UUFDWixPQUFPLEVBQUcsSUFBSTtLQUVkO0lBQ0Q7UUFDQyxLQUFLLEVBQUUsWUFBWTtRQUNuQixJQUFJLEVBQUUsWUFBWTtRQUNsQixJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRyxLQUFLO1FBQ2IsT0FBTyxFQUFHLEtBQUs7S0FFZjtDQUVBLENBQUM7QUFFRiwwQkFBMEI7QUFDMUIsdUJBQXVCO0FBQ3ZCLEtBQUs7QUFHTCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBR2hDLEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRSxLQUFLLElBQUksRUFBRTtRQUVoRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFM0IsTUFBTSxTQUFTLEdBQUcsY0FBSyxDQUN0Qiw4QkFBQyxrQkFBVyxJQUFDLE9BQU8sRUFBRSxDQUFDLGVBQU0sQ0FBQztZQUM3Qiw4QkFBQyxlQUFNLElBQUMsYUFBYSxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBRW5GLDhCQUFDLGlDQUFlLG9CQUFLLFVBQVUsQ0FBQyxDQUFDLENBQVEsRUFBSyxDQUN0QyxDQUNJLENBQ2QsQ0FBQztRQUVGLE1BQU0scUNBQWMsQ0FBQyxTQUFnQixFQUFFLGlDQUFlLENBQUMsQ0FBQztRQUV4RCx1Q0FBdUM7UUFFdkMsZUFBZTtRQUNmLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4RSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUMsQ0FBQyxDQUFDO0lBR0gsdURBQXVEO0lBRXZELCtCQUErQjtJQUUvQiw0QkFBNEI7SUFDNUIscUNBQXFDO0lBQ3JDLDBFQUEwRTtJQUMxRSxvREFBb0Q7SUFDcEQsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixNQUFNO0lBRU4sNERBQTREO0lBRTVELDJDQUEyQztJQUUzQyxtQkFBbUI7SUFDbkIsNEVBQTRFO0lBQzVFLHdFQUF3RTtJQUN4RSxzRUFBc0U7SUFFdEUsTUFBTTtJQUdOLDZFQUE2RTtJQUU3RSwrQkFBK0I7SUFFL0IsNEJBQTRCO0lBQzVCLHFDQUFxQztJQUNyQywwRUFBMEU7SUFDMUUsaURBQWlEO0lBQ2pELGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsTUFBTTtJQUVOLDREQUE0RDtJQUU1RCxvQ0FBb0M7SUFDcEMsMERBQTBEO0lBRTFELG1CQUFtQjtJQUNuQiw0REFBNEQ7SUFDNUQsd0RBQXdEO0lBRXhELG1CQUFtQjtJQUNuQixxRUFBcUU7SUFFckUsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QiwyQ0FBMkM7SUFFM0MsK0JBQStCO0lBQy9CLHVEQUF1RDtJQUN2RCw0REFBNEQ7SUFDNUQsdURBQXVEO0lBQ3ZELE1BQU07QUFDUCxDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9fX3Rlc3RzX18vRm9ybVN3aXRjaElucHV0LnRlc3Rzcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2VBcHAgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBGb3JtU3dpdGNoSW5wdXQgfSBmcm9tICcuLi9Gb3JtU3dpdGNoSW5wdXQnO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vLi4vLi4vaW5kZXgnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcbmltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuXG5jb25zdCBmaWVsZFByb3BzID0gW3tcblx0bGFiZWw6ICdBdXRvIExvZ2luJyxcblx0bmFtZTogJ2F1dG8tbG9naW4nLFxuXHR0eXBlOiAnc3dpdGNoJyxcblx0dmFsdWUgOiB0cnVlLFxuXHRjaGVja2VkIDogdHJ1ZVxuXG59LFxue1xuXHRsYWJlbDogJ0F1dG8gTG9naW4nLFxuXHRuYW1lOiAnYXV0by1sb2dpbicsXG5cdHR5cGU6ICdzd2l0Y2gnLFxuXHR2YWx1ZSA6IGZhbHNlLFxuXHRjaGVja2VkIDogZmFsc2VcblxufSxcblxuXTtcblxuLy8gY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcbi8vIFx0J2F1dG8tbG9naW4nOiB0cnVlLFxuLy8gfTtcblxuXG5kZXNjcmliZSgnRm9ybVN3aXRjaElucHV0JywgKCkgPT4ge1xuXG5cblx0aXQoJ3Nob3VsZCBhIHN3aXRjaCB3aXRoIHZhbHVlIHRydWUnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXt7ICdhdXRvLWxvZ2luJzogdHJ1ZSwgJ25hbWUnIDonbXV6YW1pbCcgfX0gb25TdWJtaXQ9e29uU3VibWl0fT5cblxuXHRcdFx0XHRcdDxGb3JtU3dpdGNoSW5wdXQgey4uLmZpZWxkUHJvcHNbMF0gYXMgYW55fSAgLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtU3dpdGNoSW5wdXQpO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1N3aXRjaCcpLmxhc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1N3aXRjaCcpLmxhc3QoKS5wcm9wKCdjaGVja2VkJykpLnRvQmUodHJ1ZSk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCkucHJvcCgndmFsdWUnKSkudG9CZSh0cnVlKTtcblx0fSk7XG5cblxuXHQvLyBpdCgnc2hvdWxkIGEgc3dpdGNoIHdpdGggdmFsdWUgZmFsc2UnLCBhc3luYyAoKSA9PiB7XG5cblx0Ly8gXHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHQvLyBcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHQvLyBcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5cblx0Ly8gXHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXt7ICdhdXRvLWxvZ2luJzogZmFsc2UgfX0gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0Ly8gXHRcdFx0XHQ8Rm9ybVN3aXRjaElucHV0IHsuLi5maWVsZFByb3BzWzFdIGFzIGFueX0gLz5cblx0Ly8gXHRcdFx0PC9Gb3JtaWs+XG5cdC8vIFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHQvLyBcdCk7XG5cblx0Ly8gXHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtU3dpdGNoSW5wdXQpO1xuXG5cdC8vIFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0Ly8gXHQvLyBDaGVjayBmaWVsZHNcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1N3aXRjaCcpLmxhc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1N3aXRjaCcpLmxhc3QoKS5wcm9wKCdjaGVja2VkJykpLnRvQmUoZmFsc2UpO1xuXHQvLyBcdGV4cGVjdChjb21wb25lbnQuZmluZCgnU3dpdGNoJykubGFzdCgpLnByb3AoJ3ZhbHVlJykpLnRvQmUoZmFsc2UpO1xuXG5cdC8vIH0pO1xuXG5cblx0Ly8gaXQoJ3Nob3VsZCB1cGRhdGUgc3dpdGNoIHZhbHVlIGZyb20gb25WYWx1ZUNoYW5nZSBjYWxsYmFjaycsIGFzeW5jICgpID0+IHtcblxuXHQvLyBcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdC8vIFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdC8vIFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHQvLyBcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiBmYWxzZSB9fSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHQvLyBcdFx0XHRcdDxGb3JtU3dpdGNoSW5wdXQgey4uLmZpZWxkUHJvcHMgYXMgYW55fSAvPlxuXHQvLyBcdFx0XHQ8L0Zvcm1paz5cblx0Ly8gXHRcdDwvQmx1ZUJhc2VBcHA+XG5cdC8vIFx0KTtcblxuXHQvLyBcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1Td2l0Y2hJbnB1dCk7XG5cblx0Ly8gXHQvLyBJbml0aWFsIHN0YXRlIHNob3VsZCBiZSBmYWxzZVxuXHQvLyBcdGxldCBTd2l0Y2hDb21wb25lbnQgPSBjb21wb25lbnQuZmluZCgnU3dpdGNoJykubGFzdCgpO1xuXG5cdC8vIFx0Ly8gQ2hlY2sgZmllbGRzXG5cdC8vIFx0ZXhwZWN0KFN3aXRjaENvbXBvbmVudC5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0Ly8gXHRleHBlY3QoU3dpdGNoQ29tcG9uZW50LnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cblx0Ly8gXHQvLyBVcGRhdGUgU3RhdGVcblx0Ly8gXHRjb25zdCBvblZhbHVlQ2hhbmdlOiBhbnkgPSBTd2l0Y2hDb21wb25lbnQucHJvcCgnb25WYWx1ZUNoYW5nZScpO1xuXG5cdC8vIFx0b25WYWx1ZUNoYW5nZShudWxsLCB0cnVlKTtcblx0Ly8gXHRjb21wb25lbnQudXBkYXRlKCk7XG5cdC8vIFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0Ly8gXHQvLyBOZXcgc3RhdGUgc2hvdWxkIGJlIHRydWVcblx0Ly8gXHRTd2l0Y2hDb21wb25lbnQgPSBjb21wb25lbnQuZmluZCgnU3dpdGNoJykuZmlyc3QoKTtcblx0Ly8gXHRleHBlY3QoU3dpdGNoQ29tcG9uZW50LnByb3AoJ25hbWUnKSkudG9CZSgnYXV0by1sb2dpbicpO1xuXHQvLyBcdGV4cGVjdChTd2l0Y2hDb21wb25lbnQucHJvcCgnY2hlY2tlZCcpKS50b0JlKHRydWUpO1xuXHQvLyB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9