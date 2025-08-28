<script lang="ts">
    import "@fontsource/poppins";
    import "@fontsource/poppins/400.css";
    import "@fontsource/poppins/400-italic.css";
    import { afterNavigate } from "$app/navigation";
    import { page } from '$app/stores';
    import { Dropdown } from "flowbite";
    

    afterNavigate(() => {
        const mobileMenu = document.querySelector('[id="navbar-dropdown"]');
        const dropDown: any = document.querySelector('[id="dropdownNavbar2"]');
        const dropDownToggler: any = document.querySelector('[data-dropdown-toggle="dropdownNavbar2"]');
        const dropdown = new Dropdown(dropDown, dropDownToggler);

        if (!mobileMenu?.classList.contains("hidden")) {
            mobileMenu?.classList.remove("hidden");
            mobileMenu?.classList.add("hidden");
        }
        dropdown.hide();
    });
</script>

<header class="sticky text-2xl dark:bg-gray-900 top-0 z-[800] backdrop-filter backdrop-blur">
    <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div
            class="max-w-screen-xl lg:order-2 flex flex-wrap items-center justify-between mx-auto p-4"
        >
            <a href="/" class="flex items-center">
                <img
                    src="/images/livezone-logo.svg"
                    class="h-64 scale-72 mr-3"
                    alt="Aft Logo"
                    style="height: 2.5em;"
                />
            </a>
            <div class="hidden lg:block flex items-center lg:order-2">
                <a href="/#contact_section" class="relative inline-flex items-center mt-2 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-aftgroup to-aftgroup group-hover:from-aftgroup group-hover:to-aftgroup hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Faire votre réservation
                    </span>
                </a>
            </div>
            <button
                aria-expanded="false" 
                data-dropdown-toggle="navbar-dropdown"
                type="button"
                class="inline-flex items-center w-10 h-10 justify-center text-blue-800 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-dropdown"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="w-8 h-8"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>
            <!-- mobile menu -->
            <div class="hidden w-50 md:w-full" id="navbar-dropdown">
                <ul class="grid grid-cols-1 divide-y divide-gray-400 flex-col text-sm font-xs md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a
                            href="/#services_section"
                            class={`${$page.url.pathname.includes('/services') ? 'bg-aftgroup text-white' : 'text-gray-400'} block py-2 pl-3 pr-4 text-center text-gray-400 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent`}
                            aria-current="page">Nos services</a
                        >
                    </li>
                    <li>
                        <a
                            href="/#aboutus_section"
                            class={`block text-center py-2 pl-3 pr-4 text-gray-400 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent`}
                            >Qui sommes-nous
                        </a
                        >
                    </li>
                    <li>
                        <a
                            href="/#services_section"
                            class={`${$page.url.pathname.includes('/formations') ? 'bg-aftgroup text-white' : 'text-gray-400'} block py-2 text-center pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                            >Nos formations</a
                        >
                    </li>
                    <li>
                        <a
                            href="/#products_section"
                            class={`block py-2 text-center pl-3 pr-4 text-gray-400 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent`}
                            >Nos projets / produits
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#whychooseus_section"
                            class={`block py-2 text-center pl-3 pr-4 text-gray-400 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent`}
                            >Pourquoi nous choisir</a
                        >
                    </li>
                </ul>
            </div>
            <div class="hidden w-full  md:block md:w-auto" id="navbar-dropdown">
                <ul class="flex justify-end divide-y divide-gray-100 flex-col text-[20px] font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a
                            href="/#services_section"
                            class={`${$page.url.pathname.includes('/services') ? 'text-[#3561ab]' : 'text-gray-900'} block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent bg-blue-700 md:hover:text-aftgroup text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent`}
                            >Nos services</a
                        >
                    </li>
                    <li>
                        <a href="/#formations_section"
                            class={`${$page.url.pathname.includes('/formations') ? 'text-[#3561ab]' : 'text-gray-900'} block py-2 pl-3 pr-4 text-gray-900 md:hover:text-aftgroup rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-text-aftgroup md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>
                            Nos formations
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>

<style>
   
</style>
