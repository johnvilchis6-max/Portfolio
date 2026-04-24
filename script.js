let count = 0;
    let percentage = document.getElementById("percentage");
    let loader = document.getElementById("loader");
    let content = document.getElementById("content");

    let interval = setInterval(() => {
      count++;
      percentage.textContent = count + "%";

      if (count >= 100) {
        clearInterval(interval);

    
        loader.style.display = "none";

        
        content.style.display = "block";
      }
    }, 30); 