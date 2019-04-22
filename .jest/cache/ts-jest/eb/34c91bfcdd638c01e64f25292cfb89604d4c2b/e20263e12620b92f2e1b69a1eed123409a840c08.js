"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const FormFields_1 = require("../FormFields");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("@bluebase/components");
const FieldWrapper = ({ field, parent, children }) => {
    const { direction, styles, style } = parent;
    return (react_1.default.createElement(components_1.View, { key: field.name, style: [direction === 'left' ? styles.fieldContainerLeft : styles.fieldContainerRight, style] }, children));
};
/**
 * A component that renders form actions, i.e. submit or reset buttons
 * @param props
 */
exports.FormActions = (props) => {
    const { direction, style, styles: _styles } = props;
    const styles = _styles;
    return (react_1.default.createElement(components_1.View, { style: [styles.root, direction === 'left' ? styles.rootLeft : direction === 'right' ? styles.rootRight : direction === 'space-between' ? styles.rootSpaceBetween : null, style], testID: "form-actions" },
        react_1.default.createElement(FormFields_1.FormFields, Object.assign({}, props, { FieldWrapper: FieldWrapper }))));
};
exports.FormActions.defaultProps = {
//direction: 'right',
};
exports.FormActions.defaultStyles = (theme) => ({
    fieldContainerLeft: {
        marginLeft: theme.spacing.unit * 10,
    },
    fieldContainerRight: {
        marginRight: theme.spacing.unit * 4,
    },
    fieldContainerBetween: {
    // marginLeft: theme.spacing.unit * 4,
    // marginRight: theme.spacing.unit * 0,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUFjdGlvbnMudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4RDtBQUc5RCwwREFBMEI7QUFFMUIscURBQTRDO0FBc0I1QyxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxRQUFRLEVBQXFCLEVBQUUsRUFBRTtJQUV0RSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsR0FBRyxNQUFNLENBQUM7SUFFM0MsT0FBTyxDQUNOLDhCQUFDLGlCQUFJLElBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQ2YsS0FBSyxFQUFFLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLElBRTVGLFFBQVEsQ0FDRixDQUNOLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRjs7O0dBR0c7QUFDVSxRQUFBLFdBQVcsR0FBRyxDQUFDLEtBQXVCLEVBQUUsRUFBRTtJQUV0RCxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQ3BELE1BQU0sTUFBTSxHQUFHLE9BQTRCLENBQUM7SUFDNUMsT0FBTyxDQUVOLDhCQUFDLGlCQUFJLElBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBRSxTQUFTLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssZUFBZSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFFdEwsTUFBTSxFQUFDLGNBQWM7UUFDckIsOEJBQUMsdUJBQVUsb0JBQUssS0FBSyxJQUFFLFlBQVksRUFBRSxZQUFZLElBQUksQ0FDL0MsQ0FDTixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsbUJBQVcsQ0FBQyxZQUFZLEdBQUc7QUFDMUIscUJBQXFCO0NBQ3JCLENBQUM7QUFFRixtQkFBVyxDQUFDLGFBQWEsR0FBRyxDQUFDLEtBQVksRUFBcUIsRUFBRSxDQUFDLENBQUM7SUFDakUsa0JBQWtCLEVBQUU7UUFDbkIsVUFBVSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEVBQUU7S0FDbkM7SUFDRCxtQkFBbUIsRUFBRTtRQUNwQixXQUFXLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztLQUNuQztJQUVELHFCQUFxQixFQUFFO0lBQ3RCLHNDQUFzQztJQUN0Qyx1Q0FBdUM7S0FDdkM7SUFDRCxJQUFJLEVBQUU7UUFDTCxhQUFhLEVBQUUsS0FBSztRQUNuQixlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztLQUN4QztJQUNELFFBQVEsRUFBRTtRQUNULGNBQWMsRUFBRSxZQUFZO0tBRTVCO0lBQ0QsU0FBUyxFQUFFO1FBQ1YsY0FBYyxFQUFFLFVBQVU7S0FDMUI7SUFDRCxnQkFBZ0IsRUFBRTtRQUNqQixjQUFjLEVBQUUsZUFBZTtLQUMvQjtDQUNELENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9Gb3JtQWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRXcmFwcGVyUHJvcHMsIEZvcm1GaWVsZHMgfSBmcm9tICcuLi9Gb3JtRmllbGRzJztcbmltcG9ydCB7IFN0eWxlUHJvcCwgVmlld1N0eWxlIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IEZvcm1GaWVsZFByb3BzIH0gZnJvbSAnLi9Gb3JtRmllbGRQcm9wcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1BY3Rpb25zU3R5bGVzIHtcblx0ZmllbGRDb250YWluZXJMZWZ0OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0ZmllbGRDb250YWluZXJSaWdodDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdGZpZWxkQ29udGFpbmVyQmV0d2VlbiA6U3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHJvb3RTcGFjZUJldHdlZW4gOiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0cm9vdDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHJvb3RMZWZ0OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0cm9vdFJpZ2h0OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtQWN0aW9uc1Byb3BzIHtcblx0dHlwZTogJ2FjdGlvbnMnO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGRpcmVjdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdzcGFjZS1iZXR3ZWVuJztcblx0ZmllbGRzOiBGb3JtRmllbGRQcm9wc1tdO1xuXHRzdHlsZT86IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRzdHlsZXM/OiBQYXJ0aWFsPEZvcm1BY3Rpb25zU3R5bGVzPjtcbn1cblxuXG5jb25zdCBGaWVsZFdyYXBwZXIgPSAoeyBmaWVsZCwgcGFyZW50LGNoaWxkcmVuIH06IEZpZWxkV3JhcHBlclByb3BzKSA9PiB7XG5cblx0Y29uc3QgeyBkaXJlY3Rpb24sIHN0eWxlcyAsc3R5bGV9ID0gcGFyZW50O1xuXG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRrZXk9e2ZpZWxkLm5hbWV9XG5cdFx0c3R5bGU9e1tkaXJlY3Rpb24gPT09ICdsZWZ0Jz8gc3R5bGVzLmZpZWxkQ29udGFpbmVyTGVmdCA6IHN0eWxlcy5maWVsZENvbnRhaW5lclJpZ2h0ICxzdHlsZV0gfVxuXHQ+XG5cdHtjaGlsZHJlbn1cblx0PC9WaWV3PlxuXHQpO1xufTtcblxuLyoqXG4gKiBBIGNvbXBvbmVudCB0aGF0IHJlbmRlcnMgZm9ybSBhY3Rpb25zLCBpLmUuIHN1Ym1pdCBvciByZXNldCBidXR0b25zXG4gKiBAcGFyYW0gcHJvcHNcbiAqL1xuZXhwb3J0IGNvbnN0IEZvcm1BY3Rpb25zID0gKHByb3BzOiBGb3JtQWN0aW9uc1Byb3BzKSA9PiB7XG5cblx0Y29uc3QgeyBkaXJlY3Rpb24sIHN0eWxlLCBzdHlsZXM6IF9zdHlsZXMgfSA9IHByb3BzO1xuXHRjb25zdCBzdHlsZXMgPSBfc3R5bGVzIGFzIEZvcm1BY3Rpb25zU3R5bGVzO1xuXHRyZXR1cm4gKFxuXHRcdFxuXHRcdDxWaWV3IHN0eWxlPXtbc3R5bGVzLnJvb3QsIGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gc3R5bGVzLnJvb3RMZWZ0IDogIGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/IHN0eWxlcy5yb290UmlnaHQgOiBkaXJlY3Rpb24gPT09ICdzcGFjZS1iZXR3ZWVuJyA/IHN0eWxlcy5yb290U3BhY2VCZXR3ZWVuIDogbnVsbCwgc3R5bGVdfVxuXHRcdFxuXHRcdHRlc3RJRD1cImZvcm0tYWN0aW9uc1wiPlxuXHRcdDxGb3JtRmllbGRzIHsuLi5wcm9wc30gRmllbGRXcmFwcGVyPXtGaWVsZFdyYXBwZXJ9IC8+XG5cdDwvVmlldz5cblx0KTtcbn07XG5cbkZvcm1BY3Rpb25zLmRlZmF1bHRQcm9wcyA9IHtcblx0Ly9kaXJlY3Rpb246ICdyaWdodCcsXG59O1xuXG5Gb3JtQWN0aW9ucy5kZWZhdWx0U3R5bGVzID0gKHRoZW1lOiBUaGVtZSk6IEZvcm1BY3Rpb25zU3R5bGVzID0+ICh7XG5cdGZpZWxkQ29udGFpbmVyTGVmdDoge1xuXHRcdG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDEwLFxuXHR9LFxuXHRmaWVsZENvbnRhaW5lclJpZ2h0OiB7XG5cdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDQsXG5cdH0sXG5cdFxuXHRmaWVsZENvbnRhaW5lckJldHdlZW4gOntcblx0XHQvLyBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiA0LFxuXHRcdC8vIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAwLFxuXHR9LFxuXHRyb290OiB7XG5cdFx0ZmxleERpcmVjdGlvbjogJ3JvdycsXG5cdFx0IHBhZGRpbmdWZXJ0aWNhbDogdGhlbWUuc3BhY2luZy51bml0ICogMixcblx0fSxcblx0cm9vdExlZnQ6IHtcblx0XHRqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuXHRcdFxuXHR9LFxuXHRyb290UmlnaHQ6IHtcblx0XHRqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcblx0fSxcblx0cm9vdFNwYWNlQmV0d2Vlbjoge1xuXHRcdGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG5cdH1cbn0pOyJdLCJ2ZXJzaW9uIjozfQ==