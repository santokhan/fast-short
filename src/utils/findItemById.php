<?php

function findItemById($items, $id) {
    foreach ($items as $item) {
        if ($item['id'] === $id) {
            return $item;
        }
    }
    return null; // Return null if item with $id is not found
}

// $idToFind = 3;
// $foundItem = findItemById($items, $idToFind);

// if ($foundItem) {
//     echo "Item found: " . $foundItem['name'];
// } else {
//     echo "Item with id $idToFind not found.";
// }
