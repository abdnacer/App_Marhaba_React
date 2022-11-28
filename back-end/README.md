 ## Docker


**Etape1:** Create File the `Dockerfile`

    FROM node:16

    WORKDIR /app

    COPY package.json .

    RUN npm install

    COPY . .

    EXPOSE 3000

    CMD ["npm", "start"]

**Etape2 :** Create Network par command :

    docker network create livraison-marhaba-app-backend

**Etape3 :** executez un container basé sur l'image mongo :

    docker container run -d --name livraison-marhaba-db -v livraison-marhaba-db:/data/db --network livraison-marhaba-app-backend mongo

**Etape4 :** Entrer dans le dossier du serveur ou se trouver Dockerfile et creer cette image :

    docker build -t livraison-marhaba-backend .

**Etape5 :** exécutez un container basé sur cette image que vous venez de créer :

    docker container run -d --name livraison-marhaba-container -v ${pwd}:/app -v /app/node_modules --network livraison-marhaba-app-backend -p 4044:4044 livraison-marhaba-backend

 
 ## Testunitaire (JEST)


**Etape1 :** Install Jest and superTest

**Etape2 :** Require package 'SuperTest' and file server 

**Etape3 :** Create function Describe for testing Login

**Etape4 :** Check to 3 message Error

**Etape5 :** Create function Describe for testing Register

**Etape6 :** Check to 3 message Error

**Etape7 :** Create function Describe for testing Forgot Password

**Etape8 :** Check to 1 message Error