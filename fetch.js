
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function fetchData() {
        fetch('https://api.fda.gov/drug/ndc.json?search=product_type:"HUMAN"&limit=5')
            .then(response => response.json())
            .then(data => {
                const results = data.results;
                const shuffledResults = shuffleArray(results); // Shuffle the results

                const container = document.getElementById('drug-container');
                container.innerHTML = ''; // Clear previous data

                shuffledResults.forEach(result => {
                    const item = document.createElement('div');
                    item.innerHTML = `                    
                    <div class="column">
                    <div class="vw-100">
                    <div class="min-vh-10">
                    <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Generic Name: ${result.generic_name}</h5>
                        <p class="card-text">Route: ${result.route}<br>
                        <br>Dosage Form: ${result.dosage_form}
                        <br>Pharmacy Class: ${result.pharm_class}
                        <br>Product Type: ${result.product_type}
                        </p>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    `;
                    container.appendChild(item);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Call fetchData function when the page loads
    fetchData();

