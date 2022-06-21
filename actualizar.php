<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actualizar</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body style="background-color: #4cb9ac;">
    <div class="container">
        <?php

            $ID_animal = trim(htmlspecialchars($_REQUEST["ID_animal"], ENT_QUOTES, "UTF-8"));
            
            $conexion = mysqli_connect("localhost", "root", "ANNHFWU2K", "examenphp") 
                            or die("Problemas de Conexión");
            
            $sql = "SELECT * FROM animales WHERE ID_animal = $ID_animal";

            $registro = mysqli_query($conexion, $sql) 
                        or die("Problemas en el delete: ".mysqli_error($conexion));

            if ($reg = mysqli_fetch_array($registro)) {
            ?>
                <form action="actualizar2.php" method="post">
                    <input type="hidden" name="ID_animal" id="ID_animal"
                        value="<?php echo $reg['ID_animal'] ?>">
                    
                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="text" class="form-control" name="nombre" id="nombre" autofocus value="<?php echo $reg['nombre'] ?>">
                    </div>
            
                    <div class="form-group">
                        <label for="familia">Familia</label>
                        <input type="text" class="form-control" name="familia" id="familia" value="<?php echo $reg['familia'] ?>">
                    </div>

                    <div class="form-group">
                        <label for="edad">Edad</label>
                        <input type="number" class="form-control" name="edad" id="edad" value="<?php echo $reg['edad'] ?>">
                    </div>
            
            
                    <div class="form-group">
                        <label for="tipo">Tipo</label>
                        <select name="ID_tipo" class="form-control" id="tipo">
                    <?php
                    $conexion = mysqli_connect("localhost", "root", "ANNHFWU2K", "examenphp") 
                                    or die("Problemas de Conexión");

                    $sql = "SELECT ID_tipo, tipo FROM tipos";

                    $registros = mysqli_query($conexion, $sql) 
                            or die("Problemas en select:".mysqli_error($conexion));

                    while($reg=mysqli_fetch_array($registros)) {
                        echo "<option value='$reg[ID_tipo]'> $reg[tipo] </option>";
                    }
                    ?>
                </select>
                    </div>
                    <br>
                    <input type="submit" value="Actualizar" class="btn btn-primary btn-block">
                </form>
            <?php
            }
            mysqli_close($conexion);            
            ?>
    </div>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</body>
</html>