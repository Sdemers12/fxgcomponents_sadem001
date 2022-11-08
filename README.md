# Composants REACT 

Implémentations d'une bibliothèque de 10 composants REACT réutilisablede à l'aide des frameworks material-ui et antd.

# Collaboration

Ces composants sont la réalisation d'un travail de collaboration entre Yannick Jean et Samuel Demers

# Liste des composants
* Alerte
* Avatar
* Bouton
* Carte
* ChampTexte
* Etape
* LoadSpin
* MenuDeroulant
* Popup
* Resultat

# Extra
* Collection

# Détails des composants 

**Alerte**
* Succes : Permet de changer la couleur et le texte de l'alerte de type succès.
* Avertissement : Permet de changer la couleur et le texte de l'alerte de type avertissement.
* Erreur : Permet de changer la couleur et le texte de l'alerte de type erreur.

**Exemple d'utilisation:**
```sh
<Alerte
  message="Vous avez réussi à créer votre alerte!!!"
  type="success"
/>
```

**Avatar**
* Petit : Permet de changer la taille de l'avatar à petit.
* Moyen : Permet de changer la taille de l'avatar à moyen.
* Grand : Permet de changer la taille de l'avatar à grand.

**Exemple d'utilisation:**
```sh
<Avatars
  alt="Roger"
  height={24}
  src="assets/img/Roger.jpg"
  width={24}
/>
```

**Bouton**
* Start : Permet de changer l'aspect visuel du bouton et le texte pour Start.
* Eject : Permet de changer l'aspect visuel du bouton et le texte pour Eject.
* Destroy  : Permet de changer l'aspect visuel du bouton et le texte pour Destroy.

**Exemple d'utilisation:**
```sh
<Bouton
  borderColor="black"
  color="green"
  height={45}
  shape="circle"
  text1="START"
  type="primary"
  width={50}
/>
```

**Carte**
* Default : Permet de mettre par défaut l'état de la carte.
* DarkMode : Permet de changer l'aspect visuel de la carte pour un mode noir.
* Hoverable : Permet de changer l'aspect visuel de la carte pour qu'il soit survolable.

**Exemple d'utilisation:**
```sh
<Carte
  description="www.tinder.com"
  title="European cool girl"
  width={250}
/>
```

**ChampTexte**
* Contour : Permet de changer l'aspect visuel du champ avec un contour. 
* Attention : Permet de changer l'aspect visuel du champ avec un avertissement. 
* Succes  : Permet de changer l'aspect visuel du champ avec un encadré succès. 

**Exemple d'utilisation:**
```sh
<ChampTexte
  color="primary"
  defaultValue=""
  helperText=""
  label="Nom"
/>
```

**Etape**
* Attente : Permet de changer l'état de l'étape à attente.
* Chargement : Permet de changer l'état de l'étape à chargement.
* Termine : Permet de changer l'état de l'étape à terminé.

**LoadSpin**
* Small : Permet de changer la taille à petit.
* Medium : Permet de changer la taille à moyen.
* Large : Permet de changer la taille à grand.

**MenuDeroulant**
* BottomLeft : Ouverture en bas à gauche.
* Bottom : Ouverture en bas.
* Right : Ouverture à droite.

**Popup**
* Basic : Changement d'état de la fenêtre. 
* Centered : Changement d'état de la fenêtre. 
* Warning : Changement d'état de la fenêtre. 

**Resultat**
* Succes : Permet de changer la couleur, le logo et le texte du résultat de type succès.
* Probleme : Permet de changer la couleur, le logo et le texte du résultat de type avertissement.
* Erreur : Permet de changer la couleur, le logo et le texte du résultat de type erreur.

# Pour démarrer le projet dans le terminal

```sh
yarn install
```
```sh
yarn storybook
```
ou
```sh
npm install
```
```sh
npm run storybook
```
