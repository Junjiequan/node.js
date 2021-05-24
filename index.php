<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <script defer src="index.js"></script> -->
    <title>Document</title>
</head>
<body>
    <h1>
        <?php
        // $a = 50;
        //     switch($a){
        //         case 25:
        //             echo 'a is 25';
        //             break;
        //         case 50:
        //             echo 'a is 50';
        //             break;
        //         default:
        //             echo 'none were true!';
        //             break;
        //     }

        // $a = 1;
        // $b = 5;

        // // while($a < $b){
        // //     echo "number o yea " . ++$a;
        // // }
        //     $arr = ['holy', 'okay'];
        //     // foreach ($arr as $value){
        //     //     echo 'randomeaaaa' . $value;
        //     // }
                // $arrays = [
                //     "name" => 'oyea',
                //     "color" => 'blue'
                // ];
                // foreach ($arrays as $key => $value){
                //     echo  $value ;
                // }
        // $a = 1;
        // while ($a < 10){
        //     $a++;
        //     if ($a == 7){
        //         continue;
        //     }
        //     echo $a;
        // }

        // include 'test.php';
        // include_once 'test.php';
        // require 'test.php';
        // require_once 'test.php';

        ?>
        //

        <?php
        ////////////////////////////built-in functions//////////////////////////
            // $a = "hello guys!";
            // $b = str_replace('hello', 'no-hello', $a);
            // echo $b;

            // $a = "number 3";
            // $b = str_repeat('nooooo ' , 3);
            // echo $b;

            // $a = "what is this um?";
            // $b = "what";
            // echo stripos($a, 'w');


            function getInfo($name,$game){
                if($name === 'jay'){
                    echo 'he loves to ' . 'play ' . $game;
                };
            };
            getInfo('jay', 'php')
        ?>
    </h1>
    <br style="height:50px;">
    <div>123213</div>
</body>
</html>