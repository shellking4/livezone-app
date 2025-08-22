<script lang="ts">
    import { page } from "$app/stores";
    import { getPageSectionItem, duplicateItems, toastSuccess, toastFailure } from "$lib/commons/utils";
    import { initDropdowns } from "flowbite";
    import { onMount } from "svelte";
    import * as yup from "yup";
    import { createForm } from "felte";
    import { validator } from "@felte/validator-yup";
    import { pocketbase } from "$lib/commons/rest";

    onMount(() => {
        initDropdowns();
    })

    let jumbotron = getPageSectionItem("jumbotron")
    let subJumbotron = getPageSectionItem("sub_jumbotron")
    let servicesDescription = getPageSectionItem("services_description");
    let personalizedServicesDescription = getPageSectionItem("personalized_services_description");
    let whoAreWe = getPageSectionItem("who_are_we");
    let trainingsDescription = getPageSectionItem("trainings_description");
    let productsDescription = getPageSectionItem("products_description");
    let whyChooseUs = getPageSectionItem("why_choose_us");

    let services = $page.data.services;
    let products = duplicateItems($page.data.products, 4);

    let submitted: boolean = false;

    let authError = "";

    const schema = yup.object().shape({
        fullname: yup
            .string()
            .required("Veuillez entrer votre nom complet"),
        phone: yup
            .string()
            .required("Veuillez entrer votre numero de téléphone"),
        email: yup
            .string()
            .email("Veuillez entrer une adresse email valide")
            .required("Veuillez entrer votre adresse email"),
        message: yup
            .string()
            .required("Veuillez entrer votre message"),
    });

    const submitForm = async (formValues: any) => {
        submitted = true;
        try {
            let contactData = {
                fullname: formValues.fullname,
                phone: formValues.phone,
                email: formValues.email,
                reachout_message: formValues.message,
            }
            let existingContact: any;
            try {
                existingContact = await pocketbase.collection("contacts").getFirstListItem(`email="${contactData.email}"`);
                submitted = false;
            } catch (error) { 
                submitted = false;
                /* do nothing */
            }
            if (!existingContact?.id) {
                await pocketbase.collection("contacts").create(contactData);
            }
            reset();
            toastSuccess({
                title: "Succès",
                details: "Nous avons bien reçu votre message. Nous vous recontacterons"
            })
        } catch (error) {
            console.log(error)
            submitted = false;
            reset();
            toastFailure({
                title: "Erreur", 
                details: "Une erreur est survenue. Veuillez rééssayer"
            });
        }
    };

    const { form, errors, reset } = createForm<yup.InferType<typeof schema>>({
        onSubmit: submitForm,
        extend: [validator({ schema })],
    });
</script>

<svelte:head>
    <title>AFT GROUP | HOME</title>
</svelte:head>

