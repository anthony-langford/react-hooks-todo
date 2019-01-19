import React from 'react';
import styled from 'styled-components';

import useInputState from './useInputState';

const InputElement = styled.input``;

export default function Input() {
  const { value, onChange } = useInputState();

  return (
    <InputElement value={value} onChange={onChange} />
  );
}