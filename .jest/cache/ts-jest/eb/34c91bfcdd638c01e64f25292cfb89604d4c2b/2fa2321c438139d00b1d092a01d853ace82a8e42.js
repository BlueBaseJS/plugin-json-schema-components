"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const formik_1 = require("formik");
const components_1 = require("@bluebase/components");
const react_1 = tslib_1.__importDefault(require("react"));
const BaseFormField = components_1.getComponent('BaseFormField');
exports.FormSwitchInput = (_a) => {
    var { type } = _a, props = tslib_1.__rest(_a, ["type"]);
    return (react_1.default.createElement(formik_1.Field, Object.assign({}, props), ({ field, form }) => {
        const name = props.name;
        console.log('valll', name);
        const value = formik_1.getIn(form.values, name);
        console.log('valll', value);
        const inputProps = Object.assign({ labelPlacement: 'start' }, props, { checked: Boolean(value), onValueChange: (_value, checked) => {
                form.setFieldValue(field.name, checked);
                value === true ?
                    props.onValueChange ?
                        props.onValueChange(value, checked) : null
                    : value === false ?
                        props.onValueChange ?
                            props.onValueChange(value, checked) :
                            null : null;
            } });
        return (react_1.default.createElement(BaseFormField, Object.assign({ MainComponent: components_1.Switch }, inputProps)));
    }));
};
exports.FormSwitchInput.defaultProps = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVN3aXRjaElucHV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFDdEMscURBQXlFO0FBRXpFLDBEQUEwQjtBQU8xQixNQUFNLGFBQWEsR0FBRyx5QkFBWSxDQUFxQixlQUFlLENBQUMsQ0FBQztBQUUzRCxRQUFBLGVBQWUsR0FBRyxDQUFDLEVBQXdDLEVBQUUsRUFBRTtRQUE1QyxFQUFFLElBQUksT0FBa0MsRUFBaEMsb0NBQVE7SUFFL0MsT0FBTyxDQUNOLDhCQUFDLGNBQUssb0JBQUssS0FBSyxHQUNmLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFRLEVBQUUsRUFBRTtRQUUxQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxDQUFBO1FBRXZCLE1BQU0sS0FBSyxHQUFHLGNBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFBO1FBRTFCLE1BQU0sVUFBVSxtQkFDZixjQUFjLEVBQUUsT0FBTyxJQUNwQixLQUFLLElBQ1IsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFDdkIsYUFBYSxFQUFFLENBQUMsTUFBVyxFQUFFLE9BQWdCLEVBQUUsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUV4QyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ2IsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUN0QixLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUMsQ0FBQSxDQUFDLENBQUEsSUFBSTtvQkFDekMsQ0FBQyxDQUFBLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQzt3QkFDZixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7NEJBQ3JCLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQ3BDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO1lBQ2YsQ0FBQyxHQUNELENBQUM7UUFFRixPQUFPLENBQUMsOEJBQUMsYUFBYSxrQkFBQyxhQUFhLEVBQUUsbUJBQU0sSUFBTSxVQUFVLEVBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FDTSxDQUNQLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRix1QkFBZSxDQUFDLFlBQVksR0FBRyxFQUM5QixDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL0Zvcm1Td2l0Y2hJbnB1dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQsIGdldEluIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCB7IFN3aXRjaCwgU3dpdGNoUHJvcHMsIGdldENvbXBvbmVudCB9IGZyb20gJ0BibHVlYmFzZS9jb21wb25lbnRzJztcbmltcG9ydCB7IEJhc2VGb3JtRmllbGRQcm9wcyB9IGZyb20gJy4uL0Jhc2VGb3JtRmllbGQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtU3dpdGNoSW5wdXRQcm9wcyBleHRlbmRzIFN3aXRjaFByb3BzIHtcblx0dHlwZTogJ3N3aXRjaCcsXG5cdG5hbWU6IHN0cmluZyxcbn1cblxuY29uc3QgQmFzZUZvcm1GaWVsZCA9IGdldENvbXBvbmVudDxCYXNlRm9ybUZpZWxkUHJvcHM+KCdCYXNlRm9ybUZpZWxkJyk7XG5cbmV4cG9ydCBjb25zdCBGb3JtU3dpdGNoSW5wdXQgPSAoeyB0eXBlLCAuLi5wcm9wcyB9OiBGb3JtU3dpdGNoSW5wdXRQcm9wcykgPT4ge1xuXG5cdHJldHVybiAoXG5cdFx0PEZpZWxkIHsuLi5wcm9wc30+XG5cdFx0eyh7IGZpZWxkLCBmb3JtICB9OiBhbnkpID0+IHtcblxuXHRcdFx0Y29uc3QgbmFtZSA9IHByb3BzLm5hbWU7XG5cdFx0XHRjb25zb2xlLmxvZygndmFsbGwnLG5hbWUpXG5cblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IGdldEluKGZvcm0udmFsdWVzLCBuYW1lKTtcblx0XHRcdGNvbnNvbGUubG9nKCd2YWxsbCcsdmFsdWUpXG5cblx0XHRcdGNvbnN0IGlucHV0UHJvcHM6IGFueSA9IHtcblx0XHRcdFx0bGFiZWxQbGFjZW1lbnQ6ICdzdGFydCcsXG5cdFx0XHRcdC4uLnByb3BzLFxuXHRcdFx0XHRjaGVja2VkOiBCb29sZWFuKHZhbHVlKSxcblx0XHRcdFx0b25WYWx1ZUNoYW5nZTogKF92YWx1ZTogYW55LCBjaGVja2VkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdFx0Zm9ybS5zZXRGaWVsZFZhbHVlKGZpZWxkLm5hbWUsIGNoZWNrZWQpO1xuXHRcdFx0XHRcblx0XHRcdFx0XHR2YWx1ZSA9PT0gdHJ1ZSA/IFxuXHRcdFx0XHRcdCAgIHByb3BzLm9uVmFsdWVDaGFuZ2UgP1xuXHRcdFx0XHRcdFx0IHByb3BzLm9uVmFsdWVDaGFuZ2UodmFsdWUsY2hlY2tlZCk6bnVsbFxuXHRcdFx0XHRcdDp2YWx1ZSA9PT0gZmFsc2UgP1xuXHRcdFx0XHRcdCAgIHByb3BzLm9uVmFsdWVDaGFuZ2UgP1xuXHRcdFx0XHRcdFx0ICBwcm9wcy5vblZhbHVlQ2hhbmdlKHZhbHVlLGNoZWNrZWQpIDpcblx0XHRcdFx0XHRcdFx0IG51bGwgOiBudWxsXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHJldHVybiAoPEJhc2VGb3JtRmllbGQgTWFpbkNvbXBvbmVudD17U3dpdGNofSB7Li4uaW5wdXRQcm9wc30gLz4pO1xuXHRcdH19XG5cdDwvRmllbGQ+XG5cdCk7XG59O1xuXG5Gb3JtU3dpdGNoSW5wdXQuZGVmYXVsdFByb3BzID0ge1xufTtcbiJdLCJ2ZXJzaW9uIjozfQ==