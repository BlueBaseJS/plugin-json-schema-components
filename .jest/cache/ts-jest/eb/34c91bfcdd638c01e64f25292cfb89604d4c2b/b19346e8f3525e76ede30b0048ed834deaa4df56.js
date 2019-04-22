"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const FormFields_1 = require("../FormFields");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("@bluebase/components");
const FieldWrapper = ({ field, parent, children }) => {
    const { direction, styles, style } = parent;
    debugger;
    return (react_1.default.createElement(components_1.View, { key: field.name, style: [direction === "left" ? styles.fieldContainerLeft : direction === "right" ? styles.fieldContainerRight : direction === "space-between" ? styles.fieldContainerBetween : null, style] }, children));
};
/**
 * A component that renders form actions, i.e. submit or reset buttons
 * @param props
 */
exports.FormActions = (props) => {
    const { direction, style, styles: _styles } = props;
    const styles = _styles;
    return (react_1.default.createElement(components_1.View, { style: [styles.root, direction === 'left' ? styles.rootLeft : direction === 'right' ? styles.rootRight : direction === 'space-between' ? styles.rootSpaceBetween : null, style], testID: "form-actions" },
        react_1.default.createElement(FormFields_1.FormFields, Object.assign({ FieldWrapper: FieldWrapper }, props))));
};
exports.FormActions.defaultProps = {
    direction: 'right',
};
exports.FormActions.defaultStyles = (theme) => ({
    fieldContainerLeft: {
        marginLeft: theme.spacing.unit * 2,
    },
    fieldContainerRight: {
        marginRight: theme.spacing.unit * 2,
    },
    fieldContainerBetween: {
        marginLeft: theme.spacing.unit * 0,
        marginRight: theme.spacing.unit * 0,
    },
    root: {
        flexDirection: 'row',
        marginRight: 16
        //  paddingVertical: theme.spacing.unit * 2,
    },
    rootLeft: {
        justifyContent: 'flex-start',
    },
    rootRight: {
        justifyContent: 'flex-end',
    },
    rootSpaceBetween: {
        justifyContent: 'space-between',
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUFjdGlvbnMudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4RDtBQUc5RCwwREFBMEI7QUFFMUIscURBQTRDO0FBc0I1QyxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxRQUFRLEVBQXFCLEVBQUUsRUFBRTtJQUV0RSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUM7SUFDN0MsUUFBUSxDQUFBO0lBQ1AsT0FBTyxDQUNOLDhCQUFDLGlCQUFJLElBQ0osR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQ2YsS0FBSyxFQUFFLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBRSxJQUU1TCxRQUFRLENBQ0YsQ0FDUCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUY7OztHQUdHO0FBQ1UsUUFBQSxXQUFXLEdBQUcsQ0FBQyxLQUF1QixFQUFFLEVBQUU7SUFFdEQsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQztJQUNwRCxNQUFNLE1BQU0sR0FBRyxPQUE0QixDQUFDO0lBQzVDLE9BQU8sQ0FFTiw4QkFBQyxpQkFBSSxJQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUUsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFDLGNBQWM7UUFDNU0sOEJBQUMsdUJBQVUsa0JBQUMsWUFBWSxFQUFFLFlBQVksSUFBTSxLQUFLLEVBQUssQ0FDaEQsQ0FDUCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsbUJBQVcsQ0FBQyxZQUFZLEdBQUc7SUFDMUIsU0FBUyxFQUFFLE9BQU87Q0FDbEIsQ0FBQztBQUVGLG1CQUFXLENBQUMsYUFBYSxHQUFHLENBQUMsS0FBWSxFQUFxQixFQUFFLENBQUMsQ0FBQztJQUNqRSxrQkFBa0IsRUFBRTtRQUNuQixVQUFVLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztLQUNsQztJQUNELG1CQUFtQixFQUFFO1FBQ3BCLFdBQVcsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDO0tBQ25DO0lBRUQscUJBQXFCLEVBQUU7UUFDdEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDbEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7S0FDbkM7SUFDRCxJQUFJLEVBQUU7UUFDTCxhQUFhLEVBQUUsS0FBSztRQUNwQixXQUFXLEVBQUUsRUFBRTtRQUNmLDRDQUE0QztLQUM1QztJQUNELFFBQVEsRUFBRTtRQUNULGNBQWMsRUFBRSxZQUFZO0tBRTVCO0lBQ0QsU0FBUyxFQUFFO1FBQ1YsY0FBYyxFQUFFLFVBQVU7S0FDMUI7SUFDRCxnQkFBZ0IsRUFBRTtRQUNqQixjQUFjLEVBQUUsZUFBZTtLQUMvQjtDQUNELENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9Gb3JtQWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRXcmFwcGVyUHJvcHMsIEZvcm1GaWVsZHMgfSBmcm9tICcuLi9Gb3JtRmllbGRzJztcbmltcG9ydCB7IFN0eWxlUHJvcCwgVmlld1N0eWxlIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IEZvcm1GaWVsZFByb3BzIH0gZnJvbSAnLi9Gb3JtRmllbGRQcm9wcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1BY3Rpb25zU3R5bGVzIHtcblx0ZmllbGRDb250YWluZXJMZWZ0OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0ZmllbGRDb250YWluZXJSaWdodDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdGZpZWxkQ29udGFpbmVyQmV0d2VlbiA6U3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHJvb3RTcGFjZUJldHdlZW4gOiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0cm9vdDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHJvb3RMZWZ0OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0cm9vdFJpZ2h0OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtQWN0aW9uc1Byb3BzIHtcblx0dHlwZTogJ2FjdGlvbnMnO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGRpcmVjdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdzcGFjZS1iZXR3ZWVuJztcblx0ZmllbGRzOiBGb3JtRmllbGRQcm9wc1tdO1xuXHRzdHlsZT86IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRzdHlsZXM/OiBQYXJ0aWFsPEZvcm1BY3Rpb25zU3R5bGVzPjtcbn1cblxuXG5jb25zdCBGaWVsZFdyYXBwZXIgPSAoeyBmaWVsZCwgcGFyZW50LGNoaWxkcmVuIH06IEZpZWxkV3JhcHBlclByb3BzKSA9PiB7XG5cblx0Y29uc3QgeyBkaXJlY3Rpb24sIHN0eWxlcywgc3R5bGUgfSA9IHBhcmVudDtcbmRlYnVnZ2VyXG5cdHJldHVybiAoXG5cdFx0PFZpZXcgXG5cdFx0XHRrZXk9e2ZpZWxkLm5hbWV9XG5cdFx0XHRzdHlsZT17W2RpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgPyBzdHlsZXMuZmllbGRDb250YWluZXJMZWZ0IDogZGlyZWN0aW9uID09PSBcInJpZ2h0XCIgPyBzdHlsZXMuZmllbGRDb250YWluZXJSaWdodCA6IGRpcmVjdGlvbiA9PT0gXCJzcGFjZS1iZXR3ZWVuXCIgPyBzdHlsZXMuZmllbGRDb250YWluZXJCZXR3ZWVuIDogbnVsbCwgc3R5bGUgXX1cblx0XHQ+XG5cdFx0e2NoaWxkcmVufVxuXHRcdDwvVmlldz5cblx0KTtcbn07XG5cbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCByZW5kZXJzIGZvcm0gYWN0aW9ucywgaS5lLiBzdWJtaXQgb3IgcmVzZXQgYnV0dG9uc1xuICogQHBhcmFtIHByb3BzXG4gKi9cbmV4cG9ydCBjb25zdCBGb3JtQWN0aW9ucyA9IChwcm9wczogRm9ybUFjdGlvbnNQcm9wcykgPT4ge1xuXG5cdGNvbnN0IHsgZGlyZWN0aW9uLCBzdHlsZSwgc3R5bGVzOiBfc3R5bGVzIH0gPSBwcm9wcztcblx0Y29uc3Qgc3R5bGVzID0gX3N0eWxlcyBhcyBGb3JtQWN0aW9uc1N0eWxlcztcblx0cmV0dXJuIChcblx0XHRcblx0XHQ8VmlldyBzdHlsZT17W3N0eWxlcy5yb290LCBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHN0eWxlcy5yb290TGVmdCA6ICBkaXJlY3Rpb24gPT09ICdyaWdodCcgPyBzdHlsZXMucm9vdFJpZ2h0IDogZGlyZWN0aW9uID09PSAnc3BhY2UtYmV0d2VlbicgPyBzdHlsZXMucm9vdFNwYWNlQmV0d2VlbiA6IG51bGwsIHN0eWxlXX0gdGVzdElEPVwiZm9ybS1hY3Rpb25zXCI+XG5cdFx0XHQ8Rm9ybUZpZWxkcyBGaWVsZFdyYXBwZXI9e0ZpZWxkV3JhcHBlcn0gey4uLnByb3BzfSAgLz5cblx0XHQ8L1ZpZXc+XG5cdCk7XG59O1xuXG5Gb3JtQWN0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XG5cdGRpcmVjdGlvbjogJ3JpZ2h0Jyxcbn07XG5cbkZvcm1BY3Rpb25zLmRlZmF1bHRTdHlsZXMgPSAodGhlbWU6IFRoZW1lKTogRm9ybUFjdGlvbnNTdHlsZXMgPT4gKHtcblx0ZmllbGRDb250YWluZXJMZWZ0OiB7XG5cdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy51bml0ICogMixcblx0fSxcblx0ZmllbGRDb250YWluZXJSaWdodDoge1xuXHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAyLFxuXHR9LFxuXHRcblx0ZmllbGRDb250YWluZXJCZXR3ZWVuIDp7XG5cdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy51bml0ICogMCxcblx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0ICogMCxcblx0fSxcblx0cm9vdDoge1xuXHRcdGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuXHRcdG1hcmdpblJpZ2h0IDoxNlxuXHRcdC8vICBwYWRkaW5nVmVydGljYWw6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDIsXG5cdH0sXG5cdHJvb3RMZWZ0OiB7XG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0Jyxcblx0XHRcblx0fSxcblx0cm9vdFJpZ2h0OiB7XG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG5cdH0sXG5cdHJvb3RTcGFjZUJldHdlZW46IHtcblx0XHRqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuXHR9XG59KTsiXSwidmVyc2lvbiI6M30=