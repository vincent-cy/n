import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Context } from 'koa';

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push('/extra-components/accordion');
  }),
    [];
  return <div>22</div>;
}

// export async function getServerSideProps(ctx: Context): Promise<any> {
//   const { query: { id } } = ctx;
//   console.log('ssssss', ctx);
//   try {
//     // console.log('getConnection', getConnection('actor_c1'));
//       // const { data } = await request.get(`/article/${id}`, {});
//       // return { props: { article: data } };
//       return {props:{}}
//   } catch (e) {
//       return { props: { error: 'article not exists.' } };
//   }
// }
