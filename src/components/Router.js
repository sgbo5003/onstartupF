import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Community from "../pages/Community";
import Reference from "../pages/Reference/Reference";
import Write from "../pages/Write";
import Join from "../pages/Join";
import Header from "./Header";
import SaveWrite from "../pages/SaveWrite";
import Login from "../pages/Login";

import MypageInitial from "../pages/Mypage/MypageInitial";
import AccountManagement from "../pages/Setting/AccountManagement";
import ChangePassword from "../pages/Setting/ChangePassword";
import Notice from "../pages/Setting//Notice";
import Inquiry from "../pages/Setting/Inquiry";
import MypageEdit from "../pages/Mypage/MypageEdit";
import MiddleCategory from "../pages/MiddleCategory";
import ReferenceStorageBox from "../pages/Reference/ReferenceStorageBox";
import ReferenceChargeCoin from "../pages/Reference/ReferenceChargeCoin";
import ReferenceGiftCoin from "../pages/Reference/ReferenceGiftCoin";
import ReferenceMiddleCategory from "../pages/ReferenceMiddleCategory";
import ReferenceProduct from "./Reference/ReferenceProduct";
import Question from "../pages/Setting/Question";
import Sidebar from "./Sidebar";
import Message from "../pages/Mypage/Message";

const AppRouter = () => {

  const [isLogin, setIsLogin] = useState(false);

  function checkIsLogin() {
    if (sessionStorage.length < 1) {
      console.log("isLogin1 ?? :: ", isLogin);
    } else {
      setIsLogin(true);
      // console.log("isLogin2 ?? :: ", isLogin);
    }
  }

  useEffect(() => {
    checkIsLogin();
  });

  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/MiddleCategory:id" component={MiddleCategory} />
        <Route path="/Community" component={Community} />
        <Route exact path="/Reference" component={Reference} />
        <Route
          exact
          path="/ReferenceStorageBox"
          component={ReferenceStorageBox}
        />
        <Route
          exact
          path="/ReferenceChargeCoin"
          component={ReferenceChargeCoin}
        />
        <Route exact path="/ReferenceGiftCoin" component={ReferenceGiftCoin} />
        <Route
          exact
          path="/ReferenceMiddleCategory"
          component={ReferenceMiddleCategory}
        />
        <Route exact path="/ReferenceProduct" component={ReferenceProduct} />
        <Route path="/Write" component={Write} />
        <Route
          path="/Join"
          component={Join}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
        <Route
          path="/Login"
          component={Login}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
        <Route path="/SaveWrite" component={SaveWrite} />
        <Route exact path="/MypageInitial" component={MypageInitial} />
        <Route exact path="/MypageEdit" component={MypageEdit} />
        <Route exact path="/Message" component={Message} />
        <Route path="/AccountManagement" component={AccountManagement} />
        <Route path="/ChangePassword" component={ChangePassword} />
        <Route path="/Notice" component={Notice} />
        <Route path="/Inquiry" component={Inquiry} />
        <Route path="/Question" component={Question} />
      </Switch>
    </>
  );
};

export default AppRouter;
