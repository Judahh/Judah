function weekDays(i){
    switch (i){
        case 0:
            return "Monday";
        case 1:
            return "Sunday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        default:
            return "Saturday";
    }
}

function sendMailJobOffer(company, name, description) {
    var link = "mailto:judahholanda7@gmail.com"
        + "?subject=" + escape("Job Offer from "+name+" of "+company)
        + "&body=" + escape(description);

    window.location.href = link;
}

function sendMail() {
    var fullDescription='';
    var company=document.getElementById("InputIdCompany").value;
    var name=document.getElementById("InputIdName").value;

    //var emails;
    //var phones;
    //var address;

    var e=document.getElementById("SelectIdJobTitleType");

    var jobTitle=document.getElementById("InputIdJobTitle").value+"("+e.options[e.selectedIndex].value+")";

    fullDescription+="Job"+":"+jobTitle+"\n";

    e=document.getElementById("SelectIdSalaryCoin");
    var e2=document.getElementById("SelectIdSalaryType");

    var salary=document.getElementById("InputIdSalary").value+" "+e.options[e.selectedIndex].value+e2.options[e2.selectedIndex].value;

    if(document.getElementById("squaredOne1").checked){
        salary+=' (flexible)';
    }

    fullDescription+="Salary:"+salary+"\n";

    var week="";

    for(var i=0;i<7;i++){
        if(document.getElementById("squaredOne"+(i+2)).checked) {
            week+=weekDays(i)+", ";
        }
    }

    week=week.substr(0,week.length-2);

    var weekFlexible=document.getElementById("squaredOne9").checked;

    if(weekFlexible){
        week+=' (flexible)';
    }

    fullDescription+="Days:"+week+"\n";

    var inT=document.getElementById("InputIdHourIn").value+"h";

    if(document.getElementById("squaredOne10").checked){
        inT+=' (flexible)';
    }

    var outT=document.getElementById("InputIdHourOut").value+"h";

    if(document.getElementById("squaredOne11").checked){
        outT+=' (flexible)';
    }

    fullDescription+="From "+inT+" to "+outT+"\n";

    var description=document.getElementById("TextAreaIdDescription").value;

    fullDescription+="Description:\n"+description+"\n";

    var element=document.getElementById("TableIdEmail");
    fullDescription+="Email:\n";

    for(var i=0;i<element.rows.length;i++){
        fullDescription+=element.rows[i].cells[1].getElementsByTagName("input")[0].value+"\n";
    }

    element=document.getElementById("TableIdPhone");
    fullDescription+="Phone:\n";

    for(var i=0;i<element.rows.length;i++){
        fullDescription+=element.rows[i].cells[2].getElementsByTagName("input")[0].value;
        fullDescription+=" ("+element.rows[i].cells[1].getElementsByTagName("select")[0].selectedIndex.value+")\n";
    }

    element=document.getElementById("TableIdAddress");
    fullDescription+="Address:\n";

    for(var i=0;i<element.rows.length;i++){
        fullDescription+=element.rows[i].cells[1].getElementsByTagName("input")[0].value+"\n";
    }

    sendMailJobOffer(company,name,fullDescription);
}

function removeRow(element, type, index){
    if(element.rows.length>1) {
        for(var i=index;i<element.rows.length;i++){
            element.rows[i].cells[0].innerHTML='<div id="DivIdRedCircle"><div id="DivIdCircleText" onclick="remove'+type+'('+(i-1)+')">-</div></div>';
        }
        if(index==element.rows.length-1){
            element.rows[index-1].cells[(element.rows[index-1].length-1)].innerHTML='<div id="DivIdBlueCircle"><div id="DivIdCircleText" onclick="add'+type+'()">+</div></div>';
        }
        element.deleteRow(index);
    }
    if(element.rows.length==1) {
        element.rows[0].cells[0].innerHTML='';
    }
}

function removeEmail(index) {
    var element=document.getElementById("TableIdEmail");
    removeRow(element, "Email", index);
}

function removePhone(index) {
    var element=document.getElementById("TableIdPhone");
    removeRow(element, "Phone", index);
}

function removeAddress(index) {
    var element=document.getElementById("TableIdAddress");
    removeRow(element, "Address", index);
}

function addRow(element, type){
    element.rows[element.rows.length-1].cells[(element.rows[element.rows.length-1].cells.length-1)].innerHTML="";
    if(element.rows.length==1) {
        element.rows[0].cells[0].innerHTML='<div id="DivIdRedCircle"><div id="DivIdCircleText" onclick="remove'+type+'(0)">-</div></div>';
    }
    return element.insertRow(element.rows.length);
}

function addEmail() {
    var element=document.getElementById("TableIdEmail");
    var row=addRow(element, "Email");
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = '<div id="DivIdRedCircle"><div id="DivIdCircleText" onclick="removeEmail('+(element.rows.length-1)+')">-</div></div>';
    cell2.innerHTML = '<input id="InputIdEmail"></input>';
    cell3.innerHTML = '<div id="DivIdBlueCircle"><div id="DivIdCircleText" onclick="addEmail()">+</div></div>';
}

function phoneTypes(){
    var element=document.getElementById("TableIdPhone").children[0].children[0].children[1].children[0].children[0];
    var types=["",""];
    types[0]=customTrim(element.children[0].innerHTML);
    types[1]=customTrim(element.children[1].innerHTML);
    return types;
}

function addPhone() {
    var element=document.getElementById("TableIdPhone");
    var types=phoneTypes();
    var row=addRow(element, "Phone");
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = '<div id="DivIdRedCircle"><div id="DivIdCircleText" onclick="removePhone('+(element.rows.length-1)+')">-</div></div>';
    cell2.innerHTML = '<label><select id="SelectIdPhone"><option id="OptionIdPhone">'+types[0]+'</option><option id="OptionIdPhone">'+types[1]+'</option></select></label>';
    cell3.innerHTML = '<input id="InputIdPhone"></input>';
    cell4.innerHTML = '<div id="DivIdBlueCircle"><div id="DivIdCircleText" onclick="addPhone()">+</div></div>';
}

function addAddress() {
    var element=document.getElementById("TableIdAddress");
    var row=addRow(element, "Address");
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = '<div id="DivIdRedCircle"><div id="DivIdCircleText" onclick="removeAddress('+(element.rows.length-1)+')">-</div></div>';
    cell2.innerHTML = '<input id="InputIdAddress"></input>';
    cell3.innerHTML = '<div id="DivIdBlueCircle"><div id="DivIdCircleText" onclick="addAddress()">+</div></div>';
}