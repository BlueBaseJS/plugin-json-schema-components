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
        value: false,
        checked: true,
    },
    {
        label: 'Auto Login',
        name: 'auto-login',
        type: 'switch',
        value: true,
        checked: false
    }];
describe('FormSwitchInput', () => {
    // it('should a switch with value true', async () => {
    // 	const onSubmit = jest.fn();
    // 	const component = mount(
    // 		<BlueBaseApp plugins={[Plugin]}>
    // 			<Formik initialValues={{ 'auto-login': true}} onSubmit={onSubmit} >
    // 				<FormSwitchInput {...fieldProps[0] as any} />
    // 			</Formik>
    // 		</BlueBaseApp>
    // 	);
    // 	await waitForElement(component as any, FormSwitchInput);
    // 	// expect(component).toMatchSnapshot();
    // 	// Check fields
    // 	expect(component.find('Switch').last().prop('name')).toBe('muzamil');
    // 	expect(component.find('Switch').last().prop('checked')).toBe(false);
    // 	expect(component.find('Switch').last().prop('value')).toBe(false);
    // });
    // it('should a switch with value false', async () => {
    // 	const onSubmit = jest.fn();
    // 	const component = mount(
    // 		<BlueBaseApp plugins={[Plugin]}>
    // 			<Formik initialValues={{ 'auto-login': false  }} onSubmit={onSubmit}>
    // 				<FormSwitchInput {...fieldProps[1] as any} />
    // 			</Formik>
    // 		</BlueBaseApp>
    // 	);
    // 	await waitForElement(component as any, FormSwitchInput);
    // 	// expect(component).toMatchSnapshot();
    // 	// Check fields
    // 	expect(component.find('Switch').last().prop('name')).toBe('auto-login');
    // 	expect(component.find('Switch').last().prop('checked')).toBe(false);
    // 	expect(component.find('Switch').last().prop('value')).toBe(true);
    // });
    it('should update switch value from onValueChange callback', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            "p",
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': true }, onSubmit: onSubmit },
                react_1.default.createElement(FormSwitchInput_1.FormSwitchInput, Object.assign({}, fieldProps[0])))));
        await enzyme_async_helpers_1.waitForElement(component, FormSwitchInput_1.FormSwitchInput);
        // Initial state should be false
        let SwitchComponent = component.find('Switch').last();
        // Check fields
        expect(SwitchComponent.prop('name')).toBe('muzamil');
        expect(SwitchComponent.prop('checked')).toBe(false);
        // Update State
        const onValueChange = SwitchComponent.prop('onValueChange');
        onValueChange(true, true);
        component.update();
        // expect(component).toMatchSnapshot();
        // New state should be true
        SwitchComponent = component.find('Switch').first();
        expect(SwitchComponent.prop('name')).toBe('muzamil');
        expect(SwitchComponent.prop('checked')).toBe(true);
        expect(SwitchComponent.prop('value')).toBe(false);
    });
    it('should update switch value from onValueChange callback with value', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': false }, onSubmit: onSubmit },
                react_1.default.createElement(FormSwitchInput_1.FormSwitchInput, Object.assign({}, fieldProps[1], { onValueChange: () => null })))));
        await enzyme_async_helpers_1.waitForElement(component, FormSwitchInput_1.FormSwitchInput);
        // Initial state should be false
        let SwitchComponent = component.find('Switch').last();
        // Check fields
        expect(SwitchComponent.prop('name')).toBe('auto-login');
        expect(SwitchComponent.prop('checked')).toBe(false);
        // Update State
        const onValueChange = SwitchComponent.prop('onValueChange');
        onValueChange(false, false);
        component.update();
        // expect(component).toMatchSnapshot();
        // New state should be true
        SwitchComponent = component.find('Switch').first();
        expect(SwitchComponent.prop('name')).toBe('auto-login');
        expect(SwitchComponent.prop('checked')).toBe(false);
        expect(SwitchComponent.prop('value')).toBe(true);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1Td2l0Y2hJbnB1dC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBNkM7QUFDN0Msd0RBQXFEO0FBQ3JELG1DQUFpQztBQUNqQyxtRUFBb0M7QUFDcEMsMERBQTBCO0FBQzFCLG1DQUErQjtBQUMvQiwrREFBc0Q7QUFFdEQsTUFBTSxVQUFVLEdBQUcsQ0FBQztRQUNuQixLQUFLLEVBQUUsWUFBWTtRQUNuQixJQUFJLEVBQUUsU0FBUztRQUNmLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFHLEtBQUs7UUFDYixPQUFPLEVBQUcsSUFBSTtLQUNkO0lBQ0Q7UUFDQyxLQUFLLEVBQUUsWUFBWTtRQUNuQixJQUFJLEVBQUUsWUFBWTtRQUNsQixJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRyxJQUFJO1FBQ1osT0FBTyxFQUFHLEtBQUs7S0FDZixDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBR2hDLHNEQUFzRDtJQUV0RCwrQkFBK0I7SUFFL0IsNEJBQTRCO0lBQzVCLHFDQUFxQztJQUNyQyx5RUFBeUU7SUFFekUsb0RBQW9EO0lBRXBELGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsTUFBTTtJQUVOLDREQUE0RDtJQUU1RCwyQ0FBMkM7SUFFM0MsbUJBQW1CO0lBQ25CLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsc0VBQXNFO0lBQ3RFLE1BQU07SUFHTix1REFBdUQ7SUFFdkQsK0JBQStCO0lBRS9CLDRCQUE0QjtJQUM1QixxQ0FBcUM7SUFDckMsMkVBQTJFO0lBQzNFLG9EQUFvRDtJQUNwRCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLE1BQU07SUFFTiw0REFBNEQ7SUFFNUQsMkNBQTJDO0lBRTNDLG1CQUFtQjtJQUNuQiw0RUFBNEU7SUFDNUUsd0VBQXdF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QUFNLGFBQWEsR0FBUSxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRWpFLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUIsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLHVDQUF1QztRQUV2QywyQkFBMkI7UUFDM0IsZUFBZSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9fX3Rlc3RzX18vRm9ybVN3aXRjaElucHV0LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlQXBwIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IHsgRm9ybVN3aXRjaElucHV0IH0gZnJvbSAnLi4vRm9ybVN3aXRjaElucHV0JztcbmltcG9ydCB7IEZvcm1payAgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi8uLi8uLi9pbmRleCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5cbmNvbnN0IGZpZWxkUHJvcHMgPSBbe1xuXHRsYWJlbDogJ0F1dG8gTG9naW4nLFxuXHRuYW1lOiAnbXV6YW1pbCcsXG5cdHR5cGU6ICdzd2l0Y2gnLFxuXHR2YWx1ZSA6IGZhbHNlLFxuXHRjaGVja2VkIDogdHJ1ZSxcbn0sXG57XG5cdGxhYmVsOiAnQXV0byBMb2dpbicsXG5cdG5hbWU6ICdhdXRvLWxvZ2luJyxcblx0dHlwZTogJ3N3aXRjaCcsXG5cdHZhbHVlIDogdHJ1ZSxcblx0Y2hlY2tlZCA6IGZhbHNlXG59XTtcblxuZGVzY3JpYmUoJ0Zvcm1Td2l0Y2hJbnB1dCcsICgpID0+IHtcblxuXG5cdC8vIGl0KCdzaG91bGQgYSBzd2l0Y2ggd2l0aCB2YWx1ZSB0cnVlJywgYXN5bmMgKCkgPT4ge1xuXG5cdC8vIFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0Ly8gXHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0Ly8gXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdC8vIFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17eyAnYXV0by1sb2dpbic6IHRydWV9fSBvblN1Ym1pdD17b25TdWJtaXR9ID5cblxuXHQvLyBcdFx0XHRcdDxGb3JtU3dpdGNoSW5wdXQgey4uLmZpZWxkUHJvcHNbMF0gYXMgYW55fSAvPlxuXHRcdFx0XHRcdFxuXHQvLyBcdFx0XHQ8L0Zvcm1paz5cblx0Ly8gXHRcdDwvQmx1ZUJhc2VBcHA+XG5cdC8vIFx0KTtcblxuXHQvLyBcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1Td2l0Y2hJbnB1dCk7XG5cblx0Ly8gXHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHQvLyBcdC8vIENoZWNrIGZpZWxkc1xuXHQvLyBcdGV4cGVjdChjb21wb25lbnQuZmluZCgnU3dpdGNoJykubGFzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnbXV6YW1pbCcpO1xuXHQvLyBcdGV4cGVjdChjb21wb25lbnQuZmluZCgnU3dpdGNoJykubGFzdCgpLnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCkucHJvcCgndmFsdWUnKSkudG9CZShmYWxzZSk7XG5cdC8vIH0pO1xuXG5cblx0Ly8gaXQoJ3Nob3VsZCBhIHN3aXRjaCB3aXRoIHZhbHVlIGZhbHNlJywgYXN5bmMgKCkgPT4ge1xuXG5cdC8vIFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0Ly8gXHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0Ly8gXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdC8vIFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17eyAnYXV0by1sb2dpbic6IGZhbHNlICB9fSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHQvLyBcdFx0XHRcdDxGb3JtU3dpdGNoSW5wdXQgey4uLmZpZWxkUHJvcHNbMV0gYXMgYW55fSAvPlxuXHQvLyBcdFx0XHQ8L0Zvcm1paz5cblx0Ly8gXHRcdDwvQmx1ZUJhc2VBcHA+XG5cdC8vIFx0KTtcblxuXHQvLyBcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1Td2l0Y2hJbnB1dCk7XG5cblx0Ly8gXHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHQvLyBcdC8vIENoZWNrIGZpZWxkc1xuXHQvLyBcdGV4cGVjdChjb21wb25lbnQuZmluZCgnU3dpdGNoJykubGFzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnYXV0by1sb2dpbicpO1xuXHQvLyBcdGV4cGVjdChjb21wb25lbnQuZmluZCgnU3dpdGNoJykubGFzdCgpLnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCkucHJvcCgndmFsdWUnKSkudG9CZSh0cnVlKTtcblxuXHQvLyB9KTtcblxuXG5cdGl0KCdzaG91bGQgdXBkYXRlIHN3aXRjaCB2YWx1ZSBmcm9tIG9uVmFsdWVDaGFuZ2UgY2FsbGJhY2snLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5wXG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17eyAnYXV0by1sb2dpbic6IHRydWUgfX0gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybVN3aXRjaElucHV0IHsuLi5maWVsZFByb3BzWzBdIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtU3dpdGNoSW5wdXQpO1xuXG5cdFx0Ly8gSW5pdGlhbCBzdGF0ZSBzaG91bGQgYmUgZmFsc2Vcblx0XHRsZXQgU3dpdGNoQ29tcG9uZW50ID0gY29tcG9uZW50LmZpbmQoJ1N3aXRjaCcpLmxhc3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChTd2l0Y2hDb21wb25lbnQucHJvcCgnbmFtZScpKS50b0JlKCdtdXphbWlsJyk7XG5cdFx0ZXhwZWN0KFN3aXRjaENvbXBvbmVudC5wcm9wKCdjaGVja2VkJykpLnRvQmUoZmFsc2UpO1xuXG5cdFx0Ly8gVXBkYXRlIFN0YXRlXG5cdFx0Y29uc3Qgb25WYWx1ZUNoYW5nZTogYW55ID0gU3dpdGNoQ29tcG9uZW50LnByb3AoJ29uVmFsdWVDaGFuZ2UnKTtcblxuXHRcdG9uVmFsdWVDaGFuZ2UodHJ1ZSwgdHJ1ZSk7XG5cdFx0Y29tcG9uZW50LnVwZGF0ZSgpO1xuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gTmV3IHN0YXRlIHNob3VsZCBiZSB0cnVlXG5cdFx0U3dpdGNoQ29tcG9uZW50ID0gY29tcG9uZW50LmZpbmQoJ1N3aXRjaCcpLmZpcnN0KCk7XG5cdFx0ZXhwZWN0KFN3aXRjaENvbXBvbmVudC5wcm9wKCduYW1lJykpLnRvQmUoJ211emFtaWwnKTtcblx0XHRleHBlY3QoU3dpdGNoQ29tcG9uZW50LnByb3AoJ2NoZWNrZWQnKSkudG9CZSh0cnVlKTtcblx0XHRleHBlY3QoU3dpdGNoQ29tcG9uZW50LnByb3AoJ3ZhbHVlJykpLnRvQmUoZmFsc2UpO1xuXG5cdH0pO1xuXG5cdGl0KCdzaG91bGQgdXBkYXRlIHN3aXRjaCB2YWx1ZSBmcm9tIG9uVmFsdWVDaGFuZ2UgY2FsbGJhY2sgd2l0aCB2YWx1ZScsIGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17eyAnYXV0by1sb2dpbic6IGZhbHNlIH19IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1Td2l0Y2hJbnB1dCB7Li4uZmllbGRQcm9wc1sxXSBhcyBhbnl9IG9uVmFsdWVDaGFuZ2UgPSB7KCk9Pm51bGx9IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVN3aXRjaElucHV0KTtcblxuXHRcdC8vIEluaXRpYWwgc3RhdGUgc2hvdWxkIGJlIGZhbHNlXG5cdFx0bGV0IFN3aXRjaENvbXBvbmVudCA9IGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QoU3dpdGNoQ29tcG9uZW50LnByb3AoJ25hbWUnKSkudG9CZSgnYXV0by1sb2dpbicpO1xuXHRcdGV4cGVjdChTd2l0Y2hDb21wb25lbnQucHJvcCgnY2hlY2tlZCcpKS50b0JlKGZhbHNlKTtcblxuXHRcdC8vIFVwZGF0ZSBTdGF0ZVxuXHRcdGNvbnN0IG9uVmFsdWVDaGFuZ2U6IGFueSA9IFN3aXRjaENvbXBvbmVudC5wcm9wKCdvblZhbHVlQ2hhbmdlJyk7XG5cblx0XHRvblZhbHVlQ2hhbmdlKGZhbHNlLCBmYWxzZSk7XG5cdFx0Y29tcG9uZW50LnVwZGF0ZSgpO1xuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gTmV3IHN0YXRlIHNob3VsZCBiZSB0cnVlXG5cdFx0U3dpdGNoQ29tcG9uZW50ID0gY29tcG9uZW50LmZpbmQoJ1N3aXRjaCcpLmZpcnN0KCk7XG5cdFx0ZXhwZWN0KFN3aXRjaENvbXBvbmVudC5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0XHRleHBlY3QoU3dpdGNoQ29tcG9uZW50LnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cdFx0ZXhwZWN0KFN3aXRjaENvbXBvbmVudC5wcm9wKCd2YWx1ZScpKS50b0JlKHRydWUpO1xuXHR9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9