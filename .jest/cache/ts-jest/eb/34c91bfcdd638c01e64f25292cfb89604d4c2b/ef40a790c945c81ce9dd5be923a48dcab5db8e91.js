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
    const getIn = jest.mock('formik');
    it('should a switch with value true', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': true }, onSubmit: onSubmit },
                react_1.default.createElement(FormSwitchInput_1.FormSwitchInput, Object.assign({}, fieldProps[0], { getIn: getIn })))));
        await enzyme_async_helpers_1.waitForElement(component, FormSwitchInput_1.FormSwitchInput);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('Switch').last().prop('name')).toBe('muzamil');
        expect(component.find('Switch').last().prop('checked')).toBe(false);
        expect(component.find('Switch').last().prop('value')).toBe(true);
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
        expect(component.find('Switch').last().prop('value')).toBe(false);
    });
    it('should update switch value from onValueChange callback', async () => {
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
        expect(SwitchComponent.prop('value')).toBe(true);
    });
    it('should update switch value from onValueChange callback with value', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            "p",
            react_1.default.createElement(formik_1.Formik, { initialValues: { 'auto-login': false }, onSubmit: onSubmit },
                react_1.default.createElement(FormSwitchInput_1.FormSwitchInput, Object.assign({}, fieldProps[1])))));
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
        expect(SwitchComponent.prop('value')).toBe(false);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1Td2l0Y2hJbnB1dC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBNkM7QUFDN0Msd0RBQXFEO0FBQ3JELG1DQUFpQztBQUNqQyxtRUFBb0M7QUFDcEMsMERBQTBCO0FBQzFCLG1DQUErQjtBQUMvQiwrREFBc0Q7QUFFdEQsTUFBTSxVQUFVLEdBQUcsQ0FBQztRQUNuQixLQUFLLEVBQUUsWUFBWTtRQUNuQixJQUFJLEVBQUUsU0FBUztRQUNmLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFHLEtBQUs7UUFDYixPQUFPLEVBQUcsSUFBSTtLQUNkO0lBQ0Q7UUFDQyxLQUFLLEVBQUUsWUFBWTtRQUNuQixJQUFJLEVBQUUsWUFBWTtRQUNsQixJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRyxJQUFJO1FBQ1osT0FBTyxFQUFHLEtBQUs7S0FDZixDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBRS9CLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFFbEMsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBRWhELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLFNBQVMsR0FBRyxjQUFLLENBQ3RCLDhCQUFDLGtCQUFXLElBQUMsT0FBTyxFQUFFLENBQUMsZUFBTSxDQUFDO1lBQzdCLDhCQUFDLGVBQU0sSUFBQyxhQUFhLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBRS9ELDhCQUFDLGlDQUFlLG9CQUFLLFVBQVUsQ0FBQyxDQUFDLENBQVEsSUFBRSxLQUFLLEVBQUksS0FBSyxJQUFJLENBRXJELENB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O1FBRXhELGdDQUFnQztRQUNoQyxJQUFJLGVBQWUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXRELGVBQWU7UUFDZixNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVwRCxlQUFlO1FBQ2YsTUFBTSxhQUFhLEdBQVEsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVqRSxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQix1Q0FBdUM7UUFFdkMsMkJBQTJCO1FBQzNCLGVBQWUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1Td2l0Y2hJbnB1dC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbHVlQmFzZUFwcCB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCB7IEZvcm1Td2l0Y2hJbnB1dCB9IGZyb20gJy4uL0Zvcm1Td2l0Y2hJbnB1dCc7XG5pbXBvcnQgeyBGb3JtaWsgIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vLi4vLi4vaW5kZXgnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcbmltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuXG5jb25zdCBmaWVsZFByb3BzID0gW3tcblx0bGFiZWw6ICdBdXRvIExvZ2luJyxcblx0bmFtZTogJ211emFtaWwnLFxuXHR0eXBlOiAnc3dpdGNoJyxcblx0dmFsdWUgOiBmYWxzZSxcblx0Y2hlY2tlZCA6IHRydWUsXG59LFxue1xuXHRsYWJlbDogJ0F1dG8gTG9naW4nLFxuXHRuYW1lOiAnYXV0by1sb2dpbicsXG5cdHR5cGU6ICdzd2l0Y2gnLFxuXHR2YWx1ZSA6IHRydWUsXG5cdGNoZWNrZWQgOiBmYWxzZVxufV07XG5cbmRlc2NyaWJlKCdGb3JtU3dpdGNoSW5wdXQnLCAoKSA9PiB7XG5cblx0XHRjb25zdCBnZXRJbiA9IGplc3QubW9jaygnZm9ybWlrJylcblxuXHRpdCgnc2hvdWxkIGEgc3dpdGNoIHdpdGggdmFsdWUgdHJ1ZScsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiB0cnVlfX0gb25TdWJtaXQ9e29uU3VibWl0fSA+XG5cblx0XHRcdFx0XHQ8Rm9ybVN3aXRjaElucHV0IHsuLi5maWVsZFByb3BzWzBdIGFzIGFueX0gZ2V0SW4gPSB7Z2V0SW59IC8+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVN3aXRjaElucHV0KTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCkucHJvcCgnbmFtZScpKS50b0JlKCdtdXphbWlsJyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCkucHJvcCgnY2hlY2tlZCcpKS50b0JlKGZhbHNlKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1N3aXRjaCcpLmxhc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlKHRydWUpO1xuXHR9KTtcblxuXG5cdGl0KCdzaG91bGQgYSBzd2l0Y2ggd2l0aCB2YWx1ZSBmYWxzZScsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiBmYWxzZSB9fSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtU3dpdGNoSW5wdXQgey4uLmZpZWxkUHJvcHNbMV0gYXMgYW55fSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1Td2l0Y2hJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnU3dpdGNoJykubGFzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnYXV0by1sb2dpbicpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnU3dpdGNoJykubGFzdCgpLnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCkucHJvcCgndmFsdWUnKSkudG9CZShmYWxzZSk7XG5cblx0fSk7XG5cblxuXHRpdCgnc2hvdWxkIHVwZGF0ZSBzd2l0Y2ggdmFsdWUgZnJvbSBvblZhbHVlQ2hhbmdlIGNhbGxiYWNrJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+cFxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3sgJ2F1dG8tbG9naW4nOiBmYWxzZSB9fSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtU3dpdGNoSW5wdXQgey4uLmZpZWxkUHJvcHNbMF0gYXMgYW55fSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1Td2l0Y2hJbnB1dCk7XG5cblx0XHQvLyBJbml0aWFsIHN0YXRlIHNob3VsZCBiZSBmYWxzZVxuXHRcdGxldCBTd2l0Y2hDb21wb25lbnQgPSBjb21wb25lbnQuZmluZCgnU3dpdGNoJykubGFzdCgpO1xuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0ZXhwZWN0KFN3aXRjaENvbXBvbmVudC5wcm9wKCduYW1lJykpLnRvQmUoJ211emFtaWwnKTtcblx0XHRleHBlY3QoU3dpdGNoQ29tcG9uZW50LnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cblx0XHQvLyBVcGRhdGUgU3RhdGVcblx0XHRjb25zdCBvblZhbHVlQ2hhbmdlOiBhbnkgPSBTd2l0Y2hDb21wb25lbnQucHJvcCgnb25WYWx1ZUNoYW5nZScpO1xuXG5cdFx0b25WYWx1ZUNoYW5nZSh0cnVlLCB0cnVlKTtcblx0XHRjb21wb25lbnQudXBkYXRlKCk7XG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHQvLyBOZXcgc3RhdGUgc2hvdWxkIGJlIHRydWVcblx0XHRTd2l0Y2hDb21wb25lbnQgPSBjb21wb25lbnQuZmluZCgnU3dpdGNoJykuZmlyc3QoKTtcblx0XHRleHBlY3QoU3dpdGNoQ29tcG9uZW50LnByb3AoJ25hbWUnKSkudG9CZSgnbXV6YW1pbCcpO1xuXHRcdGV4cGVjdChTd2l0Y2hDb21wb25lbnQucHJvcCgnY2hlY2tlZCcpKS50b0JlKHRydWUpO1xuXHRcdGV4cGVjdChTd2l0Y2hDb21wb25lbnQucHJvcCgndmFsdWUnKSkudG9CZSh0cnVlKTtcblxuXHR9KTtcblxuXHRpdCgnc2hvdWxkIHVwZGF0ZSBzd2l0Y2ggdmFsdWUgZnJvbSBvblZhbHVlQ2hhbmdlIGNhbGxiYWNrIHdpdGggdmFsdWUnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5wXG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17eyAnYXV0by1sb2dpbic6IGZhbHNlIH19IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1Td2l0Y2hJbnB1dCB7Li4uZmllbGRQcm9wc1sxXSBhcyBhbnl9IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVN3aXRjaElucHV0KTtcblxuXHRcdC8vIEluaXRpYWwgc3RhdGUgc2hvdWxkIGJlIGZhbHNlXG5cdFx0bGV0IFN3aXRjaENvbXBvbmVudCA9IGNvbXBvbmVudC5maW5kKCdTd2l0Y2gnKS5sYXN0KCk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QoU3dpdGNoQ29tcG9uZW50LnByb3AoJ25hbWUnKSkudG9CZSgnYXV0by1sb2dpbicpO1xuXHRcdGV4cGVjdChTd2l0Y2hDb21wb25lbnQucHJvcCgnY2hlY2tlZCcpKS50b0JlKGZhbHNlKTtcblxuXHRcdC8vIFVwZGF0ZSBTdGF0ZVxuXHRcdGNvbnN0IG9uVmFsdWVDaGFuZ2U6IGFueSA9IFN3aXRjaENvbXBvbmVudC5wcm9wKCdvblZhbHVlQ2hhbmdlJyk7XG5cblx0XHRvblZhbHVlQ2hhbmdlKGZhbHNlLCBmYWxzZSk7XG5cdFx0Y29tcG9uZW50LnVwZGF0ZSgpO1xuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gTmV3IHN0YXRlIHNob3VsZCBiZSB0cnVlXG5cdFx0U3dpdGNoQ29tcG9uZW50ID0gY29tcG9uZW50LmZpbmQoJ1N3aXRjaCcpLmZpcnN0KCk7XG5cdFx0ZXhwZWN0KFN3aXRjaENvbXBvbmVudC5wcm9wKCduYW1lJykpLnRvQmUoJ2F1dG8tbG9naW4nKTtcblx0XHRleHBlY3QoU3dpdGNoQ29tcG9uZW50LnByb3AoJ2NoZWNrZWQnKSkudG9CZShmYWxzZSk7XG5cdFx0ZXhwZWN0KFN3aXRjaENvbXBvbmVudC5wcm9wKCd2YWx1ZScpKS50b0JlKGZhbHNlKTtcblx0fSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==