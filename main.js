var name_of_students_array=[];

function submit() {
     var display_name_of_the_students_array=[];
     for(var i=1; i<=4; i++) {
         var nameofstudent=document.getElementById("name_of_the_student_"+i).value;
         console.log(nameofstudent);
         name_of_students_array.push(nameofstudent);
         
     }
     console.log(name_of_students_array);

     var len=name_of_students_array.length;
     console.log(len);
     for(var k=0; k<len; k++) {
        display_name_of_the_students_array.push("<h4>NAME - "+name_of_students_array[k]+"</h4>");
     }
     console.log(display_name_of_the_students_array);
     document.getElementById("display_name_with_commas").innerHTML=display_name_of_the_students_array;

     document.getElementById("display_name_without_commas").innerHTML=display_name_of_the_students_array.join(" ");
     document.getElementById("submit_button").style.display="none";
     document.getElementById("sort_button").style.display="inline-block";


    }

    function sorting() {
        name_of_students_array.sort();
        var len=name_of_students_array.length;
        var sorted_display_name_of_the_students_array=[];
        for(var k=0; k<len; k++) {
            sorted_display_name_of_the_students_array.push("<h4>NAME - "+name_of_students_array[k]+"</h4>");
         }
         console.log(sorted_display_name_of_the_students_array);  
         document.getElementById("display_name_without_commas").innerHTML=sorted_display_name_of_the_students_array.join(" ");
    }

