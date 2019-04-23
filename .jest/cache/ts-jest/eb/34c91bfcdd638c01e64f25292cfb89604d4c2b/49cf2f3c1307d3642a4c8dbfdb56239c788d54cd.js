"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const components_1 = require("@bluebase/components");
const formik_1 = require("formik");
const react_1 = tslib_1.__importDefault(require("react"));
const BaseFormField = components_1.getComponent('BaseFormField');
exports.FormRangeInput = (_a) => {
    var { min, max } = _a, rest = tslib_1.__rest(_a, ["min", "max"]);
    const props = Object.assign({}, rest, { maximumValue: max, minimumValue: min });
    return (react_1.default.createElement(formik_1.Field, Object.assign({}, props), ({ field, form }) => {
        const inputProps = Object.assign({}, props, { name: field.name, onValueChange: (value) => {
                form.setFieldValue(field.name, value),
                    !value ?
                        null :
                        rest.onValueChange ?
                            rest.onValueChange(value) :
                            null;
            }, value: field.value });
        return (react_1.default.createElement(BaseFormField, Object.assign({ MainComponent: components_1.Slider, right: react_1.default.createElement(components_1.Text, null, field.value) }, inputProps)));
    }));
};
exports.FormRangeInput.defaultProps = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVJhbmdlSW5wdXQudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUErRTtBQUUvRSxtQ0FBK0I7QUFDL0IsMERBQTBCO0FBVTFCLE1BQU0sYUFBYSxHQUFHLHlCQUFZLENBQXFCLGVBQWUsQ0FBQyxDQUFDO0FBRTNELFFBQUEsY0FBYyxHQUFHLENBQUMsRUFBMEMsRUFBRSxFQUFFO1FBQTlDLEVBQUUsR0FBRyxFQUFFLEdBQUcsT0FBZ0MsRUFBOUIseUNBQU87SUFFakQsTUFBTSxLQUFLLHFCQUNQLElBQUksSUFDUCxZQUFZLEVBQUUsR0FBRyxFQUNqQixZQUFZLEVBQUUsR0FBRyxHQUNqQixDQUFDO0lBRUYsT0FBTyxDQUNOLDhCQUFDLGNBQUssb0JBQUssS0FBSyxHQUNmLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFPLEVBQUUsRUFBRTtRQUV6QixNQUFNLFVBQVUscUJBQ1osS0FBSyxJQUNSLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUNoQixhQUFhLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztvQkFFckMsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDTixJQUFJLENBQUMsQ0FBQzt3QkFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7NEJBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDMUIsSUFBSSxDQUFDO1lBRVIsQ0FBQyxFQUVELEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxHQUNsQixDQUFDO1FBRUYsT0FBTyxDQUFDLDhCQUFDLGFBQWEsa0JBQUMsYUFBYSxFQUFFLG1CQUFNLEVBQUUsS0FBSyxFQUFFLDhCQUFDLGlCQUFJLFFBQUUsS0FBSyxDQUFDLEtBQUssQ0FBUSxJQUFNLFVBQVUsRUFBSSxDQUFDLENBQUM7SUFDdEcsQ0FBQyxDQUNNLENBQ1AsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLHNCQUFjLENBQUMsWUFBWSxHQUFHLEVBQzdCLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvRm9ybVJhbmdlSW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNsaWRlciwgU2xpZGVyUHJvcHMsIFRleHQsIGdldENvbXBvbmVudCB9IGZyb20gJ0BibHVlYmFzZS9jb21wb25lbnRzJztcbmltcG9ydCB7IEJhc2VGb3JtRmllbGRQcm9wcyB9IGZyb20gJy4uL0Jhc2VGb3JtRmllbGQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBGb3JtUmFuZ2VJbnB1dFByb3BzIGV4dGVuZHMgU2xpZGVyUHJvcHMge1xuXHR0eXBlOiAncmFuZ2UnLFxuXHRuYW1lOiBzdHJpbmcsXG5cdG1pbj86IG51bWJlcjtcblx0bWF4PzogbnVtYmVyO1xuXHRzdGVwPzogbnVtYmVyO1xufVxuXG5jb25zdCBCYXNlRm9ybUZpZWxkID0gZ2V0Q29tcG9uZW50PEJhc2VGb3JtRmllbGRQcm9wcz4oJ0Jhc2VGb3JtRmllbGQnKTtcblxuZXhwb3J0IGNvbnN0IEZvcm1SYW5nZUlucHV0ID0gKHsgbWluLCBtYXgsIC4uLnJlc3QgfTogRm9ybVJhbmdlSW5wdXRQcm9wcykgPT4ge1xuXG5cdGNvbnN0IHByb3BzID0ge1xuXHRcdC4uLnJlc3QsXG5cdFx0bWF4aW11bVZhbHVlOiBtYXgsXG5cdFx0bWluaW11bVZhbHVlOiBtaW4sXG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8RmllbGQgey4uLnByb3BzfT5cblx0XHR7KHsgZmllbGQsIGZvcm0gfTogYW55KSA9PiB7XG5cblx0XHRcdGNvbnN0IGlucHV0UHJvcHMgPSB7XG5cdFx0XHRcdC4uLnByb3BzLFxuXHRcdFx0XHRuYW1lOiBmaWVsZC5uYW1lLFxuXHRcdFx0XHRvblZhbHVlQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0XHRcdGZvcm0uc2V0RmllbGRWYWx1ZShmaWVsZC5uYW1lLCB2YWx1ZSkgLFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCF2YWx1ZSA/XG5cdFx0XHRcdFx0ICBudWxsIDpcblx0XHRcdFx0XHQgICByZXN0Lm9uVmFsdWVDaGFuZ2UgP1xuXHRcdFx0XHRcdFx0cmVzdC5vblZhbHVlQ2hhbmdlKHZhbHVlKSA6XG5cdFx0XHRcdFx0XHQgbnVsbDtcblxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdHZhbHVlOiBmaWVsZC52YWx1ZSxcblx0XHRcdH07XG5cblx0XHRcdHJldHVybiAoPEJhc2VGb3JtRmllbGQgTWFpbkNvbXBvbmVudD17U2xpZGVyfSByaWdodD17PFRleHQ+e2ZpZWxkLnZhbHVlfTwvVGV4dD59IHsuLi5pbnB1dFByb3BzfSAvPik7XG5cdFx0fX1cblx0PC9GaWVsZD5cblx0KTtcbn07XG5cbkZvcm1SYW5nZUlucHV0LmRlZmF1bHRQcm9wcyA9IHtcbn07XG4iXSwidmVyc2lvbiI6M30=