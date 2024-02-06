Etudiant : Alexandre BERNARD
TD : CDOF1

Ce fichier contient les réponse aux questions posées dans le fichier READLE

# TORRENT  
Q1 - Create a torrent containing this image
torrent create Chaton.jpeg -o chaton_torrent.torrent
On crée le fichier torrent de Chaton.jpeg et on le met dans le chaton_torrent.torrent
![image](https://github.com/AlexandreBernard1/Workshop2/assets/149503355/47fcf900-7275-4839-977a-50a4fa277769)
![image](https://github.com/AlexandreBernard1/Workshop2/assets/149503355/46cc1684-6768-4482-a859-1308c3968fda)


Q2 - Now copy the image to a new directory named partition1 and create a torrent of this folder. What do you observe?
move Chaton.jpeg partition1
torrent create partition1 -o partition1.torrent
![image](https://github.com/AlexandreBernard1/Workshop2/assets/149503355/136ef52f-605d-48a3-8572-96b07bc1bf39)
![image](https://github.com/AlexandreBernard1/Workshop2/assets/149503355/4f4058f1-7e75-4b1e-a370-aa3fd5b9a23a)
![image](https://github.com/AlexandreBernard1/Workshop2/assets/149503355/9630a2ae-e821-4200-b431-80c29b036df5)

On peut accéder aux informations des fichiers torrents avec la commande : 
torrent infot <nom_fichier>



Q3 - Copy the partition1 folder and then generate the associated torrent. What do you observe?
On copie le dossier partition1 et on crée le même dossier que l'on renome partition2. 
torrent create partition2 -o partition2.torrent
Ce fichier torrent est la copie du fichier torrent crée à partir de partition1 à l'exception du changerment de partition1 à partition2

Q4 
Voici le cid : QmeJaufp9seXCpHMFwxX53P3oRQW8Ny1DduCXAxebEwxv7
