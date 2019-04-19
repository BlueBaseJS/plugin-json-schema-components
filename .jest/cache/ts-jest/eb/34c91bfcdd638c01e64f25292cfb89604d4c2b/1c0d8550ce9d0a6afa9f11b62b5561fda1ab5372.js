"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const FormFields_1 = require("../FormFields");
const react_1 = tslib_1.__importDefault(require("react"));
const components_1 = require("@bluebase/components");
const FieldWrapper = ({ field, parent, children }) => {
    const { direction, styles, style, textAlignment } = parent;
    return (react_1.default.createElement(components_1.View, { key: field.name, style: [direction === "left" ? styles.fieldContainerLeft : direction === "right" ? styles.fieldContainerRight : direction === "space-between" ? styles.fieldContainerBetween : null,
            textAlignment === "left" ? styles.textContainerLeft : textAlignment === "right" ? styles.textContainerRight : null, style] }, children));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUFjdGlvbnMudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4RDtBQUc5RCwwREFBMEI7QUFFMUIscURBQTRDO0FBeUI1QyxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxRQUFRLEVBQXFCLEVBQUUsRUFBRTtJQUV0RSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEdBQUcsTUFBTSxDQUFDO0lBRTNELE9BQU8sQ0FDTiw4QkFBQyxpQkFBSSxJQUNKLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUNmLEtBQUssRUFBRSxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssZUFBZSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDbkwsYUFBYSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxhQUFhLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUUsSUFFM0gsUUFBUSxDQUNGLENBQ1AsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGOzs7R0FHRztBQUNVLFFBQUEsV0FBVyxHQUFHLENBQUMsS0FBdUIsRUFBRSxFQUFFO0lBRXRELE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDcEQsTUFBTSxNQUFNLEdBQUcsT0FBNEIsQ0FBQztJQUM1QyxPQUFPLENBRU4sOEJBQUMsaUJBQUksSUFBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUk7bUJBQ3BFLFNBQVMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBLElBQUk7bUJBQy9DLFNBQVMsS0FBSyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBQyxjQUFjO1FBQy9GLDhCQUFDLHVCQUFVLGtCQUFDLFlBQVksRUFBRSxZQUFZLElBQU0sS0FBSyxFQUFLLENBQ2hELENBQ1AsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLG1CQUFXLENBQUMsWUFBWSxHQUFHO0lBQzFCLFNBQVMsRUFBRSxPQUFPO0NBRWxCLENBQUM7QUFFRixtQkFBVyxDQUFDLGFBQWEsR0FBRyxDQUFDLEtBQVksRUFBcUIsRUFBRSxDQUFDLENBQUM7SUFDakUsa0JBQWtCLEVBQUU7UUFDbkIsVUFBVSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7S0FDbEM7SUFDRCxtQkFBbUIsRUFBRTtRQUNwQixXQUFXLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztLQUNuQztJQUNELGtCQUFrQixFQUFFO1FBQ25CLFdBQVcsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDO0tBQ25DO0lBQ0QsaUJBQWlCLEVBQUU7UUFDbEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7S0FDbEM7SUFDRCxxQkFBcUIsRUFBRTtRQUN0QixVQUFVLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUNsQyxXQUFXLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztLQUNuQztJQUNELElBQUksRUFBRTtRQUNMLGFBQWEsRUFBRSxLQUFLO0tBRXBCO0lBQ0QsUUFBUSxFQUFFO1FBQ1QsY0FBYyxFQUFFLFlBQVk7S0FFNUI7SUFDRCxTQUFTLEVBQUU7UUFDVixjQUFjLEVBQUUsVUFBVTtLQUMxQjtJQUNELGdCQUFnQixFQUFFO1FBQ2pCLGNBQWMsRUFBRSxlQUFlO0tBQy9CO0NBQ0QsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL0Zvcm1BY3Rpb25zLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZFdyYXBwZXJQcm9wcywgRm9ybUZpZWxkcyB9IGZyb20gJy4uL0Zvcm1GaWVsZHMnO1xuaW1wb3J0IHsgU3R5bGVQcm9wLCBWaWV3U3R5bGUgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgRm9ybUZpZWxkUHJvcHMgfSBmcm9tICcuL0Zvcm1GaWVsZFByb3BzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICdAYmx1ZWJhc2UvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUFjdGlvbnNTdHlsZXMge1xuXHRmaWVsZENvbnRhaW5lckxlZnQ6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRmaWVsZENvbnRhaW5lclJpZ2h0OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0ZmllbGRDb250YWluZXJCZXR3ZWVuIDpTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0dGV4dENvbnRhaW5lclJpZ2h0IDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHRleHRDb250YWluZXJMZWZ0IDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHJvb3RTcGFjZUJldHdlZW4gOiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0cm9vdDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHJvb3RMZWZ0OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0cm9vdFJpZ2h0OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtQWN0aW9uc1Byb3BzIHtcblx0dHlwZTogJ2FjdGlvbnMnO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHRleHRBbGlnbm1lbnQgOiAnbGVmdCcgfCAncmlnaHQnIDtcblx0ZGlyZWN0aW9uOiAnbGVmdCcgfCAncmlnaHQnIHwgJ3NwYWNlLWJldHdlZW4nO1xuXHRmaWVsZHM6IEZvcm1GaWVsZFByb3BzW107XG5cdHN0eWxlPzogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHN0eWxlcz86IFBhcnRpYWw8Rm9ybUFjdGlvbnNTdHlsZXM+O1xufVxuXG5cbmNvbnN0IEZpZWxkV3JhcHBlciA9ICh7IGZpZWxkLCBwYXJlbnQsY2hpbGRyZW4gfTogRmllbGRXcmFwcGVyUHJvcHMpID0+IHtcblxuXHRjb25zdCB7IGRpcmVjdGlvbiwgc3R5bGVzLCBzdHlsZSwgdGV4dEFsaWdubWVudCB9ID0gcGFyZW50O1xuXG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdGtleT17ZmllbGQubmFtZX1cblx0XHRcdHN0eWxlPXtbZGlyZWN0aW9uID09PSBcImxlZnRcIiA/IHN0eWxlcy5maWVsZENvbnRhaW5lckxlZnQgOiBkaXJlY3Rpb24gPT09IFwicmlnaHRcIiA/IHN0eWxlcy5maWVsZENvbnRhaW5lclJpZ2h0IDogZGlyZWN0aW9uID09PSBcInNwYWNlLWJldHdlZW5cIiA/IHN0eWxlcy5maWVsZENvbnRhaW5lckJldHdlZW4gOiBudWxsLFxuXHRcdFx0dGV4dEFsaWdubWVudCA9PT0gXCJsZWZ0XCIgPyBzdHlsZXMudGV4dENvbnRhaW5lckxlZnQgOiB0ZXh0QWxpZ25tZW50ID09PSBcInJpZ2h0XCIgPyBzdHlsZXMudGV4dENvbnRhaW5lclJpZ2h0IDogbnVsbCwgc3R5bGUgXX1cblx0XHQ+XG5cdFx0e2NoaWxkcmVufVxuXHRcdDwvVmlldz5cblx0KTtcbn07XG5cbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCByZW5kZXJzIGZvcm0gYWN0aW9ucywgaS5lLiBzdWJtaXQgb3IgcmVzZXQgYnV0dG9uc1xuICogQHBhcmFtIHByb3BzXG4gKi9cbmV4cG9ydCBjb25zdCBGb3JtQWN0aW9ucyA9IChwcm9wczogRm9ybUFjdGlvbnNQcm9wcykgPT4ge1xuXG5cdGNvbnN0IHsgZGlyZWN0aW9uLCBzdHlsZSwgc3R5bGVzOiBfc3R5bGVzIH0gPSBwcm9wcztcblx0Y29uc3Qgc3R5bGVzID0gX3N0eWxlcyBhcyBGb3JtQWN0aW9uc1N0eWxlcztcblx0cmV0dXJuIChcblx0XHRcblx0XHQ8VmlldyBzdHlsZT17W3N0eWxlcy5yb290LCBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHN0eWxlcy5yb290TGVmdCA6IG51bGwgXG5cdFx0fHwgIGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/IHN0eWxlcy5yb290UmlnaHQgOm51bGwgXG5cdFx0fHwgZGlyZWN0aW9uID09PSAnc3BhY2UtYmV0d2VlbicgPyBzdHlsZXMucm9vdFNwYWNlQmV0d2VlbiA6IG51bGwsIHN0eWxlXX0gdGVzdElEPVwiZm9ybS1hY3Rpb25zXCI+XG5cdFx0XHQ8Rm9ybUZpZWxkcyBGaWVsZFdyYXBwZXI9e0ZpZWxkV3JhcHBlcn0gey4uLnByb3BzfSAgLz5cblx0XHQ8L1ZpZXc+XG5cdCk7XG59O1xuXG5Gb3JtQWN0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XG5cdGRpcmVjdGlvbjogJ3JpZ2h0Jyxcblx0Ly90ZXh0QWxpZ25tZW50OiAnbGVmdCdcbn07XG5cbkZvcm1BY3Rpb25zLmRlZmF1bHRTdHlsZXMgPSAodGhlbWU6IFRoZW1lKTogRm9ybUFjdGlvbnNTdHlsZXMgPT4gKHtcblx0ZmllbGRDb250YWluZXJMZWZ0OiB7XG5cdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy51bml0ICogMixcblx0fSxcblx0ZmllbGRDb250YWluZXJSaWdodDoge1xuXHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAyLFxuXHR9LFxuXHR0ZXh0Q29udGFpbmVyUmlnaHQ6IHtcblx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0ICogMixcblx0fSxcblx0dGV4dENvbnRhaW5lckxlZnQ6IHtcblx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAyLFxuXHR9LFxuXHRmaWVsZENvbnRhaW5lckJldHdlZW4gOntcblx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAwLFxuXHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAwLFxuXHR9LFxuXHRyb290OiB7XG5cdFx0ZmxleERpcmVjdGlvbjogJ3JvdycsXG5cdFx0Ly8gIHBhZGRpbmdWZXJ0aWNhbDogdGhlbWUuc3BhY2luZy51bml0ICogMixcblx0fSxcblx0cm9vdExlZnQ6IHtcblx0XHRqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuXHRcdFxuXHR9LFxuXHRyb290UmlnaHQ6IHtcblx0XHRqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcblx0fSxcblx0cm9vdFNwYWNlQmV0d2Vlbjoge1xuXHRcdGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG5cdH1cbn0pOyJdLCJ2ZXJzaW9uIjozfQ==