
function float2dollar(value){
    return (value).toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function getaverage(dir)
{
	return [26909.455050000004,26864.179700000004,26925.59475,26804.215799999998,26206.0791,25974.33005,26431.2197,26540.18945,26280.80565,26337.03025,26458.91015,26854.08495,26811.7549,26965.654300000002,27000.81445,27041.22465,26894.19045,26800.144500000002,26864.625,26820.945299999996,26823.05955,26890.5244,27098.2959,27102.84965,27102.0,27053.3291,27245.18945,27459.820300000003,27506.9551,27466.93065,27682.41505,27636.95995,27616.030249999996,27703.08985,27696.7998,27738.8408,27924.214850000004,28005.10545,27992.365199999997,27786.279299999995,27768.33495,27836.220700000005,27993.2295,28094.1152,28125.1006,28081.019550000005,27946.094699999998,27424.93555,27669.76465,27653.999999999996,26481.68486016552,26412.64552645284,26526.29274071715];
}
function getopen(dir)
{
	return [27004.109399999998,26987.259799999996,26852.3301,26962.539099999998,26425.8594,26039.0195,26271.6992,26502.3301,26276.5898,26308.2305,26317.3496,26694.199199999995,26766.4297,26811.1992,26972.3105,27032.3809,27004.490199999997,26852.669899999997,26850.429700000004,26835.2402,26893.9297,26789.6094,27040.3301,27061.0703,27110.7109,27188.3691,27142.9492,27402.0605,27500.230500000005,27502.7402,27590.160199999995,27686.199200000003,27580.660200000002,27701.5898,27622.0391,27757.1992,27843.539099999998,27993.2207,28079.759800000003,27879.5508,27820.279299999995,27831.230500000005,27917.7695,28080.75,28156.4707,28103.1602,28109.740200000004,27501.980499999998,27634.6309,27736.0996,26489.5726510561,26420.476164706168,26534.42465076524];
}
function gethigh(dir)
{
	return [27015.0703,27012.5391,26998.8594,27046.2109,26438.0391,26205.1992,26590.7402,26655.8398,26421.8105,26424.3105,26603.3105,27013.9707,26874.3301,27120.1094,27058.339800000005,27112.160200000002,27018.25,26852.6699,26946.6406,26896.8906,26931.7793,27015.369099999996,27167.8809,27165.939499999997,27204.359399999998,27188.3691,27347.4297,27517.5801,27560.3594,27526.0508,27774.6699,27694.9492,27714.390599999995,27770.8594,27806.4004,27800.7109,28004.890600000002,28040.9707,28090.2109,27897.2793,27828.3301,27898.4609,28068.689499999997,28146.0195,28174.9707,28119.509800000003,28109.8398,27524.740199999997,27727.449199999995,27745.199199999995,26580.26417377881,26511.394149693766,26624.94533419899];
}
function getlow(dir)
{
	return [26803.8398,26715.8203,26852.330100000003,26562.2207,25974.1191,25743.4609,26271.6992,26424.5391,26139.8008,26249.75,26314.5098,26694.1992,26749.179699999997,26811.199199999995,26943.2891,26970.2891,26770.1309,26747.6191,26782.609400000005,26745.0,26714.3398,26765.679699999997,27028.710899999995,27039.7598,26999.6406,26918.2891,27142.949200000003,27402.060500000003,27453.5508,27407.8105,27590.1602,27578.9707,27517.669900000004,27635.320300000003,27587.199199999995,27676.9707,27843.5391,27969.240200000004,27894.519499999995,27675.2793,27708.339800000005,27773.980500000005,27917.7695,28042.210900000002,28075.2305,28042.529299999995,27782.349600000005,27325.1309,27612.0801,27562.8008,26387.068074577237,26317.850375869195,26431.609306718045];
}
function getclose(dir)
{
	return [26891.119099999996,26820.25,26916.8301,26573.0391,26078.6191,26201.0391,26573.720699999998,26478.019499999995,26164.0391,26346.0098,26496.669900000004,26816.589800000005,26787.359399999998,27024.8008,27001.980499999998,27025.8809,26770.1992,26827.6406,26788.099599999998,26833.949199999995,26805.5293,26958.060500000003,27090.720699999998,27071.4609,27186.689500000004,27046.2305,27347.359400000005,27462.1094,27492.6309,27492.5605,27674.8008,27681.2402,27691.4902,27691.4902,27783.5898,27781.9609,28004.8906,28036.2207,27934.0195,27821.0898,27766.289100000005,27875.619099999996,28066.4707,28121.679700000004,28164.000000000004,28051.410199999995,27783.0391,27502.8105,27649.7793,27677.7891,26500.680678845827,26431.614791527478,26545.02480080706];
}
function getvolume(dir)
{
	return [229180000.0,217780000.0,222680000.0,260110000.0,309640000.0,241610000.0,221310000.0,195200000.0,244590000.0,190060000.0,217680000.0,282080000.0,178620000.0,245510000.0,214660000.0,222540000.0,288970000.0,241030000.0,265510000.0,247679999.99999997,253590000.0,274610000.0,290770000.0,269610000.0,231750000.0,270910000.0,270870000.0,273030000.0,286350000.0,237910000.0,259020000.0,221440000.0,202350000.0,213670000.0,278390000.0,303970000.0,283720000.0,252320000.0,245890000.0,258140000.0,232020000.0,214779999.99999997,248420000.0,324050000.0,198210000.0,120630000.0,236610000.0,275350000.0,213580000.0,219994940.0,267416182.10703135,268687364.9533093,272619501.63796544]
}
function getadjclose(dir)
{
	return [26891.119099999996,26820.25,26916.8301,26573.0391,26078.6191,26201.0391,26573.720699999998,26478.019499999995,26164.0391,26346.0098,26496.669900000004,26816.589800000005,26787.359399999998,27024.8008,27001.980499999998,27025.8809,26770.1992,26827.6406,26788.099599999998,26833.949199999995,26805.5293,26958.060500000003,27090.720699999998,27071.4609,27186.689500000004,27046.2305,27347.359400000005,27462.1094,27492.6309,27492.5605,27674.8008,27681.2402,27691.4902,27691.4902,27783.5898,27781.9609,28004.8906,28036.2207,27934.0195,27821.0898,27766.289100000005,27875.619099999996,28066.4707,28121.679700000004,28164.000000000004,28051.410199999995,27783.0391,27502.8105,27649.7793,27677.7891,26500.677673890757,26431.611786572408,26545.01879089692]
}
function getlabel(dir)
{
	return ["2019-09-26","2019-09-27","2019-09-30","2019-10-01","2019-10-02","2019-10-03","2019-10-04","2019-10-07","2019-10-08","2019-10-09","2019-10-10","2019-10-11","2019-10-14","2019-10-15","2019-10-16","2019-10-17","2019-10-18","2019-10-21","2019-10-22","2019-10-23","2019-10-24","2019-10-25","2019-10-28","2019-10-29","2019-10-30","2019-10-31","2019-11-01","2019-11-04","2019-11-05","2019-11-06","2019-11-07","2019-11-08","2019-11-11","2019-11-12","2019-11-13","2019-11-14","2019-11-15","2019-11-18","2019-11-19","2019-11-20","2019-11-21","2019-11-22","2019-11-25","2019-11-26","2019-11-27","2019-11-29","2019-12-02","2019-12-03","2019-12-04","2019-12-05","2019-12-06","2019-12-09","2019-12-10"];
}

function renderChart(data, labels, chartname) {
	var bgcolor = [];
    var ctx = document.getElementById(chartname).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
				label: '',
                data: data,
                pointborderColor: bgcolor,
				pointBackgroundColor: bgcolor,
				borderColor: bgcolor,
                backgroundColor: 'rgba(25, 198, 225, 0.1)'
            }, {label: '50 Days stock price',backgroundColor: '#000080'}, 
			{label: 'Prediction Value', backgroundColor: '#FF0000'}]
        },
        options: { 
			legend: {
				labels: {
					filter: function(legendItem, chartData) {
						if (legendItem.datasetIndex === 0) {
							return false;
						}
							return true;
						}
					}
				},
			responsive: true,		
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(value, index, values) {
                            return float2dollar(value);
                        }
                    }
                }]                
            }			
        },
    });
	
	for (i = 0; i < myChart.data.datasets[0].data.length; i++) {
		if (i > 49) 
		{
			bgcolor.push('#FF0000');
		} 
		else 
		{
			bgcolor.push('#000080');
		}
	}
	myChart.update();
}

$(document).ready(
    function () {
        average = getaverage();
		opening = getopen();
		highest = gethigh();
		lowest = getlow();
		closing = getclose();
		adj = getadjclose();
		volume = getvolume();
        labels =  getlabel();
        renderChart(average, labels, "average");
		renderChart(opening, labels, "open");
		renderChart(highest, labels, "high");
		renderChart(lowest, labels, "low");
		renderChart(closing, labels, "close");
		renderChart(volume, labels, "volume");
		renderChart(adj, labels, "adjusted close");
    }
);