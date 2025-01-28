var wms_layers = [];

var format_union_Clip_0 = new ol.format.GeoJSON();
var features_union_Clip_0 = format_union_Clip_0.readFeatures(json_union_Clip_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_union_Clip_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_union_Clip_0.addFeatures(features_union_Clip_0);
var lyr_union_Clip_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_union_Clip_0, 
                style: style_union_Clip_0,
                popuplayertitle: 'union_Clip',
                interactive: true,
                title: '<img src="styles/legend/union_Clip_0.png" /> union_Clip'
            });
var format_intersect_Clip_1 = new ol.format.GeoJSON();
var features_intersect_Clip_1 = format_intersect_Clip_1.readFeatures(json_intersect_Clip_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_intersect_Clip_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_intersect_Clip_1.addFeatures(features_intersect_Clip_1);
var lyr_intersect_Clip_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_intersect_Clip_1, 
                style: style_intersect_Clip_1,
                popuplayertitle: 'intersect_Clip',
                interactive: true,
                title: '<img src="styles/legend/intersect_Clip_1.png" /> intersect_Clip'
            });
var format_export_ExportFeatures_ExportFeatureskopia_2 = new ol.format.GeoJSON();
var features_export_ExportFeatures_ExportFeatureskopia_2 = format_export_ExportFeatures_ExportFeatureskopia_2.readFeatures(json_export_ExportFeatures_ExportFeatureskopia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_export_ExportFeatures_ExportFeatureskopia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_export_ExportFeatures_ExportFeatureskopia_2.addFeatures(features_export_ExportFeatures_ExportFeatureskopia_2);
var lyr_export_ExportFeatures_ExportFeatureskopia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_export_ExportFeatures_ExportFeatureskopia_2, 
                style: style_export_ExportFeatures_ExportFeatureskopia_2,
                popuplayertitle: 'export_ExportFeatures_ExportFeatures kopia',
                interactive: true,
    title: 'export_ExportFeatures_ExportFeatures kopia<br />\
    <img src="styles/legend/export_ExportFeatures_ExportFeatureskopia_2_0.png" /> -100% - -60%<br />\
    <img src="styles/legend/export_ExportFeatures_ExportFeatureskopia_2_1.png" /> -60% - -20%<br />\
    <img src="styles/legend/export_ExportFeatures_ExportFeatureskopia_2_2.png" /> -20% - 0%<br />\
    <img src="styles/legend/export_ExportFeatures_ExportFeatureskopia_2_3.png" /> 0% - 20%<br />\
    <img src="styles/legend/export_ExportFeatures_ExportFeatureskopia_2_4.png" /> 20% - 60%<br />\
    <img src="styles/legend/export_ExportFeatures_ExportFeatureskopia_2_5.png" /> 60% - 100%<br />'
        });
var format_export_ExportFeatures_ExportFeatures_3 = new ol.format.GeoJSON();
var features_export_ExportFeatures_ExportFeatures_3 = format_export_ExportFeatures_ExportFeatures_3.readFeatures(json_export_ExportFeatures_ExportFeatures_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_export_ExportFeatures_ExportFeatures_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_export_ExportFeatures_ExportFeatures_3.addFeatures(features_export_ExportFeatures_ExportFeatures_3);
var lyr_export_ExportFeatures_ExportFeatures_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_export_ExportFeatures_ExportFeatures_3, 
                style: style_export_ExportFeatures_ExportFeatures_3,
                popuplayertitle: 'export_ExportFeatures_ExportFeatures',
                interactive: true,
    title: 'export_ExportFeatures_ExportFeatures<br />\
    <img src="styles/legend/export_ExportFeatures_ExportFeatures_3_0.png" /> -100% - -60%<br />\
    <img src="styles/legend/export_ExportFeatures_ExportFeatures_3_1.png" /> -60% - -20%<br />\
    <img src="styles/legend/export_ExportFeatures_ExportFeatures_3_2.png" /> -20% - 0%<br />\
    <img src="styles/legend/export_ExportFeatures_ExportFeatures_3_3.png" /> 0% - 20%<br />\
    <img src="styles/legend/export_ExportFeatures_ExportFeatures_3_4.png" /> 20% - 60%<br />\
    <img src="styles/legend/export_ExportFeatures_ExportFeatures_3_5.png" /> 60% - 100%<br />'
        });
