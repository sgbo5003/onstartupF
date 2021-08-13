import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContextMenuIcon from "../../images/Context_menu_icon1.png";
import sideIcon1 from "../../images/Side_icon1.png";
import sideIcon2 from "../../images/Side_icon2.png";
import CategoryIcon1 from "../../images/Category_icon9.png";
import CategoryIcon2 from "../../images/Category_icon10.png";

const ReferenceSidebar = () => {
  const categoryArray = [
    {
      src: CategoryIcon1,
      title: "PDF 교재",
    },
    {
      src: CategoryIcon2,
      title: "상세페이지 제작",
    },
    {
      src: "src/images/Context_menu_icon1.png",
      title: "쇼핑몰 제작",
    },
  ];
  const mainCategoryArray = [
    {
      link: "/Reference",
      imgAlt: "Side_icon1",
      imgSrc: sideIcon1,
      text: "자료실 홈",
    },
    {
      link: "/ReferenceStorageBox",
      imgAlt: "Side_icon2",
      imgSrc: sideIcon2,
      text: "자료보관함",
    },
    {
      link: "/ReferenceChargeCoin",
      imgAlt: "코인",
      imgSrc: ContextMenuIcon,
      text: "코인 충전하기",
    },
    {
      link: "/ReferenceGiftCoin",
      imgAlt: "코인",
      imgSrc: ContextMenuIcon,
      text: "코인 선물받기",
    },
  ];

  const [checkedTopItems, setCheckedTopItems] = useState(new Set()); // 상단 항목 -> 클릭 된 것들 담는 state
  const [checkedBottomItems, setCheckedBottomItems] = useState(false);

  // 자료실 홈 & 자료보관함 & 코인 충전하기 & 코인 선물받기 변경 제어
  const onCheckedTopItemsHandler = () => {
    let itemSet = new Set(checkedTopItems);
    if (location.pathname === "/Reference") {
      itemSet.add("/Reference");
      setCheckedTopItems(itemSet);
    } else if (location.pathname === "/ReferenceStorageBox") {
      itemSet.clear();
      itemSet.add("/ReferenceStorageBox");
      setCheckedTopItems(itemSet);
    } else if (location.pathname === "/ReferenceChargeCoin") {
      itemSet.clear();
      itemSet.add("/ReferenceChargeCoin");
      setCheckedTopItems(itemSet);
    } else if (location.pathname === "/ReferenceGiftCoin") {
      itemSet.clear();
      itemSet.add("/ReferenceGiftCoin");
      setCheckedTopItems(itemSet);
    } else {
      itemSet.clear();
      setCheckedTopItems(itemSet);
    }
  };

  useEffect(() => {
    onCheckedTopItemsHandler();
  }, []);

  return (
    <div className="side_bar_cove">
      <div className="side_bar">
        {/*홈 & 저장글 */}
        <div className="side_homesave">
          {mainCategoryArray.map((data, index) => {
            return (
              <p className="side_menu_cove" key={index}>
                <Link
                  to={data.link}
                  className={`side_menu ${
                    checkedTopItems.has(data.link) ? "side_menu_active" : ""
                  }`}
                  onClick={onCheckedTopItemsHandler}
                >
                  <span className="reference_img_side_cove">
                    <img
                      className="reference_img"
                      alt={data.imgAlt}
                      src={data.imgSrc}
                    />
                  </span>
                  <span className="home_text side_text_cove">{data.text}</span>
                </Link>
              </p>
            );
          })}
        </div>
        <div className="side_category">
          <ul className="side_main">
            <li className="side_title">CATEGORY</li>
            {/*카테고리 하위 항목들 */}
            <ul className="side_sub">
              {categoryArray.map((data, index) => {
                return (
                  <li
                    className="side_sub_bar"
                    onClick={() => {
                      setCheckedBottomItems(!checkedBottomItems);
                    }}
                    key={index}
                  >
                    <span className="side_sub_menu">
                      <span className="side_sub_menu_icon_cove">
                        <img className="side_sub_menu_icon" src={data.src} />
                      </span>
                      <span className="sidemenu_text">{data.title}</span>
                    </span>
                    {/* {checkedBottomItems
                      ? sideBarSubMenuHandlerOn()
                      : sideBarSubMenuHandlerOff()} */}
                    <ul
                      className={`side_subsm${
                        checkedBottomItems ? "_on" : "_off"
                      }`}
                    >
                      <li className="side_subsm_bar">
                        <Link
                          to="/ReferenceMiddleCategory"
                          className="side_subsm_menu commerce_menu1"
                        >
                          중분류
                        </Link>
                      </li>
                      <li className="side_subsm_bar">
                        <Link
                          to="/ReferenceMiddleCategory"
                          className="side_subsm_menu commerce_menu2"
                        >
                          중분류
                        </Link>
                      </li>
                      <li className="side_subsm_bar">
                        <Link
                          to="/ReferenceMiddleCategory"
                          className="side_subsm_menu commerce_menu3"
                        >
                          중분류
                        </Link>
                      </li>
                    </ul>
                  </li>
                );
              })}
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReferenceSidebar;
