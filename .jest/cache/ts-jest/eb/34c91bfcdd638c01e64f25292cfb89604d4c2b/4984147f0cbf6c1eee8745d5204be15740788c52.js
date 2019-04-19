"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const FormFields_1 = require("../FormFields");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("@bluebase/components");
const FieldWrapper = ({ field, parent, children }) => {
    const { direction, styles, style } = parent;
    return (react_1.default.createElement(components_1.View, { key: field.name, style: [direction === 'left' ? styles.fieldContainerLeft : null
                || direction === 'right' ? styles.fieldContainerRight : null
                || direction === 'space-between' ? styles.fieldContainerBetween : null, style] }, children));
};
/**
 * A component that renders form actions, i.e. submit or reset buttons
 * @param props
 */
exports.FormActions = (props) => {
    const { direction, style, styles: _styles } = props;
    const styles = _styles;
    return (react_1.default.createElement(components_1.View, { style: [styles.root, direction === 'left' ? styles.rootLeft : null
                || direction === 'right' ? styles.rootRight : null
                || direction === 'space-between' ? styles.rootSpaceBetween : null, style], testID: "form-actions" },
        react_1.default.createElement(FormFields_1.FormFields, Object.assign({}, props, { FieldWrapper: FieldWrapper }))));
};
exports.FormActions.defaultProps = {
    direction: 'right'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUFjdGlvbnMudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4RDtBQUc5RCwwREFBMEI7QUFFMUIscURBQTRDO0FBc0I1QyxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQXFCLEVBQUUsRUFBRTtJQUV2RSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQyxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUM7SUFFM0MsT0FBTyxDQUNOLDhCQUFDLGlCQUFJLElBQ0osR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQ2YsS0FBSyxFQUFFLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJO21CQUM3RCxTQUFTLEtBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBLElBQUk7bUJBQ3RELFNBQVMsS0FBSyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFJLEtBQUssQ0FBQyxJQUVoRixRQUFRLENBQ0YsQ0FDUCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUY7OztHQUdHO0FBQ1UsUUFBQSxXQUFXLEdBQUcsQ0FBQyxLQUF1QixFQUFFLEVBQUU7SUFFdEQsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQztJQUNwRCxNQUFNLE1BQU0sR0FBRyxPQUE0QixDQUFDO0lBRTVDLE9BQU8sQ0FFTiw4QkFBQyxpQkFBSSxJQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSTttQkFDcEUsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUEsSUFBSTttQkFDL0MsU0FBUyxLQUFLLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFDLGNBQWM7UUFDL0YsOEJBQUMsdUJBQVUsb0JBQUssS0FBSyxJQUFFLFlBQVksRUFBRSxZQUFZLElBQUksQ0FDL0MsQ0FDUCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsbUJBQVcsQ0FBQyxZQUFZLEdBQUc7SUFDMUIsU0FBUyxFQUFFLE9BQU87Q0FDbEIsQ0FBQztBQUVGLG1CQUFXLENBQUMsYUFBYSxHQUFHLENBQUMsS0FBWSxFQUFxQixFQUFFLENBQUMsQ0FBQztJQUNqRSxrQkFBa0IsRUFBRTtRQUNuQixVQUFVLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztLQUNsQztJQUNELG1CQUFtQixFQUFFO1FBQ3BCLFdBQVcsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDO0tBQ25DO0lBQ0QscUJBQXFCLEVBQUU7UUFDdEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDbEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7S0FDbkM7SUFDRCxJQUFJLEVBQUU7UUFDTCxhQUFhLEVBQUUsS0FBSztLQUVwQjtJQUNELFFBQVEsRUFBRTtRQUNULGNBQWMsRUFBRSxZQUFZO0tBQzVCO0lBQ0QsU0FBUyxFQUFFO1FBQ1YsY0FBYyxFQUFFLFVBQVU7S0FDMUI7SUFDRCxnQkFBZ0IsRUFBRTtRQUNqQixjQUFjLEVBQUUsZUFBZTtLQUMvQjtDQUNELENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9Gb3JtQWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRXcmFwcGVyUHJvcHMsIEZvcm1GaWVsZHMgfSBmcm9tICcuLi9Gb3JtRmllbGRzJztcbmltcG9ydCB7IFN0eWxlUHJvcCwgVmlld1N0eWxlIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IEZvcm1GaWVsZFByb3BzIH0gZnJvbSAnLi9Gb3JtRmllbGRQcm9wcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1BY3Rpb25zU3R5bGVzIHtcblx0ZmllbGRDb250YWluZXJMZWZ0OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0ZmllbGRDb250YWluZXJSaWdodDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdGZpZWxkQ29udGFpbmVyQmV0d2VlbiA6U3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHJvb3RTcGFjZUJldHdlZW4gOiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0cm9vdDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHJvb3RMZWZ0OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0cm9vdFJpZ2h0OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtQWN0aW9uc1Byb3BzIHtcblx0dHlwZTogJ2FjdGlvbnMnO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGRpcmVjdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdzcGFjZS1iZXR3ZWVuJztcblx0ZmllbGRzOiBGb3JtRmllbGRQcm9wc1tdO1xuXHRzdHlsZT86IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRzdHlsZXM/OiBQYXJ0aWFsPEZvcm1BY3Rpb25zU3R5bGVzPjtcbn1cblxuXG5jb25zdCBGaWVsZFdyYXBwZXIgPSAoeyBmaWVsZCwgcGFyZW50LCBjaGlsZHJlbiB9OiBGaWVsZFdyYXBwZXJQcm9wcykgPT4ge1xuXG5cdGNvbnN0IHsgZGlyZWN0aW9uLCBzdHlsZXMsc3R5bGUgfSA9IHBhcmVudDtcblxuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRrZXk9e2ZpZWxkLm5hbWV9XG5cdFx0XHRzdHlsZT17W2RpcmVjdGlvbiA9PT0gJ2xlZnQnID8gc3R5bGVzLmZpZWxkQ29udGFpbmVyTGVmdCA6IG51bGwgXG5cdFx0XHR8fGRpcmVjdGlvbiA9PT0ncmlnaHQnID8gc3R5bGVzLmZpZWxkQ29udGFpbmVyUmlnaHQgOm51bGxcblx0XHRcdHx8IGRpcmVjdGlvbiA9PT0gJ3NwYWNlLWJldHdlZW4nID8gc3R5bGVzLmZpZWxkQ29udGFpbmVyQmV0d2VlbiA6IG51bGwsICAgc3R5bGVdfVxuXHRcdD5cblx0XHR7Y2hpbGRyZW59XG5cdFx0PC9WaWV3PlxuXHQpO1xufTtcblxuLyoqXG4gKiBBIGNvbXBvbmVudCB0aGF0IHJlbmRlcnMgZm9ybSBhY3Rpb25zLCBpLmUuIHN1Ym1pdCBvciByZXNldCBidXR0b25zXG4gKiBAcGFyYW0gcHJvcHNcbiAqL1xuZXhwb3J0IGNvbnN0IEZvcm1BY3Rpb25zID0gKHByb3BzOiBGb3JtQWN0aW9uc1Byb3BzKSA9PiB7XG5cblx0Y29uc3QgeyBkaXJlY3Rpb24sIHN0eWxlLCBzdHlsZXM6IF9zdHlsZXMgfSA9IHByb3BzO1xuXHRjb25zdCBzdHlsZXMgPSBfc3R5bGVzIGFzIEZvcm1BY3Rpb25zU3R5bGVzO1xuXG5cdHJldHVybiAoXG5cdFx0XG5cdFx0PFZpZXcgc3R5bGU9e1tzdHlsZXMucm9vdCwgZGlyZWN0aW9uID09PSAnbGVmdCcgPyBzdHlsZXMucm9vdExlZnQgOiBudWxsIFxuXHRcdHx8ICBkaXJlY3Rpb24gPT09ICdyaWdodCcgPyBzdHlsZXMucm9vdFJpZ2h0IDpudWxsIFxuXHRcdHx8IGRpcmVjdGlvbiA9PT0gJ3NwYWNlLWJldHdlZW4nID8gc3R5bGVzLnJvb3RTcGFjZUJldHdlZW4gOiBudWxsLCBzdHlsZV19IHRlc3RJRD1cImZvcm0tYWN0aW9uc1wiPlxuXHRcdFx0PEZvcm1GaWVsZHMgey4uLnByb3BzfSBGaWVsZFdyYXBwZXI9e0ZpZWxkV3JhcHBlcn0gLz5cblx0XHQ8L1ZpZXc+XG5cdCk7XG59O1xuXG5Gb3JtQWN0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XG5cdGRpcmVjdGlvbjogJ3JpZ2h0J1xufTtcblxuRm9ybUFjdGlvbnMuZGVmYXVsdFN0eWxlcyA9ICh0aGVtZTogVGhlbWUpOiBGb3JtQWN0aW9uc1N0eWxlcyA9PiAoe1xuXHRmaWVsZENvbnRhaW5lckxlZnQ6IHtcblx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAyLFxuXHR9LFxuXHRmaWVsZENvbnRhaW5lclJpZ2h0OiB7XG5cdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDIsXG5cdH0sXG5cdGZpZWxkQ29udGFpbmVyQmV0d2VlbiA6e1xuXHRcdG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDAsXG5cdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDAsXG5cdH0sXG5cdHJvb3Q6IHtcblx0XHRmbGV4RGlyZWN0aW9uOiAncm93Jyxcblx0XHQgLy9wYWRkaW5nVmVydGljYWw6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDIsXG5cdH0sXG5cdHJvb3RMZWZ0OiB7XG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0Jyxcblx0fSxcblx0cm9vdFJpZ2h0OiB7XG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG5cdH0sXG5cdHJvb3RTcGFjZUJldHdlZW46IHtcblx0XHRqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuXHR9XG59KTsiXSwidmVyc2lvbiI6M30=