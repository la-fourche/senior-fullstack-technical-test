# Test Technique Fullstack Sénior - API de Panier E-commerce

## Objectif

Ce test technique vise à évaluer ta capacité à développer une application avec une architecture évolutive. Tu dois créer une API permettant de gérer un panier e-commerce et l'intégrer dans la partie frontend d'un site de commerce existant.

## Contexte

Ce dépôt contient une application e-commerce de base avec un frontend en Next et un backend en Nest. Ta tâche consiste à étendre cette application en ajoutant une fonctionnalité de panier.

**Ce test est conçu pour être réalisé en 4 heures. La qualité et l'évolutivité de votre solution sont plus importantes que la quantité de fonctionnalités implémentées.**

## Setup

### Option 1 : Docker

Utilise Docker et Docker Compose pour exécuter ce projet :

```bash
cli/init
docker compose up
```

### Option 2 : Installation locale

Installe les dépendances et lance le projet :

```bash
npm install
npm run start
```

## Tâches

### Backend

1. Conçoit et implémente une API RESTful pour gérer le panier e-commerce.
2. Les fonctionnalités attendues sont :
   - Creation/Suppression de panier
   - Ajout/Suppression de produits dans le panier
   - Gestion de la quantité des produits dans le panier
   - Calcul du prix total du panier
3. Ajoute une gestion des erreurs robuste et des logs appropriés.
4. Documente ton API.
5. Met l'accent sur l'architecture logicielle (Hexa, DDD, Clean archi...), c'est là dessus qu'on t'attend.
6. Tu peux utiliser le système de storage de ton choix, nous te recommendons de stocker les paniers en mémoire pour ne pas perdre de temps, mais tu as le droit de mettre en place une base de donnée SQLite ou PostgreSQL par exemple.

### Frontend

1. Crée une page Panier dans l'application Front existante.
2. Intégre l'API du panier.
3. Implémente une gestion d'état pour le panier.
4. Le panier doit être conservé au refresh.
5. Concernant la gestion de quantité, garde une UX simple pour ne pas perdre de temps.

## Critères d'évaluation

- Architecture évolutive et maintenable
- Performances et optimisations
- Qualité du code et bonnes pratiques
- Gestion des erreurs et robustesse
- Documentation et lisibilité du code

## Bonus

Selon le temps restant, tu peux implémenter la solution (ou une ébauche de solution) ou simplement décrire tes propositions par écrit dans le README.md.

- Ajoute une fonctionnalité de synchronisation en temps réel du panier
- Propose une stratégie de déploiement pour ta solution

## Livrables

- Une invitation sur ton projet privé Github (saawsan, shalomaku, et MartinLG-LaFourche) ou Gitlab (sawsan.cheffah, shalom5 et martin185)
- README expliquant votre approche, les choix d'architecture et les instructions pour exécuter le projet

Bonne chance !
