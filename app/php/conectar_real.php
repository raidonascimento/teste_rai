<?php
	    $link = mysql_connect("192.168.111.2", "sisdado", "1234")
		    or die("n�o foi possivel conectar !!!" . mysql_error());
	    $banco = mysql_select_db("realpneus", $link)
		    or die("Erro ao abrir o banco de dados !!!" . mysql_error());
?>