{
    /**
     * @author Marcos Gallardo Pérez y Rafael Sojo Ruiz
     */
    $(init);


    function init() {
        $("#ejemplo1").click(function animacion1() {
            if ($(this).css("background-color") === "rgb(0, 0, 0)")
                $(this).animate({
                    "width": "300px",
                    "background-color": "red",
                    "color": "black",
                    "border-color": "black"
                }, 1000);
            else
                $(this).animate({
                    "width": "150px",
                    "background-color": "black",
                    "color": "white",
                    "border-color": "red"
                }, 1000);
        });
        $("#jQueryUI").click(()=>{
            location.href="indexjQueryUI.html";
        })
        $("#jQueryColor").click(()=>{
            location.href="indexjQueryColor.html";
            
        })
        $("#inicio").click(()=>{
            location.href="index.html";
        })
        console.log($.Color( $("#ejemplo1"), "background-color" ));
        console.log($.Color( $("#ejemplo1"), "color" ));
    }

}