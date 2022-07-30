import React, { Component, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_ALL } from "../GraphQL/Queries";

export default class GetAllCategory extends Component {

  constructor() {
    super();
    this.state = 
  }

  const {data} = useQuery(LOAD_ALL);

  useEffect(() => {
    console.log(data)
  }, [data]);

  render() {
    return <div>GetProducts</div>;
  }
}
