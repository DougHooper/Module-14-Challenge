


// function that updates the dashboard
// function that populates the meta data
function demoinfo(sample)
{
    // console.log(sample);
    d3.json("samples.json").then((data) => {
        
        let sampleData = data.samples;
        
        console.log(sampleData);
        Object.entries(resultData).forEach(([key, value]) =>{
            d3.select("#sample-metadata")
                .append("h5").text('${key}: ${value}');
        });
    };
}

function buildBarChart(sample)
{
    //console.log(sample);
    //let data = d3.json("samples.json");
    //console.log(data);

    d3.json("samples.json").then((data) => {
        
        //let metaData = data.metadata;
        //let result = metaData.filter(sampleResult => sampleResult.id == sample);
        let sampleData = data.samples;
        //console.log(sampleData);

        let result = sampleData.filter(sampleResult => sampleResult.id == sample);
        //Object.entries(resultData).forEach(([key, value]) =>{
           // d3.select("#sample-metadata")
           //     .append("h5").text('${key}: ${value}');
        let resultData = result[0];
        

        let otu_ids = resultdata.otu_ids;
        let otu_labels = resultData.otu_labels;
        let sample_values = resultData.sample_values;
        console.log(otu.ids);
        console.log(oru_labels);
        console.log(sample_values);

        let yticks = otu_ids.slice(0, 10).map(id =>'OTU ${id}');
        let xValues = sample_values.slice(0,10);
        let textLabels = otu_labels.slice(0,10);

        let bubbleChart = {
            y: sample_values,
            x: otu_ids,
            text: otu_labels,
            mode:'markers',
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: 'Earth'
            }
        }

        let layout = {
            title:"Bacteria Cultures Per Sample",
            hovermode: "closest",
            xaxis: {title: "OTU ID"}
        };
            orientation: 'h' 

        }

        let layout = 
        {
            title: "Top 10 Belly Button"
        };
    }
        
        
       // });
    
// function that builds the graphs
// function that initializes the dashboard
function optionChanged(item)
{
    
        demoinfo(sample1);

        buildBarChart(sample1);

        buildBubbleChart(sample1)
}
    


// call the initalize function
initialize();

