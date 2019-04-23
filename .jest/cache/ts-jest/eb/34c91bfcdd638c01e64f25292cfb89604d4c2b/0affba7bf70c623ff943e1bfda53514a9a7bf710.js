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
                    : direction === 'space-between' ?
                        styles.rootSpaceBetween :
                        {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUFjdGlvbnMudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4RDtBQUc5RCwwREFBMEI7QUFFMUIscURBQTRDO0FBcUI1QyxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQXFCLEVBQUUsRUFBRTtJQUV2RSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUM7SUFFNUMsT0FBTyxDQUNOLDhCQUFDLGlCQUFJLElBQ0osR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQ2YsS0FBSyxFQUFFLFNBQVMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxLQUFLLElBRW5ILFFBQVEsQ0FDSCxDQUNQLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRjs7O0dBR0c7QUFDVSxRQUFBLFdBQVcsR0FBRyxDQUFDLEtBQXVCLEVBQUUsRUFBRTtJQUV0RCxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDN0MsTUFBTSxNQUFNLEdBQUcsT0FBNEIsQ0FBQztJQUM1QyxPQUFPLENBRU4sOEJBQUMsaUJBQUksSUFBQyxLQUFLLEVBQUU7WUFDWixNQUFNLENBQUMsSUFBSTtZQUNYLFNBQVMsS0FBSyxNQUFNLENBQUMsQ0FBQztnQkFDdEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNqQixTQUFTLEtBQUssT0FBTyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU0sQ0FBQyxTQUFTO29CQUNoQixDQUFDLENBQUMsU0FBUyxLQUFLLGVBQWUsQ0FBQyxDQUFDO3dCQUNqQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt3QkFDekIsRUFBRTtTQUNGLEVBRUEsTUFBTSxFQUFDLGNBQWM7UUFDckIsOEJBQUMsdUJBQVUsb0JBQUssS0FBSyxJQUFFLFlBQVksRUFBRSxZQUFZLElBQUksQ0FDL0MsQ0FDUCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsbUJBQVcsQ0FBQyxZQUFZLEdBQUc7SUFDMUIsU0FBUyxFQUFFLE9BQU87Q0FDbEIsQ0FBQztBQUVGLG1CQUFXLENBQUMsYUFBYSxHQUFHLENBQUMsS0FBWSxFQUFxQixFQUFFLENBQUMsQ0FBQztJQUNqRSxrQkFBa0IsRUFBRTtRQUNuQixVQUFVLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztLQUNsQztJQUNELG1CQUFtQixFQUFFO1FBQ3BCLFdBQVcsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDO0tBQ25DO0lBQ0QsSUFBSSxFQUFFO1FBQ0wsYUFBYSxFQUFFLEtBQUs7UUFDcEIsZUFBZSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7S0FDdkM7SUFDRCxRQUFRLEVBQUU7UUFDVCxjQUFjLEVBQUUsWUFBWTtLQUU1QjtJQUNELFNBQVMsRUFBRTtRQUNWLGNBQWMsRUFBRSxVQUFVO0tBQzFCO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDakIsY0FBYyxFQUFFLGVBQWU7S0FDL0I7Q0FDRCxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUFjdGlvbnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkV3JhcHBlclByb3BzLCBGb3JtRmllbGRzIH0gZnJvbSAnLi4vRm9ybUZpZWxkcyc7XG5pbXBvcnQgeyBTdHlsZVByb3AsIFZpZXdTdHlsZSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBGb3JtRmllbGRQcm9wcyB9IGZyb20gJy4vRm9ybUZpZWxkUHJvcHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ0BibHVlYmFzZS9jb21wb25lbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtQWN0aW9uc1N0eWxlcyB7XG5cdGZpZWxkQ29udGFpbmVyTGVmdDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdGZpZWxkQ29udGFpbmVyUmlnaHQ6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRyb290U3BhY2VCZXR3ZWVuOiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0cm9vdDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHJvb3RMZWZ0OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0cm9vdFJpZ2h0OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtQWN0aW9uc1Byb3BzIHtcblx0dHlwZTogJ2FjdGlvbnMnO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGRpcmVjdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdzcGFjZS1iZXR3ZWVuJztcblx0ZmllbGRzOiBGb3JtRmllbGRQcm9wc1tdO1xuXHRzdHlsZT86IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRzdHlsZXM/OiBQYXJ0aWFsPEZvcm1BY3Rpb25zU3R5bGVzPjtcbn1cblxuXG5jb25zdCBGaWVsZFdyYXBwZXIgPSAoeyBmaWVsZCwgcGFyZW50LCBjaGlsZHJlbiB9OiBGaWVsZFdyYXBwZXJQcm9wcykgPT4ge1xuXG5cdGNvbnN0IHsgZGlyZWN0aW9uLCBzdHlsZXMsIHN0eWxlIH0gPSBwYXJlbnQ7XG5cblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0a2V5PXtmaWVsZC5uYW1lfVxuXHRcdFx0c3R5bGU9e2RpcmVjdGlvbiA9PT0gJ2xlZnQnID8gc3R5bGVzLmZpZWxkQ29udGFpbmVyTGVmdCA6IGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiID8gc3R5bGVzLmZpZWxkQ29udGFpbmVyUmlnaHQgOiBzdHlsZX1cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9WaWV3PlxuXHQpO1xufTtcblxuLyoqXG4gKiBBIGNvbXBvbmVudCB0aGF0IHJlbmRlcnMgZm9ybSBhY3Rpb25zLCBpLmUuIHN1Ym1pdCBvciByZXNldCBidXR0b25zXG4gKiBAcGFyYW0gcHJvcHNcbiAqL1xuZXhwb3J0IGNvbnN0IEZvcm1BY3Rpb25zID0gKHByb3BzOiBGb3JtQWN0aW9uc1Byb3BzKSA9PiB7XG5cblx0Y29uc3QgeyBkaXJlY3Rpb24sIHN0eWxlczogX3N0eWxlcyB9ID0gcHJvcHM7XG5cdGNvbnN0IHN0eWxlcyA9IF9zdHlsZXMgYXMgRm9ybUFjdGlvbnNTdHlsZXM7XG5cdHJldHVybiAoXG5cblx0XHQ8VmlldyBzdHlsZT17W1xuXHRcdFx0c3R5bGVzLnJvb3QsXG5cdFx0XHRkaXJlY3Rpb24gPT09ICdsZWZ0JyA/XG5cdFx0XHRzdHlsZXMucm9vdExlZnQgOlxuXHRcdFx0ZGlyZWN0aW9uID09PSAncmlnaHQnID9cblx0XHRcdHN0eWxlcy5yb290UmlnaHRcblx0XHRcdDogZGlyZWN0aW9uID09PSAnc3BhY2UtYmV0d2VlbicgP1xuXHRcdFx0c3R5bGVzLnJvb3RTcGFjZUJldHdlZW4gOlxuXHRcdFx0e30sXG5cdFx0XX1cblxuXHRcdFx0dGVzdElEPVwiZm9ybS1hY3Rpb25zXCI+XG5cdFx0XHQ8Rm9ybUZpZWxkcyB7Li4ucHJvcHN9IEZpZWxkV3JhcHBlcj17RmllbGRXcmFwcGVyfSAvPlxuXHRcdDwvVmlldz5cblx0KTtcbn07XG5cbkZvcm1BY3Rpb25zLmRlZmF1bHRQcm9wcyA9IHtcblx0ZGlyZWN0aW9uOiAncmlnaHQnLFxufTtcblxuRm9ybUFjdGlvbnMuZGVmYXVsdFN0eWxlcyA9ICh0aGVtZTogVGhlbWUpOiBGb3JtQWN0aW9uc1N0eWxlcyA9PiAoe1xuXHRmaWVsZENvbnRhaW5lckxlZnQ6IHtcblx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAyLFxuXHR9LFxuXHRmaWVsZENvbnRhaW5lclJpZ2h0OiB7XG5cdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDIsXG5cdH0sXG5cdHJvb3Q6IHtcblx0XHRmbGV4RGlyZWN0aW9uOiAncm93Jyxcblx0XHRwYWRkaW5nVmVydGljYWw6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDIsXG5cdH0sXG5cdHJvb3RMZWZ0OiB7XG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcblxuXHR9LFxuXHRyb290UmlnaHQ6IHtcblx0XHRqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcblx0fSxcblx0cm9vdFNwYWNlQmV0d2Vlbjoge1xuXHRcdGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG5cdH1cbn0pOyJdLCJ2ZXJzaW9uIjozfQ==