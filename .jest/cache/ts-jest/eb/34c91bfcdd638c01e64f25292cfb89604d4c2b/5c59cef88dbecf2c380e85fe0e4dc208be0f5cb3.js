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
    it('should update picker value from onValueChange callback with null', async () => {
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
        onValueChange(null);
        component.update();
        // expect(component).toMatchSnapshot();
        // New state should be true
        PickerComponent = component.find('Picker').first();
        expect(PickerComponent.prop('name')).toBe('lang');
        expect(PickerComponent.prop('value')).toBe(null);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1QaWNrZXJJbnB1dC50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBNkM7QUFDN0Msd0RBQXFEO0FBQ3JELG1DQUFnQztBQUNoQyxtRUFBb0M7QUFDcEMsMERBQTBCO0FBQzFCLG1DQUErQjtBQUMvQiwrREFBc0Q7QUFFdEQsTUFBTSxVQUFVLEdBQUc7SUFDbEIsS0FBSyxFQUFFLFVBQVU7SUFDakIsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsUUFBUTtJQUVkLEtBQUssRUFBRSxDQUFDO1lBQ1AsS0FBSyxFQUFFLFlBQVk7WUFDbkIsS0FBSyxFQUFFLElBQUk7U0FDWCxFQUFFO1lBQ0YsS0FBSyxFQUFFLE1BQU07WUFDYixLQUFLLEVBQUUsTUFBTTtTQUNiLENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUc7SUFDckIsTUFBTSxFQUFFLElBQUk7Q0FDWixDQUFDO0FBR0YsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUdoQyxFQUFFLENBQUMsd0NBQXdDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFdkQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTNCLE1BQU0sU0FBUyxHQUFHLGNBQUssQ0FDdEIsOEJBQUMsa0JBQVcsSUFBQyxPQUFPLEVBQUUsQ0FBQyxlQUFNLENBQUM7WUFDN0IsOEJBQUMsZUFBTSxJQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBQ3ZELDhCQUFDLGlDQUFlLG9CQUFLLFVBQWlCLEVBQUksQ0FDbEMsQ0FDSSxDQUNkLENBQUM7UUFFRixNQUFNLHFDQUFjLENBQUMsU0FBZ0IsRUFBRSxpQ0FBZSxDQUFDLENBQUM7UUFFeEQsdUNBQXVDO1FBRXZDLGVBQWU7UUFDZixNQUFNLENBQUMs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Q0FBQyxDQUFDO1FBRWpELGVBQWU7UUFDZixNQUFNLGFBQWEsR0FBUSxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRWpFLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsdUNBQXVDO1FBRXZDLDJCQUEyQjtRQUMzQixlQUFlLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuRCxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL19fdGVzdHNfXy9Gb3JtUGlja2VySW5wdXQudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2VBcHAgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBGb3JtUGlja2VySW5wdXQgfSBmcm9tICcuLi9Gb3JtUGlja2VySW5wdXQnO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vLi4vLi4vaW5kZXgnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcbmltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuXG5jb25zdCBmaWVsZFByb3BzID0ge1xuXHRsYWJlbDogJ0xhbmd1YWdlJyxcblx0bmFtZTogJ2xhbmcnLFxuXHR0eXBlOiAncGlja2VyJyxcblxuXHRpdGVtczogW3tcblx0XHRsYWJlbDogJ0phdmFTY3JpcHQnLFxuXHRcdHZhbHVlOiAnanMnXG5cdH0sIHtcblx0XHRsYWJlbDogJ0phdmEnLFxuXHRcdHZhbHVlOiAnamF2YSdcblx0fV1cbn07XG5cbmNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG5cdCdsYW5nJzogJ2pzJyxcbn07XG5cblxuZGVzY3JpYmUoJ0Zvcm1QaWNrZXJJbnB1dCcsICgpID0+IHtcblxuXG5cdGl0KCdzaG91bGQgcmVuZGVyIGEgcGlja2VyIHdpdGggdmFsdWUgXCJqc1wiJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybVBpY2tlcklucHV0IHsuLi5maWVsZFByb3BzIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtUGlja2VySW5wdXQpO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1BpY2tlcicpLmxhc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2xhbmcnKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1BpY2tlcicpLmxhc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlKCdqcycpO1xuXHR9KTtcblxuXHRpdCgnc2hvdWxkIHVwZGF0ZSBwaWNrZXIgdmFsdWUgZnJvbSBvblZhbHVlQ2hhbmdlIGNhbGxiYWNrJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybVBpY2tlcklucHV0IHsuLi5maWVsZFByb3BzIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtUGlja2VySW5wdXQpO1xuXG5cdFx0Ly8gSW5pdGlhbCBzdGF0ZSBzaG91bGQgYmUgZmFsc2Vcblx0XHRsZXQgUGlja2VyQ29tcG9uZW50ID0gY29tcG9uZW50LmZpbmQoJ1BpY2tlcicpLmxhc3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChQaWNrZXJDb21wb25lbnQucHJvcCgnbmFtZScpKS50b0JlKCdsYW5nJyk7XG5cdFx0ZXhwZWN0KFBpY2tlckNvbXBvbmVudC5wcm9wKCd2YWx1ZScpKS50b0JlKCdqcycpO1xuXG5cdFx0Ly8gVXBkYXRlIFN0YXRlXG5cdFx0Y29uc3Qgb25WYWx1ZUNoYW5nZTogYW55ID0gUGlja2VyQ29tcG9uZW50LnByb3AoJ29uVmFsdWVDaGFuZ2UnKTtcblxuXHRcdG9uVmFsdWVDaGFuZ2UoJ2phdmEnKTtcblx0XHRjb21wb25lbnQudXBkYXRlKCk7XG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHQvLyBOZXcgc3RhdGUgc2hvdWxkIGJlIHRydWVcblx0XHRQaWNrZXJDb21wb25lbnQgPSBjb21wb25lbnQuZmluZCgnUGlja2VyJykuZmlyc3QoKTtcblx0XHRleHBlY3QoUGlja2VyQ29tcG9uZW50LnByb3AoJ25hbWUnKSkudG9CZSgnbGFuZycpO1xuXHRcdGV4cGVjdChQaWNrZXJDb21wb25lbnQucHJvcCgndmFsdWUnKSkudG9CZSgnamF2YScpO1xuXHR9KTtcblx0aXQoJ3Nob3VsZCB1cGRhdGUgcGlja2VyIHZhbHVlIGZyb20gb25WYWx1ZUNoYW5nZSBjYWxsYmFjayB3aXRoIG51bGwnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtUGlja2VySW5wdXQgey4uLmZpZWxkUHJvcHMgYXMgYW55fSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1QaWNrZXJJbnB1dCk7XG5cblx0XHQvLyBJbml0aWFsIHN0YXRlIHNob3VsZCBiZSBmYWxzZVxuXHRcdGxldCBQaWNrZXJDb21wb25lbnQgPSBjb21wb25lbnQuZmluZCgnUGlja2VyJykubGFzdCgpO1xuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0ZXhwZWN0KFBpY2tlckNvbXBvbmVudC5wcm9wKCduYW1lJykpLnRvQmUoJ2xhbmcnKTtcblx0XHRleHBlY3QoUGlja2VyQ29tcG9uZW50LnByb3AoJ3ZhbHVlJykpLnRvQmUoJ2pzJyk7XG5cblx0XHQvLyBVcGRhdGUgU3RhdGVcblx0XHRjb25zdCBvblZhbHVlQ2hhbmdlOiBhbnkgPSBQaWNrZXJDb21wb25lbnQucHJvcCgnb25WYWx1ZUNoYW5nZScpO1xuXG5cdFx0b25WYWx1ZUNoYW5nZShudWxsKTtcblx0XHRjb21wb25lbnQudXBkYXRlKCk7XG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHQvLyBOZXcgc3RhdGUgc2hvdWxkIGJlIHRydWVcblx0XHRQaWNrZXJDb21wb25lbnQgPSBjb21wb25lbnQuZmluZCgnUGlja2VyJykuZmlyc3QoKTtcblx0XHRleHBlY3QoUGlja2VyQ29tcG9uZW50LnByb3AoJ25hbWUnKSkudG9CZSgnbGFuZycpO1xuXHRcdGV4cGVjdChQaWNrZXJDb21wb25lbnQucHJvcCgndmFsdWUnKSkudG9CZShudWxsKTtcblx0fSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==