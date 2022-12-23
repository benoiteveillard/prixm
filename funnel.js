let recu, payment, frequencePayment, montant;

const recuWrapper = document.getElementsByName("recu_fiscal");
const paymentWrapper = document.getElementsByName("moyen_paiement");
const frequenceWrapper = document.getElementsByName("frequence");
const montantWrapper = document.getElementsByName("montant");

const wrapperToModify = [
  "don_100",
  "don_50",
  "don_30",
  "don_20",
  "don_15",
  "don_10",
  "don_5",
  "don_libre-wrapper",
  "don2_1000",
  "don2_500",
  "don2_200",
  "don2_80"
];

const iconToModify = [
  "ic_don_100",
  "ic_don_50",
  "ic_don_30",
  "ic_don_20",
  "ic_don_15",
  "ic_don_10",
  "ic_don_5",
  "ic_don_libre",
  "ic_don2_1000",
  "ic_don2_500",
  "ic_don2_500",
  "ic_don2_80"
];

recuWrapper.forEach(
  (recuWrapper) =>
    (recuWrapper.onclick = (e) => {
      recu = e.target.value;
      updateValue();
    })
);

paymentWrapper.forEach(
  (paymentWrapper) =>
    (paymentWrapper.onclick = (e) => {
      payment = e.target.value;
      updateValue();
    })
);

frequenceWrapper.forEach(
  (frequenceWrapper) =>
    (frequenceWrapper.onclick = (e) => {
      frequencePayment = e.target.value;
      updateValue();
    })
);

