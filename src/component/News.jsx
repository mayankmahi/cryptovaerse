import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const News = () => {
  const { data, isFetching } = useGetCryptoNewsQuery();

  return <div>News</div>;
};

export default News;
