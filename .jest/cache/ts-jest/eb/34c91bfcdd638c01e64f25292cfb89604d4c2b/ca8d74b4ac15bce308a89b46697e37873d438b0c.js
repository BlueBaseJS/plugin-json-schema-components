"use strict";
// import { BlueBaseApp } from '@bluebase/core';
// import { FormResetButton } from '../FormResetButton';
// import { Formik } from 'formik';
// import MaterialUIPlugin from '@bluebase/plugin-material-ui';
// import Plugin from '../../../index';
// import React from 'react';
// import { mount } from 'enzyme';
// import { waitForElement } from 'enzyme-async-helpers';
// const fieldProps = {
// 	name: 'reset',
// 	type: 'reset',
// };
// const initialValues = {
// };
// describe('FormResetButton', () => {
// 	it('should render all form fields in the schema', async () => {
// 		const onSubmit = jest.fn();
// 		const component = mount(
// 			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
// 				<Formik initialValues={initialValues} onSubmit={onSubmit}>
// 					<FormResetButton {...fieldProps as any} />
// 				</Formik>
// 			</BlueBaseApp>
// 		);
// 			//console.log('kkkk',component)
// 		await waitForElement(component as any, FormResetButton);
// 		// expect(component).toMatchSnapshot();
// 		// Check fields
// 		expect(component.find('Button').first().prop('title')).toBe('Reset');
// 		expect(component.find('Button').first().prop('type')).toBe('reset');
// 	});
// });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1SZXNldEJ1dHRvbi50ZXN0LnRzeCIsIm1hcHBpbmdzIjoiO0FBQUEsZ0RBQWdEO0FBQ2hELHdEQUF3RDtBQUN4RCxtQ0FBbUM7QUFDbkMsK0RBQStEO0FBQy9ELHVDQUF1QztBQUN2Qyw2QkFBNkI7QUFDN0Isa0NBQWtDO0FBQ2xDLHlEQUF5RDtBQUV6RCx1QkFBdUI7QUFDdkIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixLQUFLO0FBRUwsMEJBQTBCO0FBQzFCLEtBQUs7QUFHTCxzQ0FBc0M7QUFHdEMsbUVBQW1FO0FBRW5FLGdDQUFnQztBQUVoQyw2QkFBNkI7QUFDN0Isd0RBQXdEO0FBQ3hELGlFQUFpRTtBQUNqRSxrREFBa0Q7QUFDbEQsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQixPQUFPO0FBQ1AscUNBQXFDO0FBQ3JDLDZEQUE2RDtBQUU3RCw0Q0FBNEM7QUFFNUMsb0JBQW9CO0FBQ3BCLDBFQUEwRTtBQUMxRSx5RUFBeUU7QUFDekUsT0FBTztBQUNQLE1BQU0iLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1SZXNldEJ1dHRvbi50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBCbHVlQmFzZUFwcCB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbi8vIGltcG9ydCB7IEZvcm1SZXNldEJ1dHRvbiB9IGZyb20gJy4uL0Zvcm1SZXNldEJ1dHRvbic7XG4vLyBpbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xuLy8gaW1wb3J0IE1hdGVyaWFsVUlQbHVnaW4gZnJvbSAnQGJsdWViYXNlL3BsdWdpbi1tYXRlcmlhbC11aSc7XG4vLyBpbXBvcnQgUGx1Z2luIGZyb20gJy4uLy4uLy4uL2luZGV4Jztcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XG4vLyBpbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcblxuLy8gY29uc3QgZmllbGRQcm9wcyA9IHtcbi8vIFx0bmFtZTogJ3Jlc2V0Jyxcbi8vIFx0dHlwZTogJ3Jlc2V0Jyxcbi8vIH07XG5cbi8vIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG4vLyB9O1xuXG5cbi8vIGRlc2NyaWJlKCdGb3JtUmVzZXRCdXR0b24nLCAoKSA9PiB7XG5cblxuLy8gXHRpdCgnc2hvdWxkIHJlbmRlciBhbGwgZm9ybSBmaWVsZHMgaW4gdGhlIHNjaGVtYScsIGFzeW5jICgpID0+IHtcblxuLy8gXHRcdGNvbnN0IG9uU3VibWl0ID0gamVzdC5mbigpO1xuXG4vLyBcdFx0Y29uc3QgY29tcG9uZW50ID0gbW91bnQoXG4vLyBcdFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbiwgTWF0ZXJpYWxVSVBsdWdpbl19PlxuLy8gXHRcdFx0XHQ8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0+XG4vLyBcdFx0XHRcdFx0PEZvcm1SZXNldEJ1dHRvbiB7Li4uZmllbGRQcm9wcyBhcyBhbnl9IC8+XG4vLyBcdFx0XHRcdDwvRm9ybWlrPlxuLy8gXHRcdFx0PC9CbHVlQmFzZUFwcD5cbi8vIFx0XHQpO1xuLy8gXHRcdFx0Ly9jb25zb2xlLmxvZygna2traycsY29tcG9uZW50KVxuLy8gXHRcdGF3YWl0IHdhaXRGb3JFbGVtZW50KGNvbXBvbmVudCBhcyBhbnksIEZvcm1SZXNldEJ1dHRvbik7XG5cbi8vIFx0XHQvLyBleHBlY3QoY29tcG9uZW50KS50b01hdGNoU25hcHNob3QoKTtcblxuLy8gXHRcdC8vIENoZWNrIGZpZWxkc1xuLy8gXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQnV0dG9uJykuZmlyc3QoKS5wcm9wKCd0aXRsZScpKS50b0JlKCdSZXNldCcpO1xuLy8gXHRcdGV4cGVjdChjb21wb25lbnQuZmluZCgnQnV0dG9uJykuZmlyc3QoKS5wcm9wKCd0eXBlJykpLnRvQmUoJ3Jlc2V0Jyk7XG4vLyBcdH0pO1xuLy8gfSk7XG4iXSwidmVyc2lvbiI6M30=