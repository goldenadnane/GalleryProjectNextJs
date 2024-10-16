1) Créer un projet nextjs en utisant la commande : npx create-next-app
2) Donner un nom à votre application
3) Lancer la commande : npm install express cors
4) Lancer les commandes node server.js (Pour le Backend) et npm run dev (pour le Frontend) 

https://github.com/user-attachments/assets/aa45b372-cbde-4021-a715-69be9c471d66


    
// Clarification
[ express : C'est un framework minimaliste pour NodeJs permettant de créer facilement des serveurs Http(s) ]
==> Dans ce projet, express est utilisé pour envoyer les données des photos et pour gérer les requêtes HTTP et renvoyer les réponses JSON
[ cors : C'est un mécanisme de sécurité utilisé par les navigateurs pour permetter ou restreindre l'accès aux ressources web ]
 ==> Dans ce projet, le package cors est utilisé pour permettre les requêtes cors-origin entre le frontend qui fonctionne sur le port 3000 et le backend qui fonctionne sur le port 5000.
 
 ⚠️⚠️Warning ! :  Sans Cors, les appels API du frontend au backend seront bloqués par le navigateur.

 ## Technologies Utilisées

- **Node.js**     : Serveur backend
- **Express**     : Framework web pour créer des API
- **CORS**        : Middleware pour gérer les requêtes cross-origin
- **Next.js**     : Framework React pour le développement frontend
- **TypeScript**  : Langage pour le typage statique
- **TailwindCss** : Framework css pour les styles
- 
## Fonctionnalités

### Backend (API)

Le serveur Express fournit une API simple qui gère les photos. Voici les points de terminaison disponibles :

- `GET /api/photos`: Renvoie une liste de toutes les photos.
- `GET /api/photos/:id`: Renvoie les détails d'une photo spécifique en fonction de son ID.

### Frontend

L'application Next.js utilise le composant Home pour afficher les photos sous forme de grille. Chaque photo présente :
  - Un titre
  - Une image
  - Un lien vers les détails de la photo
  
Le composant PhotoDetails affiche les détails d'une photo lorsque l'utilisateur clique sur le lien. Il utilise les hooks useState et useEffect pour gérer l'état et récupérer les données de l'API.  
