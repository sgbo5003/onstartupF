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
import defaultUserImg from "../images/default_user.png";
import Mypage from "../pages/Mypage/Mypage";
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
import ReferenceProduct from "./ReferenceProduct";
import Question from "../pages/Setting/Question";
import Sidebar from "./Sidebar";

const AppRouter = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isDropClick, setIsDropClick] = useState(false);

  function checkIsLogin() {
    if (sessionStorage.length < 1) {
      console.log("isLogin1 ?? :: ", isLogin);
    } else {
      setIsLogin(true);
      // console.log("isLogin2 ?? :: ", isLogin);
    }
  }

  function headerIconTrue() {
    return (
      <h1 className="mypage_area">
        <Link className="mypage_photo_cove" to="/Mypage">
          <img
            className="mypage_photo"
            src={defaultUserImg}
            alt="default_user.png"
          />
        </Link>
      </h1>
    );
  }

  function headerTextTrue() {
    return (
      <div className="coar_area">
        <p>
          <Link to="/Join">로그인</Link>
        </p>
      </div>
    );
  }

  useEffect(() => {
    checkIsLogin();
  });

  return (
    <>
      {isLogin ? (
        <Header
          isDropClick={isDropClick}
          setIsDropClick={setIsDropClick}
          isLoginTrue={headerIconTrue()}
        />
      ) : (
        <Header
          isDropClick={isDropClick}
          setIsDropClick={setIsDropClick}
          isLoginTrue={headerTextTrue()}
        />
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/MiddleCategory/:id" component={MiddleCategory} />
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
        <Route exact path="/Mypage" component={Mypage} />
        <Route exact path="/MypageEdit" component={MypageEdit} />
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
