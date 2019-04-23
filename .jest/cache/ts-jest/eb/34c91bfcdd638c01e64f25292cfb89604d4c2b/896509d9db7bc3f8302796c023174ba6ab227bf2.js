"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const FormFields_1 = require("../FormFields");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("@bluebase/components");
const FieldWrapper = ({ field, parent, children }) => {
    const { direction, styles, style } = parent;
    return (react_1.default.createElement(components_1.View, { key: field.name, style: direction === 'left' ? styles.fieldContainerLeft : direction === "right" ? styles.fieldContainerRight : style }, children));
};
/**
 * A component that renders form actions, i.e. submit or reset buttons
 * @param props
 */
exports.FormActions = (props) => {
    const { direction, styles: _styles } = props;
    const styles = _styles;
    return (react_1.default.createElement(components_1.View, { style: [
            styles.root,
            direction === 'left' ?
                styles.rootLeft :
                direction === 'right' ?
                    styles.rootRight
                    : /*direction === 'space-between' ?
                    styles.rootSpaceBetween :*/
                        null
        ], testID: "form-actions" },
        react_1.default.createElement(FormFields_1.FormFields, Object.assign({}, props, { FieldWrapper: FieldWrapper }))));
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
    root: {
        flexDirection: 'row',
        paddingVertical: theme.spacing.unit * 2,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUFjdGlvbnMudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4RDtBQUc5RCwwREFBMEI7QUFFMUIscURBQTRDO0FBcUI1QyxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQXFCLEVBQUUsRUFBRTtJQUV2RSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUM7SUFFNUMsT0FBTyxDQUNOLDhCQUFDLGlCQUFJLElBQ0osR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQ2YsS0FBSyxFQUFFLFNBQVMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxLQUFLLElBRW5ILFFBQVEsQ0FDSCxDQUNQLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRjs7O0dBR0c7QUFDVSxRQUFBLFdBQVcsR0FBRyxDQUFDLEtBQXVCLEVBQUUsRUFBRTtJQUV0RCxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDN0MsTUFBTSxNQUFNLEdBQUcsT0FBNEIsQ0FBQztJQUM1QyxPQUFPLENBRU4sOEJBQUMsaUJBQUksSUFBQyxLQUFLLEVBQUU7WUFDWixNQUFNLENBQUMsSUFBSTtZQUNYLFNBQVMsS0FBSyxNQUFNLENBQUMsQ0FBQztnQkFDdEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNqQixTQUFTLEtBQUssT0FBTyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU0sQ0FBQyxTQUFTO29CQUNoQixDQUFDLENBQUM7K0NBQ3lCO3dCQUMzQixJQUFJO1NBQ0osRUFFQSxNQUFNLEVBQUMsY0FBYztRQUNyQiw4QkFBQyx1QkFBVSxvQkFBSyxLQUFLLElBQUUsWUFBWSxFQUFFLFlBQVksSUFBSSxDQUMvQyxDQUNQLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixtQkFBVyxDQUFDLFlBQVksR0FBRztJQUMxQixTQUFTLEVBQUUsT0FBTztDQUNsQixDQUFDO0FBRUYsbUJBQVcsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxLQUFZLEVBQXFCLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLGtCQUFrQixFQUFFO1FBQ25CLFVBQVUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDO0tBQ2xDO0lBQ0QsbUJBQW1CLEVBQUU7UUFDcEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7S0FDbkM7SUFDRCxJQUFJLEVBQUU7UUFDTCxhQUFhLEVBQUUsS0FBSztRQUNwQixlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztLQUN2QztJQUNELFFBQVEsRUFBRTtRQUNULGNBQWMsRUFBRSxZQUFZO0tBRTVCO0lBQ0QsU0FBUyxFQUFFO1FBQ1YsY0FBYyxFQUFFLFVBQVU7S0FDMUI7SUFDRCxnQkFBZ0IsRUFBRTtRQUNqQixjQUFjLEVBQUUsZUFBZTtLQUMvQjtDQUNELENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9Gb3JtQWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRXcmFwcGVyUHJvcHMsIEZvcm1GaWVsZHMgfSBmcm9tICcuLi9Gb3JtRmllbGRzJztcbmltcG9ydCB7IFN0eWxlUHJvcCwgVmlld1N0eWxlIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IEZvcm1GaWVsZFByb3BzIH0gZnJvbSAnLi9Gb3JtRmllbGRQcm9wcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1BY3Rpb25zU3R5bGVzIHtcblx0ZmllbGRDb250YWluZXJMZWZ0OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0ZmllbGRDb250YWluZXJSaWdodDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHJvb3RTcGFjZUJldHdlZW46IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRyb290OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0cm9vdExlZnQ6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRyb290UmlnaHQ6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1BY3Rpb25zUHJvcHMge1xuXHR0eXBlOiAnYWN0aW9ucyc7XG5cdG5hbWU6IHN0cmluZztcblx0ZGlyZWN0aW9uOiAnbGVmdCcgfCAncmlnaHQnIHwgJ3NwYWNlLWJldHdlZW4nO1xuXHRmaWVsZHM6IEZvcm1GaWVsZFByb3BzW107XG5cdHN0eWxlPzogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHN0eWxlcz86IFBhcnRpYWw8Rm9ybUFjdGlvbnNTdHlsZXM+O1xufVxuXG5cbmNvbnN0IEZpZWxkV3JhcHBlciA9ICh7IGZpZWxkLCBwYXJlbnQsIGNoaWxkcmVuIH06IEZpZWxkV3JhcHBlclByb3BzKSA9PiB7XG5cblx0Y29uc3QgeyBkaXJlY3Rpb24sIHN0eWxlcywgc3R5bGUgfSA9IHBhcmVudDtcblxuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRrZXk9e2ZpZWxkLm5hbWV9XG5cdFx0XHRzdHlsZT17ZGlyZWN0aW9uID09PSAnbGVmdCcgPyBzdHlsZXMuZmllbGRDb250YWluZXJMZWZ0IDogZGlyZWN0aW9uID09PSBcInJpZ2h0XCIgPyBzdHlsZXMuZmllbGRDb250YWluZXJSaWdodCA6IHN0eWxlfVxuXHRcdD5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L1ZpZXc+XG5cdCk7XG59O1xuXG4vKipcbiAqIEEgY29tcG9uZW50IHRoYXQgcmVuZGVycyBmb3JtIGFjdGlvbnMsIGkuZS4gc3VibWl0IG9yIHJlc2V0IGJ1dHRvbnNcbiAqIEBwYXJhbSBwcm9wc1xuICovXG5leHBvcnQgY29uc3QgRm9ybUFjdGlvbnMgPSAocHJvcHM6IEZvcm1BY3Rpb25zUHJvcHMpID0+IHtcblxuXHRjb25zdCB7IGRpcmVjdGlvbiwgc3R5bGVzOiBfc3R5bGVzIH0gPSBwcm9wcztcblx0Y29uc3Qgc3R5bGVzID0gX3N0eWxlcyBhcyBGb3JtQWN0aW9uc1N0eWxlcztcblx0cmV0dXJuIChcblxuXHRcdDxWaWV3IHN0eWxlPXtbXG5cdFx0XHRzdHlsZXMucm9vdCxcblx0XHRcdGRpcmVjdGlvbiA9PT0gJ2xlZnQnID9cblx0XHRcdHN0eWxlcy5yb290TGVmdCA6XG5cdFx0XHRkaXJlY3Rpb24gPT09ICdyaWdodCcgP1xuXHRcdFx0c3R5bGVzLnJvb3RSaWdodFxuXHRcdFx0OiAvKmRpcmVjdGlvbiA9PT0gJ3NwYWNlLWJldHdlZW4nID9cblx0XHRcdHN0eWxlcy5yb290U3BhY2VCZXR3ZWVuIDoqL1xuXHRcdFx0bnVsbFxuXHRcdF19XG5cblx0XHRcdHRlc3RJRD1cImZvcm0tYWN0aW9uc1wiPlxuXHRcdFx0PEZvcm1GaWVsZHMgey4uLnByb3BzfSBGaWVsZFdyYXBwZXI9e0ZpZWxkV3JhcHBlcn0gLz5cblx0XHQ8L1ZpZXc+XG5cdCk7XG59O1xuXG5Gb3JtQWN0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XG5cdGRpcmVjdGlvbjogJ3JpZ2h0Jyxcbn07XG5cbkZvcm1BY3Rpb25zLmRlZmF1bHRTdHlsZXMgPSAodGhlbWU6IFRoZW1lKTogRm9ybUFjdGlvbnNTdHlsZXMgPT4gKHtcblx0ZmllbGRDb250YWluZXJMZWZ0OiB7XG5cdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy51bml0ICogMixcblx0fSxcblx0ZmllbGRDb250YWluZXJSaWdodDoge1xuXHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAyLFxuXHR9LFxuXHRyb290OiB7XG5cdFx0ZmxleERpcmVjdGlvbjogJ3JvdycsXG5cdFx0cGFkZGluZ1ZlcnRpY2FsOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAyLFxuXHR9LFxuXHRyb290TGVmdDoge1xuXHRcdGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG5cblx0fSxcblx0cm9vdFJpZ2h0OiB7XG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG5cdH0sXG5cdHJvb3RTcGFjZUJldHdlZW46IHtcblx0XHRqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuXHR9XG59KTsiXSwidmVyc2lvbiI6M30=