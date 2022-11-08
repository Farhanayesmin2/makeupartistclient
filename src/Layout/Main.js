import React from 'react';
import { Outlet } from 'react-router-dom';
import Footers from '../Pages/Shared/Footers/Footers';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footers></Footers>

        </div>
    );
};

export default Main;