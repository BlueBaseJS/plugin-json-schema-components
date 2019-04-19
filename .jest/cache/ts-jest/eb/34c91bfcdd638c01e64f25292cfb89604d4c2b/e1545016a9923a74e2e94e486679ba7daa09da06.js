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
    it('should update slider value from onValueChange callback', async () => {
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
        onValueChange(20);
        component.update();
        // expect(component).toMatchSnapshot();
        // New state should be true
        SliderComponent = component.find('Slider').first();
        expect(SliderComponent.prop('name')).toBe('temp');
        expect(SliderComponent.prop('value')).toBe(20);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1SYW5nZUlucHV0LnRlc3QudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE2QztBQUM3QyxzREFBbUQ7QUFDbkQsbUNBQWdDO0FBQ2hDLG1FQUFvQztBQUNwQywwREFBMEI7QUFDMUIsbUNBQStCO0FBQy9CLCtEQUFzRDtBQUV0RCxNQUFNLFVBQVUsR0FBRztJQUNsQixLQUFLLEVBQUUsTUFBTTtJQUNiLEdBQUcsRUFBRSxFQUFFO0lBQ1AsR0FBRyxFQUFFLEVBQUU7SUFDUCxJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxDQUFDO0lBQ1AsSUFBSSxFQUFFLE9BQU87Q0FDYixDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUc7SUFDckIsTUFBTSxFQUFFLEVBQUU7Q0FDVixDQUFDO0FBR0YsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtJQUcvQixFQUFFLENBQUMsc0NBQXNDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFckQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTNCLE1BQU0sU0FBUyxHQUFHLGNBQUssQ0FDdEIsOEJBQUMsa0JBQVcsSUFBQyxPQUFPLEVBQUUsQ0FBQyxlQUFNLENBQUM7WUFDN0IsOEJBQUMsZUFBTSxJQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBQ3ZELDhCQUFDLCtCQUFjLG9CQUFLLFVBQWlCLEVBQUksQ0FDakMsQ0FDSSxDQUNkLENBQUM7UUFFRixNQUFNLHFDQUFjLENBQUMsU0FBZ0IsRUFBRSwrQkFBYyxDQUFDLENBQUM7UUFFdkQsdUNBQXVDO1FBRXZDLGVBQWU7UUFDZixNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHdEQUF3RCxFQUFFLEtBQUssSUFBSSxFQUFFO1FBRXZFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLFNBQVMsR0FBRyxjQUFLLENBQ3RCLDhCQUFDLGtCQUFXLElBQUMsT0FBTyxFQUFFLENBQUMsZUFBTSxDQUFDO1lBQzdCLDhCQUFDLGVBQU0sSUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxRQUFRO2dCQUN2RCw4QkFBQywrQkFBYyxvQkFBSyxVQUFpQixFQUFJLENBQ2pDLENBQ0ksQ0FDZCxDQUFDO1FBRUYsTUFBTSxxQ0FBYyxDQUFDLFNBQWdCLEVBQUUsK0JBQWMsQ0FBQyxDQUFDO1FBRXZELGdDQUFnQztRQUNoQyxJQUFJLGVBQWUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXRELGVBQWU7UUFDZixNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUvQyxlQUFlO1FBQ2YsTUFBTSxhQUFhLEdBQVEsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVqRSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEIsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLHVDQUF1QztRQUV2QywyQkFBMkI7UUFDM0IsZUFBZSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9fX3Rlc3RzX18vRm9ybVJhbmdlSW5wdXQudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2VBcHAgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBGb3JtUmFuZ2VJbnB1dCB9IGZyb20gJy4uL0Zvcm1SYW5nZUlucHV0JztcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgUGx1Z2luIGZyb20gJy4uLy4uLy4uL2luZGV4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcblxuY29uc3QgZmllbGRQcm9wcyA9IHtcblx0bGFiZWw6ICdUZW1wJyxcblx0bWF4OiAzMixcblx0bWluOiAxNixcblx0bmFtZTogJ3RlbXAnLFxuXHRzdGVwOiAxLFxuXHR0eXBlOiAncmFuZ2UnLFxufTtcblxuY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcblx0J3RlbXAnOiAyNixcbn07XG5cblxuZGVzY3JpYmUoJ0Zvcm1SYW5nZUlucHV0JywgKCkgPT4ge1xuXG5cblx0aXQoJ3Nob3VsZCByZW5kZXIgYSBzbGlkZXIgd2l0aCB2YWx1ZSAyNicsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1SYW5nZUlucHV0IHsuLi5maWVsZFByb3BzIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtUmFuZ2VJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnU2xpZGVyJykubGFzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgndGVtcCcpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnU2xpZGVyJykubGFzdCgpLnByb3AoJ3ZhbHVlJykpLnRvQmUoMjYpO1xuXHR9KTtcblxuXHRpdCgnc2hvdWxkIHVwZGF0ZSBzbGlkZXIgdmFsdWUgZnJvbSBvblZhbHVlQ2hhbmdlIGNhbGxiYWNrJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybVJhbmdlSW5wdXQgey4uLmZpZWxkUHJvcHMgYXMgYW55fSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1SYW5nZUlucHV0KTtcblxuXHRcdC8vIEluaXRpYWwgc3RhdGUgc2hvdWxkIGJlIGZhbHNlXG5cdFx0bGV0IFNsaWRlckNvbXBvbmVudCA9IGNvbXBvbmVudC5maW5kKCdTbGlkZXInKS5sYXN0KCk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QoU2xpZGVyQ29tcG9uZW50LnByb3AoJ25hbWUnKSkudG9CZSgndGVtcCcpO1xuXHRcdGV4cGVjdChTbGlkZXJDb21wb25lbnQucHJvcCgndmFsdWUnKSkudG9CZSgyNik7XG5cblx0XHQvLyBVcGRhdGUgU3RhdGVcblx0XHRjb25zdCBvblZhbHVlQ2hhbmdlOiBhbnkgPSBTbGlkZXJDb21wb25lbnQucHJvcCgnb25WYWx1ZUNoYW5nZScpO1xuXG5cdFx0b25WYWx1ZUNoYW5nZSgyMCk7XG5cdFx0Y29tcG9uZW50LnVwZGF0ZSgpO1xuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gTmV3IHN0YXRlIHNob3VsZCBiZSB0cnVlXG5cdFx0U2xpZGVyQ29tcG9uZW50ID0gY29tcG9uZW50LmZpbmQoJ1NsaWRlcicpLmZpcnN0KCk7XG5cdFx0ZXhwZWN0KFNsaWRlckNvbXBvbmVudC5wcm9wKCduYW1lJykpLnRvQmUoJ3RlbXAnKTtcblx0XHRleHBlY3QoU2xpZGVyQ29tcG9uZW50LnByb3AoJ3ZhbHVlJykpLnRvQmUoMjApO1xuXHR9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9