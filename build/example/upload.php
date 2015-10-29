<?php

header('Content-type: application/json');
echo json_encode([
    'code'      => 200,
    'type'      => 'success',
    'message'   => 'Uploaded!',
    'url'       => 'media/uploads/example.gif'
]);
