"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const FormPickerInput_1 = require("../FormPickerInput");
const formik_1 = require("formik");
const index_1 = tslib_1.__importDefault(require("../../../index"));
const react_1 = tslib_1.__importDefault(require("react"));
const enzyme_1 = require("enzyme");
const enzyme_async_helpers_1 = require("enzyme-async-helpers");
const fieldProps = {
    label: 'Language',
    name: 'lang',
    type: 'picker',
    items: [{
            label: 'JavaScript',
            value: 'js'
        }, {
            label: 'Java',
            value: 'java'
        }]
};
const initialValues = {
    'lang': 'js',
};
describe('FormPickerInput', () => {
    it('should render a picker with value "js"', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormPickerInput_1.FormPickerInput, Object.assign({}, fieldProps)))));
        await enzyme_async_helpers_1.waitForElement(component, FormPickerInput_1.FormPickerInput);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('Picker').last().prop('name')).toBe('lang');
        expect(component.find('Picker').last().prop('value')).toBe('js');
    });
    it('should update picker value from onValueChange callback', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormPickerInput_1.FormPickerInput, Object.assign({}, fieldProps)))));
        await enzyme_async_helpers_1.waitForElement(component, FormPickerInput_1.FormPickerInput);
        // Initial state should be false
        let PickerComponent = component.find('Picker').last();
        // Check fields
        expect(PickerComponent.prop('name')).toBe('lang');
        expect(PickerComponent.prop('value')).toBe('js');
        // Update State
        const onValueChange = PickerComponent.prop('onValueChange');
        onValueChange('java');
        component.update();
        // expect(component).toMatchSnapshot();
        // New state should be true
        PickerComponent = component.find('Picker').first();
        expect(PickerComponent.prop('name')).toBe('lang');
        expect(PickerComponent.prop('value')).toBe('java');
    });
    it('should update picker value from onValueChange callback with prop', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormPickerInput_1.FormPickerInput, Object.assign({ onValueChange: () => null }, fieldProps)))));
        await enzyme_async_helpers_1.waitForElement(component, FormPickerInput_1.FormPickerInput);
        // Initial state should be false
        let PickerComponent = component.find('Picker').last();
        // Check fields
        expect(PickerComponent.prop('name')).toBe('lang');
        expect(PickerComponent.prop('value')).toBe('js');
        // Update State
        const onValueChange = PickerComponent.prop('onValueChange');
        onValueChange(null);
        component.update();
        // expect(component).toMatchSnapshot();
        // New state should be true
        PickerComponent = component.find('Picker').first();
        expect(PickerComponent.prop('name')).toBe('lang');
        expect(PickerComponent.prop('value')).toBe(null);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1QaWNrZXJJbnB1dC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBNkM7QUFDN0Msd0RBQXFEO0FBQ3JELG1DQUFnQztBQUNoQyxtRUFBb0M7QUFDcEMsMERBQTBCO0FBQzFCLG1DQUErQjtBQUMvQiwrREFBc0Q7QUFFdEQsTUFBTSxVQUFVLEdBQUc7SUFDbEIsS0FBSyxFQUFFLFVBQVU7SUFDakIsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsUUFBUTtJQUVkLEtBQUssRUFBRSxDQUFDO1lBQ1AsS0FBSyxFQUFFLFlBQVk7WUFDbkIsS0FBSyxFQUFFLElBQUk7U0FDWCxFQUFFO1lBQ0YsS0FBSyxFQUFFLE1BQU07WUFDYixLQUFLLEVBQUUsTUFBTTtTQUNiLENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUc7SUFDckIsTUFBTSxFQUFFLElBQUk7Q0FDWixDQUFDO0FBR0YsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUdoQyxFQUFFLENBQUMsd0NBQXdDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFdkQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTNCLE1BQU0sU0FBUyxHQUFHLGNBQUssQ0FDdEIsOEJBQUMsa0JBQVcsSUFBQyxPQUFPLEVBQUUsQ0FBQyxlQUFNLENBQUM7WUFDN0IsOEJBQUMsZUFBTSxJQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBQ3ZELDhCQUFDLGlDQUFlLG9CQUFLLFVBQWlCLEVBQUksQ0FDbEMsQ0FDSSxDQUNkLENBQUM7UUFFRixNQUFNLHFDQUFjLENBQUMsU0FBZ0IsRUFBRSxpQ0FBZSxDQUFDLENBQUM7UUFFeEQsdUNBQXVDO1FBRXZDLGVBQWU7UUFDZixNQUFNLENBQUMs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T0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakQsZUFBZTtRQUNmLE1BQU0sYUFBYSxHQUFRLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFakUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQix1Q0FBdUM7UUFFdkMsMkJBQTJCO1FBQzNCLGVBQWUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1QaWNrZXJJbnB1dC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbHVlQmFzZUFwcCB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCB7IEZvcm1QaWNrZXJJbnB1dCB9IGZyb20gJy4uL0Zvcm1QaWNrZXJJbnB1dCc7XG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi8uLi8uLi9pbmRleCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5cbmNvbnN0IGZpZWxkUHJvcHMgPSB7XG5cdGxhYmVsOiAnTGFuZ3VhZ2UnLFxuXHRuYW1lOiAnbGFuZycsXG5cdHR5cGU6ICdwaWNrZXInLFxuXG5cdGl0ZW1zOiBbe1xuXHRcdGxhYmVsOiAnSmF2YVNjcmlwdCcsXG5cdFx0dmFsdWU6ICdqcydcblx0fSwge1xuXHRcdGxhYmVsOiAnSmF2YScsXG5cdFx0dmFsdWU6ICdqYXZhJ1xuXHR9XVxufTtcblxuY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcblx0J2xhbmcnOiAnanMnLFxufTtcblxuXG5kZXNjcmliZSgnRm9ybVBpY2tlcklucHV0JywgKCkgPT4ge1xuXG5cblx0aXQoJ3Nob3VsZCByZW5kZXIgYSBwaWNrZXIgd2l0aCB2YWx1ZSBcImpzXCInLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtUGlja2VySW5wdXQgey4uLmZpZWxkUHJvcHMgYXMgYW55fSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1QaWNrZXJJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnUGlja2VyJykubGFzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnbGFuZycpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnUGlja2VyJykubGFzdCgpLnByb3AoJ3ZhbHVlJykpLnRvQmUoJ2pzJyk7XG5cdH0pO1xuXG5cdGl0KCdzaG91bGQgdXBkYXRlIHBpY2tlciB2YWx1ZSBmcm9tIG9uVmFsdWVDaGFuZ2UgY2FsbGJhY2snLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtUGlja2VySW5wdXQgey4uLmZpZWxkUHJvcHMgYXMgYW55fSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1QaWNrZXJJbnB1dCk7XG5cblx0XHQvLyBJbml0aWFsIHN0YXRlIHNob3VsZCBiZSBmYWxzZVxuXHRcdGxldCBQaWNrZXJDb21wb25lbnQgPSBjb21wb25lbnQuZmluZCgnUGlja2VyJykubGFzdCgpO1xuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0ZXhwZWN0KFBpY2tlckNvbXBvbmVudC5wcm9wKCduYW1lJykpLnRvQmUoJ2xhbmcnKTtcblx0XHRleHBlY3QoUGlja2VyQ29tcG9uZW50LnByb3AoJ3ZhbHVlJykpLnRvQmUoJ2pzJyk7XG5cblx0XHQvLyBVcGRhdGUgU3RhdGVcblx0XHRjb25zdCBvblZhbHVlQ2hhbmdlOiBhbnkgPSBQaWNrZXJDb21wb25lbnQucHJvcCgnb25WYWx1ZUNoYW5nZScpO1xuXG5cdFx0b25WYWx1ZUNoYW5nZSgnamF2YScpO1xuXHRcdGNvbXBvbmVudC51cGRhdGUoKTtcblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIE5ldyBzdGF0ZSBzaG91bGQgYmUgdHJ1ZVxuXHRcdFBpY2tlckNvbXBvbmVudCA9IGNvbXBvbmVudC5maW5kKCdQaWNrZXInKS5maXJzdCgpO1xuXHRcdGV4cGVjdChQaWNrZXJDb21wb25lbnQucHJvcCgnbmFtZScpKS50b0JlKCdsYW5nJyk7XG5cdFx0ZXhwZWN0KFBpY2tlckNvbXBvbmVudC5wcm9wKCd2YWx1ZScpKS50b0JlKCdqYXZhJyk7XG5cdH0pO1xuXHRcblx0aXQoJ3Nob3VsZCB1cGRhdGUgcGlja2VyIHZhbHVlIGZyb20gb25WYWx1ZUNoYW5nZSBjYWxsYmFjayB3aXRoIHByb3AnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtUGlja2VySW5wdXQgb25WYWx1ZUNoYW5nZT17KCk9Pm51bGx9IHsuLi5maWVsZFByb3BzIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtUGlja2VySW5wdXQpO1xuXG5cdFx0Ly8gSW5pdGlhbCBzdGF0ZSBzaG91bGQgYmUgZmFsc2Vcblx0XHRsZXQgUGlja2VyQ29tcG9uZW50ID0gY29tcG9uZW50LmZpbmQoJ1BpY2tlcicpLmxhc3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChQaWNrZXJDb21wb25lbnQucHJvcCgnbmFtZScpKS50b0JlKCdsYW5nJyk7XG5cdFx0ZXhwZWN0KFBpY2tlckNvbXBvbmVudC5wcm9wKCd2YWx1ZScpKS50b0JlKCdqcycpO1xuXG5cdFx0Ly8gVXBkYXRlIFN0YXRlXG5cdFx0Y29uc3Qgb25WYWx1ZUNoYW5nZTogYW55ID0gUGlja2VyQ29tcG9uZW50LnByb3AoJ29uVmFsdWVDaGFuZ2UnKTtcblxuXHRcdG9uVmFsdWVDaGFuZ2UobnVsbCk7XG5cdFx0Y29tcG9uZW50LnVwZGF0ZSgpO1xuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gTmV3IHN0YXRlIHNob3VsZCBiZSB0cnVlXG5cdFx0UGlja2VyQ29tcG9uZW50ID0gY29tcG9uZW50LmZpbmQoJ1BpY2tlcicpLmZpcnN0KCk7XG5cdFx0ZXhwZWN0KFBpY2tlckNvbXBvbmVudC5wcm9wKCduYW1lJykpLnRvQmUoJ2xhbmcnKTtcblx0XHRleHBlY3QoUGlja2VyQ29tcG9uZW50LnByb3AoJ3ZhbHVlJykpLnRvQmUobnVsbCk7XG5cdH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=