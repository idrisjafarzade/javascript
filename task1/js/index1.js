
// var s= parseInt(prompt("toplama 1  ferq 2 qismet 3 hasili 4"));
// switch (s) {
    
//     case 1:
//         var a= parseInt(prompt("1ci reqem"));
//         var b=parseInt(prompt("2ci reqem"));
//         function colculator(a, b){
//             var result=a + b
//             alert("reqemlerin cemi:" + result)
//         }
//         colculator(a, b);
//         break;
//     case 2:
//         var a= parseInt(prompt("1ci reqem"));
//         var b=parseInt(prompt("2ci reqem"));
//         function colculator(a, b){
//             var result=a - b
//             alert("reqemlerin ferq:" + result)
//         }
//         colculator(a, b);
//         break;
//     case 3:
//         var a= parseInt(prompt("1ci reqem"));
//         var b=parseInt(prompt("2ci reqem"));
//         function colculator(a, b){
//             var result=a / b
//             alert("reqemlerin qismet:" + result)
//         }
//         colculator(a, b);
//         break;
//     case 4:
//         var a= parseInt(prompt("1ci reqem"));
//         var b=parseInt(prompt("2ci reqem"));
//         function colculator(a, b){
//             var result=a * b
//             alert("reqemlerin hasili :" + result)
//         }
//         colculator(a, b);
//         break;
//     case 5:
//         var a= parseInt(prompt("1ci reqem"));
//         var b=parseInt(prompt("2ci reqem"));
//         function colculator(a, b){
//          var result=a + b
//          alert("reqemlerin cemi:" + result)
//          var result=a - b
//          alert("reqemlerin ferqi:" + result)
//          var result=a / b
//          alert("reqemlerin qismet:" + result)
//          var result=a * b
//          alert("reqemlerin hasili:" + result)
//         }
//         colculator(a, b);
//         break;
        
//     default:
//     break;
// }

while (true) {
 var input= parseInt(prompt("toplama ucun 1,  cixma ucun 2, bolme ucun 3, vurma ucun 4, hamisi ucun 5 secin"));
    
    if (input==1) {
        
    
        var a= parseInt(prompt("1ci reqem"));
        var b=parseInt(prompt("2ci reqem"));
        function colculator(a, b){
            var result=a + b
            alert("reqemlerin cemi:" + result)
        }
        colculator(a, b);
        break;
    }
    else if (input==2) {
        var a= parseInt(prompt("1ci reqem"));
        var b=parseInt(prompt("2ci reqem"));
        function colculator(a, b){
            var result=a - b
            alert("reqemlerin ferq:" + result)
        }
        colculator(a, b);
        break;
    } 
        
    else if (input==3) {
        var a= parseInt(prompt("1ci reqem"));
        var b=parseInt(prompt("2ci reqem"));
        function colculator(a, b){
            var result=a / b
            alert("reqemlerin qismet:" + result)
        }
        colculator(a, b);
        break;   
    }
       
    else if (input==4) {
        var a= parseInt(prompt("1ci reqem"));
        var b=parseInt(prompt("2ci reqem"));
        function colculator(a, b){
            var result=a * b
            alert("reqemlerin hasili :" + result)
        }
        colculator(a, b);
        break;
    }
       
   else if (input==5) {
        var a= parseInt(prompt("1ci reqem"));
        var b=parseInt(prompt("2ci reqem"));
        function colculator(a, b){
         var result=a + b
         alert("reqemlerin cemi:" + result)
         var result=a - b
         alert("reqemlerin ferqi:" + result)
         var result=a / b
         alert("reqemlerin qismet:" + result)
         var result=a * b
         alert("reqemlerin hasili:" + result)
        }
        colculator(a, b);
        break;
    }
    alert("verlilenlerden daxil edin")
}




