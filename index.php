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
                $arrays = [
                    "name" => 'oyea',
                    "color" => 'blue'
                ];
                foreach ($arrays as $key => $value){
                    echo $key . ":" . $value;
                }


        ?>
    </h1>
</body>
</html>