montantWrapper.forEach(
  (montantWrapper) =>
    (montantWrapper.onclick = (e) => {
      montant = e.target.value;
      updateValue();
    })
);



	function updateValue() {
    // Si avec reçu fiscal
		if (recu === "avec") {

    // Montrer les infos sur les impôts
    document.getElementById("impots-wrapper").classList.remove("hide");

    // Mettre le wrapper en orange
    document.getElementById("recu-avec").classList.add("bg-orange");
    document.getElementById("recu-sans").classList.remove("bg-orange");

    // Mettre l'icon avec current
    document.getElementById("ic_avec").classList.add("current");
    document.getElementById("ic_sans").classList.remove("current");

    // Montrer les moyens de paiement
    document.getElementById("step2").classList.remove("hide");

    // Changer le titre de l'étape 3
    document.getElementById("titre-step3bis").classList.remove("hide");
    document.getElementById("titre-step3").classList.add("hide");

    // Changer le titre de l'étape 4
    document.getElementById("titre-step4bis").classList.add("hide");
    document.getElementById("titre-step4").classList.remove("hide");

    // Changer le titre de l'étape 5
    document.getElementById("titre-step5bis").classList.add("hide");
    document.getElementById("titre-step5").classList.remove("hide");

    // Changer le titre de l'étape 6
    document.getElementById("titre-step6bis").classList.remove("hide");
    document.getElementById("titre-step6").classList.add("hide");

    // Mettre le bon bouton de validation
    document.getElementById("btn_form").classList.add("hide");
    document.getElementById("btn_onetime").classList.remove("hide");
    document.getElementById("btn_recurrent").classList.add("hide");

    
    } 
    // Si sans reçu fiscal
    else if (recu === "sans") {

    // Cacher les infos sur les impôts
    document.getElementById("impots-wrapper").classList.add("hide");

    // Mettre le wrapper en orange
    document.getElementById("recu-avec").classList.remove("bg-orange");
    document.getElementById("recu-sans").classList.add("bg-orange");

    // Mettre l'icon avec current
    document.getElementById("ic_avec").classList.remove("current");
    document.getElementById("ic_sans").classList.add("current");

    // Cacher les moyens de paiement
    document.getElementById("step2").classList.add("hide");
    document.getElementById("step2-bis").classList.remove("hide");

    // Changer le titre de l'étape 3
    document.getElementById("titre-step3bis").classList.add("hide");
    document.getElementById("titre-step3").classList.remove("hide");

    // Changer le titre de l'étape 4
    document.getElementById("titre-step4bis").classList.remove("hide");
    document.getElementById("titre-step4").classList.add("hide");

    // Changer le titre de l'étape 5
    document.getElementById("titre-step5bis").classList.remove("hide");
    document.getElementById("titre-step5").classList.add("hide");

    //afficher le terminal de paiement
    document.getElementById("step5").classList.remove("hide");

    // Changer le titre de l'étape 6
    document.getElementById("titre-step6bis").classList.add("hide");
    document.getElementById("titre-step6").classList.remove("hide");

    }
    // Si avec reçu fiscal et par carte bancaire
    if (recu === "avec" && payment === "carte") {


    // Cacher la fréquence de don
    document.getElementById("step2-bis").classList.remove("hide");


    // Changer le titre de l'étape 4
    document.getElementById("titre-step4bis").classList.add("hide");
    document.getElementById("titre-step4").classList.remove("hide");

    // Changer le titre de l'étape 5
    document.getElementById("titre-step5bis").classList.add("hide");
    document.getElementById("titre-step5").classList.remove("hide");

    //afficher le terminal de paiement
    document.getElementById("step5").classList.remove("hide");

    // Changer le titre de l'étape 6
    document.getElementById("titre-step6bis").classList.remove("hide");
    document.getElementById("titre-step6").classList.add("hide");

    }
    // Si avec reçu fiscal et par virement
    else if (recu === "avec" && payment === "virement") {


    // Cacher la fréquence de don
    document.getElementById("step2-bis").classList.add("hide");


    // Changer le titre de l'étape 4
    document.getElementById("titre-step4bis").classList.remove("hide");
    document.getElementById("titre-step4").classList.add("hide");

    // Changer le titre de l'étape 5
    document.getElementById("titre-step5bis").classList.remove("hide");
    document.getElementById("titre-step5").classList.add("hide");

    // Changer le titre de l'étape 6
    document.getElementById("step5").classList.add("hide");

    }
    // Si avec reçu fiscal et par virement
    else if (recu === "avec" && payment === "cheque") {


    // Cacher la fréquence de don
    document.getElementById("step2-bis").classList.add("hide");


    // Changer le titre de l'étape 4
    document.getElementById("titre-step4bis").classList.remove("hide");
    document.getElementById("titre-step4").classList.add("hide");

    // Changer le titre de l'étape 5
    document.getElementById("titre-step5bis").classList.remove("hide");
    document.getElementById("titre-step5").classList.add("hide");

    // Changer le titre de l'étape 6
    document.getElementById("step5").classList.add("hide");

    }

    if(frequencePayment === "mensuelle"){
    
    // Mettre le wrapper en orange
    document.getElementById("frequence-mensuelle").classList.add("bg-orange");
    document.getElementById("frequence-ponctuelle").classList.remove("bg-orange");
  
    // Mettre l'icon avec current
    document.getElementById("ic-mensuelle").classList.add("current");
    document.getElementById("ic-ponctuelle").classList.remove("current");

    // Mettre le bon bouton de validation
    document.getElementById("btn_form").classList.add("hide");
    document.getElementById("btn_onetime").classList.add("hide");
    document.getElementById("btn_recurrent").classList.remove("hide");

    // Afficher les bons montants de don
    wrapperToModify.forEach(elementId => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_1000").classList.add("hide");
    document.getElementById("don2_500").classList.add("hide");
    document.getElementById("don2_200").classList.add("hide");
    document.getElementById("don2_80").classList.add("hide");
    document.getElementById("don_20").classList.remove("hide");
    document.getElementById("don_15").classList.remove("hide");
    document.getElementById("don_10").classList.remove("hide");
    document.getElementById("don_5").classList.remove("hide");

    }
    
    else if (frequencePayment === "ponctuelle"){
  
    // Mettre le wrapper en orange
    document.getElementById("frequence-mensuelle").classList.remove("bg-orange");
    document.getElementById("frequence-ponctuelle").classList.add("bg-orange");
  
    // Mettre l'icon avec current
    document.getElementById("ic-mensuelle").classList.remove("current");
    document.getElementById("ic-ponctuelle").classList.add("current");

    // Mettre le bon bouton de validation
    document.getElementById("btn_form").classList.add("hide");
    document.getElementById("btn_onetime").classList.remove("hide");
    document.getElementById("btn_recurrent").classList.add("hide"); 

    // Afficher les bons montants de don
    wrapperToModify.forEach(elementId => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_1000").classList.remove("hide");
    document.getElementById("don2_500").classList.remove("hide");
    document.getElementById("don2_200").classList.remove("hide");
    document.getElementById("don2_80").classList.remove("hide");
    document.getElementById("don_20").classList.add("hide");
    document.getElementById("don_15").classList.add("hide");
    document.getElementById("don_10").classList.add("hide");
    document.getElementById("don_5").classList.add("hide");
    }

    // Moyens de paiement
    // Si paiement par carte
    if(payment === "carte"){
  
    // Mettre le wrapper en orange
    document.getElementById("moyen_cb").classList.add("bg-orange");
    document.getElementById("moyen_virement").classList.remove("bg-orange");
    document.getElementById("moyen_cheque").classList.remove("bg-orange");
  
    // Mettre l'icon avec current
    document.getElementById("ic_carte").classList.add("current");
    document.getElementById("ic_virement").classList.remove("current");
    document.getElementById("ic_cheque").classList.remove("current");

    // Montrer les champs CP, Ville etc..
    document.getElementById("coordonnee2").classList.remove("hide");
  
    } 
    // Si paiement par virement bancaire
    else if (payment === "virement"){
  
    // Mettre le wrapper en orange
    document.getElementById("moyen_cb").classList.remove("bg-orange");
    document.getElementById("moyen_virement").classList.add("bg-orange");
    document.getElementById("moyen_cheque").classList.remove("bg-orange");
  
    // Mettre l'icon avec current
    document.getElementById("ic_carte").classList.remove("current");
    document.getElementById("ic_virement").classList.add("current");
    document.getElementById("ic_cheque").classList.remove("current");

    // Mettre le bon bouton de validation
    document.getElementById("btn_form").classList.remove("hide");
    document.getElementById("btn_onetime").classList.add("hide");
    document.getElementById("btn_recurrent").classList.add("hide");

    // Montrer les champs CP, Ville etc..
    document.getElementById("coordonnee2").classList.remove("hide");

    // Afficher les bons montants de don
    wrapperToModify.forEach(elementId => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_1000").classList.add("hide");
    document.getElementById("don2_500").classList.add("hide");
    document.getElementById("don2_200").classList.add("hide");
    document.getElementById("don2_80").classList.add("hide");
    document.getElementById("don_20").classList.remove("hide");
    document.getElementById("don_15").classList.remove("hide");
    document.getElementById("don_10").classList.remove("hide");
    document.getElementById("don_5").classList.remove("hide");
    }
    
    // Si paiement par chèque
    else if (payment === "cheque"){
  
    // Mettre le wrapper en orange
    document.getElementById("moyen_cb").classList.remove("bg-orange");
    document.getElementById("moyen_virement").classList.remove("bg-orange");
    document.getElementById("moyen_cheque").classList.add("bg-orange");
  
    // Mettre l'icon avec current
    document.getElementById("ic_carte").classList.remove("current");
    document.getElementById("ic_virement").classList.remove("current");
    document.getElementById("ic_cheque").classList.add("current");

    // Mettre le bon bouton de validation
    document.getElementById("btn_form").classList.remove("hide");
    document.getElementById("btn_onetime").classList.add("hide");
    document.getElementById("btn_recurrent").classList.add("hide");

    // Cacher les champs CP, Ville etc..
    document.getElementById("coordonnee2").classList.add("hide");

    // Afficher les bons montants de don
    wrapperToModify.forEach(elementId => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_1000").classList.add("hide");
    document.getElementById("don2_500").classList.add("hide");
    document.getElementById("don2_200").classList.add("hide");
    document.getElementById("don2_80").classList.add("hide");
    document.getElementById("don_20").classList.remove("hide");
    document.getElementById("don_15").classList.remove("hide");
    document.getElementById("don_10").classList.remove("hide");
    document.getElementById("don_5").classList.remove("hide");
    }

    // Si paiement par carte & fréquence mensuelle
    if(payment === "carte" && frequencePayment === "mensuelle"){

    // Mettre le bon bouton de validation
    document.getElementById("btn_form").classList.add("hide");
    document.getElementById("btn_onetime").classList.add("hide");
    document.getElementById("btn_recurrent").classList.remove("hide");

    // Afficher les bons montants de don
    wrapperToModify.forEach(elementId => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_1000").classList.add("hide");
    document.getElementById("don2_500").classList.add("hide");
    document.getElementById("don2_200").classList.add("hide");
    document.getElementById("don2_80").classList.add("hide");
    document.getElementById("don_20").classList.remove("hide");
    document.getElementById("don_15").classList.remove("hide");
    document.getElementById("don_10").classList.remove("hide");
    document.getElementById("don_5").classList.remove("hide");
    }

    else if (payment === "carte" && frequencePayment === "ponctuelle"){

    // Mettre le bon bouton de validation
    document.getElementById("btn_form").classList.add("hide");
    document.getElementById("btn_onetime").classList.remove("hide");
    document.getElementById("btn_recurrent").classList.add("hide");

    // Afficher les bons montants de don
    wrapperToModify.forEach(elementId => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_1000").classList.remove("hide");
    document.getElementById("don2_500").classList.remove("hide");
    document.getElementById("don2_200").classList.remove("hide");
    document.getElementById("don2_80").classList.remove("hide");
    document.getElementById("don_20").classList.add("hide");
    document.getElementById("don_15").classList.add("hide");
    document.getElementById("don_10").classList.add("hide");
    document.getElementById("don_5").classList.add("hide");
    }

    // Mettre le wrapper en orange pour le montant
    if (montant === "100") {
      wrapperToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("bg-orange");
      });
      document.getElementById("don_100").classList.add("bg-orange");
    }
    
    else if (montant === "50") {
      wrapperToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("bg-orange");
      });
      document.getElementById("don_50").classList.add("bg-orange");
    }
    
    else if (montant === "30") {
      wrapperToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("bg-orange");
      });
      document.getElementById("don_30").classList.add("bg-orange");
    }

    else if (montant === "20") {
      wrapperToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("bg-orange");
      });
      document.getElementById("don_20").classList.add("bg-orange");
    }

    else if (montant === "15") {
      wrapperToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("bg-orange");
      });
      document.getElementById("don_15").classList.add("bg-orange");
    }

    else if (montant === "10") {
      wrapperToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("bg-orange");
      });
      document.getElementById("don_10").classList.add("bg-orange");
    }

    else if (montant === "5") {
      wrapperToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("bg-orange");
      });
      document.getElementById("don_5").classList.add("bg-orange");
    }

    else if (montant === "0") {
      wrapperToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("bg-orange");
      });
      document.getElementById("don_libre-wrapper").classList.add("bg-orange");
    }

    if (montant === "1000") {
      wrapperToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("bg-orange");
      });
      document.getElementById("don2_1000").classList.add("bg-orange");
    }
    
    else if (montant === "500") {
      wrapperToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("bg-orange");
      });
      document.getElementById("don2_500").classList.add("bg-orange");
    }
    
    else if (montant === "200") {
      wrapperToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("bg-orange");
      });
      document.getElementById("don2_200").classList.add("bg-orange");
    }

    else if (montant === "80") {
      wrapperToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("bg-orange");
      });
      document.getElementById("don2_80").classList.add("bg-orange");
    }

    // Mettre l'icon en noir pour le montant
    if (montant === "100") {
      iconToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("current");
      });
      document.getElementById("ic_don_100").classList.add("current");
    }
    
    else if (montant === "50") {
      iconToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("current");
      });
      document.getElementById("ic_don_50").classList.add("current");
    }
    
    else if (montant === "30") {
      iconToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("current");
      });
      document.getElementById("ic_don_30").classList.add("current");
    }

    else if (montant === "20") {
      iconToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("current");
      });
      document.getElementById("ic_don_20").classList.add("current");
    }

    else if (montant === "15") {
      iconToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("current");
      });
      document.getElementById("ic_don_15").classList.add("current");
    }

    else if (montant === "10") {
      iconToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("current");
      });
      document.getElementById("ic_don_10").classList.add("current");
    }

    else if (montant === "5") {
      iconToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("current");
      });
      document.getElementById("ic_don_5").classList.add("current");
    }

    else if (montant === "0") {
      iconToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("current");
      });
      document.getElementById("ic_don_libre").classList.add("current");
    }

    if (montant === "1000") {
      iconToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("current");
      });
      document.getElementById("ic_don2_1000").classList.add("current");
    }
    
    else if (montant === "500") {
      iconToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("current");
      });
      document.getElementById("ic_don2_500").classList.add("current");
    }
    
    else if (montant === "200") {
      iconToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("current");
      });
      document.getElementById("ic_don2_200").classList.add("current");
    }

    else if (montant === "80") {
      iconToModify.forEach(elementId => {
        document.getElementById(elementId).classList.remove("current");
      });
      document.getElementById("ic_don2_80").classList.add("current");
    }
  
}


    // Au changement sur montant-libre, alors changer la valeur de la variable montant
    document.getElementById("montant-libre").addEventListener("change", function() {
      // Aller chercher la valeur définie dans "montant-libre"
      montant = this.value;
    });

    // Au click sur l'input 'montant-libre', clicker sur le wrapper et se mettre au focus
    document.getElementById("montant-libre").addEventListener("click", function() {
      // Click on the element with ID "don_libre-wrapper"
      document.getElementById("don_libre-wrapper").click();
    
      // Retourner au focus sur l'élément avec ID "montant-libre"
      this.focus();
    });
    
    // Au clic sur un radio button, remettre la valeur du montant libre par défaut
    document.querySelectorAll("[name='montant']").forEach(function(radioButton) {
      radioButton.addEventListener("click", function() {
        // Supprimer la valeur de ID "montant-libre"
        document.getElementById("montant-libre").value = "";
      });
    });