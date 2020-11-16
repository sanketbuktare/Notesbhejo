$('#select1').on("change", function() {
    //alert('IN change');
    if (this.value === "year_1") {
        $(".b").hide();
        $(".par").show();
        $('#select2').prop('selectedIndex', 0);
    } else if (this.value === "year_2" || this.value === "year_3" || this.value === "year_4") {
        $(".b").show();
        $(".par").hide();
    }
});






$('.SubmitButton').click(function() { // on submit button click
    var option1 = $('#select1 :selected').val();
    var option2 = $('#select2 :selected').val();
    if (option1 === "" && option2 === "") {
        alert('Select Year and Branch');
    } else if (option1 !== "" && option2 === "") {
        if (option1 === "year_1") {
            window.open(option2 + option1 + ".html");
        } else {
            alert('Select Branch');
        }

    } else if (option1 === "" && option2 !== "") {
        alert('Select Year');
    } else {
        window.open(option2 + option1 + ".html");
    }
    //window.open(option2 + option1 + ".html"); // open a new window. here you need to change the url according to your wish.
});