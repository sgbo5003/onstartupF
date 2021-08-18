import axios from "axios";
import React, { useEffect, useState } from "react";
import ReferenceHaveCoin from "./ReferenceHaveCoin";
import ReferenceHistoryCoin from "./ReferenceHistoryCoin";
import ReferenceSidebar from "./ReferenceSidebar";
import ContextMenuIcon from "../../images/Context_menu_icon1.png";

const ReferenceChargeCoin = () => {
  // 상단 메뉴 클릭 감지 state
  const [headerMenuClicked, setHeaderMenuClicked] = useState(false);
  // axios로 받아온 보유코인 data
  const [userHaveCoinData, setUserHaveCoinData] = useState({
    coin: [], // 코인 data들
    price: [], // 가격 data들
    user_coin: "", // 보유한 코인 data
  });
  // axios로 받아온 코인내역 data
  const [userHistoryCoinData, setUserHistoryCoinData] = useState({
    amount: [], // 입금한 가격 data들
    deposit_deduction: [], // 입금한 title data들
    used: [], // 입금 & 차감 data들
    used_sum: "", // 누적 코인 data
  });

  const getUserHaveCoinData = () => {
    // const params = new FormData();
    // params.append("command", "co");
    // params.append("idx", sessionStorage.getItem("user_idx"));
    // axios({
    //   method: "post",
    //   url: "/response/get_info.php",
    //   data: params,
    // })
    //   .then((response) => {
    //     console.log("보유코인 data :", response.data);
    //     setUserHaveCoinData(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const getUserHistoryCoinData = () => {
    // const params = new FormData();
    // params.append("command", "co_use");
    // params.append("idx", sessionStorage.getItem("user_idx"));
    // axios({
    //   method: "post",
    //   url: "/response/get_info.php",
    //   data: params,
    // })
    //   .then((response) => {
    //     console.log("코인내역 data :", response.data);
    //     setUserHistoryCoinData(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const headerHaveMenuHandler = () => {
    setHeaderMenuClicked(false);
  };

  const headerHistoryMenuHandler = () => {
    setHeaderMenuClicked(true);
  };

  useEffect(() => {
    getUserHaveCoinData();
    getUserHistoryCoinData();
  }, []);

  return (
    <>
      <ReferenceSidebar />
      <div className="reference_coin_charge_container">
        <h1>코인 충전하기</h1>
        <div className="reference_coin_charge_container_content">
          <div className="reference_coin_charge_header_container">
            <div className="mypage_profiles_tab_menu_cove">
              <ul className="mypage_profiles_tab_cove">
                <li className="mypage_profiles_list my_comment_tab">
                  <a
                    className={`mypage_profiles_tab_btn my_comment_tab ${
                      headerMenuClicked ? "" : "mypage_profiles_tab_btn_active"
                    }`}
                    onClick={headerHaveMenuHandler}
                  >
                    보유코인
                  </a>
                </li>
                <li className="mypage_profiles_list">
                  <a
                    className={`mypage_profiles_tab_btn my_comment_tab ${
                      headerMenuClicked ? "mypage_profiles_tab_btn_active" : ""
                    }`}
                    onClick={headerHistoryMenuHandler}
                  >
                    코인 내역
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {headerMenuClicked ? (
            <ReferenceHistoryCoin userHistoryCoinData={userHistoryCoinData} />
          ) : (
            <ReferenceHaveCoin userHaveCoinData={userHaveCoinData} />
          )}
        </div>
      </div>
    </>
  );
};

export default ReferenceChargeCoin;
