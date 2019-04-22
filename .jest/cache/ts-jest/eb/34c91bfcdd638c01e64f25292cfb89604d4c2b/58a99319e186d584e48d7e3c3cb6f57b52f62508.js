"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const components_1 = require("@bluebase/components");
const formik_1 = require("formik");
const react_1 = tslib_1.__importDefault(require("react"));
// import { Theme } from '@bluebase/core';
const Button = components_1.getComponent('Button');
exports.FormResetButton = formik_1.connect((props) => {
    const { nested, formik, styles } = props, others = tslib_1.__rest(props, ["nested", "formik", "styles"]);
    return (
    // <View style={!nested ? styles.wrapper : null} >
    react_1.default.createElement(Button, Object.assign({}, others, { onPress: formik.handleReset, type: "reset" }))
    //  </View>
    );
});
exports.FormResetButton.defaultProps = {
    name: 'reset',
    title: 'Reset',
    variant: 'text',
};
// (FormResetButton as any).defaultStyles = (theme: Theme) => ({
// 	wrapper: {
// 		paddingHorizontal: theme.spacing.unit * 2,
// 		paddingVertical: 2
// 	}
// })
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVJlc2V0QnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBaUU7QUFDakUsbUNBQWdEO0FBQ2hELDBEQUEwQjtBQUMxQiwwQ0FBMEM7QUFFMUMsTUFBTSxNQUFNLEdBQUcseUJBQVksQ0FBYyxRQUFRLENBQUMsQ0FBQztBQVV0QyxRQUFBLGVBQWUsR0FBRyxnQkFBTyxDQUFDLENBQUMsS0FBNEQsRUFBRSxFQUFFO0lBQ3ZHLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sS0FBZ0IsS0FBSyxFQUFuQiw4REFBbUIsQ0FBQztJQUVwRCxPQUFPO0lBRVAsa0RBQWtEO0lBQ2pELDhCQUFDLE1BQU0sb0JBQUssTUFBTSxJQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksRUFBQyxPQUFPLElBQUc7SUFDakUsV0FBVztLQUNWLENBQUE7QUFDRixDQUFDLENBQ0EsQ0FBQztBQUdGLHVCQUFlLENBQUMsWUFBWSxHQUFHO0lBQzlCLElBQUksRUFBRSxPQUFPO0lBQ2IsS0FBSyxFQUFFLE9BQU87SUFDZCxPQUFPLEVBQUUsTUFBTTtDQUNmLENBQUM7QUFHRixnRUFBZ0U7QUFDaEUsY0FBYztBQUNkLCtDQUErQztBQUMvQyx1QkFBdUI7QUFFdkIsS0FBSztBQUNMLEtBQUsiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVJlc2V0QnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b25Qcm9wcywgZ2V0Q29tcG9uZW50IH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRm9ybWlrQ29udGV4dCwgY29ubmVjdCB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5cbmNvbnN0IEJ1dHRvbiA9IGdldENvbXBvbmVudDxCdXR0b25Qcm9wcz4oJ0J1dHRvbicpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1SZXNldEJ1dHRvblByb3BzIGV4dGVuZHMgQnV0dG9uUHJvcHMge1xuXHR0eXBlOiAncmVzZXQnLFxuXHRuYW1lOiBzdHJpbmcsXG5cdHRpdGxlPyA6c3RyaW5nXG5cdCAgc3R5bGVzPzogYW55XG5cdCAgbmVzdGVkID86c3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBGb3JtUmVzZXRCdXR0b24gPSBjb25uZWN0KChwcm9wczogRm9ybVJlc2V0QnV0dG9uUHJvcHMgJiB7IGZvcm1pazogRm9ybWlrQ29udGV4dDx7fT47IH0pID0+IHtcblx0Y29uc3QgeyBuZXN0ZWQsIGZvcm1paywgc3R5bGVzLCAuLi5vdGhlcnMgfSA9IHByb3BzO1xuXG5cdHJldHVybiAoXG5cblx0Ly8gPFZpZXcgc3R5bGU9eyFuZXN0ZWQgPyBzdHlsZXMud3JhcHBlciA6IG51bGx9ID5cblx0XHQ8QnV0dG9uIHsuLi5vdGhlcnN9IG9uUHJlc3M9e2Zvcm1pay5oYW5kbGVSZXNldH0gdHlwZT1cInJlc2V0XCIgLz5cblx0Ly8gIDwvVmlldz5cblx0KVxufVxuKTtcblxuXG5Gb3JtUmVzZXRCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuXHRuYW1lOiAncmVzZXQnLFxuXHR0aXRsZTogJ1Jlc2V0Jyxcblx0dmFyaWFudDogJ3RleHQnLFxufTtcblxuXG4vLyAoRm9ybVJlc2V0QnV0dG9uIGFzIGFueSkuZGVmYXVsdFN0eWxlcyA9ICh0aGVtZTogVGhlbWUpID0+ICh7XG4vLyBcdHdyYXBwZXI6IHtcbi8vIFx0XHRwYWRkaW5nSG9yaXpvbnRhbDogdGhlbWUuc3BhY2luZy51bml0ICogMixcbi8vIFx0XHRwYWRkaW5nVmVydGljYWw6IDJcblxuLy8gXHR9XG4vLyB9KSJdLCJ2ZXJzaW9uIjozfQ==