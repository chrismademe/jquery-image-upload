<?php

header('Content-type: application/json');
echo json_encode([
    'code'      => 200,
    'type'      => 'success',
    'message'   => 'Uploaded!'
]);
