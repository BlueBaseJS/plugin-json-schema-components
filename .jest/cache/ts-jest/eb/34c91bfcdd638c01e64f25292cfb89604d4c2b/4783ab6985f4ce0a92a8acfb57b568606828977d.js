"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const components_1 = require("@bluebase/components");
const formik_1 = require("formik");
const react_1 = tslib_1.__importDefault(require("react"));
const BaseFormField = components_1.getComponent('BaseFormField');
exports.FormPickerInput = (_a) => {
    var { type, items } = _a, props = tslib_1.__rest(_a, ["type", "items"]);
    return (react_1.default.createElement(formik_1.Field, Object.assign({}, props), ({ field, form }) => {
        const inputProps = Object.assign({}, props, field, { onValueChange: (value) => {
                form.setFieldValue(field.name, value),
                    //selectedValue: field.value,
                    !value ?
                        null
                        : props.onValueChange ?
                            props.onValueChange(field.name, value)
                            : null;
            } });
        return (react_1.default.createElement(BaseFormField, Object.assign({ MainComponent: components_1.Picker }, inputProps), items.map(i => react_1.default.createElement(components_1.Picker.Item, Object.assign({ key: String(i.value) }, i)))));
    }));
};
exports.FormPickerInput.defaultProps = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVBpY2tlcklucHV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBMEY7QUFFMUYsbUNBQStCO0FBQy9CLDBEQUEwQjtBQVExQixNQUFNLGFBQWEsR0FBRyx5QkFBWSxDQUFxQixlQUFlLENBQUMsQ0FBQztBQUUzRCxRQUFBLGVBQWUsR0FBRyxDQUFDLEVBQStDLEVBQUUsRUFBRTtRQUFuRCxFQUFFLElBQUksRUFBRSxLQUFLLE9BQWtDLEVBQWhDLDZDQUFRO0lBRXRELE9BQU8sQ0FDTiw4QkFBQyxjQUFLLG9CQUFLLEtBQUssR0FDZixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBTyxFQUFFLEVBQUU7UUFFekIsTUFBTSxVQUFVLHFCQUNaLEtBQUssRUFDTCxLQUFLLElBQ1IsYUFBYSxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7b0JBQ3JDLDZCQUE2QjtvQkFDN0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDUixJQUFJO3dCQUNKLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7NEJBQ3RCLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxLQUFLLENBQUM7NEJBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDUixDQUFDLEdBQ0QsQ0FBQztRQUVGLE9BQU8sQ0FDTiw4QkFBQyxhQUFhLGtCQUFDLGFBQWEsRUFBRSxtQkFBTSxJQUFNLFVBQVUsR0FDbkQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLDhCQUFDLG1CQUFNLENBQUMsSUFBSSxrQkFBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBTSxDQUFDLEVBQUksQ0FBQyxDQUM3QyxDQUNoQixDQUFDO0lBQ0gsQ0FBQyxDQUNPLENBQ1IsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLHVCQUFlLENBQUMsWUFBWSxHQUFHLEVBQzlCLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVBpY2tlcklucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaWNrZXIsIFBpY2tlckl0ZW1Qcm9wcywgUGlja2VyUHJvcHMsIGdldENvbXBvbmVudCB9IGZyb20gJ0BibHVlYmFzZS9jb21wb25lbnRzJztcbmltcG9ydCB7IEJhc2VGb3JtRmllbGRQcm9wcyB9IGZyb20gJy4uL0Jhc2VGb3JtRmllbGQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtUGlja2VySW5wdXRQcm9wcyBleHRlbmRzIFBpY2tlclByb3BzIHtcblx0dHlwZTogJ3BpY2tlcicsXG5cdG5hbWU6IHN0cmluZyxcblx0aXRlbXM6IFBpY2tlckl0ZW1Qcm9wc1tdLFxufVxuXG5jb25zdCBCYXNlRm9ybUZpZWxkID0gZ2V0Q29tcG9uZW50PEJhc2VGb3JtRmllbGRQcm9wcz4oJ0Jhc2VGb3JtRmllbGQnKTtcblxuZXhwb3J0IGNvbnN0IEZvcm1QaWNrZXJJbnB1dCA9ICh7IHR5cGUsIGl0ZW1zLCAuLi5wcm9wcyB9OiBGb3JtUGlja2VySW5wdXRQcm9wcykgPT4ge1xuXG5cdHJldHVybiAoXG5cdFx0PEZpZWxkIHsuLi5wcm9wc30+XG5cdFx0eyh7IGZpZWxkLCBmb3JtIH06IGFueSkgPT4ge1xuXG5cdFx0XHRjb25zdCBpbnB1dFByb3BzOiBhbnkgPSB7XG5cdFx0XHRcdC4uLnByb3BzLFxuXHRcdFx0XHQuLi5maWVsZCxcblx0XHRcdFx0b25WYWx1ZUNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHtcblx0XHRcdFx0Zm9ybS5zZXRGaWVsZFZhbHVlKGZpZWxkLm5hbWUsIHZhbHVlKSxcblx0XHRcdFx0Ly9zZWxlY3RlZFZhbHVlOiBmaWVsZC52YWx1ZSxcblx0XHRcdFx0IXZhbHVlID8gIFxuXHRcdFx0XHRudWxsIFxuXHRcdFx0XHQ6IHByb3BzLm9uVmFsdWVDaGFuZ2UgP1xuXHRcdFx0XHQgcHJvcHMub25WYWx1ZUNoYW5nZShmaWVsZC5uYW1lLHZhbHVlKSBcblx0XHRcdFx0IDogbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJhc2VGb3JtRmllbGQgTWFpbkNvbXBvbmVudD17UGlja2VyfSB7Li4uaW5wdXRQcm9wc30+XG5cdFx0XHRcdHtpdGVtcy5tYXAoaSA9PiA8UGlja2VyLkl0ZW0ga2V5PXtTdHJpbmcoaS52YWx1ZSl9IHsuLi5pfSAvPil9XG5cdFx0XHRcdDwvQmFzZUZvcm1GaWVsZD5cblx0XHRcdCk7XG5cdFx0fX1cblx0XHQ8L0ZpZWxkPlxuXHQpO1xufTtcblxuRm9ybVBpY2tlcklucHV0LmRlZmF1bHRQcm9wcyA9IHtcbn07XG4iXSwidmVyc2lvbiI6M30=