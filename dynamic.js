const data = [  
    { name: 'Rohit', age: 20},  
    { name: 'Mohit', age: 21}
    ]; 
    function generateTable(data) {  
        let table = '<table>';  
        table = table + '<tr><th>Name</th><th>Age</th></tr>';  
        data.forEach(item => {  
        table = table + `<tr><td>${item.name}</td><td>${item.age}</td></tr>`;  
        });  
        table =table + '</table>';  
        return table;  
        }

    const container = document.getElementById('container');  
    container.onClick = generateTable(data);