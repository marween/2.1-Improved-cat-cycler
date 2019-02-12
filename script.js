
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

import axios from 'axios';


var url = "https://aws.random.cat/meow";

const getcat = async () =>{

	let response = await axios.get(url)
	document.querySelector("#cat").src=response.data.file;
}
setInterval(()=>{getcat()},1000);
console.log("Hey look in your browser console. It works!");