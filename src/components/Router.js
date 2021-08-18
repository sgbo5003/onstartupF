import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "../components/Main/Home";
import Community from "./Community/Community";
import Reference from "./Reference/Reference";
import Write from "../components/Write/Write";
import Join from "./Join/Join";
import Header from "./Header/Header";
import SaveWrite from "./Write/SaveWrite";
import Login from "./Login/Login";
import MypageInitial from "../components/Mypage/MypageInitial";
import AccountManagement from "../components/Setting/AccountManagement";
import ChangePassword from "../components/Setting/ChangePassword";
import Notice from "../components/Setting//Notice";
import Inquiry from "../components/Setting/Inquiry";
import MypageEdit from "../components/Mypage/MypageEdit";
import MiddleCategory from "./Main/MiddleCategory";
import ReferenceStorageBox from "../components/Reference/ReferenceStorageBox";
import ReferenceChargeCoin from "../components/Reference/ReferenceChargeCoin";
import ReferenceGiftCoin from "../components/Reference/ReferenceGiftCoin";
import ReferenceMiddleCategory from "../components/Reference/ReferenceMiddleCategory";
import ReferenceProduct from "./Reference/ReferenceProduct";
import Question from "../components/Setting/Question";
import Sidebar from "./Main/Sidebar";
import Message from "../components/Mypage/Message";
import MypageOther from "../components/Mypage/MypageOther";
import FindPassword from "./Login/FindPassword";
import QuestionWrite from "./Setting/QuestionWrite";
import NoticeWrite from "./Setting/NoticeWrite";
import NoticeDetail from "./Setting/NoticeDetail";
import QuestionDetail from "./Setting/QuestionDetail";

const AppRouter = () => {
  //   const [isLogin, setIsLogin] = useState(false);

  //   function checkIsLogin() {
  //     if (sessionStorage.length < 1) {
  //       console.log("isLogin1 ?? :: ", isLogin);
  //     } else {
  //       setIsLogin(true);
  //       // console.log("isLogin2 ?? :: ", isLogin);
  //     }
  //   }

  //   useEffect(() => {
  //     checkIsLogin();
  //   });

  return (
    <>
      <Header />
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
          //   isLogin={isLogin}
          //   setIsLogin={setIsLogin}
        />
        <Route
          path="/Login"
          component={Login}
          //   isLogin={isLogin}
          //   setIsLogin={setIsLogin}
        />
        <Route path="/FindPassword" component={FindPassword} />
        <Route path="/SaveWrite" component={SaveWrite} />
        <Route path="/MypageOther" component={MypageOther} />
        <Route exact path="/MypageInitial" component={MypageInitial} />
        <Route exact path="/MypageEdit" component={MypageEdit} />
        <Route exact path="/Message" component={Message} />
        <Route path="/AccountManagement" component={AccountManagement} />
        <Route path="/ChangePassword" component={ChangePassword} />
        <Route path="/Notice" component={Notice} />
        <Route path="/NoticeWrite" component={NoticeWrite} />
        <Route path="/NoticeDetail" component={NoticeDetail} />
        <Route path="/Inquiry" component={Inquiry} />
        <Route path="/Question" component={Question} />
        <Route path="/QuestionWrite" component={QuestionWrite} />
        <Route path="/QuestionDetail" component={QuestionDetail} />
      </Switch>
    </>
  );
};

export default AppRouter;
