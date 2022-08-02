// @ts-nocheck
import styled from 'styled-components';
import { Card, CardBody } from '@paljs/ui/Card';
import { breakpointDown } from '@paljs/ui/breakpoints';
import React from 'react';

const AuthStyle = styled.div<{ subTitle?: string }>`
  margin: auto;
  display: block;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  max-width: 35rem;
  padding: 2rem 2rem;
  border-radius: 0.2rem;
  a {
    font-weight: 600;
  }
  & > h1 {
    margin-bottom: ${({ subTitle }) => (subTitle ? '0.75' : '2')}rem;
    margin-top: 0;
    text-align: center;
  }
  & > p {
    margin-bottom: 2rem;
    text-align: center;
  }
  form {
    width: 100%;
    & > *:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;
export const Group = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardAuth = styled(Card)`
  margin-bottom: 0;
  height: calc(100vh - 5rem);
  background-image: url('/site/image/1.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  ${breakpointDown('sm')`
    height: 100vh;
  `}
  ${CardBody} {
    display: flex;
  }
`;
interface AuthProps {
  title: string;
  subTitle?: string;
}
const Auth: React.FC<AuthProps> = ({ subTitle, title, children }) => {
  return (
    <CardAuth>
      <CardBody>
        <AuthStyle subTitle={subTitle}>
          <h1>{title}</h1>
          {subTitle && <p>{subTitle}</p>}
          {children}
        </AuthStyle>
      </CardBody>
    </CardAuth>
  );
};
export default Auth;
