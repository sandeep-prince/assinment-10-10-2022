
let userdata;
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((json) => {
    userdata = json;
    let htmlcode = '';
    userdata.forEach((list) => {
        htmlcode += `
          <tr>
           <td>${list.userId}</td>
           <td>${list.id}</td>
           <td>${list.title}</td>
           <td>${list.body}</td>
          </tr>
        `
    })

    listBox.innerHTML = htmlcode;

  }

)




















































// let userData;

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => {
//     userData = json;
       

    
//       let table = document.createElement('table');
//       let thead = document.createElement('thead');
//       let tbody = document.createElement('tbody');

//       table.appendChild(thead);
//       table.appendChild(tbody);

//       // Adding the entire table to the body tag
//       document.getElementById('body').appendChild(table);

//       // Creating and adding data to first row of the table
//       let row_1 = document.createElement('tr');
//       let heading_1 = document.createElement('th');
//       heading_1.innerHTML = "userId";
//       let heading_2 = document.createElement('th');
//       heading_2.innerHTML = "id";
//       let heading_3 = document.createElement('th');
//       heading_3.innerHTML = "tittle";
//       let heading_4 = document.createElement('th');
//       heading_4.innerHTML = "completed";

//       row_1.appendChild(heading_1);
//       row_1.appendChild(heading_2);
//       row_1.appendChild(heading_3);
//       row_1.appendChild(heading_4);
//       thead.appendChild(row_1);

//       // Creating and adding data to second row of the table
//       let row_2 = document.createElement('tr');
//       let row_2_data_1 = document.createElement('td');
//       row_2_data_1.textContent = userData.userId;

//       let row_2_data_2 = document.createElement('td');
//       row_2_data_2.innerHTML = userData.id;
//       let row_2_data_3 = document.createElement('td');
//       row_2_data_3.innerHTML = userData.title;
//       let row_2_data_4 = document.createElement('td');
//       row_2_data_4.innerHTML = userData.completed;

//       row_2.appendChild(row_2_data_1);
//       row_2.appendChild(row_2_data_2);
//       row_2.appendChild(row_2_data_3);
//       row_2.appendChild(row_2_data_4);
//       tbody.appendChild(row_2);

// });
