let recu, payment, frequencePayment, montant;

const recuWrapper = document.getElementsByName("recu_fiscal");
const paymentWrapper = document.getElementsByName("moyen_paiement");
const frequenceWrapper = document.getElementsByName("frequence");
const montantWrapper = document.getElementsByName("montant");
const btnDynamic = document.getElementById("btn-dynamic");
const btnWebflow = document.getElementById("btn_form");
let emailUser = document.getElementById("email");
let prenomUser = document.getElementById("prenom").value;
let nomUser = document.getElementById("nom").value;
let adresseUser = document.getElementById("adresse").value;
let villeUser = document.getElementById("ville").value;
let cpUser = document.getElementById("cp").value;
let paysUser = document.getElementById("pays").value;

const wrapperToModify = [
  "don_100",
  "don_50",
  "don_30",
  "don_20",
  "don_15",
  "don_10",
  "don_5",
  "don_3",
  "don_libre_wrapper",
  "don2_1000",
  "don2_500",
  "don2_200",
  "don2_100",
  "don2_50",
  "don2_30",
  "don2_80",
];

const iconToModify = [
  "ic_don_100",
  "ic_don_50",
  "ic_don_30",
  "ic_don_20",
  "ic_don_15",
  "ic_don_10",
  "ic_don_5",
  "ic_don_3",
  "ic_don_libre",
  "ic_don2_1000",
  "ic_don2_500",
  "ic_don2_200",
  "ic_don2_100",
  "ic_don2_50",
  "ic_don2_30",
  "ic_don2_80",
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

    // Cacher le bouton Stripe
    btnDynamic.classList.remove("hide");
    btnWebflow.classList.add("hide");
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

    // Cacher le bouton Stripe
    btnDynamic.classList.remove("hide");
    btnWebflow.classList.add("hide");
  }
  // Si avec reçu fiscal et par virement
  else if (recu === "avec" && payment === "virement") {
    // Cacher la fréquence de don
    document.getElementById("step2-bis").classList.remove("hide");

    // Changer le titre de l'étape 4
    document.getElementById("titre-step4bis").classList.add("hide");
    document.getElementById("titre-step4").classList.remove("hide");

    // Changer le titre de l'étape 5
    document.getElementById("titre-step5bis").classList.add("hide");
    document.getElementById("titre-step5").classList.remove("hide");

    // Cacher le bouton Stripe
    btnDynamic.classList.add("hide");
    btnWebflow.classList.remove("hide");
  }
  // Si avec reçu fiscal et par cheque
  else if (recu === "avec" && payment === "cheque") {
    // Cacher la fréquence de don
    document.getElementById("step2-bis").classList.add("hide");

    // Changer le titre de l'étape 4
    document.getElementById("titre-step4bis").classList.remove("hide");
    document.getElementById("titre-step4").classList.add("hide");

    // Changer le titre de l'étape 5
    document.getElementById("titre-step5bis").classList.remove("hide");
    document.getElementById("titre-step5").classList.add("hide");

    // Cacher le bouton Stripe
    btnDynamic.classList.add("hide");
    btnWebflow.classList.remove("hide");
  }

  if (frequencePayment === "mensuelle") {
    // Mettre le wrapper en orange
    document.getElementById("frequence-mensuelle").classList.add("bg-orange");
    document
      .getElementById("frequence-ponctuelle")
      .classList.remove("bg-orange");

    // Mettre l'icon avec current
    document.getElementById("ic-mensuelle").classList.add("current");
    document.getElementById("ic-ponctuelle").classList.remove("current");

    // Afficher les bons montants de don
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_1000").classList.add("hide");
    document.getElementById("don2_500").classList.add("hide");
    document.getElementById("don2_200").classList.add("hide");
    document.getElementById("don2_80").classList.add("hide");
    document.getElementById("don2_100").classList.add("hide");
    document.getElementById("don2_50").classList.add("hide");
    document.getElementById("don2_30").classList.add("hide");
    document.getElementById("don_100").classList.remove("hide");
    document.getElementById("don_50").classList.remove("hide");
    document.getElementById("don_30").classList.remove("hide");
    document.getElementById("don_20").classList.remove("hide");
    document.getElementById("don_15").classList.remove("hide");
    document.getElementById("don_10").classList.remove("hide");
    document.getElementById("don_5").classList.remove("hide");
    document.getElementById("don_3").classList.remove("hide");
  } else if (frequencePayment === "ponctuelle") {
    // Mettre le wrapper en orange
    document
      .getElementById("frequence-mensuelle")
      .classList.remove("bg-orange");
    document.getElementById("frequence-ponctuelle").classList.add("bg-orange");

    // Mettre l'icon avec current
    document.getElementById("ic-mensuelle").classList.remove("current");
    document.getElementById("ic-ponctuelle").classList.add("current");

    // Afficher les bons montants de don
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_1000").classList.remove("hide");
    document.getElementById("don2_500").classList.remove("hide");
    document.getElementById("don2_200").classList.remove("hide");
    document.getElementById("don2_80").classList.remove("hide");
    document.getElementById("don2_100").classList.remove("hide");
    document.getElementById("don2_50").classList.remove("hide");
    document.getElementById("don2_30").classList.remove("hide");
    document.getElementById("don_100").classList.add("hide");
    document.getElementById("don_50").classList.add("hide");
    document.getElementById("don_30").classList.add("hide");
    document.getElementById("don_20").classList.add("hide");
    document.getElementById("don_15").classList.add("hide");
    document.getElementById("don_10").classList.add("hide");
    document.getElementById("don_5").classList.add("hide");
    document.getElementById("don_3").classList.add("hide");
  }

  // Moyens de paiement
  // Si paiement par carte
  if (payment === "carte") {
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
  else if (payment === "virement") {
    // Mettre le wrapper en orange
    document.getElementById("moyen_cb").classList.remove("bg-orange");
    document.getElementById("moyen_virement").classList.add("bg-orange");
    document.getElementById("moyen_cheque").classList.remove("bg-orange");

    // Mettre l'icon avec current
    document.getElementById("ic_carte").classList.remove("current");
    document.getElementById("ic_virement").classList.add("current");
    document.getElementById("ic_cheque").classList.remove("current");

    // Montrer les champs CP, Ville etc..
    document.getElementById("coordonnee2").classList.remove("hide");
  }

  // Si paiement par chèque
  else if (payment === "cheque") {
    // Mettre le wrapper en orange
    document.getElementById("moyen_cb").classList.remove("bg-orange");
    document.getElementById("moyen_virement").classList.remove("bg-orange");
    document.getElementById("moyen_cheque").classList.add("bg-orange");

    // Mettre l'icon avec current
    document.getElementById("ic_carte").classList.remove("current");
    document.getElementById("ic_virement").classList.remove("current");
    document.getElementById("ic_cheque").classList.add("current");

    // Cacher les champs CP, Ville etc..
    document.getElementById("coordonnee2").classList.remove("hide");

    // Afficher les bons montants de don
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_1000").classList.remove("hide");
    document.getElementById("don2_500").classList.remove("hide");
    document.getElementById("don2_200").classList.remove("hide");
    document.getElementById("don2_80").classList.remove("hide");
    document.getElementById("don2_100").classList.remove("hide");
    document.getElementById("don2_50").classList.remove("hide");
    document.getElementById("don2_30").classList.remove("hide");
    document.getElementById("don_100").classList.add("hide");
    document.getElementById("don_50").classList.add("hide");
    document.getElementById("don_30").classList.add("hide");
    document.getElementById("don_20").classList.add("hide");
    document.getElementById("don_15").classList.add("hide");
    document.getElementById("don_10").classList.add("hide");
    document.getElementById("don_5").classList.add("hide");
    document.getElementById("don_3").classList.add("hide");
  }

  // Si paiement par carte & fréquence mensuelle
  if (payment === "carte" && frequencePayment === "mensuelle") {
    // Afficher les bons montants de don
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_1000").classList.add("hide");
    document.getElementById("don2_500").classList.add("hide");
    document.getElementById("don2_200").classList.add("hide");
    document.getElementById("don2_80").classList.add("hide");
    document.getElementById("don2_100").classList.add("hide");
    document.getElementById("don2_50").classList.add("hide");
    document.getElementById("don2_30").classList.add("hide");
    document.getElementById("don_100").classList.remove("hide");
    document.getElementById("don_50").classList.remove("hide");
    document.getElementById("don_30").classList.remove("hide");
    document.getElementById("don_20").classList.remove("hide");
    document.getElementById("don_15").classList.remove("hide");
    document.getElementById("don_10").classList.remove("hide");
    document.getElementById("don_5").classList.remove("hide");
    document.getElementById("don_3").classList.remove("hide");
  } else if (payment === "carte" && frequencePayment === "ponctuelle") {
    // Afficher les bons montants de don
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_1000").classList.remove("hide");
    document.getElementById("don2_500").classList.remove("hide");
    document.getElementById("don2_200").classList.remove("hide");
    document.getElementById("don2_80").classList.remove("hide");
    document.getElementById("don2_100").classList.remove("hide");
    document.getElementById("don2_50").classList.remove("hide");
    document.getElementById("don2_30").classList.remove("hide");
    document.getElementById("don_100").classList.add("hide");
    document.getElementById("don_50").classList.add("hide");
    document.getElementById("don_30").classList.add("hide");
    document.getElementById("don_20").classList.add("hide");
    document.getElementById("don_15").classList.add("hide");
    document.getElementById("don_10").classList.add("hide");
    document.getElementById("don_5").classList.add("hide");
    document.getElementById("don_3").classList.add("hide");
  }

  // Si paiement par carte & fréquence mensuelle
  if (payment === "virement" && frequencePayment === "mensuelle") {
    // Afficher les bons montants de don
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_1000").classList.add("hide");
    document.getElementById("don2_500").classList.add("hide");
    document.getElementById("don2_200").classList.add("hide");
    document.getElementById("don2_80").classList.add("hide");
    document.getElementById("don2_100").classList.add("hide");
    document.getElementById("don2_50").classList.add("hide");
    document.getElementById("don2_30").classList.add("hide");
    document.getElementById("don_100").classList.remove("hide");
    document.getElementById("don_50").classList.remove("hide");
    document.getElementById("don_30").classList.remove("hide");
    document.getElementById("don_20").classList.remove("hide");
    document.getElementById("don_15").classList.remove("hide");
    document.getElementById("don_10").classList.remove("hide");
    document.getElementById("don_5").classList.remove("hide");
    document.getElementById("don_3").classList.remove("hide");
  } else if (payment === "virement" && frequencePayment === "ponctuelle") {
    // Afficher les bons montants de don
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_1000").classList.remove("hide");
    document.getElementById("don2_500").classList.remove("hide");
    document.getElementById("don2_200").classList.remove("hide");
    document.getElementById("don2_80").classList.remove("hide");
    document.getElementById("don2_100").classList.remove("hide");
    document.getElementById("don2_50").classList.remove("hide");
    document.getElementById("don2_30").classList.remove("hide");
    document.getElementById("don_100").classList.add("hide");
    document.getElementById("don_50").classList.add("hide");
    document.getElementById("don_30").classList.add("hide");
    document.getElementById("don_20").classList.add("hide");
    document.getElementById("don_15").classList.add("hide");
    document.getElementById("don_10").classList.add("hide");
    document.getElementById("don_5").classList.add("hide");
    document.getElementById("don_3").classList.add("hide");
  }

  // Mettre le wrapper en orange pour le montant
  if (montant === "100") {
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don_100").classList.add("bg-orange");

    iconToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("current");
    });
    document.getElementById("ic_don_100").classList.add("current");

    btnDynamic.href =
      "https://buy.stripe.com/5kA2am59jblp8ladR2?prefilled_email=" +
      emailUser.value;
  } else if (montant === "100b") {
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_100").classList.add("bg-orange");

    iconToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("current");
    });
    document.getElementById("ic_don2_100").classList.add("current");

    btnDynamic.href =
      "https://donate.stripe.com/28o02e59j759cBq4gl?prefilled_email=" +
      emailUser.value;
  } else if (montant === "50b") {
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_50").classList.add("bg-orange");

    iconToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("current");
    });
    document.getElementById("ic_don2_50").classList.add("current");

    btnDynamic.href =
      "https://donate.stripe.com/6oEdT445f4X1eJy00e?prefilled_email=" +
      emailUser.value;
  } else if (montant === "50") {
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don_50").classList.add("bg-orange");

    iconToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("current");
    });
    document.getElementById("ic_don_50").classList.add("current");

    btnDynamic.href =
      "https://buy.stripe.com/4gw7uGfNXahlatifZ9?prefilled_email=" +
      emailUser.value;
  } else if (montant === "30") {
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don_30").classList.add("bg-orange");

    iconToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("current");
    });
    document.getElementById("ic_don_30").classList.add("current");

    btnDynamic.href =
      "https://buy.stripe.com/14k9COfNXahl8la00a?prefilled_email=" +
      emailUser.value;
  } else if (montant === "30b") {
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_30").classList.add("bg-orange");

    iconToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("current");
    });
    document.getElementById("ic_don2_30").classList.add("current");

    btnDynamic.href =
      "https://donate.stripe.com/6oE2ambxHahleJy00d?prefilled_email=" +
      emailUser.value;
  } else if (montant === "20") {
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don_20").classList.add("bg-orange");

    iconToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("current");
    });
    document.getElementById("ic_don_20").classList.add("current");

    btnDynamic.href =
      "https://buy.stripe.com/28o4iuatD0GLbxmbIR?prefilled_email=" +
      emailUser.value;
  } else if (montant === "15") {
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don_15").classList.add("bg-orange");

    iconToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("current");
    });
    document.getElementById("ic_don_15").classList.add("current");

    btnDynamic.href =
      "https://buy.stripe.com/4gwg1c0T3exBfNC28g?prefilled_email=" +
      emailUser.value;
  } else if (montant === "10") {
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don_10").classList.add("bg-orange");

    iconToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("current");
    });
    document.getElementById("ic_don_10").classList.add("current");

    btnDynamic.href =
      "https://buy.stripe.com/28o4iufNXgFJ7h69AH?prefilled_email=" +
      emailUser.value;
  } else if (montant === "5") {
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don_5").classList.add("bg-orange");

    iconToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("current");
    });
    document.getElementById("ic_don_5").classList.add("current");

    btnDynamic.href =
      "https://buy.stripe.com/eVadT4cBL89d58YdQW?prefilled_email=" +
      emailUser.value;
  } else if (montant === "3") {
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don_3").classList.add("bg-orange");

    iconToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("current");
    });
    document.getElementById("ic_don_3").classList.add("current");

    btnDynamic.href =
      "https://buy.stripe.com/8wM8yKdFP89d58YdR5?prefilled_email=" +
      emailUser.value;
  } else if (montant === "free") {
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don_libre_wrapper").classList.add("bg-orange");

    iconToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("current");
    });
    document.getElementById("ic_don_libre").classList.add("current");

    btnDynamic.href =
      "https://buy.stripe.com/8wM8yKdFP89d58YdR5?prefilled_email=" +
      emailUser.value;
  } else if (montant === "3") {
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don_3").classList.add("bg-orange");

    iconToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("current");
    });
    document.getElementById("ic_don_3").classList.add("current");

    btnDynamic.href =
      "https://buy.stripe.com/8wM8yKdFP89d58YdR5?prefilled_email=" +
      emailUser.value;
  } else if (montant === "1000") {
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_1000").classList.add("bg-orange");

    iconToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("current");
    });
    document.getElementById("ic_don2_1000").classList.add("current");

    btnDynamic.href =
      "https://donate.stripe.com/cN29COdFPcptaticMQ?prefilled_email=" +
      emailUser.value;
  } else if (montant === "500") {
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_500").classList.add("bg-orange");

    iconToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("current");
    });
    document.getElementById("ic_don2_500").classList.add("current");

    btnDynamic.href =
      "https://donate.stripe.com/4gweX8cBL3SX8la9AD?prefilled_email=" +
      emailUser.value;
  } else if (montant === "200") {
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_200").classList.add("bg-orange");

    iconToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("current");
    });
    document.getElementById("ic_don2_200").classList.add("current");

    btnDynamic.href =
      "https://donate.stripe.com/eVa2am59j6151WMaEG?prefilled_email=" +
      emailUser.value;
  } else if (montant === "80") {
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don2_80").classList.add("bg-orange");

    iconToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("current");
    });
    document.getElementById("ic_don2_80").classList.add("current");

    btnDynamic.href =
      "https://donate.stripe.com/28o4iu9pzahl6d2001?prefilled_email=" +
      emailUser.value;
  } else if (montant === "0") {
    wrapperToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("bg-orange");
    });
    document.getElementById("don_libre_wrapper").classList.add("bg-orange");

    iconToModify.forEach((elementId) => {
      document.getElementById(elementId).classList.remove("current");
    });
    document.getElementById("ic_don").classList.add("current");

    btnDynamic.href =
      "https://donate.stripe.com/4gw8yKatD0GLdFu8ww?prefilled_email=" +
      emailUser.value;
  }
}

btnDynamic.addEventListener("click", function () {
  fetch(
    "https://hooks.zapier.com/hooks/catch/8045333/b7g1tjl/?email=" +
      emailUser.value +
      "&recu=" +
      recu +
      "&montant=" +
      montant +
      "&moyen=" +
      payment +
      "&recurrence=" +
      frequencePayment +
      "&nom=" +
      nom.value +
      "&prenom=" +
      prenom.value +
      "&adresse=" +
      adresse.value +
      "&ville=" +
      ville.value +
      "&cp=" +
      cp.value +
      "&pays=" +
      pays.value
  );
});

const montantLibre = document.getElementById("montant_libre");
const libreRadio = document.getElementById("free");

montantLibre.addEventListener("focus", () => {
  libreRadio.click();
});
