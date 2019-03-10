import { JsonLayout, JsonLayoutProps } from './JsonLayout';
import React from 'react';

export const createJsonLayout = (options: JsonLayoutProps) => () => (<JsonLayout {...options} />);