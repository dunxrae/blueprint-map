import pandas as pd
import json

# Load the CSV file
file_path = 'pindata-002.csv'
data = pd.read_csv(file_path, skiprows=2)

# Mapping of Pin Type to Icons
icon_mapping = {
    'Finished Design': 'marker-finished',
    'WIP Design': 'marker-wip',
    'Sketch': 'marker-sketch',
    'Idea': 'marker-idea',
    'Reference': 'marker-reference',
    'Basic': 'marker-basic'
}

# Function to create a GeoJSON feature
def create_feature(row):
    return {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [row['longitude'], row['latitude']]
        },
        "properties": {
            "id": row['id'],
            "name": row['name'],
            "prefix": row['prefix'],
            "image_url": row['image_url'],
            "link_url": row['link_url'],
            "prefix": row['prefix'],
            "icon": icon_mapping.get(row['icon'], 'marker-basic'),
            "description": row['description'],
        }
    }

# Generate GeoJSON features
features = [create_feature(row) for _, row in data.iterrows()]

# Create GeoJSON structure
geojson = {
    "type": "FeatureCollection",
    "features": features
}

# Save GeoJSON to a file
output_file_path = './pindata-002.geojson'
with open(output_file_path, 'w') as f:
    json.dump(geojson, f)

print(f"GeoJSON file saved to {output_file_path}")