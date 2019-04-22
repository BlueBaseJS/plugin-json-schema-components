"use strict";
// import { BlueBaseApp } from '@bluebase/core';
// import { FormSubmitButton } from '../FormSubmitButton';
// import { Formik } from 'formik';
// import MaterialUIPlugin from '@bluebase/plugin-material-ui';
// import Plugin from '../../../index';
// import React from 'react';
// import { mount } from 'enzyme';
// import { waitForElement } from 'enzyme-async-helpers';
// const fieldProps = {
// 	name: 'submit',
// 	title: 'Login',
// 	type: 'submit',
// };
// const initialValues = {
// };
// describe('FormSubmitButton', () => {
// 	it('should render all form fields in the schema', async () => {
// 		const onSubmit = jest.fn();
// 		const component = mount(
// 			<BlueBaseApp plugins={[Plugin, MaterialUIPlugin]}>
// 				<Formik initialValues={initialValues} onSubmit={onSubmit}>
// 					<FormSubmitButton {...fieldProps as any} />
// 				</Formik>
// 			</BlueBaseApp>
// 		);
// 		await waitForElement(component as any, FormSubmitButton);
// 		 expect(component).toMatchSnapshot();
// 		// Check fields
// 		expect(component.find('Button').first().prop('disabled')).toBe(false);
// 		expect(component.find('Button').first().prop('loading')).toBe(false);
// 		expect(component.find('Button').first().prop('title')).toBe('Login');
// 		expect(component.find('Button').first().prop('type')).toBe('submit');
// 		const onPress: any = component.find('Button').first().prop('onPress');
// 		onPress();
// 		// component.update();
// 		// const formik: any = component.find('Button').first().prop('formik');
// 		// formik.handleSubmit();
// 		// component.update();
// 		setTimeout(() => {
// 			 expect(component).toMatchSnapshot();
// 			expect(onSubmit).toHaveBeenCalledTimes(1);
// 		});
// 	});
// });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9GaWVsZHMvX190ZXN0c19fL0Zvcm1TdWJtaXRCdXR0b24udGVzdC50c3giLCJtYXBwaW5ncyI6IjtBQUFBLGdEQUFnRDtBQUNoRCwwREFBMEQ7QUFDMUQsbUNBQW1DO0FBQ25DLCtEQUErRDtBQUMvRCx1Q0FBdUM7QUFDdkMsNkJBQTZCO0FBQzdCLGtDQUFrQztBQUNsQyx5REFBeUQ7QUFFekQsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLEtBQUs7QUFFTCwwQkFBMEI7QUFDMUIsS0FBSztBQUdMLHVDQUF1QztBQUV2QyxtRUFBbUU7QUFFbkUsZ0NBQWdDO0FBRWhDLDZCQUE2QjtBQUM3Qix3REFBd0Q7QUFDeEQsaUVBQWlFO0FBQ2pFLG1EQUFtRDtBQUNuRCxnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCLE9BQU87QUFFUCw4REFBOEQ7QUFFOUQsMENBQTBDO0FBRTFDLG9CQUFvQjtBQUNwQiwyRUFBMkU7QUFDM0UsMEVBQTBFO0FBQzFFLDBFQUEwRTtBQUMxRSwwRUFBMEU7QUFFMUUsMkVBQTJFO0FBQzNFLGVBQWU7QUFDZiwyQkFBMkI7QUFHM0IsNEVBQTRFO0FBQzVFLDhCQUE4QjtBQUM5QiwyQkFBMkI7QUFFM0IsdUJBQXVCO0FBQ3ZCLDJDQUEyQztBQUMzQyxnREFBZ0Q7QUFDaEQsUUFBUTtBQUVSLE9BQU87QUFDUCxNQUFNIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vRmllbGRzL19fdGVzdHNfXy9Gb3JtU3VibWl0QnV0dG9uLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IEJsdWVCYXNlQXBwIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuLy8gaW1wb3J0IHsgRm9ybVN1Ym1pdEJ1dHRvbiB9IGZyb20gJy4uL0Zvcm1TdWJtaXRCdXR0b24nO1xuLy8gaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcbi8vIGltcG9ydCBNYXRlcmlhbFVJUGx1Z2luIGZyb20gJ0BibHVlYmFzZS9wbHVnaW4tbWF0ZXJpYWwtdWknO1xuLy8gaW1wb3J0IFBsdWdpbiBmcm9tICcuLi8uLi8uLi9pbmRleCc7XG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuLy8gaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5cbi8vIGNvbnN0IGZpZWxkUHJvcHMgPSB7XG4vLyBcdG5hbWU6ICdzdWJtaXQnLFxuLy8gXHR0aXRsZTogJ0xvZ2luJyxcbi8vIFx0dHlwZTogJ3N1Ym1pdCcsXG4vLyB9O1xuXG4vLyBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xuLy8gfTtcblxuXG4vLyBkZXNjcmliZSgnRm9ybVN1Ym1pdEJ1dHRvbicsICgpID0+IHtcblx0XG4vLyBcdGl0KCdzaG91bGQgcmVuZGVyIGFsbCBmb3JtIGZpZWxkcyBpbiB0aGUgc2NoZW1hJywgYXN5bmMgKCkgPT4ge1xuXG4vLyBcdFx0Y29uc3Qgb25TdWJtaXQgPSBqZXN0LmZuKCk7XG5cbi8vIFx0XHRjb25zdCBjb21wb25lbnQgPSBtb3VudChcbi8vIFx0XHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luLCBNYXRlcmlhbFVJUGx1Z2luXX0+XG4vLyBcdFx0XHRcdDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gb25TdWJtaXQ9e29uU3VibWl0fT5cbi8vIFx0XHRcdFx0XHQ8Rm9ybVN1Ym1pdEJ1dHRvbiB7Li4uZmllbGRQcm9wcyBhcyBhbnl9IC8+XG4vLyBcdFx0XHRcdDwvRm9ybWlrPlxuLy8gXHRcdFx0PC9CbHVlQmFzZUFwcD5cbi8vIFx0XHQpO1xuXG4vLyBcdFx0YXdhaXQgd2FpdEZvckVsZW1lbnQoY29tcG9uZW50IGFzIGFueSwgRm9ybVN1Ym1pdEJ1dHRvbik7XG5cbi8vIFx0XHQgZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG5cbi8vIFx0XHQvLyBDaGVjayBmaWVsZHNcbi8vIFx0XHRleHBlY3QoY29tcG9uZW50LmZpbmQoJ0J1dHRvbicpLmZpcnN0KCkucHJvcCgnZGlzYWJsZWQnKSkudG9CZShmYWxzZSk7XG4vLyBcdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdCdXR0b24nKS5maXJzdCgpLnByb3AoJ2xvYWRpbmcnKSkudG9CZShmYWxzZSk7XG4vLyBcdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdCdXR0b24nKS5maXJzdCgpLnByb3AoJ3RpdGxlJykpLnRvQmUoJ0xvZ2luJyk7XG4vLyBcdFx0ZXhwZWN0KGNvbXBvbmVudC5maW5kKCdCdXR0b24nKS5maXJzdCgpLnByb3AoJ3R5cGUnKSkudG9CZSgnc3VibWl0Jyk7XG5cbi8vIFx0XHRjb25zdCBvblByZXNzOiBhbnkgPSBjb21wb25lbnQuZmluZCgnQnV0dG9uJykuZmlyc3QoKS5wcm9wKCdvblByZXNzJyk7XG4vLyBcdFx0b25QcmVzcygpO1xuLy8gXHRcdC8vIGNvbXBvbmVudC51cGRhdGUoKTtcblxuXG4vLyBcdFx0Ly8gY29uc3QgZm9ybWlrOiBhbnkgPSBjb21wb25lbnQuZmluZCgnQnV0dG9uJykuZmlyc3QoKS5wcm9wKCdmb3JtaWsnKTtcbi8vIFx0XHQvLyBmb3JtaWsuaGFuZGxlU3VibWl0KCk7XG4vLyBcdFx0Ly8gY29tcG9uZW50LnVwZGF0ZSgpO1xuXG4vLyBcdFx0c2V0VGltZW91dCgoKSA9PiB7XG4vLyBcdFx0XHQgZXhwZWN0KGNvbXBvbmVudCkudG9NYXRjaFNuYXBzaG90KCk7XG4vLyBcdFx0XHRleHBlY3Qob25TdWJtaXQpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcbi8vIFx0XHR9KTtcblxuLy8gXHR9KTtcbi8vIH0pO1xuXG4iXSwidmVyc2lvbiI6M30=