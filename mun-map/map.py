import folium

import csv
filename = 'locations.csv'
keys = ('ï»¿Latitude', 'Longitude', 'Notes')
records = []

with open(filename, 'r') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        records.append({key: row[key] for key in keys})

for record in records:
    latitude = record['ï»¿Latitude']
    longitude = record['Longitude']
    record['latitude'] = float(latitude)
    record['longitude'] = float(longitude)

m = folium.Map(location=(47.57296, -52.733458))

for record in records:
    coords = (record['latitude'], record['longitude'])
    folium.Marker(coords, popup=record['Notes']).add_to(m)

m.save('map.html')