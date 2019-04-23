"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const FormResetButton_1 = require("../FormResetButton");
const formik_1 = require("formik");
const plugin_material_ui_1 = tslib_1.__importDefault(require("@bluebase/plugin-material-ui"));
const index_1 = tslib_1.__importDefault(require("../../../index"));
const react_1 = tslib_1.__importDefault(require("react"));
const enzyme_1 = require("enzyme");
const enzyme_async_helpers_1 = require("enzyme-async-helpers");
const fieldProps = [{
        name: 'reset',
        type: 'reset',
        nested: true
    },
    {
        name: 'reset',
        type: 'reset',
        nested: false
    },
];
const initialValues = {};
describe('FormResetButton', () => {
    it('should render all form fields in the schema with nested true', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormResetButton_1.FormResetButton, Object.assign({}, fieldProps[0])))));
        await enzyme_async_helpers_1.waitForElement(component, FormResetButton_1.FormResetButton);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('Button').first().prop('title')).toBe('Reset');
        expect(component.find('Button').first().prop('type')).toBe('reset');
    });
    it('should render all form fields in the schema with nested false', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormResetButton_1.FormResetButton, Object.assign({ styles: { wrapper: {} } }, fieldProps[1])))));
        await enzyme_async_helpers_1.waitForElement(component, FormResetButton_1.FormResetButton);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('Button').first().prop('title')).toBe('Reset');
        expect(component.find('Button').first().prop('type')).toBe('reset');
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1SZXNldEJ1dHRvbi50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBNkM7QUFDN0Msd0RBQXFEO0FBQ3JELG1DQUFnQztBQUNoQyw4RkFBNEQ7QUFDNUQsbUVBQW9DO0FBQ3BDLDBEQUEwQjtBQUMxQixtQ0FBK0I7QUFDL0IsK0RBQXNEO0FBRXRELE1BQU0sVUFBVSxHQUFHLENBQUM7UUFDbkIsSUFBSSxFQUFFLE9BQU87UUFDYixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRyxJQUFJO0tBQ2I7SUFDRDtRQUNDLElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUcsS0FBSztLQUNkO0NBRUEsQ0FBQTtBQUVELE1BQU0sYUFBYSxHQUFHLEVBQ3JCLENBQUM7QUFHRixRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBR2hDLEVBQUUsQ0FBQyw4REFBOEQsRUFBRSxLQUFLLElBQUksRUFBRTtRQUU3RSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFM0IsTUFBTSxTQUFTLEdBQUcsY0FBSyxDQUN0Qiw4QkFBQyxrQkFBVyxJQUFDLE9BQU8sRUFBRSxDQUFDLGVBQU0sRUFBRSw0QkFBZ0IsQ0FBQztZQUMvQyw4QkFBQyxlQUFNLElBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsUUFBUTtnQkFDdkQsOEJBQUMsaUNBQWUsb0JBQUssVUFBVSxDQUFDLENBQUMsQ0FBUSxFQUFJLENBQ3JDLENBQ0ksQ0FDZCxDQUFDO1FBQ0YsTUFBTSxxQ0FBYyxDQUFDLFNBQWdCLEVBQUUsaUNBQWUsQ0FBQyxDQUFDO1FBRXhELHVDQUF1QztRQUV2QyxlQUFlO1FBQ2YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrREFBK0QsRUFBRSxLQUFLLElBQUksRUFBRTtRQUU5RSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFM0IsTUFBTSxTQUFTLEdBQUcsY0FBSyxDQUN0Qiw4QkFBQyxrQkFBVyxJQUFDLE9BQU8sRUFBRSxDQUFDLGVBQU0sRUFBRSw0QkFBZ0IsQ0FBQztZQUMvQyw4QkFBQyxlQUFNLElBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsUUFBUTtnQkFDdkQsOEJBQUMsaUNBQWUsa0JBQUUsTUFBTSxFQUFFLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxJQUFNLFVBQVUsQ0FBQyxDQUFDLENBQVEsRUFBSSxDQUM1RCxDQUNJLENBQ2QsQ0FBQztRQUNGLE1BQU0scUNBQWMsQ0FBQyxTQUFnQixFQUFFLGlDQUFlLENBQUMsQ0FBQztRQUV4RCx1Q0FBdUM7UUFFdkMsZUFBZTtRQUNmLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckUsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9fX3Rlc3RzX18vRm9ybVJlc2V0QnV0dG9uLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlQXBwIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IHsgRm9ybVJlc2V0QnV0dG9uIH0gZnJvbSAnLi4vRm9ybVJlc2V0QnV0dG9uJztcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgTWF0ZXJpYWxVSVBsdWdpbiBmcm9tICdAYmx1ZWJhc2UvcGx1Z2luLW1hdGVyaWFsLXVpJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vLi4vLi4vaW5kZXgnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcbmltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuXG5jb25zdCBmaWVsZFByb3BzID0gW3tcblx0bmFtZTogJ3Jlc2V0Jyxcblx0dHlwZTogJ3Jlc2V0Jyxcblx0bmVzdGVkIDogdHJ1ZVxufSxcbntcblx0bmFtZTogJ3Jlc2V0Jyxcblx0dHlwZTogJ3Jlc2V0Jyxcblx0bmVzdGVkIDogZmFsc2Vcbn0sXG5cbl1cblxuY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcbn07XG5cblxuZGVzY3JpYmUoJ0Zvcm1SZXNldEJ1dHRvbicsICgpID0+IHtcblxuXG5cdGl0KCdzaG91bGQgcmVuZGVyIGFsbCBmb3JtIGZpZWxkcyBpbiB0aGUgc2NoZW1hIHdpdGggbmVzdGVkIHRydWUnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblx0XHRcblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luLCBNYXRlcmlhbFVJUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybVJlc2V0QnV0dG9uIHsuLi5maWVsZFByb3BzWzBdIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVJlc2V0QnV0dG9uKTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdCdXR0b24nKS5maXJzdCgpLnByb3AoJ3RpdGxlJykpLnRvQmUoJ1Jlc2V0Jyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdCdXR0b24nKS5maXJzdCgpLnByb3AoJ3R5cGUnKSkudG9CZSgncmVzZXQnKTtcblx0fSk7XG5cblx0aXQoJ3Nob3VsZCByZW5kZXIgYWxsIGZvcm0gZmllbGRzIGluIHRoZSBzY2hlbWEgd2l0aCBuZXN0ZWQgZmFsc2UnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblx0XHRcblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luLCBNYXRlcmlhbFVJUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybVJlc2V0QnV0dG9uICBzdHlsZXM9e3t3cmFwcGVyOnt9fX0gey4uLmZpZWxkUHJvcHNbMV0gYXMgYW55fSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtUmVzZXRCdXR0b24pO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0J1dHRvbicpLmZpcnN0KCkucHJvcCgndGl0bGUnKSkudG9CZSgnUmVzZXQnKTtcblx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0J1dHRvbicpLmZpcnN0KCkucHJvcCgndHlwZScpKS50b0JlKCdyZXNldCcpO1xuXHR9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9