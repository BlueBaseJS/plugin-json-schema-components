"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const components_1 = require("@bluebase/components");
const formik_1 = require("formik");
const react_1 = tslib_1.__importDefault(require("react"));
const BaseFormField = components_1.getComponent('BaseFormField');
exports.FormRadioGroupInput = (_a) => {
    var { type, items } = _a, props = tslib_1.__rest(_a, ["type", "items"]);
    return (react_1.default.createElement(formik_1.Field, Object.assign({}, props), ({ field, form }) => {
        const inputProps = Object.assign({}, props, field, { onValueChange: (value) => {
                form.setFieldValue(field.name, value);
                if (value !== undefined && props.onValueChange) {
                    props.onValueChange(value);
                }
            } });
        return (react_1.default.createElement(BaseFormField, Object.assign({ MainComponent: components_1.RadioGroup }, inputProps), items.map(i => react_1.default.createElement(components_1.Radio, Object.assign({ key: String(i.value) }, i)))));
    }));
};
exports.FormRadioGroupInput.defaultProps = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVJhZGlvR3JvdXBJbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQW9HO0FBRXBHLG1DQUErQjtBQUMvQiwwREFBMEI7QUFRMUIsTUFBTSxhQUFhLEdBQUcseUJBQVksQ0FBcUIsZUFBZSxDQUFDLENBQUM7QUFFM0QsUUFBQSxtQkFBbUIsR0FBRyxDQUFDLEVBQW1ELEVBQUUsRUFBRTtRQUF2RCxFQUFFLElBQUksRUFBRSxLQUFLLE9BQXNDLEVBQXBDLDZDQUFRO0lBRTFELE9BQU8sQ0FDTiw4QkFBQyxjQUFLLG9CQUFLLEtBQUssR0FDZixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBTyxFQUFFLEVBQUU7UUFFekIsTUFBTSxVQUFVLHFCQUNaLEtBQUssRUFDTCxLQUFLLElBRVIsYUFBYSxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7Z0JBRTdCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtnQkFFckMsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUU7b0JBQy9DLEtBQUssQ0FBQyxhQUFhLENBQUUsS0FBSyxDQUFDLENBQUE7aUJBQzNCO1lBR0YsQ0FBQyxHQUNELENBQUM7UUFFRixPQUFPLENBQ04sOEJBQUMsYUFBYSxrQkFBQyxhQUFhLEVBQUUsdUJBQVUsSUFBTSxVQUFVLEdBQ3ZELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyw4QkFBQyxrQkFBSyxrQkFBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBTSxDQUFDLEVBQUksQ0FBQyxDQUN2QyxDQUNoQixDQUFDO0lBQ0gsQ0FBQyxDQUNPLENBQ1IsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLDJCQUFtQixDQUFDLFlBQVksR0FBRyxFQUNsQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL0Zvcm1SYWRpb0dyb3VwSW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhZGlvLCBSYWRpb0dyb3VwLCBSYWRpb0dyb3VwUHJvcHMsIFJhZGlvUHJvcHMsIGdldENvbXBvbmVudCB9IGZyb20gJ0BibHVlYmFzZS9jb21wb25lbnRzJztcbmltcG9ydCB7IEJhc2VGb3JtRmllbGRQcm9wcyB9IGZyb20gJy4uL0Jhc2VGb3JtRmllbGQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtUmFkaW9Hcm91cElucHV0UHJvcHMgZXh0ZW5kcyBSYWRpb0dyb3VwUHJvcHMge1xuXHR0eXBlOiAncmFkaW8tZ3JvdXAnLFxuXHRuYW1lOiBzdHJpbmcsXG5cdGl0ZW1zOiBSYWRpb1Byb3BzW10sXG59XG5cbmNvbnN0IEJhc2VGb3JtRmllbGQgPSBnZXRDb21wb25lbnQ8QmFzZUZvcm1GaWVsZFByb3BzPignQmFzZUZvcm1GaWVsZCcpO1xuXG5leHBvcnQgY29uc3QgRm9ybVJhZGlvR3JvdXBJbnB1dCA9ICh7IHR5cGUsIGl0ZW1zLCAuLi5wcm9wcyB9OiBGb3JtUmFkaW9Hcm91cElucHV0UHJvcHMpID0+IHtcblxuXHRyZXR1cm4gKFxuXHRcdDxGaWVsZCB7Li4ucHJvcHN9PlxuXHRcdHsoeyBmaWVsZCwgZm9ybSB9OiBhbnkpID0+IHtcblxuXHRcdFx0Y29uc3QgaW5wdXRQcm9wczogYW55ID0ge1xuXHRcdFx0XHQuLi5wcm9wcyxcblx0XHRcdFx0Li4uZmllbGQsXG5cdFx0XHRcdFxuXHRcdFx0XHRvblZhbHVlQ2hhbmdlOiAodmFsdWU6IGFueSkgPT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGZvcm0uc2V0RmllbGRWYWx1ZShmaWVsZC5uYW1lLCB2YWx1ZSlcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5vblZhbHVlQ2hhbmdlKSB7XG5cdFx0XHRcdFx0XHRwcm9wcy5vblZhbHVlQ2hhbmdlKCB2YWx1ZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJhc2VGb3JtRmllbGQgTWFpbkNvbXBvbmVudD17UmFkaW9Hcm91cH0gey4uLmlucHV0UHJvcHN9PlxuXHRcdFx0XHR7aXRlbXMubWFwKGkgPT4gPFJhZGlvIGtleT17U3RyaW5nKGkudmFsdWUpfSB7Li4uaX0gLz4pfVxuXHRcdFx0XHQ8L0Jhc2VGb3JtRmllbGQ+XG5cdFx0XHQpO1xuXHRcdH19XG5cdFx0PC9GaWVsZD5cblx0KTtcbn07XG5cbkZvcm1SYWRpb0dyb3VwSW5wdXQuZGVmYXVsdFByb3BzID0ge1xufTtcbiJdLCJ2ZXJzaW9uIjozfQ==