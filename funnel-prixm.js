// Clé Stripe
const stripe = Stripe(
  "pk_test_51M9U8eHrOOBo0cZPPsGZYldGAcOCnDQMsnzWFJPncuiW7YDZ5YqUiKC7Hki5ALlLQGZJD6hE9ZyG544TEJ6K1h6K00OVhi8eGI"
);

window.onload = async () => {
  Wized.request.await("Payment Intents Virement", (response) => {
    let paymentIntentSecretVirement = response.data.client_secret;

    // Create an instance of Elements
    const elements = stripe.elements();

    const options = {
      supportedCountries: ["SEPA"],
      placeholderCountry: "FR",
    };

    // Create an instance of the IBAN Element
    const iban = elements.create("iban", options);

    // Add an instance of the IBAN Element into the `iban-element` <div>
    iban.mount("#iban-element");

    const formVirement = document.getElementById("payment-form-virement");
    const accountholderName = document.getElementById("nom").value;
    const email = emailUser.value;
    const submitButton = document.getElementById("submit-button");
    const clientSecret = paymentIntentSecretVirement;
    submitButton.setAttribute("data-secret", clientSecret);

    formVirement.addEventListener("submit", (event) => {
      event.preventDefault();
      stripe
        .confirmSepaDebitPayment(clientSecret, {
          payment_method: {
            sepa_debit: iban,
            billing_details: {
              name: accountholderName,
              email: email,
            },
          },
        })
        .then((result) => {
          if (result.error) {
            // Affiche l'erreur dans un élément HTML approprié
            const errorMessage = document.getElementById("error-message");
            errorMessage.textContent = result.error.message;
            errorMessage.classList.add("visible");
          } else {
            // Lorsque le paiement est un succès
            Wized.request.execute("Retrieve PaymentIntent Virement");
            setTimeout(() => {
              window.location.href =
                "https://www.prixm.org/don-merci?moyen=virement";
            }, 1000);
          }
        });
    });
  });

  Wized.request.await("Payment Intents CB", (response) => {
    let clientSecretVariable = response.data.client_secret;

    const options = {
      clientSecret: clientSecretVariable,
    };

    // Set up Stripe.js and Elements to use in checkout form, passing the client secret obtained in step 3
    const elements = stripe.elements(options);

    // Create and mount the Payment Element
    const paymentElement = elements.create("payment");
    paymentElement.mount("#payment-element-cb");

    // Finaliser le paiement
    const formCarte = document.getElementById("payment-form-cb");

    formCarte.addEventListener("submit", async (event) => {
      event.preventDefault();

      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
      });

      if (error) {
        // Inform the customer that there was an error.
        const messageContainer = document.querySelector("#error-message-cb");
        messageContainer.textContent = error.message;
      } else {
        // After a successful payment, execute the Wized request
        Wized.request.execute("Retrieve PaymentIntent CB");

        if (
          paymentIntent.next_action &&
          paymentIntent.next_action === "redirect_to_url"
        ) {
          // Add a delay before the redirection
          setTimeout(() => {
            window.location = action.redirect_to_url.url;
          }, 1000); // 2 seconds delay
        } else {
          // Redirect to the success page if there's no next_action
          setTimeout(() => {
            window.location = "https://prixm.webflow.io/don-merci?moyen=carte";
          }, 1000); // 2 seconds delay
        }
      }
    });
  });
  // Loader après click sur le bouton de paiement de CB
  let submitStripeCb = document.getElementById("submit-cb");

  // Loader après click sur le bouton de paiement de virement
  let submitStripeVirement = document.getElementById("submit-button");

  submitStripeCb.addEventListener("click", showLoader);
  submitStripeVirement.addEventListener("click", showLoader);

  function showLoader() {
    document.getElementById("submit_loader").style.display = "flex";
  }
};
