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

Après avoir copié l'image dans un nouveau répertoire nommé "partition1" et créé un torrent de ce répertoire,
nous observons que le fichier torrent résultant contient des métadonnées liées à la structure du répertoire ainsi qu'au fichier image.
La différence principale entre un fichier et un dossier lors de la génération d'un torrent file est que, lorsqu'un dossier est torrentisé,
le fichier torrent résultant inclut non seulement les métadonnées du fichier lui-même, 
mais également les métadonnées de la structure du répertoire et de tous les fichiers et sous-répertoires qu'il contient.


Q3 - Copy the partition1 folder and then generate the associated torrent. What do you observe?
On copie le dossier partition1 et on crée le même dossier que l'on renome partition2. 
torrent create partition2 -o partition2.torrent
Ce fichier torrent est la copie du fichier torrent crée à partir de partition1 à l'exception du changerment de partition1 à partition2

# IPFS
Q1 - Upload the previous image to IPFS.
Après l'import, on peut obtenir le CID : QmeJaufp9seXCpHMFwxX53P3oRQW8Ny1DduCXAxebEwxv7
![image](https://github.com/AlexandreBernard1/Workshop2/assets/149503355/369daefc-f581-474e-a598-d698412cb3aa)

Q2 - Now upload partition1 to IPFS. What do you observe compared to the torrent part?
Après l'import, on peut obtenir le CID : QmPKRGW6BQ3i4Z4W4etVogYDRqoJRyFRCcD5FJrPKgNJPK
![image](https://github.com/AlexandreBernard1/Workshop2/assets/149503355/0537d9ba-171f-48e3-bab2-b1bc7c82918c)
![image](https://github.com/AlexandreBernard1/Workshop2/assets/149503355/3e417b20-3ed8-4c22-90e1-9eb75e61180f)
![image](https://github.com/AlexandreBernard1/Workshop2/assets/149503355/22ea50fe-1324-449d-903f-c9ddfafa7331)

Après le téléchargement dans IPFS, le répertoire "partition1" est géré comme une seule entité.
Toute sa structure ainsi que son contenu, incluant le fichier image qu'il contient, sont hashés en un seul hachage unique.
Cette méthode se distingue de BitTorrent, où chaque fichier dans le répertoire est hashé individuellement et où la structure du répertoire n'est pas conservée dans le fichier torrent.

Q3 - Copy the partition1 folder and then generate the associated torrent. What do you observe?
Après l'import, on peut obtenir le CID : QmPKRGW6BQ3i4Z4W4etVogYDRqoJRyFRCcD5FJrPKgNJPK
Si on importe le dossier partition2, on observe que le hash est identique à celui de parition1
![image](https://github.com/AlexandreBernard1/Workshop2/assets/149503355/b21b5911-cd10-49fa-8019-aeba80a78b0d)
![image](https://github.com/AlexandreBernard1/Workshop2/assets/149503355/b9e13d77-5ccc-410a-a070-6d49f650e3d0)
![image](https://github.com/AlexandreBernard1/Workshop2/assets/149503355/d22ac2d1-426e-4e65-8bf6-008e78244bd2)


# Upload files on IPFS using Pinata
Nous généros l'API KEY avec pinata puis on modifie le code fournis avec les bon token et le bon path vers l'image.
On exécute le fichier pinata.js dans l'invite de commande avec node pinata.js.
On obtient : 
![image](https://github.com/AlexandreBernard1/Workshop2/assets/149503355/62d00958-a5bc-4595-a4ce-e264db939f55)
On peut vérifier que le fichier est bien sur le serveur pinata
![image](https://github.com/AlexandreBernard1/Workshop2/assets/149503355/a8d9f5d4-0914-49f2-83c6-8dc69911e5b1)


# Leverage P2P to create a website hosted decentralizely.
On crée un flux de travail GitHub Actions pour automatiser la mise à jour des modifications apportées aux fichiers sur IPFS en utilisant le service Pinata.

On met le command suivant dans le fichier .github/workflows/manual.yml
```
