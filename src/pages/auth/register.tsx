import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Auth from 'components/Auth';
import Layout from 'Layouts';
import Socials from 'components/Auth/Socials';

const Input = styled(InputGroup)`
  margin-bottom: 2rem;
`;

export default function Register() {
  const onCheckbox = () => {
    // v will be true or false
  };
  return (
    <Layout title="注册">
      <Auth title="创建一个新账号">
        <form>
          <Input fullWidth>
            <input type="text" placeholder="用户名" />
          </Input>
          <Input fullWidth>
            <input type="email" placeholder="邮箱地址" />
          </Input>
          <Input fullWidth>
            <input type="password" placeholder="密码" />
          </Input>
          <Input fullWidth>
            <input type="password" placeholder="确认密码" />
          </Input>
          <Checkbox checked onChange={onCheckbox}>
            同意{' '}
            <Link href="/">
              <a>Terms & Conditions</a>
            </Link>
          </Checkbox>
          <Button status="Success" type="button" shape="SemiRound" fullWidth>
            注册
          </Button>
        </form>
        <p>
          已经有账号?{' '}
          <Link href="/auth/login">
            <a>去登录</a>
          </Link>
        </p>
      </Auth>
    </Layout>
  );
}
