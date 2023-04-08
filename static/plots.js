// Example JS code to read from a local Flask API service


let layout = {
    height: 600,
    width: 800
  };

let all_plot_data = {};

function init(data){
    /*
     * Stores data in the all_plot_data variable and  
     * initializes the plot using the first country name.
     */

    let names = Object.keys(data);
    let labels = Object.keys(data[names[0]]);
    all_plot_data = data;

    // Populate the dropdown from the list/array
    selector = d3.select("#selDataset");
    for (let i = 0; i < names.length; i++){
        //console.log(countries[names[i]])
        selector.append("option").text(names[i]).property("value", names[i]);
    }

    trace = {
        labels: labels,
        values: Object.values(data[names[0]]),
        type: "pie"
    };
    Plotly.plot("pie",[trace],layout);
}

function updatePlotly(dataset){
    /*
     * Updates the plot based on a selected dataset
     */
    let names = Object.keys(all_plot_data);
    let labels = Object.keys(all_plot_data[names[0]]);

    console.log(`user selected ${dataset}`);

    // Select plot update data based on dropdown value 
    let newData = Object.values(all_plot_data[dataset]);
    
    trace = {
        labels: labels,
        values: newData,
        type: "pie"
    };
    Plotly.plot("pie",[trace],layout);
}

// make the call to a local flask API 
// (the server in app.py must be running locally for this to work)
d3.json("http://127.0.0.1:5000/api/v1.0/piechart_data").then((data)=>{
    console.log("Initializing...")
    init(data);
})