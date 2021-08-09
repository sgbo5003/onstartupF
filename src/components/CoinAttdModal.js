import React from "react";
import BackImg from "../images/back.png";

const CoinAttdModal = (props) => {
  const arr = [
    {
      value: "1",
      coin: "1Coin",
    },
    {
      value: "2",
      coin: "",
    },
    {
      value: "3",
      coin: "",
    },
    {
      value: "4",
      coin: "1Coin",
    },
    {
      value: "5",
      coin: "",
    },
    {
      value: "6",
      coin: "1Coin",
    },
    {
      value: "7",
      coin: "",
    },
    {
      value: "8",
      coin: "",
    },
    {
      value: "9",
      coin: "1Coin",
    },
    {
      value: "10",
      coin: "",
    },
    {
      value: "11",
      coin: "",
    },
    {
      value: "12",
      coin: "",
    },
    {
      value: "13",
      coin: "2Coin",
    },
    {
      value: "14",
      coin: "",
    },
    {
      value: "15",
      coin: "",
    },
    {
      value: "16",
      coin: "",
    },
    {
      value: "17",
      coin: "1Coin",
    },
    {
      value: "18",
      coin: "",
    },
    {
      value: "19",
      coin: "",
    },
    {
      value: "20",
      coin: "1Coin",
    },
    {
      value: "21",
      coin: "",
    },
    {
      value: "22",
      coin: "1Coin",
    },
    {
      value: "23",
      coin: "",
    },
    {
      value: "24",
      coin: "",
    },
    {
      value: "25",
      coin: "1Coin",
    },
    {
      value: "26",
      coin: "",
    },
    {
      value: "27",
      coin: "",
    },
    {
      value: "28",
      coin: "",
    },
    {
      value: "29",
      coin: "2Coin",
    },
    {
      value: "30",
      coin: "1Coin",
    },
  ];
  const { coinModalHandler, attdCheckedItems, setAttdCheckedItems } = props;

  const onAttdBtnHandler = (data) => {
    let itemSet = new Set(attdCheckedItems);
    console.log(itemSet);
    if (attdCheckedItems.has(data)) {
      itemSet.delete(data);
      setAttdCheckedItems(itemSet);
    } else {
      itemSet.add(data);
      setAttdCheckedItems(itemSet);
    }
    console.log(data, attdCheckedItems.values());
  };
  return (
    <div className="coin_attd_modal_container">
      <div className="coin_attd_modal_box">
        <div className="coin_attd_modal_title_container">
          <h2>출석 코인받기</h2>
          <span className="coin_attd_modal_back" onClick={coinModalHandler}>
            <img src={BackImg} alt="back.png" />
          </span>
        </div>
        <div className="coin_attd_modal_content">
          {arr
            .slice(0)
            .reverse()
            .map((data) => {
              return (
                <div className="coin_attd_modal_content_contents">
                  <div className="coin_attd_modal_content_contents_top">
                    <p>{data.coin}</p>
                  </div>
                  <div
                    className={`coin_attd_modal_content_contents_bottom ${
                      attdCheckedItems.has(data.value) ? "_coin_selected" : ""
                    }`}
                    onClick={() => {
                      onAttdBtnHandler(data.value);
                    }}
                  >
                    <p
                      className={
                        attdCheckedItems.has(data.value)
                          ? "_coin_selected_text"
                          : ""
                      }
                    >
                      {attdCheckedItems.has(data.value) ? "출석" : data.value}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CoinAttdModal;
