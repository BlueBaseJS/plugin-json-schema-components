"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const FormRadioGroupInput_1 = require("../FormRadioGroupInput");
const formik_1 = require("formik");
const plugin_material_ui_1 = tslib_1.__importDefault(require("@bluebase/plugin-material-ui"));
const index_1 = tslib_1.__importDefault(require("../../../index"));
const react_1 = tslib_1.__importDefault(require("react"));
const enzyme_1 = require("enzyme");
const enzyme_async_helpers_1 = require("enzyme-async-helpers");
const fieldProps = {
    label: 'Language',
    name: 'lang',
    type: 'radio-group',
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
describe('FormRadioGroupInput', () => {
    it('should render a radio-group with value "js"', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormRadioGroupInput_1.FormRadioGroupInput, Object.assign({}, fieldProps)))));
        await enzyme_async_helpers_1.waitForElement(component, FormRadioGroupInput_1.FormRadioGroupInput);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('RadioGroup').last().prop('name')).toBe('lang');
        expect(component.find('RadioGroup').last().prop('value')).toBe('js');
    });
    it('should update radio-group value from onValueChange callback', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormRadioGroupInput_1.FormRadioGroupInput, Object.assign({}, fieldProps)))));
        await enzyme_async_helpers_1.waitForElement(component, FormRadioGroupInput_1.FormRadioGroupInput);
        // Initial state should be false
        // Check fields
        expect(component.find('RadioGroup').first().prop('name')).toBe('lang');
        expect(component.find('RadioGroup').first().prop('value')).toBe('js');
        // Update State
        const onValueChange = component.find('RadioGroup').first().prop('onValueChange');
        onValueChange('java');
        component.update();
        // expect(component).toMatchSnapshot();
        // New state should be true
        expect(component.find('RadioGroup').first().prop('name')).toBe('lang');
        expect(component.find('RadioGroup').first().prop('value')).toBe('java');
    });
    it('should update radio-group value from onValueChange callback as prop', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormRadioGroupInput_1.FormRadioGroupInput, Object.assign({ onValueChange: () => null }, fieldProps)))));
        await enzyme_async_helpers_1.waitForElement(component, FormRadioGroupInput_1.FormRadioGroupInput);
        // Initial state should be false
        // Check fields
        expect(component.find('RadioGroup').first().prop('name')).toBe('lang');
        expect(component.find('RadioGroup').first().prop('value')).toBe('js');
        // Update State
        const onValueChange = component.find('RadioGroup').first().prop('onValueChange');
        onValueChange(null);
        component.update();
        // expect(component).toMatchSnapshot();
        // New state should be true
        expect(component.find('RadioGroup').first().prop('name')).toBe('lang');
        expect(component.find('RadioGroup').first().prop('value')).toBe(null);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1SYWRpb0dyb3VwSW5wdXQudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQTZDO0FBQzdDLGdFQUE2RDtBQUM3RCxtQ0FBZ0M7QUFDaEMsOEZBQTREO0FBQzVELG1FQUFvQztBQUNwQywwREFBMEI7QUFDMUIsbUNBQStCO0FBQy9CLCtEQUFzRDtBQUV0RCxNQUFNLFVBQVUsR0FBRztJQUNsQixLQUFLLEVBQUUsVUFBVTtJQUNqQixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxhQUFhO0lBRW5CLEtBQUssRUFBRSxDQUFDO1lBQ1AsS0FBSyxFQUFFLFlBQVk7WUFDbkIsS0FBSyxFQUFFLElBQUk7U0FDWCxFQUFFO1lBQ0YsS0FBSyxFQUFFLE1BQU07WUFDYixLQUFLLEVBQUUsTUFBTTtTQUNiLENBQUM7Q0FDRixDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUc7SUFDckIsTUFBTSxFQUFFLElBQUk7Q0FDWixDQUFDO0FBR0YsUUFBUSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsRUFBRTtJQUdwQyxFQUFFLENBQUMsNkNBQTZDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFNUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTNCLE1BQU0sU0FBUyxHQUFHLGNBQUssQ0FDdEIsOEJBQUMsa0JBQVcsSUFBQyxPQUFPLEVBQUUsQ0FBQyxlQUFNLEVBQUUsNEJBQWdCLENBQUM7WUFDL0MsOEJBQUMsZUFBTSxJQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBQ3ZELDhCQUFDLHlDQUFtQixvQkFBSyxVQUFpQixFQUFJLENBQ3RDLENBQ0ksQ0FDZCxDQUFDO1FBRUYsTUFBTSxxQ0FBYyxDQUFDLFNBQWdCLEVBQUUseUNBQW1CLENBQUMsQ0FBQztRQUU1RCx1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LElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEUsZUFBZTtRQUNmLE1BQU0sYUFBYSxHQUFRLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXRGLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsdUNBQXVDO1FBRXZDLDJCQUEyQjtRQUMzQixNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1SYWRpb0dyb3VwSW5wdXQudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2VBcHAgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBGb3JtUmFkaW9Hcm91cElucHV0IH0gZnJvbSAnLi4vRm9ybVJhZGlvR3JvdXBJbnB1dCc7XG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IE1hdGVyaWFsVUlQbHVnaW4gZnJvbSAnQGJsdWViYXNlL3BsdWdpbi1tYXRlcmlhbC11aSc7XG5pbXBvcnQgUGx1Z2luIGZyb20gJy4uLy4uLy4uL2luZGV4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcblxuY29uc3QgZmllbGRQcm9wcyA9IHtcblx0bGFiZWw6ICdMYW5ndWFnZScsXG5cdG5hbWU6ICdsYW5nJyxcblx0dHlwZTogJ3JhZGlvLWdyb3VwJyxcblxuXHRpdGVtczogW3tcblx0XHRsYWJlbDogJ0phdmFTY3JpcHQnLFxuXHRcdHZhbHVlOiAnanMnXG5cdH0sIHtcblx0XHRsYWJlbDogJ0phdmEnLFxuXHRcdHZhbHVlOiAnamF2YSdcblx0fV1cbn07XG5cbmNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG5cdCdsYW5nJzogJ2pzJyxcbn07XG5cblxuZGVzY3JpYmUoJ0Zvcm1SYWRpb0dyb3VwSW5wdXQnLCAoKSA9PiB7XG5cblxuXHRpdCgnc2hvdWxkIHJlbmRlciBhIHJhZGlvLWdyb3VwIHdpdGggdmFsdWUgXCJqc1wiJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luLCBNYXRlcmlhbFVJUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybVJhZGlvR3JvdXBJbnB1dCB7Li4uZmllbGRQcm9wcyBhcyBhbnl9IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVJhZGlvR3JvdXBJbnB1dCk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnUmFkaW9Hcm91cCcpLmxhc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2xhbmcnKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1JhZGlvR3JvdXAnKS5sYXN0KCkucHJvcCgndmFsdWUnKSkudG9CZSgnanMnKTtcblx0fSk7XG5cblx0aXQoJ3Nob3VsZCB1cGRhdGUgcmFkaW8tZ3JvdXAgdmFsdWUgZnJvbSBvblZhbHVlQ2hhbmdlIGNhbGxiYWNrJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luLCBNYXRlcmlhbFVJUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybVJhZGlvR3JvdXBJbnB1dCB7Li4uZmllbGRQcm9wcyBhcyBhbnl9IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVJhZGlvR3JvdXBJbnB1dCk7XG5cblx0XHQvLyBJbml0aWFsIHN0YXRlIHNob3VsZCBiZSBmYWxzZVxuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdSYWRpb0dyb3VwJykuZmlyc3QoKS5wcm9wKCduYW1lJykpLnRvQmUoJ2xhbmcnKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1JhZGlvR3JvdXAnKS5maXJzdCgpLnByb3AoJ3ZhbHVlJykpLnRvQmUoJ2pzJyk7XG5cblx0XHQvLyBVcGRhdGUgU3RhdGVcblx0XHRjb25zdCBvblZhbHVlQ2hhbmdlOiBhbnkgPSBjb21wb25lbnQuZmluZCgnUmFkaW9Hcm91cCcpLmZpcnN0KCkucHJvcCgnb25WYWx1ZUNoYW5nZScpO1xuXG5cdFx0b25WYWx1ZUNoYW5nZSgnamF2YScpO1xuXHRcdGNvbXBvbmVudC51cGRhdGUoKTtcblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIE5ldyBzdGF0ZSBzaG91bGQgYmUgdHJ1ZVxuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnUmFkaW9Hcm91cCcpLmZpcnN0KCkucHJvcCgnbmFtZScpKS50b0JlKCdsYW5nJyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdSYWRpb0dyb3VwJykuZmlyc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlKCdqYXZhJyk7XG5cdH0pO1xuXHRpdCgnc2hvdWxkIHVwZGF0ZSByYWRpby1ncm91cCB2YWx1ZSBmcm9tIG9uVmFsdWVDaGFuZ2UgY2FsbGJhY2sgYXMgcHJvcCcsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1SYWRpb0dyb3VwSW5wdXQgb25WYWx1ZUNoYW5nZT17KCk9Pm51bGx9IHsuLi5maWVsZFByb3BzIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtUmFkaW9Hcm91cElucHV0KTtcblxuXHRcdC8vIEluaXRpYWwgc3RhdGUgc2hvdWxkIGJlIGZhbHNlXG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ1JhZGlvR3JvdXAnKS5maXJzdCgpLnByb3AoJ25hbWUnKSkudG9CZSgnbGFuZycpO1xuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnUmFkaW9Hcm91cCcpLmZpcnN0KCkucHJvcCgndmFsdWUnKSkudG9CZSgnanMnKTtcblxuXHRcdC8vIFVwZGF0ZSBTdGF0ZVxuXHRcdGNvbnN0IG9uVmFsdWVDaGFuZ2U6IGFueSA9IGNvbXBvbmVudC5maW5kKCdSYWRpb0dyb3VwJykuZmlyc3QoKS5wcm9wKCdvblZhbHVlQ2hhbmdlJyk7XG5cblx0XHRvblZhbHVlQ2hhbmdlKG51bGwpO1xuXHRcdGNvbXBvbmVudC51cGRhdGUoKTtcblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIE5ldyBzdGF0ZSBzaG91bGQgYmUgdHJ1ZVxuXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnUmFkaW9Hcm91cCcpLmZpcnN0KCkucHJvcCgnbmFtZScpKS50b0JlKCdsYW5nJyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdSYWRpb0dyb3VwJykuZmlyc3QoKS5wcm9wKCd2YWx1ZScpKS50b0JlKG51bGwpO1xuXHR9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9