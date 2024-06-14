     // Initialize line chart with empty data
     var ctx = document.getElementById('lineChart').getContext('2d');
     var lineChart = new Chart(ctx, {
         type: 'line',
         data: {
             labels: [],
             datasets: [{
                 label: 'Blood Sugar Level - Mg/DL',
                 data: [],
                 borderWidth: 1,
                 fill: false
             }]
         },
         options: {
             scales: {
                 yAxes: [{
                     ticks: {
                         beginAtZero: true
                     }
                 }]
             }
         }
     });
 
     // Function to add data to line chart
     function addData() {
         var label = document.getElementById('labelInput').value;
         var number = parseInt(document.getElementById('numberInput').value);
         var borderColor = number < 70 || number > 99 ? 'rgba(255, 0, 0, 0.8)' : 'rgba(0, 238, 131, 0.8)';
 
         if(label !== "" && !isNaN(number)) {
             // Find the correct position to insert the new date
             var index = 0;
             while (index < lineChart.data.labels.length && label > lineChart.data.labels[index]) {
                 index++;
             }
 
             // Insert the new date and blood sugar level
             lineChart.data.labels.splice(index, 0, label);
             lineChart.data.datasets.forEach((dataset) => {
                 dataset.data.splice(index, 0, number);
                 dataset.borderColor = borderColor;
             });
 
             // Update the chart
             lineChart.update();
         } else {
             alert("Please enter both label and a valid number.");
         }
     }