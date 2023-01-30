function Finduser(){

gname=bname.value
console.log(gname);

gitn=gname.split(' ').join('')

alert(gitn)

fetch(`https://api.github.com/users/${gitn}`).then(response=>response.json()).then(data=>displayDetails(data))


}

function displayDetails(Userdetails){

    Usericon=Userdetails.avatar_url
    Username=Userdetails.login


    showdata.innerHTML=`

    <div id="showdata" style="background-color: white;border-radius: 25px;" class=" mt-3 p-3 container w-50 text-center justify-content-center">
    <p>click on the Avatar to go into the User account</p>

    <a target="_blank" href="https://github.com/${Username}"> <img src="${Usericon}" alt=""></a>
    
    </div>
    


    
    
    
    
    
    `




}