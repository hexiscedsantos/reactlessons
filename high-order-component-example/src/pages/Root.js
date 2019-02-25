import React from 'react';
import Menu from '../components/Menu';
import { renderRoutes } from "react-router-config";

export default ({ route }) => {
  return (
    <div>
      <Menu />
      {renderRoutes(route.routes)}
    </div>
  );
};