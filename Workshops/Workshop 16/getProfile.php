<?php
// Array with names

$peopleData = array (
    0 =>
        array (
            'name' => 'Antony Lewis',
            'image' => 'photos/1.png',
            'location' => 'Seattle, WA',
        ),
    1 =>
        array (
            'name' => 'Justin Dean',
            'image' => 'photos/2.png',
            'location' => 'Muscatine, IA',
        ),
    2 =>
        array (
            'name' => 'Nobert Blake',
            'image' => 'photos/3.png',
            'location' => 'Seattle, WA',
        ),
    3 =>
        array (
            'name' => 'Russell Fox',
            'image' => 'photos/4.png',
            'location' => 'Albuquerque, NM',
        ),
    4 =>
        array (
            'name' => 'Darren Bradley',
            'image' => 'photos/5.png',
            'location' => 'Buckeystown, MD',
        ),
    5 =>
        array (
            'name' => 'Benjamin Gonzales',
            'image' => 'photos/6.png',
            'location' => 'Atlanta, GA',
        ),
    6 =>
        array (
            'name' => 'Vince Francis',
            'image' => 'photos/7.png',
            'location' => 'Zanesville, OH',
        ),
    7 =>
        array (
            'name' => 'Reginald Benson',
            'image' => 'photos/8.png',
            'location' => 'Gilbert, AZ',
        ),
    8 =>
        array (
            'name' => 'Glenda Ray',
            'image' => 'photos/9.png',
            'location' => 'Baltimore, MD',
        ),
    9 =>
        array (
            'name' => 'Paula Vargas',
            'image' => 'photos/10.png',
            'location' => 'Baltimore, MD',
        ),
    10 =>
        array (
            'name' => 'Bob Armstrong',
            'image' => 'photos/11.png',
            'location' => 'Hallandale Beach, FL',
        ),
    11 =>
        array (
            'name' => 'Jaime Campbell',
            'image' => 'photos/12.png',
            'location' => 'Zanesville, OH',
        ),
    12 =>
        array (
            'name' => 'Mike Beck',
            'image' => 'photos/13.png',
            'location' => 'Garner, NC',
        ),
    13 =>
        array (
            'name' => 'Ann Lowe',
            'image' => 'photos/14.png',
            'location' => 'Cabin John, MD',
        ),
    14 =>
        array (
            'name' => 'Ryan Wolfe',
            'image' => 'photos/15.png',
            'location' => 'Los Angeles, CA',
        ),
    15 =>
        array (
            'name' => 'Dwayne Gutierrez',
            'image' => 'photos/16.png',
            'location' => 'San Jose, CA',
        )
);

// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from "" 
if ($q !== "") {
    $q = strtolower($q);
    $len=strlen($q);
    foreach($peopleData as $person) {
        $name = $person['name'];
        if (stristr($q, substr($name, 0, $len))) {
            if ($hint === "") {
                $hint = "[" . json_encode($person);
            } else {
                $hint .= "," . json_encode($person);
            }
        }
    }
    if ($hint != "") $hint .= "]";
}

// Output "no suggestion" if no hint was found or output correct values 
echo $hint === "" ? "no suggestions" : $hint;
?>