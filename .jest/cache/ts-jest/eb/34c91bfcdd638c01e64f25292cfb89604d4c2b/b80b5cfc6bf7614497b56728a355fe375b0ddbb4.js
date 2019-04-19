"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const components_1 = require("@bluebase/components");
const formik_1 = require("formik");
const react_1 = tslib_1.__importDefault(require("react"));
exports.FormSubmitButton = formik_1.connect((props) => {
    const { handleSubmit, isSubmitting, styles, nested } = props;
    return (react_1.default.createElement(components_1.View, { style: !nested ? styles.wrapper : null },
        react_1.default.createElement(components_1.Button, Object.assign({ disabled: isSubmitting, loading: isSubmitting }, props, { onPress: handleSubmit, type: "submit" }))));
});
exports.FormSubmitButton.defaultProps = {
    color: 'primary',
    name: 'submit',
    title: 'Submit',
    variant: 'contained',
};
exports.FormSubmitButton.defaultStyles = (theme) => ({
    wrapper: {
        paddingHorizontal: theme.spacing.unit * 2,
        paddingVertical: 2
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVN1Ym1pdEJ1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQWlFO0FBQ2pFLG1DQUFnRDtBQUNoRCwwREFBMEI7QUFZYixRQUFBLGdCQUFnQixHQUFHLGdCQUFPLENBQUUsQ0FBQyxLQUE2RCxFQUFFLEVBQUU7SUFFMUcsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQztJQUUzRCxPQUFPLENBQ04sOEJBQUMsaUJBQUksSUFDTCxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFFckMsOEJBQUMsbUJBQU0sa0JBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsWUFBWSxJQUFNLEtBQUssSUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQyxRQUFRLElBQUcsQ0FDbkcsQ0FFUCxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCx3QkFBZ0IsQ0FBQyxZQUFZLEdBQUc7SUFDL0IsS0FBSyxFQUFFLFNBQVM7SUFDaEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLE9BQU8sRUFBRSxXQUFXO0NBQ3BCLENBQUM7QUFFRCx3QkFBd0IsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUQsT0FBTyxFQUFFO1FBQ1IsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUN6QyxlQUFlLEVBQUUsQ0FBQztLQUVsQjtDQUNELENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9Gb3JtU3VibWl0QnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEJ1dHRvblByb3BzLCBWaWV3IH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRm9ybWlrQ29udGV4dCwgY29ubmVjdCB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtU3VibWl0QnV0dG9uUHJvcHMgZXh0ZW5kcyBCdXR0b25Qcm9wcyB7XG5cdHR5cGU6ICdzdWJtaXQnLFxuXHRuZXN0ZWQgPyA6IGJvb2xlYW5cblx0bmFtZTogc3RyaW5nLFxuXHRzdHlsZXM/OmFueVxuXG59XG5cbmV4cG9ydCBjb25zdCBGb3JtU3VibWl0QnV0dG9uID0gY29ubmVjdCggKHByb3BzOiBGb3JtU3VibWl0QnV0dG9uUHJvcHMgJiB7IGZvcm1pazogRm9ybWlrQ29udGV4dDx7fT47IH0pID0+IHtcblxuXHRjb25zdCB7IGhhbmRsZVN1Ym1pdCwgaXNTdWJtaXR0aW5nLHN0eWxlcyxuZXN0ZWQgfSA9IHByb3BzO1xuXG5cdHJldHVybiAoXG5cdFx0PFZpZXcgXG5cdFx0c3R5bGU9eyFuZXN0ZWQgPyBzdHlsZXMud3JhcHBlciA6IG51bGx9XG5cdFx0PlxuXHRcdFx0PEJ1dHRvbiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfSBsb2FkaW5nPXtpc1N1Ym1pdHRpbmd9IHsuLi5wcm9wc30gb25QcmVzcz17aGFuZGxlU3VibWl0fSB0eXBlPVwic3VibWl0XCIgLz5cblx0XHQ8L1ZpZXc+XG5cblx0KTtcbn0pO1xuXG5Gb3JtU3VibWl0QnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcblx0Y29sb3I6ICdwcmltYXJ5Jyxcblx0bmFtZTogJ3N1Ym1pdCcsXG5cdHRpdGxlOiAnU3VibWl0Jyxcblx0dmFyaWFudDogJ2NvbnRhaW5lZCcsXG59O1xuXG4oRm9ybVN1Ym1pdEJ1dHRvbiBhcyBhbnkpLmRlZmF1bHRTdHlsZXMgPSAodGhlbWU6IFRoZW1lKSA9PiAoe1xuXHR3cmFwcGVyOiB7XG5cdFx0cGFkZGluZ0hvcml6b250YWw6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDIsXG5cdFx0cGFkZGluZ1ZlcnRpY2FsOiAyXG5cblx0fVxufSkiXSwidmVyc2lvbiI6M30=