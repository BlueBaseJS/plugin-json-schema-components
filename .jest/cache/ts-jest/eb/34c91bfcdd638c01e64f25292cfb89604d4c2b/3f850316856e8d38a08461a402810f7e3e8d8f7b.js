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
                || direction === 'space-between' ? styles.fieldContainerBetween : null,
            style] }, children));
};
/**
 * A component that renders form actions, i.e. submit or reset buttons
 * @param props
 */
exports.FormActions = (props) => {
    const { direction, style, styles: _styles } = props;
    const styles = _styles;
    debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUFjdGlvbnMudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4RDtBQUc5RCwwREFBMEI7QUFFMUIscURBQTRDO0FBeUI1QyxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxRQUFRLEVBQXFCLEVBQUUsRUFBRTtJQUV0RSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUM7SUFFNUMsT0FBTyxDQUNOLDhCQUFDLGlCQUFJLElBQ0osR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQ2YsS0FBSyxFQUFFLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJO21CQUM1RCxTQUFTLEtBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBLElBQUk7bUJBQ3ZELFNBQVMsS0FBSyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNwRSxLQUFLLENBQUUsSUFFVCxRQUFRLENBQ0YsQ0FDUCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUY7OztHQUdHO0FBQ1UsUUFBQSxXQUFXLEdBQUcsQ0FBQyxLQUF1QixFQUFFLEVBQUU7SUFFdEQsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQztJQUNwRCxNQUFNLE1BQU0sR0FBRyxPQUE0QixDQUFDO0lBQzVDLFFBQVEsQ0FBQztJQUNULE9BQU8sQ0FFTiw4QkFBQyxpQkFBSSxJQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSTttQkFDcEUsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUEsSUFBSTttQkFDL0MsU0FBUyxLQUFLLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFDLGNBQWM7UUFDL0YsOEJBQUMsdUJBQVUsb0JBQUssS0FBSyxJQUFFLFlBQVksRUFBRSxZQUFZLElBQUksQ0FDL0MsQ0FDUCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsbUJBQVcsQ0FBQyxZQUFZLEdBQUc7SUFDMUIsU0FBUyxFQUFFLE9BQU87Q0FDbEIsQ0FBQztBQUVGLG1CQUFXLENBQUMsYUFBYSxHQUFHLENBQUMsS0FBWSxFQUFxQixFQUFFLENBQUMsQ0FBQztJQUNqRSxrQkFBa0IsRUFBRTtRQUNuQixVQUFVLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztLQUNsQztJQUNELG1CQUFtQixFQUFFO1FBQ3BCLFdBQVcsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDO0tBQ25DO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDbkIsV0FBVyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7S0FDbkM7SUFDRCxpQkFBaUIsRUFBRTtRQUNsQixVQUFVLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztLQUNsQztJQUNELHFCQUFxQixFQUFFO1FBQ3RCLFVBQVUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDO1FBQ2xDLFdBQVcsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDO0tBQ25DO0lBQ0QsSUFBSSxFQUFFO1FBQ0wsYUFBYSxFQUFFLEtBQUs7UUFDbkIsZUFBZSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7S0FDeEM7SUFDRCxRQUFRLEVBQUU7UUFDVCxjQUFjLEVBQUUsWUFBWTtLQUU1QjtJQUNELFNBQVMsRUFBRTtRQUNWLGNBQWMsRUFBRSxVQUFVO0tBQzFCO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDakIsY0FBYyxFQUFFLGVBQWU7S0FDL0I7Q0FDRCxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUFjdGlvbnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkV3JhcHBlclByb3BzLCBGb3JtRmllbGRzIH0gZnJvbSAnLi4vRm9ybUZpZWxkcyc7XG5pbXBvcnQgeyBTdHlsZVByb3AsIFZpZXdTdHlsZSB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgeyBGb3JtRmllbGRQcm9wcyB9IGZyb20gJy4vRm9ybUZpZWxkUHJvcHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ0BibHVlYmFzZS9jb21wb25lbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtQWN0aW9uc1N0eWxlcyB7XG5cdGZpZWxkQ29udGFpbmVyTGVmdDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdGZpZWxkQ29udGFpbmVyUmlnaHQ6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRmaWVsZENvbnRhaW5lckJldHdlZW4gOlN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHR0ZXh0Q29udGFpbmVyUmlnaHQgOiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0dGV4dENvbnRhaW5lckxlZnQgOiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0cm9vdFNwYWNlQmV0d2VlbiA6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRyb290OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0cm9vdExlZnQ6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRyb290UmlnaHQ6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1BY3Rpb25zUHJvcHMge1xuXHR0eXBlOiAnYWN0aW9ucyc7XG5cdG5hbWU6IHN0cmluZztcblx0Ly90ZXh0QWxpZ25tZW50IDogJ2xlZnQnIHwgJ3JpZ2h0JyA7XG5cdGRpcmVjdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdzcGFjZS1iZXR3ZWVuJztcblx0ZmllbGRzOiBGb3JtRmllbGRQcm9wc1tdO1xuXHRzdHlsZT86IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRzdHlsZXM/OiBQYXJ0aWFsPEZvcm1BY3Rpb25zU3R5bGVzPjtcbn1cblxuXG5jb25zdCBGaWVsZFdyYXBwZXIgPSAoeyBmaWVsZCwgcGFyZW50LGNoaWxkcmVuIH06IEZpZWxkV3JhcHBlclByb3BzKSA9PiB7XG5cblx0Y29uc3QgeyBkaXJlY3Rpb24sIHN0eWxlcywgc3R5bGUgfSA9IHBhcmVudDtcblxuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRrZXk9e2ZpZWxkLm5hbWV9XG5cdFx0XHRzdHlsZT17W2RpcmVjdGlvbiA9PT0gJ2xlZnQnID8gc3R5bGVzLmZpZWxkQ29udGFpbmVyTGVmdCA6IG51bGwgXG5cdFx0XHR8fCBkaXJlY3Rpb24gPT09J3JpZ2h0JyA/IHN0eWxlcy5maWVsZENvbnRhaW5lclJpZ2h0IDpudWxsXG5cdFx0XHR8fCBkaXJlY3Rpb24gPT09ICdzcGFjZS1iZXR3ZWVuJyA/IHN0eWxlcy5maWVsZENvbnRhaW5lckJldHdlZW4gOiBudWxsXG5cdFx0XHQsIHN0eWxlIF19XG5cdFx0PlxuXHRcdHtjaGlsZHJlbn1cblx0XHQ8L1ZpZXc+XG5cdCk7XG59O1xuXG4vKipcbiAqIEEgY29tcG9uZW50IHRoYXQgcmVuZGVycyBmb3JtIGFjdGlvbnMsIGkuZS4gc3VibWl0IG9yIHJlc2V0IGJ1dHRvbnNcbiAqIEBwYXJhbSBwcm9wc1xuICovXG5leHBvcnQgY29uc3QgRm9ybUFjdGlvbnMgPSAocHJvcHM6IEZvcm1BY3Rpb25zUHJvcHMpID0+IHtcblxuXHRjb25zdCB7IGRpcmVjdGlvbiwgc3R5bGUsIHN0eWxlczogX3N0eWxlcyB9ID0gcHJvcHM7XG5cdGNvbnN0IHN0eWxlcyA9IF9zdHlsZXMgYXMgRm9ybUFjdGlvbnNTdHlsZXM7XG5cdGRlYnVnZ2VyO1xuXHRyZXR1cm4gKFxuXHRcdFxuXHRcdDxWaWV3IHN0eWxlPXtbc3R5bGVzLnJvb3QsIGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gc3R5bGVzLnJvb3RMZWZ0IDogbnVsbCBcblx0XHR8fCAgZGlyZWN0aW9uID09PSAncmlnaHQnID8gc3R5bGVzLnJvb3RSaWdodCA6bnVsbCBcblx0XHR8fCBkaXJlY3Rpb24gPT09ICdzcGFjZS1iZXR3ZWVuJyA/IHN0eWxlcy5yb290U3BhY2VCZXR3ZWVuIDogbnVsbCwgc3R5bGVdfSB0ZXN0SUQ9XCJmb3JtLWFjdGlvbnNcIj5cblx0XHRcdDxGb3JtRmllbGRzIHsuLi5wcm9wc30gRmllbGRXcmFwcGVyPXtGaWVsZFdyYXBwZXJ9IC8+XG5cdFx0PC9WaWV3PlxuXHQpO1xufTtcblxuRm9ybUFjdGlvbnMuZGVmYXVsdFByb3BzID0ge1xuXHRkaXJlY3Rpb246ICdyaWdodCdcbn07XG5cbkZvcm1BY3Rpb25zLmRlZmF1bHRTdHlsZXMgPSAodGhlbWU6IFRoZW1lKTogRm9ybUFjdGlvbnNTdHlsZXMgPT4gKHtcblx0ZmllbGRDb250YWluZXJMZWZ0OiB7XG5cdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy51bml0ICogMixcblx0fSxcblx0ZmllbGRDb250YWluZXJSaWdodDoge1xuXHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAyLFxuXHR9LFxuXHR0ZXh0Q29udGFpbmVyUmlnaHQ6IHtcblx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0ICogMixcblx0fSxcblx0dGV4dENvbnRhaW5lckxlZnQ6IHtcblx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAyLFxuXHR9LFxuXHRmaWVsZENvbnRhaW5lckJldHdlZW4gOntcblx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAwLFxuXHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAwLFxuXHR9LFxuXHRyb290OiB7XG5cdFx0ZmxleERpcmVjdGlvbjogJ3JvdycsXG5cdFx0IHBhZGRpbmdWZXJ0aWNhbDogdGhlbWUuc3BhY2luZy51bml0ICogMixcblx0fSxcblx0cm9vdExlZnQ6IHtcblx0XHRqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuXHRcdFxuXHR9LFxuXHRyb290UmlnaHQ6IHtcblx0XHRqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcblx0fSxcblx0cm9vdFNwYWNlQmV0d2Vlbjoge1xuXHRcdGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG5cdH1cbn0pOyJdLCJ2ZXJzaW9uIjozfQ==