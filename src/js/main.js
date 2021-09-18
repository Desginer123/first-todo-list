let form = document.getElementById('submit_task'),
	input = document.getElementById('task_name'),
	btn = document.getElementById('save_task');



let startArr = JSON.parse(localStorage.getItem('key'))

let task_list = []

if(startArr) {
	task_list = JSON.parse(localStorage.getItem('key'))
}


btn.addEventListener('click', function(e){
	e.preventDefault();
	if(input.value !== '') {
		let inputValue = input.value;
		let newTask = {
			task_name: inputValue,
			task_id: Date.now(),
			task_status: true,
		}
		task_list.push(newTask)
		let lastTaskHtml = document.createElement(
			`span`
		)
		lastTaskHtml.innerHTML = newTask.task_name
		lastTaskHtml.setAttribute('id', `${newTask.task_id}`)
		let task_ul = document.getElementById('task_list')
		task_ul.appendChild(lastTaskHtml)
		let serialObj = JSON.stringify(task_list); //сериализуем его
		localStorage.setItem('key', serialObj); //запишем его в хранилище по ключу "myKey"


		return returnObj

	}

})
let returnObj = JSON.parse(localStorage.getItem('key'));
returnObj.forEach(function(element) {
	let lastTaskS = document.createElement(
		`span`
	)
	lastTaskS.innerHTML = element.task_name
	let task_ulS = document.getElementById('task_list')
	task_ulS.appendChild(lastTaskS)
}  )

