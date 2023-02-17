
    function calcRP(mtl){
        var result = 0;
        const elements = document.querySelectorAll('select');
        const totalItems = elements.length;
        Array.from(elements).forEach((element, index) => {
            if (!(index == totalItems-1))
                result += parseFloat($(element).val())
            else if (mtl == true)
                result += parseFloat($(element).val())
        });
        return result;
    }
    function printRP(){
        noMTL = calcRP(0);
        withMTL = calcRP(1)*0.9;
        $("#no_mtl").text(noMTL);
        if (withMTL <= noMTL){
            $("#with_mtl").hide();
            $("#with_mtl").prev("h2").hide();
        } else {
            $("#with_mtl").show().text(withMTL);
            $("#with_mtl").prev("h2").show()
        }
    }
    $(document).ready(function(){
        printRP();
        $('select').on('change', function(){
            printRP()
        });
    });