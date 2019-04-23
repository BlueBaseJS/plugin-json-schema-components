"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const FormRangeInput_1 = require("../FormRangeInput");
const formik_1 = require("formik");
const index_1 = tslib_1.__importDefault(require("../../../index"));
const react_1 = tslib_1.__importDefault(require("react"));
const enzyme_1 = require("enzyme");
const enzyme_async_helpers_1 = require("enzyme-async-helpers");
const fieldProps = {
    label: 'Temp',
    max: 32,
    min: 16,
    name: 'temp',
    step: 1,
    type: 'range',
};
const initialValues = {
    'temp': 26,
};
describe('FormRangeInput', () => {
    it('should render a slider with value 26', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormRangeInput_1.FormRangeInput, Object.assign({}, fieldProps)))));
        await enzyme_async_helpers_1.waitForElement(component, FormRangeInput_1.FormRangeInput);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('Slider').last().prop('name')).toBe('temp');
        expect(component.find('Slider').last().prop('value')).toBe(26);
    });
    it('should update slider value from onValueChange callback with no as prop', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormRangeInput_1.FormRangeInput, Object.assign({}, fieldProps)))));
        await enzyme_async_helpers_1.waitForElement(component, FormRangeInput_1.FormRangeInput);
        // Initial state should be false
        let SliderComponent = component.find('Slider').last();
        // Check fields
        expect(SliderComponent.prop('name')).toBe('temp');
        expect(SliderComponent.prop('value')).toBe(26);
        // Update State
        const onValueChange = SliderComponent.prop('onValueChange');
        onValueChange(null);
        component.update();
        // expect(component).toMatchSnapshot();
        // New state should be true
        SliderComponent = component.find('Slider').first();
        expect(SliderComponent.prop('name')).toBe('temp');
        expect(SliderComponent.prop('value')).toBe(null);
    });
    it('should update slider value from onValueChange callback as prop', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormRangeInput_1.FormRangeInput, Object.assign({ onValueChange: () => null }, fieldProps)))));
        await enzyme_async_helpers_1.waitForElement(component, FormRangeInput_1.FormRangeInput);
        // Initial state should be false
        let SliderComponent = component.find('Slider').last();
        // Check fields
        expect(SliderComponent.prop('name')).toBe('temp');
        expect(SliderComponent.prop('value')).toBe(26);
        // Update State
        const onValueChange = SliderComponent.prop('onValueChange');
        onValueChange(20);
        component.update();
        // expect(component).toMatchSnapshot();
        // New state should be true
        SliderComponent = component.find('Slider').first();
        expect(SliderComponent.prop('name')).toBe('temp');
        expect(SliderComponent.prop('value')).toBe(20);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1SYW5nZUlucHV0LnRlc3QudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE2QztBQUM3QyxzREFBbUQ7QUFDbkQsbUNBQWdDO0FBQ2hDLG1FQUFvQztBQUNwQywwREFBMEI7QUFDMUIsbUNBQStCO0FBQy9CLCtEQUFzRDtBQUV0RCxNQUFNLFVBQVUsR0FBRztJQUNsQixLQUFLLEVBQUUsTUFBTTtJQUNiLEdBQUcsRUFBRSxFQUFFO0lBQ1AsR0FBRyxFQUFFLEVBQUU7SUFDUCxJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxDQUFDO0lBQ1AsSUFBSSxFQUFFLE9BQU87Q0FDYixDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUc7SUFDckIsTUFBTSxFQUFFLEVBQUU7Q0FDVixDQUFDO0FBR0YsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtJQUcvQixFQUFFLENBQUMsc0NBQXNDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFckQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTNCLE1BQU0sU0FBUyxHQUFHLGNBQUssQ0FDdEIsOEJBQUMsa0JBQVcsSUFBQyxPQUFPLEVBQUUsQ0FBQyxlQUFNLENBQUM7WUFDN0IsOEJBQUMsZUFBTSxJQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBQ3ZELDhCQUFDLCtCQUFjLG9CQUFLLFVBQWlCLEVBQUksQ0FDakMsQ0FDSSxDQUNkLENBQUM7UUFFRixNQUFNLHFDQUFjLENBQUMsU0FBZ0IsRUFBRSwrQkFBYyxDQUFDLENBQUM7UUFFdkQsdUNBQXVDO1FBRXZDLGVBQWU7UUFDZixNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHdFQUF3RSxFQUFFLEtBQUssSUFBSSxFQUFFO1FBRXZGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLFNBQVMsR0FBRyxjQUFLLENBQ3RCLDhCQUFDLGtCQUFXLElBQUMsT0FBTyxFQUFFLENBQUMsZUFBTSxDQUFDO1lBQzdCLDhCQUFDLGVBQU0sSUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxRQUFRO2dCQUN2RCw4QkFBQywrQkFBYyxvQkFBSyxVQUFpQixFQUFJLENBQ2pDLENBQ0ksQ0FDZCxDQUFDO1FBRUYsTUFBTSxxQ0FBYyxDQUFDLFNBQWdCLEVBQUUsK0JBQWMsQ0FBQyxDQUFDO1FBRXZELGdDQUFnQztRQUNoQyxJQUFJLGVBQWUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXRELGVBQWU7UUFDZixNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUvQyxlQUFlO1FBQ2YsTUFBTSxhQUFhLEdBQVEsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVqRSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLHVDQUF1QztRQUV2QywyQkFBMkI7UUFDM0IsZUFBZSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0VBQWdFLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFL0UsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTNCLE1BQU0sU0FBUyxHQUFHLGNBQUssQ0FDdEIsOEJBQUMsa0JBQVcsSUFBQyxPQUFPLEVBQUUsQ0FBQyxlQUFNLENBQUM7WUFDN0IsOEJBQUMsZUFBTSxJQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBQ3ZELDhCQUFDLCtCQUFjLGtCQUFDLGFBQWEsRUFBRSxHQUFFLEVBQUUsQ0FBQSxJQUFJLElBQU0sVUFBaUIsRUFBSSxDQUMxRCxDQUNJLENBQ2QsQ0FBQztRQUVGLE1BQU0scUNBQWMsQ0FBQyxTQUFnQixFQUFFLCtCQUFjLENBQUMsQ0FBQztRQUV2RCxnQ0FBZ0M7UUFDaEMsSUFBSSxlQUFlLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV0RCxlQUFlO1FBQ2YsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFL0MsZUFBZTtRQUNmLE1BQU0sYUFBYSxHQUFRLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFakUsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQix1Q0FBdUM7UUFFdkMsMkJBQTJCO1FBQzNCLGVBQWUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUMsQ0FBQyxDQUFDO0FBRUosQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1SYW5nZUlucHV0LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlQXBwIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IHsgRm9ybVJhbmdlSW5wdXQgfSBmcm9tICcuLi9Gb3JtUmFuZ2VJbnB1dCc7XG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi8uLi8uLi9pbmRleCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5cbmNvbnN0IGZpZWxkUHJvcHMgPSB7XG5cdGxhYmVsOiAnVGVtcCcsXG5cdG1heDogMzIsXG5cdG1pbjogMTYsXG5cdG5hbWU6ICd0ZW1wJyxcblx0c3RlcDogMSxcblx0dHlwZTogJ3JhbmdlJyxcbn07XG5cbmNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG5cdCd0ZW1wJzogMjYsXG59O1xuXG5cbmRlc2NyaWJlKCdGb3JtUmFuZ2VJbnB1dCcsICgpID0+IHtcblxuXG5cdGl0KCdzaG91bGQgcmVuZGVyIGEgc2xpZGVyIHdpdGggdmFsdWUgMjYnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtUmFuZ2VJbnB1dCB7Li4uZmllbGRQcm9wcyBhcyBhbnl9IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVJhbmdlSW5wdXQpO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1NsaWRlcicpLmxhc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ3RlbXAnKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1NsaWRlcicpLmxhc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlKDI2KTtcblx0fSk7XG5cdFxuXHRpdCgnc2hvdWxkIHVwZGF0ZSBzbGlkZXIgdmFsdWUgZnJvbSBvblZhbHVlQ2hhbmdlIGNhbGxiYWNrIHdpdGggbm8gYXMgcHJvcCcsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1SYW5nZUlucHV0IHsuLi5maWVsZFByb3BzIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtUmFuZ2VJbnB1dCk7XG5cblx0XHQvLyBJbml0aWFsIHN0YXRlIHNob3VsZCBiZSBmYWxzZVxuXHRcdGxldCBTbGlkZXJDb21wb25lbnQgPSBjb21wb25lbnQuZmluZCgnU2xpZGVyJykubGFzdCgpO1xuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0ZXhwZWN0KFNsaWRlckNvbXBvbmVudC5wcm9wKCduYW1lJykpLnRvQmUoJ3RlbXAnKTtcblx0XHRleHBlY3QoU2xpZGVyQ29tcG9uZW50LnByb3AoJ3ZhbHVlJykpLnRvQmUoMjYpO1xuXG5cdFx0Ly8gVXBkYXRlIFN0YXRlXG5cdFx0Y29uc3Qgb25WYWx1ZUNoYW5nZTogYW55ID0gU2xpZGVyQ29tcG9uZW50LnByb3AoJ29uVmFsdWVDaGFuZ2UnKTtcblxuXHRcdG9uVmFsdWVDaGFuZ2UobnVsbCk7XG5cdFx0Y29tcG9uZW50LnVwZGF0ZSgpO1xuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gTmV3IHN0YXRlIHNob3VsZCBiZSB0cnVlXG5cdFx0U2xpZGVyQ29tcG9uZW50ID0gY29tcG9uZW50LmZpbmQoJ1NsaWRlcicpLmZpcnN0KCk7XG5cdFx0ZXhwZWN0KFNsaWRlckNvbXBvbmVudC5wcm9wKCduYW1lJykpLnRvQmUoJ3RlbXAnKTtcblx0XHRleHBlY3QoU2xpZGVyQ29tcG9uZW50LnByb3AoJ3ZhbHVlJykpLnRvQmUobnVsbCk7XG5cdH0pO1xuXG5cdGl0KCdzaG91bGQgdXBkYXRlIHNsaWRlciB2YWx1ZSBmcm9tIG9uVmFsdWVDaGFuZ2UgY2FsbGJhY2sgYXMgcHJvcCcsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1SYW5nZUlucHV0IG9uVmFsdWVDaGFuZ2U9eygpPT5udWxsfSB7Li4uZmllbGRQcm9wcyBhcyBhbnl9IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVJhbmdlSW5wdXQpO1xuXG5cdFx0Ly8gSW5pdGlhbCBzdGF0ZSBzaG91bGQgYmUgZmFsc2Vcblx0XHRsZXQgU2xpZGVyQ29tcG9uZW50ID0gY29tcG9uZW50LmZpbmQoJ1NsaWRlcicpLmxhc3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChTbGlkZXJDb21wb25lbnQucHJvcCgnbmFtZScpKS50b0JlKCd0ZW1wJyk7XG5cdFx0ZXhwZWN0KFNsaWRlckNvbXBvbmVudC5wcm9wKCd2YWx1ZScpKS50b0JlKDI2KTtcblxuXHRcdC8vIFVwZGF0ZSBTdGF0ZVxuXHRcdGNvbnN0IG9uVmFsdWVDaGFuZ2U6IGFueSA9IFNsaWRlckNvbXBvbmVudC5wcm9wKCdvblZhbHVlQ2hhbmdlJyk7XG5cblx0XHRvblZhbHVlQ2hhbmdlKDIwKTtcblx0XHRjb21wb25lbnQudXBkYXRlKCk7XG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHQvLyBOZXcgc3RhdGUgc2hvdWxkIGJlIHRydWVcblx0XHRTbGlkZXJDb21wb25lbnQgPSBjb21wb25lbnQuZmluZCgnU2xpZGVyJykuZmlyc3QoKTtcblx0XHRleHBlY3QoU2xpZGVyQ29tcG9uZW50LnByb3AoJ25hbWUnKSkudG9CZSgndGVtcCcpO1xuXHRcdGV4cGVjdChTbGlkZXJDb21wb25lbnQucHJvcCgndmFsdWUnKSkudG9CZSgyMCk7XG5cdH0pO1xuXG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==