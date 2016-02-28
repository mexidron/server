import cv2
import sys
#filename = sys.argv[1]
def calcular_tamano(filename, distancia):
	imagen=cv2.imread(filename)
	imagenbyn=cv2.cvtColor(imagen,cv2.COLOR_RGB2GRAY)
	cv2.imwrite(filename+"_byn.jpg",imagenbyn)
	bordes=cv2.Canny(imagenbyn,80,150)
	cv2.imwrite(filename+"_bordes.jpg",bordes)
	#ret, relleno = cv2.threshold(imagenbyn,0,255,cv2.THRESH_BINARY_INV+cv2.THRESH_OTSU)
	#cv2.imwrite(sys.argv[1]+"_relleno",relleno)
	#bordes = relleno
	distancia=[]
	for x in range(0,len(bordes)):
		y=0
		while(bordes[x][y]==0):
			y=y+1
		maximo=y
		minimo=y
		for y in range (minimo,len(bordes[x])):
			if (bordes[x][y]==255):
				maximo=y
		distancia.append(maximo-minimo)
	#print distancia
	return sum(distancia)/len(distancia)
