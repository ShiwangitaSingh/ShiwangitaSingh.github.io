   let saveFile = () => {
        // Get the data from each element on the form.
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const msg = document.getElementById("msg");


        var adj=document.getElementById("name").value;
        var adj1=document.getElementById("email").value;
        var adj2=document.getElementById("subject").value;
        var adj3=document.getElementById("msg").value;
        if(adj=='' || adj1=="" || adj2=="" || adj3==""){
            alert('Enter your details properly.');
            exit();
        }
        alert("Thank you for your visit, "+adj);

        // This variable stores all the data.
        let data = "\r Name: " + name.value +" \r\n " + "Email: " + email.value + " \r\n " + "Subject: " + subject.value + " \r\n " + "Message: " + msg.value;
        console.log(data); //printing form data into the console
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: "text/plain" });
        var filename = new Date();
        var month =new Date(); //months from 1-12
        month = month.getMonth();

        var day = new Date();
        var day = day.getUTCDate();

        var year = new Date();
        var year = year.getUTCFullYear();

        newdate = year + "/" + month + "/" + day;
        const sFileName = filename; // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = new Date();

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        } else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();
    };