<div class="">
    <section class="bg-cover bg-center h-screen bg-no-repeat bg-[url('/images/homme-affaires-mondial-detenant-concepts-communication-futuristes-sphere-rougeoyante-generes-par-ia_188544-36806.jpg')] bg-gray-700 bg-blend-multiply">
        <div data-aos="fade-up"
            data-aos-duration="1000"
            class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
        >
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1
                    class="max-w-2xl mb-4 lg:mt-[20vh] mt-[10vh] text-white text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
                >
                    {@html jumbotron ?? ""}
                </h1>
                <p
                    class="max-w-2xl mb-6 text-white font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
                >
                    {@html subJumbotron ?? ""}
                </p>
                <a href="/#contact_section" class="inline-flex mt-4 lg:hidden justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-aftgroup hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Contactez nous
                </a>
            </div>
            <img
                class="mt-52 absolute ml-72 lg:ml-[80em]"
                style="height: 30px; width: 30px"
                src="/images/Group 162533.png"
                alt=""
            />
        </div>
        <img
            class="w-10 absolute mt-[1em] lg:mt-[4em] h-10 md:w-10 md:h-10"
            src="/images/Group 162556.png"
            alt=""
        />
    </section>


    <section data-aos="fade-up"
        data-aos-duration="1000" class="bg-white text-center dark:bg-aftgroupdark">
        <div class="py-2 px-4 mx-auto max-w-screen-lg sm:py-16 lg:px-6">
            <div class="max-w-screen-lg mb-3 lg:mb-8">
                <h2 data-aos="fade"
                    class="my-4 flex justify-center lg:text-4xl text-lg tracking-tight font-extrabold text-gray-900 dark:text-white"
                >
                    <img
                        class="lg:px-3 px-1 lg:h-8 h-6"
                        src="/images/Group 162578.png"
                        alt="group buffer"
                    />
                    <p>Large gamme de services</p>
                </h2>
                <p data-aos="fade" class="text-gray-800 lg:text-lg text-sm dark:text-gray-400">
                    {@html servicesDescription  ?? ""}
                </p>
            </div>

            <img
                class="ml-auto"
                style="height: 30px; width: 30px"
                src="/images/Group 162533.png"
                alt=""
            />

            <div class="max-w-screen-lg mb-3 mt-8 lg:mb-4">
                <h2
                    class="mb-4 flex justify-center lg:text-4xl text-lg tracking-tight font-extrabold text-gray-900 dark:text-white"
                >
                    <img
                        class="lg:px-3 px-1 lg:h-8 h-6"
                        src="/images/Group 162578.png"
                        alt="group buffer"
                    />
                    <p>Services Personnalisés</p>
                </h2>
                <p class="text-gray-800 lg:text-lg text-sm dark:text-gray-400">
                    {@html personalizedServicesDescription }
                </p>
            </div>
        </div>
    </section>

    <section class="bg-white dark:bg-aftgroupdark">
        <div class="py-2 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
            <div class="grid grid-flow-col auto-cols-max overflow-x-scroll scroll-smooth scrollbar-hide gap-1">
                <!-- Service Card -->
                {#each services as service, i(service) }
                    <div data-aos="fade-left" data-aos-delay={(i + 1) * 200} class="flex flex-col p-6 mx-auto lg:max-w-sm max-w-xs text-center text-white bg-aftgroupdark rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <img
                            style="height: 100px; width: 100px;"
                            class="mx-auto"
                            src="/images/icons8_idea.png"
                            alt=""
                        />
                        <h3 class="my-4 lg:text-2xl text-xl font-semibold">
                            {service.name ?? ""}
                        </h3>
                        <p
                            class="font-light text-white pb-8 lg:text-md text-sm dark:text-gray-400"
                        >
                            {@html service.description ?? "" }
                        </p>
                        <div class="flex justify-center">
                            <img
                                class="w-10 h-10 md:w-30 md:h-30 mt-2"
                                src="/images/Group 162556.png"
                                alt=""
                            />
                            <a
                                href="/#contact_section"
                                class="inline-flex mx-4 mt-2 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-aftgroup to-aftgroup group-hover:from-aftgroup group-hover:to-aftgroup group-hover:to-aftgroup hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                            >
                                <span class="px-5 py-2 transition-all ease-in duration-75 bg-aftgroupdark dark:bg-aftgroupdark rounded-md group-hover:bg-opacity-0">
                                    Nous Contacter
                                </span>
                            </a>
                        </div>
                    </div>
                {/each }
            </div>
        </div>
    </section>

    <img
        class="w-10 h-10 md:w-30 md:h-30"
        src="/images/Group 162556.png"
        alt=""
    />

    <!-- Who are we -->
    <section id="aboutus_section" class="bg-white text-center dark:bg-aftgroupdark">
        <div class="py-2 px-4 mx-auto max-w-screen-lg sm:py-8 lg:px-6">
            <div data-aos="fade-up"
                data-aos-duration="1000" class="max-w-screen-lg mb-3 lg:mb-8">
                <h2 class="mb-4 flex justify-center lg:text-4xl text-lg tracking-tight font-extrabold text-gray-900 dark:text-white">
                    <img
                        class="lg:px-3 px-1 lg:h-8 h-6"
                        src="/images/Group 162578.png"
                        alt="group buffer"
                    />
                    <p>Qui sommes-nous ?</p>
                </h2>
                <p class="text-gray-800 lg:text-md text-sm dark:text-gray-400">
                    {@html whoAreWe}
                </p>
            </div>

            <img data-aos="fade"
                data-aos-duration="1000"
                class="ml-auto"
                style="height: 30px; width: 30px"
                src="/images/Group 162533.png"
                alt=""
            />

            <div data-aos="fade-up"
                data-aos-duration="1000" class="max-w-screen-lg mb-3 mt-8 lg:mb-4">
                <h2 data-aos="fade"
                    class="mb-4 flex justify-center lg:text-4xl text-lg tracking-tight font-extrabold text-gray-900 dark:text-white"
                >
                    <img
                        class="lg:px-3 px-1 lg:h-8 h-6"
                        src="/images/Group 162578.png"
                        alt="group buffer"
                    />
                    <p>Nos formations</p>
                </h2>
                <p class="text-gray-800 lg:text-lg text-sm dark:text-gray-400">
                    {@html trainingsDescription}
                </p>
            </div>
        </div>
    </section>

    <section data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" class="bg-white dark:bg-aftgroupdark">
        <div class="py-2 swiper px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
            <div class="grid swiper-wrapper grid-flow-col auto-cols-max overflow-x-scroll scroll-smooth scrollbar-hide gap-1">
                <div
                    class="lg:max-w-sm swiper-slide max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <a href="/">
                        <img
                            class="rounded-t-lg"
                            src="/images/solution-strategie-gestion-entreprise-concept-marque_53876-167088.jpg"
                            alt=""
                        />
                    </a>
                    <div class="p-5">
                        <a href="/">
                            <h5
                                class="mb-2 lg:text-xl text-md text-center font-bold tracking-tight text-gray-900 dark:text-white"
                            >
                                Conception UI / UX
                            </h5>
                        </a>
                        <div class="flex justify-center">
                            <img
                                class="w-10 h-10 md:w-30 md:h-30 mt-2"
                                src="/images/Group 162556.png"
                                alt=""
                            />
                            <a
                                href="/#contact_section"
                                class="inline-flex mx-4 mt-2 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-dark rounded-md group bg-gradient-to-br from-aftgroup to-aftgroup group-hover:from-aftgroup group-hover:to-aftgroup group-hover:to-aftgroup hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                            >
                                <span
                                    class="px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-aftgroupdark rounded-md group-hover:bg-opacity-0"
                                >
                                    Nous Contacter
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    class="lg:max-w-sm swiper-slide max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <a href="/">
                        <img
                            class="rounded-t-lg"
                            src="/images/concept-controle-qualite-standard-m_23-2150041864.jpg"
                            alt=""
                        />
                    </a>
                    <div class="p-5">
                        <a href="/">
                            <h5
                                class="mb-2 lg:text-xl text-md text-center font-bold tracking-tight text-gray-900 dark:text-white"
                            >
                                Développement mobile
                            </h5>
                        </a>
                        <div class="flex justify-center">
                            <img
                                class="w-10 h-10 md:w-30 md:h-30 mt-2"
                                src="/images/Group 162556.png"
                                alt=""
                            />
                            <a
                                href="/#contact_section"
                                class="inline-flex mx-4 mt-2 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-dark rounded-md group bg-gradient-to-br from-aftgroup to-aftgroup group-hover:from-aftgroup group-hover:to-aftgroup group-hover:to-aftgroup hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                            >
                                <span
                                    class="px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-aftgroupdark rounded-md group-hover:bg-opacity-0"
                                >
                                    Nous Contacter
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    class="lg:max-w-sm swiper-slide max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <a href="/">
                        <img
                            class="rounded-t-lg"
                            src="/images/vue-face-du-travail-pendant-concept-covid_23-2148616714.jpg"
                            alt=""
                        />
                    </a>
                    <div class="p-5">
                        <a href="/">
                            <h5
                                class="mb-2 text-center lg:text-xl text-md font-bold tracking-tight text-gray-900 dark:text-white"
                            >
                                Développement web
                            </h5>
                        </a>
                        <div class="flex justify-center">
                            <img
                                class="w-10 h-10 md:w-30 md:h-30 mt-2"
                                src="/images/Group 162556.png"
                                alt=""
                            />
                            <a
                                href="/#contact_section"
                                class="inline-flex mx-4 mt-2 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-dark rounded-md group bg-gradient-to-br from-aftgroup to-aftgroup group-hover:from-aftgroup group-hover:to-aftgroup group-hover:to-aftgroup hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                            >
                                <span
                                    class="px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-aftgroupdark rounded-md group-hover:bg-opacity-0"
                                >
                                    Nous Contacter
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    class="lg:max-w-sm swiper-slide max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <a href="/">
                        <img
                            class="rounded-t-lg"
                            src="/images/vue-face-du-travail-pendant-concept-covid_23-2148616714.jpg"
                            alt=""
                        />
                    </a>
                    <div class="p-5">
                        <a href="/">
                            <h5
                                class="mb-2 lg:text-xl text-md text-center font-bold tracking-tight text-gray-900 dark:text-white"
                            >
                                Sécurité Informatique
                            </h5>
                        </a>
                        <div class="flex justify-center">
                            <img
                                class="w-10 h-10 md:w-30 md:h-30 mt-2"
                                src="/images/Group 162556.png"
                                alt=""
                            />
                            <a
                                href="/#contact_section"
                                class="inline-flex mx-4 mt-2 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-dark rounded-md group bg-gradient-to-br from-aftgroup to-aftgroup group-hover:from-aftgroup group-hover:to-aftgroup group-hover:to-aftgroup hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                            >
                                <span
                                    class="px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-aftgroupdark rounded-md group-hover:bg-opacity-0"
                                >
                                    Nous Contacter
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <img
        class="w-10 h-10 md:w-30 md:h-30"
        src="/images/Group 162556.png"
        alt=""
    />

    <img
        class="ml-auto"
        style="height: 30px; width: 30px"
        src="/images/Group 162533.png"
        alt=""
    />

    <!-- Heading words -->
    <section data-aos="fade" data-aos-duration="1000" id="products_section" class="bg-white text-center dark:bg-aftgroupdark">
        <div class="py-2 mt-2 px-4 mx-auto max-w-screen-lg sm:py-8 lg:px-6">
            <div class="max-w-screen-lg mb-3 lg:mb-4">
                <h2
                    class="mb-4 flex justify-center lg:text-4xl text-lg tracking-tight font-extrabold text-gray-900 dark:text-white"
                >
                    <img
                        class="lg:px-3 px-1 lg:h-8 h-6"
                        src="/images/Group 162578.png"
                        alt="group buffer"
                    />
                    <p>Nos projets / produits</p>
                </h2>
                <p class="text-gray-800 lg:text-lg text-sm dark:text-gray-400">
                    {@html productsDescription }
                </p>
            </div>
        </div>
    </section>

    <!-- products cards -->
    <section class="bg-white dark:bg-aftgroupdark">
        <div class="py-2 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
            <div class="grid grid-flow-col auto-cols-max overflow-x-scroll scroll-smooth scrollbar-hide gap-1">
                <!-- Product Card -->
                {#each products as product}
                    <div data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" class="flex flex-col p-6 mx-auto lg:max-w-sm max-w-xs text-center text-white bg-aftgroupdark rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <img
                            style="height: 100px; width: 100px;"
                            class="mx-auto"
                            src="/images/icons8_idea.png"
                            alt=""
                        />
                        <h3 class="my-4 lg:text-2xl text-xl font-semibold">
                            {product.name ?? ""}
                        </h3>
                        <p class="font-light text-white pb-8 text-sm dark:text-gray-400">
                            {@html product.description}
                        </p>
                        <div class="flex justify-center">
                            <img
                                class="w-10 h-10 md:w-30 md:h-30 mt-2"
                                src="/images/Group 162556.png"
                                alt=""
                            />
                            <a
                                href="/#contact_section"
                                class="inline-flex mx-4 mt-2 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-aftgroup to-aftgroup group-hover:from-aftgroup group-hover:to-aftgroup group-hover:to-aftgroup hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                            >
                                <span
                                    class="px-5 py-2 transition-all ease-in duration-75 bg-aftgroupdark dark:bg-aftgroupdark rounded-md group-hover:bg-opacity-0"
                                >
                                    Nous Contacter
                                </span>
                            </a>
                        </div>
                    </div>
                {/each  }
            </div>
        </div>
    </section>

    <img
        class="w-10 h-10 md:w-30 md:h-30"
        src="/images/Group 162556.png"
        alt=""
    />

    <section data-aos="fade" id="whychooseuse_section" class="bg-white text-center dark:bg-aftgroupdark">
        <div class="py-2 mt-2 px-4 mx-auto max-w-screen-lg sm:py-8 lg:px-6">
            <div class="max-w-screen-lg lg:mb-4">
                <h2
                    class="mb-4 flex justify-center lg:text-4xl text-lg tracking-tight font-extrabold text-gray-900 dark:text-white"
                >
                    <img
                        class="lg:px-3 px-1 lg:h-8 h-6"
                        src="/images/Group 162578.png"
                        alt="group buffer"
                    />
                    <p>Pourquoi nous choisir ?</p>
                </h2>
                <p class="text-gray-800 lg:text-md text-sm dark:text-gray-400">
                    {@html whyChooseUs}
                </p>
            </div>
        </div>
    </section>

    <img
        class="ml-auto"
        style="height: 30px; width: 30px"
        src="/images/Group 162533.png"
        alt=""
    />

    <section data-aos="fade" class="mt-2 dark:bg-aftgroupdark">
        <div class="py-4 lg:py-2 w-full px-4">
            <h2
                class="mb-2 flex justify-center lg:mb-8 lg:text-4xl text-lg font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl"
            >
                <img
                    class="lg:px-3 px-1 lg:h-8 h-6"
                    src="/images/Group 162578.png"
                    alt="group buffer"
                />
                <p>Nos partenaires</p>
            </h2>
        </div>
    </section>

    <!-- partners logos -->
    <div data-aos="fade-up" data-aos-duration="1000" class="p-4 hidden lg:block bg-aftgroupdark md:p-8 lg:p-10 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl text-center">
            <div class="flex justify-center space-x-16">
                <a href="/" class="flex justify-center items-center">
                    <img src="/images/AFTblanc 1.png" alt="partner" />
                </a>
                <a href="/" class="flex justify-center items-center">
                    <img src="/images/AFTblanc 1.png" alt="partner" />
                </a>
                <a href="/" class="flex justify-center items-center">
                    <img src="/images/AFTblanc 1.png" alt="partner" />
                </a>
                <a href="/" class="flex justify-center items-center">
                    <img src="/images/AFTblanc 1.png" alt="partner" />
                </a>
            </div>
        </div>
    </div>

    <!-- partners section mobile -->
    <div class="p-4 lg:hidden sm:block mb-8 bg-aftgroupdark md:p-8 lg:p-10 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl text-center">
            <div
                class="grid grid-cols-2 flex justify-center gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400"
            >
                <a href="/" class="flex justify-center items-center">
                    <img src="/images/AFTblanc 1.png" alt="partner" />
                </a>
                <a href="/" class="flex justify-center items-center">
                    <img src="/images/AFTblanc 1.png" alt="partner" />
                </a>
                <a href="/" class="flex justify-center items-center">
                    <img src="/images/AFTblanc 1.png" alt="partner" />
                </a>
                <a href="/" class="flex justify-center items-center">
                    <img src="/images/AFTblanc 1.png" alt="partner" />
                </a>
            </div>
        </div>
    </div>

    <img
        class="w-10 h-10 md:w-30 md:h-30"
        src="/images/Group 162556.png"
        alt=""
    />

    <img
        class="ml-auto"
        style="height: 30px; width: 30px"
        src="/images/Group 162533.png"
        alt=""
    />

    <section id="contact_section" class="dark:bg-aftgroupdark">
        <div class="py-2 lg:py-2 w-full px-4">
            <h2 class="mb-2 flex justify-center lg:mb-16 lg:text-4xl text-lg font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
                <img
                    class="lg:px-3 px-1 lg:h-8 h-6"
                    src="/images/Group 162578.png"
                    alt="group buffer"
                />
                <p>Contatez nous</p>
            </h2>
        </div>
    </section>

    <img data-aos="fade"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        class="h-auto mt-4 max-w-full lg:hidden mb-2 lg:p-0"
        src="/images/youngphotographers.png"
        alt="dashboard"
    />

    <section data-aos="fade"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" class="bg-white dark:bg-aftgroupdark">
        <div
            class="gap-8 justify-center items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-8 lg:px-6"
        >
            <div class="mt-4 md:mt-0 card shadow bg-gray-200 p-8">
                <form use:form class="space-y-8">
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="z-100 w-full mb-2 group">
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Nom complet"
                            />
                            <p style="font-size: 11px; color: red">
                                {#if $errors.fullname}{$errors.fullname}{/if}
                            </p>
                        </div>
                        <div class="z-100 mb-2 w-full group">
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Téléphone"
                            />
                            <p style="font-size: 11px; color: red">
                                {#if $errors.phone}{$errors.phone}{/if}
                            </p>
                        </div>
                        <div class="lg:hidden sm:block z-100 mb-2 w-full group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Adresse Email"
                            />
                            <p style="font-size: 11px; color: red">
                                {#if $errors.email}{$errors.email}{/if}
                            </p>
                        </div>
                    </div>
                    <div class="hidden lg:block z-100 mb-2 w-full group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Adresse Email"
                        />
                        <p style="font-size: 11px; color: red">
                            {#if $errors.email}{$errors.email}{/if}
                        </p>
                    </div>
                    <div class="sm:col-span-2">
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Message..."
                        />
                        <p style="font-size: 11px; color: red">
                            {#if $errors.message}{$errors.message}{/if}
                        </p>
                    </div>
                    <button
                        type="submit"
                        class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-aftgroup sm:w-full w-full hover:bg-aftgroup focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        {#if !submitted} 
                            Envoyer 
                        {:else}
                            <div role="status">
                                <svg aria-hidden="true" class="w-6 h-6 mx-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                        {/if}
                    </button
                    >
                </form>
            </div>
            <img
                class="w-full hidden p-8 lg:block"
                src="/images/youngphotographers.png"
                alt="dashboard"
            />
        </div>

        <img
            class="ml-auto"
            style="height: 30px; width: 30px"
            src="/images/Group 162533.png"
            alt=""
        />
    </section>

    <img
        class="w-10 h-10 md:w-30 md:h-30"
        src="/images/Group 162556.png"
        alt=""
    />
</div>
