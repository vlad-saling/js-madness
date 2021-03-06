console.time('done');

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?
$i = 3;
$j = 3;
$factor = 0;
$con = 2;
$match = true;
//since 2 is prime numbers, we will start from 3 so we can add more 2 in each cycle and skip even numbers
//this means, that we are looking for the 10000th number (not 10001st) as we already skipped two  (2 and 3)
var compute = new function() {
    while ($con <= 10000) {
        $j = 3;
        $match = true;
        // shortcut - if number is not divisible by 3, it is enough to check if it is divisible by something up its third
        if (($i % 3) != 0) {
            $factor = ($i - ($i % 3))/3;
            while ($j < $factor) {
                if (($i % $j) == 0) {
                    $match = false;
                    $j = $i; //kill switch so cycle doesn't check rest of the numbers as well
                }
                $j = $j + 1;
            }
        }
        else {
            $match = false;
        }
        if ($match) {
            $con = $con + 1;
            console.log($i + "is" + $con + "th prime");
        }
        else {
         //  @debug $i "is not a prime";
        }
        $i = $i + 2;
    }
}();

console.timeEnd('done');
