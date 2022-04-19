# Communication & Démocratie 

## Maquette

https://www.figma.com/file/BdqIkPlhMfIBA5aJrPPzeg/Communication-et-d%C3%A9mocratie?node-id=962%3A146


## Hugo
Pour installer Hugo
```
brew install hugo
```
Mise à jour avec
```
brew upgrade hugo
```


## Install

Pour cloner avec le thème
```
git clone git@github.com:noesya/communicationdemocratie-site.git --recurse-submodules
```
Pour récupérer le thème
```
git pull --recurse-submodules
```


## Launch

Pour lancer le site
```
yarn
yarn watch
```


Pour déployer le site avec Netlify, penser à ajouter la deploy key.


## Params

Dans configs/_default/params.yml
```
keycdn: https://osuny-1b4da.kxcdn.com
cookie_banner:
  enable: true
  blank: true
  page: https://gdpr.eu/cookies/
```


### Bloc pages

-> utiliser les bodyclass
-> choisir une page principale
-> short_description en option 
-> ajouter une page (si vide, toutes les pages enfants)
  -> image affichée ?
  -> short_description affichée ?

### Bloc actu

-> Affiche les derniers posts si rien rempli dans le bloc actu
