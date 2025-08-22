<script lang="ts">
    import { goto } from "$app/navigation";
    import { getEstimatePageItemBySection, toastFailure } from "$lib/commons/utils";
    import * as yup from "yup";
    import { createForm } from "felte";
    import { validator } from "@felte/validator-yup";
    import { pocketbase } from "$lib/commons/rest";
    import { estimateData } from "$lib/commons/stores";
    
    
    let headerDetails = getEstimatePageItemBySection("header_details");

    let submitted: boolean = false;

    const onSirCheck = () => {
        const mamCheck = document.getElementById("mam") as HTMLInputElement;
        const sirIsChecked = (document.getElementById("sir") as HTMLInputElement).checked;
        mamCheck.disabled = sirIsChecked;
    }

    const onMamCheck = () => {
        const sirCheck = document.getElementById("sir") as HTMLInputElement;
        const mamIsChecked = (document.getElementById("mam") as HTMLInputElement).checked;
        sirCheck.disabled = mamIsChecked;
    }

    const schema = yup.object().shape({
        terms: yup
            .boolean()
            .oneOf([true], "Veuillez accepter les clauses de confidentitialité"),
        firstname: yup
            .string()
            .required("Veuillez entrer votre prénom"),
        lastname: yup
            .string()
            .required("Veuillez entrer votre nom"),
        email: yup
            .string()
            .email("Veuillez entrer une adresse email valide")
            .required("Veuillez entrer votre adresse email"),
    });

    const submitForm = async (formValues: any) => {
        submitted = true;
        try {
            let contactData = {
                firstname: formValues.firstname,
                lastname: formValues.lastname,
                email: formValues.email,
                marital_status: (function() {
                    if (formValues.sirCheck === true) {
                        return "monsieur";
                    } 
                    if (formValues.mamCheck === true) {
                        return "madame";
                    } else {
                        return "monsieur";
                    }
                })()
            }
            let existingContact: any;
            try {
                existingContact = await pocketbase.collection("contacts").getFirstListItem(`email="${contactData.email}"`);
            } catch (error) { /* do nothing */ }
            if (!existingContact?.id) {
                const createdContact = await pocketbase.collection("contacts").create(contactData);
                estimateData.set({ contact: createdContact });
            } else {
                estimateData.set({ contact: existingContact });
            }
            submitted = false;
            reset();
            goto("/devis/questions/step-0")
        } catch (error) {
            console.log(error)
            submitted = false;
            reset();
            toastFailure({
                title: "Erreur de connexion", 
                details: "Veuillez revoir vos identifiants puis réessayer"
            });
        }
    };

    const { form, errors, reset } = createForm<yup.InferType<typeof schema>>({
        onSubmit: submitForm,
        extend: [validator({ schema })],
    });


</script>

<svelte:head>
    <title>AFT GROUP | DEVIS</title>
</svelte:head>

<div>
    <section class="bg-cover bg-center pb-4 bg-no-repeat bg-[url('/images/gros-plan-economiste-aide-calculatrice-tout-parcourant-factures-taxes-au-bureau_637285-3156.jpg')] bg-gray-700 bg-blend-multiply">
        <div data-aos="fade-up" data-aos-duration="1000" class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-white text-4xl font-extrabold tracking-normal leading-none md:text-5xl xl:text-6xl dark:text-white">
                    Voulez-vous <br /> un devis ?
                </h1>
                <a href="/" class="inline-flex mt-4 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-md bg-aftgroup hover:bg-aftgroup focus:ring-4 focus:ring-aftgroup dark:focus:ring-aftgroup">
                    Contactez nous
                </a>
            </div>
            <img
                class="mt-36 absolute ml-72 lg:ml-[80em]"
                style="height: 30px; width: 30px"
                src="/images/Group 162533.png"
                alt=""
            />
        </div>
    </section>

    <section class="bg-white mt-8 text-center dark:bg-gray-900">
        <div class="py-2 px-4 mx-auto max-w-screen-lg sm:py-8 lg:px-6">
            <div class="max-w-screen-lg mb-3 lg:mb-4">
                <h2 class="mb-4 flex justify-center lg:text-4xl text-lg tracking-tight font-extrabold text-gray-900 dark:text-white">
                    <img class="px-2 lg:h-8 h-6" src="/images/Group 162578.png" alt="group buffer" />    
                    <p>Demander un devis</p>
                </h2>
                <p class="text-gray-500 lg:text-lg text-sm dark:text-gray-400">
                    {@html headerDetails}
                </p>
            </div>
        </div>
    </section>

    <section class="bg-white mb-16 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
            <div class="w-full bg-white dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <form use:form class="space-y-4 md:space-y-6" action="#">
                        <div class="flex justify-center items-center">
                            <div class="flex">
                                <div class="ml-3 mx-3 text-base">
                                    <label for="terms" class="font-medium lg:text-lg text-sm text-blue-800 dark:text-gray-300">Madame</label>
                                </div>
                                <div class="flex items-center h-7">
                                  <input disabled={true} on:change={onMamCheck} name="mamCheck" id="mam" value="madame" type="checkbox" class="w-7 h-7 border border-aftgroup bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                                </div>
                            </div>
                            <div class="flex mx-8">
                                <div class="ml-3 mx-3 text-base">
                                    <label for="terms" class="font-medium lg:text-lg text-sm text-blue-800 dark:text-gray-300">Monsieur</label>
                                </div>
                                <div class="flex items-center h-7">
                                  <input checked={true} on:change={onSirCheck} id="sir" name="sirCheck" value="monsieur" type="checkbox" class="w-7 h-7 border border-aftgroup bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                                </div>
                            </div>
                        </div>
                        <div>
                            <input type="text" name="lastname" id="lastname" placeholder="Nom" class="bg-gray-50 border-2 border-aftgroup text-gray-900 sm:text-sm rounded-md focus:ring-aftgroup focus:border-aftgroup block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <p style="font-size: 11px; color: red">
                                {#if $errors.lastname}{$errors.lastname}{/if}
                            </p>
                        </div>
                        <div>
                            <input type="text" name="firstname" id="firstname" placeholder="Prénom" class="bg-gray-50 border-2 border-aftgroup text-gray-900 sm:text-sm rounded-md focus:ring-aftgroup focus:border-aftgroup block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <p style="font-size: 11px; color: red">
                                {#if $errors.firstname}{$errors.firstname}{/if}
                            </p>
                        </div>
                        <div>
                            <input type="email" name="email" id="email" placeholder="Email" class="bg-gray-50 border-2 border-aftgroup text-gray-900 sm:text-sm rounded-md focus:ring-aftgroup focus:border-aftgroup block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <p style="font-size: 11px; color: red">
                                {#if $errors.email}{$errors.email}{/if}
                            </p>
                        </div>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                              <input id="terms" name="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border-2 border-aftgroup rounded bg-gray-50 focus:ring-aftgroup dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="terms" class="font-light text-gray-900 dark:text-gray-300"><a class="font-medium text-xs text-blue-800 hover:underline dark:text-primary-500" href="">Politiques d'utilisation et de confidentialité</a></label>
                                <p style="font-size: 11px; color: red">
                                    {#if $errors.terms}{$errors.terms}{/if}
                                </p>
                            </div>
                        </div>
                        <button type="submit" class="w-full text-white bg-aftgroup hover:bg-aftgroup focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-md px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            {#if !submitted} 
                                Demander un devis 
                            {:else}
                                <div role="status">
                                    <svg aria-hidden="true" class="w-6 h-6 mx-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                    <span class="sr-only">Loading...</span>
                                </div>
                            {/if}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    

</div>
