var wms_layers = [];

var format_boundaryUntitledProject_0 = new ol.format.GeoJSON();
var features_boundaryUntitledProject_0 = format_boundaryUntitledProject_0.readFeatures(json_boundaryUntitledProject_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundaryUntitledProject_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundaryUntitledProject_0.addFeatures(features_boundaryUntitledProject_0);
var lyr_boundaryUntitledProject_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_boundaryUntitledProject_0, 
                style: style_boundaryUntitledProject_0,
                interactive: true,
                title: 'boundary — Untitled Project'
            });
var format_boundary_1 = new ol.format.GeoJSON();
var features_boundary_1 = format_boundary_1.readFeatures(json_boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_1.addFeatures(features_boundary_1);
var lyr_boundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_boundary_1, 
                style: style_boundary_1,
                interactive: true,
                title: '<img src="styles/legend/boundary_1.png" /> boundary'
            });
var format_Hospital_2 = new ol.format.GeoJSON();
var features_Hospital_2 = format_Hospital_2.readFeatures(json_Hospital_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_2.addFeatures(features_Hospital_2);
var lyr_Hospital_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospital_2, 
                style: style_Hospital_2,
                interactive: true,
                title: 'Hospital'
            });
var format_roads_chain_3 = new ol.format.GeoJSON();
var features_roads_chain_3 = format_roads_chain_3.readFeatures(json_roads_chain_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_chain_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_chain_3.addFeatures(features_roads_chain_3);
var lyr_roads_chain_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_roads_chain_3, 
                style: style_roads_chain_3,
                interactive: true,
                title: '<img src="styles/legend/roads_chain_3.png" /> roads_chain'
            });
var format_Hospital_4 = new ol.format.GeoJSON();
var features_Hospital_4 = format_Hospital_4.readFeatures(json_Hospital_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_4.addFeatures(features_Hospital_4);
var lyr_Hospital_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospital_4, 
                style: style_Hospital_4,
                interactive: true,
                title: '<img src="styles/legend/Hospital_4.png" /> Hospital'
            });
var format_Roads_1_5 = new ol.format.GeoJSON();
var features_Roads_1_5 = format_Roads_1_5.readFeatures(json_Roads_1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_1_5.addFeatures(features_Roads_1_5);
var lyr_Roads_1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_1_5, 
                style: style_Roads_1_5,
                interactive: true,
                title: 'Roads_1'
            });
var format_schools_6 = new ol.format.GeoJSON();
var features_schools_6 = format_schools_6.readFeatures(json_schools_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_schools_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_schools_6.addFeatures(features_schools_6);
var lyr_schools_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_schools_6, 
                style: style_schools_6,
                interactive: true,
                title: 'schools'
            });
var format_Schools_7 = new ol.format.GeoJSON();
var features_Schools_7 = format_Schools_7.readFeatures(json_Schools_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schools_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_7.addFeatures(features_Schools_7);
var lyr_Schools_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Schools_7, 
                style: style_Schools_7,
                interactive: true,
                title: '<img src="styles/legend/Schools_7.png" /> Schools'
            });
var format_road_interpolation_8 = new ol.format.GeoJSON();
var features_road_interpolation_8 = format_road_interpolation_8.readFeatures(json_road_interpolation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_interpolation_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_interpolation_8.addFeatures(features_road_interpolation_8);
var lyr_road_interpolation_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_road_interpolation_8, 
                style: style_road_interpolation_8,
                interactive: true,
                title: '<img src="styles/legend/road_interpolation_8.png" /> road_interpolation'
            });
var format_scl_hsptl_9 = new ol.format.GeoJSON();
var features_scl_hsptl_9 = format_scl_hsptl_9.readFeatures(json_scl_hsptl_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_scl_hsptl_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_scl_hsptl_9.addFeatures(features_scl_hsptl_9);
var lyr_scl_hsptl_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_scl_hsptl_9, 
                style: style_scl_hsptl_9,
                interactive: true,
                title: '<img src="styles/legend/scl_hsptl_9.png" /> scl_hsptl'
            });
