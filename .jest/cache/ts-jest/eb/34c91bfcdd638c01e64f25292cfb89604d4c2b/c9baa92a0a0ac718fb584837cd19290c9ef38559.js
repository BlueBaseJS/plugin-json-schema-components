"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const FormFields_1 = require("../FormFields");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("@bluebase/components");
const FieldWrapper = ({ field, parent, children }) => {
    const { direction, styles, style, textAlignment } = parent;
    debugger;
    return (react_1.default.createElement(components_1.View, { key: field.name, style: [direction === 'left' ? styles.fieldContainerLeft : null
                || direction === 'right' ? styles.fieldContainerRight : null
                || direction === 'space-between' ? styles.fieldContainerBetween : null
                || textAlignment === 'left' ? styles.textContainerLeft : null
                || textAlignment === 'right' ? styles.textContainerRight : null, style] }, children));
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
        react_1.default.createElement(FormFields_1.FormFields, Object.assign({ FieldWrapper: FieldWrapper }, props))));
};
exports.FormActions.defaultProps = {
    direction: 'right',
    textAlignment: 'left'
};
exports.FormActions.defaultStyles = (theme) => ({
    fieldContainerLeft: {
        marginLeft: theme.spacing.unit * 0,
    },
    fieldContainerRight: {
        marginRight: theme.spacing.unit * 0,
    },
    textContainerRight: {
        marginRight: theme.spacing.unit * 2,
    },
    textContainerLeft: {
        marginLeft: theme.spacing.unit * 2,
    },
    fieldContainerBetween: {
        marginLeft: theme.spacing.unit * 0,
        marginRight: theme.spacing.unit * 0,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUFjdGlvbnMudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4RDtBQUc5RCwwREFBMEI7QUFFMUIscURBQTRDO0FBeUI1QyxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxRQUFRLEVBQXFCLEVBQUUsRUFBRTtJQUV0RSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEdBQUcsTUFBTSxDQUFDO0lBQzNELFFBQVEsQ0FBQztJQUVULE9BQU8sQ0FDTiw4QkFBQyxpQkFBSSxJQUNKLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUNmLEtBQUssRUFBRSxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSTttQkFDNUQsU0FBUyxLQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQSxJQUFJO21CQUN2RCxTQUFTLEtBQUssZUFBZSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUk7bUJBQ25FLGFBQWEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUEsSUFBSTttQkFDekQsYUFBYSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFBLENBQUMsQ0FBQSxJQUFJLEVBQUUsS0FBSyxDQUFFLElBRXRFLFFBQVEsQ0FDRixDQUNQLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRjs7O0dBR0c7QUFDVSxRQUFBLFdBQVcsR0FBRyxDQUFDLEtBQXVCLEVBQUUsRUFBRTtJQUV0RCxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQ3BELE1BQU0sTUFBTSxHQUFHLE9BQTRCLENBQUM7SUFDNUMsT0FBTyxDQUVOLDhCQUFDLGlCQUFJLElBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJO21CQUNwRSxTQUFTLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQSxJQUFJO21CQUMvQyxTQUFTLEtBQUssZUFBZSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUMsY0FBYztRQUMvRiw4QkFBQyx1QkFBVSxrQkFBQyxZQUFZLEVBQUUsWUFBWSxJQUFNLEtBQUssRUFBSyxDQUNoRCxDQUNQLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixtQkFBVyxDQUFDLFlBQVksR0FBRztJQUMxQixTQUFTLEVBQUUsT0FBTztJQUNsQixhQUFhLEVBQUUsTUFBTTtDQUNyQixDQUFDO0FBRUYsbUJBQVcsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxLQUFZLEVBQXFCLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLGtCQUFrQixFQUFFO1FBQ25CLFVBQVUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDO0tBQ2xDO0lBQ0QsbUJBQW1CLEVBQUU7UUFDcEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7S0FDbkM7SUFDRCxrQkFBa0IsRUFBRTtRQUNuQixXQUFXLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztLQUNuQztJQUNELGlCQUFpQixFQUFFO1FBQ2xCLFVBQVUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDO0tBQ2xDO0lBQ0QscUJBQXFCLEVBQUU7UUFDdEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDbEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7S0FDbkM7SUFDRCxJQUFJLEVBQUU7UUFDTCxhQUFhLEVBQUUsS0FBSztRQUNuQixlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztLQUN4QztJQUNELFFBQVEsRUFBRTtRQUNULGNBQWMsRUFBRSxZQUFZO0tBRTVCO0lBQ0QsU0FBUyxFQUFFO1FBQ1YsY0FBYyxFQUFFLFVBQVU7S0FDMUI7SUFDRCxnQkFBZ0IsRUFBRTtRQUNqQixjQUFjLEVBQUUsZUFBZTtLQUMvQjtDQUNELENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9Gb3JtQWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRXcmFwcGVyUHJvcHMsIEZvcm1GaWVsZHMgfSBmcm9tICcuLi9Gb3JtRmllbGRzJztcbmltcG9ydCB7IFN0eWxlUHJvcCwgVmlld1N0eWxlIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCB7IEZvcm1GaWVsZFByb3BzIH0gZnJvbSAnLi9Gb3JtRmllbGRQcm9wcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1BY3Rpb25zU3R5bGVzIHtcblx0ZmllbGRDb250YWluZXJMZWZ0OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0ZmllbGRDb250YWluZXJSaWdodDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdGZpZWxkQ29udGFpbmVyQmV0d2VlbiA6U3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHRleHRDb250YWluZXJSaWdodCA6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHR0ZXh0Q29udGFpbmVyTGVmdCA6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRyb290U3BhY2VCZXR3ZWVuIDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHJvb3Q6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRyb290TGVmdDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHJvb3RSaWdodDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUFjdGlvbnNQcm9wcyB7XG5cdHR5cGU6ICdhY3Rpb25zJztcblx0bmFtZTogc3RyaW5nO1xuXHR0ZXh0QWxpZ25tZW50IDogJ2xlZnQnIHwgJ3JpZ2h0JyA7XG5cdGRpcmVjdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdzcGFjZS1iZXR3ZWVuJztcblx0ZmllbGRzOiBGb3JtRmllbGRQcm9wc1tdO1xuXHRzdHlsZT86IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRzdHlsZXM/OiBQYXJ0aWFsPEZvcm1BY3Rpb25zU3R5bGVzPjtcbn1cblxuXG5jb25zdCBGaWVsZFdyYXBwZXIgPSAoeyBmaWVsZCwgcGFyZW50LGNoaWxkcmVuIH06IEZpZWxkV3JhcHBlclByb3BzKSA9PiB7XG5cblx0Y29uc3QgeyBkaXJlY3Rpb24sIHN0eWxlcywgc3R5bGUsIHRleHRBbGlnbm1lbnQgfSA9IHBhcmVudDtcblx0ZGVidWdnZXI7XG5cblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0a2V5PXtmaWVsZC5uYW1lfVxuXHRcdFx0c3R5bGU9e1tkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHN0eWxlcy5maWVsZENvbnRhaW5lckxlZnQgOiBudWxsIFxuXHRcdFx0fHwgZGlyZWN0aW9uID09PSdyaWdodCcgPyBzdHlsZXMuZmllbGRDb250YWluZXJSaWdodCA6bnVsbFxuXHRcdFx0fHwgZGlyZWN0aW9uID09PSAnc3BhY2UtYmV0d2VlbicgPyBzdHlsZXMuZmllbGRDb250YWluZXJCZXR3ZWVuIDogbnVsbFxuXHRcdFx0fHwgdGV4dEFsaWdubWVudCA9PT0gJ2xlZnQnID8gc3R5bGVzLnRleHRDb250YWluZXJMZWZ0IDpudWxsXG5cdFx0XHR8fCB0ZXh0QWxpZ25tZW50ID09PSAncmlnaHQnID8gc3R5bGVzLnRleHRDb250YWluZXJSaWdodDpudWxsLCBzdHlsZSBdfVxuXHRcdD5cblx0XHR7Y2hpbGRyZW59XG5cdFx0PC9WaWV3PlxuXHQpO1xufTtcblxuLyoqXG4gKiBBIGNvbXBvbmVudCB0aGF0IHJlbmRlcnMgZm9ybSBhY3Rpb25zLCBpLmUuIHN1Ym1pdCBvciByZXNldCBidXR0b25zXG4gKiBAcGFyYW0gcHJvcHNcbiAqL1xuZXhwb3J0IGNvbnN0IEZvcm1BY3Rpb25zID0gKHByb3BzOiBGb3JtQWN0aW9uc1Byb3BzKSA9PiB7XG5cblx0Y29uc3QgeyBkaXJlY3Rpb24sIHN0eWxlLCBzdHlsZXM6IF9zdHlsZXMgfSA9IHByb3BzO1xuXHRjb25zdCBzdHlsZXMgPSBfc3R5bGVzIGFzIEZvcm1BY3Rpb25zU3R5bGVzO1xuXHRyZXR1cm4gKFxuXHRcdFxuXHRcdDxWaWV3IHN0eWxlPXtbc3R5bGVzLnJvb3QsIGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gc3R5bGVzLnJvb3RMZWZ0IDogbnVsbCBcblx0XHR8fCAgZGlyZWN0aW9uID09PSAncmlnaHQnID8gc3R5bGVzLnJvb3RSaWdodCA6bnVsbCBcblx0XHR8fCBkaXJlY3Rpb24gPT09ICdzcGFjZS1iZXR3ZWVuJyA/IHN0eWxlcy5yb290U3BhY2VCZXR3ZWVuIDogbnVsbCwgc3R5bGVdfSB0ZXN0SUQ9XCJmb3JtLWFjdGlvbnNcIj5cblx0XHRcdDxGb3JtRmllbGRzIEZpZWxkV3JhcHBlcj17RmllbGRXcmFwcGVyfSB7Li4ucHJvcHN9ICAvPlxuXHRcdDwvVmlldz5cblx0KTtcbn07XG5cbkZvcm1BY3Rpb25zLmRlZmF1bHRQcm9wcyA9IHtcblx0ZGlyZWN0aW9uOiAncmlnaHQnLFxuXHR0ZXh0QWxpZ25tZW50OiAnbGVmdCdcbn07XG5cbkZvcm1BY3Rpb25zLmRlZmF1bHRTdHlsZXMgPSAodGhlbWU6IFRoZW1lKTogRm9ybUFjdGlvbnNTdHlsZXMgPT4gKHtcblx0ZmllbGRDb250YWluZXJMZWZ0OiB7XG5cdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy51bml0ICogMCxcblx0fSxcblx0ZmllbGRDb250YWluZXJSaWdodDoge1xuXHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAwLFxuXHR9LFxuXHR0ZXh0Q29udGFpbmVyUmlnaHQ6IHtcblx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0ICogMixcblx0fSxcblx0dGV4dENvbnRhaW5lckxlZnQ6IHtcblx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAyLFxuXHR9LFxuXHRmaWVsZENvbnRhaW5lckJldHdlZW4gOntcblx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAwLFxuXHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAwLFxuXHR9LFxuXHRyb290OiB7XG5cdFx0ZmxleERpcmVjdGlvbjogJ3JvdycsXG5cdFx0IHBhZGRpbmdWZXJ0aWNhbDogdGhlbWUuc3BhY2luZy51bml0ICogMixcblx0fSxcblx0cm9vdExlZnQ6IHtcblx0XHRqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuXHRcdFxuXHR9LFxuXHRyb290UmlnaHQ6IHtcblx0XHRqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcblx0fSxcblx0cm9vdFNwYWNlQmV0d2Vlbjoge1xuXHRcdGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG5cdH1cbn0pOyJdLCJ2ZXJzaW9uIjozfQ==