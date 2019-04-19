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
        paddingHorizontal: theme.spacing.unit * 19,
        paddingVertical: 3
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVJlc2V0QnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBdUU7QUFDdkUsbUNBQWdEO0FBQ2hELDBEQUEwQjtBQUcxQixNQUFNLE1BQU0sR0FBRyx5QkFBWSxDQUFjLFFBQVEsQ0FBQyxDQUFDO0FBU3RDLFFBQUEsZUFBZSxHQUFHLGdCQUFPLENBQUMsQ0FBQyxLQUE0RCxFQUFFLEVBQUU7SUFFdkcsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUMsTUFBTSxLQUFlLEtBQUssRUFBbkIsOERBQW1CLENBQUM7SUFFbkQsT0FBTyxDQUFDLDhCQUFDLGlCQUFJLElBQ1osS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBRXRDLDhCQUFDLE1BQU0sb0JBQUssTUFBTSxJQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksRUFBQyxPQUFPLElBQUcsQ0FDMUQsQ0FBQyxDQUFBO0FBQ1IsQ0FBQyxDQUNBLENBQUM7QUFHRix1QkFBZSxDQUFDLFlBQVksR0FBRztJQUM5QixJQUFJLEVBQUUsT0FBTztJQUNiLEtBQUssRUFBRSxPQUFPO0lBQ2QsT0FBTyxFQUFFLE1BQU07Q0FDZixDQUFDO0FBR0QsdUJBQXVCLENBQUMsYUFBYSxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNELE9BQU8sRUFBRTtRQUNSLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEVBQUU7UUFDMUMsZUFBZSxFQUFFLENBQUM7S0FFbEI7Q0FDRCxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVJlc2V0QnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b25Qcm9wcywgZ2V0Q29tcG9uZW50LCBWaWV3IH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRm9ybWlrQ29udGV4dCwgY29ubmVjdCB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5cbmNvbnN0IEJ1dHRvbiA9IGdldENvbXBvbmVudDxCdXR0b25Qcm9wcz4oJ0J1dHRvbicpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1SZXNldEJ1dHRvblByb3BzIGV4dGVuZHMgQnV0dG9uUHJvcHMge1xuXHR0eXBlOiAncmVzZXQnLFxuXHRuYW1lOiBzdHJpbmcsXG5cdG5lc3RlZDogYm9vbGVhblxuXHRzdHlsZXMgPyA6IGFueVxufVxuXG5leHBvcnQgY29uc3QgRm9ybVJlc2V0QnV0dG9uID0gY29ubmVjdCgocHJvcHM6IEZvcm1SZXNldEJ1dHRvblByb3BzICYgeyBmb3JtaWs6IEZvcm1pa0NvbnRleHQ8e30+OyB9KSA9PiBcbntcblx0Y29uc3QgeyBuZXN0ZWQgLGZvcm1payxzdHlsZXMsLi4ub3RoZXJzIH0gPSBwcm9wcztcblxucmV0dXJuICg8Vmlld1xuXHRzdHlsZT17IW5lc3RlZCA/IHN0eWxlcy53cmFwcGVyIDogbnVsbH1cbj5cblx0PEJ1dHRvbiB7Li4ub3RoZXJzfSBvblByZXNzPXtmb3JtaWsuaGFuZGxlUmVzZXR9IHR5cGU9XCJyZXNldFwiIC8+XG48L1ZpZXc+KVxufVxuKTtcblxuXG5Gb3JtUmVzZXRCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuXHRuYW1lOiAncmVzZXQnLFxuXHR0aXRsZTogJ1Jlc2V0Jyxcblx0dmFyaWFudDogJ3RleHQnLFxufTtcblxuXG4oRm9ybVJlc2V0QnV0dG9uIGFzIGFueSkuZGVmYXVsdFN0eWxlcyA9ICh0aGVtZTogVGhlbWUpID0+ICh7XG5cdHdyYXBwZXI6IHtcblx0XHRwYWRkaW5nSG9yaXpvbnRhbDogdGhlbWUuc3BhY2luZy51bml0ICogMTksXG5cdFx0cGFkZGluZ1ZlcnRpY2FsOiAzXG5cblx0fVxufSkiXSwidmVyc2lvbiI6M30=