 /*   let activity= {};
    let getAct = async ()=>{
        let response= await fetch("https://www.boredapi.com/api/activity?participants=1");


        if(response.ok){
        act= await response.json();
        console.log(act);
        document.getElementById('activity').innerHTML = act.activity;
        document.getElementById('participants').innerHTML = act.participants;
        document.getElementById('price').innerHTML = act.price;
        document.getElementById('type').innerHTML = act.type;

        }
    }*/
let url= 'https://www.boredapi.com/api/activity?participants=';
let = act = {}
let getAct= async() => {
    participants = document.querySelector('#select');
    value=participants.value;
    console.log(participants);
    link=url+value;
    console.log(link)
    let response = await fetch(link);
    if(response.ok){
        act= await response.json();
        console.log(act);
        document.getElementById('activity').innerHTML = act.activity;
        document.getElementById('participants').innerHTML = act.participants;
        document.getElementById('price').innerHTML = act.price;
        document.getElementById('type').innerHTML = act.type;
}
}
