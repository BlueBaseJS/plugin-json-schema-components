"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const __1 = require("../");
const core_1 = require("@bluebase/core");
const react_1 = tslib_1.__importDefault(require("react"));
const react_test_renderer_1 = tslib_1.__importDefault(require("react-test-renderer"));
describe('JsonLayout', () => {
    test(`should render a text component with red color`, (done) => {
        const component = react_test_renderer_1.default.create(react_1.default.createElement(core_1.BlueBaseApp, null,
            react_1.default.createElement(__1.JsonLayout, { schema: {
                    component: 'Text',
                    props: {
                        style: {
                            color: 'red'
                        }
                    },
                    text: 'This component is generated through JsonLayout Component',
                } })));
        setTimeout(() => {
            const tree = component.toJSON();
            expect(tree.props.style[1]).toMatchObject({
                color: 'red'
            });
            expect(tree.children.join()).toBe('This component is generated through JsonLayout Component');
            expect(tree).toMatchSnapshot();
            done();
        });
    });
    test(`should create layout through createJsonLayout function`, (done) => {
        const Layout = __1.createJsonLayout({
            schema: {
                component: 'Text',
                props: {
                    style: {
                        color: 'red'
                    }
                },
                text: 'This component is generated through JsonLayout Component',
            }
        });
        const component = react_test_renderer_1.default.create(react_1.default.createElement(core_1.BlueBaseApp, null,
            react_1.default.createElement(Layout, null)));
        setTimeout(() => {
            const tree = component.toJSON();
            expect(tree.props.style[1]).toMatchObject({
                color: 'red'
            });
            expect(tree.children.join()).toBe('This component is generated through JsonLayout Component');
            expect(tree).toMatchSnapshot();
            done();
        });
    });
    test(`should render a text component with red color that is processed by filters`, (done) => {
        const filter = (schema, args) => (Object.assign({}, schema, { props: Object.assign({}, schema.props, { style: Object.assign({}, schema.props.style, args.style) }), text: 'Content changed by filter!' }));
        const component = react_test_renderer_1.default.create(react_1.default.createElement(core_1.BlueBaseApp, { filters: { 'content-filter': filter } },
            react_1.default.createElement(__1.JsonLayout, { filter: "content-filter", args: { style: { color: 'blue' } }, schema: {
                    component: 'Text',
                    props: {
                        style: {
                            color: 'red'
                        }
                    },
                    text: 'This component is generated through JsonLayout Component',
                } })));
        setTimeout(() => {
            const tree = component.toJSON();
            expect(tree.props.style[1]).toMatchObject({
                color: 'blue'
            });
            expect(tree.children.join()).toBe('Content changed by filter!');
            expect(tree).toMatchSnapshot();
            done();
        });
    });
    test(`should render a null for unknown component`, (done) => {
        const component = react_test_renderer_1.default.create(react_1.default.createElement(core_1.BlueBaseApp, null,
            react_1.default.createElement(__1.JsonLayout, { schema: {
                    component: 'Foo',
                    text: 'This component is generated through JsonLayout Component',
                } })));
        setTimeout(() => {
            const tree = component.toJSON();
            expect(tree).toMatchSnapshot();
            expect(tree.children[0].children.join()).toBe('🚨 BlueBase Error');
            expect(tree.children[1].children.join())
                .toBe('Could not parse React JSON Schema. Reason: Could not resolve component.');
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uTGF5b3V0L19fdGVzdHNfXy9Kc29uU2NoZW1hLnRlc3QudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLDJCQUFtRDtBQUNuRCx5Q0FBNkM7QUFDN0MsMERBQTBCO0FBQzFCLHNGQUErQztBQUUvQyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtJQUUzQixJQUFJLENBQUMsK0NBQStDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUM5RCxNQUFNLFNBQVMsR0FBRyw2QkFBWSxDQUFDLE1BQU0sQ0FDcEMsOEJBQUMsa0JBQVc7WUFDWCw4QkFBQyxjQUFVLElBQ1YsTUFBTSxFQUFFO29CQUNQLFNBQVMsRUFBRSxNQUFNO29CQUNqQixLQUFLLEVBQUU7d0JBQ04sS0FBSyxFQUFFOzRCQUNOLEtBQUssRUFBRSxLQUFLO3lCQUNaO3FCQUNEO29CQUNELElBQUksRUFBRSwwREFBMEQ7aUJBQ2hFLEdBQ0EsQ0FDVyxDQUNkLENBQUM7UUFHRixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2YsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hDLE1BQU0sQ0FBRSxJQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFDbEQsS0FBSyxFQUFFLEtBQUs7YUFDWixDQUFDLENBQUM7WUFDSCxNQUFNLENBQUUsSUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1lBQ3ZHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUMvQixJQUFJLEVBQUUsQ0FBQztRQUNSLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsd0RBQXdELEVBQUUsQ0FBQyxJQUFJ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LEdBQ0EsQ0FDVyxDQUNkLENBQUM7UUFHRixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2YsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUMvQixNQUFNLENBQUUsSUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUM1RSxNQUFNLENBQUUsSUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQy9DLElBQUksQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDO1lBQ2xGLElBQUksRUFBRSxDQUFDO1FBQ1IsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztBQUVKLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkxheW91dC9fX3Rlc3RzX18vSnNvblNjaGVtYS50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uTGF5b3V0LCBjcmVhdGVKc29uTGF5b3V0IH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IEJsdWVCYXNlQXBwIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUZXN0UmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcic7XG5cbmRlc2NyaWJlKCdKc29uTGF5b3V0JywgKCkgPT4ge1xuXG5cdHRlc3QoYHNob3VsZCByZW5kZXIgYSB0ZXh0IGNvbXBvbmVudCB3aXRoIHJlZCBjb2xvcmAsIChkb25lKSA9PiB7XG5cdFx0Y29uc3QgY29tcG9uZW50ID0gVGVzdFJlbmRlcmVyLmNyZWF0ZShcblx0XHRcdDxCbHVlQmFzZUFwcD5cblx0XHRcdFx0PEpzb25MYXlvdXRcblx0XHRcdFx0XHRzY2hlbWE9e3tcblx0XHRcdFx0XHRcdGNvbXBvbmVudDogJ1RleHQnLFxuXHRcdFx0XHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3JlZCdcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHRleHQ6ICdUaGlzIGNvbXBvbmVudCBpcyBnZW5lcmF0ZWQgdGhyb3VnaCBKc29uTGF5b3V0IENvbXBvbmVudCcsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRjb25zdCB0cmVlID0gY29tcG9uZW50LnRvSlNPTigpO1xuXHRcdFx0ZXhwZWN0KCh0cmVlIGFzIGFueSkucHJvcHMuc3R5bGVbMV0pLnRvTWF0Y2hPYmplY3Qoe1xuXHRcdFx0XHRjb2xvcjogJ3JlZCdcblx0XHRcdH0pO1xuXHRcdFx0ZXhwZWN0KCh0cmVlIGFzIGFueSkuY2hpbGRyZW4uam9pbigpKS50b0JlKCdUaGlzIGNvbXBvbmVudCBpcyBnZW5lcmF0ZWQgdGhyb3VnaCBKc29uTGF5b3V0IENvbXBvbmVudCcpO1xuXHRcdFx0ZXhwZWN0KHRyZWUpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXHRcdFx0ZG9uZSgpO1xuXHRcdH0pO1xuXHR9KTtcblxuXHR0ZXN0KGBzaG91bGQgY3JlYXRlIGxheW91dCB0aHJvdWdoIGNyZWF0ZUpzb25MYXlvdXQgZnVuY3Rpb25gLCAoZG9uZSkgPT4ge1xuXG5cdFx0Y29uc3QgTGF5b3V0ID0gY3JlYXRlSnNvbkxheW91dCh7XG5cdFx0XHRzY2hlbWE6IHtcblx0XHRcdFx0Y29tcG9uZW50OiAnVGV4dCcsXG5cdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0c3R5bGU6IHtcblx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0dGV4dDogJ1RoaXMgY29tcG9uZW50IGlzIGdlbmVyYXRlZCB0aHJvdWdoIEpzb25MYXlvdXQgQ29tcG9uZW50Jyxcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjb25zdCBjb21wb25lbnQgPSBUZXN0UmVuZGVyZXIuY3JlYXRlKFxuXHRcdFx0PEJsdWVCYXNlQXBwPlxuXHRcdFx0XHQ8TGF5b3V0Lz5cblx0XHRcdDwvQmx1ZUJhc2VBcHA+XG5cdFx0KTtcblxuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRjb25zdCB0cmVlID0gY29tcG9uZW50LnRvSlNPTigpO1xuXHRcdFx0ZXhwZWN0KCh0cmVlIGFzIGFueSkucHJvcHMuc3R5bGVbMV0pLnRvTWF0Y2hPYmplY3Qoe1xuXHRcdFx0XHRjb2xvcjogJ3JlZCdcblx0XHRcdH0pO1xuXHRcdFx0ZXhwZWN0KCh0cmVlIGFzIGFueSkuY2hpbGRyZW4uam9pbigpKS50b0JlKCdUaGlzIGNvbXBvbmVudCBpcyBnZW5lcmF0ZWQgdGhyb3VnaCBKc29uTGF5b3V0IENvbXBvbmVudCcpO1xuXHRcdFx0ZXhwZWN0KHRyZWUpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXHRcdFx0ZG9uZSgpO1xuXHRcdH0pO1xuXHR9KTtcblxuXHR0ZXN0KGBzaG91bGQgcmVuZGVyIGEgdGV4dCBjb21wb25lbnQgd2l0aCByZWQgY29sb3IgdGhhdCBpcyBwcm9jZXNzZWQgYnkgZmlsdGVyc2AsIChkb25lKSA9PiB7XG5cblx0XHRjb25zdCBmaWx0ZXIgPSAoc2NoZW1hOiBhbnksIGFyZ3M6IHsgc3R5bGU6IGFueSB9KSA9PiAoe1xuXHRcdFx0Li4uc2NoZW1hLFxuXHRcdFx0cHJvcHM6IHtcblx0XHRcdFx0Li4uc2NoZW1hLnByb3BzLFxuXHRcdFx0XHRzdHlsZToge1xuXHRcdFx0XHRcdC4uLnNjaGVtYS5wcm9wcy5zdHlsZSxcblx0XHRcdFx0XHQuLi5hcmdzLnN0eWxlLFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0dGV4dDogJ0NvbnRlbnQgY2hhbmdlZCBieSBmaWx0ZXIhJyxcblx0XHR9KTtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IFRlc3RSZW5kZXJlci5jcmVhdGUoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHAgZmlsdGVycz17eyAnY29udGVudC1maWx0ZXInOiBmaWx0ZXIgfX0+XG5cdFx0XHRcdDxKc29uTGF5b3V0XG5cdFx0XHRcdFx0ZmlsdGVyPVwiY29udGVudC1maWx0ZXJcIlxuXHRcdFx0XHRcdGFyZ3M9e3sgc3R5bGU6IHsgY29sb3I6ICdibHVlJyB9IH19XG5cdFx0XHRcdFx0c2NoZW1hPXt7XG5cdFx0XHRcdFx0XHRjb21wb25lbnQ6ICdUZXh0Jyxcblx0XHRcdFx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdFx0XHRcdHN0eWxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdyZWQnXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR0ZXh0OiAnVGhpcyBjb21wb25lbnQgaXMgZ2VuZXJhdGVkIHRocm91Z2ggSnNvbkxheW91dCBDb21wb25lbnQnLFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRjb25zdCB0cmVlID0gY29tcG9uZW50LnRvSlNPTigpO1xuXHRcdFx0ZXhwZWN0KCh0cmVlIGFzIGFueSkucHJvcHMuc3R5bGVbMV0pLnRvTWF0Y2hPYmplY3Qoe1xuXHRcdFx0XHRjb2xvcjogJ2JsdWUnXG5cdFx0XHR9KTtcblx0XHRcdGV4cGVjdCgodHJlZSBhcyBhbnkpLmNoaWxkcmVuLmpvaW4oKSkudG9CZSgnQ29udGVudCBjaGFuZ2VkIGJ5IGZpbHRlciEnKTtcblx0XHRcdGV4cGVjdCh0cmVlKS50b01hdGNoU25hcHNob3QoKTtcblx0XHRcdGRvbmUoKTtcblx0XHR9KTtcblx0fSk7XG5cblx0dGVzdChgc2hvdWxkIHJlbmRlciBhIG51bGwgZm9yIHVua25vd24gY29tcG9uZW50YCwgKGRvbmUpID0+IHtcblxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IFRlc3RSZW5kZXJlci5jcmVhdGUoXG5cdFx0XHQ8Qmx1ZUJhc2VBcHA+XG5cdFx0XHRcdDxKc29uTGF5b3V0XG5cdFx0XHRcdFx0c2NoZW1hPXt7XG5cdFx0XHRcdFx0XHRjb21wb25lbnQ6ICdGb28nLFxuXHRcdFx0XHRcdFx0dGV4dDogJ1RoaXMgY29tcG9uZW50IGlzIGdlbmVyYXRlZCB0aHJvdWdoIEpzb25MYXlvdXQgQ29tcG9uZW50Jyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9CbHVlQmFzZUFwcD5cblx0XHQpO1xuXG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGNvbnN0IHRyZWUgPSBjb21wb25lbnQudG9KU09OKCk7XG5cdFx0XHRleHBlY3QodHJlZSkudG9NYXRjaFNuYXBzaG90KCk7XG5cdFx0XHRleHBlY3QoKHRyZWUgYXMgYW55KS5jaGlsZHJlblswXS5jaGlsZHJlbi5qb2luKCkpLnRvQmUoJ/CfmqggQmx1ZUJhc2UgRXJyb3InKTtcblx0XHRcdGV4cGVjdCgodHJlZSBhcyBhbnkpLmNoaWxkcmVuWzFdLmNoaWxkcmVuLmpvaW4oKSlcblx0XHRcdFx0LnRvQmUoJ0NvdWxkIG5vdCBwYXJzZSBSZWFjdCBKU09OIFNjaGVtYS4gUmVhc29uOiBDb3VsZCBub3QgcmVzb2x2ZSBjb21wb25lbnQuJyk7XG5cdFx0XHRkb25lKCk7XG5cdFx0fSk7XG5cdH0pO1xuXG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==