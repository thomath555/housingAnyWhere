// Core
import React from 'react';

// Styles and Assets
import { LabelWrapper } from './styles';

// Types
import { Props } from './types';

const Label: React.FC<Props> = (props: Props) => {
  const {
    label
  } = props;
  return (
    <LabelWrapper {...props}>
      {label}
    </LabelWrapper>
  );
};

export default Label;
