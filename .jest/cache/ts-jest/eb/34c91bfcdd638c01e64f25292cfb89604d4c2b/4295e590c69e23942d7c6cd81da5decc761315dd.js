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
                    :
                        direction === 'space-between' ?
                            styles.rootSpaceBetween :
                            {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybUFjdGlvbnMudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4RDtBQUc5RCwwREFBMEI7QUFFMUIscURBQTRDO0FBcUI1QyxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQXFCLEVBQUUsRUFBRTtJQUV2RSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUM7SUFFNUMsT0FBTyxDQUNOLDhCQUFDLGlCQUFJLElBQ0osR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQ2YsS0FBSyxFQUFFLFNBQVMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxLQUFLLElBRW5ILFFBQVEsQ0FDSCxDQUNQLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRjs7O0dBR0c7QUFDVSxRQUFBLFdBQVcsR0FBRyxDQUFDLEtBQXVCLEVBQUUsRUFBRTtJQUV0RCxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDN0MsTUFBTSxNQUFNLEdBQUcsT0FBNEIsQ0FBQztJQUM1QyxPQUFPLENBRU4sOEJBQUMsaUJBQUksSUFBQyxLQUFLLEVBQUU7WUFDWixNQUFNLENBQUMsSUFBSTtZQUNYLFNBQVMsS0FBSyxNQUFNLENBQUMsQ0FBQztnQkFDdEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNqQixTQUFTLEtBQUssT0FBTyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU0sQ0FBQyxTQUFTO29CQUNoQixDQUFDO3dCQUNELFNBQVMsS0FBSyxlQUFlLENBQUMsQ0FBQzs0QkFDL0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7NEJBQ3pCLEVBQUU7U0FDRixFQUVBLE1BQU0sRUFBQyxjQUFjO1FBQ3JCLDhCQUFDLHVCQUFVLG9CQUFLLEtBQUssSUFBRSxZQUFZLEVBQUUsWUFBWSxJQUFJLENBQy9DLENBQ1AsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLG1CQUFXLENBQUMsWUFBWSxHQUFHO0lBQzFCLFNBQVMsRUFBRSxPQUFPO0NBQ2xCLENBQUM7QUFFRixtQkFBVyxDQUFDLGFBQWEsR0FBRyxDQUFDLEtBQVksRUFBcUIsRUFBRSxDQUFDLENBQUM7SUFDakUsa0JBQWtCLEVBQUU7UUFDbkIsVUFBVSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7S0FDbEM7SUFDRCxtQkFBbUIsRUFBRTtRQUNwQixXQUFXLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQztLQUNuQztJQUNELElBQUksRUFBRTtRQUNMLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLGVBQWUsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDO0tBQ3ZDO0lBQ0QsUUFBUSxFQUFFO1FBQ1QsY0FBYyxFQUFFLFlBQVk7S0FFNUI7SUFDRCxTQUFTLEVBQUU7UUFDVixjQUFjLEVBQUUsVUFBVTtLQUMxQjtJQUNELGdCQUFnQixFQUFFO1FBQ2pCLGNBQWMsRUFBRSxlQUFlO0tBQy9CO0NBQ0QsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL0Zvcm1BY3Rpb25zLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZFdyYXBwZXJQcm9wcywgRm9ybUZpZWxkcyB9IGZyb20gJy4uL0Zvcm1GaWVsZHMnO1xuaW1wb3J0IHsgU3R5bGVQcm9wLCBWaWV3U3R5bGUgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgRm9ybUZpZWxkUHJvcHMgfSBmcm9tICcuL0Zvcm1GaWVsZFByb3BzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICdAYmx1ZWJhc2UvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUFjdGlvbnNTdHlsZXMge1xuXHRmaWVsZENvbnRhaW5lckxlZnQ6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRmaWVsZENvbnRhaW5lclJpZ2h0OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0cm9vdFNwYWNlQmV0d2VlbjogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHJvb3Q6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRyb290TGVmdDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdHJvb3RSaWdodDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUFjdGlvbnNQcm9wcyB7XG5cdHR5cGU6ICdhY3Rpb25zJztcblx0bmFtZTogc3RyaW5nO1xuXHRkaXJlY3Rpb246ICdsZWZ0JyB8ICdyaWdodCcgfCAnc3BhY2UtYmV0d2Vlbic7XG5cdGZpZWxkczogRm9ybUZpZWxkUHJvcHNbXTtcblx0c3R5bGU/OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0c3R5bGVzPzogUGFydGlhbDxGb3JtQWN0aW9uc1N0eWxlcz47XG59XG5cblxuY29uc3QgRmllbGRXcmFwcGVyID0gKHsgZmllbGQsIHBhcmVudCwgY2hpbGRyZW4gfTogRmllbGRXcmFwcGVyUHJvcHMpID0+IHtcblxuXHRjb25zdCB7IGRpcmVjdGlvbiwgc3R5bGVzLCBzdHlsZSB9ID0gcGFyZW50O1xuXG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdGtleT17ZmllbGQubmFtZX1cblx0XHRcdHN0eWxlPXtkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHN0eWxlcy5maWVsZENvbnRhaW5lckxlZnQgOiBkaXJlY3Rpb24gPT09IFwicmlnaHRcIiA/IHN0eWxlcy5maWVsZENvbnRhaW5lclJpZ2h0IDogc3R5bGV9XG5cdFx0PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvVmlldz5cblx0KTtcbn07XG5cbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCByZW5kZXJzIGZvcm0gYWN0aW9ucywgaS5lLiBzdWJtaXQgb3IgcmVzZXQgYnV0dG9uc1xuICogQHBhcmFtIHByb3BzXG4gKi9cbmV4cG9ydCBjb25zdCBGb3JtQWN0aW9ucyA9IChwcm9wczogRm9ybUFjdGlvbnNQcm9wcykgPT4ge1xuXG5cdGNvbnN0IHsgZGlyZWN0aW9uLCBzdHlsZXM6IF9zdHlsZXMgfSA9IHByb3BzO1xuXHRjb25zdCBzdHlsZXMgPSBfc3R5bGVzIGFzIEZvcm1BY3Rpb25zU3R5bGVzO1xuXHRyZXR1cm4gKFxuXG5cdFx0PFZpZXcgc3R5bGU9e1tcblx0XHRcdHN0eWxlcy5yb290LFxuXHRcdFx0ZGlyZWN0aW9uID09PSAnbGVmdCcgP1xuXHRcdFx0c3R5bGVzLnJvb3RMZWZ0IDpcblx0XHRcdGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/XG5cdFx0XHRzdHlsZXMucm9vdFJpZ2h0XG5cdFx0XHQ6IFxuXHRcdFx0ZGlyZWN0aW9uID09PSAnc3BhY2UtYmV0d2VlbicgP1xuXHRcdFx0c3R5bGVzLnJvb3RTcGFjZUJldHdlZW4gOlxuXHRcdFx0e31cblx0XHRdfVxuXG5cdFx0XHR0ZXN0SUQ9XCJmb3JtLWFjdGlvbnNcIj5cblx0XHRcdDxGb3JtRmllbGRzIHsuLi5wcm9wc30gRmllbGRXcmFwcGVyPXtGaWVsZFdyYXBwZXJ9IC8+XG5cdFx0PC9WaWV3PlxuXHQpO1xufTtcblxuRm9ybUFjdGlvbnMuZGVmYXVsdFByb3BzID0ge1xuXHRkaXJlY3Rpb246ICdyaWdodCcsXG59O1xuXG5Gb3JtQWN0aW9ucy5kZWZhdWx0U3R5bGVzID0gKHRoZW1lOiBUaGVtZSk6IEZvcm1BY3Rpb25zU3R5bGVzID0+ICh7XG5cdGZpZWxkQ29udGFpbmVyTGVmdDoge1xuXHRcdG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDIsXG5cdH0sXG5cdGZpZWxkQ29udGFpbmVyUmlnaHQ6IHtcblx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0ICogMixcblx0fSxcblx0cm9vdDoge1xuXHRcdGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuXHRcdHBhZGRpbmdWZXJ0aWNhbDogdGhlbWUuc3BhY2luZy51bml0ICogMixcblx0fSxcblx0cm9vdExlZnQ6IHtcblx0XHRqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuXG5cdH0sXG5cdHJvb3RSaWdodDoge1xuXHRcdGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuXHR9LFxuXHRyb290U3BhY2VCZXR3ZWVuOiB7XG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcblx0fVxufSk7Il0sInZlcnNpb24iOjN9