var format_BUG_1940_Clip_4 = new ol.format.GeoJSON();
var features_BUG_1940_Clip_4 = format_BUG_1940_Clip_4.readFeatures(json_BUG_1940_Clip_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUG_1940_Clip_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUG_1940_Clip_4.addFeatures(features_BUG_1940_Clip_4);
var lyr_BUG_1940_Clip_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUG_1940_Clip_4, 
                style: style_BUG_1940_Clip_4,
                popuplayertitle: 'BUG_1940_Clip',
                interactive: true,
                title: '<img src="styles/legend/BUG_1940_Clip_4.png" /> BUG_1940_Clip'
            });
var format_vmap_1990_Clip_5 = new ol.format.GeoJSON();
var features_vmap_1990_Clip_5 = format_vmap_1990_Clip_5.readFeatures(json_vmap_1990_Clip_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vmap_1990_Clip_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vmap_1990_Clip_5.addFeatures(features_vmap_1990_Clip_5);
var lyr_vmap_1990_Clip_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vmap_1990_Clip_5, 
                style: style_vmap_1990_Clip_5,
                popuplayertitle: 'vmap_1990_Clip',
                interactive: true,
                title: '<img src="styles/legend/vmap_1990_Clip_5.png" /> vmap_1990_Clip'
            });
var format_sent_2024_Clip_6 = new ol.format.GeoJSON();
var features_sent_2024_Clip_6 = format_sent_2024_Clip_6.readFeatures(json_sent_2024_Clip_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sent_2024_Clip_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sent_2024_Clip_6.addFeatures(features_sent_2024_Clip_6);
var lyr_sent_2024_Clip_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sent_2024_Clip_6, 
                style: style_sent_2024_Clip_6,
                popuplayertitle: 'sent_2024_Clip',
                interactive: true,
                title: '<img src="styles/legend/sent_2024_Clip_6.png" /> sent_2024_Clip'
            });

