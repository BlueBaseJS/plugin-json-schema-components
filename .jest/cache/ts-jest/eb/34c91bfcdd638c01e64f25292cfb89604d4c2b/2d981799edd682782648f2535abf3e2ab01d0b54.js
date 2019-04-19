"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const lib_1 = require("../lib");
const react_1 = tslib_1.__importDefault(require("react"));
const getComponent = (BB) => {
    return ({ component }) => {
        return BB.Components.has(String(component)) ? BB.Components.resolve(String(component)) : null;
    };
};
/**
 * # 🍱 JsonLayout
 *
 * Renders a Component based on JSON schema. This allows developers to create dynamic
 * layouts in their apps, and even save the schema to databases.
 *
 * Moreover, it also makes that schema filter-able. So that any plugin can modify that schema
 * on runtime.
 *
 * ## Usage:
 * ```jsx
 * <JsonLayout
 * 	filter="content-filter"
 * 	args={{ style: { color: 'blue' } }}
 *  schema={{
 * 	 component: 'Text',
 * 	 props: {
 * 		 style: {
 * 			 color: 'red'
 * 		 }
 * 	 },
 * 	 text: 'This is the page content.',
 *  }
 * } />
 * ```
 */
class JsonLayout extends react_1.default.PureComponent {
    render() {
        const BB = this.context;
        const { filter, schema, args } = this.props;
        const parser = new lib_1.JsonSchemaParser(getComponent(BB));
        // There's no filter, we don't need to do complex async handling
        if (!filter) {
            return parser.parseSchema(schema);
        }
        const children = (loadedSchema) => parser.parseSchema(loadedSchema);
        return (react_1.default.createElement(core_1.BlueBaseFilter, { filter: filter, value: schema, args: args, children: children }));
    }
}
JsonLayout.contextType = core_1.BlueBaseContext;
exports.JsonLayout = JsonLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uTGF5b3V0L0pzb25MYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUF1RjtBQUN2RixnQ0FBNkQ7QUFDN0QsMERBQTBCO0FBbUIxQixNQUFNLFlBQVksR0FBRyxDQUFDLEVBQVksRUFBRSxFQUFFO0lBQ3JDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBcUIsRUFBRSxFQUFFO1FBRTNDLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0YsQ0FBQyxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7QUFDSCxNQUFhLFVBQVcsU0FBUSxlQUFLLENBQUMsYUFBOEI7SUFJbkUsTUFBTTtRQUVMLE1BQU0sRUFBRSxHQUFhLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFbEMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1QyxNQUFNLE1BQU0sR0FBRyxJQUFJLHNCQUFnQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXRELGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1osT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxZQUEyQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRW5HLE9BQU8sQ0FDTiw4QkFBQyxxQkFBYyxJQUNkLE1BQU0sRUFBRSxNQUFNLEVBQ2QsS0FBSyxFQUFFLE1BQU0sRUFDYixJQUFJLEVBQUUsSUFBSSxFQUNWLFFBQVEsRUFBRSxRQUFRLEdBQ2pCLENBQ0YsQ0FBQztJQUNILENBQUM7O0FBeEJNLHNCQUFXLEdBQUcsc0JBQWUsQ0FBQztBQUZ0QyxnQ0EyQkMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uTGF5b3V0L0pzb25MYXlvdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlLCBCbHVlQmFzZUNvbnRleHQsIEJsdWVCYXNlRmlsdGVyLCBNYXliZUFycmF5IH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IHsgSnNvbkNvbXBvbmVudE5vZGUsIEpzb25TY2hlbWFQYXJzZXIgfSBmcm9tICcuLi9saWInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBKc29uTGF5b3V0UHJvcHMge1xuXG5cdC8qKiBKU09OIFNjaGVtYS4gKi9cblx0c2NoZW1hOiBNYXliZUFycmF5PEpzb25Db21wb25lbnROb2RlPjtcblxuXHQvKiogRXZlbnQgbmFtZSB0byBmaWx0ZXIgdGhpcyBzY2hlbWEuIElmIHRoaXMgaXMgbm90IHByb3ZpZGVkLCB0aGUgc2NoZW1hIGlzIG5vdCBmaWx0ZXJlZC4gKi9cblx0ZmlsdGVyPzogc3RyaW5nO1xuXG5cdC8qKiBBcmd1bWVudHMgZm9yIHRoZSBmaWx0ZXIuICovXG5cdGFyZ3M/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGxvY2F0ZSB0aGlzIHZpZXcgaW4gZW5kLXRvLWVuZCB0ZXN0cy5cbiAgICovXG5cdHRlc3RJRD86IHN0cmluZyxcbn1cblxuY29uc3QgZ2V0Q29tcG9uZW50ID0gKEJCOiBCbHVlQmFzZSkgPT4ge1xuXHRyZXR1cm4gKHsgY29tcG9uZW50IH06IEpzb25Db21wb25lbnROb2RlKSA9PiB7XG5cblx0XHRyZXR1cm4gQkIuQ29tcG9uZW50cy5oYXMoU3RyaW5nKGNvbXBvbmVudCkpID8gQkIuQ29tcG9uZW50cy5yZXNvbHZlKFN0cmluZyhjb21wb25lbnQpKSA6IG51bGw7XG5cdH07XG59O1xuXG4vKipcbiAqICMg8J+NsSBKc29uTGF5b3V0XG4gKlxuICogUmVuZGVycyBhIENvbXBvbmVudCBiYXNlZCBvbiBKU09OIHNjaGVtYS4gVGhpcyBhbGxvd3MgZGV2ZWxvcGVycyB0byBjcmVhdGUgZHluYW1pY1xuICogbGF5b3V0cyBpbiB0aGVpciBhcHBzLCBhbmQgZXZlbiBzYXZlIHRoZSBzY2hlbWEgdG8gZGF0YWJhc2VzLlxuICpcbiAqIE1vcmVvdmVyLCBpdCBhbHNvIG1ha2VzIHRoYXQgc2NoZW1hIGZpbHRlci1hYmxlLiBTbyB0aGF0IGFueSBwbHVnaW4gY2FuIG1vZGlmeSB0aGF0IHNjaGVtYVxuICogb24gcnVudGltZS5cbiAqXG4gKiAjIyBVc2FnZTpcbiAqIGBgYGpzeFxuICogPEpzb25MYXlvdXRcbiAqIFx0ZmlsdGVyPVwiY29udGVudC1maWx0ZXJcIlxuICogXHRhcmdzPXt7IHN0eWxlOiB7IGNvbG9yOiAnYmx1ZScgfSB9fVxuICogIHNjaGVtYT17e1xuICogXHQgY29tcG9uZW50OiAnVGV4dCcsXG4gKiBcdCBwcm9wczoge1xuICogXHRcdCBzdHlsZToge1xuICogXHRcdFx0IGNvbG9yOiAncmVkJ1xuICogXHRcdCB9XG4gKiBcdCB9LFxuICogXHQgdGV4dDogJ1RoaXMgaXMgdGhlIHBhZ2UgY29udGVudC4nLFxuICogIH1cbiAqIH0gLz5cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgSnNvbkxheW91dCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SnNvbkxheW91dFByb3BzPiB7XG5cblx0c3RhdGljIGNvbnRleHRUeXBlID0gQmx1ZUJhc2VDb250ZXh0O1xuXG5cdHJlbmRlcigpIHtcblxuXHRcdGNvbnN0IEJCOiBCbHVlQmFzZSA9IHRoaXMuY29udGV4dDtcblxuXHRcdGNvbnN0IHsgZmlsdGVyLCBzY2hlbWEsIGFyZ3MgfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgcGFyc2VyID0gbmV3IEpzb25TY2hlbWFQYXJzZXIoZ2V0Q29tcG9uZW50KEJCKSk7XG5cblx0XHQvLyBUaGVyZSdzIG5vIGZpbHRlciwgd2UgZG9uJ3QgbmVlZCB0byBkbyBjb21wbGV4IGFzeW5jIGhhbmRsaW5nXG5cdFx0aWYgKCFmaWx0ZXIpIHtcblx0XHRcdHJldHVybiBwYXJzZXIucGFyc2VTY2hlbWEoc2NoZW1hKTtcblx0XHR9XG5cblx0XHRjb25zdCBjaGlsZHJlbiA9IChsb2FkZWRTY2hlbWE6IE1heWJlQXJyYXk8SnNvbkNvbXBvbmVudE5vZGU+KSA9PiBwYXJzZXIucGFyc2VTY2hlbWEobG9hZGVkU2NoZW1hKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8Qmx1ZUJhc2VGaWx0ZXJcblx0XHRcdFx0ZmlsdGVyPXtmaWx0ZXJ9XG5cdFx0XHRcdHZhbHVlPXtzY2hlbWF9XG5cdFx0XHRcdGFyZ3M9e2FyZ3N9XG5cdFx0XHRcdGNoaWxkcmVuPXtjaGlsZHJlbn1cblx0XHRcdC8+XG5cdFx0KTtcblx0fVxufVxuIl0sInZlcnNpb24iOjN9