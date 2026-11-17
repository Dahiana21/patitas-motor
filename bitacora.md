Vacunación (Cabeza) -> controlPeso -> limpiezaDental -> null

Al asignar null a vacunacion.siguiente, se rompe el enlace entre la vacunación y el control de peso. El primer while imprime únicamente la vacunación. Después, al ejecutar actual = actual.siguiente, la variable actual queda en null y el ciclo termina.

El segundo recorrido también visita únicamente la vacunación, por lo que el total es $85.000. Los nodos de control de peso y limpieza dental siguen existiendo y se pueden acceder mediante sus variables, pero quedaron desconectados del recorrido que comienza en cabeza.