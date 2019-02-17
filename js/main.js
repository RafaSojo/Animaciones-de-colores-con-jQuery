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
    }

}