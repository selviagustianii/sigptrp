var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'roof:colour': 'roof:colour', 'tourism': 'tourism', 'rooms': 'rooms', 'operator': 'operator', 'internet_access:fee': 'internet_access:fee', 'internet_access': 'internet_access', 'denomination': 'denomination', 'addr:housenumber': 'addr:housenumber', 'shop': 'shop', 'payment:cash': 'payment:cash', 'opening_hours': 'opening_hours', 'addr:postcode': 'addr:postcode', 'smoking': 'smoking', 'addr:street': 'addr:street', 'office': 'office', 'admin_level': 'admin_level', 'school:type_idn': 'school:type_idn', 'operator:type': 'operator:type', 'backup_generator': 'backup_generator', 'cuisine': 'cuisine', 'religion': 'religion', 'name': 'name', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'amenity': 'amenity', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', 'type': 'type', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'roof:colour': '', 'tourism': '', 'rooms': '', 'operator': '', 'internet_access:fee': '', 'internet_access': '', 'denomination': '', 'addr:housenumber': '', 'shop': '', 'payment:cash': '', 'opening_hours': '', 'addr:postcode': '', 'smoking': '', 'addr:street': '', 'office': '', 'admin_level': '', 'school:type_idn': '', 'operator:type': '', 'backup_generator': '', 'cuisine': '', 'religion': '', 'name': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'amenity': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', 'type': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'roof:colour': 'no label', 'tourism': 'no label', 'rooms': 'no label', 'operator': 'no label', 'internet_access:fee': 'no label', 'internet_access': 'no label', 'denomination': 'no label', 'addr:housenumber': 'no label', 'shop': 'no label', 'payment:cash': 'no label', 'opening_hours': 'no label', 'addr:postcode': 'no label', 'smoking': 'no label', 'addr:street': 'no label', 'office': 'no label', 'admin_level': 'no label', 'school:type_idn': 'no label', 'operator:type': 'no label', 'backup_generator': 'no label', 'cuisine': 'no label', 'religion': 'no label', 'name': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'amenity': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', 'type': 'no label', });
lyr_building_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});