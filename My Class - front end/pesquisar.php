<?php
    require_once "conecta.php";

    header('Location: planos.html', true, 301);
    exit();

    $pesquisar = $_POST['pesquisar'];
    $resultado = "SELECT * FROM tbl_planos WHERE pln_titulo LIKE '%$pesquisar%'"
?>