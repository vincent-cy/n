// @ts-nocheck

import React from 'react';
import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import Link from 'next/link';
import Layout from 'Layouts';
import Auth, { Group } from 'components/Auth';

export default function RequestPassword() {
  const handleFind = () => {
    
  }
  return (
    <Layout title="找回密码">
      <Auth title="找回密码" subTitle="输入邮箱地址，稍后会发送邮件到邮箱">
        <form>
          <InputGroup fullWidth>
            <input type="email" placeholder="邮箱地址" />
          </InputGroup>
          <Button status="Success" onClick={handleFind} type="button" shape="SemiRound" fullWidth>
            找回密码
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
