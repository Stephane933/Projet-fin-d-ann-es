//Menu déroulant//
[].slice.call(document.querySelectorAll('.dropdown .nav-link')).forEach(function(el){
    el.addEventListener('click', onClick, false);
});

function onClick(e){
    e.preventDefault();
    var el = this.parentNode;
    el.classList.contains('show-submenu') ? hideSubMenu(el) : showSubMenu(el);
}

function showSubMenu(el){
    el.classList.add('show-submenu');
    document.addEventListener('click', function onDocClick(e){
        e.preventDefault();
        if(el.contains(e.target)){
            return;
        }
        document.removeEventListener('click', onDocClick);
        hideSubMenu(el);
    });
}

function hideSubMenu(el){
    el.classList.remove('show-submenu');
}
//Verification formulaire//

function verif_formulaire()
{
 if(document.formulaire.nom.value == "")  {
   alert("Veuillez entrer votre Pseudo!");
   document.formulaire.nom.focus();
   return false;
  }
 if(document.formulaire.mot_de_passe.value == "") {
   alert("Veuillez entrer votre mot de passe!");
   document.formulaire.mot_de_passe.focus();
   return false;
  }
 if(document.formulaire.courriel.value == "") {
   alert("Veuillez mettre l'@!");
   document.formulaire.courriel.focus();
   return false;
  }
 if(document.formulaire.courriel.value.indexOf('@') == -1) {
   alert("Veuillez mettre l'@!");
   document.formulaire.courriel.focus();
   return false;
  }
 if(document.formulaire.age.value == "") {
   alert("L'age doit être un nombre!");
   document.formulaire.age.focus();
   return false;
  }
 let chkZ = 1;
 for(i=0;i<document.formulaire.age.value.length;++i)
   if(document.formulaire.age.value.charAt(i) < "1"
   || document.formulaire.age.value.charAt(i) > "99")
     	 chkZ = -1;
 if(chkZ == -1) {
   alert("votre age n'est pas correcte veuillez mettre un nombre !!!");
       document.formulaire.age.focus();
   return false;
  }
}
///////////////////////////////////////////////////////////////////
