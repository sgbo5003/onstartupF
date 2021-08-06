<?php
$sql = "SELECT day FROM coin_day WHERE user_idx = 1001"; // 1001 -> 이후 로그인한 유저의 고유번호 사용
$row = sql_select($dbcon, $sql, "no");
$row = $row -> fetchall(PDO::FETCH_BOTH);
while ($day_num) {
?>
<li>
    <p><?php
    if($day_num == 30) {
        echo "1 Coin";
    } elseif ($day_num == 29) {
        echo "2 Coin";
    } elseif ($day_num == 25 || $day_num == 22) {
        echo "1 Coin";
    } elseif ($day_num == 20 || $day_num == 17) {
        echo "1 Coin";
    } elseif ($day_num == 13) {
        echo "2 Coin";
    } elseif ($day_num == 9 || $day_num == 6) {
        echo "1 Coin";
    } elseif ($day_num == 4 || $day_num == 1) {
        echo "1 Coin";
    } else {
        echo "&nbsp";
    }
    ?></p>
    <a <?= $day != $day_num  ? "class='block_click " : "class='" ?><?php
    foreach ($row as $key => $value) {
        if($row[$key][0] == $day_num) {
            echo "coin_pre_active'";
            echo ">출석</a>";
            goto go2;
        } else {
            goto go;
        }
        go:
    }
    echo "'";
    ?>href="#" id="<?= $day_num ?>"><?= $day_num ?></a>
    </li>
    <?php
    go2:
    $day_num--;
}
?>