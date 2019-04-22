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
// import deepmerge from 'deepmerge';
const fieldProps = {
    direction: 'left',
    name: 'form-actions',
    type: 'actions',
    fields: [{
            name: 'reset',
            type: 'reset',
            title: 'babajee',
            nested: true,
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
        // const root: any = component.find('[testID="form-actions"]').first().prop('style');
        // const rootStyles: any = deepmerge.all(root.filter((x: any) => !!x));
        const childStyles = component.find('FieldWrapper View').first().prop('style');
        // Check fields
        //expect(rootStyles.justifyContent).toBe('flex-end');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1BY3Rpb25zLnRlc3QudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE2QztBQUM3QyxtQ0FBZ0M7QUFDaEMsOEZBQTREO0FBQzVELG1FQUFvQztBQUNwQywwREFBMEI7QUFDMUIsbUNBQStCO0FBQy9CLCtEQUFzRDtBQUN0RCxxREFBb0Q7QUFDcEQscUNBQXFDO0FBR3JDLE1BQU0sVUFBVSxHQUFHO0lBQ2xCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLElBQUksRUFBRSxjQUFjO0lBQ3BCLElBQUksRUFBRSxTQUFTO0lBRWYsTUFBTSxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsT0FBTztZQUNiLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFDLFNBQVM7WUFDZixNQUFNLEVBQUcsSUFBSTtTQUViO0tBTUQ7Q0FDQSxDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUcsRUFDckIsQ0FBQztBQUdGLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBRTVCLEVBQUUsQ0FBQyw2Q0FBNkMsRUFBRSxLQUFLLElBQUksRUFBRTtRQUU1RCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFM0IsTUFBTSxXQUFXLEdBQUcseUJBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVoRCxNQUFNLFNBQVMsR0FBRyxjQUFLLENBQ3RCLDhCQUFDLGtCQUFXLElBQUMsT0FBTyxFQUFFLENBQUMsZUFBTSxFQUFFLDRCQUFnQixDQUFDO1lBQy9DLDhCQUFDLGVBQU0sSUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxRQUFRO2dCQUN2RCw4QkFBQyxXQUFXLG9CQUFLLFVBQWlCLEVBQUksQ0FDOUIsQ0FDSSxDQUNkLENBQUM7UUFFRixNQUFNLHFDQUFjLENBQUMsU0FBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUVwRCx1Q0FBdUM7UUFFdkMscUZBQXFGO1FBQ3JGLHVFQUF1RTtRQUN0RSxNQUFNLFdBQVcsR0FBUSxTQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BGLGVBQWU7UUFDZixxREFBcUQ7UUFDcEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFM0MsQ0FBQyxDQUFDLENBQUM7SUFHSCxrRUFBa0U7SUFFbEUsK0JBQStCO0lBQy9CLG9EQUFvRDtJQUVwRCw0QkFBNEI7SUFDNUIsdURBQXVEO0lBQ3ZELGdFQUFnRTtJQUNoRSw4REFBOEQ7SUFDOUQsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixNQUFNO0lBRU4sd0RBQXdEO0lBRXhELDJDQUEyQztJQUUzQyxzRkFBc0Y7SUFDdEYsd0VBQXdFO0lBQ3hFLHVGQUF1RjtJQUV2RixtQkFBbUI7SUFDbkIseURBQXlEO0lBQ3pELDRDQUE0QztJQUM1QyxNQUFNO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1BY3Rpb25zLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlQXBwIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBNYXRlcmlhbFVJUGx1Z2luIGZyb20gJ0BibHVlYmFzZS9wbHVnaW4tbWF0ZXJpYWwtdWknO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi8uLi8uLi9pbmRleCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5pbXBvcnQgeyBnZXRDb21wb25lbnQgfSBmcm9tICdAYmx1ZWJhc2UvY29tcG9uZW50cyc7XG4vLyBpbXBvcnQgZGVlcG1lcmdlIGZyb20gJ2RlZXBtZXJnZSc7XG5cblxuY29uc3QgZmllbGRQcm9wcyA9IHtcblx0ZGlyZWN0aW9uOiAnbGVmdCcsXG5cdG5hbWU6ICdmb3JtLWFjdGlvbnMnLFxuXHR0eXBlOiAnYWN0aW9ucycsXG5cblx0ZmllbGRzOiBbe1xuXHRcdG5hbWU6ICdyZXNldCcsXG5cdFx0dHlwZTogJ3Jlc2V0Jyxcblx0XHR0aXRsZTonYmFiYWplZScsXG5cdFx0bmVzdGVkIDogdHJ1ZSxcblxuXHR9LFxuXHQvLyAge1xuXHQvLyBcdG5hbWU6ICdzdWJtaXQnLFxuXHQvLyBcdHRpdGxlOiAnTG9naW4nLFxuXHQvLyBcdHR5cGU6ICdzdWJtaXQnLFxuXHQvLyB9XG5dXG59O1xuXG5jb25zdCBpbml0aWFsVmFsdWVzID0ge1xufTtcblxuXG5kZXNjcmliZSgnRm9ybUFjdGlvbnMnLCAoKSA9PiB7XG5cblx0aXQoJ3Nob3VsZCByZW5kZXIgYWxsIGZvcm0gZmllbGRzIGluIHRoZSBzY2hlbWEnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBvblN1Ym1pdCA9IGplc3QuZm4oKTtcblxuXHRcdGNvbnN0IEZvcm1BY3Rpb25zID0gZ2V0Q29tcG9uZW50KCdGb3JtQWN0aW9ucycpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1BY3Rpb25zIHsuLi5maWVsZFByb3BzIGFzIGFueX0gLz5cblx0XHRcdFx0PC9Gb3JtaWs+XG5cdFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHRcdCk7XG5cblx0XHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtQWN0aW9ucyk7XG5cblx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHRcdC8vIGNvbnN0IHJvb3Q6IGFueSA9IGNvbXBvbmVudC5maW5kKCdbdGVzdElEPVwiZm9ybS1hY3Rpb25zXCJdJykuZmlyc3QoKS5wcm9wKCdzdHlsZScpO1xuXHRcdC8vIGNvbnN0IHJvb3RTdHlsZXM6IGFueSA9IGRlZXBtZXJnZS5hbGwocm9vdC5maWx0ZXIoKHg6IGFueSkgPT4gISF4KSk7XG5cdFx0IGNvbnN0IGNoaWxkU3R5bGVzOiBhbnkgPSBjb21wb25lbnQuZmluZCgnRmllbGRXcmFwcGVyIFZpZXcnKS5maXJzdCgpLnByb3AoJ3N0eWxlJyk7XG5cdFx0Ly8gQ2hlY2sgZmllbGRzXG5cdFx0Ly9leHBlY3Qocm9vdFN0eWxlcy5qdXN0aWZ5Q29udGVudCkudG9CZSgnZmxleC1lbmQnKTtcblx0XHQgZXhwZWN0KGNoaWxkU3R5bGVzLm1hcmdpblJpZ2h0KS50b0JlKDE2KTtcblx0XHRcblx0fSk7XG5cblxuXHQvLyBpdCgnc2hvdWxkIHJlbmRlciBhbGwgZm9ybSBmaWVsZHMgaW4gdGhlIHNjaGVtYScsIGFzeW5jICgpID0+IHtcblxuXHQvLyBcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXHQvLyBcdGNvbnN0IEZvcm1BY3Rpb25zID0gZ2V0Q29tcG9uZW50KCdGb3JtQWN0aW9ucycpO1xuXG5cdC8vIFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdC8vIFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHQvLyBcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdC8vIFx0XHRcdFx0PEZvcm1BY3Rpb25zIHsuLi5maWVsZFByb3BzIGFzIGFueX0gZGlyZWN0aW9uPVwibGVmdFwiIC8+XG5cdC8vIFx0XHRcdDwvRm9ybWlrPlxuXHQvLyBcdFx0PC9CbHVlQmFzZUFwcD5cblx0Ly8gXHQpO1xuXG5cdC8vIFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybUFjdGlvbnMpO1xuXG5cdC8vIFx0IC8vZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0Ly8gXHRjb25zdCByb290OiBhbnkgPSBjb21wb25lbnQuZmluZCgnW3Rlc3RJRD1cImZvcm0tYWN0aW9uc1wiXScpLmZpcnN0KCkucHJvcCgnc3R5bGUnKTtcblx0Ly8gXHRjb25zdCByb290U3R5bGVzOiBhbnkgPSBkZWVwbWVyZ2UuYWxsKHJvb3QuZmlsdGVyKCh4OiBhbnkpID0+ICEheCkpO1xuXHQvLyBcdGNvbnN0IGNoaWxkU3R5bGVzOiBhbnkgPSBjb21wb25lbnQuZmluZCgnRmllbGRXcmFwcGVyIFZpZXcnKS5maXJzdCgpLnByb3AoJ3N0eWxlJyk7XG5cblx0Ly8gXHQvLyBDaGVjayBmaWVsZHNcblx0Ly8gXHRleHBlY3Qocm9vdFN0eWxlcy5qdXN0aWZ5Q29udGVudCkudG9CZSgnZmxleC1zdGFydCcpO1xuXHQvLyBcdGV4cGVjdChjaGlsZFN0eWxlcy5tYXJnaW5MZWZ0KS50b0JlKDE2KTtcblx0Ly8gfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==