var format_Roads_10 = new ol.format.GeoJSON();
var features_Roads_10 = format_Roads_10.readFeatures(json_Roads_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_10.addFeatures(features_Roads_10);
var lyr_Roads_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_10, 
                style: style_Roads_10,
                interactive: true,
                title: '<img src="styles/legend/Roads_10.png" /> Roads'
            });
var format_water_11 = new ol.format.GeoJSON();
var features_water_11 = format_water_11.readFeatures(json_water_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_11.addFeatures(features_water_11);
var lyr_water_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_water_11, 
                style: style_water_11,
                interactive: true,
                title: 'water'
            });
var format_buffer_malaria_12 = new ol.format.GeoJSON();
var features_buffer_malaria_12 = format_buffer_malaria_12.readFeatures(json_buffer_malaria_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer_malaria_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_malaria_12.addFeatures(features_buffer_malaria_12);
var lyr_buffer_malaria_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buffer_malaria_12, 
                style: style_buffer_malaria_12,
                interactive: true,
                title: '<img src="styles/legend/buffer_malaria_12.png" /> buffer_malaria'
            });
var format_water_13 = new ol.format.GeoJSON();
var features_water_13 = format_water_13.readFeatures(json_water_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_13.addFeatures(features_water_13);
var lyr_water_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_water_13, 
                style: style_water_13,
                interactive: true,
                title: '<img src="styles/legend/water_13.png" /> water'
            });
var format_water_centroid_14 = new ol.format.GeoJSON();
var features_water_centroid_14 = format_water_centroid_14.readFeatures(json_water_centroid_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_centroid_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_centroid_14.addFeatures(features_water_centroid_14);
var lyr_water_centroid_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_water_centroid_14, 
                style: style_water_centroid_14,
                interactive: true,
                title: '<img src="styles/legend/water_centroid_14.png" /> water_centroid'
            });
var format_water_buffer_15 = new ol.format.GeoJSON();
var features_water_buffer_15 = format_water_buffer_15.readFeatures(json_water_buffer_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_buffer_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_buffer_15.addFeatures(features_water_buffer_15);
var lyr_water_buffer_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_water_buffer_15, 
                style: style_water_buffer_15,
                interactive: true,
                title: '<img src="styles/legend/water_buffer_15.png" /> water_buffer'
            });
var format_malaria_16 = new ol.format.GeoJSON();
var features_malaria_16 = format_malaria_16.readFeatures(json_malaria_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_malaria_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_malaria_16.addFeatures(features_malaria_16);
var lyr_malaria_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_malaria_16, 
                style: style_malaria_16,
                interactive: true,
                title: '<img src="styles/legend/malaria_16.png" /> malaria'
            });
var format_housecentroids_17 = new ol.format.GeoJSON();
var features_housecentroids_17 = format_housecentroids_17.readFeatures(json_housecentroids_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_housecentroids_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_housecentroids_17.addFeatures(features_housecentroids_17);
var lyr_housecentroids_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_housecentroids_17, 
                style: style_housecentroids_17,
                interactive: true,
                title: '<img src="styles/legend/housecentroids_17.png" /> house-centroids'
            });
var format_governmentbodies_18 = new ol.format.GeoJSON();
var features_governmentbodies_18 = format_governmentbodies_18.readFeatures(json_governmentbodies_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_governmentbodies_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_governmentbodies_18.addFeatures(features_governmentbodies_18);
var lyr_governmentbodies_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_governmentbodies_18, 
                style: style_governmentbodies_18,
                interactive: true,
                title: 'governmentbodies'
            });
var format_govt_bodies_19 = new ol.format.GeoJSON();
var features_govt_bodies_19 = format_govt_bodies_19.readFeatures(json_govt_bodies_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_govt_bodies_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_govt_bodies_19.addFeatures(features_govt_bodies_19);
var lyr_govt_bodies_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_govt_bodies_19, 
                style: style_govt_bodies_19,
                interactive: true,
                title: '<img src="styles/legend/govt_bodies_19.png" /> govt_bodies'
            });
var format_house_govt_20 = new ol.format.GeoJSON();
var features_house_govt_20 = format_house_govt_20.readFeatures(json_house_govt_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_house_govt_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_house_govt_20.addFeatures(features_house_govt_20);
var lyr_house_govt_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_house_govt_20, 
                style: style_house_govt_20,
                interactive: true,
                title: '<img src="styles/legend/house_govt_20.png" /> house_govt'
            });
