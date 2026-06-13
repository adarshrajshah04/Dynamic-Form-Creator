// const { createElement } = require("react");

var optionvalue = "";//  take a input 




// function 1

function inputval(val) {

    optionvalue = val.value;
    console.log(optionvalue);

}
// function 2

function createinp() {
    // selecting the the div from the 
    var box = document.createElement("div")
    box.setAttribute("class", "box")

    var divsuper = document.querySelector(".super")
    divsuper.append(box);

    var left = document.createElement("div");
    left.setAttribute("class", "left")
    var right = document.createElement("div");
    right.setAttribute("class", "right")

    // ____________________ appending_________________
    box.append(left)
    box.append(right)


    // ___________________________________________________________________________________________

    // left
    var linput = document.createElement("input");
    // var inputvalue=linput.value
    linput.setAttribute("type", "text");
    linput.setAttribute("placeholder", "Label");

    linput.classList.add("linput")// add the class 

    left.append(linput);

    var lbutton = document.createElement("button")
    lbutton.innerHTML = "Done"
    lbutton.setAttribute("type", "button")
    lbutton.classList.add("lbutton")// class add
    left.append(lbutton);

    lbutton.addEventListener("click", function () {
        var label = document.createElement("label");
        label.innerHTML = linput.value + "  :";

        label.setAttribute("id", "label")
        left.append(label);

        linput.remove()
        lbutton.remove()

    })
    //----------------------------------------------------------------------
    // right

    var cinput = document.createElement("input"); // creating the input filde for the input
    cinput.setAttribute("type", optionvalue);
    cinput.setAttribute("placeholder", optionvalue);
    cinput.classList.add("input")
    right.append(cinput)






    if (optionvalue === "radio") {//____________________ radio button________________________
        var rdiv = document.createElement("div");
       
        rdiv.classList.add("rdiv")
        rdiv.style.display = "block"
        rdiv.style.margin = "10px"

        var radd = document.createElement("button")
        radd.innerHTML = "Add"
        radd.setAttribute("id", "radd")
        radd.setAttribute("type", "button")

        var rdone = document.createElement("button")
        rdone.innerHTML = "done";
        rdone.setAttribute("id", "rdone");
        rdone.setAttribute("type", "button");

        cinput.setAttribute("type", "text");



        rdiv.append(radd);
        rdiv.append(rdone);
         right.append(rdiv)

        // creating the radio button
        radd.addEventListener("click", function () {
            var radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "radio");
            radio.setAttribute("value", cinput.value);
            // rdiv.append(radio);
            var rlabel = document.createElement("label");
            rlabel.innerHTML = cinput.value;
            // rdiv.append(rlabel)
            cinput.value = "";


            var wrap = document.createElement("div");

            wrap.append(radio);

            wrap.append(rlabel);
            wrap.classList.add("rwrap")// add class

            rdiv.append(wrap);
        })

        // done function
        rdone.addEventListener("click", function () {
            cinput.remove()
            radd.remove();
            rdone.remove()
        })


    }

    // ___________________________________________________________________________________________



    if (optionvalue === "checkbox") {//____________________ check box ________________________
        var cdiv = document.createElement("div");
        right.append(cdiv)

        var cadd = document.createElement("button")
        cadd.innerHTML = "Add"
        cadd.setAttribute("id", "cadd")
        cadd.setAttribute("type", "button")

        var cdone = document.createElement("button")
        cdone.innerHTML = "done";
        cdone.setAttribute("id", "cdone");
        cdone.setAttribute("type", "button");

        cinput.setAttribute("type", "text");



        cdiv.append(cadd);
        cdiv.append(cdone);


        // creating the checkbox button
        cadd.addEventListener("click", function () {
            var checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("name", "checkbox");
            // cdiv.append(checkbox);

            var clabel = document.createElement("label");
            clabel.innerHTML = cinput.value + " ";
            // cdiv.append(clabel);


            var wrap = document.createElement("div");

            wrap.append(checkbox);

            wrap.append(clabel);

            cdiv.append(wrap);

            cinput.value = "";


        })

        // done function
        cdone.addEventListener("click", function () {
            cinput.remove()
            cadd.remove();
            cdone.remove()
        })


    }


    // ___________________________________________________________________________________________
    if (optionvalue === "select") {//____________________ select  ________________________
        var sdiv = document.createElement("div");
        right.append(sdiv)

        var select = document.createElement("select");

        var sadd = document.createElement("button")
        sadd.innerHTML = "Add"
        sadd.setAttribute("id", "sadd")
        sadd.setAttribute("type", "button")

        var sdone = document.createElement("button")
        sdone.innerHTML = "done";
        sdone.setAttribute("id", "sdone");
        sdone.setAttribute("type", "button");

        cinput.setAttribute("type", "text");

        sdiv.append(sadd);
        sdiv.append(sdone);

        // _________ createing default  option______________

        var option1 = document.createElement("option");
        option1.innerHTML = "--------";
        option1.selected = true
        option1.disabled = true;

        select.append(option1);


        // creating the options button
        sadd.addEventListener("click", function () {
            var option = document.createElement("option");
            option.innerHTML = cinput.value
            option.setAttribute("value", cinput.value);

            select.append(option);


            cinput.value = "";
        })

        // don function
        sdone.addEventListener("click", function () {
            cinput.remove()
            sadd.remove();
            sdone.remove()


        })
        sdiv.append(select)


    }



    // _______________________________________________________submit_________

    if (optionvalue === "submit") {
        cinput.remove();
        left.remove()
        right.remove()
        alert("is your form complete ?")
        var subbutton = document.createElement("button");
        subbutton.setAttribute("type", "button")
        subbutton.setAttribute("id", "submit")
        subbutton.innerHTML = "submit"
        box.append(subbutton)



        subbutton.addEventListener("click", function () {
            var forminfo = document.querySelector(".forminfo");
            forminfo.style.display = "none"


            var allDelete = document.querySelectorAll(".delbutton");

            for (var a of allDelete) {

                a.style.display = "none";

            }
            document.querySelector("form").style.backgroundColor = "#4E4E4E"

            subbutton.style.display = "none"  // display none to button one 


            subbutton1.style.display = "block"  // display block to button 2
            


        })

    }

    // seconde submit button
    // _______________________________________________________

    var subbutton1 = document.createElement("button");  // createing the button two
    subbutton1.setAttribute("type", "button")
    subbutton1.setAttribute("id", "submit")
    subbutton1.innerHTML = "submit"
    box.append(subbutton1)
    subbutton1.style.display = "none"

    subbutton1.addEventListener("click", function () {
        var allinput = document.querySelectorAll(".input");

        for (var inp of allinput) {

            // value lena
            var val = inp.value;

            // label banana
            var label = document.createElement("label");

            label.innerHTML = val;

            // input ke parent me label add karna
            inp.parentElement.append(label);

            // input hide/remove
            inp.remove();
        }



        // radio
        var allRadio =
            document.querySelectorAll('input[type="radio"]');

        for (var radio of allRadio) {

            // wrap div
            var wrap = radio.parentElement;
          
            // agar checked hai
            if (radio.checked) {

                var value = radio.value;

                // pura old content remove
                wrap.innerHTML = "";

                // new label
                var label = document.createElement("label");

                label.innerHTML = value;

                wrap.append(label);

            }

            else {

                // unchecked radio pura remove
                wrap.remove();

            }

        }


        // checkbox
        var allCheck = document.querySelectorAll('input[type="checkbox"]');

        for (var check of allCheck) {

            // wrap div
            var wrap = check.parentElement;

            // agar checked hai
            if (check.checked) {

                // checkbox value
                var value =
                    wrap.querySelector("label").innerHTML;

                // pura old content remove
                wrap.innerHTML = "";

                // new label
                var label = document.createElement("label");

                label.innerHTML = value;

                wrap.append(label);

            }

            else {

                // unchecked checkbox remove
                wrap.remove();

            }

        }

        // select
        var allSelect = document.querySelectorAll("select");

        for (var sel of allSelect) {

            // parent div
            var wrap = sel.parentElement;

            // selected value
            var value = sel.value;

            // pura old content remove
            wrap.innerHTML = "";

            // new label
            var label = document.createElement("label");

            label.innerHTML = value;

            // append
            wrap.append(label);

        }
        document.querySelector("form").style.backgroundColor="#1C2D59"

        subbutton1.style.display="none"
    })







    //_______________________delete_______________________
    var delbutton = document.createElement("button");
    delbutton.innerHTML = "X";
    delbutton.setAttribute("type", "button")
    delbutton.setAttribute("class", "delbutton")

    right.append(delbutton)

    delbutton.addEventListener("click", function () {
        box.remove()
    })






}








