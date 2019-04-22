"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const formik_1 = require("formik");
const plugin_material_ui_1 = tslib_1.__importDefault(require("@bluebase/plugin-material-ui"));
const index_1 = tslib_1.__importDefault(require("../../../index"));
const react_1 = tslib_1.__importDefault(require("react"));
const enzyme_1 = require("enzyme");
const enzyme_async_helpers_1 = require("enzyme-async-helpers");
const components_1 = require("@bluebase/components");
const deepmerge_1 = tslib_1.__importDefault(require("deepmerge"));
const fieldProps = {
    direction: 'right',
    name: 'form-actions',
    type: 'actions',
    fields: [{
            name: 'reset',
            type: 'reset',
            title: 'Reset'
        },
    ]
};
const initialValues = {};
describe('FormActions', () => {
    it('should render all form fields in the schema', async () => {
        const onSubmit = jest.fn();
        const FormActions = components_1.getComponent('FormActions');
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormActions, Object.assign({}, fieldProps)))));
        await enzyme_async_helpers_1.waitForElement(component, FormActions);
        // expect(component).toMatchSnapshot();
        const root = component.find('[testID="form-actions"]').first().prop('style');
        const rootStyles = deepmerge_1.default.all(root.filter((x) => !!x));
        // const childStyles: any = component.find('[testID="form-fff"]').first().prop('style');
        // Check fields
        expect(rootStyles.justifyContent).toBe('flex-end');
        // expect(childStyles.marginRight).toBe(16);
    });
    // it('should render all form fields in the schema', async () => {
    // 	const onSubmit = jest.fn();
    // 	const FormActions = getComponent('FormActions');
    // 	const component = mount(
    // 		<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
    // 			<Formik initialValues={initialValues} onSubmit={onSubmit}>
    // 				<FormActions {...fieldProps as any} direction="left" />
    // 			</Formik>
    // 		</BlueBaseApp>
    // 	);
    // 	await waitForElement(component as any, FormActions);
    // 	 //expect(component).toMatchSnapshot();
    // 	const root: any = component.find('[testID="form-actions"]').first().prop('style');
    // 	const rootStyles: any = deepmerge.all(root.filter((x: any) => !!x));
    // 	const childStyles: any = component.find('FieldWrapper View').first().prop('style');
    // 	// Check fields
    // 	expect(rootStyles.justifyContent).toBe('flex-start');
    // 	expect(childStyles.marginLeft).toBe(16);
    // });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1BY3Rpb25zLnRlc3QudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE2QztBQUM3QyxtQ0FBZ0M7QUFDaEMsOEZBQTREO0FBQzVELG1FQUFvQztBQUNwQywwREFBMEI7QUFDMUIsbUNBQStCO0FBQy9CLCtEQUFzRDtBQUN0RCxxREFBb0Q7QUFDcEQsa0VBQWtDO0FBR2xDLE1BQU0sVUFBVSxHQUFHO0lBQ2xCLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLElBQUksRUFBRSxjQUFjO0lBQ3BCLElBQUksRUFBRSxTQUFTO0lBRWYsTUFBTSxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsT0FBTztZQUNiLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFDLE9BQU87U0FDYjtLQU1EO0NBQ0EsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFHLEVBQ3JCLENBQUM7QUFHRixRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtJQUU1QixFQUFFLENBQUMsNkNBQTZDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFNUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTNCLE1BQU0sV0FBVyxHQUFHLHlCQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFaEQsTUFBTSxTQUFTLEdBQUcsY0FBSyxDQUN0Qiw4QkFBQyxrQkFBVyxJQUFDLE9BQU8sRUFBRSxDQUFDLGVBQU0sRUFBRSw0QkFBZ0IsQ0FBQztZQUMvQyw4QkFBQyxlQUFNLElBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsUUFBUTtnQkFDdkQsOEJBQUMsV0FBVyxvQkFBSyxVQUFpQixFQUFJLENBQzlCLENBQ0ksQ0FDZCxDQUFDO1FBRUYsTUFBTSxxQ0FBYyxDQUFDLFNBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFcEQsdUNBQXVDO1FBRXZDLE1BQU0sSUFBSSxHQUFRLFNBQVMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEYsTUFBTSxVQUFVLEdBQVEsbUJBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsd0ZBQXdGO1FBRXhGLGVBQWU7UUFDZixNQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCw0Q0FBNEM7SUFFN0MsQ0FBQyxDQUFDLENBQUM7SUFHSCxrRUFBa0U7SUFFbEUsK0JBQStCO0lBQy9CLG9EQUFvRDtJQUVwRCw0QkFBNEI7SUFDNUIsdURBQXVEO0lBQ3ZELGdFQUFnRTtJQUNoRSw4REFBOEQ7SUFDOUQsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixNQUFNO0lBRU4sd0RBQXdEO0lBRXhELDJDQUEyQztJQUUzQyxzRkFBc0Y7SUFDdEYsd0VBQXdFO0lBQ3hFLHVGQUF1RjtJQUV2RixtQkFBbUI7SUFDbkIseURBQXlEO0lBQ3pELDRDQUE0QztJQUM1QyxNQUFNO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1BY3Rpb25zLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlQXBwIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBNYXRlcmlhbFVJUGx1Z2luIGZyb20gJ0BibHVlYmFzZS9wbHVnaW4tbWF0ZXJpYWwtdWknO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi8uLi8uLi9pbmRleCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5pbXBvcnQgeyBnZXRDb21wb25lbnQgfSBmcm9tICdAYmx1ZWJhc2UvY29tcG9uZW50cyc7XG5pbXBvcnQgZGVlcG1lcmdlIGZyb20gJ2RlZXBtZXJnZSc7XG5cblxuY29uc3QgZmllbGRQcm9wcyA9IHtcblx0ZGlyZWN0aW9uOiAncmlnaHQnLFxuXHRuYW1lOiAnZm9ybS1hY3Rpb25zJyxcblx0dHlwZTogJ2FjdGlvbnMnLFxuXG5cdGZpZWxkczogW3tcblx0XHRuYW1lOiAncmVzZXQnLFxuXHRcdHR5cGU6ICdyZXNldCcsXG5cdFx0dGl0bGU6J1Jlc2V0J1xuXHR9LFxuXHQvLyAge1xuXHQvLyBcdG5hbWU6ICdzdWJtaXQnLFxuXHQvLyBcdHRpdGxlOiAnTG9naW4nLFxuXHQvLyBcdHR5cGU6ICdzdWJtaXQnLFxuXHQvLyB9XG5dXG59O1xuXG5jb25zdCBpbml0aWFsVmFsdWVzID0ge1xufTtcblxuXG5kZXNjcmliZSgnRm9ybUFjdGlvbnMnLCAoKSA9PiB7XG5cblx0aXQoJ3Nob3VsZCByZW5kZXIgYWxsIGZvcm0gZmllbGRzIGluIHRoZSBzY2hlbWEnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IEZvcm1BY3Rpb25zID0gZ2V0Q29tcG9uZW50KCdGb3JtQWN0aW9ucycpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1BY3Rpb25zIHsuLi5maWVsZFByb3BzIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtQWN0aW9ucyk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdGNvbnN0IHJvb3Q6IGFueSA9IGNvbXBvbmVudC5maW5kKCdbdGVzdElEPVwiZm9ybS1hY3Rpb25zXCJdJykuZmlyc3QoKS5wcm9wKCdzdHlsZScpO1xuXHRcdGNvbnN0IHJvb3RTdHlsZXM6IGFueSA9IGRlZXBtZXJnZS5hbGwocm9vdC5maWx0ZXIoKHg6IGFueSkgPT4gISF4KSk7XG5cdFx0Ly8gY29uc3QgY2hpbGRTdHlsZXM6IGFueSA9IGNvbXBvbmVudC5maW5kKCdbdGVzdElEPVwiZm9ybS1mZmZcIl0nKS5maXJzdCgpLnByb3AoJ3N0eWxlJyk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3Qocm9vdFN0eWxlcy5qdXN0aWZ5Q29udGVudCkudG9CZSgnZmxleC1lbmQnKTtcblx0XHQvLyBleHBlY3QoY2hpbGRTdHlsZXMubWFyZ2luUmlnaHQpLnRvQmUoMTYpO1xuXHRcdFxuXHR9KTtcblxuXG5cdC8vIGl0KCdzaG91bGQgcmVuZGVyIGFsbCBmb3JtIGZpZWxkcyBpbiB0aGUgc2NoZW1hJywgYXN5bmMgKCkgPT4ge1xuXG5cdC8vIFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cdC8vIFx0Y29uc3QgRm9ybUFjdGlvbnMgPSBnZXRDb21wb25lbnQoJ0Zvcm1BY3Rpb25zJyk7XG5cblx0Ly8gXHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0Ly8gXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luLCBNYXRlcmlhbFVJUGx1Z2luXX0+XG5cdC8vIFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0Ly8gXHRcdFx0XHQ8Rm9ybUFjdGlvbnMgey4uLmZpZWxkUHJvcHMgYXMgYW55fSBkaXJlY3Rpb249XCJsZWZ0XCIgLz5cblx0Ly8gXHRcdFx0PC9Gb3JtaWs+XG5cdC8vIFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHQvLyBcdCk7XG5cblx0Ly8gXHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtQWN0aW9ucyk7XG5cblx0Ly8gXHQgLy9leHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHQvLyBcdGNvbnN0IHJvb3Q6IGFueSA9IGNvbXBvbmVudC5maW5kKCdbdGVzdElEPVwiZm9ybS1hY3Rpb25zXCJdJykuZmlyc3QoKS5wcm9wKCdzdHlsZScpO1xuXHQvLyBcdGNvbnN0IHJvb3RTdHlsZXM6IGFueSA9IGRlZXBtZXJnZS5hbGwocm9vdC5maWx0ZXIoKHg6IGFueSkgPT4gISF4KSk7XG5cdC8vIFx0Y29uc3QgY2hpbGRTdHlsZXM6IGFueSA9IGNvbXBvbmVudC5maW5kKCdGaWVsZFdyYXBwZXIgVmlldycpLmZpcnN0KCkucHJvcCgnc3R5bGUnKTtcblxuXHQvLyBcdC8vIENoZWNrIGZpZWxkc1xuXHQvLyBcdGV4cGVjdChyb290U3R5bGVzLmp1c3RpZnlDb250ZW50KS50b0JlKCdmbGV4LXN0YXJ0Jyk7XG5cdC8vIFx0ZXhwZWN0KGNoaWxkU3R5bGVzLm1hcmdpbkxlZnQpLnRvQmUoMTYpO1xuXHQvLyB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9