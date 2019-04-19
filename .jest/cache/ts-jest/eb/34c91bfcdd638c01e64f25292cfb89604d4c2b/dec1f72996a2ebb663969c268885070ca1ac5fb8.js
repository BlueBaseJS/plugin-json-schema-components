"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@bluebase/components");
const DefaultInputs = ['FormTextInput', 'TextInput', 'Noop'];
const DefaultButtons = ['Button', 'Noop'];
const FieldResolutionMap = {
    actions: ['FormActions', 'Noop'],
    checkbox: ['FormCheckboxInput', 'Noop'],
    color: ['FormColorInput', ...DefaultInputs],
    component: ['JsonLayout', 'Noop'],
    date: ['FormDateInput', ...DefaultInputs],
    email: ['FormEmailInput', ...DefaultInputs],
    number: ['FormNumberInput', ...DefaultInputs],
    password: ['FormPasswordInput', ...DefaultInputs],
    picker: ['FormPickerInput', 'Picker', 'Noop'],
    'radio-group': ['FormRadioGroupInput', 'Noop'],
    range: ['FormRangeInput', ...DefaultInputs],
    reset: ['FormResetButton', ...DefaultButtons],
    search: ['FormSearchInput', ...DefaultInputs],
    submit: ['FormSubmitButton', ...DefaultButtons],
    switch: ['FormSwitchInput', 'FormCheckboxInput', 'Noop'],
    tel: ['FormTelInput', ...DefaultInputs],
    time: ['FormTimeInput', ...DefaultInputs],
    url: ['FormUrlInput', ...DefaultInputs],
};
exports.getFormField = (type) => type && FieldResolutionMap[type]
    ? components_1.getComponent(...FieldResolutionMap[type])
    : components_1.getComponent(...DefaultInputs);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2JsdWViYXNlL3BsdWdpbi1qc29uLXNjaGVtYS1jb21wb25lbnRzL3NyYy9Kc29uRm9ybS9nZXRGb3JtRmllbGQudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBb0Q7QUFFcEQsTUFBTSxhQUFhLEdBQUcsQ0FBQyxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzdELE1BQU0sY0FBYyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRTFDLE1BQU0sa0JBQWtCLEdBQVE7SUFDL0IsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQztJQUNoQyxRQUFRLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUM7SUFDdkMsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxhQUFhLENBQUM7SUFDM0MsU0FBUyxFQUFFLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQztJQUNqQyxJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsR0FBRyxhQUFhLENBQUM7SUFDekMsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxhQUFhLENBQUM7SUFDM0MsTUFBTSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxhQUFhLENBQUM7SUFDN0MsUUFBUSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxhQUFhLENBQUM7SUFDakQsTUFBTSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQztJQUM3QyxhQUFhLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUM7SUFDOUMsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxhQUFhLENBQUM7SUFDM0MsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxjQUFjLENBQUM7SUFDN0MsTUFBTSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxhQUFhLENBQUM7SUFDN0MsTUFBTSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxjQUFjLENBQUM7SUFDL0MsTUFBTSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxDQUFDO0lBQ3hELEdBQUcsRUFBRSxDQUFDLGNBQWMsRUFBRSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsR0FBRyxhQUFhLENBQUM7SUFDekMsR0FBRyxFQUFFLENBQUMsY0FBYyxFQUFFLEdBQUcsYUFBYSxDQUFDO0NBQ3ZDLENBQUM7QUFFVyxRQUFBLFlBQVksR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFLENBQzVDLElBQUksSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7SUFDL0IsQ0FBQyxDQUFDLHlCQUFZLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUMseUJBQVksQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ibHVlYmFzZS9wbHVnaW4tanNvbi1zY2hlbWEtY29tcG9uZW50cy9zcmMvSnNvbkZvcm0vZ2V0Rm9ybUZpZWxkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENvbXBvbmVudCB9IGZyb20gJ0BibHVlYmFzZS9jb21wb25lbnRzJztcblxuY29uc3QgRGVmYXVsdElucHV0cyA9IFsnRm9ybVRleHRJbnB1dCcsICdUZXh0SW5wdXQnLCAnTm9vcCddO1xuY29uc3QgRGVmYXVsdEJ1dHRvbnMgPSBbJ0J1dHRvbicsICdOb29wJ107XG5cbmNvbnN0IEZpZWxkUmVzb2x1dGlvbk1hcDogYW55ID0ge1xuXHRhY3Rpb25zOiBbJ0Zvcm1BY3Rpb25zJywgJ05vb3AnXSxcblx0Y2hlY2tib3g6IFsnRm9ybUNoZWNrYm94SW5wdXQnLCAnTm9vcCddLFxuXHRjb2xvcjogWydGb3JtQ29sb3JJbnB1dCcsIC4uLkRlZmF1bHRJbnB1dHNdLFxuXHRjb21wb25lbnQ6IFsnSnNvbkxheW91dCcsICdOb29wJ10sXG5cdGRhdGU6IFsnRm9ybURhdGVJbnB1dCcsIC4uLkRlZmF1bHRJbnB1dHNdLFxuXHRlbWFpbDogWydGb3JtRW1haWxJbnB1dCcsIC4uLkRlZmF1bHRJbnB1dHNdLFxuXHRudW1iZXI6IFsnRm9ybU51bWJlcklucHV0JywgLi4uRGVmYXVsdElucHV0c10sXG5cdHBhc3N3b3JkOiBbJ0Zvcm1QYXNzd29yZElucHV0JywgLi4uRGVmYXVsdElucHV0c10sXG5cdHBpY2tlcjogWydGb3JtUGlja2VySW5wdXQnLCAnUGlja2VyJywgJ05vb3AnXSxcblx0J3JhZGlvLWdyb3VwJzogWydGb3JtUmFkaW9Hcm91cElucHV0JywgJ05vb3AnXSxcblx0cmFuZ2U6IFsnRm9ybVJhbmdlSW5wdXQnLCAuLi5EZWZhdWx0SW5wdXRzXSxcblx0cmVzZXQ6IFsnRm9ybVJlc2V0QnV0dG9uJywgLi4uRGVmYXVsdEJ1dHRvbnNdLFxuXHRzZWFyY2g6IFsnRm9ybVNlYXJjaElucHV0JywgLi4uRGVmYXVsdElucHV0c10sXG5cdHN1Ym1pdDogWydGb3JtU3VibWl0QnV0dG9uJywgLi4uRGVmYXVsdEJ1dHRvbnNdLFxuXHRzd2l0Y2g6IFsnRm9ybVN3aXRjaElucHV0JywgJ0Zvcm1DaGVja2JveElucHV0JywgJ05vb3AnXSxcblx0dGVsOiBbJ0Zvcm1UZWxJbnB1dCcsIC4uLkRlZmF1bHRJbnB1dHNdLFxuXHR0aW1lOiBbJ0Zvcm1UaW1lSW5wdXQnLCAuLi5EZWZhdWx0SW5wdXRzXSxcblx0dXJsOiBbJ0Zvcm1VcmxJbnB1dCcsIC4uLkRlZmF1bHRJbnB1dHNdLFxufTtcblxuZXhwb3J0IGNvbnN0IGdldEZvcm1GaWVsZCA9ICh0eXBlOiBzdHJpbmcpID0+XG5cdHR5cGUgJiYgRmllbGRSZXNvbHV0aW9uTWFwW3R5cGVdXG5cdFx0PyBnZXRDb21wb25lbnQoLi4uRmllbGRSZXNvbHV0aW9uTWFwW3R5cGVdKVxuXHRcdDogZ2V0Q29tcG9uZW50KC4uLkRlZmF1bHRJbnB1dHMpO1xuIl0sInZlcnNpb24iOjN9