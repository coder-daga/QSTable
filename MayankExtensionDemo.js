define( [],
    function ( ) 
	{
        'use strict';

        return {
            definition: {
				type: "items",
				component: "accordion",
				items: {
					dimensions: {
						uses: "dimensions"
					},
					measures: {
						uses: "measures"
					},
					sorting: {
						uses: "sorting"
					},
					appearance: {
						uses: "settings"
					}
				}
			},
			initialProperties: {
				qHyperCubeDef: {
					qDimensions: [],
					qMeasures: [],
					qInitialDataFetch: [
						{
							qWidth: 10,
							qHeight: 100
						}
					]
				}
			},
			paint: function ( $element, layout ) {

				var hc = layout.qHyperCube;
				console.log( 'Data returned: ', hc );

				$element.empty();
				var table = '<table border="1">';

					table += '<thead>';
						table += '<tr>';
							for (var i = 0; i < hc.qDimensionInfo.length; i++) 
							{
								table += '<th style="background-color:red;color:white;">' + hc.qDimensionInfo[i].qFallbackTitle + '</th>';
							}
							for (var i = 0; i < hc.qMeasureInfo.length; i++) 
							{
								table += '<th style="background-color:red;color:white;">' + hc.qMeasureInfo[i].qFallbackTitle + '</th>';
							}
						table += '</tr>';
					table += '</thead>';

					table += '<tbody>';

						// iterate over all rows
						for (var r = 0; r < hc.qDataPages[0].qMatrix.length; r++) 
						
						{
						  if(r%2 ==0){
									table += '<tr style="background-color: #F5F5F5;">';
								}else{
								
							table += '<tr>';}

							// iterate over all cells within a row
							for (var c = 0; c < hc.qDataPages[0].qMatrix[r].length; c++) 
							{
								if(hc.qDataPages[0].qMatrix[r][c].qNum > 10)
								{
								table += '<td style = "color : black;">';
								}
								else if(hc.qDataPages[0].qMatrix[r][c].qNum < 10){
								table += '<td style = "color : red;">';
								}
								else{
								table += '<td >';
								}
									table += hc.qDataPages[0].qMatrix[r][c].qText;
								table += '</td>';
							}
							table += '</tr>';
						}
					table += '</tbody>';
				table += '</table>';
				$element.append( table );
			}
        };
    } );