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
    it('should update switch value from onValueChange callback with true', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            "p",
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': false }, onSubmit: onSubmit },
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
    // it('should update switch value from onValueChange callback with false', async () => {
    // 	const onSubmit = jest.fn();
    // 	const component = mount(
    // 		<BlueBaseApp plugins={[Plugin]}>
    // 			<Formik initialValues={{ 'auto-login': false }} onSubmit={onSubmit}>
    // 				<FormSwitchInput {...fieldProps[1] as any} onValueChange = {()=>null} />
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
    // 	onValueChange(false, false);
    // 	component.update();
    // 	// expect(component).toMatchSnapshot();
    // 	// New state should be true
    // 	SwitchComponent = component.find('Switch').first();
    // 	expect(SwitchComponent.prop('name')).toBe('auto-login');
    // 	expect(SwitchComponent.prop('checked')).toBe(false);
    // 	expect(SwitchComponent.prop('value')).toBe(true);
    // });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1Td2l0Y2hJbnB1dC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBNkM7QUFDN0Msd0RBQXFEO0FBQ3JELG1DQUFpQztBQUNqQyxtRUFBb0M7QUFDcEMsMERBQTBCO0FBQzFCLG1DQUErQjtBQUMvQiwrREFBc0Q7QUFFdEQsTUFBTSxVQUFVLEdBQUcsQ0FBQztRQUNuQixLQUFLLEVBQUUsWUFBWTtRQUNuQixJQUFJLEVBQUUsU0FBUztRQUNmLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFHLEtBQUs7UUFDYixPQUFPLEVBQUcsSUFBSTtLQUNkO0lBQ0Q7UUFDQyxLQUFLLEVBQUUsWUFBWTtRQUNuQixJQUFJLEVBQUUsWUFBWTtRQUNsQixJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRyxJQUFJO1FBQ1osT0FBTyxFQUFHLEtBQUs7S0FDZixDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBR2hDLHNEQUFzRDtJQUV0RCwrQkFBK0I7SUFFL0IsNEJBQTRCO0lBQzVCLHFDQUFxQztJQUNyQyx5RUFBeUU7SUFFekUsb0RBQW9EO0lBRXBELGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsTUFBTTtJQUVOLDREQUE0RDtJQUU1RCwyQ0FBMkM7SUFFM0MsbUJBQW1CO0lBQ25CLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsc0VBQXNFO0lBQ3RFLE1BQU07SUFHTix1REFBdUQ7SUFFdkQsK0JBQStCO0lBRS9CLDRCQUE0QjtJQUM1QixxQ0FBcUM7SUFDckMsMkVBQTJFO0lBQzNFLG9EQUFvRDtJQUNwRCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLE1BQU07SUFFTiw0REFBNEQ7SUFFNUQsMkNBQTJDO0lBRTNDLG1CQUFtQjtJQUNuQiw0RUFBNEU7SUFDNUUsd0VBQXdFO0lBQ3hFLHFFQUFxRTtJQUVyRSxNQUFNO0lBR04sRUFBRSxDQUFDLGtFQUFrRSxFQUFFLEtBQUssSUFBSSxFQUFFO1FBRWpGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLFNBQVMsR0FBRyxjQUFLLENBQ3RCLDhCQUFDLGtCQUFXLElBQUMsT0FBTyxFQUFFLENBQUMsZUFBTSxDQUFDOztZQUM3Qiw4QkFBQyxlQUFNLElBQUMsYUFBYSxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRO2dCQUNqRSw4QkFBQyxpQ0FBZSxvQkFBSyxVQUFVLENBQUMsQ0FBQyxDQUFRLEVBQUksQ0FDckMsQ0FDSSxDQUNkLENBQUM7UUFFRixNQUFNLHFDQUFjLENBQUMsU0FBZ0IsRUFBRSxpQ0FBZSxDQUFDLENBQUM7UUFFeEQsZ0NBQWdDO1FBQ2hDLElBQUksZUFBZSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdEQsZUFBZTtRQUNmLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBELGVBQWU7UUFDZixNQUFNLGFBQWEsR0FBUSxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRWpFLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUIsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLHVDQUF1QztRQUV2QywyQkFBMkI7UUFDM0IsZUFBZSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbkQsQ0FBQyxDQUFDLENBQUM7SUFFSCx3RkFBd0Y7SUFDeEYsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixxQ0FBcUM7SUFDckMsMEVBQTBFO0lBQzFFLCtFQUErRTtJQUMvRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLE1BQU07SUFFTiw0REFBNEQ7SUFFNUQsb0NBQW9DO0lBQ3BDLDBEQUEwRDtJQUUxRCxtQkFBbUI7SUFDbkIsNERBQTREO0lBQzVELHdEQUF3RDtJQUV4RCxtQkFBbUI7SUFDbkIscUVBQXFFO0lBRXJFLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsMkNBQTJDO0lBRTNDLCtCQUErQjtJQUMvQix1REFBdUQ7SUFDdkQsNERBQTREO0lBQzVELHdEQUF3RDtJQUN4RCxxREFBcUQ7SUFDckQsTUFBTTtBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL19fdGVzdHNfXy9Gb3JtU3dpdGNoSW5wdXQudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2VBcHAgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBGb3JtU3dpdGNoSW5wdXQgfSBmcm9tICcuLi9Gb3JtU3dpdGNoSW5wdXQnO1xuaW1wb3J0IHsgRm9ybWlrICB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgUGx1Z2luIGZyb20gJy4uLy4uLy4uL2luZGV4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcblxuY29uc3QgZmllbGRQcm9wcyA9IFt7XG5cdGxhYmVsOiAnQXV0byBMb2dpbicsXG5cdG5hbWU6ICdtdXphbWlsJyxcblx0dHlwZTogJ3N3aXRjaCcsXG5cdHZhbHVlIDogZmFsc2UsXG5cdGNoZWNrZWQgOiB0cnVlLFxufSxcbntcblx0bGFiZWw6ICdBdXRvIExvZ2luJyxcblx0bmFtZTogJ2F1dG8tbG9naW4nLFxuXHR0eXBlOiAnc3dpdGNoJyxcblx0dmFsdWUgOiB0cnVlLFxuXHRjaGVja2VkIDogZmFsc2Vcbn1dO1xuXG5kZXNjcmliZSgnRm9ybVN3aXRjaElucHV0JywgKCkgPT4ge1xuXG5cblx0Ly8gaXQoJ3Nob3VsZCBhIHN3aXRjaCB3aXRoIHZhbHVlIHRydWUnLCBhc3luYyAoKSA9PiB7XG5cblx0Ly8gXHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHQvLyBcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHQvLyBcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5cblx0Ly8gXHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXt7ICdhdXRvLWxvZ2luJzogdHJ1ZX19IG9uU3VibWl0PXtvblN1Ym1pdH0gPlxuXG5cdC8vIFx0XHRcdFx0PEZvcm1Td2l0Y2hJbnB1dCB7Li4uZmllbGRQcm9wc1swXSBhcyBhbnl9IC8+XG5cdFx0XHRcdFx0XG5cdC8vIFx0XHRcdDwvRm9ybWlrPlxuXHQvLyBcdFx0PC9CbHVlQmFzZUFwcD5cblx0Ly8gXHQpO1xuXG5cdC8vIFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVN3aXRjaElucHV0KTtcblxuXHQvLyBcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdC8vIFx0Ly8gQ2hlY2sgZmllbGRzXG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCkucHJvcCgnbmFtZScpKS50b0JlKCdtdXphbWlsJyk7XG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCkucHJvcCgnY2hlY2tlZCcpKS50b0JlKGZhbHNlKTtcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1N3aXRjaCcpLmxhc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlKGZhbHNlKTtcblx0Ly8gfSk7XG5cblxuXHQvLyBpdCgnc2hvdWxkIGEgc3dpdGNoIHdpdGggdmFsdWUgZmFsc2UnLCBhc3luYyAoKSA9PiB7XG5cblx0Ly8gXHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHQvLyBcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHQvLyBcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5cblx0Ly8gXHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXt7ICdhdXRvLWxvZ2luJzogZmFsc2UgIH19IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdC8vIFx0XHRcdFx0PEZvcm1Td2l0Y2hJbnB1dCB7Li4uZmllbGRQcm9wc1sxXSBhcyBhbnl9IC8+XG5cdC8vIFx0XHRcdDwvRm9ybWlrPlxuXHQvLyBcdFx0PC9CbHVlQmFzZUFwcD5cblx0Ly8gXHQpO1xuXG5cdC8vIFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVN3aXRjaElucHV0KTtcblxuXHQvLyBcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdC8vIFx0Ly8gQ2hlY2sgZmllbGRzXG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCkucHJvcCgnbmFtZScpKS50b0JlKCdhdXRvLWxvZ2luJyk7XG5cdC8vIFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCkucHJvcCgnY2hlY2tlZCcpKS50b0JlKGZhbHNlKTtcblx0Ly8gXHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1N3aXRjaCcpLmxhc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlKHRydWUpO1xuXG5cdC8vIH0pO1xuXG5cblx0aXQoJ3Nob3VsZCB1cGRhdGUgc3dpdGNoIHZhbHVlIGZyb20gb25WYWx1ZUNoYW5nZSBjYWxsYmFjayB3aXRoIHRydWUnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5wXG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17eyAnYXV0by1sb2dpbic6IGZhbHNlIH19IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1Td2l0Y2hJbnB1dCB7Li4uZmllbGRQcm9wc1swXSBhcyBhbnl9IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVN3aXRjaElucHV0KTtcblxuXHRcdC8vIEluaXRpYWwgc3RhdGUgc2hvdWxkIGJlIGZhbHNlXG5cdFx0bGV0IFN3aXRjaENvbXBvbmVudCA9IGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QoU3dpdGNoQ29tcG9uZW50LnByb3AoJ25hbWUnKSkudG9CZSgnbXV6YW1pbCcpO1xuXHRcdGV4cGVjdChTd2l0Y2hDb21wb25lbnQucHJvcCgnY2hlY2tlZCcpKS50b0JlKGZhbHNlKTtcblxuXHRcdC8vIFVwZGF0ZSBTdGF0ZVxuXHRcdGNvbnN0IG9uVmFsdWVDaGFuZ2U6IGFueSA9IFN3aXRjaENvbXBvbmVudC5wcm9wKCdvblZhbHVlQ2hhbmdlJyk7XG5cblx0XHRvblZhbHVlQ2hhbmdlKHRydWUsIHRydWUpO1xuXHRcdGNvbXBvbmVudC51cGRhdGUoKTtcblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIE5ldyBzdGF0ZSBzaG91bGQgYmUgdHJ1ZVxuXHRcdFN3aXRjaENvbXBvbmVudCA9IGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5maXJzdCgpO1xuXHRcdGV4cGVjdChTd2l0Y2hDb21wb25lbnQucHJvcCgnbmFtZScpKS50b0JlKCdtdXphbWlsJyk7XG5cdFx0ZXhwZWN0KFN3aXRjaENvbXBvbmVudC5wcm9wKCdjaGVja2VkJykpLnRvQmUodHJ1ZSk7XG5cdFx0ZXhwZWN0KFN3aXRjaENvbXBvbmVudC5wcm9wKCd2YWx1ZScpKS50b0JlKGZhbHNlKTtcblxuXHR9KTtcblxuXHQvLyBpdCgnc2hvdWxkIHVwZGF0ZSBzd2l0Y2ggdmFsdWUgZnJvbSBvblZhbHVlQ2hhbmdlIGNhbGxiYWNrIHdpdGggZmFsc2UnLCBhc3luYyAoKSA9PiB7XG5cdC8vIFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cdC8vIFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdC8vIFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHQvLyBcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiBmYWxzZSB9fSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHQvLyBcdFx0XHRcdDxGb3JtU3dpdGNoSW5wdXQgey4uLmZpZWxkUHJvcHNbMV0gYXMgYW55fSBvblZhbHVlQ2hhbmdlID0geygpPT5udWxsfSAvPlxuXHQvLyBcdFx0XHQ8L0Zvcm1paz5cblx0Ly8gXHRcdDwvQmx1ZUJhc2VBcHA+XG5cdC8vIFx0KTtcblxuXHQvLyBcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1Td2l0Y2hJbnB1dCk7XG5cblx0Ly8gXHQvLyBJbml0aWFsIHN0YXRlIHNob3VsZCBiZSBmYWxzZVxuXHQvLyBcdGxldCBTd2l0Y2hDb21wb25lbnQgPSBjb21wb25lbnQuZmluZCgnU3dpdGNoJykubGFzdCgpO1xuXG5cdC8vIFx0Ly8gQ2hlY2sgZmllbGRzXG5cdC8vIFx0ZXhwZWN0KFN3aXRjaENvbXBvbmVudC5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0Ly8gXHRleHBlY3QoU3dpdGNoQ29tcG9uZW50LnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cblx0Ly8gXHQvLyBVcGRhdGUgU3RhdGVcblx0Ly8gXHRjb25zdCBvblZhbHVlQ2hhbmdlOiBhbnkgPSBTd2l0Y2hDb21wb25lbnQucHJvcCgnb25WYWx1ZUNoYW5nZScpO1xuXG5cdC8vIFx0b25WYWx1ZUNoYW5nZShmYWxzZSwgZmFsc2UpO1xuXHQvLyBcdGNvbXBvbmVudC51cGRhdGUoKTtcblx0Ly8gXHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHQvLyBcdC8vIE5ldyBzdGF0ZSBzaG91bGQgYmUgdHJ1ZVxuXHQvLyBcdFN3aXRjaENvbXBvbmVudCA9IGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5maXJzdCgpO1xuXHQvLyBcdGV4cGVjdChTd2l0Y2hDb21wb25lbnQucHJvcCgnbmFtZScpKS50b0JlKCdhdXRvLWxvZ2luJyk7XG5cdC8vIFx0ZXhwZWN0KFN3aXRjaENvbXBvbmVudC5wcm9wKCdjaGVja2VkJykpLnRvQmUoZmFsc2UpO1xuXHQvLyBcdGV4cGVjdChTd2l0Y2hDb21wb25lbnQucHJvcCgndmFsdWUnKSkudG9CZSh0cnVlKTtcblx0Ly8gfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==