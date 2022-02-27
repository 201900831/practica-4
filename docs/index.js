    let activity= {};
    let getAct = async ()=>{
        let response= await fetch("https://www.boredapi.com/api/activity/");


        if(response.ok){
        activity= await response.json();
        console.log(activity);
        document.getElementById('setup').innerHTML = activity.setup;


        }
    }
    getAct();

    function getActivity() {


          document.getElementById('setup').innerHTML = activity.delivery;

          }