lyr_union_Clip_0.setVisible(true);lyr_intersect_Clip_1.setVisible(true);lyr_export_ExportFeatures_ExportFeatureskopia_2.setVisible(true);lyr_export_ExportFeatures_ExportFeatures_3.setVisible(true);lyr_BUG_1940_Clip_4.setVisible(true);lyr_vmap_1990_Clip_5.setVisible(true);lyr_sent_2024_Clip_6.setVisible(true);
var layersList = [lyr_union_Clip_0,lyr_intersect_Clip_1,lyr_export_ExportFeatures_ExportFeatureskopia_2,lyr_export_ExportFeatures_ExportFeatures_3,lyr_BUG_1940_Clip_4,lyr_vmap_1990_Clip_5,lyr_sent_2024_Clip_6];
lyr_union_Clip_0.set('fieldAliases', {'FID_sentin': 'FID_sentin', 'Id': 'Id', 'gridcode': 'gridcode', 'FID_BUG_19': 'FID_BUG_19', 'Id_1': 'Id_1', 'Shape_Leng': 'Shape_Leng', 'FID_RZEKA_': 'FID_RZEKA_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_12': 'ID_12', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_intersect_Clip_1.set('fieldAliases', {'FID_sentin': 'FID_sentin', 'Id': 'Id', 'gridcode': 'gridcode', 'FID_RZEKA_': 'FID_RZEKA_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID_1', 'FID_BUG_19': 'FID_BUG_19', 'Id_12': 'Id_12', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_export_ExportFeatures_ExportFeatureskopia_2.set('fieldAliases', {'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'PERCENTA_1': 'PERCENTA_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'v_min_his': 'v_min_his', 'sen_min_vm': 'sen_min_vm', });
lyr_export_ExportFeatures_ExportFeatures_3.set('fieldAliases', {'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'PERCENTA_1': 'PERCENTA_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'v_min_his': 'v_min_his', 'sen_min_vm': 'sen_min_vm', });
lyr_BUG_1940_Clip_4.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'pole': 'pole', 'obwod': 'obwod', 'wskaz': 'wskaz', });
lyr_vmap_1990_Clip_5.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'pole': 'pole', 'obwod': 'obwod', 'wskaznik': 'wskaznik', });
lyr_sent_2024_Clip_6.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'pole': 'pole', 'obwod': 'obwod', 'wskaz': 'wskaz', });
lyr_union_Clip_0.set('fieldImages', {'FID_sentin': '', 'Id': '', 'gridcode': '', 'FID_BUG_19': '', 'Id_1': '', 'Shape_Leng': '', 'FID_RZEKA_': '', 'DLUG_BRZEG': '', 'DLUGOSC': '', 'DOKLADNOSC': '', 'DOSTEPNOSC': '', 'GLEBOKOSC': '', 'ISTNIENIE': '', 'KAT_HYDRO': '', 'KAT_PLYWU': '', 'KAT_POJEMN': '', 'KAT_POLOZ': '', 'KAT_WODY': '', 'NAJW_WYS': '', 'NAZWA': '', 'OBIEKT': '', 'OPR_UPUST': '', 'OPR_ZBURZ': '', 'POCH_HYDRO': '', 'PRED_PRZEP': '', 'SREDNIA_GL': '', 'STAT_EKSPL': '', 'SZEROKOSC': '', 'TAJNOSC': '', 'TYP_AKWED': '', 'TYP_WYBRZ': '', 'ZN_ORIENT': '', 'POWIERZCHN': '', 'ID_12': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_intersect_Clip_1.set('fieldImages', {'FID_sentin': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'FID_RZEKA_': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'TextEdit', 'FID_BUG_19': 'TextEdit', 'Id_12': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_export_ExportFeatures_ExportFeatureskopia_2.set('fieldImages', {'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'v_min_his': 'TextEdit', 'sen_min_vm': 'TextEdit', });
lyr_export_ExportFeatures_ExportFeatures_3.set('fieldImages', {'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'v_min_his': 'TextEdit', 'sen_min_vm': 'TextEdit', });
lyr_BUG_1940_Clip_4.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'pole': 'TextEdit', 'obwod': 'TextEdit', 'wskaz': 'TextEdit', });
lyr_vmap_1990_Clip_5.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'pole': 'TextEdit', 'obwod': 'TextEdit', 'wskaznik': 'TextEdit', });
lyr_sent_2024_Clip_6.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'pole': 'TextEdit', 'obwod': 'TextEdit', 'wskaz': 'TextEdit', });
lyr_union_Clip_0.set('fieldLabels', {'FID_sentin': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'FID_BUG_19': 'no label', 'Id_1': 'no label', 'Shape_Leng': 'no label', 'FID_RZEKA_': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_12': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_intersect_Clip_1.set('fieldLabels', {'FID_sentin': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'FID_RZEKA_': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_1': 'no label', 'FID_BUG_19': 'no label', 'Id_12': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_export_ExportFeatures_ExportFeatureskopia_2.set('fieldLabels', {'GRID_ID': 'no label', 'PERCENTAGE': 'no label', 'PERCENTA_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'v_min_his': 'no label', 'sen_min_vm': 'no label', });
lyr_export_ExportFeatures_ExportFeatures_3.set('fieldLabels', {'GRID_ID': 'no label', 'PERCENTAGE': 'no label', 'PERCENTA_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'v_min_his': 'no label', 'sen_min_vm': 'no label', });
lyr_BUG_1940_Clip_4.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'pole': 'no label', 'obwod': 'no label', 'wskaz': 'no label', });
lyr_vmap_1990_Clip_5.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'pole': 'no label', 'obwod': 'no label', 'wskaznik': 'no label', });
lyr_sent_2024_Clip_6.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'pole': 'no label', 'obwod': 'no label', 'wskaz': 'no label', });
lyr_sent_2024_Clip_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});