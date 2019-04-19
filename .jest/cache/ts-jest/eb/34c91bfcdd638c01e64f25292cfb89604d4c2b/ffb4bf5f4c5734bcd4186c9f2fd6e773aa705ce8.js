"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const getFormField_1 = require("./getFormField");
/**
 * A component that takes care of field resolution and rendering logic.
 * This component follows the render prop pattern and gives a renderField
 * function as a param.
 */
class FormFields extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.fields = {};
        // This binding is necessary to make `this` work in the callback
        this.renderField = this.renderField.bind(this);
    }
    // Before mounting, resolve all components and store them.
    // So we don't end up creating a new component during every render
    componentWillMount() {
        const fields = this.props.fields || [];
        // // If field map is already created, skip this op
        // // I wonder, if we could do without this check 🤔
        // if (Object.keys(this.fields).length > 0) {
        // 	return;
        // }
        // Resolve fields
        fields.forEach(field => {
            const type = field.type;
            this.fields[type] = getFormField_1.getFormField(type);
        });
    }
    render() {
        const { children, fields = [] } = this.props;
        if (children) {
            return children(this.renderField);
        }
        return fields.map((field, index) => this.renderField(field, index, this.props));
    }
    /**
     * Render a single field
     * @param field
     */
    renderField(field, index, parent) {
        const { FieldWrapper } = this.props;
        field.name = field.name || `${index}-${field.type}`;
        const key = field.name;
        const Component = this.fields[field.type];
        const fieldNode = react_1.default.createElement(Component, Object.assign({ key: key }, field));
        return FieldWrapper
            ? react_1.default.createElement(FieldWrapper, { key: key, field: field, parent: parent }, fieldNode)
            : fieldNode;
    }
}
exports.FormFields = FormFields;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9Gb3JtRmllbGRzLnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFDQSwwREFBMEI7QUFDMUIsaURBQThDO0FBb0I5Qzs7OztHQUlHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsZUFBSyxDQUFDLFNBQTBCO0lBTS9ELFlBQVksS0FBc0I7UUFDakMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBTE4sV0FBTSxHQUVWLEVBQUUsQ0FBQztRQUtKLGdFQUFnRTtRQUNsRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCwwREFBMEQ7SUFDMUQsa0VBQWtFO0lBQ2xFLGtCQUFrQjtRQUVqQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFFdkMsbURBQW1EO1FBQ25ELG9EQUFvRDtRQUNwRCw2Q0FBNkM7UUFDN0MsV0FBVztRQUNYLElBQUk7UUFFSixpQkFBaUI7UUFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsMkJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUVKLENBQUM7SUFFRCxNQUFNO1FBRUwsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEdBQUcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUU3QyxJQUFJLFFBQVEsRUFBRTtZQUNiLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNsQztRQUVELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssV0FBVyxDQUFDLEtBQXFCLEVBQUUsS0FBYSxFQUFFLE1BQXVCO1FBQ2hGLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXBDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxHQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEQsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUV2QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxNQUFNLFNBQVMsR0FBSSw4QkFBQyxTQUFTLGtCQUFDLEdBQUcsRUFBRSxHQUFHLElBQU0sS0FBSyxFQUFJLENBQUM7UUFFdEQsT0FBTyxZQUFZO1lBQ25CLENBQUMsQ0FBQyw4QkFBQyxZQUFZLElBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLElBQUcsU0FBUyxDQUFnQjtZQUNsRixDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2IsQ0FBQztDQUNEO0FBN0RELGdDQTZEQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYmx1ZWJhc2UvcGx1Z2luLWpzb24tc2NoZW1hLWNvbXBvbmVudHMvc3JjL0pzb25Gb3JtL0Zvcm1GaWVsZHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1GaWVsZFByb3BzIH0gZnJvbSAnLi9GaWVsZHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEZvcm1GaWVsZCB9IGZyb20gJy4vZ2V0Rm9ybUZpZWxkJztcblxuZXhwb3J0IHR5cGUgcmVuZGVyRmllbGRGbiA9IChmaWVsZDogRm9ybUZpZWxkUHJvcHMsIGluZGV4OiBudW1iZXIsIHBhcmVudDogRm9ybUZpZWxkc1Byb3BzKSA9PiBSZWFjdC5SZWFjdE5vZGU7XG5cbmV4cG9ydCB0eXBlIEZpZWxkV3JhcHBlclByb3BzPFQgPSB7fT4gPSB7XG5cdGZpZWxkOiBGb3JtRmllbGRQcm9wcztcblx0cGFyZW50OiBhbnk7XG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59ICYgVDtcblxuZXhwb3J0IHR5cGUgRm9ybUZpZWxkc1Byb3BzPFQgPSB7fT4gPSB7XG5cdGZpZWxkczogRm9ybUZpZWxkUHJvcHNbXTtcblxuXHQvKiogV3JhcCBlYWNoIGZpZWxkIGluIHRoaXMgY29tcG9uZW50ICovXG5cdEZpZWxkV3JhcHBlcj86IFJlYWN0LkNvbXBvbmVudFR5cGU8RmllbGRXcmFwcGVyUHJvcHM+O1xuXG5cdC8qKiBJZiBjaGlsZHJlbiBwcm9wIGlmIGdpdmVuLCBpbnRlcm5hbCByZW5kZXJpbmcgbWVjaGFuaXNtIHdpbGwgYmUgaWdub3JlZC4gKi9cblx0Y2hpbGRyZW4/OiAocmVuZGVyRmllbGQ6IHJlbmRlckZpZWxkRm4pID0+IFJlYWN0LlJlYWN0Tm9kZVxufSAmIFQ7XG5cbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCB0YWtlcyBjYXJlIG9mIGZpZWxkIHJlc29sdXRpb24gYW5kIHJlbmRlcmluZyBsb2dpYy5cbiAqIFRoaXMgY29tcG9uZW50IGZvbGxvd3MgdGhlIHJlbmRlciBwcm9wIHBhdHRlcm4gYW5kIGdpdmVzIGEgcmVuZGVyRmllbGRcbiAqIGZ1bmN0aW9uIGFzIGEgcGFyYW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEZvcm1GaWVsZHNQcm9wcz4ge1xuXG5cdHByaXZhdGUgZmllbGRzOiB7XG5cdFx0W2tleTogc3RyaW5nXTogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+XG5cdH0gPSB7fTtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wczogRm9ybUZpZWxkc1Byb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG4gICAgLy8gVGhpcyBiaW5kaW5nIGlzIG5lY2Vzc2FyeSB0byBtYWtlIGB0aGlzYCB3b3JrIGluIHRoZSBjYWxsYmFja1xuXHRcdHRoaXMucmVuZGVyRmllbGQgPSB0aGlzLnJlbmRlckZpZWxkLmJpbmQodGhpcyk7XG5cdH1cblxuXHQvLyBCZWZvcmUgbW91bnRpbmcsIHJlc29sdmUgYWxsIGNvbXBvbmVudHMgYW5kIHN0b3JlIHRoZW0uXG5cdC8vIFNvIHdlIGRvbid0IGVuZCB1cCBjcmVhdGluZyBhIG5ldyBjb21wb25lbnQgZHVyaW5nIGV2ZXJ5IHJlbmRlclxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHRjb25zdCBmaWVsZHMgPSB0aGlzLnByb3BzLmZpZWxkcyB8fCBbXTtcblxuXHRcdC8vIC8vIElmIGZpZWxkIG1hcCBpcyBhbHJlYWR5IGNyZWF0ZWQsIHNraXAgdGhpcyBvcFxuXHRcdC8vIC8vIEkgd29uZGVyLCBpZiB3ZSBjb3VsZCBkbyB3aXRob3V0IHRoaXMgY2hlY2sg8J+klFxuXHRcdC8vIGlmIChPYmplY3Qua2V5cyh0aGlzLmZpZWxkcykubGVuZ3RoID4gMCkge1xuXHRcdC8vIFx0cmV0dXJuO1xuXHRcdC8vIH1cblxuXHRcdC8vIFJlc29sdmUgZmllbGRzXG5cdFx0ZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuXHRcdFx0Y29uc3QgdHlwZSA9IGZpZWxkLnR5cGU7XG5cdFx0XHR0aGlzLmZpZWxkc1t0eXBlXSA9IGdldEZvcm1GaWVsZCh0eXBlKTtcblx0XHR9KTtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Y29uc3QgeyBjaGlsZHJlbiwgZmllbGRzID0gW10gfSA9IHRoaXMucHJvcHM7XG5cblx0XHRpZiAoY2hpbGRyZW4pIHtcblx0XHRcdHJldHVybiBjaGlsZHJlbih0aGlzLnJlbmRlckZpZWxkKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmllbGRzLm1hcCgoZmllbGQsIGluZGV4KSA9PiB0aGlzLnJlbmRlckZpZWxkKGZpZWxkLCBpbmRleCwgdGhpcy5wcm9wcykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbmRlciBhIHNpbmdsZSBmaWVsZFxuXHQgKiBAcGFyYW0gZmllbGRcblx0ICovXG5cdHByaXZhdGUgcmVuZGVyRmllbGQoZmllbGQ6IEZvcm1GaWVsZFByb3BzLCBpbmRleDogbnVtYmVyLCBwYXJlbnQ6IEZvcm1GaWVsZHNQcm9wcykge1xuXHRcdGNvbnN0IHsgRmllbGRXcmFwcGVyIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0ZmllbGQubmFtZSA9IGZpZWxkLm5hbWUgfHwgYCR7aW5kZXh9LSR7ZmllbGQudHlwZX1gO1xuXHRcdGNvbnN0IGtleSA9IGZpZWxkLm5hbWU7XG5cblx0XHRjb25zdCBDb21wb25lbnQgPSB0aGlzLmZpZWxkc1tmaWVsZC50eXBlXTtcblx0XHRjb25zdCBmaWVsZE5vZGUgPSAgPENvbXBvbmVudCBrZXk9e2tleX0gey4uLmZpZWxkfSAvPjtcblxuXHRcdHJldHVybiBGaWVsZFdyYXBwZXJcblx0XHQ/IDxGaWVsZFdyYXBwZXIga2V5PXtrZXl9IGZpZWxkPXtmaWVsZH0gcGFyZW50PXtwYXJlbnR9PntmaWVsZE5vZGV9PC9GaWVsZFdyYXBwZXI+XG5cdFx0OiBmaWVsZE5vZGU7XG5cdH1cbn0iXSwidmVyc2lvbiI6M30=