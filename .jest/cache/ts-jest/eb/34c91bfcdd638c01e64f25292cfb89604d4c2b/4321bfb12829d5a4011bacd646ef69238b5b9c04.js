"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const FormSubmitButton_1 = require("../FormSubmitButton");
const formik_1 = require("formik");
const plugin_material_ui_1 = tslib_1.__importDefault(require("@bluebase/plugin-material-ui"));
const index_1 = tslib_1.__importDefault(require("../../../index"));
const react_1 = tslib_1.__importDefault(require("react"));
const enzyme_1 = require("enzyme");
const enzyme_async_helpers_1 = require("enzyme-async-helpers");
const fieldProps = [{
        name: 'submit',
        title: 'Login',
        type: 'submit',
        nested: true
    },
    {
        name: 'submit',
        title: 'Login',
        type: 'submit',
        nested: false
    }];
const initialValues = {};
describe('FormSubmitButton', () => {
    it('should render all form fields in the schema nested true', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormSubmitButton_1.FormSubmitButton, Object.assign({}, fieldProps[0])))));
        await enzyme_async_helpers_1.waitForElement(component, FormSubmitButton_1.FormSubmitButton);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('Button').first().prop('title')).toBe('Login');
        expect(component.find('Button').first().prop('type')).toBe('submit');
        const onPress = component.find('Button').first().prop('onPress');
        onPress();
        component.update();
        const formik = component.find('Button').first().prop('formik');
        formik.handleSubmit();
        component.update();
        setTimeout(() => {
            //expect(component).toMatchSnapshot();
            expect(onSubmit).toHaveBeenCalledTimes(1);
        });
    });
    it('should render all form fields in the schema nested false', async () => {
        const onSubmit = jest.fn();
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormSubmitButton_1.FormSubmitButton, Object.assign({}, fieldProps[1])))));
        await enzyme_async_helpers_1.waitForElement(component, FormSubmitButton_1.FormSubmitButton);
        // expect(component).toMatchSnapshot();
        // Check fields
        expect(component.find('Button').first().prop('title')).toBe('Login');
        expect(component.find('Button').first().prop('type')).toBe('submit');
        // const onPress: any = component.find('Button').first().prop('onPress');
        // onPress();
        // component.update();
        // const formik: any = component.find('Button').first().prop('formik');
        // formik.handleSubmit();
        // component.update();
        setTimeout(() => {
            //expect(component).toMatchSnapshot();
            expect(onSubmit).toHaveBeenCalledTimes(0);
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1TdWJtaXRCdXR0b24udGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQTZDO0FBQzdDLDBEQUF1RDtBQUN2RCxtQ0FBZ0M7QUFDaEMsOEZBQTREO0FBQzVELG1FQUFvQztBQUNwQywwREFBMEI7QUFDMUIsbUNBQStCO0FBQy9CLCtEQUFzRDtBQUV0RCxNQUFNLFVBQVUsR0FBRyxDQUFDO1FBQ25CLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFFLE9BQU87UUFDWCxJQUFJLEVBQUUsUUFBUTtRQUNqQixNQUFNLEVBQUcsSUFBSTtLQUNiO0lBQ0Q7UUFDQyxJQUFJLEVBQUUsUUFBUTtRQUNkLEtBQUssRUFBRSxPQUFPO1FBQ1gsSUFBSSxFQUFFLFFBQVE7UUFDakIsTUFBTSxFQUFHLEtBQUs7S0FDZCxDQUFDLENBQUM7QUFFSCxNQUFNLGFBQWEsR0FBRyxFQUNyQixDQUFDO0FBR0YsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUVqQyxFQUFFLENBQUMseURBQXlELEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFeEUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTNCLE1BQU0sU0FBUyxHQUFHLGNBQUssQ0FDdEIsOEJBQUMsa0JBQVcsSUFBQyxPQUFPLEVBQUUsQ0FBQyxlQUFNLEVBQUUsNEJBQWdCLENBQUM7WUFDL0MsOEJBQUMsZUFBTSxJQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBQ3ZELDhCQUFDLG1DQUFnQixvQkFBSyxVQUFVLENBQUMsQ0FBQyxDQUFRLEVBQUksQ0FDdEMsQ0FDSSxDQUNkLENBQUM7UUFFRixNQUFNLHFDQUFjLENBQUMsU0FBZ0IsRUFBRSxtQ0FBZ0IsQ0FBQyxDQUFDO1FBRXpELHVDQUF1QztRQUV2QyxlQUFlO1FBRWYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyRSxNQUFNLE9BQU8sR0FBUSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RSxPQUFPLEVBQUUsQ0FBQztRQUNWLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUduQixNQUFNLE1BQU0sR0FBUSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRW5CLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxzQ0FBc0M7WUFDdkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBRUosQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsMERBQTBELEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFekUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTNCLE1BQU0sU0FBUyxHQUFHLGNBQUssQ0FDdEIsOEJBQUMsa0JBQVcsSUFBQyxPQUFPLEVBQUUsQ0FBQyxlQUFNLEVBQUUsNEJBQWdCLENBQUM7WUFDL0MsOEJBQUMsZUFBTSxJQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBQ3ZELDhCQUFDLG1DQUFnQixvQkFBSyxVQUFVLENBQUMsQ0FBQyxDQUFRLEVBQUksQ0FDdEMsQ0FDSSxDQUNkLENBQUM7UUFFRixNQUFNLHFDQUFjLENBQUMsU0FBZ0IsRUFBRSxtQ0FBZ0IsQ0FBQyxDQUFDO1FBRXpELHVDQUF1QztRQUV2QyxlQUFlO1FBRWYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyRSx5RUFBeUU7UUFDekUsYUFBYTtRQUNiLHNCQUFzQjtRQUd0Qix1RUFBdUU7UUFDdkUseUJBQXlCO1FBQ3pCLHNCQUFzQjtRQUV0QixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2Qsc0NBQXNDO1lBQ3ZDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUVKLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1TdWJtaXRCdXR0b24udGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2VBcHAgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBGb3JtU3VibWl0QnV0dG9uIH0gZnJvbSAnLi4vRm9ybVN1Ym1pdEJ1dHRvbic7XG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IE1hdGVyaWFsVUlQbHVnaW4gZnJvbSAnQGJsdWViYXNlL3BsdWdpbi1tYXRlcmlhbC11aSc7XG5pbXBvcnQgUGx1Z2luIGZyb20gJy4uLy4uLy4uL2luZGV4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcblxuY29uc3QgZmllbGRQcm9wcyA9IFt7XG5cdG5hbWU6ICdzdWJtaXQnLFxuXHR0aXRsZTogJ0xvZ2luJyxcbiAgICB0eXBlOiAnc3VibWl0Jyxcblx0bmVzdGVkIDogdHJ1ZVxufSxcbntcblx0bmFtZTogJ3N1Ym1pdCcsXG5cdHRpdGxlOiAnTG9naW4nLFxuICAgIHR5cGU6ICdzdWJtaXQnLFxuXHRuZXN0ZWQgOiBmYWxzZVxufV07XG5cbmNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG59O1xuXG5cbmRlc2NyaWJlKCdGb3JtU3VibWl0QnV0dG9uJywgKCkgPT4ge1xuXHRcblx0aXQoJ3Nob3VsZCByZW5kZXIgYWxsIGZvcm0gZmllbGRzIGluIHRoZSBzY2hlbWEgbmVzdGVkIHRydWUnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW4sIE1hdGVyaWFsVUlQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtU3VibWl0QnV0dG9uIHsuLi5maWVsZFByb3BzWzBdIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtU3VibWl0QnV0dG9uKTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdCdXR0b24nKS5maXJzdCgpLnByb3AoJ3RpdGxlJykpLnRvQmUoJ0xvZ2luJyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdCdXR0b24nKS5maXJzdCgpLnByb3AoJ3R5cGUnKSkudG9CZSgnc3VibWl0Jyk7XG5cblx0XHRjb25zdCBvblByZXNzOiBhbnkgPSBjb21wb25lbnQuZmluZCgnQnV0dG9uJykuZmlyc3QoKS5wcm9wKCdvblByZXNzJyk7XG5cdFx0b25QcmVzcygpO1xuXHRcdGNvbXBvbmVudC51cGRhdGUoKTtcblxuXG5cdFx0Y29uc3QgZm9ybWlrOiBhbnkgPSBjb21wb25lbnQuZmluZCgnQnV0dG9uJykuZmlyc3QoKS5wcm9wKCdmb3JtaWsnKTtcblx0XHRmb3JtaWsuaGFuZGxlU3VibWl0KCk7XG5cdFx0Y29tcG9uZW50LnVwZGF0ZSgpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHQgLy9leHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblx0XHRcdGV4cGVjdChvblN1Ym1pdCkudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpO1xuXHRcdH0pO1xuXG5cdH0pO1xuXHRpdCgnc2hvdWxkIHJlbmRlciBhbGwgZm9ybSBmaWVsZHMgaW4gdGhlIHNjaGVtYSBuZXN0ZWQgZmFsc2UnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW4sIE1hdGVyaWFsVUlQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtU3VibWl0QnV0dG9uIHsuLi5maWVsZFByb3BzWzFdIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtU3VibWl0QnV0dG9uKTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdCdXR0b24nKS5maXJzdCgpLnByb3AoJ3RpdGxlJykpLnRvQmUoJ0xvZ2luJyk7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdCdXR0b24nKS5maXJzdCgpLnByb3AoJ3R5cGUnKSkudG9CZSgnc3VibWl0Jyk7XG5cblx0XHQvLyBjb25zdCBvblByZXNzOiBhbnkgPSBjb21wb25lbnQuZmluZCgnQnV0dG9uJykuZmlyc3QoKS5wcm9wKCdvblByZXNzJyk7XG5cdFx0Ly8gb25QcmVzcygpO1xuXHRcdC8vIGNvbXBvbmVudC51cGRhdGUoKTtcblxuXG5cdFx0Ly8gY29uc3QgZm9ybWlrOiBhbnkgPSBjb21wb25lbnQuZmluZCgnQnV0dG9uJykuZmlyc3QoKS5wcm9wKCdmb3JtaWsnKTtcblx0XHQvLyBmb3JtaWsuaGFuZGxlU3VibWl0KCk7XG5cdFx0Ly8gY29tcG9uZW50LnVwZGF0ZSgpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHQgLy9leHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblx0XHRcdGV4cGVjdChvblN1Ym1pdCkudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDApO1xuXHRcdH0pO1xuXG5cdH0pO1xufSk7XG5cbiJdLCJ2ZXJzaW9uIjozfQ==