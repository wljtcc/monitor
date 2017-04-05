<?php
/**
 * Simple example of extending the SQLite3 class and changing the __construct
 * parameters, then using the open method to initialize the DB.
 */
class MyDB extends SQLite3
{
    function __construct()
    {
        $this->open('./db/dashboard.sqlite');
    }
}

$db = new MyDB();
$result = $db->query('SELECT * FROM memory ORDER BY id DESC LIMIT 5');

while ($list = $result->fetchArray()){
    echo 'id: '     . $list['id'] . '<br />';
    echo 'free: '   . $list['free'] . '<br />';
    echo 'used: '   . $list['used'] . '<br />';
    echo 'cache: '  . $list['cache'] . '<br />';
    echo 'total: '  . $list['total'] . '<br />';
    echo '<br />';
}

#var_dump($result->fetchArray());

?>
