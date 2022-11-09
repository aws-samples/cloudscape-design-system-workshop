// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import { createContext } from 'react';

interface FormContext {
  isFormSubmitted: boolean;
}

export const FormContext = createContext<FormContext>({
  isFormSubmitted: false,
});
