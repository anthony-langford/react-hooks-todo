import React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button``;

export default function Button({ children }) {
  return (
    <ButtonBase>
      { children }
    </ButtonBase>
  );
};