import { Card } from '@bluebase/components';
import { MockedProvider } from 'react-apollo/test-utils';
import React from 'react';
import { SignupForm } from './SignupForm';
import { mocks } from '.';
import storiesOf from '@bluebase/storybook-addon';

storiesOf('JsonGraphqlForm', module)


.add('With Network Error', () => (
	<Card style={{ width: 400, margin: 40 }}>
		<SignupForm />
	</Card>
))

.add('With Authentication Error', () => (
	<Card style={{ width: 400, margin: 40 }}>
		<MockedProvider mocks={[mocks.graphQLErrorsUnAuthenticated]} addTypename={false}>
			<SignupForm />
		</MockedProvider>
	</Card>
))

.add('With Bad User Input', () => (
	<Card style={{ width: 400, margin: 40 }}>
		<MockedProvider mocks={[mocks.graphQLErrorsBadUserInput]} addTypename={false}>
			<SignupForm />
		</MockedProvider>
	</Card>
))

.add('Success', () => (
	<Card style={{ width: 400, margin: 40 }}>
		<MockedProvider mocks={[mocks.success]} addTypename={false}>
			<SignupForm />
		</MockedProvider>
	</Card>
))
;
