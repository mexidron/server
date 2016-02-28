from pymongo import MongoClient
client=MongoClient()
db = client.mexidron
db.collection_names(include_system_collections=False)
