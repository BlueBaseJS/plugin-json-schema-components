"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const components_1 = require("@bluebase/components");
const formik_1 = require("formik");
const react_1 = tslib_1.__importDefault(require("react"));
const Button = components_1.getComponent('Button');
exports.FormResetButton = formik_1.connect((props) => {
    const { nested, formik, styles } = props, others = tslib_1.__rest(props, ["nested", "formik", "styles"]);
    return (react_1.default.createElement(components_1.View, { style: nested === false ? styles.wrapper : {} },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVJlc2V0QnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBc0U7QUFDdEUsbUNBQWdEO0FBQ2hELDBEQUEwQjtBQUcxQixNQUFNLE1BQU0sR0FBRyx5QkFBWSxDQUFjLFFBQVEsQ0FBQyxDQUFDO0FBVXRDLFFBQUEsZUFBZSxHQUFHLGdCQUFPLENBQUMsQ0FBQyxLQUE0RCxFQUFFLEVBQUU7SUFDdkcsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxLQUFnQixLQUFLLEVBQW5CLDhEQUFtQixDQUFDO0lBRXBELE9BQU8sQ0FFUCw4QkFBQyxpQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ25ELDhCQUFDLE1BQU0sb0JBQUssTUFBTSxJQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksRUFBQyxPQUFPLElBQUcsQ0FDekQsQ0FDUCxDQUFBO0FBQ0YsQ0FBQyxDQUNBLENBQUM7QUFFRix1QkFBZSxDQUFDLFlBQVksR0FBRztJQUM5QixJQUFJLEVBQUUsT0FBTztJQUNiLEtBQUssRUFBRSxPQUFPO0lBQ2QsT0FBTyxFQUFFLE1BQU07Q0FDZixDQUFDO0FBRUQsdUJBQXVCLENBQUMsYUFBYSxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNELE9BQU8sRUFBRTtRQUNSLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDekMsZUFBZSxFQUFFLENBQUM7S0FFbEI7Q0FDRCxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVJlc2V0QnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b25Qcm9wcywgZ2V0Q29tcG9uZW50ICxWaWV3fSBmcm9tICdAYmx1ZWJhc2UvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGb3JtaWtDb250ZXh0LCBjb25uZWN0IH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcblxuY29uc3QgQnV0dG9uID0gZ2V0Q29tcG9uZW50PEJ1dHRvblByb3BzPignQnV0dG9uJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybVJlc2V0QnV0dG9uUHJvcHMgZXh0ZW5kcyBCdXR0b25Qcm9wcyB7XG5cdHR5cGU6ICdyZXNldCcsXG5cdG5hbWU6IHN0cmluZyxcblx0dGl0bGU/IDpzdHJpbmdcblx0ICBzdHlsZXM/OiBhbnlcblx0ICBuZXN0ZWQgPzpib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBGb3JtUmVzZXRCdXR0b24gPSBjb25uZWN0KChwcm9wczogRm9ybVJlc2V0QnV0dG9uUHJvcHMgJiB7IGZvcm1pazogRm9ybWlrQ29udGV4dDx7fT47IH0pID0+IHtcblx0Y29uc3QgeyBuZXN0ZWQsIGZvcm1paywgc3R5bGVzLCAuLi5vdGhlcnMgfSA9IHByb3BzO1xuXG5cdHJldHVybiAoXG5cblx0PFZpZXcgc3R5bGU9e25lc3RlZCA9PT0gZmFsc2UgPyAgc3R5bGVzLndyYXBwZXIgOiB7fX0gPlxuXHRcdDxCdXR0b24gey4uLm90aGVyc30gb25QcmVzcz17Zm9ybWlrLmhhbmRsZVJlc2V0fSB0eXBlPVwicmVzZXRcIiAvPlxuXHQgPC9WaWV3PlxuXHQpXG59XG4pO1xuXG5Gb3JtUmVzZXRCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuXHRuYW1lOiAncmVzZXQnLFxuXHR0aXRsZTogJ1Jlc2V0Jyxcblx0dmFyaWFudDogJ3RleHQnLFxufTtcblxuKEZvcm1SZXNldEJ1dHRvbiBhcyBhbnkpLmRlZmF1bHRTdHlsZXMgPSAodGhlbWU6IFRoZW1lKSA9PiAoe1xuXHR3cmFwcGVyOiB7XG5cdFx0cGFkZGluZ0hvcml6b250YWw6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDIsXG5cdFx0cGFkZGluZ1ZlcnRpY2FsOiAyXG5cblx0fVxufSkiXSwidmVyc2lvbiI6M30=