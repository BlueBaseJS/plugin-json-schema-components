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
        const childStyles = component.find('FieldWrapper View').first().prop('style');
        expect(component).toMatchSnapshot();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1BY3Rpb25zLnRlc3QudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE2QztBQUM3QyxtQ0FBZ0M7QUFDaEMsOEZBQTREO0FBQzVELG1FQUFvQztBQUNwQywwREFBMEI7QUFDMUIsbUNBQStCO0FBQy9CLCtEQUFzRDtBQUN0RCxxREFBb0Q7QUFDcEQsa0VBQWtDO0FBR2xDLE1BQU0sVUFBVSxHQUFHO0lBQ2xCLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLElBQUksRUFBRSxjQUFjO0lBQ3BCLElBQUksRUFBRSxTQUFTO0lBRWYsTUFBTSxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsT0FBTztZQUNiLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFDLE9BQU87U0FDYjtLQU1EO0NBQ0EsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFHLEVBQ3JCLENBQUM7QUFHRixRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtJQUU1QixFQUFFLENBQUMsNkNBQTZDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFNUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTNCLE1BQU0sV0FBVyxHQUFHLHlCQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFaEQsTUFBTSxTQUFTLEdBQUcsY0FBSyxDQUN0Qiw4QkFBQyxrQkFBVyxJQUFDLE9BQU8sRUFBRSxDQUFDLGVBQU0sRUFBRSw0QkFBZ0IsQ0FBQztZQUMvQyw4QkFBQyxlQUFNLElBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsUUFBUTtnQkFDdkQsOEJBQUMsV0FBVyxvQkFBSyxVQUFpQixFQUFJLENBQzlCLENBQ0ksQ0FDZCxDQUFDO1FBRUYsTUFBTSxxQ0FBYyxDQUFDLFNBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFcEQsdUNBQXVDO1FBRXZDLE1BQU0sSUFBSSxHQUFRLFNBQVMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEYsTUFBTSxVQUFVLEdBQVEsbUJBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsTUFBTSxXQUFXLEdBQVEsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckMsZUFBZTtRQUNmLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTNDLENBQUMsQ0FBQyxDQUFDO0lBR0gsa0VBQWtFO0lBRWxFLCtCQUErQjtJQUMvQixvREFBb0Q7SUFFcEQsNEJBQTRCO0lBQzVCLHVEQUF1RDtJQUN2RCxnRUFBZ0U7SUFDaEUsOERBQThEO0lBQzlELGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsTUFBTTtJQUVOLHdEQUF3RDtJQUV4RCwyQ0FBMkM7SUFFM0Msc0ZBQXNGO0lBQ3RGLHdFQUF3RTtJQUN4RSx1RkFBdUY7SUFFdkYsbUJBQW1CO0lBQ25CLHlEQUF5RDtJQUN6RCw0Q0FBNEM7SUFDNUMsTUFBTTtBQUNQLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL19fdGVzdHNfXy9Gb3JtQWN0aW9ucy50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbHVlQmFzZUFwcCB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgTWF0ZXJpYWxVSVBsdWdpbiBmcm9tICdAYmx1ZWJhc2UvcGx1Z2luLW1hdGVyaWFsLXVpJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vLi4vLi4vaW5kZXgnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcbmltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuaW1wb3J0IHsgZ2V0Q29tcG9uZW50IH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IGRlZXBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnO1xuXG5cbmNvbnN0IGZpZWxkUHJvcHMgPSB7XG5cdGRpcmVjdGlvbjogJ3JpZ2h0Jyxcblx0bmFtZTogJ2Zvcm0tYWN0aW9ucycsXG5cdHR5cGU6ICdhY3Rpb25zJyxcblxuXHRmaWVsZHM6IFt7XG5cdFx0bmFtZTogJ3Jlc2V0Jyxcblx0XHR0eXBlOiAncmVzZXQnLFxuXHRcdHRpdGxlOidSZXNldCdcblx0fSxcblx0Ly8gIHtcblx0Ly8gXHRuYW1lOiAnc3VibWl0Jyxcblx0Ly8gXHR0aXRsZTogJ0xvZ2luJyxcblx0Ly8gXHR0eXBlOiAnc3VibWl0Jyxcblx0Ly8gfVxuXVxufTtcblxuY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcbn07XG5cblxuZGVzY3JpYmUoJ0Zvcm1BY3Rpb25zJywgKCkgPT4ge1xuXG5cdGl0KCdzaG91bGQgcmVuZGVyIGFsbCBmb3JtIGZpZWxkcyBpbiB0aGUgc2NoZW1hJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cblx0XHRjb25zdCBGb3JtQWN0aW9ucyA9IGdldENvbXBvbmVudCgnRm9ybUFjdGlvbnMnKTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IG1vdW50KFxuXHRcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW4sIE1hdGVyaWFsVUlQbHVnaW5dfT5cblx0XHRcdFx0PEZvcm1payBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtQWN0aW9ucyB7Li4uZmllbGRQcm9wcyBhcyBhbnl9IC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybUFjdGlvbnMpO1xuXG5cdFx0Ly8gZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHRjb25zdCByb290OiBhbnkgPSBjb21wb25lbnQuZmluZCgnW3Rlc3RJRD1cImZvcm0tYWN0aW9uc1wiXScpLmZpcnN0KCkucHJvcCgnc3R5bGUnKTtcblx0XHRjb25zdCByb290U3R5bGVzOiBhbnkgPSBkZWVwbWVyZ2UuYWxsKHJvb3QuZmlsdGVyKCh4OiBhbnkpID0+ICEheCkpO1xuXHRcdCBjb25zdCBjaGlsZFN0eWxlczogYW55ID0gY29tcG9uZW50LmZpbmQoJ0ZpZWxkV3JhcHBlciBWaWV3JykuZmlyc3QoKS5wcm9wKCdzdHlsZScpO1xuXHRcdCBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3Qocm9vdFN0eWxlcy5qdXN0aWZ5Q29udGVudCkudG9CZSgnZmxleC1lbmQnKTtcblx0XHQgZXhwZWN0KGNoaWxkU3R5bGVzLm1hcmdpblJpZ2h0KS50b0JlKDE2KTtcblx0XHRcblx0fSk7XG5cblxuXHQvLyBpdCgnc2hvdWxkIHJlbmRlciBhbGwgZm9ybSBmaWVsZHMgaW4gdGhlIHNjaGVtYScsIGFzeW5jICgpID0+IHtcblxuXHQvLyBcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXHQvLyBcdGNvbnN0IEZvcm1BY3Rpb25zID0gZ2V0Q29tcG9uZW50KCdGb3JtQWN0aW9ucycpO1xuXG5cdC8vIFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdC8vIFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHQvLyBcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdC8vIFx0XHRcdFx0PEZvcm1BY3Rpb25zIHsuLi5maWVsZFByb3BzIGFzIGFueX0gZGlyZWN0aW9uPVwibGVmdFwiIC8+XG5cdC8vIFx0XHRcdDwvRm9ybWlrPlxuXHQvLyBcdFx0PC9CbHVlQmFzZUFwcD5cblx0Ly8gXHQpO1xuXG5cdC8vIFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybUFjdGlvbnMpO1xuXG5cdC8vIFx0IC8vZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0Ly8gXHRjb25zdCByb290OiBhbnkgPSBjb21wb25lbnQuZmluZCgnW3Rlc3RJRD1cImZvcm0tYWN0aW9uc1wiXScpLmZpcnN0KCkucHJvcCgnc3R5bGUnKTtcblx0Ly8gXHRjb25zdCByb290U3R5bGVzOiBhbnkgPSBkZWVwbWVyZ2UuYWxsKHJvb3QuZmlsdGVyKCh4OiBhbnkpID0+ICEheCkpO1xuXHQvLyBcdGNvbnN0IGNoaWxkU3R5bGVzOiBhbnkgPSBjb21wb25lbnQuZmluZCgnRmllbGRXcmFwcGVyIFZpZXcnKS5maXJzdCgpLnByb3AoJ3N0eWxlJyk7XG5cblx0Ly8gXHQvLyBDaGVjayBmaWVsZHNcblx0Ly8gXHRleHBlY3Qocm9vdFN0eWxlcy5qdXN0aWZ5Q29udGVudCkudG9CZSgnZmxleC1zdGFydCcpO1xuXHQvLyBcdGV4cGVjdChjaGlsZFN0eWxlcy5tYXJnaW5MZWZ0KS50b0JlKDE2KTtcblx0Ly8gfSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==