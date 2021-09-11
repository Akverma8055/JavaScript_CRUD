let id="no";
//localStorage.clear();
selectdata();
function manage() {
		document.getElementById('msg').innerHTML='';
	let name=document.getElementById('name').value;
		
	if(name==''){
		document.getElementById('msg').innerHTML="Please fill your Name.";
	}else{
		if(id=='no'){
			let arr=JSON.parse(localStorage.getItem('crud'));
			if(arr==null){
				let data=[name];
				localStorage.setItem('crud',JSON.stringify(data));

			}else{
				arr.push(name);
				
				localStorage.setItem('crud',JSON.stringify(arr));
			}
			document.getElementById('msg').innerHTML="Data Inserted";
			selectdata();
		}else{
			let arr=getCrudData();
			arr[id]=name;
			setCrudData(arr);
			document.getElementById('msg').innerHTML="Data Updated";
		}
		selectdata();
	}
}
function selectdata() {
	let arr=getCrudData();
	if(arr!=null){
		let html='';
		let sno=1;
		for(let k in arr){
			html=html+`<tr><td>${sno}</td><td>${arr[k]}</td>
			<td><a href="javascript:void(0)" onclick="editdata(${k})">Edit</a></td>
			<td><a href="javascript:void(0)" onclick="deletedata(${k})">Delete</a></td>
			</tr>`;
			sno++;
		}
		document.getElementById('root').innerHTML=html;

	}
}
function editdata(rid) {
	id=rid;
	let arr=getCrudData();
	document.getElementById('name').value=arr[rid];
}
function deletedata(rid) {
	let arr=getCrudData();
	arr.splice(rid,1);
	setCrudData(arr);
	selectdata();

}
function getCrudData()
{
	let arr=JSON.parse(localStorage.getItem('crud'));
	return arr;
}
function setCrudData(arr)
{
	localStorage.setItem('crud',JSON.stringify(arr));
}
