"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const components_1 = require("@bluebase/components");
const formik_1 = require("formik");
const react_1 = tslib_1.__importDefault(require("react"));
const Button = components_1.getComponent('Button');
exports.FormResetButton = formik_1.connect((props) => {
    const { nested, formik, styles } = props, others = tslib_1.__rest(props, ["nested", "formik", "styles"]);
    return (react_1.default.createElement(components_1.View, { style: !nested ? styles.wrapper : null },
        react_1.default.createElement(Button, Object.assign({}, others, { onPress: formik.handleReset, type: "reset" }))));
});
exports.FormResetButton.defaultProps = {
    name: 'reset',
    title: 'Reset',
    variant: 'text',
};
exports.FormResetButton.defaultStyles = (theme) => ({
    wrapper: {
        paddingHorizontal: theme.spacing.unit * 2,
        paddingVertical: 2
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVJlc2V0QnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBc0U7QUFDdEUsbUNBQWdEO0FBQ2hELDBEQUEwQjtBQUcxQixNQUFNLE1BQU0sR0FBRyx5QkFBWSxDQUFjLFFBQVEsQ0FBQyxDQUFDO0FBUXRDLFFBQUEsZUFBZSxHQUFHLGdCQUFPLENBQUMsQ0FBQyxLQUE0RCxFQUFFLEVBQUU7SUFDdkcsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxLQUFnQixLQUFLLEVBQW5CLDhEQUFtQixDQUFDO0lBRXBELE9BQU8sQ0FFUCw4QkFBQyxpQkFBSSxJQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUMzQyw4QkFBQyxNQUFNLG9CQUFLLE1BQU0sSUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUMsT0FBTyxJQUFHLENBQ3pELENBQ1AsQ0FBQTtBQUNGLENBQUMsQ0FDQSxDQUFDO0FBR0YsdUJBQWUsQ0FBQyxZQUFZLEdBQUc7SUFDOUIsSUFBSSxFQUFFLE9BQU87SUFDYixLQUFLLEVBQUUsT0FBTztJQUNkLE9BQU8sRUFBRSxNQUFNO0NBQ2YsQ0FBQztBQUdELHVCQUF1QixDQUFDLGFBQWEsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMzRCxPQUFPLEVBQUU7UUFDUixpQkFBaUIsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDO1FBQ3pDLGVBQWUsRUFBRSxDQUFDO0tBRWxCO0NBQ0QsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL0Zvcm1SZXNldEJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uUHJvcHMsIGdldENvbXBvbmVudCAsVmlld30gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRm9ybWlrQ29udGV4dCwgY29ubmVjdCB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5cbmNvbnN0IEJ1dHRvbiA9IGdldENvbXBvbmVudDxCdXR0b25Qcm9wcz4oJ0J1dHRvbicpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1SZXNldEJ1dHRvblByb3BzIGV4dGVuZHMgQnV0dG9uUHJvcHMge1xuXHR0eXBlOiAncmVzZXQnLFxuXHRuYW1lOiBzdHJpbmcsXG4gIFx0c3R5bGVzPzogYW55XG59XG5cbmV4cG9ydCBjb25zdCBGb3JtUmVzZXRCdXR0b24gPSBjb25uZWN0KChwcm9wczogRm9ybVJlc2V0QnV0dG9uUHJvcHMgJiB7IGZvcm1pazogRm9ybWlrQ29udGV4dDx7fT47IH0pID0+IHtcblx0Y29uc3QgeyBuZXN0ZWQsIGZvcm1paywgc3R5bGVzLCAuLi5vdGhlcnMgfSA9IHByb3BzO1xuXG5cdHJldHVybiAoXG5cblx0PFZpZXcgc3R5bGU9eyFuZXN0ZWQgPyBzdHlsZXMud3JhcHBlciA6IG51bGx9ID5cblx0XHQ8QnV0dG9uIHsuLi5vdGhlcnN9IG9uUHJlc3M9e2Zvcm1pay5oYW5kbGVSZXNldH0gdHlwZT1cInJlc2V0XCIgLz5cblx0IDwvVmlldz5cblx0KVxufVxuKTtcblxuXG5Gb3JtUmVzZXRCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuXHRuYW1lOiAncmVzZXQnLFxuXHR0aXRsZTogJ1Jlc2V0Jyxcblx0dmFyaWFudDogJ3RleHQnLFxufTtcblxuXG4oRm9ybVJlc2V0QnV0dG9uIGFzIGFueSkuZGVmYXVsdFN0eWxlcyA9ICh0aGVtZTogVGhlbWUpID0+ICh7XG5cdHdyYXBwZXI6IHtcblx0XHRwYWRkaW5nSG9yaXpvbnRhbDogdGhlbWUuc3BhY2luZy51bml0ICogMixcblx0XHRwYWRkaW5nVmVydGljYWw6IDJcblxuXHR9XG59KSJdLCJ2ZXJzaW9uIjozfQ==