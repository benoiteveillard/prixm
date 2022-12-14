let recu, payment, frequencePayment, montant;

const recuWrapper = document.getElementsByName("recu_fiscal");
const paymentWrapper = document.getElementsByName("moyen_paiement");
const frequenceWrapper = document.getElementsByName("frequence");
const montantWrapper = document.getElementsByName("montant");

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
  
    } else if (frequencePayment === "ponctuelle"){
  
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

    
    }

    // Si paiement par carte & fréquence mensuelle
    if(payment === "carte" && frequencePayment === "mensuelle"){

    // Mettre le bon bouton de validation
    document.getElementById("btn_form").classList.add("hide");
    document.getElementById("btn_onetime").classList.add("hide");
    document.getElementById("btn_recurrent").classList.remove("hide");

    }
    else if (payment === "carte" && frequencePayment === "ponctuelle"){

    // Mettre le bon bouton de validation
    document.getElementById("btn_form").classList.add("hide");
    document.getElementById("btn_onetime").classList.remove("hide");
    document.getElementById("btn_recurrent").classList.add("hide");

    }
}


let checkbox = document.getElementById('#societe-wrapper');
let societe = document.getElementById('#societe');

checkbox.addEventListener("click", function () {
  societe.classList.toggle("hide");
});