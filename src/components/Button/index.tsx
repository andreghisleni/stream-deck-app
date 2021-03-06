import React, { useCallback } from 'react';
import { IconType } from 'react-icons';
import { Container } from './styles';

interface ButtonProps {
  icon?: IconType;
  label?: string;
  action?: string;
}
const Button: React.FC<ButtonProps> = ({ label, icon: Icon, action }) => {
  const handleBack = useCallback(async () => {
    action && console.log(action);
  }, [action]);
  return (
    <Container className={`${!action ? 'desabled' : ''}`} onClick={handleBack}>
      {Icon && <Icon />}
      {label && <p>{label}</p>}
    </Container>
  );
};

export default Button;
