<script lang="ts">
    import { page } from "$app/stores";
    import {
        getPageSectionItem,
        duplicateItems,
        toastSuccess,
        toastFailure,
    } from "$lib/commons/utils";
    import { initDropdowns } from "flowbite";
    import { onMount } from "svelte";
    import * as yup from "yup";
    import { createForm } from "felte";
    import { validator } from "@felte/validator-yup";
    import { pocketbase } from "$lib/commons/rest";

    onMount(() => {
        initDropdowns();
    });

    let jumbotron = getPageSectionItem("jumbotron");
    let subJumbotron = getPageSectionItem("sub_jumbotron");
    let servicesDescription = getPageSectionItem("services_description");
    let personalizedServicesDescription = getPageSectionItem(
        "personalized_services_description",
    );
    let whoAreWe = getPageSectionItem("who_are_we");
    let trainingsDescription = getPageSectionItem("trainings_description");
    let productsDescription = getPageSectionItem("products_description");
    let whyChooseUs = getPageSectionItem("why_choose_us");

    let services = [
        {
            id: "a1b2c3d4-e5f6-7890-ab12-cd3456789012",
            name: "Enregistrement d'albums complets",
            description:
                "Production complète d'albums avec enregistrement multipiste, mixage et mastering professionnel dans nos studios équipés des dernières technologies",
        },
        {
            id: "b2c3d4e5-f6g7-8901-bc23-de4567890123",
            name: "Production de singles et EPs",
            description:
                "Création de singles et EPs prêts pour le streaming et la distribution, avec accompagnement artistique personnalisé",
        },
        {
            id: "c3d4e5f6-g7h8-9012-cd34-ef5678901234",
            name: "Enregistrement de voix-off et narration",
            description:
                "Services d'enregistrement professionnel pour voix-off publicitaire, narration documentaire et contenus audiovisuels",
        },
        {
            id: "d4e5f6g7-h8i9-0123-de45-fg6789012345",
            name: "Production de podcasts",
            description:
                "Production complète de podcasts incluant enregistrement, montage, mixage et optimisation pour les plateformes de diffusion",
        },
        {
            id: "e5f6g7h8-i9j0-1234-ef56-gh7890123456",
            name: "Musiques de film et publicité",
            description:
                "Composition et production de bandes sonores originales pour films, documentaires, publicités et contenus multimédias",
        },
        {
            id: "f6g7h8i9-j0k1-2345-fg67-hi8901234567",
            name: "Sessions live acoustiques",
            description:
                "Enregistrement de performances acoustiques en direct avec captation vidéo optionnelle pour contenus artistiques authentiques",
        },
        {
            id: "g7h8i9j0-k1l2-3456-gh78-ij9012345678",
            name: "Mixage et mastering",
            description:
                "Services de mixage et mastering professionnel pour projets externes, avec correction audio et optimisation multi-format",
        },
    ];

    let products = [
        {
            id: "a1b2c3d4-e5f6-7890-ab12-cd3456789012",
            name: "Enregistrement d'albums complets",
            description:
                "Production complète d'albums avec enregistrement multipiste, mixage et mastering professionnel dans nos studios équipés des dernières technologies",
        },
        {
            id: "b2c3d4e5-f6g7-8901-bc23-de4567890123",
            name: "Production de singles et EPs",
            description:
                "Création de singles et EPs prêts pour le streaming et la distribution, avec accompagnement artistique personnalisé",
        },
        {
            id: "c3d4e5f6-g7h8-9012-cd34-ef5678901234",
            name: "Enregistrement de voix-off et narration",
            description:
                "Services d'enregistrement professionnel pour voix-off publicitaire, narration documentaire et contenus audiovisuels",
        },
        {
            id: "d4e5f6g7-h8i9-0123-de45-fg6789012345",
            name: "Production de podcasts",
            description:
                "Production complète de podcasts incluant enregistrement, montage, mixage et optimisation pour les plateformes de diffusion",
        },
        {
            id: "e5f6g7h8-i9j0-1234-ef56-gh7890123456",
            name: "Musiques de film et publicité",
            description:
                "Composition et production de bandes sonores originales pour films, documentaires, publicités et contenus multimédias",
        },
        {
            id: "f6g7h8i9-j0k1-2345-fg67-hi8901234567",
            name: "Sessions live acoustiques",
            description:
                "Enregistrement de performances acoustiques en direct avec captation vidéo optionnelle pour contenus artistiques authentiques",
        },
        {
            id: "g7h8i9j0-k1l2-3456-gh78-ij9012345678",
            name: "Mixage et mastering",
            description:
                "Services de mixage et mastering professionnel pour projets externes, avec correction audio et optimisation multi-format",
        },
    ];

    let submitted: boolean = false;

    let authError = "";

    const schema = yup.object().shape({
        fullname: yup.string().required("Veuillez entrer votre nom complet"),
        phone: yup
            .string()
            .required("Veuillez entrer votre numero de téléphone"),
        email: yup
            .string()
            .email("Veuillez entrer une adresse email valide")
            .required("Veuillez entrer votre adresse email"),
        message: yup.string().required("Veuillez entrer votre message"),
    });

    const submitForm = async (formValues: any) => {
        submitted = true;
        try {
            let contactData = {
                fullname: formValues.fullname,
                phone: formValues.phone,
                email: formValues.email,
                reachout_message: formValues.message,
            };
            let existingContact: any;
            try {
                existingContact = await pocketbase
                    .collection("contacts")
                    .getFirstListItem(`email="${contactData.email}"`);
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
                details:
                    "Nous avons bien reçu votre message. Nous vous recontacterons",
            });
        } catch (error) {
            console.log(error);
            submitted = false;
            reset();
            toastFailure({
                title: "Erreur",
                details: "Une erreur est survenue. Veuillez rééssayer",
            });
        }
    };

    const { form, errors, reset } = createForm<yup.InferType<typeof schema>>({
        onSubmit: submitForm,
        extend: [validator({ schema })],
    });
