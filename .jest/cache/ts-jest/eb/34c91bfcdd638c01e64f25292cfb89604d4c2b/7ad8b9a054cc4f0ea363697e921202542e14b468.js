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
    // style : {flex:1},
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
        const root = component.find('[testID="form-actions"]').first().prop('style');
        const rootStyles = deepmerge_1.default.all(root.filter((x) => !!x));
        const childStyles = component.find('FieldWrapper View').first().prop('style');
        // Check fields
        expect(rootStyles.justifyContent).toBe('flex-end');
        expect(childStyles.marginRight).toBe(16);
    });
    it('should render all form fields in the schema', async () => {
        const onSubmit = jest.fn();
        const FormActions = components_1.getComponent('FormActions');
        const component = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default, plugin_material_ui_1.default] },
            react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: onSubmit },
                react_1.default.createElement(FormActions, Object.assign({}, fieldProps, { direction: "left" })))));
        await enzyme_async_helpers_1.waitForElement(component, FormActions);
        //expect(component).toMatchSnapshot();
        const root = component.find('[testID="form-actions"]').first().prop('style');
        const rootStyles = deepmerge_1.default.all(root.filter((x) => !!x));
        const childStyles = component.find('FieldWrapper View').first().prop('style');
        // Check fields
        expect(rootStyles.justifyContent).toBe('flex-start');
        expect(childStyles.marginLeft).toBe(16);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1BY3Rpb25zLnRlc3QudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE2QztBQUM3QyxtQ0FBZ0M7QUFDaEMsOEZBQTREO0FBQzVELG1FQUFvQztBQUNwQywwREFBMEI7QUFDMUIsbUNBQStCO0FBQy9CLCtEQUFzRDtBQUN0RCxxREFBb0Q7QUFDcEQsa0VBQWtDO0FBR2xDLE1BQU0sVUFBVSxHQUFHO0lBQ2xCLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLElBQUksRUFBRSxjQUFjO0lBQ3BCLElBQUksRUFBRSxTQUFTO0lBQ2Ysb0JBQW9CO0lBRXBCLE1BQU0sRUFBRSxDQUFDO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBQyxTQUFTO1lBQ2YsTUFBTSxFQUFHLElBQUk7U0FFYjtLQU1EO0NBQ0EsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFHLEVBQ3JCLENBQUM7QUFHRixRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtJQUU1QixFQUFFLENBQUMsNkNBQTZDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFNUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTNCLE1BQU0sV0FBVyxHQUFHLHlCQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFaEQsTUFBTSxTQUFTLEdBQUcsY0FBSyxDQUN0Qiw4QkFBQyxrQkFBVyxJQUFDLE9BQU8sRUFBRSxDQUFDLGVBQU0sRUFBRSw0QkFBZ0IsQ0FBQztZQUMvQyw4QkFBQyxlQUFNLElBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsUUFBUTtnQkFDdkQsOEJBQUMsV0FBVyxvQkFBSyxVQUFpQixFQUFJLENBQzlCLENBQ0ksQ0FDZCxDQUFDO1FBRUYsTUFBTSxxQ0FBYyxDQUFDLFNBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFcEQsdUNBQXVDO1FBRXZDLE1BQU0sSUFBSSxHQUFRLFNBQVMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEYsTUFBTSxVQUFVLEdBQVEsbUJBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsTUFBTSxXQUFXLEdBQVEsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRixlQUFlO1FBQ2YsTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFM0MsQ0FBQyxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsNkNBQTZDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFNUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzNCLE1BQU0sV0FBVyxHQUFHLHlCQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFaEQsTUFBTSxTQUFTLEdBQUcsY0FBSyxDQUN0Qiw4QkFBQyxrQkFBVyxJQUFDLE9BQU8sRUFBRSxDQUFDLGVBQU0sRUFBRSw0QkFBZ0IsQ0FBQztZQUMvQyw4QkFBQyxlQUFNLElBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsUUFBUTtnQkFDdkQsOEJBQUMsV0FBVyxvQkFBSyxVQUFpQixJQUFFLFNBQVMsRUFBQyxNQUFNLElBQUcsQ0FDL0MsQ0FDSSxDQUNkLENBQUM7UUFFRixNQUFNLHFDQUFjLENBQUMsU0FBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUVuRCxzQ0FBc0M7UUFFdkMsTUFBTSxJQUFJLEdBQVEsU0FBUyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRixNQUFNLFVBQVUsR0FBUSxtQkFBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRSxNQUFNLFdBQVcsR0FBUSxTQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5GLGVBQWU7UUFDZixNQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL19fdGVzdHNfXy9Gb3JtQWN0aW9ucy50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbHVlQmFzZUFwcCB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgTWF0ZXJpYWxVSVBsdWdpbiBmcm9tICdAYmx1ZWJhc2UvcGx1Z2luLW1hdGVyaWFsLXVpJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vLi4vLi4vaW5kZXgnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcbmltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuaW1wb3J0IHsgZ2V0Q29tcG9uZW50IH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IGRlZXBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnO1xuXG5cbmNvbnN0IGZpZWxkUHJvcHMgPSB7XG5cdGRpcmVjdGlvbjogJ3JpZ2h0Jyxcblx0bmFtZTogJ2Zvcm0tYWN0aW9ucycsXG5cdHR5cGU6ICdhY3Rpb25zJyxcblx0Ly8gc3R5bGUgOiB7ZmxleDoxfSxcblxuXHRmaWVsZHM6IFt7XG5cdFx0bmFtZTogJ3Jlc2V0Jyxcblx0XHR0eXBlOiAncmVzZXQnLFxuXHRcdHRpdGxlOidiYWJhamVlJyxcblx0XHRuZXN0ZWQgOiB0cnVlLFxuXG5cdH0sXG5cdC8vICB7XG5cdC8vIFx0bmFtZTogJ3N1Ym1pdCcsXG5cdC8vIFx0dGl0bGU6ICdMb2dpbicsXG5cdC8vIFx0dHlwZTogJ3N1Ym1pdCcsXG5cdC8vIH1cbl1cbn07XG5cbmNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG59O1xuXG5cbmRlc2NyaWJlKCdGb3JtQWN0aW9ucycsICgpID0+IHtcblxuXHRpdCgnc2hvdWxkIHJlbmRlciBhbGwgZm9ybSBmaWVsZHMgaW4gdGhlIHNjaGVtYScsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG5cdFx0Y29uc3QgRm9ybUFjdGlvbnMgPSBnZXRDb21wb25lbnQoJ0Zvcm1BY3Rpb25zJyk7XG5cblx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcblx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luLCBNYXRlcmlhbFVJUGx1Z2luXX0+XG5cdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybUFjdGlvbnMgey4uLmZpZWxkUHJvcHMgYXMgYW55fSAvPlxuXHRcdFx0XHQ8L0Zvcm1paz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1BY3Rpb25zKTtcblxuXHRcdC8vIGV4cGVjdChjb21wb25lbnQpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdFx0Y29uc3Qgcm9vdDogYW55ID0gY29tcG9uZW50LmZpbmQoJ1t0ZXN0SUQ9XCJmb3JtLWFjdGlvbnNcIl0nKS5maXJzdCgpLnByb3AoJ3N0eWxlJyk7XG5cdFx0Y29uc3Qgcm9vdFN0eWxlczogYW55ID0gZGVlcG1lcmdlLmFsbChyb290LmZpbHRlcigoeDogYW55KSA9PiAhIXgpKTtcblx0XHQgY29uc3QgY2hpbGRTdHlsZXM6IGFueSA9IGNvbXBvbmVudC5maW5kKCdGaWVsZFdyYXBwZXIgVmlldycpLmZpcnN0KCkucHJvcCgnc3R5bGUnKTtcblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3Qocm9vdFN0eWxlcy5qdXN0aWZ5Q29udGVudCkudG9CZSgnZmxleC1lbmQnKTtcblx0XHQgZXhwZWN0KGNoaWxkU3R5bGVzLm1hcmdpblJpZ2h0KS50b0JlKDE2KTtcblx0XHRcblx0fSk7XG5cblxuXHRpdCgnc2hvdWxkIHJlbmRlciBhbGwgZm9ybSBmaWVsZHMgaW4gdGhlIHNjaGVtYScsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXHRcdGNvbnN0IEZvcm1BY3Rpb25zID0gZ2V0Q29tcG9uZW50KCdGb3JtQWN0aW9ucycpO1xuXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1BY3Rpb25zIHsuLi5maWVsZFByb3BzIGFzIGFueX0gZGlyZWN0aW9uPVwibGVmdFwiIC8+XG5cdFx0XHRcdDwvRm9ybWlrPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybUFjdGlvbnMpO1xuXG5cdFx0IC8vZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cblx0XHRjb25zdCByb290OiBhbnkgPSBjb21wb25lbnQuZmluZCgnW3Rlc3RJRD1cImZvcm0tYWN0aW9uc1wiXScpLmZpcnN0KCkucHJvcCgnc3R5bGUnKTtcblx0XHRjb25zdCByb290U3R5bGVzOiBhbnkgPSBkZWVwbWVyZ2UuYWxsKHJvb3QuZmlsdGVyKCh4OiBhbnkpID0+ICEheCkpO1xuXHRcdGNvbnN0IGNoaWxkU3R5bGVzOiBhbnkgPSBjb21wb25lbnQuZmluZCgnRmllbGRXcmFwcGVyIFZpZXcnKS5maXJzdCgpLnByb3AoJ3N0eWxlJyk7XG5cblx0XHQvLyBDaGVjayBmaWVsZHNcblx0XHRleHBlY3Qocm9vdFN0eWxlcy5qdXN0aWZ5Q29udGVudCkudG9CZSgnZmxleC1zdGFydCcpO1xuXHRcdGV4cGVjdChjaGlsZFN0eWxlcy5tYXJnaW5MZWZ0KS50b0JlKDE2KTtcblx0fSk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==