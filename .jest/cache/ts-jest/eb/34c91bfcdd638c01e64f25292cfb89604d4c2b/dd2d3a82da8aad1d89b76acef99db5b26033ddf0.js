"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const lodash_isnil_1 = tslib_1.__importDefault(require("lodash.isnil"));
const lodash_isstring_1 = tslib_1.__importDefault(require("lodash.isstring"));
class JsonSchemaParser {
    constructor(getComponent = () => null) {
        this.getComponent = getComponent;
        //
    }
    parseSchema(schema) {
        if (Array.isArray(schema)) {
            return this.parseSubSchemas(schema);
        }
        return this.createComponent(schema);
    }
    parseSubSchemas(subSchemas = []) {
        const Components = [];
        let index = 0;
        for (const subSchema of subSchemas) {
            subSchema.props = subSchema.props || {};
            subSchema.props.key = subSchema.props.key || String(index);
            const Component = this.parseSchema(subSchema);
            Components.push(Component);
            index++;
        }
        return Components;
    }
    createComponent(schema) {
        const { text, props, component } = schema;
        if (lodash_isnil_1.default(component)) {
            throw Error('Could not parse React JSON Schema. Reason: "component" property is required, but not given.');
        }
        // // If schema.component is a React Component, return it
        // if (!isString(component) && React.isValidElement(component)) {
        // 	return component;
        // }
        const Component = this.resolveComponent(schema);
        const Children = text || this.resolveComponentChildren(schema);
        return react_1.default.createElement(Component, props, Children);
    }
    resolveComponent(node) {
        // component is already a react component
        if (!lodash_isstring_1.default(node.component) && node.component === Object(node.component)) {
            return node.component;
        }
        const Component = this.getComponent(node);
        if (Component) {
            return Component;
        }
        throw Error('Could not parse React JSON Schema. Reason: Could not resolve component.');
    }
    resolveComponentChildren({ children, }) {
        return !lodash_isnil_1.default(children) ? this.parseSchema(children) : undefined;
    }
}
exports.JsonSchemaParser = JsonSchemaParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uU2NoZW1hUGFyc2VyLnRzIiwibWFwcGluZ3MiOiI7OztBQUlBLDBEQUEwQjtBQUMxQix3RUFBaUM7QUFDakMsOEVBQXVDO0FBZXZDLE1BQWEsZ0JBQWdCO0lBQzVCLFlBQW9CLGVBQW1DLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFBN0MsaUJBQVksR0FBWixZQUFZLENBQWlDO1FBQ2hFLEVBQUU7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQXFDO1FBQ2hELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEM7UUFFRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGVBQWUsQ0FBQyxhQUFrQyxFQUFFO1FBQ25ELE1BQU0sVUFBVSxHQUFtQyxFQUFFLENBQUM7UUFDdEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsS0FBSyxNQUFNLFNBQVMsSUFBSSxVQUFVLEVBQUU7WUFDbkMsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN4QyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQTRCLENBQUM7WUFDekUsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzQixLQUFLLEVBQUUsQ0FBQztTQUNSO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQztJQUVELGVBQWUsQ0FBQyxNQUF5QjtRQUN4QyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFFMUMsSUFBSSxzQkFBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sS0FBSyxDQUNWLDZGQUE2RixDQUM3RixDQUFDO1NBQ0Y7UUFFRCx5REFBeUQ7UUFDekQsaUVBQWlFO1FBQ2pFLHFCQUFxQjtRQUNyQixJQUFJO1FBRUosTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0QsT0FBTyxlQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELGdCQUFnQixDQUFDLElBQXVCO1FBQ3ZDLHlDQUF5QztRQUN6QyxJQUFJLENBQUMseUJBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN0QjtRQUVELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUMsSUFBSSxTQUFTLEVBQUU7WUFDZCxPQUFPLFNBQVMsQ0FBQztTQUNqQjtRQUVELE1BQU0sS0FBSyxDQUFDLHlFQUF5RSxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVELHdCQUF3QixDQUFDLEVBQ3hCLFFBQVEsR0FDVztRQUNuQixPQUFPLENBQUMsc0JBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2xFLENBQUM7Q0FDRDtBQWxFRCw0Q0FrRUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uU2NoZW1hUGFyc2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW5pdGlhbCBjb2RlIHRha2UgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vVGVjaG5pcXVlU29mdHdhcmUvcmVhY3QtanNvbi1zY2hlbWFcbiAqL1xuaW1wb3J0IHsgTWF5YmVBcnJheSB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaXNOaWwgZnJvbSAnbG9kYXNoLmlzbmlsJztcbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2guaXNzdHJpbmcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEpzb25Db21wb25lbnROb2RlIHtcblx0Y29tcG9uZW50OiBzdHJpbmcgfCBSZWFjdC5Db21wb25lbnRUeXBlPGFueT47XG5cdHRleHQ/OiBzdHJpbmc7XG5cdHByb3BzPzoge1xuXHRcdGtleT86IHN0cmluZztcblx0XHRba2V5OiBzdHJpbmddOiBhbnk7XG5cdH07XG5cdGNoaWxkcmVuPzogSnNvbkNvbXBvbmVudE5vZGVbXTtcblx0bmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgUmVzb2x2ZUNvbXBvbmVudEZuID0gKG5vZGU6IEpzb25Db21wb25lbnROb2RlKSA9PiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT4gfCBudWxsO1xuXG5leHBvcnQgY2xhc3MgSnNvblNjaGVtYVBhcnNlciB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZ2V0Q29tcG9uZW50OiBSZXNvbHZlQ29tcG9uZW50Rm4gPSAoKSA9PiBudWxsKSB7XG5cdFx0Ly9cblx0fVxuXG5cdHBhcnNlU2NoZW1hKHNjaGVtYTogTWF5YmVBcnJheTxKc29uQ29tcG9uZW50Tm9kZT4pOiBNYXliZUFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PiB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoc2NoZW1hKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VTdWJTY2hlbWFzKHNjaGVtYSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlQ29tcG9uZW50KHNjaGVtYSk7XG5cdH1cblxuXHRwYXJzZVN1YlNjaGVtYXMoc3ViU2NoZW1hczogSnNvbkNvbXBvbmVudE5vZGVbXSA9IFtdKTogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+IHtcblx0XHRjb25zdCBDb21wb25lbnRzOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4gPSBbXTtcblx0XHRsZXQgaW5kZXggPSAwO1xuXHRcdGZvciAoY29uc3Qgc3ViU2NoZW1hIG9mIHN1YlNjaGVtYXMpIHtcblx0XHRcdHN1YlNjaGVtYS5wcm9wcyA9IHN1YlNjaGVtYS5wcm9wcyB8fCB7fTtcblx0XHRcdHN1YlNjaGVtYS5wcm9wcy5rZXkgPSBzdWJTY2hlbWEucHJvcHMua2V5IHx8IFN0cmluZyhpbmRleCk7XG5cdFx0XHRjb25zdCBDb21wb25lbnQgPSB0aGlzLnBhcnNlU2NoZW1hKHN1YlNjaGVtYSkgYXMgUmVhY3QuUmVhY3RFbGVtZW50PGFueT47XG5cdFx0XHRDb21wb25lbnRzLnB1c2goQ29tcG9uZW50KTtcblx0XHRcdGluZGV4Kys7XG5cdFx0fVxuXHRcdHJldHVybiBDb21wb25lbnRzO1xuXHR9XG5cblx0Y3JlYXRlQ29tcG9uZW50KHNjaGVtYTogSnNvbkNvbXBvbmVudE5vZGUpOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PiB7XG5cdFx0Y29uc3QgeyB0ZXh0LCBwcm9wcywgY29tcG9uZW50IH0gPSBzY2hlbWE7XG5cblx0XHRpZiAoaXNOaWwoY29tcG9uZW50KSkge1xuXHRcdFx0dGhyb3cgRXJyb3IoXG5cdFx0XHRcdCdDb3VsZCBub3QgcGFyc2UgUmVhY3QgSlNPTiBTY2hlbWEuIFJlYXNvbjogXCJjb21wb25lbnRcIiBwcm9wZXJ0eSBpcyByZXF1aXJlZCwgYnV0IG5vdCBnaXZlbi4nXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIC8vIElmIHNjaGVtYS5jb21wb25lbnQgaXMgYSBSZWFjdCBDb21wb25lbnQsIHJldHVybiBpdFxuXHRcdC8vIGlmICghaXNTdHJpbmcoY29tcG9uZW50KSAmJiBSZWFjdC5pc1ZhbGlkRWxlbWVudChjb21wb25lbnQpKSB7XG5cdFx0Ly8gXHRyZXR1cm4gY29tcG9uZW50O1xuXHRcdC8vIH1cblxuXHRcdGNvbnN0IENvbXBvbmVudCA9IHRoaXMucmVzb2x2ZUNvbXBvbmVudChzY2hlbWEpO1xuXHRcdGNvbnN0IENoaWxkcmVuID0gdGV4dCB8fCB0aGlzLnJlc29sdmVDb21wb25lbnRDaGlsZHJlbihzY2hlbWEpO1xuXG5cdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBwcm9wcywgQ2hpbGRyZW4pO1xuXHR9XG5cblx0cmVzb2x2ZUNvbXBvbmVudChub2RlOiBKc29uQ29tcG9uZW50Tm9kZSk6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PiB7XG5cdFx0Ly8gY29tcG9uZW50IGlzIGFscmVhZHkgYSByZWFjdCBjb21wb25lbnRcblx0XHRpZiAoIWlzU3RyaW5nKG5vZGUuY29tcG9uZW50KSAmJiBub2RlLmNvbXBvbmVudCA9PT0gT2JqZWN0KG5vZGUuY29tcG9uZW50KSkge1xuXHRcdFx0cmV0dXJuIG5vZGUuY29tcG9uZW50O1xuXHRcdH1cblxuXHRcdGNvbnN0IENvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KG5vZGUpO1xuXG5cdFx0aWYgKENvbXBvbmVudCkge1xuXHRcdFx0cmV0dXJuIENvbXBvbmVudDtcblx0XHR9XG5cblx0XHR0aHJvdyBFcnJvcignQ291bGQgbm90IHBhcnNlIFJlYWN0IEpTT04gU2NoZW1hLiBSZWFzb246IENvdWxkIG5vdCByZXNvbHZlIGNvbXBvbmVudC4nKTtcblx0fVxuXG5cdHJlc29sdmVDb21wb25lbnRDaGlsZHJlbih7XG5cdFx0Y2hpbGRyZW4sXG5cdH06IEpzb25Db21wb25lbnROb2RlKTogTWF5YmVBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4gfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiAhaXNOaWwoY2hpbGRyZW4pID8gdGhpcy5wYXJzZVNjaGVtYShjaGlsZHJlbikgOiB1bmRlZmluZWQ7XG5cdH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==