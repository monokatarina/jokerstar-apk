import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  padding: 12px;
  background: #ff4500;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: opacity 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: #ff3333;
  text-align: center;
`;

const AuthForm = ({ title, children, onSubmit, error, isLoading }) => {
  return (
    <FormContainer>
      <h2>{title}</h2>
      <StyledForm onSubmit={onSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {children}
      </StyledForm>
    </FormContainer>
  );
};

export default AuthForm;