<?php
session_start();
//session_destroy();
if (empty($_SESSION["token"])) {
    header('Location: http://15.164.227.114');
}
?>
<div class="header_cove"></div>
<header>
    <div class="header_area_left">
        <h1 class="logo_area">
            <a href="index.php"><img class="header_logo" src="src/images/header_logo.png" alt="header_logo.png" /></a>
        </h1>
        <div class="coar_area">
            <p><a href="#">커뮤니티</a></p>
            <p><a href="#">자료실</a></p>
        </div>
    </div>
    <div class="header_area_right">
        <?php
        if (!isset($_SESSION["login"])) {
        ?>
            <div class="coar_area">
                <p>
                    <a href="login.php">로그인</a>
                </p>
            </div>
        <?php
        } else {
        ?>
            <h1 class="mypage_area">
                <a class="mypage_photo_cove" href="my_page.php">
                    <img class="mypage_photo" src="src/images/default_user.png" alt="default_user.png" />
                </a>
            </h1>
        <?php
        }
        ?>
        <div class="Qmenu_area">
            <p class="Qmenu_list">
                <a class="Qmenu_item_cove Qmenu1"><img class="Qmenu_item" src="src/images/Qmenu_icon1.png" alt="Qmenu_icon1.png" /></a>
            </p>
            <div class="Qmenu_bar">
                <span class="tail"><img class="tail_img" src="src/images/tail.png" alt="tail.png" /></span>
                <p class="Qmenu_menu_cove">
                    <a class="Qmenu_menu" href="regit_account.php">계정관리</a>
                </p>
                <p class="Qmenu_menu_cove">
                    <a class="Qmenu_menu" href="regit_pass.php">비밀번호 변경</a>
                </p>
                <p class="Qmenu_menu_cove"><a class="Qmenu_menu" href="inquiry.php">문의하기</a></p>
                <p class="Qmenu_menu_cove"><a class="Qmenu_menu" href="notice.php">공지사항</a></p>
            </div>
            <p class="Qmenu_list">
                <a class="Qmenu_item_cove Qmenu2"><img class="Qmenu_item Qmenu_padding" src="src/images/Qmenu_icon2.png" alt="Qmenu_icon2.png" /></a>
                <a class="message_active_cove"><img class="message_active" src="src/images/message_active.png" alt="message_active" /></a>
            </p>
            <div class="Qmenu_bar2" id="alram_cove">
                <span class="tail" id="alram_tail"><img class="tail_img" src="src/images/tail.png" alt="tail.png" /></span>
                <div class="alram_message_cove">
                    <div class="Qmeny_message">
                        <h3 class="Qmeny_massage_title_cove">
                            <a class="Qmeny_massage_title" href="#">협업/문의 메세지 도착</a>
                        </h3>
                        <p class="Qmeny_massage_info_cove"  onClick=" location.href='messenger.php' " onMouseOut=" window.status = '' ">
                            <a class="Qmeny_massage_info" href="#">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor invidunt ut labore...
                            </a>
                        </p>
                        <span class="message_back_cove" date-massage="${alram_data}">
                            <a class="message_back" href="#">
                                <img class="message_back_img" src="src/images/message_back.png" alt="message_back.png" />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <p class="Qmenu_list">
                <a class="Qmenu_item_cove" href="write.php"><img class="Qmenu_item" src="src/images/Qmenu_icon3.png" alt="Qmenu_icon3.png" /></a>
            </p>
        </div>
    </div>
    <div class="header_area_middle">
        <div class="search_tab">
            <form onsubmit="return false">
                <input onkeyup="javascript:if (event.keyCode == 13) addrSearchKey();" type="text" name="search_text" id="search_text" placeholder="검색어를 입력해 주세요." autocomplete="on" />
                <a id="search_img" href="search_list.php"><img class="search" src="src/images/search_icon1.png" alt="search_icon1.png" /></a>
            </form>
            <script>
                function addrSearchKey() {
                    location.href = "search_list.php";
                }
            </script>
        </div>
    </div>
</header>