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
    //direction: 'right',
    name: 'form-actions',
    type: 'actions',
    fields: [{
            name: 'reset',
            type: 'reset',
            title: 'babajee'
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
        const childStyles = component.find('FieldWrapper View').first().prop('style');
        // Check fields
        expect(rootStyles.justifyContent).toBe('flex-end');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1BY3Rpb25zLnRlc3QudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE2QztBQUM3QyxtQ0FBZ0M7QUFDaEMsOEZBQTREO0FBQzVELG1FQUFvQztBQUNwQywwREFBMEI7QUFDMUIsbUNBQStCO0FBQy9CLCtEQUFzRDtBQUN0RCxxREFBb0Q7QUFDcEQsa0VBQWtDO0FBR2xDLE1BQU0sVUFBVSxHQUFHO0lBQ2xCLHFCQUFxQjtJQUNyQixJQUFJLEVBQUUsY0FBYztJQUNwQixJQUFJLEVBQUUsU0FBUztJQUVmLE1BQU0sRUFBRSxDQUFDO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBQyxTQUFTO1NBRWY7S0FNRDtDQUNBLENBQUM7QUFFRixNQUFNLGFBQWEsR0FBRyxFQUNyQixDQUFDO0FBR0YsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFFNUIsRUFBRSxDQUFDLDZDQUE2QyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBRTVELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUzQixNQUFNLFdBQVcsR0FBRyx5QkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWhELE1BQU0sU0FBUyxHQUFHLGNBQUssQ0FDdEIsOEJBQUMsa0JBQVcsSUFBQyxPQUFPLEVBQUUsQ0FBQyxlQUFNLEVBQUUsNEJBQWdCLENBQUM7WUFDL0MsOEJBQUMsZUFBTSxJQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBQ3ZELDhCQUFDLFdBQVcsb0JBQUssVUFBaUIsRUFBSSxDQUM5QixDQUNJLENBQ2QsQ0FBQztRQUVGLE1BQU0scUNBQWMsQ0FBQyxTQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXBELHVDQUF1QztRQUV2QyxNQUFNLElBQUksR0FBUSxTQUFTLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xGLE1BQU0sVUFBVSxHQUFRLG1CQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sV0FBVyxHQUFRLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEYsZUFBZTtRQUNmLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTNDLENBQUMsQ0FBQyxDQUFDO0lBR0gsa0VBQWtFO0lBRWxFLCtCQUErQjtJQUMvQixvREFBb0Q7SUFFcEQsNEJBQTRCO0lBQzVCLHVEQUF1RDtJQUN2RCxnRUFBZ0U7SUFDaEUsOERBQThEO0lBQzlELGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsTUFBTTtJQUVOLHdEQUF3RDtJQUV4RCwyQ0FBMkM7SUFFM0Msc0ZBQXNGO0lBQ3RGLHdFQUF3RTtJQUN4RSx1RkFBdUY7SUFFdkYsbUJBQW1CO0lBQ25CLHlEQUF5RDtJQUN6RCw0Q0FBNEM7SUFDNUMsTUFBTTtBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL19fdGVzdHNfXy9Gb3JtQWN0aW9ucy50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbHVlQmFzZUFwcCB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgTWF0ZXJpYWxVSVBsdWdpbiBmcm9tICdAYmx1ZWJhc2UvcGx1Z2luLW1hdGVyaWFsLXVpJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vLi4vLi4vaW5kZXgnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcbmltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuaW1wb3J0IHsgZ2V0Q29tcG9uZW50IH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IGRlZXBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnO1xuXG5cbmNvbnN0IGZpZWxkUHJvcHMgPSB7XG5cdC8vZGlyZWN0aW9uOiAncmlnaHQnLFxuXHRuYW1lOiAnZm9ybS1hY3Rpb25zJyxcblx0dHlwZTogJ2FjdGlvbnMnLFxuXG5cdGZpZWxkczogW3tcblx0XHRuYW1lOiAncmVzZXQnLFxuXHRcdHR5cGU6ICdyZXNldCcsXG5cdFx0dGl0bGU6J2JhYmFqZWUnXG5cblx0fSxcblx0Ly8gIHtcblx0Ly8gXHRuYW1lOiAnc3VibWl0Jyxcblx0Ly8gXHR0aXRsZTogJ0xvZ2luJyxcblx0Ly8gXHR0eXBlOiAnc3VibWl0Jyxcblx0Ly8gfVxuXVxufTtcblxuY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcbn07XG5cblxuZGVzY3JpYmUoJ0Zvcm1BY3Rpb25zJywgKCkgPT4ge1xuXG5cdGl0KCdzaG91bGQgcmVuZGVyIGFsbCBmb3JtIGZpZWxkcyBpbiB0aGUgc2NoZW1hJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBGb3JtQWN0aW9ucyA9IGdldENvbXBvbmVudCgnRm9ybUFjdGlvbnMnKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW4sIE1hdGVyaWFsVUlQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtQWN0aW9ucyB7Li4uZmllbGRQcm9wcyBhcyBhbnl9IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybUFjdGlvbnMpO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHRjb25zdCByb290OiBhbnkgPSBjb21wb25lbnQuZmluZCgnW3Rlc3RJRD1cImZvcm0tYWN0aW9uc1wiXScpLmZpcnN0KCkucHJvcCgnc3R5bGUnKTtcblx0XHRjb25zdCByb290U3R5bGVzOiBhbnkgPSBkZWVwbWVyZ2UuYWxsKHJvb3QuZmlsdGVyKCh4OiBhbnkpID0+ICEheCkpO1xuXHRcdCBjb25zdCBjaGlsZFN0eWxlczogYW55ID0gY29tcG9uZW50LmZpbmQoJ0ZpZWxkV3JhcHBlciBWaWV3JykuZmlyc3QoKS5wcm9wKCdzdHlsZScpO1xuXHRcdC8vIENoZWNrIGZpZWxkc1xuXHRcdGV4cGVjdChyb290U3R5bGVzLmp1c3RpZnlDb250ZW50KS50b0JlKCdmbGV4LWVuZCcpO1xuXHRcdCBleHBlY3QoY2hpbGRTdHlsZXMubWFyZ2luUmlnaHQpLnRvQmUoMTYpO1xuXHRcdFxuXHR9KTtcblxuXG5cdC8vIGl0KCdzaG91bGQgcmVuZGVyIGFsbCBmb3JtIGZpZWxkcyBpbiB0aGUgc2NoZW1hJywgYXN5bmMgKCkgPT4ge1xuXG5cdC8vIFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cdC8vIFx0Y29uc3QgRm9ybUFjdGlvbnMgPSBnZXRDb21wb25lbnQoJ0Zvcm1BY3Rpb25zJyk7XG5cblx0Ly8gXHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0Ly8gXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luLCBNYXRlcmlhbFVJUGx1Z2luXX0+XG5cdC8vIFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0Ly8gXHRcdFx0XHQ8Rm9ybUFjdGlvbnMgey4uLmZpZWxkUHJvcHMgYXMgYW55fSBkaXJlY3Rpb249XCJsZWZ0XCIgLz5cblx0Ly8gXHRcdFx0PC9Gb3JtaWs+XG5cdC8vIFx0XHQ8L0JsdWVCYXNlQXBwPlxuXHQvLyBcdCk7XG5cblx0Ly8gXHRhd2FpdCB3YWl0Rm9yRWxlbWVudChjb21wb25lbnQgYXMgYW55LCBGb3JtQWN0aW9ucyk7XG5cblx0Ly8gXHQgLy9leHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuXHQvLyBcdGNvbnN0IHJvb3Q6IGFueSA9IGNvbXBvbmVudC5maW5kKCdbdGVzdElEPVwiZm9ybS1hY3Rpb25zXCJdJykuZmlyc3QoKS5wcm9wKCdzdHlsZScpO1xuXHQvLyBcdGNvbnN0IHJvb3RTdHlsZXM6IGFueSA9IGRlZXBtZXJnZS5hbGwocm9vdC5maWx0ZXIoKHg6IGFueSkgPT4gISF4KSk7XG5cdC8vIFx0Y29uc3QgY2hpbGRTdHlsZXM6IGFueSA9IGNvbXBvbmVudC5maW5kKCdGaWVsZFdyYXBwZXIgVmlldycpLmZpcnN0KCkucHJvcCgnc3R5bGUnKTtcblxuXHQvLyBcdC8vIENoZWNrIGZpZWxkc1xuXHQvLyBcdGV4cGVjdChyb290U3R5bGVzLmp1c3RpZnlDb250ZW50KS50b0JlKCdmbGV4LXN0YXJ0Jyk7XG5cdC8vIFx0ZXhwZWN0KGNoaWxkU3R5bGVzLm1hcmdpbkxlZnQpLnRvQmUoMTYpO1xuXHQvLyB9KTtcbn0pO1xuIl0sInZlcnNpb24iOjN9