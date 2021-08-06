import React, { useState } from "react";
import searchImg from "../images/search_icon1.png";
const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const onChangeInputHandler = (e) => {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="search_tab">
      <form>
        <input
          type="text"
          name="search_text"
          id="search_text"
          placeholder="검색어를 입력해 주세요."
          //   autocomplete="on"
          onChange={onChangeInputHandler}
          value={searchInput}
        />
        <span id="search_img" href="search_list.php">
          <img className="search" src={searchImg} alt="search_icon1.png" />
        </span>
      </form>
    </div>
  );
};

export default Search;
