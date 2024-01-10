function age()
{
    let d = document.getElementById("d").value;
    let m = document.getElementById("m").value;
    let y = document.getElementById("y").value;

    let date = new Date();
    let d1 = date.getDay();
    let m1 = 1+date.getMonth();
    let y1 = date.getFullYear();
    let month = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(d>d1)
    {
        d1 = d1 + month[m1 - 1];
        m1 = m1 - 1;
    }
    if(m>m1)
    {
        m1 = m1 + 12;
        y1 = y1 - 1;
    }
    var d2 = d1 - d;
    var m2 = m1 - m;
    var y2 = y1 - y;

    document.getElementById("content").innerHTML = 'Your age is: '+' '+ y2+' '+'years'+' '+ m2+' ' +'months'+' '+d2+' ' +'days';
}
function age1()
{
    document.getElementById("d").value=" ";
    document.getElementById("m").value=" ";
    document.getElementById("y").value=" ";
    document.getElementById("content").innerHTML=" ";
}