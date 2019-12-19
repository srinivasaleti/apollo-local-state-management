import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useApolloClient } from "@apollo/react-hooks";

export const GET_ALERT_MESSAGE = gql`
  query GetRandomNumber {
    randomNumber @client
  }
`;

export default function RandomNumber() {
  const { data = {} } = useQuery(GET_ALERT_MESSAGE);
  const client = useApolloClient();

  return (
    <div>
      <div>
        <button
          onClick={() => client.writeData({ data: { randomNumber: Math.random() } })}
          style={{ width: 200, height: 40, fontSize: 16, fontWeight: "bold", background: "#ff6b15", color: "white" }}
        >Write Random</button>
      </div>
      <h1>
        {data.randomNumber}
      </h1>
    </div>
  )
}
