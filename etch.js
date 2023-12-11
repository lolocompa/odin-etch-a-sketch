    document.addEventListener("DOMContentLoaded", function() {
        let element_count = 256



        var container = document.querySelector("#container");

        for(var i = 0; i < element_count; i++) {
            var element = document.createElement("div");
            element.className = "element";
            
            container.appendChild(element);
        }

        var elements = document.querySelectorAll(".element");

        elements.forEach(function(element) {
            element.addEventListener("mouseenter", function() {
                element.style.backgroundColor = 'black';
            })


        })







        
        var button = document.querySelector("#button")
        button.addEventListener("click", function() {
            let grid_num = prompt("enter a number for the grid")
            let grid = grid_num * grid_num

            var container = document.querySelector("#container");
            container.innerHTML = ""


            for(var i = 0; i < grid; i++) {
                var element = document.createElement("div");
                element.className = "element";
                
                container.appendChild(element);
            }

            var elements = document.querySelectorAll(".element");

            elements.forEach(function(element) {
                let elementFlex = `0 0 calc(100% / ${grid_num} - 2px)`;
                let elementHeight = `calc(100% / ${grid_num} - 2px)`;
    
                element.style.flex = elementFlex;
                element.style.height = elementHeight;

                element.addEventListener("mouseenter", function() {
                    element.style.backgroundColor = 'black';
                })


            })

        })




    })




