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
        const inputProps = Object.assign({}, props, field, { onValueChange: (v) => form.setFieldValue(field.name, v), selectedValue: field.value });
        return (react_1.default.createElement(BaseFormField, Object.assign({ MainComponent: components_1.Picker }, inputProps), items.map(i => react_1.default.createElement(components_1.Picker.Item, Object.assign({ key: String(i.value) }, i)))));
    }));
};
exports.FormPickerInput.defaultProps = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVBpY2tlcklucHV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBMEY7QUFFMUYsbUNBQStCO0FBQy9CLDBEQUEwQjtBQVExQixNQUFNLGFBQWEsR0FBRyx5QkFBWSxDQUFxQixlQUFlLENBQUMsQ0FBQztBQUUzRCxRQUFBLGVBQWUsR0FBRyxDQUFDLEVBQStDLEVBQUUsRUFBRTtRQUFuRCxFQUFFLElBQUksRUFBRSxLQUFLLE9BQWtDLEVBQWhDLDZDQUFRO0lBRXRELE9BQU8sQ0FDTiw4QkFBQyxjQUFLLG9CQUFLLEtBQUssR0FDZixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBTyxFQUFFLEVBQUU7UUFFekIsTUFBTSxVQUFVLHFCQUNaLEtBQUssRUFDTCxLQUFLLElBQ1IsYUFBYSxFQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQzVELGFBQWEsRUFBRSxLQUFLLENBQUMsS0FBSyxHQUMxQixDQUFDO1FBRUYsT0FBTyxDQUNOLDhCQUFDLGFBQWEsa0JBQUMsYUFBYSxFQUFFLG1CQUFNLElBQU0sVUFBVSxHQUNuRCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsOEJBQUMsbUJBQU0sQ0FBQyxJQUFJLGtCQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFNLENBQUMsRUFBSSxDQUFDLENBQzdDLENBQ2hCLENBQUM7SUFDSCxDQUFDLENBQ08sQ0FDUixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsdUJBQWUsQ0FBQyxZQUFZLEdBQUcsRUFDOUIsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0ZpZWxkcy9Gb3JtUGlja2VySW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpY2tlciwgUGlja2VySXRlbVByb3BzLCBQaWNrZXJQcm9wcywgZ2V0Q29tcG9uZW50IH0gZnJvbSAnQGJsdWViYXNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgQmFzZUZvcm1GaWVsZFByb3BzIH0gZnJvbSAnLi4vQmFzZUZvcm1GaWVsZCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1QaWNrZXJJbnB1dFByb3BzIGV4dGVuZHMgUGlja2VyUHJvcHMge1xuXHR0eXBlOiAncGlja2VyJyxcblx0bmFtZTogc3RyaW5nLFxuXHRpdGVtczogUGlja2VySXRlbVByb3BzW10sXG59XG5cbmNvbnN0IEJhc2VGb3JtRmllbGQgPSBnZXRDb21wb25lbnQ8QmFzZUZvcm1GaWVsZFByb3BzPignQmFzZUZvcm1GaWVsZCcpO1xuXG5leHBvcnQgY29uc3QgRm9ybVBpY2tlcklucHV0ID0gKHsgdHlwZSwgaXRlbXMsIC4uLnByb3BzIH06IEZvcm1QaWNrZXJJbnB1dFByb3BzKSA9PiB7XG5cblx0cmV0dXJuIChcblx0XHQ8RmllbGQgey4uLnByb3BzfT5cblx0XHR7KHsgZmllbGQsIGZvcm0gfTogYW55KSA9PiB7XG5cblx0XHRcdGNvbnN0IGlucHV0UHJvcHM6IGFueSA9IHtcblx0XHRcdFx0Li4ucHJvcHMsXG5cdFx0XHRcdC4uLmZpZWxkLFxuXHRcdFx0XHRvblZhbHVlQ2hhbmdlOiAodjogYW55KSA9PiBmb3JtLnNldEZpZWxkVmFsdWUoZmllbGQubmFtZSwgdiksXG5cdFx0XHRcdHNlbGVjdGVkVmFsdWU6IGZpZWxkLnZhbHVlLFxuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEJhc2VGb3JtRmllbGQgTWFpbkNvbXBvbmVudD17UGlja2VyfSB7Li4uaW5wdXRQcm9wc30+XG5cdFx0XHRcdHtpdGVtcy5tYXAoaSA9PiA8UGlja2VyLkl0ZW0ga2V5PXtTdHJpbmcoaS52YWx1ZSl9IHsuLi5pfSAvPil9XG5cdFx0XHRcdDwvQmFzZUZvcm1GaWVsZD5cblx0XHRcdCk7XG5cdFx0fX1cblx0XHQ8L0ZpZWxkPlxuXHQpO1xufTtcblxuRm9ybVBpY2tlcklucHV0LmRlZmF1bHRQcm9wcyA9IHtcbn07XG4iXSwidmVyc2lvbiI6M30=