"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const FormFields_1 = require("../FormFields");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("@bluebase/components");
const FieldWrapper = ({ field, parent, children }) => {
    const { direction, styles } = parent;
    return (react_1.default.createElement(components_1.View, { key: field.name, style: direction === 'left' ? styles.fieldContainerLeft : styles.fieldContainerRight }, children));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUFjdGlvbnMudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4RDtBQUc5RCwwREFBMEI7QUFFMUIscURBQTRDO0FBc0I1QyxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxRQUFRLEVBQXFCLEVBQUUsRUFBRTtJQUV0RSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUVyQyxPQUFPLENBQ04sOEJBQUMsaUJBQUksSUFDTCxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksRUFDZixLQUFLLEVBQUUsU0FBUyxLQUFLLE1BQU0sQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLElBRW5GLFFBQVEsQ0FDRixDQUNOLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRjs7O0dBR0c7QUFDVSxRQUFBLFdBQVcsR0FBRyxDQUFDLEtBQXVCLEVBQUUsRUFBRTtJQUV0RCxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQ3BELE1BQU0sTUFBTSxHQUFHLE9BQTRCLENBQUM7SUFDNUMsT0FBTyxDQUVOLDhCQUFDLGlCQUFJLElBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBRSxTQUFTLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssZUFBZSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFFdEwsTUFBTSxFQUFDLGNBQWM7UUFDckIsOEJBQUMsdUJBQVUsb0JBQUssS0FBSyxJQUFFLFlBQVksRUFBRSxZQUFZLElBQUksQ0FDL0MsQ0FDTixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsbUJBQVcsQ0FBQyxZQUFZLEdBQUc7QUFDMUIscUJBQXFCO0NBQ3JCLENBQUM7QUFFRixtQkFBVyxDQUFDLGFBQWEsR0FBRyxDQUFDLEtBQVksRUFBcUIsRUFBRSxDQUFDLENBQUM7SUFDakUsa0JBQWtCLEVBQUU7UUFDbkIsVUFBVSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7S0FDbEM7SUFDRCxtQkFBbUIsRUFBRTtRQUNwQixXQUFXLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztLQUNuQztJQUVELHFCQUFxQixFQUFFO1FBQ3RCLFVBQVUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDO1FBQ2xDLFdBQVcsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDO0tBQ25DO0lBQ0QsSUFBSSxFQUFFO1FBQ0wsYUFBYSxFQUFFLEtBQUs7UUFDbkIsZUFBZSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7S0FDeEM7SUFDRCxRQUFRLEVBQUU7UUFDVCxjQUFjLEVBQUUsWUFBWTtLQUU1QjtJQUNELFNBQVMsRUFBRTtRQUNWLGNBQWMsRUFBRSxVQUFVO0tBQzFCO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDakIsY0FBYyxFQUFFLGVBQWU7S0FDL0I7Q0FDRCxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUFjdGlvbnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkV3JhcHBlclByb3BzLCBGb3JtRmllbGRzIH0gZnJvbSAnLi4vRm9ybUZpZWxkcyc7XG5pbXBvcnQgeyBTdHlsZVByb3AsIFZpZXdTdHlsZSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBGb3JtRmllbGRQcm9wcyB9IGZyb20gJy4vRm9ybUZpZWxkUHJvcHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ0BibHVlYmFzZS9jb21wb25lbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtQWN0aW9uc1N0eWxlcyB7XG5cdGZpZWxkQ29udGFpbmVyTGVmdDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdGZpZWxkQ29udGFpbmVyUmlnaHQ6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRmaWVsZENvbnRhaW5lckJldHdlZW4gOlN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRyb290U3BhY2VCZXR3ZWVuIDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHJvb3Q6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRyb290TGVmdDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHJvb3RSaWdodDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUFjdGlvbnNQcm9wcyB7XG5cdHR5cGU6ICdhY3Rpb25zJztcblx0bmFtZTogc3RyaW5nO1xuXHRkaXJlY3Rpb246ICdsZWZ0JyB8ICdyaWdodCcgfCAnc3BhY2UtYmV0d2Vlbic7XG5cdGZpZWxkczogRm9ybUZpZWxkUHJvcHNbXTtcblx0c3R5bGU/OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0c3R5bGVzPzogUGFydGlhbDxGb3JtQWN0aW9uc1N0eWxlcz47XG59XG5cblxuY29uc3QgRmllbGRXcmFwcGVyID0gKHsgZmllbGQsIHBhcmVudCxjaGlsZHJlbiB9OiBGaWVsZFdyYXBwZXJQcm9wcykgPT4ge1xuXG5cdGNvbnN0IHsgZGlyZWN0aW9uLCBzdHlsZXMgfSA9IHBhcmVudDtcblxuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0a2V5PXtmaWVsZC5uYW1lfVxuXHRcdHN0eWxlPXtkaXJlY3Rpb24gPT09ICdsZWZ0Jz8gc3R5bGVzLmZpZWxkQ29udGFpbmVyTGVmdCA6IHN0eWxlcy5maWVsZENvbnRhaW5lclJpZ2h0ICAgfVxuXHQ+XG5cdHtjaGlsZHJlbn1cblx0PC9WaWV3PlxuXHQpO1xufTtcblxuLyoqXG4gKiBBIGNvbXBvbmVudCB0aGF0IHJlbmRlcnMgZm9ybSBhY3Rpb25zLCBpLmUuIHN1Ym1pdCBvciByZXNldCBidXR0b25zXG4gKiBAcGFyYW0gcHJvcHNcbiAqL1xuZXhwb3J0IGNvbnN0IEZvcm1BY3Rpb25zID0gKHByb3BzOiBGb3JtQWN0aW9uc1Byb3BzKSA9PiB7XG5cblx0Y29uc3QgeyBkaXJlY3Rpb24sIHN0eWxlLCBzdHlsZXM6IF9zdHlsZXMgfSA9IHByb3BzO1xuXHRjb25zdCBzdHlsZXMgPSBfc3R5bGVzIGFzIEZvcm1BY3Rpb25zU3R5bGVzO1xuXHRyZXR1cm4gKFxuXHRcdFxuXHRcdDxWaWV3IHN0eWxlPXtbc3R5bGVzLnJvb3QsIGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gc3R5bGVzLnJvb3RMZWZ0IDogIGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/IHN0eWxlcy5yb290UmlnaHQgOiBkaXJlY3Rpb24gPT09ICdzcGFjZS1iZXR3ZWVuJyA/IHN0eWxlcy5yb290U3BhY2VCZXR3ZWVuIDogbnVsbCwgc3R5bGVdfVxuXHRcdFxuXHRcdHRlc3RJRD1cImZvcm0tYWN0aW9uc1wiPlxuXHRcdDxGb3JtRmllbGRzIHsuLi5wcm9wc30gRmllbGRXcmFwcGVyPXtGaWVsZFdyYXBwZXJ9IC8+XG5cdDwvVmlldz5cblx0KTtcbn07XG5cbkZvcm1BY3Rpb25zLmRlZmF1bHRQcm9wcyA9IHtcblx0Ly9kaXJlY3Rpb246ICdyaWdodCcsXG59O1xuXG5Gb3JtQWN0aW9ucy5kZWZhdWx0U3R5bGVzID0gKHRoZW1lOiBUaGVtZSk6IEZvcm1BY3Rpb25zU3R5bGVzID0+ICh7XG5cdGZpZWxkQ29udGFpbmVyTGVmdDoge1xuXHRcdG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDIsXG5cdH0sXG5cdGZpZWxkQ29udGFpbmVyUmlnaHQ6IHtcblx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0ICogMixcblx0fSxcblx0XG5cdGZpZWxkQ29udGFpbmVyQmV0d2VlbiA6e1xuXHRcdG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDAsXG5cdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDAsXG5cdH0sXG5cdHJvb3Q6IHtcblx0XHRmbGV4RGlyZWN0aW9uOiAncm93Jyxcblx0XHQgcGFkZGluZ1ZlcnRpY2FsOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAyLFxuXHR9LFxuXHRyb290TGVmdDoge1xuXHRcdGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG5cdFx0XG5cdH0sXG5cdHJvb3RSaWdodDoge1xuXHRcdGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuXHR9LFxuXHRyb290U3BhY2VCZXR3ZWVuOiB7XG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcblx0fVxufSk7Il0sInZlcnNpb24iOjN9