import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Context } from 'koa';
import { api } from 'config';

export default function Index(props) {
  const router = useRouter();
  useEffect(() => {
    // router.push('/extra-components/accordion');
  }),
    [];
  return <div>{JSON.stringify(props, null,4)}</div>;
}

export async function getServerSideProps(ctx: Context): Promise<any> {
  const { query } = ctx;
  console.log('ssssss', query);
  try {
    // console.log('getConnection', getConnection('actor_c1'));
    const a = await fetch(`${api}/actor`)
    const r = await a.json()
      // const { data } = await request.get(`/article/${id}`, {});
      // return { props: { article: data } };
      return {props:{r}}
  } catch (e) {
    console.log('e', e);
    
      return { props: { error: 'article not exists.' } };
  }
}
