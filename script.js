let inicio = prompt("Seja bem vindo ao acervo da Champions League!" + 
                    "\nO que você gostaria de verificar hoje?" + 
                    "\n\n1. Informação sobre um time" + 
                    "\n2. Informações sobre uma temporada" + 
                    "\n3. Principais artilheiros" +
                    "\n4. Melhor jogador da Champions por temporada" + 
                    "\n5. Sair");
switch (inicio) {
    
  case "1":
    let time = prompt("Digite o nome do time (por exemplo: Real Madrid, Milan, Liverpool, Bayern de Munique, Barcelona)").toLowerCase();
      switch (time) {
          
        case "real madrid":
          alert ("O Real Madrid é o time com mais títulos da UEFA Champions League, com 14 conquistas.");
          break;
          
        case "milan":
          alert ("O AC Milan é o segundo time com mais títulos da UEFA Champions League, com 7 conquistas.");
          break;
          
        case "liverpool":
          alert ("Empatado com o FC Bayern de Munique, o Liverpool é o terceiro time com mais títulos da UEFA Champions League, com 6 conquistas.");
          break;
          
        case "bayern de munique":
          alert ("Empatado com o Liverpool, o FC Bayern de Munique também é o terceiro time com mais títulos da UEFA Champions League, com 6 conquistas.");
          break;
          
        case "barcelona":
          alert ("O FC Barcelona é o quarto time com mais títulos da UEFA Champions League, com 5 conquistas.");
          break;
          
        default:
          alert ("Desculpe, não tenho informações sobre esse time.");
    }
    break;
    
  case "2":
    let temporada = prompt("Digite o ano da temporada (por exemplo: 2021):")
      switch (temporada) {
          
        case "2020":
          alert ("Na temporada 2019-20, o Bayern de Munique venceu o Paris Saint-Germain na final, conquistando seu 6º título.");
          break;
          
        case "2021":
          alert ("Na temporada 2020-21, o Chelsea venceu o Manchester City na final, conquistando seu 2º título.");
          break;
          
        case "2022":
          alert ("Na temporada 2021-22, o Real Madrid venceu o Liverpool na final, conquistando seu 14º título.");
          break;
          
        case "2023":
          alert ("Na temporada 2022-23, o Manchester City venceu a Inter de Milão na final, conquistando seu primeiro título.");
          break;
          
        default:
          alert ("Desculpe, não tenho informações sobre essa temporada.");
      }
    break;
  
  case "3":
    alert("Os principais artilheiros da Champions League são:\n\n" +
          "Cristiano Ronaldo com 140 gols.\n" +
          "Lionel Messi com 129 gols.\n" +
          "Robert Lewandowski com 96 gols.\n" +
          "Karim Benzema com 90 gols.\n" +
          "Raúl com 71 gols.\n")
    break;
    
  case "4":
    let melhor = prompt ("Digite o ano da temporada (por exemplo: 2020):")
      switch (melhor) {
        
        case "2020":
          alert ("O Melhor da Champions na temporada 2019-20 foi Robert Lewandowski, do Bayern de Munique.");
          break;
         
        case "2021":
          alert ("O Melhor da Champions na temporada 2020-21 foi Jorginho, do Chelsea.");
          break;
        
        case "2022":
          alert ("O Melhor da Champions na temporada 2021-22 foi Karim Benzema, do Real Madrid.");
          break;
        
        case "2023":
          alert ("O Melhor da Champions na temporada 2022-23 foi Erling Haaland, do Manchester City.");
          break;
        
        case "2024":
          alert ("O melhor da Champions na temporada 2023-2024 foi Vinicius Junior, do Real Madrid.");
          break;
        
        default:
          alert ("Desculpe, não tenho informações sobre essa temporada.");
      }
    break;
    
  case "5":
    alert ("Obrigado por usar a pesquisa sobre a UEFA Champions League. Até a próxima!")
    break;
  
  default:
    alert ("Opção inválida. Por favor, escolha uma opção válida.");
}