$(document).ready(function() {

    var userListBody = $('.userList tbody');
    var userNumber = 1;

    //@todo store and somehow update the current number of users


    $('.needs-validation').submit(function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {
            $(this).addClass('was-validated');
            return false;
        }

        //@todo
        //1. get values
        //2. create a new element
        //3. somehow add them to userListBody
        //4. update number of current users
        //5. clear entries from the form
        //6. maybe do something else... :-)

        //your code follows here

        userNumber++;
        var newUser = document.getElementById('username').value;
        userListBody.push(newUser);

        var table = document.getElementById('UserTable');
        var newRow = table.insertRow(-1);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.innerHTML = userNumber;
        cell2.innerHTML = newUser;
        cell3.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-danger deleteTrigger\" title=\"Löschen\"><i class=\"fa fa-trash\"></i></button>";

        document.getElementById("form").reset();

        return false;
    });


    $(document).on('click', '.deleteTrigger', function() {
        //@todo
        //1. remove current user from dom
        //2. update number of current users

        //your code follows here

        var table = document.getElementById("UserTable");
        var index = document.getElementById("position").value;
        var length = userListBody.length;
        var row = table.deleteRow(length);

        //optional

        if(confirm("Do you really want to delete this user?")) {
            $(this).parents("tr").remove();
            userNumber--
        } else {
            console.log("Cancelled.");
        }

    });

});