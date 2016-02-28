from pymongo import MongoClient
import tamano
client=MongoClient()
db = client.mexidron
fotos=db.fotos
fotosrestantes=fotos.find({"tamano":0})
foto=next(fotosrestantes,None)
while(foto):
	t=tamano.calcular_tamano(foto['path'],foto['distancia'])
	result=fotos.update_one({"path":foto['path']},{"$set":{"tamano":t}})
	foto=next(fotosrestantes,None)
