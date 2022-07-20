import React from 'react';
import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import Link from 'next/link';

import Layout from 'Layouts';
import Auth, { Group } from 'components/Auth';

export default function ResetPassword() {
  return (
    <Layout title="更改密码">
      <Auth title="更改密码" subTitle="请输入新密码">
        <form>
          <InputGroup fullWidth>
            <input type="password" placeholder="新密码" />
          </InputGroup>
          <InputGroup fullWidth>
            <input type="password" placeholder="确认新密码" />
          </InputGroup>
          <Button status="Success" type="button" shape="SemiRound" fullWidth>
            提交
          </Button>
        </form>
        <Group>
          <Link href="/auth/login">
            <a>去登录</a>
          </Link>
          <Link href="/auth/register">
            <a>注册</a>
          </Link>
        </Group>
      </Auth>
    </Layout>
  );
}
