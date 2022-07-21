import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import React, { useState } from 'react';
import Link from 'next/link';

import Auth, { Group } from 'components/Auth';
import Layout from 'Layouts';

export default function Login() {
  const [check, setChecked] = useState<boolean>(false);

  const onCheckbox = () => {
    // v will be true or false
    setChecked(!check);
  };
  const handleLogin = () => {
    console.log('登录');
  };
  return (
    <Layout title="登录">
      <Auth title="登录" subTitle="你好! 输入账号进行登录">
        <form>
          <InputGroup fullWidth>
            <input type="email" placeholder="Email Address" />
          </InputGroup>
          <InputGroup fullWidth>
            <input type="password" placeholder="密码" />
          </InputGroup>
          <Group>
            <Checkbox style={{ margin: 0 }} checked={check} onChange={onCheckbox} children={'记住'} />
            <Link href="/auth/request-password">
              <a>忘记密码?</a>
            </Link>
          </Group>
          <Button status="Success" onClick={handleLogin} type="button" shape="SemiRound" fullWidth>
            登录
          </Button>
        </form>
        {/* <Socials /> */}
        <p>
          还没账号?
          <Link href="/auth/register">
            <a>注册</a>
          </Link>
        </p>
      </Auth>
    </Layout>
  );
}
