
    function saludar() {
      const input = document.getElementById("nombres").value.trim();
      const nombres = input.split(" ");
      let mensaje = "";
      nombres.forEach(nombre => {
        if (nombre !== "") mensaje += `¡Hola ${nombre}!<br>`;
      });
      document.getElementById("resultado1").innerHTML = mensaje;
    }

    function menorNumero() {
      const input = document.getElementById("numeros1").value.trim();
      const numeros = input.split(" ").map(Number);
      const menor = Math.min(...numeros);
      document.getElementById("resultado2").innerText = `El número menor es: ${menor}`;
    }

    function sumarNumeros() {
      const input = document.getElementById("numeros2").value.trim();
      const numeros = input.split(" ").map(Number);
      const suma = numeros.reduce((acc, val) => acc + val, 0);
      document.getElementById("resultado3").innerText = `La suma total es: ${suma}`;
    }

    function buscarValor() {
      const valores = document.getElementById("valores4").value.trim().split(" ");
      const buscar = document.getElementById("buscar4").value.trim();
      const mensaje = valores.includes(buscar)
        ? `El valor ${buscar} se encuentra entre los valores originales`
        : `El valor ${buscar} NO se encuentra entre los valores originales`;
      document.getElementById("resultado4").innerText = mensaje;
    }

    function buscarIndice() {
      const valores = document.getElementById("valores5").value.trim().split(" ");
      const buscar = document.getElementById("buscar5").value.trim();
      const indice = valores.indexOf(buscar);
      const mensaje = indice >= 0
        ? `El valor ${buscar} se encuentra en el índice ${indice}`
        : `El valor ${buscar} no se ha encontrado`;
      document.getElementById("resultado5").innerText = mensaje;
    }
