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
    },
    {
        label: 'Auto Login',
        name: 'auto-login',
        type: 'switch',
        value: true,
    }];
describe('FormSwitchInput', () => {
    it('should a switch with value true', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': true }, onSubmit: onSubmit },
                react_1.default.createElement(FormSwitchInput_1.FormSwitchInput, Object.assign({}, fieldProps[0])))));
        await enzyme_async_helpers_1.waitForElement(component, FormSwitchInput_1.FormSwitchInput);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('Switch').last().prop('name')).toBe('muzamil');
        expect(component.find('Switch').last().prop('checked')).toBe(false);
        expect(component.find('Switch').last().prop('value')).toBe(false);
    });
    it('should a switch with value false', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': false }, onSubmit: onSubmit },
                react_1.default.createElement(FormSwitchInput_1.FormSwitchInput, Object.assign({}, fieldProps[1])))));
        await enzyme_async_helpers_1.waitForElement(component, FormSwitchInput_1.FormSwitchInput);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('Switch').last().prop('name')).toBe('auto-login');
        expect(component.find('Switch').last().prop('checked')).toBe(false);
        expect(component.find('Switch').last().prop('value')).toBe(true);
    });
    it('should update switch value from onValueChange callback with value true', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            "p",
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': true }, onSubmit: onSubmit },
                react_1.default.createElement(FormSwitchInput_1.FormSwitchInput, Object.assign({ onValueChange: () => null }, fieldProps[0])))));
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
    it('should update switch value from onValueChange callback with value false', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': false }, onSubmit: onSubmit },
                react_1.default.createElement(FormSwitchInput_1.FormSwitchInput, Object.assign({ onValueChange: () => null }, fieldProps[1])))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1Td2l0Y2hJbnB1dC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBNkM7QUFDN0Msd0RBQXFEO0FBQ3JELG1DQUFpQztBQUNqQyxtRUFBb0M7QUFDcEMsMERBQTBCO0FBQzFCLG1DQUErQjtBQUMvQiwrREFBc0Q7QUFFdEQsTUFBTSxVQUFVLEdBQUcsQ0FBQztRQUNuQixLQUFLLEVBQUUsWUFBWTtRQUNuQixJQUFJLEVBQUUsU0FBUztRQUNmLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFHLEtBQUs7S0FDYjtJQUNEO1FBQ0MsS0FBSyxFQUFFLFlBQVk7UUFDbkIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxLQUFLLEVBQUcsSUFBSTtLQUNaLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7SUFHaEMsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBRWhELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLFNBQVMsR0FBRyxjQUFLLENBQ3RCLDhCQUFDLGtCQUFXLElBQUMsT0FBTyxFQUFFLENBQUMsZUFBTSxDQUFDO1lBQzdCLDhCQUFDLGVBQU0sSUFBQyxhQUFhLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBRS9ELDhCQUFDLGlDQUFlLG9CQUFLLFVBQVUsQ0FBQyxDQUFDLENBQVEsRUFBSSxDQUVyQyxDQUNJLENBQ2QsQ0FBQztRQUVGLE1BQU0scUNBQWMsQ0FBQyxTQUFnQixFQUFFLGlDQUFlLENBQUMsQ0FBQztRQUV4RCx1Q0FBdUM7UUFFdkMsZUFBZTtRQUNmLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxD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QUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV0RCxlQUFlO1FBQ2YsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEQsZUFBZTtRQUNmLE1BQU0sYUFBYSxHQUFRLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFakUsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QixTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsdUNBQXVDO1FBRXZDLDJCQUEyQjtRQUMzQixlQUFlLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuRCxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL19fdGVzdHNfXy9Gb3JtU3dpdGNoSW5wdXQudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2VBcHAgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBGb3JtU3dpdGNoSW5wdXQgfSBmcm9tICcuLi9Gb3JtU3dpdGNoSW5wdXQnO1xuaW1wb3J0IHsgRm9ybWlrICB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgUGx1Z2luIGZyb20gJy4uLy4uLy4uL2luZGV4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcblxuY29uc3QgZmllbGRQcm9wcyA9IFt7XG5cdGxhYmVsOiAnQXV0byBMb2dpbicsXG5cdG5hbWU6ICdtdXphbWlsJyxcblx0dHlwZTogJ3N3aXRjaCcsXG5cdHZhbHVlIDogZmFsc2UsXG59LFxue1xuXHRsYWJlbDogJ0F1dG8gTG9naW4nLFxuXHRuYW1lOiAnYXV0by1sb2dpbicsXG5cdHR5cGU6ICdzd2l0Y2gnLFxuXHR2YWx1ZSA6IHRydWUsXG59XTtcblxuZGVzY3JpYmUoJ0Zvcm1Td2l0Y2hJbnB1dCcsICgpID0+IHtcblxuXG5cdGl0KCdzaG91bGQgYSBzd2l0Y2ggd2l0aCB2YWx1ZSB0cnVlJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17eyAnYXV0by1sb2dpbic6IHRydWV9fSBvblN1Ym1pdD17b25TdWJtaXR9ID5cblxuXHRcdFx0XHRcdDxGb3JtU3dpdGNoSW5wdXQgey4uLmZpZWxkUHJvcHNbMF0gYXMgYW55fSAvPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1Td2l0Y2hJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnU3dpdGNoJykubGFzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnbXV6YW1pbCcpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnU3dpdGNoJykubGFzdCgpLnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCkucHJvcCgndmFsdWUnKSkudG9CZShmYWxzZSk7XG5cdH0pO1xuXG5cblx0aXQoJ3Nob3VsZCBhIHN3aXRjaCB3aXRoIHZhbHVlIGZhbHNlJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17eyAnYXV0by1sb2dpbic6IGZhbHNlICB9fSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtU3dpdGNoSW5wdXQgey4uLmZpZWxkUHJvcHNbMV0gYXMgYW55fSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1Td2l0Y2hJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnU3dpdGNoJykubGFzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnYXV0by1sb2dpbicpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnU3dpdGNoJykubGFzdCgpLnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCkucHJvcCgndmFsdWUnKSkudG9CZSh0cnVlKTtcblxuXHR9KTtcblxuXG5cdGl0KCdzaG91bGQgdXBkYXRlIHN3aXRjaCB2YWx1ZSBmcm9tIG9uVmFsdWVDaGFuZ2UgY2FsbGJhY2sgd2l0aCB2YWx1ZSB0cnVlJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+cFxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiB0cnVlIH19IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1Td2l0Y2hJbnB1dCBvblZhbHVlQ2hhbmdlID0geygpPT5udWxsfSB7Li4uZmllbGRQcm9wc1swXSBhcyBhbnl9IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVN3aXRjaElucHV0KTtcblxuXHRcdC8vIEluaXRpYWwgc3RhdGUgc2hvdWxkIGJlIGZhbHNlXG5cdFx0bGV0IFN3aXRjaENvbXBvbmVudCA9IGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QoU3dpdGNoQ29tcG9uZW50LnByb3AoJ25hbWUnKSkudG9CZSgnbXV6YW1pbCcpO1xuXHRcdGV4cGVjdChTd2l0Y2hDb21wb25lbnQucHJvcCgnY2hlY2tlZCcpKS50b0JlKGZhbHNlKTtcblxuXHRcdC8vIFVwZGF0ZSBTdGF0ZVxuXHRcdGNvbnN0IG9uVmFsdWVDaGFuZ2U6IGFueSA9IFN3aXRjaENvbXBvbmVudC5wcm9wKCdvblZhbHVlQ2hhbmdlJyk7XG5cblx0XHRvblZhbHVlQ2hhbmdlKHRydWUsIHRydWUpO1xuXHRcdGNvbXBvbmVudC51cGRhdGUoKTtcblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIE5ldyBzdGF0ZSBzaG91bGQgYmUgdHJ1ZVxuXHRcdFN3aXRjaENvbXBvbmVudCA9IGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5maXJzdCgpO1xuXHRcdGV4cGVjdChTd2l0Y2hDb21wb25lbnQucHJvcCgnbmFtZScpKS50b0JlKCdtdXphbWlsJyk7XG5cdFx0ZXhwZWN0KFN3aXRjaENvbXBvbmVudC5wcm9wKCdjaGVja2VkJykpLnRvQmUodHJ1ZSk7XG5cdFx0ZXhwZWN0KFN3aXRjaENvbXBvbmVudC5wcm9wKCd2YWx1ZScpKS50b0JlKGZhbHNlKTtcblxuXHR9KTtcblxuXHRpdCgnc2hvdWxkIHVwZGF0ZSBzd2l0Y2ggdmFsdWUgZnJvbSBvblZhbHVlQ2hhbmdlIGNhbGxiYWNrIHdpdGggdmFsdWUgZmFsc2UnLCBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiBmYWxzZSB9fSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtU3dpdGNoSW5wdXQgb25WYWx1ZUNoYW5nZSA9IHsoKT0+bnVsbH0gey4uLmZpZWxkUHJvcHNbMV0gYXMgYW55fSAgLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtU3dpdGNoSW5wdXQpO1xuXG5cdFx0Ly8gSW5pdGlhbCBzdGF0ZSBzaG91bGQgYmUgZmFsc2Vcblx0XHRsZXQgU3dpdGNoQ29tcG9uZW50ID0gY29tcG9uZW50LmZpbmQoJ1N3aXRjaCcpLmxhc3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChTd2l0Y2hDb21wb25lbnQucHJvcCgnbmFtZScpKS50b0JlKCdhdXRvLWxvZ2luJyk7XG5cdFx0ZXhwZWN0KFN3aXRjaENvbXBvbmVudC5wcm9wKCdjaGVja2VkJykpLnRvQmUoZmFsc2UpO1xuXG5cdFx0Ly8gVXBkYXRlIFN0YXRlXG5cdFx0Y29uc3Qgb25WYWx1ZUNoYW5nZTogYW55ID0gU3dpdGNoQ29tcG9uZW50LnByb3AoJ29uVmFsdWVDaGFuZ2UnKTtcblxuXHRcdG9uVmFsdWVDaGFuZ2UoZmFsc2UsIGZhbHNlKTtcblx0XHRjb21wb25lbnQudXBkYXRlKCk7XG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHQvLyBOZXcgc3RhdGUgc2hvdWxkIGJlIHRydWVcblx0XHRTd2l0Y2hDb21wb25lbnQgPSBjb21wb25lbnQuZmluZCgnU3dpdGNoJykuZmlyc3QoKTtcblx0XHRleHBlY3QoU3dpdGNoQ29tcG9uZW50LnByb3AoJ25hbWUnKSkudG9CZSgnYXV0by1sb2dpbicpO1xuXHRcdGV4cGVjdChTd2l0Y2hDb21wb25lbnQucHJvcCgnY2hlY2tlZCcpKS50b0JlKGZhbHNlKTtcblx0XHRleHBlY3QoU3dpdGNoQ29tcG9uZW50LnByb3AoJ3ZhbHVlJykpLnRvQmUodHJ1ZSk7XG5cdH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=