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
        const childStyles = component.find('[testID="form-fff"]').first().prop('style');
        // Check fields
        expect(rootStyles.justifyContent).toBe('flex-start');
        expect(childStyles.marginRight).toBe(16);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1BY3Rpb25zLnRlc3QudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE2QztBQUM3QyxtQ0FBZ0M7QUFDaEMsOEZBQTREO0FBQzVELG1FQUFvQztBQUNwQywwREFBMEI7QUFDMUIsbUNBQStCO0FBQy9CLCtEQUFzRDtBQUN0RCxxREFBb0Q7QUFDcEQsa0VBQWtDO0FBR2xDLE1BQU0sVUFBVSxHQUFHO0lBQ2xCLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLElBQUksRUFBRSxjQUFjO0lBQ3BCLElBQUksRUFBRSxTQUFTO0lBRWYsTUFBTSxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsT0FBTztZQUNiLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFDLE9BQU87U0FDYjtLQU1EO0NBQ0EsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFHLEVBQ3JCLENBQUM7QUFHRixRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtJQUU1QixFQUFFLENBQUMsNkNBQTZDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFNUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTNCLE1BQU0sV0FBVyxHQUFHLHlCQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFaEQsTUFBTSxTQUFTLEdBQUcsY0FBSyxDQUN0Qiw4QkFBQyxrQkFBVyxJQUFDLE9BQU8sRUFBRSxDQUFDLGVBQU0sRUFBRSw0QkFBZ0IsQ0FBQztZQUMvQyw4QkFBQyxlQUFNLElBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsUUFBUTtnQkFDdkQsOEJBQUMsV0FBVyxvQkFBSyxVQUFpQixFQUFJLENBQzlCLENBQ0ksQ0FDZCxDQUFDO1FBRUYsTUFBTSxxQ0FBYyxDQUFDLFNBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFcEQsdUNBQXVDO1FBRXZDLE1BQU0sSUFBSSxHQUFRLFNBQVMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEYsTUFBTSxVQUFVLEdBQVEsbUJBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsTUFBTSxXQUFXLEdBQVEsU0FBUyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyRixlQUFlO1FBQ2YsTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFMUMsQ0FBQyxDQUFDLENBQUM7SUFHSCxrRUFBa0U7SUFFbEUsK0JBQStCO0lBQy9CLG9EQUFvRDtJQUVwRCw0QkFBNEI7SUFDNUIsdURBQXVEO0lBQ3ZELGdFQUFnRTtJQUNoRSw4REFBOEQ7SUFDOUQsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixNQUFNO0lBRU4sd0RBQXdEO0lBRXhELDJDQUEyQztJQUUzQyxzRkFBc0Y7SUFDdEYsd0VBQXdFO0lBQ3hFLHVGQUF1RjtJQUV2RixtQkFBbUI7SUFDbkIseURBQXlEO0lBQ3pELDRDQUE0QztJQUM1QyxNQUFNO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1BY3Rpb25zLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlQXBwIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBNYXRlcmlhbFVJUGx1Z2luIGZyb20gJ0BibHVlYmFzZS9wbHVnaW4tbWF0ZXJpYWwtdWknO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi8uLi8uLi9pbmRleCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5pbXBvcnQgeyBnZXRDb21wb25lbnQgfSBmcm9tICdAYmx1ZWJhc2UvY29tcG9uZW50cyc7XG5pbXBvcnQgZGVlcG1lcmdlIGZyb20gJ2RlZXBtZXJnZSc7XG5cblxuY29uc3QgZmllbGRQcm9wcyA9IHtcblx0ZGlyZWN0aW9uOiAncmlnaHQnLFxuXHRuYW1lOiAnZm9ybS1hY3Rpb25zJyxcblx0dHlwZTogJ2FjdGlvbnMnLFxuXG5cdGZpZWxkczogW3tcblx0XHRuYW1lOiAncmVzZXQnLFxuXHRcdHR5cGU6ICdyZXNldCcsXG5cdFx0dGl0bGU6J1Jlc2V0J1xuXHR9LFxuXHQvLyAge1xuXHQvLyBcdG5hbWU6ICdzdWJtaXQnLFxuXHQvLyBcdHRpdGxlOiAnTG9naW4nLFxuXHQvLyBcdHR5cGU6ICdzdWJtaXQnLFxuXHQvLyB9XG5dXG59O1xuXG5jb25zdCBpbml0aWFsVmFsdWVzID0ge1xufTtcblxuXG5kZXNjcmliZSgnRm9ybUFjdGlvbnMnLCAoKSA9PiB7XG5cblx0aXQoJ3Nob3VsZCByZW5kZXIgYWxsIGZvcm0gZmllbGRzIGluIHRoZSBzY2hlbWEnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IEZvcm1BY3Rpb25zID0gZ2V0Q29tcG9uZW50KCdGb3JtQWN0aW9ucycpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1BY3Rpb25zIHsuLi5maWVsZFByb3BzIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtQWN0aW9ucyk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdGNvbnN0IHJvb3Q6IGFueSA9IGNvbXBvbmVudC5maW5kKCdbdGVzdElEPVwiZm9ybS1hY3Rpb25zXCJdJykuZmlyc3QoKS5wcm9wKCdzdHlsZScpO1xuXHRcdGNvbnN0IHJvb3RTdHlsZXM6IGFueSA9IGRlZXBtZXJnZS5hbGwocm9vdC5maWx0ZXIoKHg6IGFueSkgPT4gISF4KSk7XG5cdFx0Y29uc3QgY2hpbGRTdHlsZXM6IGFueSA9IGNvbXBvbmVudC5maW5kKCdbdGVzdElEPVwiZm9ybS1mZmZcIl0nKS5maXJzdCgpLnByb3AoJ3N0eWxlJyk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3Qocm9vdFN0eWxlcy5qdXN0aWZ5Q29udGVudCkudG9CZSgnZmxleC1zdGFydCcpO1xuXHRcdGV4cGVjdChjaGlsZFN0eWxlcy5tYXJnaW5SaWdodCkudG9CZSgxNik7XG5cdFx0XG5cdH0pO1xuXG5cblx0Ly8gaXQoJ3Nob3VsZCByZW5kZXIgYWxsIGZvcm0gZmllbGRzIGluIHRoZSBzY2hlbWEnLCBhc3luYyAoKSA9PiB7XG5cblx0Ly8gXHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblx0Ly8gXHRjb25zdCBGb3JtQWN0aW9ucyA9IGdldENvbXBvbmVudCgnRm9ybUFjdGlvbnMnKTtcblxuXHQvLyBcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHQvLyBcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW4sIE1hdGVyaWFsVUlQbHVnaW5dfT5cblx0Ly8gXHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHQvLyBcdFx0XHRcdDxGb3JtQWN0aW9ucyB7Li4uZmllbGRQcm9wcyBhcyBhbnl9IGRpcmVjdGlvbj1cImxlZnRcIiAvPlxuXHQvLyBcdFx0XHQ8L0Zvcm1paz5cblx0Ly8gXHRcdDwvQmx1ZUJhc2VBcHA+XG5cdC8vIFx0KTtcblxuXHQvLyBcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1BY3Rpb25zKTtcblxuXHQvLyBcdCAvL2V4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdC8vIFx0Y29uc3Qgcm9vdDogYW55ID0gY29tcG9uZW50LmZpbmQoJ1t0ZXN0SUQ9XCJmb3JtLWFjdGlvbnNcIl0nKS5maXJzdCgpLnByb3AoJ3N0eWxlJyk7XG5cdC8vIFx0Y29uc3Qgcm9vdFN0eWxlczogYW55ID0gZGVlcG1lcmdlLmFsbChyb290LmZpbHRlcigoeDogYW55KSA9PiAhIXgpKTtcblx0Ly8gXHRjb25zdCBjaGlsZFN0eWxlczogYW55ID0gY29tcG9uZW50LmZpbmQoJ0ZpZWxkV3JhcHBlciBWaWV3JykuZmlyc3QoKS5wcm9wKCdzdHlsZScpO1xuXG5cdC8vIFx0Ly8gQ2hlY2sgZmllbGRzXG5cdC8vIFx0ZXhwZWN0KHJvb3RTdHlsZXMuanVzdGlmeUNvbnRlbnQpLnRvQmUoJ2ZsZXgtc3RhcnQnKTtcblx0Ly8gXHRleHBlY3QoY2hpbGRTdHlsZXMubWFyZ2luTGVmdCkudG9CZSgxNik7XG5cdC8vIH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=