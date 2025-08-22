<script>
    import { page } from "$app/stores";
    import { initPopovers } from "flowbite";
    import { onMount } from "svelte";
    import { getServiceBySection } from "$lib/commons/utils";

    onMount(() => {
        initPopovers()
    })

    let itServices = getServiceBySection("tab2_it_services");
    let security = getServiceBySection("tab2_security");
    let itTooling = getServiceBySection("tab2_it_tooling");
</script>

<svelte:head>
    <title>AFT GROUP | SERVICES</title>
</svelte:head>

<div>
    <section
        class="bg-cover bg-center pb-16 bg-no-repeat bg-[url('/images/femme-travaillant-ordinateur-portable_53876-163217.jpg')] bg-gray-700 bg-blend-multiply">
        <div data-aos="fade-up" data-aos-duration="1000"
            class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
        >
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1
                    class="max-w-2xl mb-4 text-white text-4xl font-extrabold tracking-normal leading-none md:text-5xl xl:text-5xl dark:text-white"
                >
                    Besoin de services <br /> informatiques ?
                </h1>
                <a href="/" class="inline-flex mt-4 font-bold justify-center items-center py-3 px-5 text-base text-center text-white rounded-md bg-aftgroup hover:bg-aftgroup focus:ring-4 focus:ring-aftgroup dark:focus:ring-aftgroup">
                    Contactez nous
                </a>
            </div>
            <img
                class="mt-44 absolute ml-72 lg:ml-[80em]"
                style="height: 30px; width: 30px"
                src="/images/Group 162533.png"
                alt=""
            />
        </div>
        <div class="text-sm bg-aftgroup max-w-screen-md hidden lg:block lg:absolute mt-2 mx-auto left-0 right-0 font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul class="grid grid-flow-col justify-items-stretch place-items-stretch">
                <li class="mr-2 px-3 justify-self-auto">
                    <a href="/services" class={`inline-block p-7 font-bold ${$page.url.pathname === '/services' ? 'bg-white text-gray-600' : 'text-white'} hover:bg-white text-xl hover:text-gray-600 dark:text-blue-500 dark:border-blue-500`}>Solutions web et digitales</a>
                </li>
                <li class="mr-2 justify-self-auto">
                    <a href="/services/informatic" class={`inline-block p-7 font-bold hover:bg-white ${$page.url.pathname === '/services/informatic' ? 'bg-white text-gray-600' : 'text-white'} text-xl hover:text-gray-600 dark:text-blue-500 dark:border-blue-500`}>Services informatiques</a>
                </li>
                <li class="mr-2 px-1 justify-self-auto">
                    <a href="/services/innovations" class={`inline-block p-7 font-bold border-transparent hover:bg-white ${$page.url.pathname === '/services/innovations' ? 'bg-white text-gray-600' : 'text-white'} text-xl hover:text-gray-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}>Innovations digitales</a>
                </li>
            </ul>
        </div>
        <div class="text-sm bg-aftgroup max-w-screen-xs lg:hidden sm:block absolute mt-8 left-[10px] right-[10px] font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul class="grid grid-flow-col justify-items-stretch place-items-stretch">
                <li class="px-1 justify-self-auto">
                    <a href="/services" class={`inline-block py-3 font-bold ${$page.url.pathname === '/services' ? 'bg-white text-gray-600' : 'text-white'} hover:bg-white text-xs lg:text-sm hover:text-gray-600 dark:text-blue-500 dark:border-blue-500`}>Solutions web et digitales</a>
                </li>
                <li class="justify-self-auto">
                    <a href="/services/informatic" class={`inline-block py-3 font-bold hover:bg-white ${$page.url.pathname === '/services/informatic' ? 'bg-white text-gray-600' : 'text-white'} text-xs lg:text-sm hover:text-gray-600 dark:text-blue-500 dark:border-blue-500`}>Services informatiques</a>
                </li>
                <li class="px-1 justify-self-auto">
                    <a href="/services/innovations" class={`inline-block py-3 font-bold border-transparent hover:bg-white ${$page.url.pathname === '/services/innovations' ? 'bg-white text-gray-600' : 'text-white'} text-xs lg:text-sm hover:text-gray-600 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}>Innovations digitales</a>
                </li>
            </ul>
        </div>
    </section>


    <!-- first desktop -->
    <section data-aos="fade-up" data-aos-duration="500" class="bg-white hidden lg:block mt-44 dark:bg-gray-900">
        <div class="gap-4 items-center px-2 mx-auto max-w-screen-xl xl:gap-32 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="md:mt-0 sm:order-first">
                <div class="py-8 px-4 mx-auto max-w-screen-lg sm:py-2 lg:px-6">
                    <div class="max-w-screen-xl mb-3 lg:mb-4">
                        <h2 class="my-4 py-2 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Services IT managés
                        </h2>
                        <p class="text-gray-800 text-lg dark:text-gray-400">
                            {@html itServices.content}
                        </p>
                    </div>
                </div>
            </div>
            <img
                class="z-[0] hidden md:hidden lg:block lg:absolute ml-[40em] h-[28em] w-[42em] mt-11"
                src="/images/Rectangle 9541.png"
                alt="rectangle">
            <img
                class="z-[0] hidden md:hidden lg:block lg:absolute ml-[58em] mt-[34.8em] w-[30em]"
                src="/images/Vector 8.png"
                alt="rectangle">
            <div style="background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url('/images/contexte-programmation-personne-travaillant-codes-ordinateur_23-2150010125.jpg') no-repeat; background-size: cover;"
                class="lg:z-[1] sm:-z-4 mt-10 flex mx-auto w-full px-1 lg:py-6 py-4 text-center text-white bg-white rounded-3xl border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
                <ul class="max-w-lg space-y-4 text-gray-500 list-inside dark:text-gray-400">
                    {#each itServices.expand.items as item}
                        <button data-popover-target={`popover-description-${item.id}`} data-popover-trigger="hover" data-popover-placement="bottom-end" class="flex items-center">
                            <img
                                class="w-9 h-4 md:w-30 md:h-30 mt-2 mx-3"
                                style="height: 35px; filter: invert(100%);"
                                src="/images/code-sandbox.png"
                                alt=""
                            />
                            <p class="text-md text-white mt-2">{item.label ?? ""}</p>
                        </button>
                        <div data-popover id={`popover-description-${item.id}`} role="tooltip" class="absolute z-10 invisible inline-block text-sm text-white bg-aftgroup transition-opacity duration-300 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                            <div class="p-3 space-y-2">
                                <p>{@html item.hover_content ?? ""}</p>
                            </div>
                            <div data-popper-arrow ></div>
                        </div>
                    {/each}
                </ul>
            </div>
        </div>
    </section>

    <!-- first mobile -->
    <section class="bg-white lg:hidden sm:block mt-16 dark:bg-gray-900">
        <div class="gap-4 items-center max-w-screen-xl xl:gap-32 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="md:mt-0">
                <div class="py-8 px-4 mx-auto max-w-screen-lg sm:py-2 lg:px-6">
                    <div class="max-w-screen-xl mb-3 lg:mb-4">
                        <h2 class="my-4 py-2 text-xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Services IT managés
                        </h2>
                        <p class="text-gray-800 text-sm dark:text-gray-400">
                            {@html itServices.content}
                        </p>
                    </div>
                </div>
            </div>
            <img
                class="z-[0] lg:hidden absolute h-[25em]"
                src="/images/Rectangle 9541.png"
                alt="rectangle">
            <img
                class="z-[1] lg:hidden absolute w-[10em] ml-[10em] mt-[23.6em]"
                src="/images/Vector 8.png"
                alt="rectangle">
            <div style="background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url('/images/contexte-programmation-personne-travaillant-codes-ordinateur_23-2150010125.jpg') no-repeat; background-size: cover;"
                class="z-[1] mt-10 absolute flex mx-auto w-full px-1 lg:py-8 py-4 text-center text-white bg-white rounded-3xl border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
                <ul class="max-w-lg space-y-4 text-gray-500 list-inside dark:text-gray-400">
                    {#each itServices.expand.items as item}
                        <button data-popover-target={`popover-description-mob-${item.id}`} data-popover-trigger="click" data-popover-placement="bottom-end" class="flex items-center">
                            <img
                                class="w-9 h-4 md:w-30 md:h-30 mt-2 mx-3"
                                style="height: 35px; filter: invert(100%);"
                                src="/images/code-sandbox.png"
                                alt=""
                            />
                            <p class="text-sm text-white mt-2">{item.label ?? ""}</p>
                        </button>
                        <div data-popover id={`popover-description-mob-${item.id}`} role="tooltip" class="absolute z-10 invisible inline-block text-sm text-white bg-aftgroup transition-opacity duration-300 rounded-lg shadow-sm opacity-0 w-56 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                            <div class="space-y-2 p-2">
                                <p>{@html item.hover_content}</p>
                            </div>
                            <div data-popper-arrow ></div>
                        </div>
                    {/each}
                </ul>
            </div>
        </div>
    </section>

    <!-- second desktop -->
    <section data-aos="fade-up" data-aos-duration="500" class="bg-white hidden lg:block mt-16 dark:bg-gray-900">
        <div class="gap-4 items-center px-4 mx-auto max-w-screen-xl xl:gap-32 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
                class="rotate-[18deg] z-[0] hidden md:hidden lg:block lg:absolute mr-[60em] h-[23em] w-[35em] mt-11"
                src="/images/Rectangle 9541.png"
                alt="rectangle">
            <img
                class="z-[0] hidden md:hidden lg:block lg:absolute mr-[60em] mt-[36.0em] w-[25em]"
                src="/images/Vector 9.png"
                alt="rectangle">
            <div style="background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url('/images/contexte-programmation-personne-travaillant-codes-ordinateur_23-2150010125.jpg') no-repeat; background-size: cover;"
                class="lg:z-[1] sm:-z-4 mt-10 flex mx-auto w-full px-1 lg:py-10 py-4 text-center text-white bg-white rounded-3xl border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
                <ul class="max-w-lg space-y-4 text-gray-500 list-inside dark:text-gray-400">
                    {#each security.expand.items as item}
                        <button data-popover-target={`popover-description-${item.id}`} data-popover-trigger="hover" data-popover-placement="bottom-end" class="flex items-center">
                            <img
                                class="w-9 h-4 md:w-30 md:h-30 mt-2 mx-3"
                                style="height: 35px; filter: invert(100%);"
                                src="/images/code-sandbox.png"
                                alt=""
                            />
                            <p class="text-md text-white mt-2">{item.label ?? ""}</p>
                        </button>
                        <div data-popover id={`popover-description-${item.id}`} role="tooltip" class="absolute z-10 invisible inline-block text-sm text-white bg-aftgroup transition-opacity duration-300 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                            <div class="p-3 space-y-2">
                                <p>{@html item.hover_content ?? ""}</p>
                            </div>
                            <div data-popper-arrow ></div>
                        </div>
                    {/each}
                </ul>
            </div>
            <div class="md:mt-0">
                <div class="py-8 px-4 mx-auto max-w-screen-lg sm:py-2 lg:px-6">
                    <div class="max-w-screen-xl mb-3 lg:mb-4">
                        <h2
                            class="my-4 py-2 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white"
                        >
                            Sécurité
                        </h2>
                        <p
                            class="text-gray-800 text-lg dark:text-gray-400"
                        >
                            {@html security.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- second mobile -->
    <section class="bg-white mb-[30em] lg:hidden sm:block mt-44 dark:bg-gray-900">
        <div class="gap-1 items-center mx-auto max-w-screen-xl xl:gap-32 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="md:mt-0">
                <div class="py-8 px-4 mx-auto max-w-screen-lg sm:py-2 lg:px-6">
                    <div class="max-w-screen-xl mb-3 lg:mb-4">
                        <h2
                            class="mt-80 text-center py-2 text-xl tracking-tight font-extrabold text-gray-900 dark:text-white"
                        >
                            Securité
                        </h2>
                        <p
                            class="text-gray-800 text-sm dark:text-gray-400"
                        >
                            {@html security.content}
                        </p>
                    </div>
                </div>
            </div>
            <!-- shapes on mobile -->
            <img
                class="z-[0] absolute lg:hidden absolute h-[25em]"
                src="/images/Rectangle 9541.png"
                alt="rectangle">
            <img
                class="z-[0] absolute lg:hidden absolute w-[13em] mr-[18em] mt-[23em]"
                src="/images/Vector 9.png"
                alt="rectangle">
            <div style="background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url('/images/contexte-programmation-personne-travaillant-codes-ordinateur_23-2150010125.jpg') no-repeat; background-size: cover;"
                class="z-[1] absolute mt-10 flex mx-auto w-full lg:py-20 py-4 text-center text-white bg-white rounded-3xl border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
                <ul class="max-w-lg space-y-4 text-gray-500 list-inside dark:text-gray-400">
                    {#each security.expand.items as item}
                        <button data-popover-target={`popover-description-mob-${item.id}`} data-popover-trigger="click" data-popover-placement="bottom-end" class="flex items-center">
                            <img
                                class="w-9 h-4 mt-2 mx-3"
                                style="height: 35px; filter: invert(100%);"
                                src="/images/code-sandbox.png"
                                alt=""
                            />
                            <p class="text-sm text-white mt-2">{item.label ?? ""}</p>
                        </button>
                        <div data-popover id={`popover-description-mob-${item.id}`} role="tooltip" class="absolute z-10 invisible inline-block text-sm text-white bg-aftgroup transition-opacity duration-300 rounded-lg shadow-sm opacity-0 w-56 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                            <div class="space-y-2 p-2">
                                <p>{@html item.hover_content}</p>
                            </div>
                            <div data-popper-arrow ></div>
                        </div>
                    {/each}
                </ul>
            </div>
        </div>
    </section>

    <!-- first desktop -->
    <section data-aos="fade-up" data-aos-duration="500" class="bg-white hidden lg:block mt-32 dark:bg-gray-900">
        <div class="gap-4 items-center px-2 mx-auto max-w-screen-xl xl:gap-32 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="md:mt-0 sm:order-first">
                <div class="py-8 px-4 mx-auto max-w-screen-lg sm:py-2 lg:px-6">
                    <div class="max-w-screen-xl mb-3 lg:mb-4">
                        <h2 class="my-4 py-2 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Equipement IT
                        </h2>
                        <p class="text-gray-800 text-lg dark:text-gray-400">
                            {@html itTooling.content}
                        </p>
                    </div>
                </div>
            </div>
            <img
                class="z-[0] hidden md:hidden lg:block lg:absolute ml-[40em] h-[21em] w-[38em] mt-11"
                src="/images/Rectangle 9541.png"
                alt="rectangle">
            <img
                class="z-[0] hidden md:hidden lg:block lg:absolute ml-[58em] mt-[31.8em] w-[30em]"
                src="/images/Vector 8.png"
                alt="rectangle">
            <div style="background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url('/images/contexte-programmation-personne-travaillant-codes-ordinateur_23-2150010125.jpg') no-repeat; background-size: fit;"
                class="lg:z-[1] sm:-z-4 mt-10 flex mx-auto w-full px-1 lg:py-16 py-4 text-center text-white bg-white rounded-3xl border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
                <ul class="max-w-lg space-y-4 text-gray-500 list-inside dark:text-gray-400">
                    {#each itTooling.expand.items as item}
                        <button data-popover-target={`popover-description-${item.id}`} data-popover-trigger="hover" data-popover-placement="bottom-end" class="flex items-center">
                            <img
                                class="w-9 h-4 md:w-30 md:h-30 mt-2 mx-3"
                                style="height: 35px; filter: invert(100%);"
                                src="/images/code-sandbox.png"
                                alt=""
                            />
                            <p class="text-lg text-white mt-2">{item.label ?? ""}</p>
                        </button>
                        <div data-popover id={`popover-description-${item.id}`} role="tooltip" class="absolute z-10 invisible inline-block text-sm text-white bg-aftgroup transition-opacity duration-300 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                            <div class="p-3 space-y-2">
                                <p class="text-justify">{@html item.hover_content ?? ""}</p>
                            </div>
                            <div data-popper-arrow ></div>
                        </div>
                    {/each}
                </ul>
            </div>
        </div>
    </section>

    <!-- first mobile -->
    <section class="bg-white lg:hidden sm:block dark:bg-gray-900">
        <div class="gap-4 items-center max-w-screen-xl xl:gap-32 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="md:mt-0">
                <div class="py-8 px-4 mx-auto max-w-screen-lg sm:py-2 lg:px-6">
                    <div class="max-w-screen-xl mb-3 lg:mb-4">
                        <h2 class="my-4 py-2 text-xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Equipement IT
                        </h2>
                        <p class="text-gray-800 text-sm dark:text-gray-400">
                            {@html itTooling.content}
                        </p>
                    </div>
                </div>
            </div>
            <img
                class="z-[0] lg:hidden absolute h-[18em] w-[23em]"
                src="/images/Rectangle 9541.png"
                alt="rectangle">
            <img
                class="z-[1] lg:hidden absolute w-[10em] ml-[10em] mt-[17em]"
                src="/images/Vector 8.png"
                alt="rectangle">
            <div style="background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url('/images/contexte-programmation-personne-travaillant-codes-ordinateur_23-2150010125.jpg') no-repeat; background-size: cover;"
                class="z-[1] mt-10 absolute flex mx-auto w-full px-1 lg:py-8 py-4 text-center text-white bg-white rounded-3xl border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
                <ul class="max-w-lg space-y-4 text-gray-500 list-inside dark:text-gray-400">
                    {#each itTooling.expand.items as item}
                        <button data-popover-target={`popover-description-mob-${item.id}`} data-popover-trigger="click" data-popover-placement="bottom-end" class="flex items-center">
                            <img
                                class="w-9 h-4 md:w-30 md:h-30 mt-2 mx-3"
                                style="height: 35px; filter: invert(100%);"
                                src="/images/code-sandbox.png"
                                alt=""
                            />
                            <p class="text-sm text-white mt-2">{item.label ?? ""}</p>
                        </button>
                        <div data-popover id={`popover-description-mob-${item.id}`} role="tooltip" class="absolute z-10 invisible inline-block text-sm text-white bg-aftgroup transition-opacity duration-300 rounded-lg shadow-sm opacity-0 w-56 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                            <div class="space-y-2 p-2">
                                <p>{@html item.hover_content}</p>
                            </div>
                            <div data-popper-arrow ></div>
                        </div>
                    {/each}
                </ul>
            </div>
        </div>
    </section>

    <div class="lg:mb-[5em] mb-[20em]"></div>
</div>
