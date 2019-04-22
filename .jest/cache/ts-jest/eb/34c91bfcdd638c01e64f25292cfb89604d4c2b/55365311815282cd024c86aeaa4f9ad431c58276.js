"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const FormFields_1 = require("../FormFields");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("@bluebase/components");
const FieldWrapper = ({ field, parent, children }) => {
    const { direction, styles } = parent;
    return (react_1.default.createElement(components_1.View, { key: field.name, style: [direction === 'left' ? styles.fieldContainerLeft : styles.fieldContainerRight] }, children));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUFjdGlvbnMudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4RDtBQUc5RCwwREFBMEI7QUFFMUIscURBQTRDO0FBc0I1QyxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxRQUFRLEVBQXFCLEVBQUUsRUFBRTtJQUV0RSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUVyQyxPQUFPLENBQ04sOEJBQUMsaUJBQUksSUFDTCxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksRUFDZixLQUFLLEVBQUUsQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBRSxJQUV0RixRQUFRLENBQ0YsQ0FDTixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUY7OztHQUdHO0FBQ1UsUUFBQSxXQUFXLEdBQUcsQ0FBQyxLQUF1QixFQUFFLEVBQUU7SUFFdEQsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQztJQUNwRCxNQUFNLE1BQU0sR0FBRyxPQUE0QixDQUFDO0lBQzVDLE9BQU8sQ0FFTiw4QkFBQyxpQkFBSSxJQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUUsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBRXRMLE1BQU0sRUFBQyxjQUFjO1FBQ3JCLDhCQUFDLHVCQUFVLG9CQUFLLEtBQUssSUFBRSxZQUFZLEVBQUUsWUFBWSxJQUFJLENBQy9DLENBQ04sQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLG1CQUFXLENBQUMsWUFBWSxHQUFHO0FBQzFCLHFCQUFxQjtDQUNyQixDQUFDO0FBRUYsbUJBQVcsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxLQUFZLEVBQXFCLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLGtCQUFrQixFQUFFO1FBQ25CLFVBQVUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDO0tBQ2xDO0lBQ0QsbUJBQW1CLEVBQUU7UUFDcEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7S0FDbkM7SUFFRCxxQkFBcUIsRUFBRTtJQUN0QixzQ0FBc0M7SUFDdEMsdUNBQXVDO0tBQ3ZDO0lBQ0QsSUFBSSxFQUFFO1FBQ0wsYUFBYSxFQUFFLEtBQUs7UUFDbkIsZUFBZSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7S0FDeEM7SUFDRCxRQUFRLEVBQUU7UUFDVCxjQUFjLEVBQUUsWUFBWTtLQUU1QjtJQUNELFNBQVMsRUFBRTtRQUNWLGNBQWMsRUFBRSxVQUFVO0tBQzFCO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDakIsY0FBYyxFQUFFLGVBQWU7S0FDL0I7Q0FDRCxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUFjdGlvbnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkV3JhcHBlclByb3BzLCBGb3JtRmllbGRzIH0gZnJvbSAnLi4vRm9ybUZpZWxkcyc7XG5pbXBvcnQgeyBTdHlsZVByb3AsIFZpZXdTdHlsZSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBGb3JtRmllbGRQcm9wcyB9IGZyb20gJy4vRm9ybUZpZWxkUHJvcHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ0BibHVlYmFzZS9jb21wb25lbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtQWN0aW9uc1N0eWxlcyB7XG5cdGZpZWxkQ29udGFpbmVyTGVmdDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdGZpZWxkQ29udGFpbmVyUmlnaHQ6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRmaWVsZENvbnRhaW5lckJldHdlZW4gOlN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRyb290U3BhY2VCZXR3ZWVuIDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHJvb3Q6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRyb290TGVmdDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHJvb3RSaWdodDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUFjdGlvbnNQcm9wcyB7XG5cdHR5cGU6ICdhY3Rpb25zJztcblx0bmFtZTogc3RyaW5nO1xuXHRkaXJlY3Rpb246ICdsZWZ0JyB8ICdyaWdodCcgfCAnc3BhY2UtYmV0d2Vlbic7XG5cdGZpZWxkczogRm9ybUZpZWxkUHJvcHNbXTtcblx0c3R5bGU/OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0c3R5bGVzPzogUGFydGlhbDxGb3JtQWN0aW9uc1N0eWxlcz47XG59XG5cblxuY29uc3QgRmllbGRXcmFwcGVyID0gKHsgZmllbGQsIHBhcmVudCxjaGlsZHJlbiB9OiBGaWVsZFdyYXBwZXJQcm9wcykgPT4ge1xuXG5cdGNvbnN0IHsgZGlyZWN0aW9uLCBzdHlsZXMgfSA9IHBhcmVudDtcblxuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0a2V5PXtmaWVsZC5uYW1lfVxuXHRcdHN0eWxlPXtbZGlyZWN0aW9uID09PSAnbGVmdCc/IHN0eWxlcy5maWVsZENvbnRhaW5lckxlZnQgOiBzdHlsZXMuZmllbGRDb250YWluZXJSaWdodCBdIH1cblx0PlxuXHR7Y2hpbGRyZW59XG5cdDwvVmlldz5cblx0KTtcbn07XG5cbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCByZW5kZXJzIGZvcm0gYWN0aW9ucywgaS5lLiBzdWJtaXQgb3IgcmVzZXQgYnV0dG9uc1xuICogQHBhcmFtIHByb3BzXG4gKi9cbmV4cG9ydCBjb25zdCBGb3JtQWN0aW9ucyA9IChwcm9wczogRm9ybUFjdGlvbnNQcm9wcykgPT4ge1xuXG5cdGNvbnN0IHsgZGlyZWN0aW9uLCBzdHlsZSwgc3R5bGVzOiBfc3R5bGVzIH0gPSBwcm9wcztcblx0Y29uc3Qgc3R5bGVzID0gX3N0eWxlcyBhcyBGb3JtQWN0aW9uc1N0eWxlcztcblx0cmV0dXJuIChcblx0XHRcblx0XHQ8VmlldyBzdHlsZT17W3N0eWxlcy5yb290LCBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHN0eWxlcy5yb290TGVmdCA6ICBkaXJlY3Rpb24gPT09ICdyaWdodCcgPyBzdHlsZXMucm9vdFJpZ2h0IDogZGlyZWN0aW9uID09PSAnc3BhY2UtYmV0d2VlbicgPyBzdHlsZXMucm9vdFNwYWNlQmV0d2VlbiA6IG51bGwsIHN0eWxlXX1cblx0XHRcblx0XHR0ZXN0SUQ9XCJmb3JtLWFjdGlvbnNcIj5cblx0XHQ8Rm9ybUZpZWxkcyB7Li4ucHJvcHN9IEZpZWxkV3JhcHBlcj17RmllbGRXcmFwcGVyfSAvPlxuXHQ8L1ZpZXc+XG5cdCk7XG59O1xuXG5Gb3JtQWN0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XG5cdC8vZGlyZWN0aW9uOiAncmlnaHQnLFxufTtcblxuRm9ybUFjdGlvbnMuZGVmYXVsdFN0eWxlcyA9ICh0aGVtZTogVGhlbWUpOiBGb3JtQWN0aW9uc1N0eWxlcyA9PiAoe1xuXHRmaWVsZENvbnRhaW5lckxlZnQ6IHtcblx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAyLFxuXHR9LFxuXHRmaWVsZENvbnRhaW5lclJpZ2h0OiB7XG5cdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDIsXG5cdH0sXG5cdFxuXHRmaWVsZENvbnRhaW5lckJldHdlZW4gOntcblx0XHQvLyBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiA0LFxuXHRcdC8vIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAwLFxuXHR9LFxuXHRyb290OiB7XG5cdFx0ZmxleERpcmVjdGlvbjogJ3JvdycsXG5cdFx0IHBhZGRpbmdWZXJ0aWNhbDogdGhlbWUuc3BhY2luZy51bml0ICogMixcblx0fSxcblx0cm9vdExlZnQ6IHtcblx0XHRqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuXHRcdFxuXHR9LFxuXHRyb290UmlnaHQ6IHtcblx0XHRqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcblx0fSxcblx0cm9vdFNwYWNlQmV0d2Vlbjoge1xuXHRcdGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG5cdH1cbn0pOyJdLCJ2ZXJzaW9uIjozfQ==