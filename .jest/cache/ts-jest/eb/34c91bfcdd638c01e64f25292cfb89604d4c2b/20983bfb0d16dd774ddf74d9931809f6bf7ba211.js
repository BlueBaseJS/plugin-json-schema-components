"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const JsonSchemaParser_1 = require("../JsonSchemaParser");
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_1 = require("react-native");
const react_test_renderer_1 = tslib_1.__importDefault(require("react-test-renderer"));
const Timeline = (_a) => {
    var { children } = _a, rest = tslib_1.__rest(_a, ["children"]);
    return react_1.default.createElement(react_native_1.Text, Object.assign({}, rest),
        "Timeline: ",
        children);
};
const Post = (_a) => {
    var { content } = _a, rest = tslib_1.__rest(_a, ["content"]);
    return react_1.default.createElement(react_native_1.Text, Object.assign({}, rest),
        "Post: ",
        content);
};
describe('JsonSchemaParser', () => {
    it('should parse schema with a single component', () => {
        const parser = new JsonSchemaParser_1.JsonSchemaParser();
        const result = parser.parseSchema({
            component: Timeline,
        });
        const tree = react_test_renderer_1.default.create(result).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should parse schema with a single component with props', () => {
        const parser = new JsonSchemaParser_1.JsonSchemaParser();
        const result = parser.parseSchema({
            component: Timeline,
            props: {
                style: {
                    color: 'red'
                }
            }
        });
        const tree = react_test_renderer_1.default.create(result).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should parse schema with a single component with text', () => {
        const parser = new JsonSchemaParser_1.JsonSchemaParser();
        const result = parser.parseSchema({
            component: Timeline,
            text: 'Hello',
        });
        const tree = react_test_renderer_1.default.create(result).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should parse schema with a single component with children', () => {
        const parser = new JsonSchemaParser_1.JsonSchemaParser();
        const result = parser.parseSchema({
            component: Timeline,
            children: [{
                    component: Post,
                    props: { content: 'Hello' }
                }, {
                    component: Post,
                    props: { content: 'World' }
                }, {
                    component: Post,
                }]
        });
        const tree = react_test_renderer_1.default.create(result).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should parse schema with custom component lookup', () => {
        const parser = new JsonSchemaParser_1.JsonSchemaParser((node) => {
            return (node.component === 'Post') ? Post : null;
        });
        const result = parser.parseSchema({
            component: 'Post',
        });
        const tree = react_test_renderer_1.default.create(result).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should throw error with undefined component', () => {
        const parser = new JsonSchemaParser_1.JsonSchemaParser();
        const result = () => parser.parseSchema({
            component: undefined,
        });
        expect(result).toThrow();
    });
    it('should throw error with unknown component', () => {
        const parser = new JsonSchemaParser_1.JsonSchemaParser();
        const result = () => parser.parseSchema({
            component: 'Foo',
        });
        expect(result).toThrow();
    });
    it('parseSubSchemas should return an empty array if no params given', () => {
        const parser = new JsonSchemaParser_1.JsonSchemaParser();
        expect(parser.parseSubSchemas()).toHaveLength(0);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9fX3Rlc3RzX18vSnNvblNjaGVtYVBhcnNlci50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBMEU7QUFDMUUsMERBQTBCO0FBQzFCLCtDQUFvQztBQUNwQyxzRkFBMkM7QUFFM0MsTUFBTSxRQUFRLEdBQUcsQ0FBQyxFQUEwQixFQUFFLEVBQUU7UUFBOUIsRUFBRSxRQUFRLE9BQWdCLEVBQWQsdUNBQU87SUFBWSxPQUFBLDhCQUFDLG1CQUFJLG9CQUFLLElBQUk7O1FBQWEsUUFBUSxDQUFRLENBQUE7Q0FBQSxDQUFDO0FBQzdGLE1BQU0sSUFBSSxHQUFHLENBQUMsRUFBeUIsRUFBRSxFQUFFO1FBQTdCLEVBQUUsT0FBTyxPQUFnQixFQUFkLHNDQUFPO0lBQVksT0FBQSw4QkFBQyxtQkFBSSxvQkFBSyxJQUFJOztRQUFTLE9BQU8sQ0FBUSxDQUFBO0NBQUEsQ0FBQztBQUVuRixRQUFRLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBRWpDLEVBQUUsQ0FBQyw2Q0FBNkMsRUFBRSxHQUFHLEVBQUU7UUFFdEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO1FBQ3RDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDakMsU0FBUyxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLEdBQUcsNkJBQVEsQ0FBQyxNQUFNLENBQUMsTUFBaUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3REFBd0QsRUFBRSxHQUFHLEVBQUU7UUFFakUsTUFBTSxNQUFNLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO1FBQ3RDLE1BQU0sTUFBTSxHQUFHLE1BQU0s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QixFQUFFLENBQUM7UUFDdEMsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUN2QyxTQUFTLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUVBQWlFLEVBQUUsR0FBRyxFQUFFO1FBQzFFLE1BQU0sTUFBTSxHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztRQUN0QyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUMsQ0FBQyxDQUFDO0FBRUosQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9fX3Rlc3RzX18vSnNvblNjaGVtYVBhcnNlci50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uQ29tcG9uZW50Tm9kZSwgSnNvblNjaGVtYVBhcnNlciB9IGZyb20gJy4uL0pzb25TY2hlbWFQYXJzZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJ3JlYWN0LXRlc3QtcmVuZGVyZXInO1xuXG5jb25zdCBUaW1lbGluZSA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH06IGFueSkgPT4gPFRleHQgey4uLnJlc3R9PlRpbWVsaW5lOiB7Y2hpbGRyZW59PC9UZXh0PjtcbmNvbnN0IFBvc3QgPSAoeyBjb250ZW50LCAuLi5yZXN0IH06IGFueSkgPT4gPFRleHQgey4uLnJlc3R9PlBvc3Q6IHtjb250ZW50fTwvVGV4dD47XG5cbmRlc2NyaWJlKCdKc29uU2NoZW1hUGFyc2VyJywgKCkgPT4ge1xuXG5cdGl0KCdzaG91bGQgcGFyc2Ugc2NoZW1hIHdpdGggYSBzaW5nbGUgY29tcG9uZW50JywgKCkgPT4ge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gbmV3IEpzb25TY2hlbWFQYXJzZXIoKTtcblx0XHRjb25zdCByZXN1bHQgPSBwYXJzZXIucGFyc2VTY2hlbWEoe1xuXHRcdFx0Y29tcG9uZW50OiBUaW1lbGluZSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHRyZWUgPSByZW5kZXJlci5jcmVhdGUocmVzdWx0IGFzIFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KS50b0pTT04oKTtcblx0XHRleHBlY3QodHJlZSkudG9NYXRjaFNuYXBzaG90KCk7XG5cdH0pO1xuXG5cdGl0KCdzaG91bGQgcGFyc2Ugc2NoZW1hIHdpdGggYSBzaW5nbGUgY29tcG9uZW50IHdpdGggcHJvcHMnLCAoKSA9PiB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSBuZXcgSnNvblNjaGVtYVBhcnNlcigpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IHBhcnNlci5wYXJzZVNjaGVtYSh7XG5cdFx0XHRjb21wb25lbnQ6IFRpbWVsaW5lLFxuXHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRjb2xvcjogJ3JlZCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgdHJlZSA9IHJlbmRlcmVyLmNyZWF0ZShyZXN1bHQgYXMgUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pLnRvSlNPTigpO1xuXHRcdGV4cGVjdCh0cmVlKS50b01hdGNoU25hcHNob3QoKTtcblx0fSk7XG5cblx0aXQoJ3Nob3VsZCBwYXJzZSBzY2hlbWEgd2l0aCBhIHNpbmdsZSBjb21wb25lbnQgd2l0aCB0ZXh0JywgKCkgPT4ge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gbmV3IEpzb25TY2hlbWFQYXJzZXIoKTtcblx0XHRjb25zdCByZXN1bHQgPSBwYXJzZXIucGFyc2VTY2hlbWEoe1xuXHRcdFx0Y29tcG9uZW50OiBUaW1lbGluZSxcblx0XHRcdHRleHQ6ICdIZWxsbycsXG5cdFx0fSk7XG5cblx0XHRjb25zdCB0cmVlID0gcmVuZGVyZXIuY3JlYXRlKHJlc3VsdCBhcyBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikudG9KU09OKCk7XG5cdFx0ZXhwZWN0KHRyZWUpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXHR9KTtcblxuXHRpdCgnc2hvdWxkIHBhcnNlIHNjaGVtYSB3aXRoIGEgc2luZ2xlIGNvbXBvbmVudCB3aXRoIGNoaWxkcmVuJywgKCkgPT4ge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gbmV3IEpzb25TY2hlbWFQYXJzZXIoKTtcblx0XHRjb25zdCByZXN1bHQgPSBwYXJzZXIucGFyc2VTY2hlbWEoe1xuXHRcdFx0Y29tcG9uZW50OiBUaW1lbGluZSxcblx0XHRcdGNoaWxkcmVuOiBbe1xuXHRcdFx0XHRjb21wb25lbnQ6IFBvc3QsXG5cdFx0XHRcdHByb3BzOiB7IGNvbnRlbnQ6ICdIZWxsbycgfVxuXHRcdFx0fSwge1xuXHRcdFx0XHRjb21wb25lbnQ6IFBvc3QsXG5cdFx0XHRcdHByb3BzOiB7IGNvbnRlbnQ6ICdXb3JsZCcgfVxuXHRcdFx0fSwge1xuXHRcdFx0XHRjb21wb25lbnQ6IFBvc3QsXG5cdFx0XHR9XVxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgdHJlZSA9IHJlbmRlcmVyLmNyZWF0ZShyZXN1bHQgYXMgUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pLnRvSlNPTigpO1xuXHRcdGV4cGVjdCh0cmVlKS50b01hdGNoU25hcHNob3QoKTtcblx0fSk7XG5cblx0aXQoJ3Nob3VsZCBwYXJzZSBzY2hlbWEgd2l0aCBjdXN0b20gY29tcG9uZW50IGxvb2t1cCcsICgpID0+IHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IG5ldyBKc29uU2NoZW1hUGFyc2VyKChub2RlOiBKc29uQ29tcG9uZW50Tm9kZSkgPT4ge1xuXHRcdFx0cmV0dXJuIChub2RlLmNvbXBvbmVudCA9PT0gJ1Bvc3QnKSA/IFBvc3QgOiBudWxsO1xuXHRcdH0pO1xuXHRcdGNvbnN0IHJlc3VsdCA9IHBhcnNlci5wYXJzZVNjaGVtYSh7XG5cdFx0XHRjb21wb25lbnQ6ICdQb3N0Jyxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHRyZWUgPSByZW5kZXJlci5jcmVhdGUocmVzdWx0IGFzIFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KS50b0pTT04oKTtcblx0XHRleHBlY3QodHJlZSkudG9NYXRjaFNuYXBzaG90KCk7XG5cdH0pO1xuXG5cdGl0KCdzaG91bGQgdGhyb3cgZXJyb3Igd2l0aCB1bmRlZmluZWQgY29tcG9uZW50JywgKCkgPT4ge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gbmV3IEpzb25TY2hlbWFQYXJzZXIoKTtcblx0XHRjb25zdCByZXN1bHQgPSAoKSA9PiBwYXJzZXIucGFyc2VTY2hlbWEoe1xuXHRcdFx0Y29tcG9uZW50OiB1bmRlZmluZWQgYXMgYW55LFxuXHRcdH0pO1xuXG5cdFx0ZXhwZWN0KHJlc3VsdCkudG9UaHJvdygpO1xuXHR9KTtcblxuXHRpdCgnc2hvdWxkIHRocm93IGVycm9yIHdpdGggdW5rbm93biBjb21wb25lbnQnLCAoKSA9PiB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSBuZXcgSnNvblNjaGVtYVBhcnNlcigpO1xuXHRcdGNvbnN0IHJlc3VsdCA9ICgpID0+IHBhcnNlci5wYXJzZVNjaGVtYSh7XG5cdFx0XHRjb21wb25lbnQ6ICdGb28nLFxuXHRcdH0pO1xuXG5cdFx0ZXhwZWN0KHJlc3VsdCkudG9UaHJvdygpO1xuXHR9KTtcblxuXHRpdCgncGFyc2VTdWJTY2hlbWFzIHNob3VsZCByZXR1cm4gYW4gZW1wdHkgYXJyYXkgaWYgbm8gcGFyYW1zIGdpdmVuJywgKCkgPT4ge1xuXHRcdGNvbnN0IHBhcnNlciA9IG5ldyBKc29uU2NoZW1hUGFyc2VyKCk7XG5cdFx0ZXhwZWN0KHBhcnNlci5wYXJzZVN1YlNjaGVtYXMoKSkudG9IYXZlTGVuZ3RoKDApO1xuXHR9KTtcblxufSk7Il0sInZlcnNpb24iOjN9