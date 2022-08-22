// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { api } from '../config';
import { Layout, Row, Col, Card, List, ListItem, User } from '@paljs/ui';

export default function Index(props) {
  const router = useRouter();
  const [list, setList] = useState([]);

  const fetchData =  () => fetch(`${api}/all-actors`).then((r) => {
    r.json().then((result) => {
      setList(result.data);
    });
  });

  useEffect(() => {
    fetchData()
    const timer = setInterval(fetchData, 60000)
    return () => clearInterval(timer)
  }, []);
  return (
    <Layout title="List">
      <Row>
        <Col breakPoint={{ xs: 12, md: 12 }}>
          <Card size="Small">
            <header>Fruit List</header>
            <List>
              {list.map((actor, index) => (
                <ListItem key={index}>
                  <p>{actor.actorname}</p>
                  ---
                  <p style={{background: actor.onlinestatus? 'green': ''}} >online: {actor.onlinestatus === 1 ? 'true': 'false'}</p>
                  ---
                  <p>cicle: {actor.circle}</p>
                  ---
                  <p>level: {actor.level}</p>
                  ---
                  <p>totalonlinesecond: {actor.totalonlinesecond}</p>
                </ListItem>
              ))}
            </List>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}
