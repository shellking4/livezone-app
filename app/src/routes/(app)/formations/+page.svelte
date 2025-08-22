<script>
    import { getTrainingBySection } from "$lib/commons/utils";

    let digitalComm = getTrainingBySection("digital_comm");
    let officeSuite = getTrainingBySection("office_suite");
    let commStrategy = getTrainingBySection("com_strategy");
    let ticTools = getTrainingBySection("tic_tools");
</script>

<svelte:head>
    <title>AFT GROUP | SERVICES</title>
</svelte:head>

<div class="px-0">
    <section
        class="bg-cover bg-center pb-2 lg:pb-4 bg-no-repeat bg-[url('/images/homme-africain-dans-costume-noir-homme-ecrivant-verre_1157-45582.jpg')] bg-gray-700 bg-blend-multiply">
        <div data-aos="fade-up" data-aos-duration="1000"
            class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
        >
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1
                    class="max-w-2xl mb-4 text-white text-4xl font-extrabold tracking-normal leading-none md:text-5xl xl:text-5xl dark:text-white"
                >
                    Prêt pour une nouvelle <br /> aventure ?
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
    </section>

    <section class="bg-white mt-8 text-center dark:bg-gray-900">
        <div class="py-2 px-3 mx-auto max-w-screen-lg sm:py-8 lg:px-6">
            <div class="max-w-screen-lg mb-3 lg:mb-4">
                <h2 class="mb-2 flex justify-center lg:text-4xl text-lg tracking-tight font-extrabold text-gray-900 dark:text-white">
                    <img class="px-2 lg:h-8 h-6" src="/images/Group 162578.png" alt="group buffer" />    
                    <p>Nos formations</p>
                </h2>
                <p class="text-gray-800 lg:text-lg text-sm dark:text-gray-400">
                    Parcourez notre large gamme de formations. Passez de zero en professionnel en seulement quelques jours avec notre excellent style de formation.
                </p>
            </div>
        </div>
    </section>


    <!-- first desktop -->
    <section data-aos="fade-up" data-aos-duration="1000" class="bg-white hidden lg:block mt-2 dark:bg-gray-900">
        <div class="gap-4 items-center px-2 mx-auto max-w-screen-xl xl:gap-32 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="md:mt-0 sm:order-first">
                <div class="py-8 px-4 mx-auto max-w-screen-lg sm:py-2 lg:px-6">
                    <div class="max-w-screen-xl mb-3 lg:mb-4">
                        <h2 class="my-4 py-2 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Marketing et Communication Digitale
                        </h2>
                        <p class="text-gray-800 text-lg dark:text-gray-400">
                            {@html digitalComm.content}
                        </p>
                    </div>
                </div>
            </div>
            <img
                class="z-[0] rotate-[12deg] hidden md:hidden lg:block lg:absolute ml-[40em] h-[30em] w-[32em] mt-11"
                src="/images/Rectangle 9541.png"
                alt="rectangle">
            <img
                class="w-[30em] z-[1] ml-[1em] mt-[5em] rounded-3xl"
                style="height: 400px"
                src="/images/marketing-concept.png"
                alt="dashboard"
            />
        </div>
    </section>

    <!-- first mobile -->
    <section class="bg-white lg:hidden sm:block mb-[24em] dark:bg-gray-900">
        <div class="gap-4 items-center px-2 mx-auto max-w-screen-xl xl:gap-32 md:grid md:grid-cols-2 sm:py-8 lg:px-6">
            <div class="md:mt-0 sm:order-first">
                <div class="py-1 px-4 mx-auto max-w-screen-lg lg:px-6">
                    <div class="max-w-screen-xl mb-3 lg:mb-4">
                        <h2 class="my-4 py-2 text-lg text-center tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Marketing et Communication Digitale
                        </h2>
                        <p class="text-gray-800 text-sm dark:text-gray-400">
                            {@html digitalComm.content}
                        </p>
                    </div>
                </div>
            </div>
            <div class="box-content">
                <img
                    class="w-full px-2 z-[1] ml-[1em] mt-[1.1em] absolute rounded-3xl"
                    style="height: 310px; width: 310px;"
                    src="/images/formation_image_1.png"
                    alt="dashboard"
                />
            </div>
        </div>
    </section>

    <!-- second desktop -->
    <section data-aos="fade-up" data-aos-duration="1000" class="bg-aftgroupdark hidden lg:block mt-8 dark:bg-gray-900">
        <div class="gap-4 items-center px-4 mx-auto max-w-screen-xl xl:gap-32 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
                class="rotate-[11.3deg] z-[0] hidden md:hidden lg:block lg:absolute ml-[2em] mr-[60em] h-[30em] w-[32em] mt-12"
                src="/images/Rectangle 9541.png"
                alt="rectangle">
            <img
                class="w-[30em] z-[1] ml-[1em] mt-[5em] rounded-3xl"
                style="height: 400px"
                src="/images/marketing-concept.png"
                alt="dashboard"
            />
            <div class="md:mt-0">
                <div class="py-8 px-4 mx-auto max-w-screen-lg sm:py-2 lg:px-6">
                    <div class="max-w-screen-xl mb-3 lg:mb-4">
                        <h2
                            class="my-4 py-2 text-3xl tracking-tight font-extrabold text-white dark:text-white"
                        >
                            Suites Bureautiques
                        </h2>
                        <p class="text-gray-300 text-lg dark:text-gray-400">
                            {@html officeSuite.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- second mobile -->
    <section class="bg-aftgroupdark lg:hidden sm:block dark:bg-gray-900">
        <div class="gap-4 items-center px-4 pb-[20em] mx-auto max-w-screen-xl xl:gap-32 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="md:mt-0">
                <div class="py-8 mx-auto max-w-screen-lg sm:py-2 lg:px-6">
                    <div class="max-w-screen-xl mb-3 lg:mb-4">
                        <h2
                            class="my-4 py-2 text-center text-lg tracking-tight font-extrabold text-white dark:text-white"
                        >
                            Suites Bureautiques
                        </h2>
                        <p class="text-gray-300 text-sm dark:text-gray-400">
                            {@html officeSuite.content}
                        </p>
                    </div>
                </div>
            </div>
            <img
                class="w-full ml-3 absolute rounded-3xl"
                style="height: 310px; width: 330px;"
                src="/images/formation_image_2.png"
                alt="dashboard"
            />
        </div>
    </section>

    <!-- first desktop -->
    <section data-aos="fade-up" data-aos-duration="1000" class="bg-white hidden lg:block mt-2 dark:bg-gray-900">
        <div class="gap-4 items-center px-2 mx-auto max-w-screen-xl xl:gap-32 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="md:mt-0 sm:order-first">
                <div class="py-8 px-4 mx-auto max-w-screen-lg sm:py-2 lg:px-6">
                    <div class="max-w-screen-xl mb-3 lg:mb-4">
                        <h2 class="my-4 py-2 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Stratégies de Communication
                        </h2>
                        <p class="text-gray-800 text-lg dark:text-gray-400">
                            {@html commStrategy.content}
                        </p>
                    </div>
                </div>
            </div>
            <img
                class="z-[0] rotate-[12deg] hidden md:hidden lg:block lg:absolute ml-[40em] h-[30em] w-[32em] mt-11"
                src="/images/Rectangle 9541.png"
                alt="rectangle">
            <img
                class="w-[30em] z-[1] ml-[1em] mt-[5em] rounded-3xl"
                style="height: 400px"
                src="/images/marketing-concept.png"
                alt="dashboard"
            />
        </div>
    </section>

    <!-- first mobile -->
    <section class="bg-white lg:hidden sm:block mb-[22em] dark:bg-gray-900">
        <div class="gap-4 items-center px-2 mx-auto max-w-screen-xl xl:gap-32 md:grid md:grid-cols-2 sm:py-8 lg:px-6">
            <div class="md:mt-0 sm:order-first">
                <div class="py-1 px-4 mx-auto max-w-screen-lg lg:px-6">
                    <div class="max-w-screen-xl mb-3 lg:mb-4">
                        <h2 class="my-4 py-2 text-lg text-center tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Stratégies de Communication
                        </h2>
                        <p class="text-gray-800 text-sm dark:text-gray-400">
                            {@html commStrategy.content}
                        </p>
                    </div>
                </div>
            </div>
            <div class="box-content">
                <img
                    class="w-full px-2 z-[1] ml-[1.2em] mt-[1.1em] absolute rounded-3xl"
                    style="height: 310px; width: 310px;"
                    src="/images/formation_image_1.png"
                    alt="dashboard"
                />
            </div>
        </div>
    </section>

    <!-- second desktop -->
    <section data-aos="fade-up" data-aos-duration="1000" class="bg-aftgroupdark hidden lg:block mt-8 dark:bg-gray-900">
        <div class="gap-4 items-center px-4 mx-auto max-w-screen-xl xl:gap-32 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
                class="rotate-[11.3deg] z-[0] hidden md:hidden lg:block lg:absolute ml-[2em] mr-[60em] h-[30em] w-[32em] mt-12"
                src="/images/Rectangle 9541.png"
                alt="rectangle">
            <img
                class="w-[30em] z-[1] ml-[1em] mt-[5em] rounded-3xl"
                style="height: 400px"
                src="/images/marketing-concept.png"
                alt="dashboard"
            />
            <div class="md:mt-0">
                <div class="py-8 px-4 mx-auto max-w-screen-lg sm:py-2 lg:px-6">
                    <div class="max-w-screen-xl mb-3 lg:mb-4">
                        <h2
                            class="my-4 py-2 text-3xl tracking-tight font-extrabold text-white dark:text-white"
                        >
                            Solutions technologiques et outils TIC
                        </h2>
                        <p class="text-gray-300 text-justify text-lg dark:text-gray-400">
                            {@html ticTools.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- second mobile -->
    <section class="bg-aftgroupdark lg:hidden sm:block mb-[2em] dark:bg-gray-900">
        <div class="gap-4 items-center px-4 pb-[20em] mx-auto max-w-screen-xl xl:gap-32 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="md:mt-0">
                <div class="py-8 mx-auto max-w-screen-lg lg:px-6">
                    <div class="max-w-screen-xl mb-3 lg:mb-4">
                        <h2 class="my-4 py-2 text-center text-lg tracking-tight font-extrabold text-white dark:text-white">
                            Solutions technologiques et outils TIC
                        </h2>
                        <p class="text-gray-300 text-justify text-sm dark:text-gray-400">
                            {@html ticTools.content}
                        </p>
                    </div>
                </div>
            </div>
            <img
                class="w-full ml-3 absolute rounded-3xl"
                style="height: 310px; width: 330px;"
                src="/images/formation_image_2.png"
                alt="dashboard"
            />
        </div>
    </section>

    <section data-aos="fade-right" data-aos-duration="800" class="bg-white mt-8 text-center dark:bg-gray-900">
        <div class="py-2 px-4 mx-auto max-w-screen-lg sm:py-8 lg:px-6">
            <div class="max-w-screen-lg mb-3 lg:mb-4">
                <h2 class="mb-4 flex justify-center lg:text-4xl text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    <p>Vous avez besoin d'autres informations ?</p>
                </h2>
                <div class="flex justify-center mt-4">
                    <div class="flex">
                        <a href="/#contact_section" class="flex text-gray-800 border-2 border-aftgroup hover:bg-aftgroup hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-md px-16 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Contactez nous</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="mb-4"></div>
</div>
