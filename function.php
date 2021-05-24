<?php
function getCalculated($num1, $operator, $num2){
    global $sum;
    switch($operator){
        case "plus":
            $sum = $num1 + $num2;
            break;
        case "minus":
            $sum = $num1 - $num2;
            break;
        default:
            $sum = "There is an error";
            break;
    }
    return $sum;
}
    $num1 = $_GET["num01"];
    $operator = $_GET["operator"];
    $num2 = $_GET["num02"];
    echo "the result is " . getCalculated($num1,$operator,$num2);
?>