</script>

<svelte:head>
    <title
        >Livezone | Le studio de référence pour tous vos besoins audio-visuels</title
    >
</svelte:head>

<div class="">
    <section
        class="bg-cover bg-center h-screen bg-no-repeat bg-[url('/images/studioview.jpg')] bg-gray-500 bg-blend-multiply"
    >
        <div
            data-aos="fade-up"
            data-aos-duration="1000"
            class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
        >
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1
                    class="max-w-2xl mb-4 lg:mt-[20vh] mt-[10vh] text-white text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
                >
                    Livezone: Un seul studio pour tous vos besoins audio-visuels
                </h1>
                <p
                    class="max-w-2xl mb-6 text-white font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
                >
                    Votre partenaire de confiance pour la production musicale,
                    l'enregistrement, le mixage le mastering, les performances
                    live et bien plus encore.
                </p>
                <a
                    href="/#contact_section"
                    class="inline-flex mt-4 lg:hidden justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-aftgroup hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                    Faire votre réservation
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

    <section
        data-aos="fade-up"
        data-aos-duration="1000"
        class="bg-white text-center dark:bg-aftgroupdark"
    >
        <div class="py-2 px-4 mx-auto max-w-screen-lg sm:py-16 lg:px-6">
            <div class="max-w-screen-lg mb-3 lg:mb-8">
                <h2
                    data-aos="fade"
                    class="my-4 flex justify-center lg:text-4xl text-lg tracking-tight font-extrabold text-gray-900 dark:text-white"
                >
                    <img
                        class="lg:px-3 px-1 lg:h-8 h-6"
                        src="/images/Group 162578.png"
                        alt="group buffer"
                    />
                    <p>Large gamme de services</p>
                </h2>
                <p
                    data-aos="fade"
                    class="text-gray-800 lg:text-lg text-sm dark:text-gray-400"
                >
                    Nous offrons une gamme variée de services audio-visuels et
                    musicaux aux entreprises et particuliers, allant de la
                    consultation et du développement à la mise en œuvre et à la
                    gestion de projets d'envergure internationale.
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
                    <p>Les services que nous offrons</p>
                </h2>
                <p class="text-gray-800 lg:text-lg text-sm dark:text-gray-400">
                    Livezone s'investit dans les projets de chacun cherchant à
                    chaque fois à créer un projet qui se démarque et qui a pour
                    objectif principal d’apporter une réelle plus-value et de
                    permettre à nos clients d’être unique
                </p>
            </div>
        </div>
    </section>

    <section class="bg-white dark:bg-aftgroupdark">
        <div class="py-2 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
            <div
                class="grid grid-flow-col auto-cols-max overflow-x-scroll scroll-smooth scrollbar-hide gap-1"
            >
                <!-- Service Card -->
                {#each services as service, i (service)}
                    <div
                        data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        class="flex flex-col p-6 mx-auto lg:max-w-sm max-w-xs text-center text-gray-800 bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
                    >
                        <!-- Hero image for studio/music theme -->
                        <img
                            style="height: 120px; width: 120px; object-fit: cover;"
                            class="mx-auto rounded-full border-4 border-blue-100"
                            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
                            alt="Studio Recording"
                        />

                        <h3
                            class="my-4 lg:text-2xl text-xl font-semibold text-gray-900"
                        >
                            {service.name ?? ""}
                        </h3>

                        <p
                            class="font-light text-gray-600 pb-8 text-sm leading-relaxed"
                        >
                            {@html service.description}
                        </p>

                        <div class="flex justify-center items-center mt-auto">
                            <!-- Music/Audio icon -->
                            <svg
                                class="w-8 h-8 text-blue-500 mr-3"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
                                />
                            </svg>

                            <a
                                href="/#contact_section"
                                class="relative inline-flex items-center mt-2 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-aftgroup to-aftgroup group-hover:from-aftgroup group-hover:to-aftgroup hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200"
                            >
                                <span
                                    class="relative px-5 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"
                                >
                                    Faire votre réservation
                                </span>
                            </a>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <img
        class="w-10 h-10 md:w-30 md:h-30"
        src="/images/Group 162556.png"
        alt=""
    />

    <!-- Who are we -->
    <section
        id="aboutus_section"
        class="bg-white text-center dark:bg-aftgroupdark"
    >
        <div class="py-2 px-4 mx-auto max-w-screen-lg sm:py-8 lg:px-6">
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                class="max-w-screen-lg mb-3 lg:mb-8"
            >
                <h2
                    class="mb-4 flex justify-center lg:text-4xl text-lg tracking-tight font-extrabold text-gray-900 dark:text-white"
                >
                    <img
                        class="lg:px-3 px-1 lg:h-8 h-6"
                        src="/images/Group 162578.png"
                        alt="group buffer"
                    />
                    <p>Qui sommes-nous ?</p>
                </h2>
                <p class="text-gray-800 lg:text-md text-sm dark:text-gray-400">
                    Livezone est un studio d'enregistrement professionnel
                    spécialisé dans la production musicale, l'enregistrement
                    audio et les services créatifs. Situé à Cocotomey à côté de
                    KyriaMarket, Livezone vous propose une gamme complète de
                    services allant de l'enregistrement d'albums à la production
                    de podcasts, pour vous aider à concrétiser vos projets
                    artistiques dans un environnement acoustique optimal. Notre
                    mission est de maximiser le potentiel créatif de chaque
                    artiste et producteur grâce à nos équipements de pointe et
                    notre expertise technique. Découvrez nos services et
                    explorez comment nous pouvons vous accompagner vers un
                    succès artistique durable.
                </p>
            </div>

            <img
                data-aos="fade"
                data-aos-duration="1000"
                class="ml-auto"
                style="height: 30px; width: 30px"
                src="/images/Group 162533.png"
                alt=""
            />
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
    <section
        data-aos="fade"
        data-aos-duration="1000"
        id="products_section"
        class="bg-white text-center dark:bg-aftgroupdark"
    >
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
                    Explorez nos réalisations exceptionnelles, le fruit de
                    projets et productions de Livezone, créées avec passion par
                    notre équipe de talentueux ingénieurs du son et producteurs.
                    Elles illustrent notre expertise en action, notre engagement
                    envers l'excellence sonore et notre capacité à transformer
                    des idées musicales en succès artistiques
                </p>
            </div>
        </div>
    </section>

    <!-- products cards -->
    <section class="bg-white dark:bg-aftgroupdark">
        <div class="py-2 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
            <div
                class="grid grid-flow-col auto-cols-max overflow-x-scroll scroll-smooth scrollbar-hide gap-1"
            >
                <!-- Product Card -->
                {#each products as product}
                    <div
                        data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        class="flex flex-col p-6 mx-auto lg:max-w-sm max-w-xs text-center text-gray-800 bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
                    >
                        <!-- Hero image for studio/music theme -->
                        <img
                            style="height: 120px; width: 120px; object-fit: cover;"
                            class="mx-auto rounded-full border-4 border-blue-100"
                            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center"
                            alt="Studio Recording"
                        />

                        <h3
                            class="my-4 lg:text-2xl text-xl font-semibold text-gray-900"
                        >
                            {product.name ?? ""}
                        </h3>

                        <p
                            class="font-light text-gray-600 pb-8 text-sm leading-relaxed"
                        >
                            {@html product.description}
                        </p>

                        <div class="flex justify-center items-center mt-auto">
                            <!-- Music/Audio icon -->
                            <svg
                                class="w-8 h-8 text-blue-500 mr-3"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
                                />
                            </svg>

                            <a
                                href="/#contact_section"
                                class="relative inline-flex items-center mt-2 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-aftgroup to-aftgroup group-hover:from-aftgroup group-hover:to-aftgroup hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200"
                            >
                                <span
                                    class="relative px-5 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"
                                >
                                    Faire votre réservation
                                </span>
                            </a>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <img
        class="w-10 h-10 md:w-30 md:h-30"
        src="/images/Group 162556.png"
        alt=""
    />

    <section
        data-aos="fade"
        id="whychooseuse_section"
        class="bg-white text-center dark:bg-aftgroupdark"
    >
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
                    Choisir Livezone, c'est opter pour une expertise de pointe
                    dans le domaine de l'enregistrement musical, de la
                    production audio et des services créatifs. Notre engagement
                    envers l'excellence sonore, la qualité technique et la
                    satisfaction artistique est au cœur de tout ce que nous
                    faisons. Nous sommes là pour créer des expériences sur
                    mesure qui répondent à vos besoins créatifs spécifiques,
                    pour vous aider à concrétiser votre vision artistique dans
                    un environnement professionnel et inspirant. Avec Livezone,
                    vous avez un partenaire de confiance pour chaque étape de
                    votre projet musical
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
            <h2
                class="mb-2 flex justify-center lg:mb-16 lg:text-4xl text-lg font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl"
            >
                <img
                    class="lg:px-3 px-1 lg:h-8 h-6"
                    src="/images/Group 162578.png"
                    alt="group buffer"
                />
                <p>Contatez nous</p>
            </h2>
        </div>
    </section>

    <img
        data-aos="fade"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        class="h-auto mt-4 max-w-full lg:hidden mb-2 lg:p-0"
        src="/images/youngphotographers.png"
        alt="dashboard"
    />

    <section
        data-aos="fade"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        class="bg-white dark:bg-aftgroupdark"
    >
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
                        class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-aftgroup sm:w-full w-full hover:bg-aftgroup focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        {#if !submitted}
                            Envoyer
                        {:else}
                            <div role="status">
                                <svg
                                    aria-hidden="true"
                                    class="w-6 h-6 mx-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                        {/if}
                    </button>
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
