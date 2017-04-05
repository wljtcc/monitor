<html>
    <title></title>
    <link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css" >

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="./js/bootstrap.min.js"></script>

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
$result = $db->query('SELECT * FROM memory ORDER BY id DESC LIMIT 10');
?>

<body>

    <h2 class="sub-header">Listat de Dados (5 últimos)</h2>
    <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>FREE</th>
                  <th>USED</th>
                  <th>CACHE</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
              <?php
                    while ($list = $result->fetchArray()){
                        echo '<tr>';
                        echo '<td>' . $list['id'] . '</td>';
                        echo '<td>' . $list['free'] . '</td>';
                        echo '<td>' . $list['used'] . '</td>';
                        echo '<td>' . $list['cache'] . '</td>';
                        echo '<td>' . $list['total'] . '</td>';
                        echo '</tr>';
                    }

                    #var_dump($result->fetchArray());

                    ?>
              </tbody>
            </table>
          </div>

    </body>
</html>