var format_houselayer_21 = new ol.format.GeoJSON();
var features_houselayer_21 = format_houselayer_21.readFeatures(json_houselayer_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_houselayer_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_houselayer_21.addFeatures(features_houselayer_21);
var lyr_houselayer_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_houselayer_21, 
                style: style_houselayer_21,
                interactive: true,
                title: 'houselayer'
            });
var format_Houses_22 = new ol.format.GeoJSON();
var features_Houses_22 = format_Houses_22.readFeatures(json_Houses_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Houses_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Houses_22.addFeatures(features_Houses_22);
var lyr_Houses_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Houses_22, 
                style: style_Houses_22,
                interactive: true,
                title: '<img src="styles/legend/Houses_22.png" /> Houses'
            });

lyr_boundaryUntitledProject_0.setVisible(true);lyr_boundary_1.setVisible(true);lyr_Hospital_2.setVisible(true);lyr_roads_chain_3.setVisible(true);lyr_Hospital_4.setVisible(true);lyr_Roads_1_5.setVisible(true);lyr_schools_6.setVisible(true);lyr_Schools_7.setVisible(true);lyr_road_interpolation_8.setVisible(true);lyr_scl_hsptl_9.setVisible(true);lyr_Roads_10.setVisible(true);lyr_water_11.setVisible(true);lyr_buffer_malaria_12.setVisible(true);lyr_water_13.setVisible(true);lyr_water_centroid_14.setVisible(true);lyr_water_buffer_15.setVisible(true);lyr_malaria_16.setVisible(true);lyr_housecentroids_17.setVisible(true);lyr_governmentbodies_18.setVisible(true);lyr_govt_bodies_19.setVisible(true);lyr_house_govt_20.setVisible(true);lyr_houselayer_21.setVisible(true);lyr_Houses_22.setVisible(true);
var layersList = [lyr_boundaryUntitledProject_0,lyr_boundary_1,lyr_Hospital_2,lyr_roads_chain_3,lyr_Hospital_4,lyr_Roads_1_5,lyr_schools_6,lyr_Schools_7,lyr_road_interpolation_8,lyr_scl_hsptl_9,lyr_Roads_10,lyr_water_11,lyr_buffer_malaria_12,lyr_water_13,lyr_water_centroid_14,lyr_water_buffer_15,lyr_malaria_16,lyr_housecentroids_17,lyr_governmentbodies_18,lyr_govt_bodies_19,lyr_house_govt_20,lyr_houselayer_21,lyr_Houses_22];
lyr_boundaryUntitledProject_0.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_boundary_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Hospital_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_roads_chain_3.set('fieldAliases', {'fid': 'fid', 'cngdegrees': 'cngdegrees', });
lyr_Hospital_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Roads_1_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_schools_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Schools_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'cluster': 'cluster', });
lyr_road_interpolation_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_scl_hsptl_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'cluster': 'cluster', 'Name_2': 'Name_2', 'descript_1': 'descript_1', 'timestamp_': 'timestamp_', 'begin_2': 'begin_2', 'end_2': 'end_2', 'altitude_1': 'altitude_1', 'tessella_1': 'tessella_1', 'extrude_2': 'extrude_2', 'visibili_1': 'visibili_1', 'drawOrder_': 'drawOrder_', 'icon_2': 'icon_2', 'distance': 'distance', });
lyr_Roads_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_water_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_buffer_malaria_12.set('fieldAliases', {'id': 'id', 'temp': 'temp', 'cases': 'cases', 'spread': 'spread', 'x-coord': 'x-coord', 'y-coord': 'y-coord', });
lyr_water_13.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_water_centroid_14.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_water_buffer_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_malaria_16.set('fieldAliases', {'id': 'id', 'temp': 'temp', 'cases': 'cases', 'spread': 'spread', 'x-coord': 'x-coord', 'y-coord': 'y-coord', });
lyr_housecentroids_17.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_governmentbodies_18.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_govt_bodies_19.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_house_govt_20.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Name_2': 'Name_2', 'descript_1': 'descript_1', 'timestamp_': 'timestamp_', 'begin_2': 'begin_2', 'end_2': 'end_2', 'altitude_1': 'altitude_1', 'tessella_1': 'tessella_1', 'extrude_2': 'extrude_2', 'visibili_1': 'visibili_1', 'drawOrder_': 'drawOrder_', 'icon_2': 'icon_2', 'distance': 'distance', });
lyr_houselayer_21.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Houses_22.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_boundaryUntitledProject_0.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_boundary_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Hospital_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_roads_chain_3.set('fieldImages', {'fid': 'TextEdit', 'cngdegrees': 'TextEdit', });
lyr_Hospital_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Roads_1_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_schools_6.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Schools_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'cluster': '', });
lyr_road_interpolation_8.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_scl_hsptl_9.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'cluster': 'Range', 'Name_2': 'TextEdit', 'descript_1': 'TextEdit', 'timestamp_': 'TextEdit', 'begin_2': 'TextEdit', 'end_2': 'TextEdit', 'altitude_1': 'TextEdit', 'tessella_1': 'TextEdit', 'extrude_2': 'TextEdit', 'visibili_1': 'TextEdit', 'drawOrder_': 'TextEdit', 'icon_2': 'TextEdit', 'distance': 'TextEdit', });
lyr_Roads_10.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_water_11.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_buffer_malaria_12.set('fieldImages', {'id': 'TextEdit', 'temp': 'TextEdit', 'cases': 'TextEdit', 'spread': 'TextEdit', 'x-coord': 'TextEdit', 'y-coord': 'TextEdit', });
lyr_water_13.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_water_centroid_14.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_water_buffer_15.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_malaria_16.set('fieldImages', {'id': 'TextEdit', 'temp': 'TextEdit', 'cases': 'TextEdit', 'spread': 'TextEdit', 'x-coord': '', 'y-coord': '', });
lyr_housecentroids_17.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_governmentbodies_18.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_govt_bodies_19.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_house_govt_20.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Name_2': 'TextEdit', 'descript_1': 'TextEdit', 'timestamp_': 'TextEdit', 'begin_2': 'TextEdit', 'end_2': 'TextEdit', 'altitude_1': 'TextEdit', 'tessella_1': 'TextEdit', 'extrude_2': 'TextEdit', 'visibili_1': 'TextEdit', 'drawOrder_': 'TextEdit', 'icon_2': 'TextEdit', 'distance': 'TextEdit', });
lyr_houselayer_21.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Houses_22.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_boundaryUntitledProject_0.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_boundary_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Hospital_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_roads_chain_3.set('fieldLabels', {'fid': 'no label', 'cngdegrees': 'no label', });
lyr_Hospital_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Roads_1_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_schools_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Schools_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'cluster': 'no label', });
lyr_road_interpolation_8.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_scl_hsptl_9.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'cluster': 'no label', 'Name_2': 'no label', 'descript_1': 'no label', 'timestamp_': 'no label', 'begin_2': 'no label', 'end_2': 'no label', 'altitude_1': 'no label', 'tessella_1': 'no label', 'extrude_2': 'no label', 'visibili_1': 'no label', 'drawOrder_': 'no label', 'icon_2': 'no label', 'distance': 'no label', });
lyr_Roads_10.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_water_11.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_buffer_malaria_12.set('fieldLabels', {'id': 'no label', 'temp': 'no label', 'cases': 'no label', 'spread': 'no label', 'x-coord': 'no label', 'y-coord': 'no label', });
lyr_water_13.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_water_centroid_14.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_water_buffer_15.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_malaria_16.set('fieldLabels', {'id': 'no label', 'temp': 'no label', 'cases': 'no label', 'spread': 'no label', 'x-coord': 'no label', 'y-coord': 'no label', });
lyr_housecentroids_17.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_governmentbodies_18.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_govt_bodies_19.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_house_govt_20.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Name_2': 'no label', 'descript_1': 'no label', 'timestamp_': 'no label', 'begin_2': 'no label', 'end_2': 'no label', 'altitude_1': 'no label', 'tessella_1': 'no label', 'extrude_2': 'no label', 'visibili_1': 'no label', 'drawOrder_': 'no label', 'icon_2': 'no label', 'distance': 'no label', });
lyr_houselayer_21.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Houses_22.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Houses_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});