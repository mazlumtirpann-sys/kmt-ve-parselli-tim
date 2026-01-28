ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([28.456744, 41.097932, 28.483128, 41.111727]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_cakl_1 = new ol.format.GeoJSON();
var features_cakl_1 = format_cakl_1.readFeatures(json_cakl_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_cakl_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cakl_1.addFeatures(features_cakl_1);
var lyr_cakl_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cakl_1, 
                style: style_cakl_1,
                popuplayertitle: 'cakıl',
                interactive: true,
                title: '<img src="styles/legend/cakl_1.png" /> cakıl'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_cakl_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_cakl_1];
lyr_cakl_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'il': 'il', 'ilce': 'ilce', 'mahalle': 'mahalle', 'adano': 'adano', 'parselno': 'parselno', 'tapucinsac': 'tapucinsac', 'tapukimlik': 'tapukimlik', 'tapuzeminr': 'tapuzeminr', 'tapumahall': 'tapumahall', 'hazinepars': 'hazinepars', 'tapualan': 'tapualan', 'kadastroal': 'kadastroal', 'tapucinsid': 'tapucinsid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'topp': 'topp', });
lyr_cakl_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'il': 'TextEdit', 'ilce': 'TextEdit', 'mahalle': 'TextEdit', 'adano': 'TextEdit', 'parselno': 'TextEdit', 'tapucinsac': 'TextEdit', 'tapukimlik': 'TextEdit', 'tapuzeminr': 'TextEdit', 'tapumahall': 'TextEdit', 'hazinepars': 'TextEdit', 'tapualan': 'TextEdit', 'kadastroal': 'TextEdit', 'tapucinsid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'topp': 'TextEdit', });
lyr_cakl_1.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'il': 'inline label - visible with data', 'ilce': 'inline label - visible with data', 'mahalle': 'inline label - visible with data', 'adano': 'inline label - visible with data', 'parselno': 'inline label - visible with data', 'tapucinsac': 'inline label - visible with data', 'tapukimlik': 'inline label - visible with data', 'tapuzeminr': 'inline label - visible with data', 'tapumahall': 'inline label - visible with data', 'hazinepars': 'inline label - visible with data', 'tapualan': 'inline label - visible with data', 'kadastroal': 'inline label - visible with data', 'tapucinsid': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', 'topp': 'inline label - visible with data', });
lyr_cakl_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});