// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { useRef, useState, createContext } from 'react';

interface FormFieldMetaData {
  isValid: boolean;
  ref: {
    focus: () => void;
  } | null;
}

interface AddErrorField {
  (fieldName: string, fieldData: FormFieldMetaData): void;
}

interface BasicValidationContext {
  isFormSubmitted: boolean;
  addErrorField: AddErrorField;
}

interface UseBasicValidationResult {
  /**
   * Indicates if the form was already submitted
   */
  isFormSubmitted: boolean;
  /**
   * Update the isFormSubmitted - set it to true when the user submits the form.
   */
  setIsFormSubmitted: (isSubmitted: boolean) => void;
  /**
   * Registers the field field including some metadata where the fieldName is used as unique identifier.
   * Registration should happen in the order in the DOM which matches the visual one.
   * Fields are stored in insertion order, the ordering is used to distinguish the first invalid field to focus on.
   */
  addErrorField: AddErrorField;
  /**
   * Focus the first error field when called.
   */
  focusFirstErrorField: () => void;
}

/**
 * Hook used for a basic form validation which enables focusing the first invalid form element after submitting the form.
 */
export function useBasicValidation(): UseBasicValidationResult {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const formFieldErrorRefs = useRef(new Map<string, FormFieldMetaData>());

  const addErrorField = (key: string, fieldData: FormFieldMetaData) => formFieldErrorRefs.current?.set(key, fieldData);

  const focusFirstErrorField = () => {
    [...(formFieldErrorRefs.current || [])].find(([, { isValid, ref }]) => {
      if (!isValid && ref) {
        ref.focus();
      }
      return !isValid;
    });
  };

  return { focusFirstErrorField, isFormSubmitted, setIsFormSubmitted, addErrorField };
}

export const BasicValidationContext = createContext<BasicValidationContext>({
  isFormSubmitted: false,
  addErrorField: (key, ref) => null,
});
